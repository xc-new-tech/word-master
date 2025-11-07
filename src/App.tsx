import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppStore } from '@/store';

// 页面组件
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
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Routes>
          {/* 主页 */}
          <Route path="/" element={<Dashboard />} />

          {/* 学习模块 */}
          <Route path="/mode-selection" element={<ModeSelection />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/word/:wordId" element={<WordDetail />} />

          {/* 听写模块 */}
          <Route path="/dictation" element={<DictationModeSelection />} />
          <Route path="/dictation/en-to-cn" element={<DictationEnToCn />} />
          <Route path="/dictation/cn-to-en" element={<DictationCnToEn />} />
          <Route path="/dictation/result" element={<DictationResult />} />

          {/* 其他功能 */}
          <Route path="/mistakes" element={<Mistakes />} />
          <Route path="/vocabulary" element={<VocabularyLibrary />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
