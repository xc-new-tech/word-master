import { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVirtualizer } from '@tanstack/react-virtual';
import TopBar from '@/components/TopBar';
import Card from '@/components/Card';
import BottomNav from '@/components/BottomNav';
import { sampleWords } from '@/data/words';
import { useAppStore } from '@/store';
import { speakWord, isSpeechSupported } from '@/utils/speechSynthesis';

type SortOption = 'alphabet' | 'frequency' | 'level';

export default function VocabularyLibrary() {
  const navigate = useNavigate();
  const { learningRecords } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedFrequency, setSelectedFrequency] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('alphabet');

  // 虚拟滚动父容器ref
  const parentRef = useRef<HTMLDivElement>(null);

  const levels = [
    { id: 'all', name: '全部' },
    { id: '初一', name: '初一' },
    { id: '初二', name: '初二' },
    { id: '初三', name: '初三' },
  ];

  const frequencies = [
    { id: 'all', name: '全部频率' },
    { id: '高频', name: '高频' },
    { id: '中频', name: '中频' },
    { id: '低频', name: '低频' },
  ];

  // 计算统计数据
  const stats = useMemo(() => {
    const totalWords = sampleWords.length;
    const masteredWords = Object.values(learningRecords).filter(
      (record) => record.mastery >= 80
    ).length;
    const learningWords = Object.values(learningRecords).filter(
      (record) => record.mastery > 0 && record.mastery < 80
    ).length;
    return { totalWords, masteredWords, learningWords };
  }, [learningRecords]);

  // 筛选和排序单词
  const filteredWords = useMemo(() => {
    let words = sampleWords.filter((word) => {
      const matchesSearch =
        word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.data.meanings.some((m) => m.includes(searchQuery));
      const matchesLevel = selectedLevel === 'all' || word.level === selectedLevel;
      const matchesFrequency = selectedFrequency === 'all' || word.frequency === selectedFrequency;
      return matchesSearch && matchesLevel && matchesFrequency;
    });

    // 排序
    words.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.word.localeCompare(b.word);
        case 'frequency':
          const freqOrder = { '高频': 3, '中频': 2, '低频': 1 };
          return freqOrder[b.frequency] - freqOrder[a.frequency];
        case 'level':
          const levelOrder = { '初一': 1, '初二': 2, '初三': 3 };
          return levelOrder[a.level] - levelOrder[b.level];
        default:
          return 0;
      }
    });

    return words;
  }, [searchQuery, selectedLevel, selectedFrequency, sortBy]);

  // 虚拟滚动配置
  const virtualizer = useVirtualizer({
    count: filteredWords.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 120, // 每个单词卡片高度约120px
    overscan: 5, // 预渲染5个额外项
  });

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col pb-20">
      <TopBar title="词库浏览" showBack={false} />

      <main className="flex-1 space-y-4 p-4">
        {/* 搜索框 */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索单词或释义..."
            className="w-full h-12 pl-12 pr-10 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:border-primary focus:outline-none transition-colors"
          />
          <span className="material-symbols-outlined absolute left-4 top-3 text-subtext-light dark:text-subtext-dark">
            search
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-text-dark transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          )}
        </div>

        {/* 筛选选项 */}
        <div className="space-y-2">
          {/* 级别筛选 */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors font-chinese ${
                  selectedLevel === level.id
                    ? 'bg-primary text-white'
                    : 'bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary'
                }`}
              >
                {level.name}
              </button>
            ))}
          </div>

          {/* 频率筛选 + 排序 */}
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 overflow-x-auto pb-2 flex-1">
              {frequencies.map((freq) => (
                <button
                  key={freq.id}
                  onClick={() => setSelectedFrequency(freq.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors font-chinese ${
                    selectedFrequency === freq.id
                      ? 'bg-success text-white'
                      : 'bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-success'
                  }`}
                >
                  {freq.name}
                </button>
              ))}
            </div>

            {/* 排序下拉 */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark focus:border-primary focus:outline-none font-chinese"
            >
              <option value="alphabet">A-Z</option>
              <option value="frequency">频率</option>
              <option value="level">年级</option>
            </select>
          </div>
        </div>

        {/* 统计信息 + 搜索结果 */}
        <div className="grid grid-cols-4 gap-3">
          <Card className="text-center">
            <p className="text-2xl font-bold text-primary">{stats.totalWords}</p>
            <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
              总词汇
            </p>
          </Card>
          <Card className="text-center">
            <p className="text-2xl font-bold text-success">{stats.masteredWords}</p>
            <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
              已掌握
            </p>
          </Card>
          <Card className="text-center">
            <p className="text-2xl font-bold text-warning">{stats.learningWords}</p>
            <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
              学习中
            </p>
          </Card>
          <Card className="text-center">
            <p className="text-2xl font-bold text-text-light dark:text-text-dark">{filteredWords.length}</p>
            <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
              筛选结果
            </p>
          </Card>
        </div>

        {/* 单词列表（虚拟滚动） */}
        <div
          ref={parentRef}
          className="overflow-auto"
          style={{ height: 'calc(100vh - 400px)' }}
        >
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {virtualizer.getVirtualItems().map((virtualRow) => {
              const word = filteredWords[virtualRow.index];
              return (
                <div
                  key={virtualRow.key}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                  className="pb-2"
                >
                  <Card onClick={() => navigate(`/word/${word.id}`)}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-lg font-bold text-text-light dark:text-text-dark font-english">
                            {word.word}
                          </p>
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-medium font-chinese ${
                              word.frequency === '高频'
                                ? 'bg-error/10 text-error'
                                : word.frequency === '中频'
                                ? 'bg-warning/10 text-warning'
                                : 'bg-success/10 text-success'
                            }`}
                          >
                            {word.frequency}
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary font-chinese">
                            {word.level}
                          </span>
                        </div>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark font-english">
                          {word.data.phonetic_uk}
                        </p>
                        <p className="text-sm text-text-light dark:text-text-dark mt-1 font-chinese">
                          {word.data.meanings.join(', ')}
                        </p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isSpeechSupported) {
                            speakWord(word.word, 'us').catch((err) =>
                              console.error('发音失败:', err)
                            );
                          } else {
                            alert('您的浏览器不支持语音播放功能');
                          }
                        }}
                        className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/20 text-primary hover:bg-primary/30 transition-colors active:scale-95"
                        title="播放发音"
                      >
                        <span className="material-symbols-outlined text-xl">volume_up</span>
                      </button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {filteredWords.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark text-6xl mb-4">
              search_off
            </span>
            <p className="text-lg font-medium text-subtext-light dark:text-subtext-dark font-chinese">
              未找到相关单词
            </p>
            <p className="text-sm text-subtext-light dark:text-subtext-dark mt-2 font-chinese">
              尝试其他搜索关键词
            </p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
