interface WordIllustrationProps {
  word: string;
  meaning: string;
}

export default function WordIllustration({ word, meaning }: WordIllustrationProps) {
  const wordLower = word.toLowerCase();
  const meaningLower = meaning.toLowerCase();

  // 辅助函数：检查单词或含义是否包含关键词
  const matches = (...keywords: string[]) => {
    return keywords.some(kw => wordLower.includes(kw) || meaningLower.includes(kw));
  };

  // 情绪类：happy, sad, excited, tired, angry, worried
  if (matches('happy', 'joy', 'wonderful', 'cheerful', 'delighted', '快乐', '高兴', '愉快', '精彩')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 快乐的太阳 */}
        <circle cx="100" cy="100" r="60" fill="#FFD93D" />
        <circle cx="85" cy="85" r="8" fill="#FF6B6B" />
        <circle cx="115" cy="85" r="8" fill="#FF6B6B" />
        <path d="M 75 115 Q 100 135 125 115" stroke="#FF6B6B" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* 光芒 */}
        <line x1="100" y1="20" x2="100" y2="40" stroke="#FFD93D" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="160" x2="100" y2="180" stroke="#FFD93D" strokeWidth="6" strokeLinecap="round" />
        <line x1="20" y1="100" x2="40" y2="100" stroke="#FFD93D" strokeWidth="6" strokeLinecap="round" />
        <line x1="160" y1="100" x2="180" y2="100" stroke="#FFD93D" strokeWidth="6" strokeLinecap="round" />
        <line x1="45" y1="45" x2="60" y2="60" stroke="#FFD93D" strokeWidth="6" strokeLinecap="round" />
        <line x1="140" y1="140" x2="155" y2="155" stroke="#FFD93D" strokeWidth="6" strokeLinecap="round" />
        <line x1="155" y1="45" x2="140" y2="60" stroke="#FFD93D" strokeWidth="6" strokeLinecap="round" />
        <line x1="60" y1="140" x2="45" y2="155" stroke="#FFD93D" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  if (matches('tire', 'exhaust', 'weary', 'sleepy', '疲倦', '累', '困')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 疲惫的人 */}
        <ellipse cx="100" cy="80" rx="40" ry="50" fill="#95E1D3" />
        <circle cx="85" cy="70" r="3" fill="#2D3436" />
        <circle cx="115" cy="70" r="3" fill="#2D3436" />
        <path d="M 85 90 Q 100 85 115 90" stroke="#2D3436" strokeWidth="3" fill="none" />
        {/* 身体 */}
        <rect x="75" y="120" width="50" height="60" rx="10" fill="#6C5CE7" />
        {/* ZZZ符号 */}
        <text x="130" y="50" fontSize="24" fill="#DFE6E9" fontWeight="bold">Z</text>
        <text x="145" y="35" fontSize="20" fill="#DFE6E9" fontWeight="bold">Z</text>
        <text x="155" y="25" fontSize="16" fill="#DFE6E9" fontWeight="bold">Z</text>
      </svg>
    );
  }

  if (matches('excite', 'thrill', 'enthusiastic', 'eager', '兴奋', '激动')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 庆祝的礼花 */}
        <circle cx="100" cy="100" r="15" fill="#FF6B6B" />
        <line x1="100" y1="85" x2="100" y2="40" stroke="#FFD93D" strokeWidth="4" />
        <line x1="100" y1="115" x2="100" y2="160" stroke="#4ECDC4" strokeWidth="4" />
        <line x1="85" y1="100" x2="40" y2="100" stroke="#A8E6CF" strokeWidth="4" />
        <line x1="115" y1="100" x2="160" y2="100" stroke="#FF6B9D" strokeWidth="4" />
        <line x1="115" y1="85" x2="145" y2="55" stroke="#C7CEEA" strokeWidth="4" />
        <line x1="85" y1="115" x2="55" y2="145" stroke="#FECA57" strokeWidth="4" />
        <line x1="85" y1="85" x2="55" y2="55" stroke="#48DBFB" strokeWidth="4" />
        <line x1="115" y1="115" x2="145" y2="145" stroke="#FF9FF3" strokeWidth="4" />
        {/* 星星装饰 */}
        <circle cx="50" cy="50" r="5" fill="#FFD93D" />
        <circle cx="150" cy="50" r="5" fill="#FF6B9D" />
        <circle cx="50" cy="150" r="5" fill="#4ECDC4" />
        <circle cx="150" cy="150" r="5" fill="#A8E6CF" />
      </svg>
    );
  }

  // 特征类：beautiful, ugly, big, small
  if (matches('beautiful', 'pretty', 'lovely', 'gorgeous', 'attractive', '美丽', '漂亮', '美')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 美丽的花朵 */}
        <circle cx="100" cy="100" r="20" fill="#FFD93D" />
        <ellipse cx="70" cy="80" rx="25" ry="35" fill="#FF6B9D" opacity="0.8" />
        <ellipse cx="130" cy="80" rx="25" ry="35" fill="#FF6B9D" opacity="0.8" />
        <ellipse cx="80" cy="130" rx="35" ry="25" fill="#FF6B9D" opacity="0.8" />
        <ellipse cx="120" cy="130" rx="35" ry="25" fill="#FF6B9D" opacity="0.8" />
        <ellipse cx="100" cy="60" rx="30" ry="35" fill="#FF6B9D" opacity="0.8" />
        {/* 茎 */}
        <line x1="100" y1="130" x2="100" y2="180" stroke="#2ECC71" strokeWidth="6" />
        {/* 叶子 */}
        <ellipse cx="80" cy="155" rx="15" ry="25" fill="#2ECC71" transform="rotate(-30 80 155)" />
      </svg>
    );
  }

  if (matches('important', 'signif', 'crucial', 'essential', 'vital', 'critical', '重要', '重大', '关键')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 重要的星标 */}
        <defs>
          <linearGradient id="starGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD93D" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </linearGradient>
        </defs>
        <polygon points="100,20 115,70 165,70 125,105 140,155 100,125 60,155 75,105 35,70 85,70" fill="url(#starGrad)" />
        <circle cx="100" cy="100" r="25" fill="#FFF" opacity="0.3" />
        {/* 光芒 */}
        <circle cx="100" cy="100" r="70" fill="none" stroke="#FFD93D" strokeWidth="3" opacity="0.3" />
        <circle cx="100" cy="100" r="85" fill="none" stroke="#FFD93D" strokeWidth="2" opacity="0.2" />
      </svg>
    );
  }

  if (matches('difficult', 'hard', 'challenge', 'tough', 'complicated', '困难', '艰难', '难')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 爬山的人 */}
        <path d="M 20 180 L 60 140 L 100 110 L 140 80 L 180 50" fill="none" stroke="#95A5A6" strokeWidth="8" strokeLinecap="round" />
        {/* 人 */}
        <circle cx="120" cy="90" r="12" fill="#3498DB" />
        <line x1="120" y1="102" x2="120" y2="130" stroke="#3498DB" strokeWidth="5" />
        <line x1="120" y1="110" x2="105" y2="120" stroke="#3498DB" strokeWidth="5" strokeLinecap="round" />
        <line x1="120" y1="110" x2="135" y2="105" stroke="#3498DB" strokeWidth="5" strokeLinecap="round" />
        <line x1="120" y1="130" x2="110" y2="145" stroke="#3498DB" strokeWidth="5" strokeLinecap="round" />
        <line x1="120" y1="130" x2="130" y2="145" stroke="#3498DB" strokeWidth="5" strokeLinecap="round" />
        {/* 山峰 */}
        <polygon points="180,50 165,35 180,20" fill="#E74C3C" />
      </svg>
    );
  }

  if (matches('friend', 'kind', 'amiable', 'cordial', 'warm', '友好', '友善', '友')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 握手 */}
        <rect x="30" y="80" width="60" height="40" rx="5" fill="#3498DB" />
        <rect x="110" y="80" width="60" height="40" rx="5" fill="#E74C3C" />
        {/* 手臂交叉 */}
        <path d="M 60 120 L 80 140 L 100 140" fill="none" stroke="#3498DB" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 140 120 L 120 140 L 100 140" fill="none" stroke="#E74C3C" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        {/* 心形装饰 */}
        <path d="M 100 50 C 100 40, 110 35, 115 45 C 120 35, 130 40, 130 50 C 130 65, 115 75, 100 85 C 85 75, 70 65, 70 50 C 70 40, 80 35, 85 45 C 90 35, 100 40, 100 50" fill="#FF6B9D" opacity="0.6" />
      </svg>
    );
  }

  if (matches('delicious', 'tasty', 'yummy', 'flavorful', 'savory', '美味', '可口', '好吃')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 美味的食物 */}
        <ellipse cx="100" cy="130" rx="70" ry="20" fill="#BDC3C7" opacity="0.3" />
        <ellipse cx="100" cy="110" rx="60" ry="50" fill="#E67E22" />
        {/* 汉堡层次 */}
        <ellipse cx="100" cy="95" rx="55" ry="15" fill="#F39C12" />
        <ellipse cx="100" cy="105" rx="58" ry="8" fill="#27AE60" />
        <ellipse cx="100" cy="115" rx="60" ry="10" fill="#E74C3C" />
        {/* 顶部面包 */}
        <ellipse cx="100" cy="80" rx="50" ry="25" fill="#F39C12" />
        {/* 芝麻 */}
        <circle cx="85" cy="75" r="3" fill="#FFF" />
        <circle cx="100" cy="72" r="3" fill="#FFF" />
        <circle cx="115" cy="75" r="3" fill="#FFF" />
        <circle cx="92" cy="82" r="3" fill="#FFF" />
        <circle cx="108" cy="82" r="3" fill="#FFF" />
      </svg>
    );
  }

  if (matches('popular', 'trending', 'fashionable', '流行', '受欢迎')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 流行趋势箭头 */}
        <defs>
          <linearGradient id="trendGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#4ECDC4" />
          </linearGradient>
        </defs>
        <path d="M 30 150 Q 70 120 100 90 T 160 40" fill="none" stroke="url(#trendGrad)" strokeWidth="8" strokeLinecap="round" />
        <polygon points="160,40 170,50 150,55" fill="url(#trendGrad)" />
        {/* 星星装饰 */}
        <polygon points="50,40 55,55 70,55 58,63 62,78 50,70 38,78 42,63 30,55 45,55" fill="#FFD93D" opacity="0.8" />
        <polygon points="140,100 143,110 153,110 145,116 148,126 140,120 132,126 135,116 127,110 137,110" fill="#FFD93D" opacity="0.6" />
        <circle cx="100" cy="170" r="5" fill="#4ECDC4" opacity="0.6" />
        <circle cx="170" cy="80" r="5" fill="#FF6B6B" opacity="0.6" />
      </svg>
    );
  }

  if (matches('famous', 'renowned', 'celebrated', 'well-known', '著名', '有名', '出名')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 名人/明星 */}
        <circle cx="100" cy="90" r="35" fill="#FFD93D" />
        <circle cx="85" cy="85" r="6" fill="#2D3436" />
        <circle cx="115" cy="85" r="6" fill="#2D3436" />
        <path d="M 85 105 Q 100 115 115 105" stroke="#2D3436" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* 皇冠 */}
        <polygon points="70,50 75,65 85,60 90,70 95,60 100,70 105,60 110,70 115,60 125,65 130,50" fill="#F39C12" />
        <rect x="70" y="48" width="60" height="5" fill="#E67E22" />
        {/* 星星光环 */}
        <polygon points="45,70 48,78 56,78 50,83 52,91 45,87 38,91 40,83 34,78 42,78" fill="#FF6B6B" opacity="0.7" />
        <polygon points="155,70 158,78 166,78 160,83 162,91 155,87 148,91 150,83 144,78 152,78" fill="#FF6B6B" opacity="0.7" />
        <polygon points="100,140 103,148 111,148 105,153 107,161 100,157 93,161 95,153 89,148 97,148" fill="#4ECDC4" opacity="0.5" />
      </svg>
    );
  }

  if (matches('success', 'achieve', 'win', 'accomplish', 'triumph', '成功', '成就', '胜利')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 奖杯 */}
        <rect x="70" y="90" width="60" height="70" rx="5" fill="#FFD93D" />
        <ellipse cx="100" cy="90" rx="35" ry="15" fill="#F39C12" />
        <rect x="90" y="160" width="20" height="30" fill="#95A5A6" />
        <ellipse cx="100" cy="190" rx="40" ry="8" fill="#7F8C8D" />
        {/* 把手 */}
        <path d="M 70 100 Q 50 105 50 115 Q 50 125 70 130" fill="none" stroke="#F39C12" strokeWidth="8" />
        <path d="M 130 100 Q 150 105 150 115 Q 150 125 130 130" fill="none" stroke="#F39C12" strokeWidth="8" />
        {/* 星星装饰 */}
        <polygon points="100,50 105,65 120,65 108,73 112,88 100,80 88,88 92,73 80,65 95,65" fill="#E74C3C" />
        {/* 闪光 */}
        <line x1="55" y1="70" x2="65" y2="80" stroke="#FFF" strokeWidth="3" strokeLinecap="round" />
        <line x1="145" y1="70" x2="135" y2="80" stroke="#FFF" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (matches('expensive', 'costly', 'pricey', 'dear', '昂贵', '贵', '花钱')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 金币/钱袋 */}
        <ellipse cx="100" cy="140" rx="60" ry="50" fill="#F39C12" />
        <path d="M 40 140 Q 40 110 100 80 Q 160 110 160 140" fill="#FFD93D" />
        <text x="85" y="155" fontSize="48" fontWeight="bold" fill="#E67E22">$</text>
        {/* 装饰线条 */}
        <circle cx="70" cy="120" r="5" fill="#E67E22" />
        <circle cx="130" cy="120" r="5" fill="#E67E22" />
        {/* 金币散落 */}
        <circle cx="140" cy="70" r="15" fill="#F39C12" stroke="#E67E22" strokeWidth="2" />
        <text x="133" y="77" fontSize="18" fontWeight="bold" fill="#E67E22">$</text>
        <circle cx="60" cy="80" r="12" fill="#F39C12" stroke="#E67E22" strokeWidth="2" />
        <text x="55" y="85" fontSize="14" fontWeight="bold" fill="#E67E22">$</text>
      </svg>
    );
  }

  if (matches('possible', 'feasible', 'achievable', 'opportunity', '可能', '办得到', '机会')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 打开的门/机会之门 */}
        <rect x="60" y="40" width="80" height="140" rx="5" fill="#3498DB" />
        <rect x="60" y="40" width="40" height="140" rx="5" fill="#2980B9" />
        <path d="M 100 40 L 100 180" stroke="#FFF" strokeWidth="3" opacity="0.3" />
        <circle cx="95" cy="110" r="5" fill="#FFD93D" />
        {/* 光线照进来 */}
        <polygon points="100,70 160,50 160,150 100,130" fill="#FFD93D" opacity="0.3" />
        <line x1="100" y1="80" x2="150" y2="65" stroke="#FFD93D" strokeWidth="2" opacity="0.5" />
        <line x1="100" y1="100" x2="150" y2="90" stroke="#FFD93D" strokeWidth="2" opacity="0.5" />
        <line x1="100" y1="120" x2="150" y2="115" stroke="#FFD93D" strokeWidth="2" opacity="0.5" />
      </svg>
    );
  }

  if (matches('necessary', 'essential', 'required', 'must', 'need', 'vital', '必要', '必需', '需要')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 必需品 - 钥匙 */}
        <circle cx="70" cy="80" r="30" fill="none" stroke="#E74C3C" strokeWidth="10" />
        <circle cx="70" cy="80" r="15" fill="#FFF" />
        <rect x="85" y="75" width="70" height="10" fill="#E74C3C" />
        {/* 齿 */}
        <rect x="125" y="85" width="10" height="20" fill="#E74C3C" />
        <rect x="145" y="85" width="10" height="25" fill="#E74C3C" />
        {/* 感叹号装饰 */}
        <rect x="95" y="120" width="10" height="40" rx="5" fill="#FFD93D" />
        <circle cx="100" cy="170" r="7" fill="#FFD93D" />
      </svg>
    );
  }

  if (matches('different', 'various', 'diverse', '不同')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 不同的几何图形 */}
        <circle cx="60" cy="70" r="35" fill="#FF6B6B" />
        <rect x="95" y="35" width="70" height="70" fill="#4ECDC4" />
        <polygon points="60,180 30,120 90,120" fill="#FFD93D" />
        <polygon points="140,180 165,120 115,120" fill="#A8E6CF" />
        {/* 对比线 */}
        <line x1="20" y1="100" x2="180" y2="100" stroke="#95A5A6" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
      </svg>
    );
  }

  if (matches('interesting', 'curious', 'intriguing', '有趣', '好奇')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 问号和放大镜 */}
        <circle cx="110" cy="110" r="50" fill="none" stroke="#3498DB" strokeWidth="8" />
        <line x1="145" y1="145" x2="170" y2="170" stroke="#3498DB" strokeWidth="8" strokeLinecap="round" />
        {/* 问号 */}
        <path d="M 95 90 Q 95 75 110 75 Q 125 75 125 90 Q 125 100 110 105 L 110 115" stroke="#E74C3C" strokeWidth="6" fill="none" strokeLinecap="round" />
        <circle cx="110" cy="125" r="4" fill="#E74C3C" />
        {/* 星星装饰 */}
        <polygon points="50,40 53,48 61,48 55,53 57,61 50,57 43,61 45,53 39,48 47,48" fill="#FFD93D" />
        <polygon points="160,30 162,36 168,36 163,40 165,46 160,42 155,46 157,40 152,36 158,36" fill="#4ECDC4" />
      </svg>
    );
  }

  if (matches('favorite', 'prefer', 'beloved', '最喜欢', '喜爱')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 心形和星星 */}
        <path d="M 100 170 C 100 170, 40 120, 40 80 C 40 50, 70 40, 100 70 C 130 40, 160 50, 160 80 C 160 120, 100 170, 100 170" fill="#FF6B9D" />
        <polygon points="100,50 108,70 130,70 112,83 120,103 100,90 80,103 88,83 70,70 92,70" fill="#FFD93D" />
        {/* 闪光效果 */}
        <circle cx="50" cy="60" r="3" fill="#FFF" opacity="0.8" />
        <circle cx="150" cy="60" r="3" fill="#FFF" opacity="0.8" />
        <circle cx="100" cy="140" r="4" fill="#FFF" opacity="0.6" />
      </svg>
    );
  }

  if (matches('comfortable', 'cozy', 'relax', '舒适', '舒服')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 舒适的沙发 */}
        <rect x="40" y="100" width="120" height="70" rx="15" fill="#6C5CE7" />
        <rect x="30" y="90" width="25" height="80" rx="10" fill="#5F3DC4" />
        <rect x="145" y="90" width="25" height="80" rx="10" fill="#5F3DC4" />
        {/* 靠垫 */}
        <ellipse cx="75" cy="110" rx="20" ry="25" fill="#A29BFE" />
        <ellipse cx="125" cy="110" rx="20" ry="25" fill="#A29BFE" />
        {/* 脚 */}
        <rect x="45" y="170" width="15" height="20" rx="3" fill="#4A3D8F" />
        <rect x="140" y="170" width="15" height="20" rx="3" fill="#4A3D8F" />
        {/* ZZZ表示放松 */}
        <text x="35" y="70" fontSize="16" fill="#DFE6E9" fontWeight="bold">Z</text>
        <text x="45" y="60" fontSize="14" fill="#DFE6E9" fontWeight="bold">Z</text>
      </svg>
    );
  }

  if (matches('terrible', 'awful', 'horrible', 'dreadful', '可怕', '糟糕')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 警告标志/暴风雨 */}
        <polygon points="100,30 180,170 20,170" fill="#E74C3C" />
        <polygon points="100,45 165,160 35,160" fill="#FFF" />
        <rect x="95" y="80" width="10" height="50" rx="5" fill="#E74C3C" />
        <circle cx="100" cy="145" r="7" fill="#E74C3C" />
        {/* 闪电效果 */}
        <polygon points="75,50 70,80 85,80 65,120 75,90 60,90" fill="#FFD93D" opacity="0.6" />
        <polygon points="125,50 130,80 115,80 135,120 125,90 140,90" fill="#FFD93D" opacity="0.6" />
      </svg>
    );
  }

  // 情绪类扩展
  if (matches('sad', 'unhappy', 'upset', '悲伤', '难过')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 悲伤的表情 */}
        <circle cx="100" cy="100" r="60" fill="#95E1D3" />
        <circle cx="80" cy="85" r="8" fill="#2D3436" />
        <circle cx="120" cy="85" r="8" fill="#2D3436" />
        <path d="M 75 130 Q 100 115 125 130" stroke="#2D3436" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* 眼泪 */}
        <ellipse cx="75" cy="105" rx="4" ry="8" fill="#4ECDC4" />
        <ellipse cx="125" cy="105" rx="4" ry="8" fill="#4ECDC4" />
      </svg>
    );
  }

  if (matches('angry', 'mad', 'furious', '生气', '愤怒')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 生气的表情 */}
        <circle cx="100" cy="100" r="60" fill="#E74C3C" />
        <circle cx="80" cy="90" r="8" fill="#2D3436" />
        <circle cx="120" cy="90" r="8" fill="#2D3436" />
        {/* 愤怒的眉毛 */}
        <line x1="65" y1="70" x2="85" y2="80" stroke="#2D3436" strokeWidth="6" strokeLinecap="round" />
        <line x1="135" y1="70" x2="115" y2="80" stroke="#2D3436" strokeWidth="6" strokeLinecap="round" />
        {/* 愤怒的嘴 */}
        <path d="M 75 120 Q 100 110 125 120" stroke="#2D3436" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* 蒸汽 */}
        <path d="M 40 50 Q 35 40 40 30" stroke="#95A5A6" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 160 50 Q 165 40 160 30" stroke="#95A5A6" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  if (matches('worried', 'anxious', 'nervous', '担心', '焦虑')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 担心的表情 */}
        <circle cx="100" cy="100" r="60" fill="#F39C12" />
        <circle cx="80" cy="90" r="7" fill="#2D3436" />
        <circle cx="120" cy="90" r="7" fill="#2D3436" />
        {/* 担心的眉毛 */}
        <path d="M 65 75 Q 75 70 85 75" stroke="#2D3436" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 115 75 Q 125 70 135 75" stroke="#2D3436" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* 担心的嘴 */}
        <path d="M 80 120 Q 85 125 90 120" stroke="#2D3436" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* 汗滴 */}
        <ellipse cx="135" cy="75" rx="5" ry="8" fill="#4ECDC4" />
      </svg>
    );
  }

  if (matches('bored', 'boring', 'dull', '无聊', '乏味')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 无聊的表情 */}
        <circle cx="100" cy="100" r="60" fill="#BDC3C7" />
        <line x1="70" y1="90" x2="90" y2="90" stroke="#2D3436" strokeWidth="5" strokeLinecap="round" />
        <line x1="110" y1="90" x2="130" y2="90" stroke="#2D3436" strokeWidth="5" strokeLinecap="round" />
        <line x1="80" y1="120" x2="120" y2="120" stroke="#2D3436" strokeWidth="4" strokeLinecap="round" />
        {/* 气泡表示叹气 */}
        <circle cx="140" cy="60" r="8" fill="none" stroke="#95A5A6" strokeWidth="2" />
        <circle cx="155" cy="45" r="5" fill="none" stroke="#95A5A6" strokeWidth="2" />
      </svg>
    );
  }

  if (matches('surprised', 'amazed', 'shocked', '惊讶', '吃惊')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 惊讶的表情 */}
        <circle cx="100" cy="100" r="60" fill="#FFD93D" />
        <circle cx="80" cy="85" r="12" fill="#2D3436" />
        <circle cx="120" cy="85" r="12" fill="#2D3436" />
        {/* 惊讶的嘴 */}
        <circle cx="100" cy="125" r="15" fill="#2D3436" />
        {/* 惊叹号 */}
        <rect x="145" y="40" width="8" height="30" rx="4" fill="#E74C3C" />
        <circle cx="149" cy="78" r="5" fill="#E74C3C" />
      </svg>
    );
  }

  if (matches('scared', 'afraid', 'frightened', '害怕', '恐惧')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 害怕的表情 */}
        <circle cx="100" cy="100" r="60" fill="#A8E6CF" />
        <circle cx="80" cy="85" r="10" fill="#2D3436" />
        <circle cx="120" cy="85" r="10" fill="#2D3436" />
        {/* 害怕的眉毛 */}
        <path d="M 65 70 Q 75 65 85 70" stroke="#2D3436" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 115 70 Q 125 65 135 70" stroke="#2D3436" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* 害怕的嘴 */}
        <ellipse cx="100" cy="125" rx="20" ry="15" fill="#2D3436" />
        {/* 颤抖线 */}
        <path d="M 160 100 L 165 95 L 170 100 L 175 95" stroke="#95A5A6" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // 尺寸类
  if (matches('big', 'large', 'huge', 'giant', '大', '巨大')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 大小对比 */}
        <circle cx="100" cy="100" r="70" fill="#3498DB" opacity="0.7" />
        <circle cx="140" cy="60" r="20" fill="#E74C3C" />
        {/* 箭头指示大 */}
        <line x1="30" y1="100" x2="70" y2="100" stroke="#2D3436" strokeWidth="3" />
        <line x1="130" y1="100" x2="170" y2="100" stroke="#2D3436" strokeWidth="3" />
        <polygon points="25,100 35,95 35,105" fill="#2D3436" />
        <polygon points="175,100 165,95 165,105" fill="#2D3436" />
      </svg>
    );
  }

  if (matches('small', 'little', 'tiny', 'mini', '小', '微小')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 大小对比 */}
        <circle cx="100" cy="100" r="70" fill="#BDC3C7" opacity="0.3" />
        <circle cx="100" cy="100" r="25" fill="#E74C3C" />
        {/* 箭头指示小 */}
        <line x1="70" y1="100" x2="90" y2="100" stroke="#2D3436" strokeWidth="2" />
        <line x1="110" y1="100" x2="130" y2="100" stroke="#2D3436" strokeWidth="2" />
        <polygon points="75,100 70,97 70,103" fill="#2D3436" />
        <polygon points="125,100 130,97 130,103" fill="#2D3436" />
      </svg>
    );
  }

  // 天气类
  if (matches('sunny', 'bright', '晴朗', '明亮')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 太阳 */}
        <circle cx="100" cy="100" r="40" fill="#FFD93D" />
        <line x1="100" y1="30" x2="100" y2="50" stroke="#F39C12" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="150" x2="100" y2="170" stroke="#F39C12" strokeWidth="5" strokeLinecap="round" />
        <line x1="30" y1="100" x2="50" y2="100" stroke="#F39C12" strokeWidth="5" strokeLinecap="round" />
        <line x1="150" y1="100" x2="170" y2="100" stroke="#F39C12" strokeWidth="5" strokeLinecap="round" />
        <line x1="50" y1="50" x2="65" y2="65" stroke="#F39C12" strokeWidth="5" strokeLinecap="round" />
        <line x1="135" y1="135" x2="150" y2="150" stroke="#F39C12" strokeWidth="5" strokeLinecap="round" />
        <line x1="150" y1="50" x2="135" y2="65" stroke="#F39C12" strokeWidth="5" strokeLinecap="round" />
        <line x1="65" y1="135" x2="50" y2="150" stroke="#F39C12" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (matches('rainy', 'rain', 'wet', '下雨', '湿')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 雨云 */}
        <ellipse cx="80" cy="70" rx="35" ry="30" fill="#95A5A6" />
        <ellipse cx="120" cy="70" rx="40" ry="35" fill="#7F8C8D" />
        <ellipse cx="100" cy="80" rx="30" ry="25" fill="#BDC3C7" />
        {/* 雨滴 */}
        <line x1="70" y1="100" x2="65" y2="130" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" />
        <line x1="90" y1="105" x2="85" y2="140" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" />
        <line x1="110" y1="105" x2="105" y2="140" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" />
        <line x1="130" y1="100" x2="125" y2="130" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" />
        <line x1="80" y1="115" x2="75" y2="150" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" />
        <line x1="120" y1="115" x2="115" y2="150" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (matches('cloudy', 'cloud', '多云', '阴天')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 云朵 */}
        <ellipse cx="70" cy="90" rx="40" ry="35" fill="#BDC3C7" />
        <ellipse cx="110" cy="85" rx="45" ry="40" fill="#95A5A6" />
        <ellipse cx="140" cy="95" rx="35" ry="30" fill="#BDC3C7" />
        <ellipse cx="100" cy="105" rx="40" ry="30" fill="#DFE6E9" />
        {/* 第二朵云 */}
        <ellipse cx="60" cy="130" rx="30" ry="25" fill="#95A5A6" opacity="0.6" />
        <ellipse cx="90" cy="135" rx="35" ry="28" fill="#BDC3C7" opacity="0.6" />
      </svg>
    );
  }

  if (matches('windy', 'wind', 'breeze', '有风', '微风')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 风的线条 */}
        <path d="M 30 70 Q 80 60 120 70 Q 140 75 150 70" stroke="#4ECDC4" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 40 100 Q 90 90 130 100 Q 150 105 170 100" stroke="#95E1D3" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 50 130 Q 100 120 140 130 Q 160 135 180 130" stroke="#A8E6CF" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* 飘动的叶子 */}
        <ellipse cx="90" cy="60" rx="12" ry="20" fill="#2ECC71" transform="rotate(30 90 60)" />
        <ellipse cx="140" cy="115" rx="10" ry="18" fill="#27AE60" transform="rotate(-20 140 115)" />
      </svg>
    );
  }

  if (matches('snowy', 'snow', 'cold', '下雪', '寒冷')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 雪花 */}
        <line x1="100" y1="60" x2="100" y2="140" stroke="#4ECDC4" strokeWidth="4" />
        <line x1="60" y1="100" x2="140" y2="100" stroke="#4ECDC4" strokeWidth="4" />
        <line x1="75" y1="75" x2="125" y2="125" stroke="#4ECDC4" strokeWidth="4" />
        <line x1="125" y1="75" x2="75" y2="125" stroke="#4ECDC4" strokeWidth="4" />
        <polygon points="100,60 95,70 105,70" fill="#4ECDC4" />
        <polygon points="100,140 95,130 105,130" fill="#4ECDC4" />
        <polygon points="60,100 70,95 70,105" fill="#4ECDC4" />
        <polygon points="140,100 130,95 130,105" fill="#4ECDC4" />
        {/* 小雪花装饰 */}
        <text x="45" y="55" fontSize="20" fill="#95E1D3">❄</text>
        <text x="145" y="155" fontSize="20" fill="#95E1D3">❄</text>
        <text x="150" y="60" fontSize="16" fill="#A8E6CF">❄</text>
      </svg>
    );
  }

  // 时间速度类
  if (matches('fast', 'quick', 'rapid', 'speed', '快', '迅速')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 奔跑的人 */}
        <circle cx="130" cy="70" r="15" fill="#3498DB" />
        <line x1="130" y1="85" x2="120" y2="110" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        <line x1="120" y1="95" x2="105" y2="90" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        <line x1="130" y1="95" x2="150" y2="85" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        <line x1="120" y1="110" x2="105" y2="135" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        <line x1="120" y1="110" x2="140" y2="130" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        {/* 速度线 */}
        <line x1="30" y1="80" x2="80" y2="75" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="100" x2="85" y2="95" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
        <line x1="35" y1="120" x2="75" y2="115" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (matches('slow', 'slowly', '慢', '缓慢')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 乌龟 */}
        <ellipse cx="100" cy="100" rx="60" ry="40" fill="#27AE60" />
        <circle cx="140" cy="90" r="15" fill="#2ECC71" />
        <circle cx="147" cy="87" r="3" fill="#2D3436" />
        <ellipse cx="70" cy="105" rx="12" ry="8" fill="#2ECC71" />
        <ellipse cx="130" cy="110" rx="12" ry="8" fill="#2ECC71" />
        {/* 龟壳纹理 */}
        <ellipse cx="100" cy="95" rx="40" ry="25" fill="none" stroke="#1E8449" strokeWidth="3" />
        <line x1="100" y1="75" x2="100" y2="115" stroke="#1E8449" strokeWidth="2" />
        <line x1="75" y1="90" x2="125" y2="90" stroke="#1E8449" strokeWidth="2" />
      </svg>
    );
  }

  // 学习类
  if (matches('study', 'learn', 'student', '学习', '学生')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 学习的人和书 */}
        <rect x="50" y="110" width="100" height="70" rx="5" fill="#3498DB" />
        <path d="M 100 110 L 100 180" stroke="#2980B9" strokeWidth="3" />
        <circle cx="100" cy="70" r="20" fill="#FFD93D" />
        <line x1="100" y1="90" x2="100" y2="110" stroke="#FFD93D" strokeWidth="5" />
        {/* 眼镜 */}
        <circle cx="90" cy="70" r="8" fill="none" stroke="#2D3436" strokeWidth="2" />
        <circle cx="110" cy="70" r="8" fill="none" stroke="#2D3436" strokeWidth="2" />
        <line x1="98" y1="70" x2="102" y2="70" stroke="#2D3436" strokeWidth="2" />
        {/* 笔记本线条 */}
        <line x1="60" y1="130" x2="90" y2="130" stroke="#FFF" strokeWidth="2" opacity="0.6" />
        <line x1="60" y1="145" x2="90" y2="145" stroke="#FFF" strokeWidth="2" opacity="0.6" />
      </svg>
    );
  }

  if (matches('teach', 'teacher', 'educate', '教', '老师')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 黑板和老师 */}
        <rect x="40" y="50" width="120" height="80" rx="5" fill="#2D3436" />
        <rect x="35" y="45" width="130" height="90" rx="5" fill="none" stroke="#95A5A6" strokeWidth="3" />
        {/* 黑板上的内容 */}
        <text x="60" y="85" fontSize="24" fill="#FFF" fontWeight="bold">ABC</text>
        <text x="115" y="85" fontSize="24" fill="#4ECDC4" fontWeight="bold">123</text>
        <line x1="55" y1="105" x2="145" y2="105" stroke="#FFD93D" strokeWidth="3" />
        {/* 粉笔 */}
        <rect x="140" y="140" width="30" height="8" rx="4" fill="#FFF" />
      </svg>
    );
  }

  if (matches('read', 'reading', '读', '阅读')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 打开的书和眼睛 */}
        <rect x="50" y="90" width="100" height="80" rx="5" fill="#E74C3C" />
        <path d="M 100 90 L 100 170" stroke="#C0392B" strokeWidth="3" />
        <rect x="50" y="90" width="50" height="80" rx="5" fill="#E67E22" />
        {/* 眼睛 */}
        <ellipse cx="75" cy="50" rx="20" ry="15" fill="#FFF" />
        <ellipse cx="125" cy="50" rx="20" ry="15" fill="#FFF" />
        <circle cx="75" cy="50" r="8" fill="#2D3436" />
        <circle cx="125" cy="50" r="8" fill="#2D3436" />
      </svg>
    );
  }

  if (matches('write', 'writing', '写', '写作')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 笔和纸 */}
        <rect x="60" y="60" width="80" height="100" rx="5" fill="#FFF" stroke="#BDC3C7" strokeWidth="3" />
        <line x1="70" y1="80" x2="110" y2="80" stroke="#3498DB" strokeWidth="2" />
        <line x1="70" y1="95" x2="125" y2="95" stroke="#3498DB" strokeWidth="2" />
        <line x1="70" y1="110" x2="115" y2="110" stroke="#3498DB" strokeWidth="2" />
        {/* 笔 */}
        <rect x="120" y="120" width="50" height="10" rx="2" fill="#FFD93D" transform="rotate(-45 145 125)" />
        <polygon points="125,145 120,150 130,155" fill="#2D3436" transform="rotate(-45 125 150)" />
      </svg>
    );
  }

  // 交流类
  if (matches('speak', 'talk', 'say', '说', '讲')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 说话的人和对话框 */}
        <circle cx="80" cy="100" r="30" fill="#3498DB" />
        <circle cx="70" cy="95" r="5" fill="#FFF" />
        <circle cx="90" cy="95" r="5" fill="#FFF" />
        <path d="M 70 110 Q 80 118 90 110" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* 对话框 */}
        <rect x="120" y="70" width="60" height="40" rx="8" fill="#FFD93D" />
        <polygon points="120,95 115,100 120,105" fill="#FFD93D" />
        <line x1="130" y1="85" x2="165" y2="85" stroke="#2D3436" strokeWidth="2" />
        <line x1="130" y1="95" x2="160" y2="95" stroke="#2D3436" strokeWidth="2" />
      </svg>
    );
  }

  if (matches('listen', 'hear', '听', '倾听')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 耳朵和声波 */}
        <ellipse cx="100" cy="100" rx="30" ry="45" fill="#FFD93D" />
        <ellipse cx="110" cy="100" rx="20" ry="35" fill="#F39C12" />
        <ellipse cx="115" cy="100" rx="12" ry="25" fill="#E67E22" />
        {/* 声波 */}
        <path d="M 40 80 Q 50 100 40 120" stroke="#4ECDC4" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 25 70 Q 40 100 25 130" stroke="#4ECDC4" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 10 60 Q 30 100 10 140" stroke="#4ECDC4" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
      </svg>
    );
  }

  // 动作类
  if (matches('walk', 'walking', '走', '步行')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 行走的人 */}
        <circle cx="100" cy="60" r="18" fill="#3498DB" />
        <line x1="100" y1="78" x2="100" y2="120" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="90" x2="85" y2="110" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="90" x2="115" y2="105" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="120" x2="85" y2="155" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="120" x2="115" y2="150" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" />
        {/* 脚印 */}
        <ellipse cx="60" cy="170" rx="12" ry="18" fill="#BDC3C7" opacity="0.5" />
        <ellipse cx="140" cy="175" rx="12" ry="18" fill="#BDC3C7" opacity="0.5" />
      </svg>
    );
  }

  if (matches('run', 'running', 'jog', '跑', '奔跑')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 奔跑的人 */}
        <circle cx="120" cy="65" r="16" fill="#E74C3C" />
        <line x1="120" y1="81" x2="105" y2="115" stroke="#E74C3C" strokeWidth="6" strokeLinecap="round" />
        <line x1="110" y1="90" x2="90" y2="85" stroke="#E74C3C" strokeWidth="6" strokeLinecap="round" />
        <line x1="120" y1="90" x2="145" y2="75" stroke="#E74C3C" strokeWidth="6" strokeLinecap="round" />
        <line x1="105" y1="115" x2="95" y2="145" stroke="#E74C3C" strokeWidth="6" strokeLinecap="round" />
        <line x1="105" y1="115" x2="130" y2="140" stroke="#E74C3C" strokeWidth="6" strokeLinecap="round" />
        {/* 速度线 */}
        <line x1="40" y1="75" x2="70" y2="70" stroke="#FFD93D" strokeWidth="5" strokeLinecap="round" />
        <line x1="35" y1="95" x2="65" y2="90" stroke="#FFD93D" strokeWidth="5" strokeLinecap="round" />
        <line x1="30" y1="115" x2="55" y2="110" stroke="#FFD93D" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (matches('jump', 'leap', '跳', '跃')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 跳跃的人 */}
        <circle cx="100" cy="50" r="15" fill="#9B59B6" />
        <line x1="100" y1="65" x2="100" y2="95" stroke="#9B59B6" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="75" x2="80" y2="65" stroke="#9B59B6" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="75" x2="120" y2="65" stroke="#9B59B6" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="95" x2="85" y2="120" stroke="#9B59B6" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="95" x2="115" y2="120" stroke="#9B59B6" strokeWidth="6" strokeLinecap="round" />
        {/* 地面和弧线表示跳跃 */}
        <line x1="40" y1="160" x2="160" y2="160" stroke="#BDC3C7" strokeWidth="3" />
        <path d="M 70 160 Q 100 120 130 160" stroke="#4ECDC4" strokeWidth="3" strokeDasharray="5,5" fill="none" />
      </svg>
    );
  }

  if (matches('swim', 'swimming', '游泳')) {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* 游泳的人 */}
        <circle cx="80" cy="80" r="15" fill="#3498DB" />
        <ellipse cx="110" cy="85" rx="30" ry="15" fill="#3498DB" />
        <line x1="140" y1="85" x2="155" y2="75" stroke="#3498DB" strokeWidth="5" strokeLinecap="round" />
        <line x1="80" y1="90" x2="70" y2="105" stroke="#3498DB" strokeWidth="5" strokeLinecap="round" />
        {/* 水波 */}
        <path d="M 20 120 Q 40 115 60 120 Q 80 125 100 120 Q 120 115 140 120 Q 160 125 180 120" stroke="#4ECDC4" strokeWidth="3" fill="none" />
        <path d="M 20 140 Q 40 135 60 140 Q 80 145 100 140 Q 120 135 140 140 Q 160 145 180 140" stroke="#4ECDC4" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M 20 160 Q 40 155 60 160 Q 80 165 100 160 Q 120 155 140 160 Q 160 165 180 160" stroke="#4ECDC4" strokeWidth="3" fill="none" opacity="0.5" />
      </svg>
    );
  }

  // 默认：学习主题
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* 打开的书 */}
      <rect x="50" y="70" width="100" height="80" rx="5" fill="#3498DB" />
      <path d="M 100 70 L 100 150" stroke="#2980B9" strokeWidth="3" />
      <rect x="50" y="70" width="50" height="80" rx="5" fill="#5DADE2" />
      {/* 文字线条 */}
      <line x1="60" y1="90" x2="85" y2="90" stroke="#FFF" strokeWidth="2" opacity="0.6" />
      <line x1="60" y1="100" x2="85" y2="100" stroke="#FFF" strokeWidth="2" opacity="0.6" />
      <line x1="60" y1="110" x2="80" y2="110" stroke="#FFF" strokeWidth="2" opacity="0.6" />
      <line x1="110" y1="90" x2="135" y2="90" stroke="#FFF" strokeWidth="2" opacity="0.6" />
      <line x1="110" y1="100" x2="135" y2="100" stroke="#FFF" strokeWidth="2" opacity="0.6" />
      <line x1="110" y1="110" x2="130" y2="110" stroke="#FFF" strokeWidth="2" opacity="0.6" />
      {/* 星星装饰 */}
      <polygon points="100,40 105,50 115,50 107,56 110,66 100,60 90,66 93,56 85,50 95,50" fill="#FFD93D" />
    </svg>
  );
}
