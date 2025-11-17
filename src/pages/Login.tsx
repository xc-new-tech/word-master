import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store';
import { authService, handleSupabaseError } from '@/services/supabase';
import { useToast } from '@/hooks/useToast';

export default function Login() {
  const navigate = useNavigate();
  const { currentUser } = useAppStore();
  const { success, error: showError, ToastComponent } = useToast();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  // 切换登录/注册时清空表单
  const handleToggleMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setUsername('');
  };

  // 如果用户已经登录，重定向到主页
  useEffect(() => {
    if (currentUser) {
      navigate('/', { replace: true });
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // 登录（使用用户名）
        if (!username.trim()) {
          showError('请输入用户名');
          setLoading(false);
          return;
        }

        const { user } = await authService.signIn(username.trim(), password);
        if (user) {
          success('登录成功！');
          // 登录成功后，App组件会监听到认证状态变化并自动加载数据
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } else {
        // 注册（需要用户名、邮箱和密码）
        if (!username.trim()) {
          showError('请输入用户名');
          setLoading(false);
          return;
        }

        if (!email.trim()) {
          showError('请输入邮箱');
          setLoading(false);
          return;
        }

        await authService.signUp(email.trim(), password, username.trim());
        success('注册成功！请查收邮箱验证链接。');
        handleToggleMode();
      }
    } catch (err: any) {
      console.error('认证错误:', err);
      showError(handleSupabaseError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 via-background-light to-background-light dark:from-primary/5 dark:to-background-dark px-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-4">
            <span className="material-symbols-outlined text-5xl text-white">school</span>
          </div>
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
            WordMaster
          </h1>
          <p className="text-subtext-light dark:text-subtext-dark">
            单词大师学习系统
          </p>
        </div>

        {/* Login/Register Form */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex mb-6 bg-background-light dark:bg-background-dark rounded-lg p-1">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                isLogin
                  ? 'bg-primary text-white'
                  : 'text-text-light dark:text-text-dark hover:bg-primary/10'
              }`}
            >
              登录
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                !isLogin
                  ? 'bg-primary text-white'
                  : 'text-text-light dark:text-text-dark hover:bg-primary/10'
              }`}
            >
              注册
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-bold text-text-light dark:text-text-dark mb-2"
              >
                用户名
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="请输入用户名"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:border-primary focus:outline-none transition-colors"
                autoFocus
                required
              />
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-text-light dark:text-text-dark mb-2"
                >
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="请输入邮箱（用于找回密码）"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
            )}

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-text-light dark:text-text-dark mb-2"
              >
                密码
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码（至少6个字符）"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:border-primary focus:outline-none transition-colors"
                required
                minLength={6}
              />
              {!isLogin && (
                <p className="mt-2 text-xs text-subtext-light dark:text-subtext-dark">
                  密码至少需要6个字符
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !username.trim() || !password.trim() || (!isLogin && !email.trim())}
              className="w-full h-12 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/40 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {isLogin ? '登录' : '注册'}
            </button>
          </form>

          {isLogin && (
            <div className="mt-4 text-center">
              <button
                type="button"
                className="text-sm text-primary hover:underline"
                onClick={() => showError('密码重置功能即将推出')}
              >
                忘记密码？
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-subtext-light dark:text-subtext-dark">
          {isLogin ? '还没有账号？' : '已有账号？'}
          <button
            type="button"
            onClick={handleToggleMode}
            className="text-primary hover:underline ml-1"
          >
            {isLogin ? '立即注册' : '立即登录'}
          </button>
        </p>

        <p className="text-center text-xs text-subtext-light dark:text-subtext-dark mt-2">
          您的学习数据将安全地同步到云端
        </p>
      </div>
      {ToastComponent}
    </div>
  );
}
