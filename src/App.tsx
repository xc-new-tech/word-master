import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store';
import { authService } from '@/services/supabase';
import { useAutoSync } from '@/hooks/useAutoSync';
import ErrorBoundary from '@/components/ErrorBoundary';

// 页面组件
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import ModeSelection from '@/pages/ModeSelection';
import Learning from '@/pages/Learning';
import Review from '@/pages/Review';
import WordDetail from '@/pages/WordDetail';
import DictationModeSelection from '@/pages/DictationModeSelection';
import DictationEnToCn from '@/pages/DictationEnToCn';
import DictationCnToEn from '@/pages/DictationCnToEn';
import DictationResult from '@/pages/DictationResult';
import Mistakes from '@/pages/Mistakes';
import VocabularyLibrary from '@/pages/VocabularyLibrary';
import Profile from '@/pages/Profile';
import Achievements from '@/pages/Achievements';
import Settings from '@/pages/Settings';

// 处理 GitHub Pages 404 重定向
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem('redirect');
      // 从完整 URL 中提取路径
      const url = new URL(redirect);
      const path = url.pathname.replace('/word-master', '') || '/';
      navigate(path + url.search + url.hash, { replace: true });
    }
  }, [navigate]);

  return null;
}

// 路由保护组件
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAppStore();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function App() {
  const { theme, setCurrentUser, syncFromCloud } = useAppStore();

  // 启用自动同步
  useAutoSync();

  // 监听认证状态
  useEffect(() => {
    const { data: { subscription } } = authService.onAuthStateChange(async (user) => {
      if (user) {
        console.log('用户已登录:', user.id);
        setCurrentUser(user.id);

        // 登录后从云端同步数据
        try {
          await syncFromCloud();
        } catch (error) {
          console.error('登录后同步失败:', error);
        }
      } else {
        console.log('用户未登录');
        setCurrentUser(null);
      }
    });

    // 组件卸载时取消订阅
    return () => {
      subscription.unsubscribe();
    };
  }, [setCurrentUser, syncFromCloud]);

  // 应用主题
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ErrorBoundary>
      <Router basename="/word-master">
        <RedirectHandler />
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
          <Routes>
            {/* 登录页面 - 不需要保护 */}
            <Route path="/login" element={<Login />} />

            {/* 受保护的路由 */}
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

            {/* 学习模块 */}
            <Route path="/mode-selection" element={<ProtectedRoute><ModeSelection /></ProtectedRoute>} />
            <Route path="/learning" element={<ProtectedRoute><Learning /></ProtectedRoute>} />
            <Route path="/review" element={<ProtectedRoute><Review /></ProtectedRoute>} />
            <Route path="/word/:wordId" element={<ProtectedRoute><WordDetail /></ProtectedRoute>} />

            {/* 听写模块 */}
            <Route path="/dictation" element={<ProtectedRoute><DictationModeSelection /></ProtectedRoute>} />
            <Route path="/dictation/en-to-cn" element={<ProtectedRoute><DictationEnToCn /></ProtectedRoute>} />
            <Route path="/dictation/cn-to-en" element={<ProtectedRoute><DictationCnToEn /></ProtectedRoute>} />
            <Route path="/dictation/result" element={<ProtectedRoute><DictationResult /></ProtectedRoute>} />

            {/* 其他功能 */}
            <Route path="/mistakes" element={<ProtectedRoute><Mistakes /></ProtectedRoute>} />
            <Route path="/vocabulary" element={<ProtectedRoute><VocabularyLibrary /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/achievements" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
