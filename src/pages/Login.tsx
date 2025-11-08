import { useState } from 'react';
import { useAppStore, getAllAccounts } from '@/store';

export default function Login() {
  const { login } = useAppStore();
  const [username, setUsername] = useState('');
  const [accounts] = useState(getAllAccounts());

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
      // login 函数内部会调用 window.location.reload()，不需要手动导航
    }
  };

  const handleQuickLogin = (accountUsername: string) => {
    login(accountUsername);
    // login 函数内部会调用 window.location.reload()，不需要手动导航
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

        {/* Login Form */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-xl p-8 mb-6">
          <form onSubmit={handleLogin}>
            <div className="mb-6">
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
              />
              <p className="mt-2 text-xs text-subtext-light dark:text-subtext-dark">
                输入任意用户名即可登录，如果是新用户将自动创建账号
              </p>
            </div>

            <button
              type="submit"
              disabled={!username.trim()}
              className="w-full h-12 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/40 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              登录 / 注册
            </button>
          </form>
        </div>

        {/* Quick Login - Existing Accounts */}
        {accounts.length > 0 && (
          <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-xl p-6">
            <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-4">
              快速登录
            </h3>
            <div className="space-y-2">
              {accounts.map((account) => (
                <button
                  key={account.username}
                  onClick={() => handleQuickLogin(account.username)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-background-light dark:bg-background-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors text-left"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-text-light dark:text-text-dark">
                      {account.displayName}
                    </p>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark">
                      上次登录: {new Date(account.lastLoginAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark">
                    chevron_right
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-subtext-light dark:text-subtext-dark mt-6">
          多账号支持，每个账号的学习数据独立保存
        </p>
      </div>
    </div>
  );
}
