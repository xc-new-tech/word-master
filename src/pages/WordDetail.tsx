import { useNavigate, useParams } from 'react-router-dom';
import { Word } from '@/types';
import { sampleWords } from '@/data/words';
import TopBar from '@/components/TopBar';
import Card from '@/components/Card';
import { speakWord, isSpeechSupported } from '@/utils/speechSynthesis';

export default function WordDetail() {
  const navigate = useNavigate();
  const { wordId } = useParams();
  const word: Word | undefined = sampleWords.find((w) => w.id === wordId);

  if (!word) {
    navigate(-1);
    return null;
  }

  const playPronunciation = () => {
    if (isSpeechSupported) {
      speakWord(word.word, 'us').catch(err => console.error('发音失败:', err));
    } else {
      alert('您的浏览器不支持语音播放功能');
    }
  };

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col bg-background-light dark:bg-background-dark">
      <TopBar
        title={word.word}
        rightIcon={<span className="material-symbols-outlined text-2xl">bookmark_border</span>}
      />

      <main className="flex-1 space-y-6 p-4 pb-20">
        {/* 单词标题和发音 */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark font-english">
            {word.word}
          </h1>
          <div className="mt-2 flex items-center justify-center gap-4">
            <p className="text-lg text-subtext-light dark:text-subtext-dark font-english">
              {word.data.phonetic_uk}
            </p>
            <button
              onClick={playPronunciation}
              className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">volume_up</span>
            </button>
          </div>
        </div>

        {/* 语言游戏 */}
        <Card>
          <h3 className="text-sm font-bold text-primary mb-2 font-chinese">核心游戏</h3>
          <p className="text-lg font-medium text-text-light dark:text-text-dark font-chinese">
            {word.data.gameDescription}
          </p>
        </Card>

        {/* 中文释义 */}
        <Card>
          <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-2 font-chinese">
            中文释义
          </h3>
          <div className="flex flex-wrap gap-2">
            {word.data.meanings.map((meaning, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {meaning}
              </span>
            ))}
          </div>
        </Card>

        {/* 双棋盘系统 */}
        <Card>
          <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
            双棋盘系统
          </h3>
          <div className="space-y-4">
            {/* 思辨场 */}
            <div className="p-3 rounded-lg bg-primary/5 border-l-4 border-primary">
              <p className="text-xs font-bold text-primary mb-1 font-chinese">思辨场 (学术/正式)</p>
              <p className="text-sm text-text-light dark:text-text-dark font-english italic">
                {word.data.academicContext}
              </p>
            </div>
            {/* 生活场 */}
            <div className="p-3 rounded-lg bg-success/5 border-l-4 border-success">
              <p className="text-xs font-bold text-success mb-1 font-chinese">生活场 (日常/口语)</p>
              <p className="text-sm text-text-light dark:text-text-dark font-english italic">
                {word.data.dailyContext}
              </p>
            </div>
          </div>
        </Card>

        {/* 词根词源 */}
        {word.data.etymology && (
          <Card>
            <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
              词根分析
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {word.data.etymology.prefix && (
                <>
                  <div className="flex-1 min-w-[80px] rounded-lg bg-warning/20 p-3 text-center">
                    <p className="text-xl font-bold text-warning font-english">
                      {word.data.etymology.prefix}
                    </p>
                    <p className="text-xs text-warning/80 mt-1 font-chinese">前缀</p>
                  </div>
                  <span className="text-xl font-bold text-gray-300 dark:text-gray-600">+</span>
                </>
              )}
              <div className="flex-1 min-w-[80px] rounded-lg bg-success/20 p-3 text-center">
                <p className="text-xl font-bold text-success font-english">
                  {word.data.etymology.root}
                </p>
                <p className="text-xs text-success/80 mt-1 font-chinese">词根</p>
              </div>
              {word.data.etymology.suffix && (
                <>
                  <span className="text-xl font-bold text-gray-300 dark:text-gray-600">+</span>
                  <div className="flex-1 min-w-[80px] rounded-lg bg-error/20 p-3 text-center">
                    <p className="text-xl font-bold text-error font-english">
                      {word.data.etymology.suffix}
                    </p>
                    <p className="text-xs text-error/80 mt-1 font-chinese">后缀</p>
                  </div>
                </>
              )}
            </div>
            <p className="mt-3 text-sm text-center text-subtext-light dark:text-subtext-dark font-chinese">
              {word.data.etymology.meaning}
            </p>
          </Card>
        )}

        {/* 记忆故事 */}
        {word.data.memoryStory && (
          <Card>
            <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-2 font-chinese">
              记忆故事
            </h3>
            <p className="text-sm text-text-light dark:text-text-dark leading-relaxed font-chinese">
              {word.data.memoryStory}
            </p>
          </Card>
        )}

        {/* 词形变化 */}
        {Object.keys(word.data.word_forms).length > 0 && (
          <Card>
            <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
              词形变化
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(word.data.word_forms).map(([type, form]) => (
                <div
                  key={type}
                  className="p-2 rounded bg-background-light dark:bg-background-dark"
                >
                  <p className="text-xs text-subtext-light dark:text-subtext-dark font-chinese">
                    {type === 'noun' && '名词'}
                    {type === 'verb' && '动词'}
                    {type === 'adjective' && '形容词'}
                    {type === 'adverb' && '副词'}
                    {type === 'person' && '人'}
                  </p>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark font-english">
                    {form}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* 常用搭配 */}
        {word.data.collocations.length > 0 && (
          <Card>
            <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-2 font-chinese">
              常用搭配
            </h3>
            <div className="flex flex-wrap gap-2">
              {word.data.collocations.map((collocation, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark text-sm font-english"
                >
                  {collocation}
                </span>
              ))}
            </div>
          </Card>
        )}

        {/* 易混淆词 */}
        {word.data.confusableWords && word.data.confusableWords.length > 0 && (
          <Card>
            <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-2 font-chinese">
              易混淆词
            </h3>
            <div className="flex flex-wrap gap-2">
              {word.data.confusableWords.map((confWord, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg border border-warning text-warning text-sm font-english"
                >
                  {confWord}
                </span>
              ))}
            </div>
          </Card>
        )}
      </main>

      {/* 底部操作按钮 */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark p-4">
        <div className="mx-auto max-w-md flex gap-3">
          <button className="flex-1 h-12 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-colors">
            加入复习
          </button>
          <button className="flex-1 h-12 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all">
            开始听写
          </button>
        </div>
      </div>
    </div>
  );
}
