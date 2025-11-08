import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppStore } from '@/store';

// 页面组件
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import ModeSelection from '@/pages/ModeSelection';
import Learning from '@/pages/Learning';
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

// 路由保护组件
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAppStore();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function App() {
  const { theme } = useAppStore();

  useEffect(() => {
    // 应用主题到html元素
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router basename="/word-master">
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Routes>
          {/* 登录页面 - 不需要保护 */}
          <Route path="/login" element={<Login />} />

          {/* 受保护的路由 */}
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          {/* 学习模块 */}
          <Route path="/mode-selection" element={<ProtectedRoute><ModeSelection /></ProtectedRoute>} />
          <Route path="/learning" element={<ProtectedRoute><Learning /></ProtectedRoute>} />
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
  );
}

export default App;
