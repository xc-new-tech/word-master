import { createClient, AuthError, User } from '@supabase/supabase-js';
import { LearningRecord, UserProfile, Statistics } from '@/types';
import { getAuthRedirectUrl } from '@/utils/env';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// 数据库类型定义
export interface UserData {
  id: string;
  email: string;
  username: string;
  created_at: string;
  updated_at: string;
}

export interface UserDataRecord {
  id: string;
  user_id: string;
  user_profile: UserProfile;
  learning_records: Record<string, LearningRecord>;
  statistics: Statistics;
  sequential_progress: number;
  last_synced_at: string;
  created_at: string;
  updated_at: string;
}

export interface UserProfileRecord {
  id: string;
  user_id: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

// 认证相关
export const authService = {
  // 注册新用户
  async signUp(email: string, password: string, username: string) {
    // 先检查用户名是否已存在
    const { data: existingProfile } = await supabase
      .from('user_profiles')
      .select('username')
      .eq('username', username)
      .single();

    if (existingProfile) {
      throw new Error('用户名已被使用');
    }

    // 创建 Auth 用户
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
        emailRedirectTo: getAuthRedirectUrl(),
      },
    });

    if (error) throw error;

    // 如果注册成功，创建 user_profile 记录
    if (data.user) {
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          user_id: data.user.id,
          username,
          email,
        });

      if (profileError) {
        console.error('创建用户配置失败:', profileError);
        // 注意：这里不抛出错误，因为 Auth 用户已经创建成功了
      }
    }

    return data;
  },

  // 登录（支持用户名）
  async signIn(username: string, password: string) {
    // 先通过用户名查询邮箱
    const { data: profileData } = await supabase
      .from('user_profiles')
      .select('email')
      .eq('username', username)
      .single();

    if (!profileData) {
      throw new Error('用户名不存在');
    }

    // 使用邮箱登录
    const { data, error } = await supabase.auth.signInWithPassword({
      email: profileData.email,
      password,
    });

    if (error) throw error;
    return data;
  },

  // 退出登录
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  // 获取当前用户
  async getCurrentUser(): Promise<User | null> {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  // 监听认证状态变化
  onAuthStateChange(callback: (user: User | null) => void) {
    return supabase.auth.onAuthStateChange((_event, session) => {
      callback(session?.user ?? null);
    });
  },
};

// 数据同步相关
export const dataService = {
  // 上传用户数据到云端
  async uploadUserData(
    userId: string,
    userProfile: UserProfile,
    learningRecords: Record<string, LearningRecord>,
    statistics: Statistics,
    sequentialProgress: number
  ) {
    const { data, error } = await supabase
      .from('user_data')
      .upsert({
        user_id: userId,
        user_profile: userProfile,
        learning_records: learningRecords,
        statistics: statistics,
        sequential_progress: sequentialProgress,
        last_synced_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // 从云端下载用户数据
  async downloadUserData(userId: string): Promise<UserDataRecord | null> {
    const { data, error } = await supabase
      .from('user_data')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      // 如果是找不到记录，返回null而不是抛出错误
      if (error.code === 'PGRST116') {
        return null;
      }
      throw error;
    }

    return data;
  },

  // 获取最后同步时间
  async getLastSyncTime(userId: string): Promise<Date | null> {
    const { data, error } = await supabase
      .from('user_data')
      .select('last_synced_at')
      .eq('user_id', userId)
      .single();

    if (error || !data) return null;
    return new Date(data.last_synced_at);
  },
};

// 辅助函数：处理Supabase错误
export function handleSupabaseError(error: AuthError | Error): string {
  if ('message' in error) {
    // 翻译常见错误消息
    const errorMessages: Record<string, string> = {
      'Invalid login credentials': '用户名或密码错误',
      'Email not confirmed': '请先验证您的邮箱',
      'User already registered': '该邮箱已被注册',
      'Password should be at least 6 characters': '密码至少需要6个字符',
      '用户名已被使用': '该用户名已被使用，请换一个',
      '用户名不存在': '用户名不存在，请检查后重试',
    };

    return errorMessages[error.message] || error.message;
  }
  return '发生未知错误';
}
