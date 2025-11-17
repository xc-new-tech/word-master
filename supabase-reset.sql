-- WordMaster 数据库重置脚本
-- ⚠️ 警告：此脚本会删除所有现有数据！
-- 在 Supabase SQL Editor 中执行此脚本

-- ==================== 第一步：清理现有数据库 ====================

-- 先删除表（CASCADE 会自动删除相关的策略、触发器、索引等）
DROP TABLE IF EXISTS public.user_data CASCADE;
DROP TABLE IF EXISTS public.user_profiles CASCADE;

-- 删除函数
DROP FUNCTION IF EXISTS get_email_by_username(TEXT);
DROP FUNCTION IF EXISTS get_user_stats(UUID);
DROP FUNCTION IF EXISTS update_updated_at_column();

-- ==================== 第二步：创建新数据库结构 ====================

-- 创建通用触发器函数：自动更新 updated_at 字段
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 创建 user_profiles 表，存储用户名和邮箱的映射（用于用户名登录）
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id),
  UNIQUE(username)
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_user_profiles_username ON public.user_profiles(username);
CREATE INDEX IF NOT EXISTS idx_user_profiles_user_id ON public.user_profiles(user_id);

-- 启用行级安全策略 (RLS)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 创建 RLS 策略：任何人都可以通过用户名查询邮箱（用于登录）
CREATE POLICY "Anyone can view usernames for login"
  ON public.user_profiles
  FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON public.user_profiles
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON public.user_profiles
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 创建触发器：自动更新 updated_at 字段
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 创建函数：通过用户名获取邮箱（用于登录）
CREATE OR REPLACE FUNCTION get_email_by_username(p_username TEXT)
RETURNS TEXT AS $$
DECLARE
  user_email TEXT;
BEGIN
  SELECT email INTO user_email
  FROM public.user_profiles
  WHERE username = p_username;

  RETURN user_email;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 添加注释
COMMENT ON TABLE public.user_profiles IS '存储用户名和邮箱的映射，支持用户名登录';
COMMENT ON COLUMN public.user_profiles.username IS '用户名（唯一）';
COMMENT ON COLUMN public.user_profiles.email IS '用户邮箱';

-- 创建 user_data 表，存储用户的学习数据
CREATE TABLE IF NOT EXISTS public.user_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_profile JSONB NOT NULL DEFAULT '{}'::jsonb,
  learning_records JSONB NOT NULL DEFAULT '{}'::jsonb,
  statistics JSONB NOT NULL DEFAULT '{}'::jsonb,
  sequential_progress INTEGER NOT NULL DEFAULT 0,
  last_synced_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_user_data_user_id ON public.user_data(user_id);
CREATE INDEX IF NOT EXISTS idx_user_data_updated_at ON public.user_data(updated_at);

-- 启用行级安全策略 (RLS)
ALTER TABLE public.user_data ENABLE ROW LEVEL SECURITY;

-- 创建 RLS 策略：用户只能访问自己的数据
CREATE POLICY "Users can view their own data"
  ON public.user_data
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own data"
  ON public.user_data
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own data"
  ON public.user_data
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own data"
  ON public.user_data
  FOR DELETE
  USING (auth.uid() = user_id);

-- 创建触发器：自动更新 updated_at 字段
CREATE TRIGGER update_user_data_updated_at
  BEFORE UPDATE ON public.user_data
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 创建函数：获取用户统计信息
CREATE OR REPLACE FUNCTION get_user_stats(user_uuid UUID)
RETURNS TABLE (
  total_words INTEGER,
  mastered_words INTEGER,
  last_sync TIMESTAMPTZ
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    (statistics->>'totalWords')::INTEGER as total_words,
    (statistics->>'masteredWords')::INTEGER as mastered_words,
    last_synced_at as last_sync
  FROM public.user_data
  WHERE user_id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 添加注释
COMMENT ON TABLE public.user_data IS '存储用户的学习数据，包括配置、学习记录和统计信息';
COMMENT ON COLUMN public.user_data.user_profile IS '用户配置信息（年级、每日目标等）';
COMMENT ON COLUMN public.user_data.learning_records IS '学习记录数据，key为单词ID';
COMMENT ON COLUMN public.user_data.statistics IS '统计数据（总单词数、掌握数等）';
COMMENT ON COLUMN public.user_data.sequential_progress IS '顺序学习进度';
COMMENT ON COLUMN public.user_data.last_synced_at IS '最后同步时间';

-- ==================== 完成 ====================
-- 数据库重建完成！
-- 现在可以开始使用新的用户名登录系统了。
