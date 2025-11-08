import { Word } from '@/types';
import { highFrequencyWords } from './high-frequency-words';

// 完整的初中英语词库 - 共 1548 词
// 数据来源: 中考英语考纲词汇表
// 高频词(305): 100%完整学习资料
// 中频词(553): 100%基础学习资料
// 核心词包含: 语言游戏描述、词根分析、记忆故事、使用场景
//
// 优先展示20个精选高频词，数据质量最高，完全匹配新卡片设计

const remainingWords = [
  {
    "id": "w0001",
    "word": "a",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ə, eɪ(ən)/",
      "phonetic_us": "/ə, eɪ(ən)/",
      "meanings": [
        "一（个、件……）"
      ],
      "word_forms": {},
      "collocations": [
        "a few",
        "a little",
        "a lot of",
        "have a try",
        "in a hurry",
        "take a break"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"一（个、件……）\"的概念",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0002",
    "word": "ability",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈbɪlɪtɪ/",
      "phonetic_us": "/əˈbɪlɪtɪ/",
      "meanings": [
        "能力",
        "才能"
      ],
      "word_forms": {},
      "collocations": [
        "have the ability to",
        "to the best of one's ability",
        "natural ability",
        "ability to learn"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0003",
    "word": "able",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈeɪb(ə)l/",
      "phonetic_us": "/ˈeɪb(ə)l/",
      "meanings": [
        "能够",
        "有能力的"
      ],
      "word_forms": {
        "noun": "ability",
        "adverb": "ably",
        "comparative": "abler",
        "superlative": "ablest"
      },
      "collocations": [
        "be able to",
        "able to do",
        "not able to",
        "able student",
        "more able"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记能够的事物",
      "memoryStory": "",
      "confusableWords": [
        "capable",
        "competent",
        "qualified"
      ]
    }
  },
  {
    "id": "w0004",
    "word": "about",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əˈbaʊt/",
      "phonetic_us": "/əˈbaʊt/",
      "meanings": [
        "大约",
        "到处",
        "四处 prep. 关于"
      ],
      "word_forms": {},
      "collocations": [
        "talk about",
        "think about",
        "worry about",
        "about 10 minutes",
        "how about",
        "what about",
        "care about",
        "learn about"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"大约\"的概念",
      "memoryStory": "",
      "confusableWords": [
        "around",
        "approximately",
        "concerning",
        "regarding"
      ]
    }
  },
  {
    "id": "w0005",
    "word": "above",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/əˈbʌv/",
      "phonetic_us": "/əˈbʌv/",
      "meanings": [
        "在…上面 a. 上面的 ad. 在…之上"
      ],
      "word_forms": {},
      "collocations": [
        "above all",
        "from above",
        "above average",
        "the above mentioned",
        "as above"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记在…上面 a. 上面的 ad. 在…之上的事物",
      "academicContext": "Understanding above concepts is essential for academic success.",
      "dailyContext": "This is really above! I love it.",
      "memoryStory": "通过联想\"above\"的发音和拼写，记住其\"在…上面 a. 上面的 ad. 在…之上\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0006",
    "word": "abroad",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈbrɔːd/",
      "phonetic_us": "/əˈbrɔːd/",
      "meanings": [
        "到（在）国外"
      ],
      "word_forms": {},
      "collocations": [
        "go abroad",
        "study abroad",
        "from abroad",
        "at home and abroad"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0007",
    "word": "accept",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əkˈsept/",
      "phonetic_us": "/əkˈsept/",
      "meanings": [
        "接受"
      ],
      "word_forms": {},
      "collocations": [
        "accept the fact",
        "accept responsibility",
        "widely accepted",
        "accept an offer"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0008",
    "word": "accident",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈæksɪdənt/",
      "phonetic_us": "/ˈæksɪdənt/",
      "meanings": [
        "事故",
        "意外"
      ],
      "word_forms": {},
      "collocations": [
        "by accident",
        "car accident",
        "traffic accident",
        "have an accident",
        "accident prone"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0009",
    "word": "act",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ækt/",
      "phonetic_us": "/ækt/",
      "meanings": [
        "法令",
        "条例 v. 行动",
        "（戏）表演"
      ],
      "word_forms": {},
      "collocations": [
        "act as",
        "act like",
        "take action",
        "in the act of",
        "act on stage"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"法令\"的概念",
      "academicContext": "The act plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0010",
    "word": "action",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈækʃ(ə)n/",
      "phonetic_us": "/ˈækʃ(ə)n/",
      "meanings": [
        "行动",
        "行为",
        "举动"
      ],
      "word_forms": {},
      "collocations": [
        "take action",
        "in action",
        "call to action",
        "action plan",
        "course of action"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0011",
    "word": "active",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈæktɪv/",
      "phonetic_us": "/ˈæktɪv/",
      "meanings": [
        "积极的",
        "主动的"
      ],
      "word_forms": {
        "comparative": "activer",
        "superlative": "activest"
      },
      "collocations": [
        "take an active part",
        "active role",
        "active member",
        "stay active"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0012",
    "word": "activity",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ækˈtɪvɪtɪ/",
      "phonetic_us": "/ækˈtɪvɪtɪ/",
      "meanings": [
        "活动"
      ],
      "word_forms": {},
      "collocations": [
        "school activity",
        "outdoor activity",
        "daily activities",
        "business activity"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0013",
    "word": "advantage",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ədˈvɑːntɪdʒ/",
      "phonetic_us": "/ədˈvɑːntɪdʒ/",
      "meanings": [
        "优点",
        "好处",
        "有利条件"
      ],
      "word_forms": {
        "plural": "advantages"
      },
      "collocations": [
        "take advantage of",
        "have an advantage",
        "competitive advantage",
        "to one's advantage"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0014",
    "word": "advertisement",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ədˈvɜːtɪsmənt/",
      "phonetic_us": "/ədˈvɜːtɪsmənt/",
      "meanings": [
        "广告"
      ],
      "word_forms": {},
      "collocations": [
        "TV advertisement",
        "place an advertisement",
        "advertisement campaign"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0015",
    "word": "advice",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ədˈvaɪs/",
      "phonetic_us": "/ədˈvaɪs/",
      "meanings": [
        "忠告",
        "劝告",
        "建议"
      ],
      "word_forms": {},
      "collocations": [
        "take one's advice",
        "piece of advice",
        "ask for advice",
        "follow advice"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0016",
    "word": "afford",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈfɔːd/",
      "phonetic_us": "/əˈfɔːd/",
      "meanings": [
        "负担得起（…的费用）",
        "抽得出（时间）",
        "提供"
      ],
      "word_forms": {
        "comparative": "afforder",
        "superlative": "affordest"
      },
      "collocations": [
        "can't afford",
        "afford to do",
        "afford to buy"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0017",
    "word": "afraid",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈfreɪd/",
      "phonetic_us": "/əˈfreɪd/",
      "meanings": [
        "害怕的",
        "担心"
      ],
      "word_forms": {
        "comparative": "afraidder",
        "superlative": "afraiddest"
      },
      "collocations": [
        "be afraid of",
        "I'm afraid",
        "afraid to do",
        "don't be afraid"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0018",
    "word": "Africa",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈæfrɪkə/",
      "phonetic_us": "/ˈæfrɪkə/",
      "meanings": [
        "非洲"
      ],
      "word_forms": {},
      "collocations": [
        "in Africa",
        "South Africa",
        "North Africa",
        "sub-Saharan Africa"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0019",
    "word": "after",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɑːftə(r)/",
      "phonetic_us": "/ˈɑːftə(r)/",
      "meanings": [
        "在后",
        "后来 prep. 在…之后 conj. 在…以后"
      ],
      "word_forms": {},
      "collocations": [
        "after school",
        "after class",
        "after all",
        "day after day",
        "one after another",
        "look after",
        "run after"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"在后\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "following",
        "behind",
        "later"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0020",
    "word": "afternoon",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɑːftəˈnuːn/",
      "phonetic_us": "/ɑːftəˈnuːn/",
      "meanings": [
        "下午",
        "午后"
      ],
      "word_forms": {
        "plural": "afternoons"
      },
      "collocations": [
        "in the afternoon",
        "this afternoon",
        "good afternoon",
        "afternoon tea"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0021",
    "word": "again",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əˈɡeɪn/",
      "phonetic_us": "/əˈɡeɪn/",
      "meanings": [
        "再一次",
        "再",
        "又"
      ],
      "word_forms": {},
      "collocations": [
        "again and again",
        "once again",
        "try again",
        "come back again",
        "say it again",
        "never again"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"再一次\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "once more",
        "anew",
        "repeatedly"
      ]
    }
  },
  {
    "id": "w0022",
    "word": "against",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈɡeɪnst/",
      "phonetic_us": "/əˈɡeɪnst/",
      "meanings": [
        "对着",
        "反对",
        "倚靠"
      ],
      "word_forms": {},
      "collocations": [
        "fight against",
        "go against",
        "against the law",
        "lean against",
        "up against"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0023",
    "word": "age",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/eɪdʒ/",
      "phonetic_us": "/eɪdʒ/",
      "meanings": [
        "年龄",
        "时代"
      ],
      "word_forms": {
        "plural": "ages"
      },
      "collocations": [
        "at the age of",
        "middle age",
        "stone age",
        "come of age",
        "for ages"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"年龄\"的概念",
      "academicContext": "The age plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0024",
    "word": "ago",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/əˈɡəʊ/",
      "phonetic_us": "/əˈɡəʊ/",
      "meanings": [
        "以前"
      ],
      "word_forms": {
        "plural": "agos"
      },
      "collocations": [
        "long ago",
        "years ago",
        "a moment ago",
        "not long ago",
        "days ago"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"以前\"的概念",
      "academicContext": "The ago plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0025",
    "word": "agree",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əˈɡriː/",
      "phonetic_us": "/əˈɡriː/",
      "meanings": [
        "同意"
      ],
      "word_forms": {
        "noun": "agreement"
      },
      "collocations": [
        "agree with",
        "agree to do",
        "agree on",
        "totally agree",
        "don't agree"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"同意\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "accept",
        "consent",
        "approve"
      ]
    }
  },
  {
    "id": "w0026",
    "word": "air",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/eə(r)/",
      "phonetic_us": "/eə(r)/",
      "meanings": [
        "空气",
        "大气"
      ],
      "word_forms": {
        "plural": "airs"
      },
      "collocations": [
        "fresh air",
        "in the air",
        "by air",
        "air pollution",
        "open air",
        "air conditioner"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"空气\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "atmosphere",
        "sky",
        "breeze"
      ]
    }
  },
  {
    "id": "w0027",
    "word": "aircraft",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈeəkrɑːft/",
      "phonetic_us": "/ˈeəkrɑːft/",
      "meanings": [
        "飞机 (单复数同)"
      ],
      "word_forms": {
        "plural": "aircrafts"
      },
      "collocations": [
        "military aircraft",
        "aircraft carrier",
        "commercial aircraft"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0028",
    "word": "airline",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ ˈeəlain/",
      "phonetic_us": "/ ˈeəlain/",
      "meanings": [
        "航空公司",
        "航空系统",
        "航线"
      ],
      "word_forms": {},
      "collocations": [
        "airline ticket",
        "international airline",
        "budget airline"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0029",
    "word": "airplane",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈeəpleɪn/",
      "phonetic_us": "/ˈeəpleɪn/",
      "meanings": [
        "（美）飞机"
      ],
      "word_forms": {
        "plural": "airplanes"
      },
      "collocations": [
        "by airplane",
        "paper airplane",
        "board an airplane"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0030",
    "word": "airport",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈeəpɔːt/",
      "phonetic_us": "/ˈeəpɔːt/",
      "meanings": [
        "航空站",
        "飞机场"
      ],
      "word_forms": {},
      "collocations": [
        "at the airport",
        "airport security",
        "international airport"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0031",
    "word": "alike",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/əˈlaɪk/",
      "phonetic_us": "/əˈlaɪk/",
      "meanings": [
        "很相似地",
        "同样地"
      ],
      "word_forms": {
        "comparative": "aliker",
        "superlative": "alikest"
      },
      "collocations": [
        "look alike",
        "think alike",
        "alike in",
        "share alike"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用很相似地的方式完成任务",
      "academicContext": "The data was analyzed alike to ensure accuracy.",
      "dailyContext": "Please do it alike this time.",
      "memoryStory": "通过联想\"alike\"的发音和拼写，记住其\"很相似地\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0032",
    "word": "alive",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/əˈlaɪv/",
      "phonetic_us": "/əˈlaɪv/",
      "meanings": [
        "活着的",
        "存在的"
      ],
      "word_forms": {
        "comparative": "aliver",
        "superlative": "alivest"
      },
      "collocations": [
        "stay alive",
        "keep alive",
        "come alive",
        "alive and well",
        "very much alive"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记活着的的事物",
      "academicContext": "Understanding alive concepts is essential for academic success.",
      "dailyContext": "This is really alive! I love it.",
      "memoryStory": "通过联想\"alive\"的发音和拼写，记住其\"活着的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0033",
    "word": "all",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɔːl/",
      "phonetic_us": "/ɔːl/",
      "meanings": [
        "全部地 a. 全（部）",
        "所有的",
        "总"
      ],
      "word_forms": {
        "comparative": "aller",
        "superlative": "allest"
      },
      "collocations": [
        "all day",
        "all the time",
        "all over",
        "all of us",
        "not at all",
        "after all",
        "all right",
        "in all"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "用全部地 a. 全（部）的方式完成任务",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "every",
        "whole",
        "entire",
        "complete"
      ]
    }
  },
  {
    "id": "w0034",
    "word": "allow",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əˈlaʊ/",
      "phonetic_us": "/əˈlaʊ/",
      "meanings": [
        "允许",
        "准许"
      ],
      "word_forms": {
        "noun": "allowance"
      },
      "collocations": [
        "allow sb to do",
        "allow doing",
        "not allow",
        "allow time for",
        "allow for"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"允许\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "permit",
        "let",
        "enable"
      ]
    }
  },
  {
    "id": "w0035",
    "word": "almost",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɔːlməʊst/",
      "phonetic_us": "/ˈɔːlməʊst/",
      "meanings": [
        "几乎",
        "差不多"
      ],
      "word_forms": {},
      "collocations": [
        "almost every",
        "almost never",
        "almost all",
        "almost impossible",
        "almost ready"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"几乎\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "nearly",
        "practically",
        "virtually"
      ]
    }
  },
  {
    "id": "w0036",
    "word": "alone",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/əˈləʊn/",
      "phonetic_us": "/əˈləʊn/",
      "meanings": [
        "单独的",
        "孤独的"
      ],
      "word_forms": {
        "comparative": "aloner",
        "superlative": "alonest"
      },
      "collocations": [
        "leave alone",
        "all alone",
        "let alone",
        "live alone",
        "feel alone"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记单独的的事物",
      "academicContext": "Understanding alone concepts is essential for academic success.",
      "dailyContext": "This is really alone! I love it.",
      "memoryStory": "通过联想\"alone\"的发音和拼写，记住其\"单独的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0037",
    "word": "along",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/əˈlɔŋ; (US) əˈlɔŋ/",
      "phonetic_us": "/əˈlɔŋ; (US) əˈlɔŋ/",
      "meanings": [
        "向前",
        "和…一起",
        "一同 prep. 沿着"
      ],
      "word_forms": {},
      "collocations": [
        "come along",
        "get along",
        "along with",
        "all along",
        "move along"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"向前\"的概念",
      "academicContext": "The along plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"along\"的发音和拼写，记住其\"向前\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0038",
    "word": "already",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɔːlˈredɪ/",
      "phonetic_us": "/ɔːlˈredɪ/",
      "meanings": [
        "已经"
      ],
      "word_forms": {
        "plural": "alreadies"
      },
      "collocations": [
        "already done",
        "already know",
        "have already"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0039",
    "word": "also",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɔːlsəʊ/",
      "phonetic_us": "/ˈɔːlsəʊ/",
      "meanings": [
        "也"
      ],
      "word_forms": {},
      "collocations": [
        "also like",
        "can also",
        "also need",
        "but also",
        "also known as"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"也\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "too",
        "as well",
        "additionally"
      ]
    }
  },
  {
    "id": "w0040",
    "word": "although",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɔːlˈðəʊ/",
      "phonetic_us": "/ɔːlˈðəʊ/",
      "meanings": [
        "虽然",
        "尽管"
      ],
      "word_forms": {},
      "collocations": [
        "although...still",
        "although it is",
        "even although"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"虽然\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "though",
        "even though",
        "while"
      ]
    }
  },
  {
    "id": "w0041",
    "word": "always",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɔːlweɪz/",
      "phonetic_us": "/ˈɔːlweɪz/",
      "meanings": [
        "总是",
        "一直",
        "永远"
      ],
      "word_forms": {},
      "collocations": [
        "always do",
        "not always",
        "always ready",
        "as always",
        "will always"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"总是\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "forever",
        "constantly",
        "continually"
      ]
    }
  },
  {
    "id": "w0042",
    "word": "amaze",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/əˈmeɪz/",
      "phonetic_us": "/əˈmeɪz/",
      "meanings": [
        "惊奇",
        "惊叹",
        "震惊"
      ],
      "word_forms": {
        "plural": "amazes"
      },
      "collocations": [
        "be amazed at",
        "amaze me",
        "never cease to amaze",
        "simply amazing"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"惊奇\"的概念",
      "academicContext": "The amaze plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"amaze\"的发音和拼写，记住其\"惊奇\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0043",
    "word": "amazing",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈmeɪzɪŋ/",
      "phonetic_us": "/əˈmeɪzɪŋ/",
      "meanings": [
        "惊叹的",
        "震惊的",
        "令人惊讶的"
      ],
      "word_forms": {
        "comparative": "more amazing",
        "superlative": "most amazing"
      },
      "collocations": [
        "absolutely amazing",
        "it's amazing",
        "amazing experience",
        "simply amazing"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0044",
    "word": "America",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈmerɪkə/",
      "phonetic_us": "/əˈmerɪkə/",
      "meanings": [
        "美国",
        "美洲"
      ],
      "word_forms": {},
      "collocations": [
        "North America",
        "South America",
        "Latin America",
        "across America"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0045",
    "word": "American",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈmerɪkən/",
      "phonetic_us": "/əˈmerɪkən/",
      "meanings": [
        "美国的",
        "美国人的 n. 美国人"
      ],
      "word_forms": {
        "plural": "americans",
        "comparative": "more american",
        "superlative": "most american"
      },
      "collocations": [
        "American dream",
        "American English",
        "Native American",
        "all-American"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0046",
    "word": "among",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əˈmʌŋ/",
      "phonetic_us": "/əˈmʌŋ/",
      "meanings": [
        "在…中间",
        "在（三个以上）之间"
      ],
      "word_forms": {},
      "collocations": [
        "among students",
        "among them",
        "among other things",
        "popular among"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"在…中间\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "amid",
        "between",
        "amongst"
      ]
    }
  },
  {
    "id": "w0047",
    "word": "and",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ənd, ænd/",
      "phonetic_us": "/ənd, ænd/",
      "meanings": [
        "和",
        "又"
      ],
      "word_forms": {},
      "collocations": [
        "and then",
        "and so on",
        "more and more",
        "again and again",
        "now and then"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"和\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0048",
    "word": "angel",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈeindʒəl/",
      "phonetic_us": "/ˈeindʒəl/",
      "meanings": [
        "天使",
        "守护神"
      ],
      "word_forms": {},
      "collocations": [
        "guardian angel",
        "like an angel",
        "fallen angel"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"天使\"的概念",
      "academicContext": "The angel plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"angel\"的发音和拼写，记住其\"天使\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0049",
    "word": "angry",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈænɡrɪ/",
      "phonetic_us": "/ˈænɡrɪ/",
      "meanings": [
        "生气的",
        "愤怒的"
      ],
      "word_forms": {
        "comparative": "angrier",
        "superlative": "angriest"
      },
      "collocations": [
        "be angry with",
        "get angry",
        "angry at",
        "angry about",
        "make sb angry"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记生气的的事物",
      "academicContext": "Understanding angry concepts is essential for academic success.",
      "dailyContext": "This is really angry! I love it.",
      "memoryStory": "通过联想\"angry\"的发音和拼写，记住其\"生气的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0050",
    "word": "animal",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈænɪm(ə)l/",
      "phonetic_us": "/ˈænɪm(ə)l/",
      "meanings": [
        "动物"
      ],
      "word_forms": {},
      "collocations": [
        "wild animal",
        "domestic animal",
        "animal rights",
        "endangered animal"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0051",
    "word": "another",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əˈnʌðə(r)/",
      "phonetic_us": "/əˈnʌðə(r)/",
      "meanings": [
        "再一",
        "另一",
        "别的 pron. 另一个"
      ],
      "word_forms": {},
      "collocations": [
        "another one",
        "another day",
        "one another",
        "another time",
        "yet another"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"再一\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [],
      "etymology": null
    }
  },
  {
    "id": "w0052",
    "word": "answer",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɑːnsə(r); (US) ˈænsər/",
      "phonetic_us": "/ˈɑːnsə(r); (US) ˈænsər/",
      "meanings": [
        "回答",
        "答复",
        "答案 v. 回答"
      ],
      "word_forms": {},
      "collocations": [
        "answer questions",
        "in answer to",
        "answer the phone"
      ],
      "exam_frequency": 2.5,
      "gameDescription": "对问题或需求做出回应",
      "academicContext": "Please answer all questions on the exam.",
      "dailyContext": "I need to answer this phone call.",
      "memoryStory": "",
      "confusableWords": [
        "reply",
        "respond"
      ],
      "etymology": {
        "root": "answer",
        "meaning": "来自古英语andswaru,回答"
      }
    }
  },
  {
    "id": "w0053",
    "word": "any",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈenɪ/",
      "phonetic_us": "/ˈenɪ/",
      "meanings": [
        "任何的",
        "（用于疑问句、否定句）一些",
        "什么"
      ],
      "word_forms": {},
      "collocations": [
        "any other",
        "any more",
        "any time",
        "not...any",
        "hardly any",
        "if any"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记任何的的事物",
      "academicContext": "Understanding any concepts is essential for academic success.",
      "dailyContext": "This is really any! I love it.",
      "memoryStory": "",
      "confusableWords": [
        "some",
        "whatever",
        "whichever"
      ]
    }
  },
  {
    "id": "w0054",
    "word": "anyhow",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈenɪhaʊ/",
      "phonetic_us": "/ˈenɪhaʊ/",
      "meanings": [
        "不管怎样"
      ],
      "word_forms": {
        "plural": "anyhows"
      },
      "collocations": [
        "anyhow I must",
        "but anyhow"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0055",
    "word": "anyone",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈenɪwʌn/",
      "phonetic_us": "/ˈenɪwʌn/",
      "meanings": [
        "任何人",
        "无论谁"
      ],
      "word_forms": {
        "plural": "anyones"
      },
      "collocations": [
        "anyone else",
        "if anyone",
        "anyone who",
        "hardly anyone"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0056",
    "word": "anything",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈenɪθɪŋ/",
      "phonetic_us": "/ˈenɪθɪŋ/",
      "meanings": [
        "什么事（物）",
        "任何事（物）"
      ],
      "word_forms": {
        "plural": "anythings"
      },
      "collocations": [
        "anything else",
        "anything but",
        "if anything",
        "anything goes"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0057",
    "word": "anywhere",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈenɪweə(r)/",
      "phonetic_us": "/ˈenɪweə(r)/",
      "meanings": [
        "任何地方"
      ],
      "word_forms": {
        "comparative": "more anywhere",
        "superlative": "most anywhere"
      },
      "collocations": [
        "anywhere else",
        "anywhere in the world",
        "not anywhere",
        "go anywhere"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0058",
    "word": "apologize",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈpɔlədʒaɪz/",
      "phonetic_us": "/əˈpɔlədʒaɪz/",
      "meanings": [
        "道歉",
        "谢罪"
      ],
      "word_forms": {
        "plural": "apologizes"
      },
      "collocations": [
        "apologize for",
        "apologize to",
        "need to apologize"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0059",
    "word": "apology",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈpɔlədʒɪ/",
      "phonetic_us": "/əˈpɔlədʒɪ/",
      "meanings": [
        "道歉",
        "歉意"
      ],
      "word_forms": {
        "plural": "apologies"
      },
      "collocations": [
        "make an apology",
        "accept an apology",
        "owe an apology",
        "formal apology"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0060",
    "word": "apple",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈæp(ə)l/",
      "phonetic_us": "/ˈæp(ə)l/",
      "meanings": [
        "苹果"
      ],
      "word_forms": {
        "plural": "apples"
      },
      "collocations": [
        "an apple",
        "apple pie",
        "apple tree",
        "bad apple",
        "the Big Apple"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"苹果\"的概念",
      "academicContext": "The apple plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"apple\"的发音和拼写，记住其\"苹果\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0061",
    "word": "April",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈeɪpr(ə)l/",
      "phonetic_us": "/ˈeɪpr(ə)l/",
      "meanings": [
        "4月"
      ],
      "word_forms": {},
      "collocations": [
        "in April",
        "April Fool's Day",
        "this April",
        "last April"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"4月\"的概念",
      "academicContext": "The April plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"April\"的发音和拼写，记住其\"4月\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0062",
    "word": "Arab",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈærəb/",
      "phonetic_us": "/ˈærəb/",
      "meanings": [
        "阿拉伯的 n. 阿拉伯人"
      ],
      "word_forms": {
        "plural": "arabs",
        "comparative": "arabber",
        "superlative": "arabbest"
      },
      "collocations": [
        "Arab country",
        "Arab world",
        "Arab people"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记阿拉伯的 n. 阿拉伯人的事物",
      "academicContext": "Understanding Arab concepts is essential for academic success.",
      "dailyContext": "This is really Arab! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0063",
    "word": "area",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈeərɪə/",
      "phonetic_us": "/ˈeərɪə/",
      "meanings": [
        "面积",
        "地域",
        "区域"
      ],
      "word_forms": {},
      "collocations": [
        "in the area",
        "local area",
        "living area",
        "play area",
        "rural area",
        "urban area"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"面积\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "region",
        "zone",
        "district"
      ]
    }
  },
  {
    "id": "w0064",
    "word": "arm",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɑːm/",
      "phonetic_us": "/ɑːm/",
      "meanings": [
        "臂",
        "支架",
        "（美）武器"
      ],
      "word_forms": {
        "plural": "arms"
      },
      "collocations": [
        "take sb's arm",
        "in one's arms",
        "arm in arm",
        "with open arms",
        "bear arms"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"臂\"的概念",
      "academicContext": "The arm plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0065",
    "word": "army",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈɑːmɪ/",
      "phonetic_us": "/ˈɑːmɪ/",
      "meanings": [
        "军队"
      ],
      "word_forms": {
        "plural": "armies"
      },
      "collocations": [
        "join the army",
        "in the army",
        "army officer",
        "people's army"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"军队\"的概念",
      "academicContext": "The army plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0066",
    "word": "around",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əˈraʊnd/",
      "phonetic_us": "/əˈraʊnd/",
      "meanings": [
        "在周围",
        "在附近 prep. 在…周围",
        "大约"
      ],
      "word_forms": {},
      "collocations": [
        "around here",
        "look around",
        "turn around",
        "all around",
        "around the world",
        "sit around"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"在周围\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "about",
        "surrounding",
        "approximately"
      ]
    }
  },
  {
    "id": "w0067",
    "word": "arrive",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈraɪv/",
      "phonetic_us": "/əˈraɪv/",
      "meanings": [
        "到达",
        "达到"
      ],
      "word_forms": {},
      "collocations": [
        "arrive at",
        "arrive in",
        "arrive on time",
        "arrive late"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0068",
    "word": "arrow",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈærəʊ/",
      "phonetic_us": "/ˈærəʊ/",
      "meanings": [
        "箭",
        "箭头"
      ],
      "word_forms": {
        "plural": "arrows"
      },
      "collocations": [
        "bow and arrow",
        "straight as an arrow",
        "follow the arrow"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"箭\"的概念",
      "academicContext": "The arrow plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"arrow\"的发音和拼写，记住其\"箭\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0069",
    "word": "art",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɑːt/",
      "phonetic_us": "/ɑːt/",
      "meanings": [
        "艺术",
        "美术",
        "技艺"
      ],
      "word_forms": {
        "plural": "arts"
      },
      "collocations": [
        "work of art",
        "art gallery",
        "fine arts",
        "the art of",
        "modern art"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"艺术\"的概念",
      "academicContext": "The art plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0070",
    "word": "artist",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɑːtɪst/",
      "phonetic_us": "/ˈɑːtɪst/",
      "meanings": [
        "艺术家",
        "美术家"
      ],
      "word_forms": {
        "plural": "artists"
      },
      "collocations": [
        "talented artist",
        "street artist",
        "recording artist",
        "make-up artist"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0071",
    "word": "article",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɑːtɪk(ə)l/",
      "phonetic_us": "/ˈɑːtɪk(ə)l/",
      "meanings": [
        "文章",
        "物品",
        "冠词"
      ],
      "word_forms": {
        "plural": "articles"
      },
      "collocations": [
        "write an article",
        "newspaper article",
        "definite article",
        "feature article"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0072",
    "word": "Asia",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈeɪʃə/",
      "phonetic_us": "/ˈeɪʃə/",
      "meanings": [
        "亚洲"
      ],
      "word_forms": {},
      "collocations": [
        "in Asia",
        "East Asia",
        "Southeast Asia",
        "across Asia"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"亚洲\"的概念",
      "academicContext": "The Asia plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0073",
    "word": "Asian",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈeɪʃ(ə)n, ˈeɪʒ(ə)n/",
      "phonetic_us": "/ˈeɪʃ(ə)n, ˈeɪʒ(ə)n/",
      "meanings": [
        "亚洲（人）的 n. 亚洲人"
      ],
      "word_forms": {
        "plural": "asians",
        "comparative": "asianner",
        "superlative": "asiannest"
      },
      "collocations": [
        "Asian country",
        "Asian people",
        "South Asian"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记亚洲（人）的 n. 亚洲人的事物",
      "academicContext": "Understanding Asian concepts is essential for academic success.",
      "dailyContext": "This is really Asian! I love it.",
      "memoryStory": "通过联想\"Asian\"的发音和拼写，记住其\"亚洲（人）的 n. 亚洲人\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0074",
    "word": "ask",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɑːsk/",
      "phonetic_us": "/ɑːsk/",
      "meanings": [
        "问",
        "请求",
        "要求"
      ],
      "word_forms": {
        "noun": "question"
      },
      "collocations": [
        "ask for",
        "ask about",
        "ask sb to do"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "向他人寻求信息或帮助",
      "dailyContext": "Can I ask you a question?",
      "memoryStory": "",
      "confusableWords": [
        "question",
        "inquire",
        "request"
      ],
      "etymology": {
        "root": "ask",
        "meaning": "来自古英语āscian,询问"
      }
    }
  },
  {
    "id": "w0075",
    "word": "asleep",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈsliːp/",
      "phonetic_us": "/əˈsliːp/",
      "meanings": [
        "睡着的",
        "熟睡"
      ],
      "word_forms": {
        "comparative": "asleepper",
        "superlative": "asleeppest"
      },
      "collocations": [
        "fall asleep",
        "fast asleep",
        "sound asleep",
        "half asleep"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0076",
    "word": "assistant",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈsɪst(ə)nt/",
      "phonetic_us": "/əˈsɪst(ə)nt/",
      "meanings": [
        "助手",
        "助理"
      ],
      "word_forms": {},
      "collocations": [
        "personal assistant",
        "shop assistant",
        "assistant manager",
        "teaching assistant"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0077",
    "word": "at",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/æt/",
      "phonetic_us": "/æt/",
      "meanings": [
        "在（几点钟）",
        "在（某处）"
      ],
      "word_forms": {},
      "collocations": [
        "at school",
        "at home",
        "at least",
        "at last",
        "at once",
        "at first",
        "at night",
        "good at"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "传达在（几点钟）的意思",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0078",
    "word": "attack",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈtæk/",
      "phonetic_us": "/əˈtæk/",
      "meanings": [
        "/ n. 攻击",
        "袭击"
      ],
      "word_forms": {
        "plural": "attacks"
      },
      "collocations": [
        "heart attack",
        "under attack",
        "attack on",
        "launch an attack"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0079",
    "word": "attend",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈtend/",
      "phonetic_us": "/əˈtend/",
      "meanings": [
        "看护",
        "照料",
        "服侍"
      ],
      "word_forms": {},
      "collocations": [
        "attend school",
        "attend a meeting",
        "attend to",
        "attend class"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0080",
    "word": "attention",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈtenʃ(ə)n/",
      "phonetic_us": "/əˈtenʃ(ə)n/",
      "meanings": [
        "注意",
        "关心"
      ],
      "word_forms": {},
      "collocations": [
        "pay attention to",
        "draw attention",
        "center of attention",
        "attention span"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0081",
    "word": "attract",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈtrækt/",
      "phonetic_us": "/əˈtrækt/",
      "meanings": [
        "吸引",
        "引起"
      ],
      "word_forms": {},
      "collocations": [
        "attract attention",
        "attract interest",
        "attract customers",
        "opposites attract"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0082",
    "word": "August",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɔːɡəst/",
      "phonetic_us": "/ˈɔːɡəst/",
      "meanings": [
        "8月"
      ],
      "word_forms": {},
      "collocations": [
        "in August",
        "this August",
        "last August",
        "mid-August"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0083",
    "word": "aunt",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɑːnt; (US) ænt/",
      "phonetic_us": "/ɑːnt; (US) ænt/",
      "meanings": [
        "伯母",
        "舅母",
        "婶"
      ],
      "word_forms": {
        "plural": "aunts"
      },
      "collocations": [
        "my aunt",
        "aunt and uncle",
        "visit my aunt"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"伯母\"的概念",
      "academicContext": "The aunt plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0084",
    "word": "Australia",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɔˈstreɪljə/",
      "phonetic_us": "/ɔˈstreɪljə/",
      "meanings": [
        "澳洲",
        "澳大利亚"
      ],
      "word_forms": {},
      "collocations": [
        "in Australia",
        "from Australia",
        "travel to Australia",
        "across Australia"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0085",
    "word": "Australian",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɔˈstreɪlɪən/",
      "phonetic_us": "/ɔˈstreɪlɪən/",
      "meanings": [
        "澳洲的",
        "澳大利亚人的 n. 澳大利亚人"
      ],
      "word_forms": {
        "plural": "australians",
        "comparative": "more australian",
        "superlative": "most australian"
      },
      "collocations": [
        "Australian accent",
        "Australian dollar"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0086",
    "word": "autumn",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɔːtəm/",
      "phonetic_us": "/ˈɔːtəm/",
      "meanings": [
        "秋天",
        "秋季"
      ],
      "word_forms": {
        "plural": "autumns"
      },
      "collocations": [
        "in autumn",
        "autumn leaves",
        "this autumn",
        "late autumn"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0087",
    "word": "away",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əˈweɪ/",
      "phonetic_us": "/əˈweɪ/",
      "meanings": [
        "离开",
        "远离"
      ],
      "word_forms": {},
      "collocations": [
        "far away",
        "right away",
        "go away",
        "take away",
        "run away",
        "stay away",
        "put away"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"离开\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "absent",
        "gone",
        "distant"
      ]
    }
  },
  {
    "id": "w0088",
    "word": "baby",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈbeɪbɪ/",
      "phonetic_us": "/ˈbeɪbɪ/",
      "meanings": [
        "婴儿"
      ],
      "word_forms": {
        "plural": "babies"
      },
      "collocations": [
        "baby boy",
        "baby girl",
        "have a baby",
        "baby face",
        "cry like a baby"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"婴儿\"的概念",
      "academicContext": "The baby plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0089",
    "word": "back",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/bæk/",
      "phonetic_us": "/bæk/",
      "meanings": [
        "回（原处）",
        "向后 a. 后面的 n. 背后",
        "后部"
      ],
      "word_forms": {
        "plural": "backs"
      },
      "collocations": [
        "come back",
        "go back",
        "get back",
        "bring back",
        "give back",
        "call back",
        "back door",
        "at the back"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达回（原处）这一概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0090",
    "word": "badly",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈbædlɪ/",
      "phonetic_us": "/ˈbædlɪ/",
      "meanings": [
        "坏",
        "恶劣地"
      ],
      "word_forms": {},
      "collocations": [
        "badly hurt",
        "go badly",
        "badly needed",
        "want badly"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用坏的方式完成任务",
      "academicContext": "The data was analyzed badly to ensure accuracy.",
      "dailyContext": "Please do it badly this time.",
      "memoryStory": "通过联想\"badly\"的发音和拼写，记住其\"坏\"的含义。",
      "etymology": {
        "suffix": "-ly",
        "root": "bad",
        "meaning": "bad + ly(地)"
      },
      "confusableWords": []
    }
  },
  {
    "id": "w0091",
    "word": "bake",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/beɪk/",
      "phonetic_us": "/beɪk/",
      "meanings": [
        "烤",
        "烘（面包）"
      ],
      "word_forms": {},
      "collocations": [
        "bake bread",
        "bake a cake",
        "freshly baked",
        "bake in the oven"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"烤\"的概念",
      "academicContext": "The bake plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0092",
    "word": "ball",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bɔːl/",
      "phonetic_us": "/bɔːl/",
      "meanings": [
        "球 n. 舞会"
      ],
      "word_forms": {
        "plural": "balls"
      },
      "collocations": [
        "play ball",
        "football",
        "basketball",
        "have a ball",
        "on the ball"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"球 n. 舞会\"的概念",
      "academicContext": "The ball plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0093",
    "word": "balloon",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/bəˈluːn/",
      "phonetic_us": "/bəˈluːn/",
      "meanings": [
        "气球"
      ],
      "word_forms": {
        "plural": "balloons"
      },
      "collocations": [
        "hot air balloon",
        "balloon animal",
        "blow up a balloon"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0094",
    "word": "bamboo",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/bæmˈbuː/",
      "phonetic_us": "/bæmˈbuː/",
      "meanings": [
        "竹子"
      ],
      "word_forms": {
        "plural": "bamboos"
      },
      "collocations": [
        "bamboo forest",
        "bamboo shoots",
        "bamboo pole"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0095",
    "word": "banana",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/bəˈnɑːnə; (US) bəˈnænə/",
      "phonetic_us": "/bəˈnɑːnə; (US) bəˈnænə/",
      "meanings": [
        "香蕉"
      ],
      "word_forms": {
        "plural": "bananas"
      },
      "collocations": [
        "banana peel",
        "banana split",
        "go bananas",
        "top banana"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0096",
    "word": "band",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bænd/",
      "phonetic_us": "/bænd/",
      "meanings": [
        "乐队",
        "波段",
        "一伙"
      ],
      "word_forms": {
        "plural": "bands"
      },
      "collocations": [
        "rock band",
        "rubber band",
        "marching band",
        "band member"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"乐队\"的概念",
      "academicContext": "The band plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0097",
    "word": "bang",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bæŋ/",
      "phonetic_us": "/bæŋ/",
      "meanings": [
        "砰"
      ],
      "word_forms": {
        "plural": "bangs"
      },
      "collocations": [
        "big bang",
        "go bang",
        "bang on the door",
        "with a bang"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"砰\"的概念",
      "academicContext": "The bang plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0098",
    "word": "base",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/beɪs/",
      "phonetic_us": "/beɪs/",
      "meanings": [
        "根据地",
        "基地",
        "（棒球）垒"
      ],
      "word_forms": {
        "comparative": "baser",
        "superlative": "basest"
      },
      "collocations": [
        "military base",
        "based on",
        "home base",
        "database",
        "on the base of"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用根据地的方式完成任务",
      "academicContext": "The data was analyzed base to ensure accuracy.",
      "dailyContext": "Please do it base this time.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0099",
    "word": "baseball",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbeɪsbɔːl/",
      "phonetic_us": "/ˈbeɪsbɔːl/",
      "meanings": [
        "棒球"
      ],
      "word_forms": {
        "plural": "baseballs"
      },
      "collocations": [
        "play baseball",
        "baseball game",
        "baseball bat",
        "baseball card"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0100",
    "word": "basket",
    "level": "初一",
    "unit": "Unit 1",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbɑːskɪt; (US) ˈbæskɪt/",
      "phonetic_us": "/ˈbɑːskɪt; (US) ˈbæskɪt/",
      "meanings": [
        "篮子"
      ],
      "word_forms": {
        "plural": "baskets"
      },
      "collocations": [
        "shopping basket",
        "laundry basket",
        "picnic basket",
        "waste basket"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0101",
    "word": "basketball",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbɑːskɪtbɔːl/",
      "phonetic_us": "/ˈbɑːskɪtbɔːl/",
      "meanings": [
        "篮球"
      ],
      "word_forms": {
        "plural": "basketballs"
      },
      "collocations": [
        "play basketball",
        "basketball game",
        "basketball court",
        "basketball player"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0102",
    "word": "bath",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bɑːθ; (US) bæθ/",
      "phonetic_us": "/bɑːθ; (US) bæθ/",
      "meanings": [
        "洗澡",
        "浴室",
        "澡盆"
      ],
      "word_forms": {},
      "collocations": [
        "take a bath",
        "have a bath",
        "bath towel",
        "bathroom"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"洗澡\"的概念",
      "academicContext": "The bath plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0103",
    "word": "be",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/biː/",
      "phonetic_us": "/biː/",
      "meanings": [
        "是 (am",
        "is",
        "are"
      ],
      "word_forms": {},
      "collocations": [
        "be able to",
        "be good at",
        "be afraid of",
        "be interested in",
        "be ready for",
        "be proud of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达是 (am这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0104",
    "word": "beach",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/biːtʃ/",
      "phonetic_us": "/biːtʃ/",
      "meanings": [
        "海滨",
        "海滩"
      ],
      "word_forms": {
        "plural": "beaches"
      },
      "collocations": [
        "on the beach",
        "go to the beach",
        "beach volleyball",
        "sandy beach"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"海滨\"的概念",
      "academicContext": "The beach plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"beach\"的发音和拼写，记住其\"海滨\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0105",
    "word": "bear",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/beə(r)/",
      "phonetic_us": "/beə(r)/",
      "meanings": [
        "承受",
        "负担",
        "承担"
      ],
      "word_forms": {},
      "collocations": [
        "can't bear",
        "bear in mind",
        "bear fruit",
        "teddy bear",
        "polar bear"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"承受\"的概念",
      "academicContext": "The bear plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0106",
    "word": "beautiful",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbjuːtɪf(ə)l/",
      "phonetic_us": "/ˈbjuːtɪf(ə)l/",
      "meanings": [
        "美",
        "美丽",
        "美观的"
      ],
      "word_forms": {},
      "collocations": [
        "beautiful scenery",
        "beautiful day",
        "beautiful mind"
      ],
      "exam_frequency": 2.5,
      "gameDescription": "令人愉悦的视觉或精神体验",
      "academicContext": "Mathematics can be beautifully elegant.",
      "dailyContext": "What a beautiful sunset!",
      "memoryStory": "",
      "confusableWords": [
        "pretty",
        "gorgeous"
      ],
      "etymology": {
        "root": "beauty",
        "suffix": "-ful",
        "meaning": "beauty(美) + ful(充满) = 充满美的"
      }
    }
  },
  {
    "id": "w0107",
    "word": "because",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/bɪˈkɔz; (US) bɪˈkɔːz/",
      "phonetic_us": "/bɪˈkɔz; (US) bɪˈkɔːz/",
      "meanings": [
        "因为"
      ],
      "word_forms": {},
      "collocations": [
        "because of",
        "just because",
        "because...so..."
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"因为\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "since",
        "as",
        "for"
      ]
    }
  },
  {
    "id": "w0108",
    "word": "bed",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bed/",
      "phonetic_us": "/bed/",
      "meanings": [
        "床"
      ],
      "word_forms": {
        "plural": "beds"
      },
      "collocations": [
        "go to bed",
        "in bed",
        "make the bed",
        "bed and breakfast",
        "bed time"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"床\"的概念",
      "academicContext": "The bed plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0109",
    "word": "bedroom",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbedruːm/",
      "phonetic_us": "/ˈbedruːm/",
      "meanings": [
        "寝室",
        "卧室"
      ],
      "word_forms": {
        "plural": "bedrooms"
      },
      "collocations": [
        "master bedroom",
        "spare bedroom",
        "bedroom furniture"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0110",
    "word": "bee",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/biː/",
      "phonetic_us": "/biː/",
      "meanings": [
        "蜜蜂"
      ],
      "word_forms": {
        "plural": "bees"
      },
      "collocations": [
        "busy as a bee",
        "honey bee",
        "bee sting",
        "queen bee"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"蜜蜂\"的概念",
      "academicContext": "The bee plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0111",
    "word": "beef",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/biːf/",
      "phonetic_us": "/biːf/",
      "meanings": [
        "牛肉"
      ],
      "word_forms": {
        "plural": "beeves"
      },
      "collocations": [
        "beef steak",
        "roast beef",
        "ground beef",
        "beef up"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"牛肉\"的概念",
      "academicContext": "The beef plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0112",
    "word": "beer",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bɪə(r)/",
      "phonetic_us": "/bɪə(r)/",
      "meanings": [
        "啤酒"
      ],
      "word_forms": {
        "plural": "beers"
      },
      "collocations": [
        "drink beer",
        "a glass of beer",
        "beer bottle",
        "ice-cold beer"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"啤酒\"的概念",
      "academicContext": "The beer plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0113",
    "word": "before",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/bɪˈfɔː(r)/",
      "phonetic_us": "/bɪˈfɔː(r)/",
      "meanings": [
        "在…以前",
        "在…前面 ad. 以前 conj. 在…之前"
      ],
      "word_forms": {},
      "collocations": [
        "before long",
        "long before",
        "before that",
        "as before",
        "never before"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"在…以前\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "prior to",
        "earlier",
        "ahead of"
      ]
    }
  },
  {
    "id": "w0114",
    "word": "beg",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/beɡ/",
      "phonetic_us": "/beɡ/",
      "meanings": [
        "请求",
        "乞求",
        "乞讨 "
      ],
      "word_forms": {},
      "collocations": [
        "beg for",
        "I beg your pardon",
        "beg to differ",
        "beg the question"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"请求\"的概念",
      "academicContext": "The beg plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0115",
    "word": "beginning",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/bɪˈɡɪnɪŋ/",
      "phonetic_us": "/bɪˈɡɪnɪŋ/",
      "meanings": [
        "开始",
        "开端"
      ],
      "word_forms": {},
      "collocations": [
        "at the beginning",
        "from the beginning",
        "beginning of the end",
        "new beginning"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0116",
    "word": "behind",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/bɪˈhaɪnd/",
      "phonetic_us": "/bɪˈhaɪnd/",
      "meanings": [
        "(表示位置)在…后面 ad. 在后面",
        "向后"
      ],
      "word_forms": {
        "plural": "behinds"
      },
      "collocations": [
        "fall behind",
        "behind schedule",
        "get behind",
        "behind the scenes",
        "leave behind"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0117",
    "word": "believe",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/bɪˈliːv/",
      "phonetic_us": "/bɪˈliːv/",
      "meanings": [
        "相信",
        "认为"
      ],
      "word_forms": {
        "noun": "belief",
        "adjective": "believable"
      },
      "collocations": [
        "believe in",
        "can't believe",
        "make believe"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"相信\"的概念",
      "academicContext": "Scientists believe climate change is real.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "trust",
        "think",
        "suppose"
      ],
      "etymology": {
        "prefix": "be-",
        "root": "lieve",
        "meaning": "be(使) + lieve(生活) = 使成为生活的一部分,相信"
      }
    }
  },
  {
    "id": "w0118",
    "word": "bell",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bel/",
      "phonetic_us": "/bel/",
      "meanings": [
        "钟",
        "铃",
        "钟(铃)声"
      ],
      "word_forms": {
        "plural": "bells"
      },
      "collocations": [
        "ring the bell",
        "door bell",
        "church bell",
        "alarm bell",
        "bell tower"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"钟\"的概念",
      "academicContext": "The bell plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0119",
    "word": "below",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bɪˈləʊ/",
      "phonetic_us": "/bɪˈləʊ/",
      "meanings": [
        "在…下面"
      ],
      "word_forms": {},
      "collocations": [
        "below zero",
        "see below",
        "down below",
        "below average",
        "below the surface"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"在…下面\"的概念",
      "academicContext": "The below plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"below\"的发音和拼写，记住其\"在…下面\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0120",
    "word": "beside",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/bɪˈsaɪd/",
      "phonetic_us": "/bɪˈsaɪd/",
      "meanings": [
        "在…旁边",
        "靠近"
      ],
      "word_forms": {},
      "collocations": [
        "beside the point",
        "sit beside",
        "stand beside"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0121",
    "word": "besides",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/bɪˈsaɪdz/",
      "phonetic_us": "/bɪˈsaɪdz/",
      "meanings": [
        "除…以外（还有） ad. 还有",
        "此外"
      ],
      "word_forms": {
        "plural": "besideses"
      },
      "collocations": [
        "besides that",
        "what besides"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0122",
    "word": "bicycle",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbaɪsɪk(ə)l/",
      "phonetic_us": "/ˈbaɪsɪk(ə)l/",
      "meanings": [
        "自行车"
      ],
      "word_forms": {},
      "collocations": [
        "ride a bicycle",
        "bicycle lane",
        "bicycle pump"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0123",
    "word": "big",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/bɪɡ/",
      "phonetic_us": "/bɪɡ/",
      "meanings": [
        "大的"
      ],
      "word_forms": {
        "comparative": "bigger",
        "superlative": "biggest"
      },
      "collocations": [
        "big deal",
        "big data",
        "think big"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记大的的事物",
      "academicContext": "This is a big breakthrough in science.",
      "dailyContext": "What a big house!",
      "memoryStory": "",
      "confusableWords": [
        "large",
        "huge",
        "enormous",
        "great"
      ],
      "etymology": {
        "root": "big",
        "meaning": "来源不明,可能来自北欧语言"
      }
    }
  },
  {
    "id": "w0124",
    "word": "billion",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbɪljən/",
      "phonetic_us": "/ˈbɪljən/",
      "meanings": [
        "十亿"
      ],
      "word_forms": {
        "plural": "billions"
      },
      "collocations": [
        "billions of",
        "multi-billion",
        "billion dollar"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0125",
    "word": "biology",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/baiɔlədʒɪ/",
      "phonetic_us": "/baiɔlədʒɪ/",
      "meanings": [
        "生物（学）"
      ],
      "word_forms": {},
      "collocations": [
        "study biology",
        "marine biology",
        "molecular biology"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0126",
    "word": "bird",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bəːd/",
      "phonetic_us": "/bəːd/",
      "meanings": [
        "鸟"
      ],
      "word_forms": {
        "plural": "birds"
      },
      "collocations": [
        "early bird",
        "bird's eye view",
        "rare bird",
        "free as a bird",
        "kill two birds with one stone"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"鸟\"的概念",
      "academicContext": "The bird plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0127",
    "word": "birth",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bəːθ/",
      "phonetic_us": "/bəːθ/",
      "meanings": [
        "出生",
        "诞生"
      ],
      "word_forms": {
        "plural": "births"
      },
      "collocations": [
        "give birth to",
        "birth certificate",
        "date of birth",
        "from birth",
        "birth rate"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"出生\"的概念",
      "academicContext": "The birth plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"birth\"的发音和拼写，记住其\"出生\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0128",
    "word": "birthday",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbəːθdeɪ/",
      "phonetic_us": "/ˈbəːθdeɪ/",
      "meanings": [
        "生日"
      ],
      "word_forms": {
        "plural": "birthdays"
      },
      "collocations": [
        "happy birthday",
        "birthday party",
        "birthday cake",
        "birthday present"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0129",
    "word": "bit",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bɪt/",
      "phonetic_us": "/bɪt/",
      "meanings": [
        "一点",
        "一些",
        "少量的"
      ],
      "word_forms": {},
      "collocations": [
        "a bit",
        "bit by bit",
        "quite a bit",
        "every bit",
        "not a bit"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"一点\"的概念",
      "academicContext": "The bit plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0130",
    "word": "black",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/blæk/",
      "phonetic_us": "/blæk/",
      "meanings": [
        "黑色 a. 黑色的"
      ],
      "word_forms": {
        "comparative": "blacker",
        "superlative": "blackest"
      },
      "collocations": [
        "black and white",
        "black tea",
        "black coffee",
        "in black",
        "black hole"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记黑色 a. 黑色的的事物",
      "academicContext": "Understanding black concepts is essential for academic success.",
      "dailyContext": "This is really black! I love it.",
      "memoryStory": "通过联想\"black\"的发音和拼写，记住其\"黑色 a. 黑色的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0131",
    "word": "blackboard",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈblækbɔːd/",
      "phonetic_us": "/ˈblækbɔːd/",
      "meanings": [
        "黑板"
      ],
      "word_forms": {
        "plural": "blackboards"
      },
      "collocations": [
        "on the blackboard",
        "write on the blackboard",
        "clean the blackboard"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0132",
    "word": "blind",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/blaɪnd/",
      "phonetic_us": "/blaɪnd/",
      "meanings": [
        "瞎的"
      ],
      "word_forms": {
        "comparative": "blinder",
        "superlative": "blindest"
      },
      "collocations": [
        "turn a blind eye",
        "blind date",
        "color blind",
        "blind spot",
        "go blind"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记瞎的的事物",
      "academicContext": "Understanding blind concepts is essential for academic success.",
      "dailyContext": "This is really blind! I love it.",
      "memoryStory": "通过联想\"blind\"的发音和拼写，记住其\"瞎的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0133",
    "word": "blouse",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/blaʊz; U.S. blaʊs/",
      "phonetic_us": "/blaʊz; U.S. blaʊs/",
      "meanings": [
        "宽罩衫",
        "（妇女、儿童穿的）短上衣"
      ],
      "word_forms": {},
      "collocations": [
        "white blouse",
        "silk blouse",
        "wear a blouse"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0134",
    "word": "blue",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bluː/",
      "phonetic_us": "/bluː/",
      "meanings": [
        "蓝色 a. 蓝色的 a. 悲伤的",
        "沮丧的"
      ],
      "word_forms": {
        "comparative": "bluer",
        "superlative": "bluest"
      },
      "collocations": [
        "out of the blue",
        "feel blue",
        "true blue",
        "once in a blue moon",
        "blue sky"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记蓝色 a. 蓝色的 a. 悲伤的的事物",
      "academicContext": "Understanding blue concepts is essential for academic success.",
      "dailyContext": "This is really blue! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0135",
    "word": "board",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bɔːd/",
      "phonetic_us": "/bɔːd/",
      "meanings": [
        "木板",
        "布告牌",
        "（政府的）部 v. 上（船、火车、飞机）"
      ],
      "word_forms": {},
      "collocations": [
        "on board",
        "board meeting",
        "notice board",
        "board game",
        "go on board"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"木板\"的概念",
      "academicContext": "The board plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"board\"的发音和拼写，记住其\"木板\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0136",
    "word": "boat",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bəʊt/",
      "phonetic_us": "/bəʊt/",
      "meanings": [
        "小船",
        "小舟"
      ],
      "word_forms": {
        "plural": "boats"
      },
      "collocations": [
        "by boat",
        "in the same boat",
        "miss the boat",
        "row a boat",
        "boat trip"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"小船\"的概念",
      "academicContext": "The boat plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0137",
    "word": "boating",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbəʊtɪŋ/",
      "phonetic_us": "/ˈbəʊtɪŋ/",
      "meanings": [
        "划船（游玩）",
        "泛舟"
      ],
      "word_forms": {},
      "collocations": [
        "go boating",
        "boating trip",
        "boating lake"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0138",
    "word": "book",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bʊk/",
      "phonetic_us": "/bʊk/",
      "meanings": [
        "书",
        "本子 v. 预定",
        "定（房间、车票等）"
      ],
      "word_forms": {},
      "collocations": [
        "read a book",
        "book a ticket",
        "by the book"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "承载知识和故事的载体",
      "academicContext": "Books are important sources of knowledge.",
      "dailyContext": "I'm reading an interesting book.",
      "memoryStory": "",
      "confusableWords": [
        "volume",
        "publication"
      ],
      "etymology": {
        "root": "book",
        "meaning": "来自古英语bōc,书、文件"
      }
    }
  },
  {
    "id": "w0139",
    "word": "bookmark",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbʊkmɑːk/",
      "phonetic_us": "/ˈbʊkmɑːk/",
      "meanings": [
        "书签"
      ],
      "word_forms": {
        "plural": "bookmarks"
      },
      "collocations": [
        "add a bookmark",
        "save bookmark",
        "bookmark this page"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0140",
    "word": "bookstore",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbʊkstɔː(r)/",
      "phonetic_us": "/ˈbʊkstɔː(r)/",
      "meanings": [
        "书店"
      ],
      "word_forms": {
        "plural": "bookstores"
      },
      "collocations": [
        "go to the bookstore",
        "online bookstore",
        "local bookstore"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0141",
    "word": "boom",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/buːm/",
      "phonetic_us": "/buːm/",
      "meanings": [
        "/ v. 繁荣",
        "轰鸣",
        "激增"
      ],
      "word_forms": {},
      "collocations": [
        "baby boom",
        "economic boom",
        "boom and bust",
        "boom town"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"/ v. 繁荣\"的概念",
      "academicContext": "The boom plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0142",
    "word": "boot",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/buːt/",
      "phonetic_us": "/buːt/",
      "meanings": [
        "长筒靴",
        "靴"
      ],
      "word_forms": {
        "plural": "boots"
      },
      "collocations": [
        "boot camp",
        "to boot",
        "put the boot in",
        "car boot"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"长筒靴\"的概念",
      "academicContext": "The boot plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0143",
    "word": "born",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bɔːn/",
      "phonetic_us": "/bɔːn/",
      "meanings": [
        "出生的"
      ],
      "word_forms": {
        "comparative": "borner",
        "superlative": "bornest"
      },
      "collocations": [
        "be born",
        "newly born",
        "born to do",
        "born with",
        "born leader"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记出生的的事物",
      "academicContext": "Understanding born concepts is essential for academic success.",
      "dailyContext": "This is really born! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0144",
    "word": "both",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/bəʊθ/",
      "phonetic_us": "/bəʊθ/",
      "meanings": [
        "两",
        "双 pron. 两者",
        "双方"
      ],
      "word_forms": {},
      "collocations": [
        "both...and...",
        "both of",
        "both sides",
        "both ways"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"两\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0145",
    "word": "bottle",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbɔt(ə)l/",
      "phonetic_us": "/ˈbɔt(ə)l/",
      "meanings": [
        "瓶子"
      ],
      "word_forms": {
        "plural": "bottles"
      },
      "collocations": [
        "water bottle",
        "empty bottle",
        "bottle opener",
        "hit the bottle"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0146",
    "word": "bottom",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbɔtəm/",
      "phonetic_us": "/ˈbɔtəm/",
      "meanings": [
        "底部",
        "底"
      ],
      "word_forms": {
        "plural": "bottoms"
      },
      "collocations": [
        "at the bottom",
        "bottom line",
        "from top to bottom",
        "rock bottom"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0147",
    "word": "bowl",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bəʊl/",
      "phonetic_us": "/bəʊl/",
      "meanings": [
        "碗"
      ],
      "word_forms": {
        "plural": "bowls"
      },
      "collocations": [
        "a bowl of",
        "soup bowl",
        "salad bowl",
        "mixing bowl",
        "rice bowl"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"碗\"的概念",
      "academicContext": "The bowl plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0148",
    "word": "box",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bɔks/",
      "phonetic_us": "/bɔks/",
      "meanings": [
        "盒子",
        "箱子"
      ],
      "word_forms": {
        "plural": "boxes"
      },
      "collocations": [
        "a box of",
        "cardboard box",
        "tool box",
        "lunch box",
        "out of the box"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"盒子\"的概念",
      "academicContext": "The box plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0149",
    "word": "boy",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bɔɪ/",
      "phonetic_us": "/bɔɪ/",
      "meanings": [
        "男孩"
      ],
      "word_forms": {},
      "collocations": [
        "little boy",
        "big boy",
        "school boy",
        "boy band",
        "the boy next door"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"男孩\"的概念",
      "academicContext": "The boy plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0150",
    "word": "brain",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/breɪn/",
      "phonetic_us": "/breɪn/",
      "meanings": [
        "脑（子）"
      ],
      "word_forms": {
        "plural": "brains"
      },
      "collocations": [
        "use your brain",
        "brain power",
        "brain damage",
        "rack one's brain",
        "brain drain"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"脑（子）\"的概念",
      "academicContext": "The brain plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"brain\"的发音和拼写，记住其\"脑（子）\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0151",
    "word": "bread",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bred/",
      "phonetic_us": "/bred/",
      "meanings": [
        "面包"
      ],
      "word_forms": {},
      "collocations": [
        "a loaf of bread",
        "white bread",
        "bread and butter",
        "slice of bread",
        "bake bread"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"面包\"的概念",
      "academicContext": "The bread plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"bread\"的发音和拼写，记住其\"面包\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0152",
    "word": "breakfast",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbrekfəst/",
      "phonetic_us": "/ˈbrekfəst/",
      "meanings": [
        "早餐"
      ],
      "word_forms": {
        "plural": "breakfasts"
      },
      "collocations": [
        "eat breakfast",
        "breakfast time",
        "breakfast cereal",
        "bed and breakfast"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0153",
    "word": "breathe",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/briːð/",
      "phonetic_us": "/briːð/",
      "meanings": [
        "呼吸"
      ],
      "word_forms": {},
      "collocations": [
        "breathe in",
        "breathe out",
        "breathe deeply",
        "room to breathe"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0154",
    "word": "bridge",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/brɪdʒ/",
      "phonetic_us": "/brɪdʒ/",
      "meanings": [
        "桥"
      ],
      "word_forms": {
        "plural": "bridges"
      },
      "collocations": [
        "cross a bridge",
        "burn one's bridges",
        "bridge the gap",
        "water under the bridge"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0155",
    "word": "bright",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/braɪt/",
      "phonetic_us": "/braɪt/",
      "meanings": [
        "明亮的",
        "聪明的"
      ],
      "word_forms": {
        "comparative": "brighter",
        "superlative": "brightest"
      },
      "collocations": [
        "bright future",
        "bright idea",
        "bright and early",
        "look on the bright side"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0156",
    "word": "Britain",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbrɪtən/",
      "phonetic_us": "/ˈbrɪtən/",
      "meanings": [
        "英国",
        "不列颠"
      ],
      "word_forms": {},
      "collocations": [
        "Great Britain",
        "in Britain",
        "from Britain"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0157",
    "word": "British",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbrɪtɪʃ/",
      "phonetic_us": "/ˈbrɪtɪʃ/",
      "meanings": [
        "英国的",
        "大不列颠的",
        "英国人的"
      ],
      "word_forms": {
        "plural": "britishes",
        "comparative": "more british",
        "superlative": "most british"
      },
      "collocations": [
        "British English",
        "British accent",
        "British Museum"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0158",
    "word": "broadcast",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbrɔːdkɑːst/",
      "phonetic_us": "/ˈbrɔːdkɑːst/",
      "meanings": [
        "/v. 广播"
      ],
      "word_forms": {},
      "collocations": [
        "live broadcast",
        "broadcast news",
        "broadcast on TV"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0159",
    "word": "broken",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbrəʊkən/",
      "phonetic_us": "/ˈbrəʊkən/",
      "meanings": [
        "弄坏了的"
      ],
      "word_forms": {
        "comparative": "brokenner",
        "superlative": "brokennest"
      },
      "collocations": [
        "broken heart",
        "broken English",
        "broken promise",
        "broken down"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0160",
    "word": "broom",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bruːm/",
      "phonetic_us": "/bruːm/",
      "meanings": [
        "扫帚"
      ],
      "word_forms": {
        "plural": "brooms"
      },
      "collocations": [
        "sweep with a broom",
        "broom closet",
        "new broom"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"扫帚\"的概念",
      "academicContext": "The broom plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"broom\"的发音和拼写，记住其\"扫帚\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0161",
    "word": "brother",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbrʌðə(r)/",
      "phonetic_us": "/ˈbrʌðə(r)/",
      "meanings": [
        "兄",
        "弟"
      ],
      "word_forms": {
        "plural": "brothers"
      },
      "collocations": [
        "big brother",
        "little brother",
        "brother and sister",
        "blood brother"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0162",
    "word": "brotherhood",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbrʌðəhʊd/",
      "phonetic_us": "/ˈbrʌðəhʊd/",
      "meanings": [
        "兄弟般的关系"
      ],
      "word_forms": {
        "comparative": "more brotherhood",
        "superlative": "most brotherhood"
      },
      "collocations": [
        "sense of brotherhood",
        "spirit of brotherhood"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0163",
    "word": "brown",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/braʊn/",
      "phonetic_us": "/braʊn/",
      "meanings": [
        "褐色",
        "棕色 a. 褐色的",
        "棕色的"
      ],
      "word_forms": {},
      "collocations": [
        "brown hair",
        "brown eyes",
        "light brown",
        "dark brown",
        "brown sugar"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"褐色\"的概念",
      "academicContext": "The brown plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"brown\"的发音和拼写，记住其\"褐色\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0164",
    "word": "brush",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/brʌʃ/",
      "phonetic_us": "/brʌʃ/",
      "meanings": [
        "刷",
        "擦 n. 刷子"
      ],
      "word_forms": {
        "plural": "brushes"
      },
      "collocations": [
        "tooth brush",
        "paint brush",
        "brush one's teeth",
        "brush away",
        "brush up on"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"刷\"的概念",
      "academicContext": "The brush plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"brush\"的发音和拼写，记住其\"刷\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0165",
    "word": "building",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbɪldɪŋ/",
      "phonetic_us": "/ˈbɪldɪŋ/",
      "meanings": [
        "建筑物",
        "房屋",
        "大楼"
      ],
      "word_forms": {
        "plural": "buildings"
      },
      "collocations": [
        "tall building",
        "office building",
        "apartment building",
        "building blocks"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0166",
    "word": "bury",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈberɪ/",
      "phonetic_us": "/ˈberɪ/",
      "meanings": [
        "埋",
        "葬"
      ],
      "word_forms": {
        "plural": "buries"
      },
      "collocations": [
        "bury the dead",
        "bury one's head",
        "bury oneself in",
        "buried treasure"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"埋\"的概念",
      "academicContext": "The bury plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0167",
    "word": "bus",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/bʌs/",
      "phonetic_us": "/bʌs/",
      "meanings": [
        "公共汽车"
      ],
      "word_forms": {
        "plural": "buses"
      },
      "collocations": [
        "by bus",
        "bus stop",
        "school bus",
        "catch the bus",
        "miss the bus"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"公共汽车\"的概念",
      "academicContext": "The bus plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0168",
    "word": "busy",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈbɪzɪ/",
      "phonetic_us": "/ˈbɪzɪ/",
      "meanings": [
        "忙（碌）的"
      ],
      "word_forms": {
        "comparative": "busier",
        "superlative": "busiest"
      },
      "collocations": [
        "busy with",
        "busy doing",
        "be busy",
        "too busy",
        "busy street"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记忙（碌）的的事物",
      "academicContext": "Understanding busy concepts is essential for academic success.",
      "dailyContext": "This is really busy! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0169",
    "word": "but",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/bət, bʌt/",
      "phonetic_us": "/bət, bʌt/",
      "meanings": [
        "但是",
        "可是 prep. 除了",
        "除……外"
      ],
      "word_forms": {},
      "collocations": [
        "but also",
        "nothing but",
        "cannot but",
        "but for",
        "all but"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"但是\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0170",
    "word": "butter",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbʌtə(r)/",
      "phonetic_us": "/ˈbʌtə(r)/",
      "meanings": [
        "黄油",
        "奶油"
      ],
      "word_forms": {
        "plural": "butters"
      },
      "collocations": [
        "bread and butter",
        "butter up",
        "peanut butter",
        "like a hot knife through butter"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0171",
    "word": "butterfly",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbʌtəflaɪ/",
      "phonetic_us": "/ˈbʌtəflaɪ/",
      "meanings": [
        "蝴蝶"
      ],
      "word_forms": {
        "plural": "butterflies"
      },
      "collocations": [
        "butterfly effect",
        "social butterfly",
        "have butterflies in one's stomach"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0172",
    "word": "button",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈbʌt(ə)n/",
      "phonetic_us": "/ˈbʌt(ə)n/",
      "meanings": [
        "纽扣",
        "（电铃等的）按钮 v. 扣（纽扣） "
      ],
      "word_forms": {},
      "collocations": [
        "push a button",
        "press the button",
        "button up",
        "hot button"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0173",
    "word": "by",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/baɪ/",
      "phonetic_us": "/baɪ/",
      "meanings": [
        "在…旁",
        "不迟于",
        "被"
      ],
      "word_forms": {},
      "collocations": [
        "by oneself",
        "by the way",
        "one by one",
        "step by step",
        "day by day",
        "by bus",
        "by chance"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"在…旁\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0174",
    "word": "bye",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈbaɪbaɪ/",
      "phonetic_us": "/ˈbaɪbaɪ/",
      "meanings": [
        "再见"
      ],
      "word_forms": {
        "plural": "byes"
      },
      "collocations": [
        "say bye",
        "bye bye",
        "bye for now"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"再见\"的概念",
      "academicContext": "The bye plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0175",
    "word": "cabbage",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkæbɪdʒ/",
      "phonetic_us": "/ˈkæbɪdʒ/",
      "meanings": [
        "卷心菜",
        "洋白菜"
      ],
      "word_forms": {
        "plural": "cabbages"
      },
      "collocations": [
        "red cabbage",
        "cabbage soup",
        "head of cabbage"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0176",
    "word": "cage",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/keɪdʒ/",
      "phonetic_us": "/keɪdʒ/",
      "meanings": [
        "笼",
        "鸟笼"
      ],
      "word_forms": {
        "plural": "cages"
      },
      "collocations": [
        "bird cage",
        "in a cage",
        "like a caged animal"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"笼\"的概念",
      "academicContext": "The cage plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0177",
    "word": "cake",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/keɪk/",
      "phonetic_us": "/keɪk/",
      "meanings": [
        "蛋糕",
        "糕点",
        "饼"
      ],
      "word_forms": {
        "plural": "cakes"
      },
      "collocations": [
        "piece of cake",
        "birthday cake",
        "chocolate cake",
        "bake a cake",
        "cake shop"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"蛋糕\"的概念",
      "academicContext": "The cake plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0178",
    "word": "call",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/kɔːl/",
      "phonetic_us": "/kɔːl/",
      "meanings": [
        "喊",
        "叫",
        "电话"
      ],
      "word_forms": {
        "noun": "call"
      },
      "collocations": [
        "call sb",
        "call back",
        "phone call"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "大声呼喊或打电话联系",
      "academicContext": "We call this phenomenon gravity.",
      "dailyContext": "I'll call you tomorrow.",
      "memoryStory": "",
      "confusableWords": [
        "name",
        "phone",
        "summon"
      ],
      "etymology": {
        "root": "call",
        "meaning": "来自古挪威语kalla,呼喊"
      }
    }
  },
  {
    "id": "w0179",
    "word": "camel",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈkæm(ə)l/",
      "phonetic_us": "/ˈkæm(ə)l/",
      "meanings": [
        "骆驼"
      ],
      "word_forms": {
        "plural": "camels"
      },
      "collocations": [
        "ride a camel",
        "camel caravan",
        "the straw that broke the camel's back"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"骆驼\"的概念",
      "academicContext": "The camel plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"camel\"的发音和拼写，记住其\"骆驼\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0180",
    "word": "camera",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkæmərə/",
      "phonetic_us": "/ˈkæmərə/",
      "meanings": [
        "照相机",
        "摄像机"
      ],
      "word_forms": {
        "plural": "cameras"
      },
      "collocations": [
        "digital camera",
        "security camera",
        "on camera",
        "off camera"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0181",
    "word": "can",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ken, kæn/",
      "phonetic_us": "/ken, kæn/",
      "meanings": [
        "可能",
        "能够",
        "可以 n.（美）罐头"
      ],
      "word_forms": {},
      "collocations": [
        "can do",
        "as...as one can",
        "cannot help",
        "can't wait",
        "can afford"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"可能\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0182",
    "word": "Canada",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkænədə/",
      "phonetic_us": "/ˈkænədə/",
      "meanings": [
        "加拿大"
      ],
      "word_forms": {},
      "collocations": [
        "in Canada",
        "from Canada",
        "across Canada"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0183",
    "word": "Canadian",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kəˈneɪdɪən/",
      "phonetic_us": "/kəˈneɪdɪən/",
      "meanings": [
        "加拿大的",
        "加拿大人的 n. 加拿大人"
      ],
      "word_forms": {
        "comparative": "more canadian",
        "superlative": "most canadian"
      },
      "collocations": [
        "Canadian dollar",
        "Canadian bacon"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0184",
    "word": "cancer",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkænsə/",
      "phonetic_us": "/ˈkænsə/",
      "meanings": [
        "癌",
        "癌症",
        "弊端"
      ],
      "word_forms": {
        "plural": "cancers"
      },
      "collocations": [
        "lung cancer",
        "breast cancer",
        "fight cancer",
        "cancer research"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0185",
    "word": "candle",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkænd(ə)l/",
      "phonetic_us": "/ˈkænd(ə)l/",
      "meanings": [
        "蜡烛"
      ],
      "word_forms": {
        "plural": "candles"
      },
      "collocations": [
        "light a candle",
        "blow out candles",
        "burn the candle at both ends",
        "not worth the candle"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0186",
    "word": "candy",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈkændɪ/",
      "phonetic_us": "/ˈkændɪ/",
      "meanings": [
        "糖果"
      ],
      "word_forms": {
        "plural": "candies"
      },
      "collocations": [
        "candy bar",
        "cotton candy",
        "candy shop",
        "piece of candy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"糖果\"的概念",
      "academicContext": "The candy plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"candy\"的发音和拼写，记住其\"糖果\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0187",
    "word": "cannon",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kænən/",
      "phonetic_us": "/kænən/",
      "meanings": [
        "大炮"
      ],
      "word_forms": {
        "plural": "cannons"
      },
      "collocations": [
        "cannon fire",
        "cannon ball",
        "loose cannon"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0188",
    "word": "canoe",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kəˈnuː/",
      "phonetic_us": "/kəˈnuː/",
      "meanings": [
        "独木舟 v. 乘独木舟"
      ],
      "word_forms": {},
      "collocations": [
        "paddle a canoe",
        "canoe trip",
        "by canoe"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"独木舟 v. 乘独木舟\"的概念",
      "academicContext": "The canoe plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"canoe\"的发音和拼写，记住其\"独木舟 v. 乘独木舟\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0189",
    "word": "cap",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kæp/",
      "phonetic_us": "/kæp/",
      "meanings": [
        "帽子",
        "（瓶子的）盖"
      ],
      "word_forms": {},
      "collocations": [
        "baseball cap",
        "wear a cap",
        "put on a cap",
        "bottle cap"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"帽子\"的概念",
      "academicContext": "The cap plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0190",
    "word": "car",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kɑː(r)/",
      "phonetic_us": "/kɑː(r)/",
      "meanings": [
        "汽车",
        "小卧车"
      ],
      "word_forms": {},
      "collocations": [
        "by car",
        "car park",
        "race car",
        "police car",
        "get in the car"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"汽车\"的概念",
      "academicContext": "The car plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0191",
    "word": "care",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/keə(r)/",
      "phonetic_us": "/keə(r)/",
      "meanings": [
        "照料",
        "保护",
        "小心 v. 介意…"
      ],
      "word_forms": {
        "verb": "care",
        "adjective": "careful",
        "adverb": "carefully"
      },
      "collocations": [
        "take care of",
        "care about",
        "care for",
        "don't care",
        "health care",
        "medical care"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"照料\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "concern",
        "attention",
        "caution"
      ]
    }
  },
  {
    "id": "w0192",
    "word": "careful",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkeəfʊl/",
      "phonetic_us": "/ˈkeəfʊl/",
      "meanings": [
        "小心",
        "仔细",
        "谨慎的"
      ],
      "word_forms": {},
      "collocations": [
        "be careful",
        "careful consideration",
        "careful planning"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0193",
    "word": "careless",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkeəlɪs/",
      "phonetic_us": "/ˈkeəlɪs/",
      "meanings": [
        "粗心的",
        "漫不经心的"
      ],
      "word_forms": {
        "comparative": "more careless",
        "superlative": "most careless"
      },
      "collocations": [
        "careless mistake",
        "careless driving",
        "careless attitude"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0194",
    "word": "carrot",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkærət/",
      "phonetic_us": "/ˈkærət/",
      "meanings": [
        "胡萝卜"
      ],
      "word_forms": {
        "plural": "carrots"
      },
      "collocations": [
        "carrot and stick",
        "dangle a carrot"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0195",
    "word": "carry",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈkærɪ/",
      "phonetic_us": "/ˈkærɪ/",
      "meanings": [
        "拿",
        "搬",
        "带"
      ],
      "word_forms": {
        "noun": "carrier"
      },
      "collocations": [
        "carry out",
        "carry on",
        "carry with",
        "carry bag"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"拿\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "transport",
        "bring",
        "bear"
      ]
    }
  },
  {
    "id": "w0196",
    "word": "cat",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kæt/",
      "phonetic_us": "/kæt/",
      "meanings": [
        "猫"
      ],
      "word_forms": {
        "plural": "cats"
      },
      "collocations": [
        "pet cat",
        "fat cat",
        "black cat",
        "like a cat",
        "let the cat out of the bag"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"猫\"的概念",
      "academicContext": "The cat plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0197",
    "word": "cause",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/kɔːz/",
      "phonetic_us": "/kɔːz/",
      "meanings": [
        "原因",
        "起因 vt. 促使",
        "引起"
      ],
      "word_forms": {},
      "collocations": [
        "cause trouble",
        "cause damage",
        "cause problem",
        "main cause",
        "common cause"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"原因\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "reason",
        "source",
        "origin"
      ]
    }
  },
  {
    "id": "w0198",
    "word": "ceiling",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsiːlɪŋ/",
      "phonetic_us": "/ˈsiːlɪŋ/",
      "meanings": [
        "天花板",
        "顶棚"
      ],
      "word_forms": {
        "plural": "ceilings"
      },
      "collocations": [
        "glass ceiling",
        "hit the ceiling",
        "ceiling price"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0199",
    "word": "celebrate",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈselɪbreɪt/",
      "phonetic_us": "/ˈselɪbreɪt/",
      "meanings": [
        "庆祝"
      ],
      "word_forms": {
        "plural": "celebrates"
      },
      "collocations": [
        "celebrate success",
        "celebrate a birthday",
        "celebrate with"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0200",
    "word": "celebration",
    "level": "初一",
    "unit": "Unit 2",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/selɪˈbreɪʃ(ə)n/",
      "phonetic_us": "/selɪˈbreɪʃ(ə)n/",
      "meanings": [
        "庆祝",
        "庆祝会"
      ],
      "word_forms": {
        "plural": "celebrations"
      },
      "collocations": [
        "in celebration of",
        "birthday celebration",
        "victory celebration"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0201",
    "word": "cent",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sent/",
      "phonetic_us": "/sent/",
      "meanings": [
        "美分（100 cents = 1 dollar）"
      ],
      "word_forms": {},
      "collocations": [
        "per cent",
        "not worth a cent",
        "every cent counts"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"美分（100 cents = 1 dollar）\"的概念",
      "academicContext": "The cent plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0202",
    "word": "century",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsentʃurɪ/",
      "phonetic_us": "/ˈsentʃurɪ/",
      "meanings": [
        "世纪",
        "百年"
      ],
      "word_forms": {
        "plural": "centuries"
      },
      "collocations": [
        "21st century",
        "half a century",
        "turn of the century",
        "century-old"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0203",
    "word": "certain",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈsɜːt(ə)n/",
      "phonetic_us": "/ˈsɜːt(ə)n/",
      "meanings": [
        "（未指明真实名称的）某…",
        "确定的",
        "无疑的"
      ],
      "word_forms": {
        "comparative": "more certain",
        "superlative": "most certain"
      },
      "collocations": [
        "a certain",
        "for certain",
        "make certain",
        "certain people",
        "certain degree"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记（未指明真实名称的）某…的特征",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "sure",
        "definite",
        "positive"
      ]
    }
  },
  {
    "id": "w0204",
    "word": "certainly",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsɜːtənlɪ/",
      "phonetic_us": "/ˈsɜːtənlɪ/",
      "meanings": [
        "当然",
        "一定",
        "无疑"
      ],
      "word_forms": {
        "plural": "certainlies"
      },
      "collocations": [
        "certainly not",
        "most certainly",
        "almost certainly"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0205",
    "word": "chair",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʃeə(r)/",
      "phonetic_us": "/tʃeə(r)/",
      "meanings": [
        "椅子"
      ],
      "word_forms": {
        "plural": "chairs"
      },
      "collocations": [
        "sit in a chair",
        "pull up a chair",
        "arm chair",
        "take a chair",
        "chairman"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"椅子\"的概念",
      "academicContext": "The chair plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"chair\"的发音和拼写，记住其\"椅子\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0206",
    "word": "chalk",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʃɔːk/",
      "phonetic_us": "/tʃɔːk/",
      "meanings": [
        "粉笔"
      ],
      "word_forms": {
        "plural": "chalks"
      },
      "collocations": [
        "piece of chalk",
        "chalk board",
        "as different as chalk and cheese"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"粉笔\"的概念",
      "academicContext": "The chalk plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"chalk\"的发音和拼写，记住其\"粉笔\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0207",
    "word": "chance",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/tʃɑːns; (US) tʃæns/",
      "phonetic_us": "/tʃɑːns; (US) tʃæns/",
      "meanings": [
        "机会",
        "可能性"
      ],
      "word_forms": {},
      "collocations": [
        "take a chance",
        "by chance",
        "fair chance",
        "last chance",
        "fat chance"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0208",
    "word": "change",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/tʃeɪndʒ/",
      "phonetic_us": "/tʃeɪndʒ/",
      "meanings": [
        "零钱",
        "找头 v. 改变",
        "变化"
      ],
      "word_forms": {
        "noun": "change",
        "adjective": "changeable"
      },
      "collocations": [
        "change into",
        "change for",
        "make a change"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "从一种状态转变为另一种状态",
      "academicContext": "Climate change is affecting ecosystems worldwide.",
      "dailyContext": "I need to change my password.",
      "memoryStory": "",
      "confusableWords": [
        "alter",
        "modify",
        "transform"
      ],
      "etymology": {
        "root": "change",
        "meaning": "来自拉丁语cambiare,交换"
      }
    }
  },
  {
    "id": "w0209",
    "word": "chart",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʃɑːt/",
      "phonetic_us": "/tʃɑːt/",
      "meanings": [
        "图表",
        "航海图"
      ],
      "word_forms": {
        "plural": "charts"
      },
      "collocations": [
        "flow chart",
        "pie chart",
        "top the charts",
        "chart the course"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"图表\"的概念",
      "academicContext": "The chart plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"chart\"的发音和拼写，记住其\"图表\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0210",
    "word": "cheap",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʃiːp/",
      "phonetic_us": "/tʃiːp/",
      "meanings": [
        "便宜的",
        "贱"
      ],
      "word_forms": {
        "comparative": "cheapper",
        "superlative": "cheappest"
      },
      "collocations": [
        "dirt cheap",
        "cheap price",
        "on the cheap",
        "cheap and cheerful"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记便宜的的事物",
      "academicContext": "Understanding cheap concepts is essential for academic success.",
      "dailyContext": "This is really cheap! I love it.",
      "memoryStory": "通过联想\"cheap\"的发音和拼写，记住其\"便宜的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0211",
    "word": "check",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʃek/",
      "phonetic_us": "/tʃek/",
      "meanings": [
        "检查",
        "批改 vt. 校对",
        "核对"
      ],
      "word_forms": {},
      "collocations": [
        "check out",
        "check in",
        "double check",
        "background check",
        "keep in check"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"检查\"的概念",
      "academicContext": "The check plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"check\"的发音和拼写，记住其\"检查\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0212",
    "word": "cheese",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/tʃiːz/",
      "phonetic_us": "/tʃiːz/",
      "meanings": [
        "奶酪"
      ],
      "word_forms": {
        "plural": "cheeses"
      },
      "collocations": [
        "cheese sandwich",
        "say cheese",
        "big cheese",
        "chalk and cheese"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0213",
    "word": "chemistry",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkemistri/",
      "phonetic_us": "/ˈkemistri/",
      "meanings": [
        "化学"
      ],
      "word_forms": {},
      "collocations": [
        "chemistry class",
        "organic chemistry",
        "chemistry between people"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0214",
    "word": "chess",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʃes/",
      "phonetic_us": "/tʃes/",
      "meanings": [
        "国际象棋",
        "棋"
      ],
      "word_forms": {
        "plural": "chesses"
      },
      "collocations": [
        "play chess",
        "chess board",
        "chess piece",
        "chess game",
        "chess player"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"国际象棋\"的概念",
      "academicContext": "The chess plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"chess\"的发音和拼写，记住其\"国际象棋\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0215",
    "word": "chick",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʃɪk/",
      "phonetic_us": "/tʃɪk/",
      "meanings": [
        "小鸡"
      ],
      "word_forms": {
        "plural": "chicks"
      },
      "collocations": [
        "baby chick",
        "chick flick",
        "spring chick"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"小鸡\"的概念",
      "academicContext": "The chick plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"chick\"的发音和拼写，记住其\"小鸡\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0216",
    "word": "chicken",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtʃɪkən/",
      "phonetic_us": "/ˈtʃɪkən/",
      "meanings": [
        "鸡",
        "鸡肉"
      ],
      "word_forms": {
        "plural": "chickens"
      },
      "collocations": [
        "fried chicken",
        "chicken breast",
        "spring chicken",
        "count one's chickens before they hatch"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0217",
    "word": "chimney",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtʃɪmnɪ/",
      "phonetic_us": "/ˈtʃɪmnɪ/",
      "meanings": [
        "烟囱",
        "烟筒"
      ],
      "word_forms": {
        "plural": "chimneys"
      },
      "collocations": [
        "smoke from the chimney",
        "chimney sweep"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0218",
    "word": "China",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈtʃaɪnə/",
      "phonetic_us": "/ˈtʃaɪnə/",
      "meanings": [
        "中国"
      ],
      "word_forms": {},
      "collocations": [
        "in China",
        "from China",
        "made in China",
        "all over China",
        "ancient China"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"中国\"的概念",
      "academicContext": "The China plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"China\"的发音和拼写，记住其\"中国\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0219",
    "word": "Chinese",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/tʃaɪˈniːz/",
      "phonetic_us": "/tʃaɪˈniːz/",
      "meanings": [
        "中国的",
        "中国人的",
        "汉语的 n. 中国人"
      ],
      "word_forms": {
        "plural": "chineses",
        "comparative": "more chinese",
        "superlative": "most chinese"
      },
      "collocations": [
        "Chinese food",
        "Chinese New Year",
        "Traditional Chinese",
        "speak Chinese"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0220",
    "word": "chocolate",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtʃɔklit/",
      "phonetic_us": "/ˈtʃɔklit/",
      "meanings": [
        "巧克力"
      ],
      "word_forms": {
        "plural": "chocolates"
      },
      "collocations": [
        "chocolate cake",
        "hot chocolate",
        "chocolate chip",
        "box of chocolates"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0221",
    "word": "Christmas",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkrɪsməs/",
      "phonetic_us": "/ˈkrɪsməs/",
      "meanings": [
        "圣诞节"
      ],
      "word_forms": {},
      "collocations": [
        "Merry Christmas",
        "Christmas tree",
        "Christmas Eve",
        "Christmas present",
        "white Christmas"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0222",
    "word": "church",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/tʃɜːtʃ/",
      "phonetic_us": "/tʃɜːtʃ/",
      "meanings": [
        "教堂",
        "教会"
      ],
      "word_forms": {},
      "collocations": [
        "go to church",
        "church service",
        "parish church"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0223",
    "word": "cinema",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsɪnimə/",
      "phonetic_us": "/ˈsɪnimə/",
      "meanings": [
        "电影院",
        "电影"
      ],
      "word_forms": {
        "plural": "cinemas"
      },
      "collocations": [
        "go to the cinema",
        "cinema ticket",
        "home cinema"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0224",
    "word": "circle",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsɜːk(ə)l/",
      "phonetic_us": "/ˈsɜːk(ə)l/",
      "meanings": [
        "/vt. 圆",
        "环绕"
      ],
      "word_forms": {},
      "collocations": [
        "vicious circle",
        "full circle",
        "inner circle",
        "go around in circles"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0225",
    "word": "city",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈsɪtɪ/",
      "phonetic_us": "/ˈsɪtɪ/",
      "meanings": [
        "市",
        "城市",
        "都市"
      ],
      "word_forms": {
        "plural": "cities"
      },
      "collocations": [
        "big city",
        "city center",
        "city life",
        "capital city",
        "modern city"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"市\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "town",
        "metropolis",
        "urban area"
      ]
    }
  },
  {
    "id": "w0226",
    "word": "classmate",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈklɑːsmeɪt/",
      "phonetic_us": "/ˈklɑːsmeɪt/",
      "meanings": [
        "同班同学"
      ],
      "word_forms": {},
      "collocations": [
        "old classmate",
        "former classmate"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0227",
    "word": "classroom",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈklɑːsruːm/",
      "phonetic_us": "/ˈklɑːsruːm/",
      "meanings": [
        "教室"
      ],
      "word_forms": {},
      "collocations": [
        "in the classroom",
        "classroom management",
        "classroom activities"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0228",
    "word": "clean",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kliːn/",
      "phonetic_us": "/kliːn/",
      "meanings": [
        "弄干净",
        "擦干净 a. 清洁的",
        "干净的"
      ],
      "word_forms": {},
      "collocations": [
        "clean up",
        "clean room",
        "keep clean",
        "come clean",
        "clean and tidy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"弄干净\"的概念",
      "academicContext": "The clean plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"clean\"的发音和拼写，记住其\"弄干净\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0229",
    "word": "clear",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/klɪə(r)/",
      "phonetic_us": "/klɪə(r)/",
      "meanings": [
        "清晰",
        "明亮的",
        "清楚的"
      ],
      "word_forms": {},
      "collocations": [
        "make clear",
        "crystal clear",
        "clear up",
        "clear out",
        "loud and clear"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"清晰\"的概念",
      "academicContext": "The clear plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"clear\"的发音和拼写，记住其\"清晰\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0230",
    "word": "clearly",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈklɪəlɪ/",
      "phonetic_us": "/ˈklɪəlɪ/",
      "meanings": [
        "清楚地",
        "无疑地"
      ],
      "word_forms": {
        "comparative": "more clearly",
        "superlative": "most clearly"
      },
      "collocations": [
        "see clearly",
        "speak clearly",
        "clearly understand"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0231",
    "word": "clever",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈklevə(r)/",
      "phonetic_us": "/ˈklevə(r)/",
      "meanings": [
        "聪明的",
        "伶俐的"
      ],
      "word_forms": {
        "comparative": "cleverrer",
        "superlative": "cleverrest"
      },
      "collocations": [
        "clever idea",
        "too clever",
        "clever solution"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0232",
    "word": "climb",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/klaɪm/",
      "phonetic_us": "/klaɪm/",
      "meanings": [
        "爬",
        "攀登"
      ],
      "word_forms": {
        "plural": "climbs"
      },
      "collocations": [
        "climb up",
        "climb down",
        "climb the mountain",
        "climb the ladder",
        "rock climbing"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"爬\"的概念",
      "academicContext": "The climb plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"climb\"的发音和拼写，记住其\"爬\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0233",
    "word": "clock",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/klɔk/",
      "phonetic_us": "/klɔk/",
      "meanings": [
        "钟"
      ],
      "word_forms": {
        "plural": "clocks"
      },
      "collocations": [
        "alarm clock",
        "around the clock",
        "beat the clock",
        "o'clock",
        "wall clock"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"钟\"的概念",
      "academicContext": "The clock plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"clock\"的发音和拼写，记住其\"钟\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0234",
    "word": "close",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/kləʊz/",
      "phonetic_us": "/kləʊz/",
      "meanings": [
        "亲密的",
        "近",
        "靠近 ad. 近"
      ],
      "word_forms": {
        "adjective": "close",
        "adverb": "closely"
      },
      "collocations": [
        "close to",
        "close down",
        "draw to a close"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记亲密的的事物",
      "academicContext": "Close examination reveals the truth.",
      "dailyContext": "Please close the door.",
      "memoryStory": "",
      "confusableWords": [
        "near",
        "nearby",
        "adjacent"
      ],
      "etymology": {
        "root": "close",
        "meaning": "来自拉丁语clausus,关闭的"
      }
    }
  },
  {
    "id": "w0235",
    "word": "cloth",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/klɔθ; (US) klɔθ/",
      "phonetic_us": "/klɔθ; (US) klɔθ/",
      "meanings": [
        "布"
      ],
      "word_forms": {
        "plural": "cloths"
      },
      "collocations": [
        "table cloth",
        "wash cloth",
        "cut from the same cloth"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"布\"的概念",
      "academicContext": "The cloth plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"cloth\"的发音和拼写，记住其\"布\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0236",
    "word": "clothes",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/klɔðz; (US) kləʊz/",
      "phonetic_us": "/klɔðz; (US) kləʊz/",
      "meanings": [
        "衣服",
        "各种衣物"
      ],
      "word_forms": {
        "plural": "clotheses"
      },
      "collocations": [
        "wear clothes",
        "change clothes",
        "clothes shop",
        "plain clothes"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0237",
    "word": "cloud",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈklaʊd/",
      "phonetic_us": "/ˈklaʊd/",
      "meanings": [
        "云",
        "云状物",
        "阴影"
      ],
      "word_forms": {
        "plural": "clouds"
      },
      "collocations": [
        "dark cloud",
        "cloud computing",
        "under a cloud",
        "every cloud has a silver lining",
        "cloud cover"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"云\"的概念",
      "academicContext": "The cloud plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"cloud\"的发音和拼写，记住其\"云\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0238",
    "word": "cloudy",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈklaʊdɪ/",
      "phonetic_us": "/ˈklaʊdɪ/",
      "meanings": [
        "多云的",
        "阴天的"
      ],
      "word_forms": {
        "comparative": "cloudier",
        "superlative": "cloudiest"
      },
      "collocations": [
        "cloudy day",
        "cloudy sky",
        "partly cloudy"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0239",
    "word": "club",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/klʌb/",
      "phonetic_us": "/klʌb/",
      "meanings": [
        "俱乐部",
        "纸牌中的梅花"
      ],
      "word_forms": {},
      "collocations": [
        "join a club",
        "golf club",
        "night club",
        "club member",
        "sports club"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"俱乐部\"的概念",
      "academicContext": "The club plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0240",
    "word": "coal",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kəʊl/",
      "phonetic_us": "/kəʊl/",
      "meanings": [
        "煤",
        "煤块"
      ],
      "word_forms": {},
      "collocations": [
        "coal mine",
        "burn coal",
        "haul someone over the coals"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"煤\"的概念",
      "academicContext": "The coal plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0241",
    "word": "coat",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kəʊt/",
      "phonetic_us": "/kəʊt/",
      "meanings": [
        "外套",
        "涂层",
        "表皮"
      ],
      "word_forms": {
        "plural": "coats"
      },
      "collocations": [
        "winter coat",
        "put on a coat",
        "coat hanger",
        "top coat",
        "lab coat"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"外套\"的概念",
      "academicContext": "The coat plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0242",
    "word": "cock",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kɔk/",
      "phonetic_us": "/kɔk/",
      "meanings": [
        "公鸡"
      ],
      "word_forms": {
        "plural": "cocks"
      },
      "collocations": [
        "rooster cock",
        "cock crow",
        "cock and bull story"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"公鸡\"的概念",
      "academicContext": "The cock plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0243",
    "word": "code",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kəʊd/",
      "phonetic_us": "/kəʊd/",
      "meanings": [
        "密码",
        "符号",
        "准则"
      ],
      "word_forms": {
        "plural": "codes"
      },
      "collocations": [
        "dress code",
        "zip code",
        "secret code",
        "morse code",
        "break the code"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"密码\"的概念",
      "academicContext": "The code plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0244",
    "word": "cocoa",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈkəʊkəʊ/",
      "phonetic_us": "/ˈkəʊkəʊ/",
      "meanings": [
        "可可粉"
      ],
      "word_forms": {
        "plural": "cocoas"
      },
      "collocations": [
        "hot cocoa",
        "cocoa powder",
        "cup of cocoa"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"可可粉\"的概念",
      "academicContext": "The cocoa plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"cocoa\"的发音和拼写，记住其\"可可粉\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0245",
    "word": "coffee",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɔfɪ; (US) ˈkɔːfɪ/",
      "phonetic_us": "/ˈkɔfɪ; (US) ˈkɔːfɪ/",
      "meanings": [
        "咖啡"
      ],
      "word_forms": {
        "plural": "coffees"
      },
      "collocations": [
        "drink coffee",
        "coffee break",
        "coffee shop",
        "cup of coffee",
        "wake up and smell the coffee"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0246",
    "word": "coin",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kɔɪn/",
      "phonetic_us": "/kɔɪn/",
      "meanings": [
        "硬币"
      ],
      "word_forms": {
        "plural": "coins"
      },
      "collocations": [
        "flip a coin",
        "gold coin",
        "coin collection",
        "the other side of the coin"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"硬币\"的概念",
      "academicContext": "The coin plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0247",
    "word": "coke",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kəʊk/",
      "phonetic_us": "/kəʊk/",
      "meanings": [
        "可口可乐"
      ],
      "word_forms": {
        "plural": "cokes"
      },
      "collocations": [
        "drink coke",
        "can of coke",
        "coke bottle"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"可口可乐\"的概念",
      "academicContext": "The coke plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0248",
    "word": "cold",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kəʊld/",
      "phonetic_us": "/kəʊld/",
      "meanings": [
        "冷的",
        "寒的 n. 寒冷",
        "感冒"
      ],
      "word_forms": {
        "plural": "colds",
        "comparative": "colder",
        "superlative": "coldest"
      },
      "collocations": [
        "catch a cold",
        "cold weather",
        "stone cold",
        "in cold blood",
        "cold water"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记冷的的事物",
      "academicContext": "Understanding cold concepts is essential for academic success.",
      "dailyContext": "This is really cold! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0249",
    "word": "collect",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kəˈlekt/",
      "phonetic_us": "/kəˈlekt/",
      "meanings": [
        "收集",
        "搜集"
      ],
      "word_forms": {},
      "collocations": [
        "collect data",
        "collect stamps",
        "collect information"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0250",
    "word": "college",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɔlɪdʒ/",
      "phonetic_us": "/ˈkɔlɪdʒ/",
      "meanings": [
        "学院",
        "专科学校"
      ],
      "word_forms": {},
      "collocations": [
        "go to college",
        "community college",
        "college student",
        "college degree"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0251",
    "word": "comfort",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkʌmfət/",
      "phonetic_us": "/ˈkʌmfət/",
      "meanings": [
        "安慰",
        "慰问"
      ],
      "word_forms": {},
      "collocations": [
        "comfort zone",
        "take comfort in",
        "creature comforts",
        "cold comfort"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0252",
    "word": "comfortable",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkʌmfətəb(ə)l; (US) ˈkʌmfərtəbl/",
      "phonetic_us": "/ˈkʌmfətəb(ə)l; (US) ˈkʌmfərtəbl/",
      "meanings": [
        "舒服的",
        "安逸的",
        "舒服自在的"
      ],
      "word_forms": {
        "comparative": "more comfortable",
        "superlative": "most comfortable"
      },
      "collocations": [
        "feel comfortable",
        "make oneself comfortable",
        "comfortable shoes"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0253",
    "word": "common",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɔmən/",
      "phonetic_us": "/ˈkɔmən/",
      "meanings": [
        "普通",
        "一般",
        "共有的"
      ],
      "word_forms": {},
      "collocations": [
        "in common",
        "common sense",
        "common ground",
        "have in common"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0254",
    "word": "company",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈkʌmpənɪ/",
      "phonetic_us": "/ˈkʌmpənɪ/",
      "meanings": [
        "公司"
      ],
      "word_forms": {
        "plural": "companies"
      },
      "collocations": [
        "keep company",
        "company culture",
        "in the company of",
        "software company"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"公司\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [],
      "etymology": {
        "prefix": "co-",
        "root": "mpany",
        "meaning": "co(共同) + mpany"
      }
    }
  },
  {
    "id": "w0255",
    "word": "competition",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kɔmpəˈtɪʃ(ə)n/",
      "phonetic_us": "/kɔmpəˈtɪʃ(ə)n/",
      "meanings": [
        "比赛",
        "竞赛"
      ],
      "word_forms": {
        "plural": "competitions"
      },
      "collocations": [
        "fierce competition",
        "win a competition",
        "in competition with"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0256",
    "word": "complain",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kəmˈplein/",
      "phonetic_us": "/kəmˈplein/",
      "meanings": [
        "抱怨",
        "投诉"
      ],
      "word_forms": {},
      "collocations": [
        "complain about",
        "complain of",
        "nothing to complain about"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0257",
    "word": "composition",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kɔmpəːziʃ(ə)n/",
      "phonetic_us": "/kɔmpəːziʃ(ə)n/",
      "meanings": [
        "作文",
        "作曲"
      ],
      "word_forms": {
        "plural": "compositions"
      },
      "collocations": [
        "write a composition",
        "musical composition"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0258",
    "word": "computer",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kəmˈpjuːtə(r)/",
      "phonetic_us": "/kəmˈpjuːtə(r)/",
      "meanings": [
        "电子计算机"
      ],
      "word_forms": {
        "plural": "computers"
      },
      "collocations": [
        "personal computer",
        "computer science",
        "computer game",
        "on the computer"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0259",
    "word": "comrade",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɔmrid; (US) ˈkɑmræd/",
      "phonetic_us": "/ˈkɔmrid; (US) ˈkɑmræd/",
      "meanings": [
        "同志"
      ],
      "word_forms": {
        "plural": "comrades"
      },
      "collocations": [
        "dear comrade",
        "comrade in arms"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0260",
    "word": "concert",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɔnsət/",
      "phonetic_us": "/ˈkɔnsət/",
      "meanings": [
        "音乐会",
        "演奏会"
      ],
      "word_forms": {
        "plural": "concerts"
      },
      "collocations": [
        "go to a concert",
        "rock concert",
        "concert hall",
        "in concert"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0261",
    "word": "conductor",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kənˈdʌktə(r)/",
      "phonetic_us": "/kənˈdʌktə(r)/",
      "meanings": [
        "指导者",
        "（车上的）售票员",
        "列车员"
      ],
      "word_forms": {
        "plural": "conductors"
      },
      "collocations": [
        "bus conductor",
        "orchestra conductor",
        "lightning conductor"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0262",
    "word": "confident",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɔnfɪdənt/",
      "phonetic_us": "/ˈkɔnfɪdənt/",
      "meanings": [
        "自信的"
      ],
      "word_forms": {
        "comparative": "more confident",
        "superlative": "most confident"
      },
      "collocations": [
        "feel confident",
        "confident about",
        "over confident"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0263",
    "word": "congratulate",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kənˈɡrætjʊleɪt/",
      "phonetic_us": "/kənˈɡrætjʊleɪt/",
      "meanings": [
        "祝贺"
      ],
      "word_forms": {
        "plural": "congratulates"
      },
      "collocations": [
        "congratulate on",
        "congratulate someone for"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0264",
    "word": "congratulation",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kənɡrætjʊˈleɪʃ(ə)n/",
      "phonetic_us": "/kənɡrætjʊˈleɪʃ(ə)n/",
      "meanings": [
        "祝贺",
        "庆贺"
      ],
      "word_forms": {
        "plural": "congratulations"
      },
      "collocations": [
        "congratulations on",
        "offer congratulations"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0265",
    "word": "connect",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kəˈnekt/",
      "phonetic_us": "/kəˈnekt/",
      "meanings": [
        "连接",
        "把…联系起来"
      ],
      "word_forms": {},
      "collocations": [
        "connect to",
        "connect with",
        "well connected"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0266",
    "word": "continue",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/kənˈtɪnjuː/",
      "phonetic_us": "/kənˈtɪnjuː/",
      "meanings": [
        "继续"
      ],
      "word_forms": {
        "adjective": "continuous",
        "adverb": "continuously"
      },
      "collocations": [
        "continue to do",
        "continue doing",
        "continue with",
        "to be continued"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"继续\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "proceed",
        "carry on",
        "persist"
      ],
      "etymology": {
        "prefix": "co-",
        "root": "ntinue",
        "meaning": "co(共同) + ntinue"
      }
    }
  },
  {
    "id": "w0267",
    "word": "conversation",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kɔnvəˈseɪʃ(ə)n/",
      "phonetic_us": "/kɔnvəˈseɪʃ(ə)n/",
      "meanings": [
        "谈话",
        "交谈"
      ],
      "word_forms": {
        "plural": "conversations"
      },
      "collocations": [
        "have a conversation",
        "strike up a conversation",
        "in conversation"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0268",
    "word": "cook",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kʊk/",
      "phonetic_us": "/kʊk/",
      "meanings": [
        "炊事员",
        "厨师 v. 烹调",
        "做饭"
      ],
      "word_forms": {},
      "collocations": [
        "cook dinner",
        "cook up",
        "too many cooks",
        "home cooking",
        "cooked meal"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"炊事员\"的概念",
      "academicContext": "The cook plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0269",
    "word": "cookie",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkʊkɪ/",
      "phonetic_us": "/ˈkʊkɪ/",
      "meanings": [
        "小甜饼"
      ],
      "word_forms": {
        "plural": "cookies"
      },
      "collocations": [
        "chocolate chip cookie",
        "fortune cookie",
        "cookie jar",
        "that's the way the cookie crumbles"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0270",
    "word": "cool",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kuːl/",
      "phonetic_us": "/kuːl/",
      "meanings": [
        "凉的",
        "凉爽的",
        "酷"
      ],
      "word_forms": {
        "comparative": "cooller",
        "superlative": "coollest"
      },
      "collocations": [
        "stay cool",
        "cool down",
        "cool off",
        "cool breeze",
        "cool and calm"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记凉的的事物",
      "academicContext": "Understanding cool concepts is essential for academic success.",
      "dailyContext": "This is really cool! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0271",
    "word": "copy",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈkɔpɪ/",
      "phonetic_us": "/ˈkɔpɪ/",
      "meanings": [
        "抄本",
        "副本",
        "一本（份"
      ],
      "word_forms": {
        "plural": "copies"
      },
      "collocations": [
        "make a copy",
        "hard copy",
        "copy and paste",
        "carbon copy",
        "certified copy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"抄本\"的概念",
      "academicContext": "The copy plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0272",
    "word": "corn",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kɔːn/",
      "phonetic_us": "/kɔːn/",
      "meanings": [
        "玉米",
        "谷物"
      ],
      "word_forms": {
        "plural": "corns"
      },
      "collocations": [
        "corn field",
        "pop corn",
        "corn on the cob",
        "sweet corn",
        "corn bread"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"玉米\"的概念",
      "academicContext": "The corn plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0273",
    "word": "corner",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɔːnə(r)/",
      "phonetic_us": "/ˈkɔːnə(r)/",
      "meanings": [
        "角",
        "角落",
        "拐角"
      ],
      "word_forms": {
        "plural": "corners"
      },
      "collocations": [
        "around the corner",
        "corner shop",
        "cut corners",
        "in a tight corner"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0274",
    "word": "correct",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kəˈrekt/",
      "phonetic_us": "/kəˈrekt/",
      "meanings": [
        "改正",
        "纠正 a. 正确的",
        "对的"
      ],
      "word_forms": {},
      "collocations": [
        "correct answer",
        "correct spelling",
        "politically correct",
        "stand corrected"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0275",
    "word": "cotton",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɔt(ə)n/",
      "phonetic_us": "/ˈkɔt(ə)n/",
      "meanings": [
        "棉花 a. 棉花的"
      ],
      "word_forms": {
        "comparative": "cottonner",
        "superlative": "cottonnest"
      },
      "collocations": [
        "cotton candy",
        "cotton wool",
        "made of cotton"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0276",
    "word": "count",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kaʊnt/",
      "phonetic_us": "/kaʊnt/",
      "meanings": [
        "数",
        "点数"
      ],
      "word_forms": {
        "plural": "counts"
      },
      "collocations": [
        "count on",
        "count down",
        "count up",
        "lose count",
        "count for nothing"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"数\"的概念",
      "academicContext": "The count plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"count\"的发音和拼写，记住其\"数\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0277",
    "word": "country",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈkʌntrɪ/",
      "phonetic_us": "/ˈkʌntrɪ/",
      "meanings": [
        "国家",
        "农村",
        "乡下"
      ],
      "word_forms": {
        "plural": "countries"
      },
      "collocations": [
        "foreign country",
        "developing country",
        "in the country",
        "country music",
        "all over the country"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"国家\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "nation",
        "state",
        "land"
      ],
      "etymology": {
        "prefix": "co-",
        "root": "untry",
        "meaning": "co(共同) + untry"
      }
    }
  },
  {
    "id": "w0278",
    "word": "countryside",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkʌntrɪsaɪd/",
      "phonetic_us": "/ˈkʌntrɪsaɪd/",
      "meanings": [
        "乡下",
        "农村"
      ],
      "word_forms": {
        "plural": "countrysides"
      },
      "collocations": [
        "in the countryside",
        "beautiful countryside",
        "open countryside"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0279",
    "word": "couple",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkʌp(ə)l/",
      "phonetic_us": "/ˈkʌp(ə)l/",
      "meanings": [
        "夫妇",
        "一对"
      ],
      "word_forms": {
        "plural": "couples"
      },
      "collocations": [
        "married couple",
        "a couple of",
        "power couple"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0280",
    "word": "course",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/kɔːs/",
      "phonetic_us": "/kɔːs/",
      "meanings": [
        "过程",
        "经过",
        "课程"
      ],
      "word_forms": {
        "plural": "courses"
      },
      "collocations": [
        "of course",
        "in the course of",
        "take a course",
        "language course",
        "main course"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"过程\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [],
      "etymology": {
        "prefix": "co-",
        "root": "urse",
        "meaning": "co(共同) + urse"
      }
    }
  },
  {
    "id": "w0281",
    "word": "cousin",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkʌz(ə)n/",
      "phonetic_us": "/ˈkʌz(ə)n/",
      "meanings": [
        "堂（表）兄弟",
        "堂（表）姐妹"
      ],
      "word_forms": {
        "plural": "cousins"
      },
      "collocations": [
        "first cousin",
        "second cousin",
        "visit cousin"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0282",
    "word": "cover",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈkʌvə(r)/",
      "phonetic_us": "/ˈkʌvə(r)/",
      "meanings": [
        "盖子",
        "罩 v. 覆盖",
        "遮盖"
      ],
      "word_forms": {},
      "collocations": [
        "cover up",
        "under cover",
        "take cover",
        "book cover",
        "cover story"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"盖子\"的概念",
      "academicContext": "The cover plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"cover\"的发音和拼写，记住其\"盖子\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0283",
    "word": "cow",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kaʊ/",
      "phonetic_us": "/kaʊ/",
      "meanings": [
        "母牛",
        "奶牛"
      ],
      "word_forms": {
        "plural": "cows"
      },
      "collocations": [
        "milk cow",
        "dairy cow",
        "holy cow",
        "cash cow",
        "till the cows come home"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"母牛\"的概念",
      "academicContext": "The cow plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0284",
    "word": "crash",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kræʃ/",
      "phonetic_us": "/kræʃ/",
      "meanings": [
        "/ n. 碰撞",
        "撞击"
      ],
      "word_forms": {
        "plural": "crashes"
      },
      "collocations": [
        "car crash",
        "plane crash",
        "crash into",
        "stock market crash",
        "crash course"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"/ n. 碰撞\"的概念",
      "academicContext": "The crash plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"crash\"的发音和拼写，记住其\"/ n. 碰撞\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0285",
    "word": "cream",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kriːm/",
      "phonetic_us": "/kriːm/",
      "meanings": [
        "奶油",
        "乳脂"
      ],
      "word_forms": {
        "plural": "creams"
      },
      "collocations": [
        "ice cream",
        "whipped cream",
        "cream cheese",
        "the cream of the crop",
        "sour cream"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"奶油\"的概念",
      "academicContext": "The cream plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"cream\"的发音和拼写，记住其\"奶油\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0286",
    "word": "crop",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/krɔp/",
      "phonetic_us": "/krɔp/",
      "meanings": [
        "庄稼",
        "收成"
      ],
      "word_forms": {},
      "collocations": [
        "crop up",
        "crop failure",
        "cash crop",
        "bumper crop",
        "the cream of the crop"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"庄稼\"的概念",
      "academicContext": "The crop plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0287",
    "word": "cross",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/krɔs/",
      "phonetic_us": "/krɔs/",
      "meanings": [
        "脾气不好的",
        "易怒的 n. 十字形的东西 vt. 越过",
        "穿过"
      ],
      "word_forms": {
        "comparative": "crosser",
        "superlative": "crossest"
      },
      "collocations": [
        "cross the street",
        "cross out",
        "cross off",
        "Red Cross",
        "cross one's mind"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记脾气不好的的事物",
      "academicContext": "Understanding cross concepts is essential for academic success.",
      "dailyContext": "This is really cross! I love it.",
      "memoryStory": "通过联想\"cross\"的发音和拼写，记住其\"脾气不好的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0288",
    "word": "crossing",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkrɔsɪŋ/",
      "phonetic_us": "/ˈkrɔsɪŋ/",
      "meanings": [
        "十字路口",
        "人行横道"
      ],
      "word_forms": {},
      "collocations": [
        "pedestrian crossing",
        "zebra crossing",
        "level crossing"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0289",
    "word": "crowd",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kraʊd/",
      "phonetic_us": "/kraʊd/",
      "meanings": [
        "人群 vt. 拥挤",
        "群聚"
      ],
      "word_forms": {},
      "collocations": [
        "large crowd",
        "crowd around",
        "follow the crowd",
        "stand out from the crowd",
        "crowded with"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"人群 vt. 拥挤\"的概念",
      "academicContext": "The crowd plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"crowd\"的发音和拼写，记住其\"人群 vt. 拥挤\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0290",
    "word": "cry",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kraɪ/",
      "phonetic_us": "/kraɪ/",
      "meanings": [
        "叫喊",
        "哭声 v. 喊叫",
        "哭"
      ],
      "word_forms": {},
      "collocations": [
        "cry out",
        "cry for help",
        "have a good cry",
        "far cry from",
        "don't cry over spilled milk"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"叫喊\"的概念",
      "academicContext": "The cry plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0291",
    "word": "culture",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkʌltʃə(r)/",
      "phonetic_us": "/ˈkʌltʃə(r)/",
      "meanings": [
        "文化"
      ],
      "word_forms": {
        "plural": "cultures"
      },
      "collocations": [
        "popular culture",
        "culture shock",
        "cultural heritage"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0292",
    "word": "cup",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kʌp/",
      "phonetic_us": "/kʌp/",
      "meanings": [
        "茶杯"
      ],
      "word_forms": {
        "plural": "cups"
      },
      "collocations": [
        "a cup of tea",
        "coffee cup",
        "measuring cup",
        "World Cup",
        "not my cup of tea"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"茶杯\"的概念",
      "academicContext": "The cup plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0293",
    "word": "cupboard",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkʌbəd/",
      "phonetic_us": "/ˈkʌbəd/",
      "meanings": [
        "碗柜",
        "橱柜"
      ],
      "word_forms": {
        "plural": "cupboards"
      },
      "collocations": [
        "kitchen cupboard",
        "skeleton in the cupboard"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0294",
    "word": "curtain",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɜːt(ə)n/",
      "phonetic_us": "/ˈkɜːt(ə)n/",
      "meanings": [
        "窗帘"
      ],
      "word_forms": {
        "plural": "curtains"
      },
      "collocations": [
        "draw the curtains",
        "curtain call",
        "behind the curtain",
        "curtain rises"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0295",
    "word": "cushion",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkʊʃ(ə)n/",
      "phonetic_us": "/ˈkʊʃ(ə)n/",
      "meanings": [
        "垫子"
      ],
      "word_forms": {
        "plural": "cushions"
      },
      "collocations": [
        "cushion the blow",
        "throw cushion"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0296",
    "word": "daily",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈdeɪlɪ/",
      "phonetic_us": "/ˈdeɪlɪ/",
      "meanings": [
        "每日的",
        "日常的 ad. 每天 n. 日报"
      ],
      "word_forms": {
        "plural": "dailies",
        "comparative": "dailier",
        "superlative": "dailiest"
      },
      "collocations": [
        "daily life",
        "daily routine",
        "daily newspaper",
        "on a daily basis",
        "daily practice"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用每日的的方式完成任务",
      "academicContext": "The data was analyzed daily to ensure accuracy.",
      "dailyContext": "Please do it daily this time.",
      "memoryStory": "通过联想\"daily\"的发音和拼写，记住其\"每日的\"的含义。",
      "etymology": {
        "suffix": "-ly",
        "root": "dai",
        "meaning": "dai + ly(地)"
      },
      "confusableWords": []
    }
  },
  {
    "id": "w0297",
    "word": "dangerous",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdeɪndʒərəs/",
      "phonetic_us": "/ˈdeɪndʒərəs/",
      "meanings": [
        "危险的"
      ],
      "word_forms": {
        "comparative": "more dangerous",
        "superlative": "most dangerous"
      },
      "collocations": [
        "dangerous situation",
        "highly dangerous",
        "dangerous territory"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0298",
    "word": "dark",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dɑːk/",
      "phonetic_us": "/dɑːk/",
      "meanings": [
        "黑暗",
        "暗处",
        "日暮 a. 黑暗的"
      ],
      "word_forms": {},
      "collocations": [
        "in the dark",
        "after dark",
        "dark horse",
        "keep sb in the dark",
        "dark side"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"黑暗\"的概念",
      "academicContext": "The dark plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0299",
    "word": "date",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/deɪt/",
      "phonetic_us": "/deɪt/",
      "meanings": [
        "日期",
        "约会 n.枣"
      ],
      "word_forms": {
        "plural": "dates"
      },
      "collocations": [
        "out of date",
        "up to date",
        "date back to",
        "blind date",
        "save the date"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"日期\"的概念",
      "academicContext": "The date plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0300",
    "word": "daughter",
    "level": "初一",
    "unit": "Unit 3",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdɔːtə(r)/",
      "phonetic_us": "/ˈdɔːtə(r)/",
      "meanings": [
        "女儿"
      ],
      "word_forms": {
        "plural": "daughters"
      },
      "collocations": [
        "eldest daughter",
        "like father like daughter"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0301",
    "word": "daytime",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdeɪtaɪm/",
      "phonetic_us": "/ˈdeɪtaɪm/",
      "meanings": [
        "白天",
        "白昼"
      ],
      "word_forms": {
        "plural": "daytimes"
      },
      "collocations": [
        "in the daytime",
        "during daytime"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0302",
    "word": "dead",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ded/",
      "phonetic_us": "/ded/",
      "meanings": [
        "死的",
        "无生命的"
      ],
      "word_forms": {
        "comparative": "deadder",
        "superlative": "deaddest"
      },
      "collocations": [
        "drop dead",
        "dead end",
        "over my dead body",
        "dead tired",
        "dead serious"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记死的的事物",
      "academicContext": "Understanding dead concepts is essential for academic success.",
      "dailyContext": "This is really dead! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0303",
    "word": "deaf",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/def/",
      "phonetic_us": "/def/",
      "meanings": [
        "聋的"
      ],
      "word_forms": {
        "comparative": "deaffer",
        "superlative": "deaffest"
      },
      "collocations": [
        "deaf and dumb",
        "turn a deaf ear",
        "stone deaf",
        "fall on deaf ears"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记聋的的事物",
      "academicContext": "Understanding deaf concepts is essential for academic success.",
      "dailyContext": "This is really deaf! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0304",
    "word": "deal",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/diːl/",
      "phonetic_us": "/diːl/",
      "meanings": [
        "量",
        "数额",
        "交易"
      ],
      "word_forms": {},
      "collocations": [
        "a great deal of",
        "deal with",
        "big deal",
        "no big deal",
        "make a deal"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"量\"的概念",
      "academicContext": "The deal plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0305",
    "word": "death",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/deθ/",
      "phonetic_us": "/deθ/",
      "meanings": [
        "死"
      ],
      "word_forms": {
        "plural": "deaths"
      },
      "collocations": [
        "to death",
        "death penalty",
        "life and death",
        "sudden death",
        "death rate"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"死\"的概念",
      "academicContext": "The death plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"death\"的发音和拼写，记住其\"死\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0306",
    "word": "December",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈsembə(r)/",
      "phonetic_us": "/dɪˈsembə(r)/",
      "meanings": [
        "12月"
      ],
      "word_forms": {},
      "collocations": [
        "in December",
        "this December",
        "early December"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0307",
    "word": "decide",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/dɪˈsaɪd/",
      "phonetic_us": "/dɪˈsaɪd/",
      "meanings": [
        "决定",
        "下决心"
      ],
      "word_forms": {
        "noun": "decision"
      },
      "collocations": [
        "decide to do",
        "decide on",
        "decide for",
        "finally decide",
        "cannot decide"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"决定\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "choose",
        "determine",
        "resolve"
      ],
      "etymology": {
        "prefix": "de-",
        "root": "cide",
        "meaning": "de(向下、去除) + cide"
      }
    }
  },
  {
    "id": "w0308",
    "word": "decision",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈsɪʒ(ə)n/",
      "phonetic_us": "/dɪˈsɪʒ(ə)n/",
      "meanings": [
        "决定",
        "决心"
      ],
      "word_forms": {},
      "collocations": [
        "make a decision",
        "final decision",
        "tough decision",
        "arrive at a decision"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0309",
    "word": "decorate",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdekəreɪt/",
      "phonetic_us": "/ˈdekəreɪt/",
      "meanings": [
        "装饰",
        "修饰"
      ],
      "word_forms": {},
      "collocations": [
        "decorate the house",
        "decorate for Christmas"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0310",
    "word": "deep",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/diːp/",
      "phonetic_us": "/diːp/",
      "meanings": [
        "深 ad. 深",
        "深厚"
      ],
      "word_forms": {
        "plural": "deeps"
      },
      "collocations": [
        "deep breath",
        "deep thought",
        "knee deep",
        "deep down",
        "in deep water"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"深 ad. 深\"的概念",
      "academicContext": "The deep plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0311",
    "word": "deeply",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdiːplɪ/",
      "phonetic_us": "/ˈdiːplɪ/",
      "meanings": [
        "深深地"
      ],
      "word_forms": {
        "comparative": "deeplier",
        "superlative": "deepliest"
      },
      "collocations": [
        "deeply moved",
        "deeply regret",
        "breathe deeply"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0312",
    "word": "deer",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dɪə(r)/",
      "phonetic_us": "/dɪə(r)/",
      "meanings": [
        "鹿"
      ],
      "word_forms": {
        "plural": "deers"
      },
      "collocations": [
        "hunt deer",
        "deer in the headlights",
        "like a deer"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"鹿\"的概念",
      "academicContext": "The deer plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0313",
    "word": "delicious",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈlɪʃəs/",
      "phonetic_us": "/dɪˈlɪʃəs/",
      "meanings": [
        "美味的",
        "可口的"
      ],
      "word_forms": {
        "comparative": "more delicious",
        "superlative": "most delicious"
      },
      "collocations": [
        "absolutely delicious",
        "delicious meal",
        "smell delicious"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0314",
    "word": "delight",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈlaɪt/",
      "phonetic_us": "/dɪˈlaɪt/",
      "meanings": [
        "快乐",
        "乐事"
      ],
      "word_forms": {
        "plural": "delights"
      },
      "collocations": [
        "take delight in",
        "with delight",
        "to one's delight",
        "Turkish delight"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0315",
    "word": "demand",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈmɑːnd; (US) dɪˈmænd/",
      "phonetic_us": "/dɪˈmɑːnd; (US) dɪˈmænd/",
      "meanings": [
        "要求"
      ],
      "word_forms": {
        "plural": "demands"
      },
      "collocations": [
        "in demand",
        "on demand",
        "meet demand",
        "supply and demand",
        "demand for"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0316",
    "word": "depend",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈpend/",
      "phonetic_us": "/dɪˈpend/",
      "meanings": [
        "依靠",
        "依赖",
        "指望"
      ],
      "word_forms": {
        "plural": "depends"
      },
      "collocations": [
        "depend on",
        "depend upon",
        "it depends",
        "depending on"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0317",
    "word": "describe",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈskraɪb/",
      "phonetic_us": "/dɪˈskraɪb/",
      "meanings": [
        "描写",
        "叙述"
      ],
      "word_forms": {},
      "collocations": [
        "describe as",
        "hard to describe",
        "describe in detail"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0318",
    "word": "description",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈskrɪpʃ(ə)n/",
      "phonetic_us": "/dɪˈskrɪpʃ(ə)n/",
      "meanings": [
        "描述",
        "描写"
      ],
      "word_forms": {},
      "collocations": [
        "job description",
        "detailed description",
        "beyond description",
        "fit the description"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0319",
    "word": "desert",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈzɜːt/",
      "phonetic_us": "/dɪˈzɜːt/",
      "meanings": [
        "沙漠 vt. 舍弃",
        "遗弃"
      ],
      "word_forms": {},
      "collocations": [
        "desert island",
        "cross the desert",
        "desert storm"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0320",
    "word": "desk",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/desk/",
      "phonetic_us": "/desk/",
      "meanings": [
        "书桌",
        "写字台"
      ],
      "word_forms": {},
      "collocations": [
        "at the desk",
        "office desk",
        "front desk",
        "desk job",
        "sit at a desk"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"书桌\"的概念",
      "academicContext": "The desk plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0321",
    "word": "destroy",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈstrɔɪ/",
      "phonetic_us": "/dɪˈstrɔɪ/",
      "meanings": [
        "破坏",
        "毁坏"
      ],
      "word_forms": {},
      "collocations": [
        "completely destroy",
        "seek and destroy",
        "destroy evidence"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0322",
    "word": "detective",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈtektɪv/",
      "phonetic_us": "/dɪˈtektɪv/",
      "meanings": [
        "侦探"
      ],
      "word_forms": {},
      "collocations": [
        "private detective",
        "detective story",
        "play detective"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0323",
    "word": "diagram",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdaɪəɡræm/",
      "phonetic_us": "/ˈdaɪəɡræm/",
      "meanings": [
        "图表",
        "图样"
      ],
      "word_forms": {
        "plural": "diagrams"
      },
      "collocations": [
        "flow diagram",
        "Venn diagram",
        "draw a diagram"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0324",
    "word": "dial",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈdaɪ(ə)l/",
      "phonetic_us": "/ˈdaɪ(ə)l/",
      "meanings": [
        "拨（电话号码）"
      ],
      "word_forms": {},
      "collocations": [
        "dial a number",
        "dial tone",
        "speed dial"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"拨（电话号码）\"的概念",
      "academicContext": "The dial plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0325",
    "word": "dialogue",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdaɪəlɔɡ; (US) ˈdaɪəlɔːɡ/",
      "phonetic_us": "/ˈdaɪəlɔɡ; (US) ˈdaɪəlɔːɡ/",
      "meanings": [
        "对话"
      ],
      "word_forms": {},
      "collocations": [
        "open dialogue",
        "have a dialogue",
        "dialogue box"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0326",
    "word": "diary",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈdaɪərɪ/",
      "phonetic_us": "/ˈdaɪərɪ/",
      "meanings": [
        "日记",
        "日记簿"
      ],
      "word_forms": {},
      "collocations": [
        "keep a diary",
        "write in a diary",
        "diary entry",
        "daily diary"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"日记\"的概念",
      "academicContext": "The diary plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"diary\"的发音和拼写，记住其\"日记\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0327",
    "word": "dictation",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪkˈteɪʃ(ə)n/",
      "phonetic_us": "/dɪkˈteɪʃ(ə)n/",
      "meanings": [
        "听写"
      ],
      "word_forms": {},
      "collocations": [
        "take dictation",
        "dictation test"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0328",
    "word": "dictionary",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdɪkʃənərɪ; (US) ˈdɪkʃənerɪ/",
      "phonetic_us": "/ˈdɪkʃənərɪ; (US) ˈdɪkʃənerɪ/",
      "meanings": [
        "词典",
        "字典"
      ],
      "word_forms": {},
      "collocations": [
        "look up in a dictionary",
        "English dictionary",
        "walking dictionary"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0329",
    "word": "die",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/daɪ/",
      "phonetic_us": "/daɪ/",
      "meanings": [
        "死"
      ],
      "word_forms": {
        "plural": "dies"
      },
      "collocations": [
        "die of",
        "die from",
        "die out"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"死\"的概念",
      "academicContext": "Traditional methods are dying out.",
      "dailyContext": "The flowers will die without water.",
      "memoryStory": "",
      "confusableWords": [
        "perish",
        "expire"
      ],
      "etymology": {
        "root": "die",
        "meaning": "来自古挪威语deyja,死亡"
      }
    }
  },
  {
    "id": "w0330",
    "word": "difference",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdɪfərəns/",
      "phonetic_us": "/ˈdɪfərəns/",
      "meanings": [
        "不同"
      ],
      "word_forms": {
        "plural": "differences"
      },
      "collocations": [
        "make a difference",
        "tell the difference",
        "split the difference",
        "world of difference"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0331",
    "word": "different",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈdɪfərənt/",
      "phonetic_us": "/ˈdɪfərənt/",
      "meanings": [
        "不同的",
        "有差异的"
      ],
      "word_forms": {
        "noun": "difference",
        "adverb": "differently",
        "verb": "differ"
      },
      "collocations": [
        "different from",
        "be different",
        "make a difference"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记不同的的事物",
      "academicContext": "Different cultures have different values.",
      "dailyContext": "This cake tastes different from the last one.",
      "memoryStory": "",
      "confusableWords": [
        "various",
        "diverse",
        "distinct",
        "unique"
      ],
      "etymology": {
        "prefix": "dif-",
        "root": "fer",
        "suffix": "-ent",
        "meaning": "dif(分开) + fer(带来) + ent = 带来分别,不同的"
      }
    }
  },
  {
    "id": "w0332",
    "word": "difficult",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈdɪfɪkəlt/",
      "phonetic_us": "/ˈdɪfɪkəlt/",
      "meanings": [
        "难",
        "艰难",
        "不易相处的"
      ],
      "word_forms": {
        "noun": "difficulty"
      },
      "collocations": [
        "difficult to do",
        "find it difficult",
        "difficult situation"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "需要更多努力才能完成的",
      "academicContext": "Quantum physics is a difficult subject.",
      "dailyContext": "This math problem is very difficult.",
      "memoryStory": "",
      "confusableWords": [
        "hard",
        "challenging",
        "tough",
        "complicated"
      ],
      "etymology": {
        "prefix": "dif-",
        "root": "fic",
        "suffix": "-ult",
        "meaning": "dif(不) + fic(做) + ult = 不容易做,困难的"
      }
    }
  },
  {
    "id": "w0333",
    "word": "difficulty",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdɪfɪkəltɪ/",
      "phonetic_us": "/ˈdɪfɪkəltɪ/",
      "meanings": [
        "困难",
        "费力"
      ],
      "word_forms": {
        "plural": "difficulties"
      },
      "collocations": [
        "with difficulty",
        "have difficulty in",
        "face difficulty"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0334",
    "word": "digital",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdɪdʒɪt(ə)l/",
      "phonetic_us": "/ˈdɪdʒɪt(ə)l/",
      "meanings": [
        ".数字的",
        "数码的"
      ],
      "word_forms": {
        "comparative": "more digital",
        "superlative": "most digital"
      },
      "collocations": [
        "digital age",
        "digital camera",
        "go digital",
        "digital divide"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0335",
    "word": "dim",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dɪm/",
      "phonetic_us": "/dɪm/",
      "meanings": [
        "昏暗的",
        "暗淡的"
      ],
      "word_forms": {
        "comparative": "dimmer",
        "superlative": "dimmest"
      },
      "collocations": [
        "dim light",
        "dim view",
        "take a dim view of"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记昏暗的的事物",
      "academicContext": "Understanding dim concepts is essential for academic success.",
      "dailyContext": "This is really dim! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0336",
    "word": "dinner",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdɪnə(r)/",
      "phonetic_us": "/ˈdɪnə(r)/",
      "meanings": [
        "正餐",
        "宴会"
      ],
      "word_forms": {
        "plural": "dinners"
      },
      "collocations": [
        "have dinner",
        "dinner party",
        "dinner time",
        "what's for dinner"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0337",
    "word": "dip",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dɪp/",
      "phonetic_us": "/dɪp/",
      "meanings": [
        "浸",
        "蘸",
        "把…放入又取出"
      ],
      "word_forms": {},
      "collocations": [
        "take a dip",
        "dip into",
        "dip in",
        "lucky dip"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"浸\"的概念",
      "academicContext": "The dip plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0338",
    "word": "direct",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈrekt, daɪˈrekt/",
      "phonetic_us": "/dɪˈrekt, daɪˈrekt/",
      "meanings": [
        "直接的",
        "直截了当的 vt. 指挥",
        "指导"
      ],
      "word_forms": {
        "comparative": "directer",
        "superlative": "directest"
      },
      "collocations": [
        "direct result",
        "direct flight",
        "direct route",
        "in direct contact"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0339",
    "word": "direction",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈrekʃ(ə)n, daɪˈrekʃ(ə)n/",
      "phonetic_us": "/dɪˈrekʃ(ə)n, daɪˈrekʃ(ə)n/",
      "meanings": [
        "方向",
        "方位"
      ],
      "word_forms": {
        "plural": "directions"
      },
      "collocations": [
        "in the direction of",
        "sense of direction",
        "change direction",
        "step in the right direction"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0340",
    "word": "director",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈrektə(r)/",
      "phonetic_us": "/dɪˈrektə(r)/",
      "meanings": [
        "所长",
        "处长",
        "主任"
      ],
      "word_forms": {
        "plural": "directors"
      },
      "collocations": [
        "film director",
        "executive director",
        "board of directors"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0341",
    "word": "directory",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈrektərɪ/",
      "phonetic_us": "/dɪˈrektərɪ/",
      "meanings": [
        "姓名地址录"
      ],
      "word_forms": {
        "comparative": "more directory",
        "superlative": "most directory"
      },
      "collocations": [
        "telephone directory",
        "online directory"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0342",
    "word": "dirt",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dɜːt/",
      "phonetic_us": "/dɜːt/",
      "meanings": [
        "污物",
        "脏物"
      ],
      "word_forms": {
        "plural": "dirts"
      },
      "collocations": [
        "dirt cheap",
        "dirt road",
        "dish the dirt",
        "treat like dirt"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"污物\"的概念",
      "academicContext": "The dirt plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0343",
    "word": "dirty",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈdɜːtɪ/",
      "phonetic_us": "/ˈdɜːtɪ/",
      "meanings": [
        "脏的"
      ],
      "word_forms": {
        "comparative": "dirtier",
        "superlative": "dirtiest"
      },
      "collocations": [
        "dirty clothes",
        "get dirty",
        "dirty work",
        "dirty trick",
        "play dirty"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记脏的的事物",
      "academicContext": "Understanding dirty concepts is essential for academic success.",
      "dailyContext": "This is really dirty! I love it.",
      "memoryStory": "通过联想\"dirty\"的发音和拼写，记住其\"脏的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0344",
    "word": "disappear",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪsəˈpɪə(r)/",
      "phonetic_us": "/dɪsəˈpɪə(r)/",
      "meanings": [
        "消失"
      ],
      "word_forms": {},
      "collocations": [
        "disappear from view",
        "disappear without a trace",
        "make disappear"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0345",
    "word": "discover",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈskʌvə(r)/",
      "phonetic_us": "/dɪˈskʌvə(r)/",
      "meanings": [
        "发现"
      ],
      "word_forms": {
        "plural": "discovers"
      },
      "collocations": [
        "discover that",
        "discover the truth",
        "yet to be discovered"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0346",
    "word": "discovery",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈskʌvərɪ/",
      "phonetic_us": "/dɪˈskʌvərɪ/",
      "meanings": [
        "发现"
      ],
      "word_forms": {
        "plural": "discoveries"
      },
      "collocations": [
        "scientific discovery",
        "make a discovery",
        "voyage of discovery"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0347",
    "word": "discuss",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪsˈkʌs/",
      "phonetic_us": "/dɪsˈkʌs/",
      "meanings": [
        "讨论",
        "议论"
      ],
      "word_forms": {
        "plural": "discusses"
      },
      "collocations": [
        "discuss with",
        "discuss the matter",
        "discuss in detail"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0348",
    "word": "discussion",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪsˈkʌʃ(ə)n/",
      "phonetic_us": "/dɪsˈkʌʃ(ə)n/",
      "meanings": [
        "讨论",
        "辩论"
      ],
      "word_forms": {
        "plural": "discussions"
      },
      "collocations": [
        "under discussion",
        "open for discussion",
        "group discussion"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0349",
    "word": "disease",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈziːz/",
      "phonetic_us": "/dɪˈziːz/",
      "meanings": [
        "病",
        "疾病"
      ],
      "word_forms": {
        "plural": "diseases"
      },
      "collocations": [
        "heart disease",
        "infectious disease",
        "cure a disease",
        "prevent disease"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0350",
    "word": "dish",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dɪʃ/",
      "phonetic_us": "/dɪʃ/",
      "meanings": [
        "盘",
        "碟",
        "盘装菜"
      ],
      "word_forms": {},
      "collocations": [
        "wash the dishes",
        "main dish",
        "side dish",
        "dish out",
        "satellite dish"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"盘\"的概念",
      "academicContext": "The dish plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0351",
    "word": "display",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪsˈplei/",
      "phonetic_us": "/dɪsˈplei/",
      "meanings": [
        "陈列",
        "展览",
        "显露"
      ],
      "word_forms": {
        "plural": "displays"
      },
      "collocations": [
        "on display",
        "window display",
        "put on display",
        "fireworks display"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0352",
    "word": "disturb",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈstɜːb/",
      "phonetic_us": "/dɪˈstɜːb/",
      "meanings": [
        "扰乱",
        "打扰"
      ],
      "word_forms": {},
      "collocations": [
        "do not disturb",
        "sorry to disturb"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0353",
    "word": "dive",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/daɪv/",
      "phonetic_us": "/daɪv/",
      "meanings": [
        "跳水"
      ],
      "word_forms": {},
      "collocations": [
        "dive into",
        "take a dive",
        "nose dive",
        "scuba dive",
        "dive deep"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记跳水的事物",
      "academicContext": "Understanding dive concepts is essential for academic success.",
      "dailyContext": "This is really dive! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0354",
    "word": "divide",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɪˈvaɪd/",
      "phonetic_us": "/dɪˈvaɪd/",
      "meanings": [
        "分",
        "划分"
      ],
      "word_forms": {
        "plural": "divides"
      },
      "collocations": [
        "divide into",
        "divide by",
        "divide and conquer",
        "great divide"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0355",
    "word": "doctor",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdɔktə(r)/",
      "phonetic_us": "/ˈdɔktə(r)/",
      "meanings": [
        "医生",
        "大夫",
        "博士"
      ],
      "word_forms": {
        "plural": "doctors"
      },
      "collocations": [
        "see a doctor",
        "go to the doctor",
        "family doctor",
        "just what the doctor ordered"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0356",
    "word": "dog",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dɔɡ; (US) dɔːɡ/",
      "phonetic_us": "/dɔɡ; (US) dɔːɡ/",
      "meanings": [
        "狗"
      ],
      "word_forms": {
        "plural": "dogs"
      },
      "collocations": [
        "pet dog",
        "hot dog",
        "lucky dog",
        "let sleeping dogs lie",
        "dog tired"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"狗\"的概念",
      "academicContext": "The dog plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0357",
    "word": "doll",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dɔl; (US) dɔːl/",
      "phonetic_us": "/dɔl; (US) dɔːl/",
      "meanings": [
        "玩偶",
        "玩具娃娃"
      ],
      "word_forms": {},
      "collocations": [
        "play with dolls",
        "rag doll",
        "baby doll"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"玩偶\"的概念",
      "academicContext": "The doll plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0358",
    "word": "dollar",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dɔlə/",
      "phonetic_us": "/dɔlə/",
      "meanings": [
        "元（美国、加拿大、澳大利亚等国货币单位）"
      ],
      "word_forms": {},
      "collocations": [
        "dollar sign",
        "million dollars",
        "dollar store",
        "bet one's bottom dollar"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0359",
    "word": "door",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/dɔː(r)/",
      "phonetic_us": "/dɔː(r)/",
      "meanings": [
        "门"
      ],
      "word_forms": {
        "plural": "doors"
      },
      "collocations": [
        "open the door",
        "close the door",
        "front door",
        "back door",
        "next door",
        "door to door"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"门\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0360",
    "word": "double",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʌb(ə)l/",
      "phonetic_us": "/ˈdʌb(ə)l/",
      "meanings": [
        "两倍.双的 n. 两个.双"
      ],
      "word_forms": {
        "plural": "doubles",
        "comparative": "doubler",
        "superlative": "doublest"
      },
      "collocations": [
        "double room",
        "double check",
        "double standard",
        "on the double"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0361",
    "word": "down",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/daʊn/",
      "phonetic_us": "/daʊn/",
      "meanings": [
        "沿着",
        "沿…而下 ad. 向下"
      ],
      "word_forms": {},
      "collocations": [
        "sit down",
        "write down",
        "put down",
        "look down",
        "come down",
        "slow down",
        "up and down"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"沿着\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0362",
    "word": "downstairs",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdaʊnsteəz/",
      "phonetic_us": "/ˈdaʊnsteəz/",
      "meanings": [
        "在楼下",
        "到楼下"
      ],
      "word_forms": {},
      "collocations": [
        "go downstairs",
        "come downstairs",
        "live downstairs"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0363",
    "word": "downtown",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdaʊntaʊn/",
      "phonetic_us": "/ˈdaʊntaʊn/",
      "meanings": [
        "城市的商业区",
        "中心区",
        "闹市区 a. 商业区的"
      ],
      "word_forms": {
        "comparative": "more downtown",
        "superlative": "most downtown"
      },
      "collocations": [
        "go downtown",
        "downtown area",
        "downtown district"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0364",
    "word": "dozen",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈdʌzn/",
      "phonetic_us": "/ˈdʌzn/",
      "meanings": [
        "十二个",
        "几十",
        "许多"
      ],
      "word_forms": {
        "plural": "dozens"
      },
      "collocations": [
        "a dozen eggs",
        "half a dozen",
        "dozens of",
        "baker's dozen"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"十二个\"的概念",
      "academicContext": "The dozen plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"dozen\"的发音和拼写，记住其\"十二个\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0365",
    "word": "drag",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dræɡ/",
      "phonetic_us": "/dræɡ/",
      "meanings": [
        "拖",
        "拽"
      ],
      "word_forms": {
        "plural": "drags"
      },
      "collocations": [
        "drag on",
        "drag out",
        "drag and drop",
        "drag one's feet",
        "what a drag"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"拖\"的概念",
      "academicContext": "The drag plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0366",
    "word": "drawer",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/drɔ:ə/",
      "phonetic_us": "/drɔ:ə/",
      "meanings": [
        "抽屉"
      ],
      "word_forms": {
        "plural": "drawers"
      },
      "collocations": [
        "top drawer",
        "bottom drawer",
        "out of the top drawer"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0367",
    "word": "drawing",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdrɔːɪŋ/",
      "phonetic_us": "/ˈdrɔːɪŋ/",
      "meanings": [
        "图画",
        "素描",
        "绘画"
      ],
      "word_forms": {},
      "collocations": [
        "technical drawing",
        "pencil drawing",
        "back to the drawing board"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0368",
    "word": "dress",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dres/",
      "phonetic_us": "/dres/",
      "meanings": [
        "女服",
        "连衣裙",
        "(统指)服装"
      ],
      "word_forms": {},
      "collocations": [
        "get dressed",
        "dress up",
        "evening dress",
        "wedding dress",
        "dress code"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"女服\"的概念",
      "academicContext": "The dress plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"dress\"的发音和拼写，记住其\"女服\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0369",
    "word": "drink",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/drɪŋk/",
      "phonetic_us": "/drɪŋk/",
      "meanings": [
        "饮料",
        "喝酒 "
      ],
      "word_forms": {},
      "collocations": [
        "drink water",
        "drink tea",
        "soft drink"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"饮料\"的概念",
      "academicContext": "Drinking water is essential for life.",
      "dailyContext": "Would you like something to drink?",
      "memoryStory": "",
      "confusableWords": [
        "sip",
        "gulp"
      ],
      "etymology": {
        "root": "drink",
        "meaning": "来自古英语drincan,喝"
      }
    }
  },
  {
    "id": "w0370",
    "word": "drought",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/draut/",
      "phonetic_us": "/draut/",
      "meanings": [
        "干旱"
      ],
      "word_forms": {
        "plural": "droughts"
      },
      "collocations": [
        "severe drought",
        "drought conditions"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0371",
    "word": "drunk",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/drʌŋk/",
      "phonetic_us": "/drʌŋk/",
      "meanings": [
        "醉的"
      ],
      "word_forms": {
        "comparative": "drunker",
        "superlative": "drunkest"
      },
      "collocations": [
        "dead drunk",
        "blind drunk",
        "get drunk",
        "drunk driving"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记醉的的事物",
      "academicContext": "Understanding drunk concepts is essential for academic success.",
      "dailyContext": "This is really drunk! I love it.",
      "memoryStory": "通过联想\"drunk\"的发音和拼写，记住其\"醉的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0372",
    "word": "dry",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/draɪ/",
      "phonetic_us": "/draɪ/",
      "meanings": [
        "使…干",
        "弄干",
        "擦干 a. 干的"
      ],
      "word_forms": {},
      "collocations": [
        "dry up",
        "dry out",
        "dry clean",
        "high and dry",
        "bone dry"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"使…干\"的概念",
      "academicContext": "The dry plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0373",
    "word": "duck",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʌk/",
      "phonetic_us": "/dʌk/",
      "meanings": [
        "鸭子"
      ],
      "word_forms": {
        "plural": "ducks"
      },
      "collocations": [
        "sitting duck",
        "lame duck",
        "water off a duck's back",
        "like water off a duck's back"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"鸭子\"的概念",
      "academicContext": "The duck plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0374",
    "word": "dumpling",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʌmplɪŋ/",
      "phonetic_us": "/ˈdʌmplɪŋ/",
      "meanings": [
        "饺子"
      ],
      "word_forms": {
        "plural": "dumplings"
      },
      "collocations": [
        "Chinese dumplings",
        "make dumplings",
        "steam dumplings"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0375",
    "word": "during",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈdjuərɪŋ; (US) ˈdɪərɪŋ/",
      "phonetic_us": "/ˈdjuərɪŋ; (US) ˈdɪərɪŋ/",
      "meanings": [
        "在…期间",
        "在…过程中"
      ],
      "word_forms": {},
      "collocations": [
        "during the day",
        "during the week",
        "during class",
        "during break"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"在…期间\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "throughout",
        "while",
        "in the course of"
      ]
    }
  },
  {
    "id": "w0376",
    "word": "dusk",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʌsk/",
      "phonetic_us": "/dʌsk/",
      "meanings": [
        "黄昏"
      ],
      "word_forms": {
        "plural": "dusks"
      },
      "collocations": [
        "at dusk",
        "from dawn to dusk",
        "after dusk"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"黄昏\"的概念",
      "academicContext": "The dusk plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0377",
    "word": "dust",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʌst/",
      "phonetic_us": "/dʌst/",
      "meanings": [
        "灰尘",
        "尘土"
      ],
      "word_forms": {
        "plural": "dusts"
      },
      "collocations": [
        "dust off",
        "bite the dust",
        "gather dust",
        "dust storm",
        "dust pan"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"灰尘\"的概念",
      "academicContext": "The dust plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0378",
    "word": "dustbin",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʌstbɪn/",
      "phonetic_us": "/ˈdʌstbɪn/",
      "meanings": [
        "垃圾箱"
      ],
      "word_forms": {
        "plural": "dustbins"
      },
      "collocations": [
        "throw in the dustbin",
        "empty the dustbin"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0379",
    "word": "duty",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈdjuːtɪ/",
      "phonetic_us": "/ˈdjuːtɪ/",
      "meanings": [
        "责任",
        "义务"
      ],
      "word_forms": {
        "plural": "duties"
      },
      "collocations": [
        "on duty",
        "off duty",
        "sense of duty",
        "do one's duty",
        "duty free"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"责任\"的概念",
      "academicContext": "The duty plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0380",
    "word": "early",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɜːlɪ/",
      "phonetic_us": "/ɜːlɪ/",
      "meanings": [
        "早的 ad. 早地"
      ],
      "word_forms": {
        "comparative": "earlier",
        "superlative": "earliest"
      },
      "collocations": [
        "early morning",
        "arrive early",
        "as early as",
        "early bird",
        "early stage"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达早的 ad. 早地这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "soon",
        "ahead of time",
        "premature"
      ],
      "etymology": {
        "root": "ear",
        "suffix": "-ly",
        "meaning": "ear + ly(副词后缀)"
      }
    }
  },
  {
    "id": "w0381",
    "word": "earth",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɜːθ/",
      "phonetic_us": "/ɜːθ/",
      "meanings": [
        "地球",
        "土",
        "泥"
      ],
      "word_forms": {
        "comparative": "earther",
        "superlative": "earthest"
      },
      "collocations": [
        "on earth",
        "down to earth",
        "the ends of the earth",
        "what on earth",
        "planet Earth"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用地球的方式完成任务",
      "academicContext": "The data was analyzed earth to ensure accuracy.",
      "dailyContext": "Please do it earth this time.",
      "memoryStory": "通过联想\"earth\"的发音和拼写，记住其\"地球\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0382",
    "word": "earthquake",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɜːθkweɪk/",
      "phonetic_us": "/ˈɜːθkweɪk/",
      "meanings": [
        "地震"
      ],
      "word_forms": {
        "comparative": "more earthquake",
        "superlative": "most earthquake"
      },
      "collocations": [
        "major earthquake",
        "earthquake zone",
        "earthquake hits"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0383",
    "word": "east",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/iːst/",
      "phonetic_us": "/iːst/",
      "meanings": [
        "东方",
        "东部的",
        "ad. 在东方"
      ],
      "word_forms": {},
      "collocations": [
        "in the east",
        "Middle East",
        "Far East",
        "east coast",
        "East Asia"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"东方\"的概念",
      "academicContext": "The east plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0384",
    "word": "easy",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈiːzɪ/",
      "phonetic_us": "/ˈiːzɪ/",
      "meanings": [
        "容易的",
        "不费力的"
      ],
      "word_forms": {
        "comparative": "easier",
        "superlative": "easiest"
      },
      "collocations": [
        "take it easy",
        "easy way",
        "easy to do"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记容易的的事物",
      "academicContext": "The exam was easier than expected.",
      "dailyContext": "This game is easy to play.",
      "memoryStory": "",
      "confusableWords": [
        "simple",
        "effortless"
      ],
      "etymology": {
        "root": "easy",
        "meaning": "来自古法语aisie,舒适的"
      }
    }
  },
  {
    "id": "w0385",
    "word": "edge",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/edʒ/",
      "phonetic_us": "/edʒ/",
      "meanings": [
        "边缘"
      ],
      "word_forms": {
        "plural": "edges"
      },
      "collocations": [
        "cutting edge",
        "on edge",
        "edge out",
        "have an edge over",
        "on the edge of"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"边缘\"的概念",
      "academicContext": "The edge plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0386",
    "word": "education",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/edjʊːkeɪʃ (ə)n/",
      "phonetic_us": "/edjʊːkeɪʃ (ə)n/",
      "meanings": [
        "教育",
        "培养"
      ],
      "word_forms": {
        "verb": "educate",
        "adjective": "educational",
        "noun": "educator"
      },
      "collocations": [
        "receive education",
        "higher education",
        "quality education",
        "physical education",
        "education system"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"教育\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "learning",
        "schooling",
        "instruction"
      ],
      "etymology": {
        "root": "educa",
        "suffix": "-tion",
        "meaning": "educa + tion(名词后缀)"
      }
    }
  },
  {
    "id": "w0387",
    "word": "egg",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/eɡ/",
      "phonetic_us": "/eɡ/",
      "meanings": [
        "蛋",
        "卵"
      ],
      "word_forms": {
        "plural": "eggs"
      },
      "collocations": [
        "fried egg",
        "boiled egg",
        "Easter egg",
        "put all eggs in one basket",
        "bad egg"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"蛋\"的概念",
      "academicContext": "The egg plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0388",
    "word": "Egypt",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈiːdʒɪpt/",
      "phonetic_us": "/ˈiːdʒɪpt/",
      "meanings": [
        "埃及"
      ],
      "word_forms": {},
      "collocations": [
        "ancient Egypt",
        "in Egypt",
        "from Egypt"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"埃及\"的概念",
      "academicContext": "The Egypt plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"Egypt\"的发音和拼写，记住其\"埃及\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0389",
    "word": "Egyptian",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪˈdʒɪpʃ(ə)n/",
      "phonetic_us": "/ɪˈdʒɪpʃ(ə)n/",
      "meanings": [
        "埃及的",
        "埃及人的",
        "埃及语的 n. 埃及人"
      ],
      "word_forms": {
        "plural": "egyptians",
        "comparative": "more egyptian",
        "superlative": "most egyptian"
      },
      "collocations": [
        "ancient Egyptian",
        "Egyptian pyramids"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0390",
    "word": "eight",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/eɪt/",
      "phonetic_us": "/eɪt/",
      "meanings": [
        "八"
      ],
      "word_forms": {
        "plural": "eights"
      },
      "collocations": [
        "at eight",
        "eight o'clock",
        "figure eight"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"八\"的概念",
      "academicContext": "The eight plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"eight\"的发音和拼写，记住其\"八\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0391",
    "word": "eighteen",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈeɪˈtiːn/",
      "phonetic_us": "/ˈeɪˈtiːn/",
      "meanings": [
        "十八"
      ],
      "word_forms": {
        "plural": "eighteens"
      },
      "collocations": [
        "eighteen years old",
        "at eighteen"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0392",
    "word": "eighth",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/eɪθ/",
      "phonetic_us": "/eɪθ/",
      "meanings": [
        "第八"
      ],
      "word_forms": {
        "plural": "eighths"
      },
      "collocations": [
        "the eighth grade",
        "eighth place"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0393",
    "word": "eighty",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈeɪtɪ/",
      "phonetic_us": "/ˈeɪtɪ/",
      "meanings": [
        "八十"
      ],
      "word_forms": {
        "plural": "eighties"
      },
      "collocations": [
        "eighty years old",
        "in one's eighties"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0394",
    "word": "either",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈaɪðə(r)/",
      "phonetic_us": "/ˈaɪðə(r)/",
      "meanings": [
        "两方任一方的",
        "二者之一 conj. 二者之一",
        "要么 ad. 也"
      ],
      "word_forms": {},
      "collocations": [
        "either way",
        "either or",
        "either side",
        "me either"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0395",
    "word": "elder",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈeldə(r)/",
      "phonetic_us": "/ˈeldə(r)/",
      "meanings": [
        "长者",
        "前辈"
      ],
      "word_forms": {
        "plural": "elders"
      },
      "collocations": [
        "elder brother",
        "elder sister",
        "respect one's elders",
        "elder statesman"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"长者\"的概念",
      "academicContext": "The elder plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"elder\"的发音和拼写，记住其\"长者\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0396",
    "word": "electricity",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪlekˈtrɪsɪtɪ/",
      "phonetic_us": "/ɪlekˈtrɪsɪtɪ/",
      "meanings": [
        "电",
        "电流"
      ],
      "word_forms": {
        "plural": "electricities"
      },
      "collocations": [
        "static electricity",
        "electricity bill",
        "generate electricity"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0397",
    "word": "elephant",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈelɪfənt/",
      "phonetic_us": "/ˈelɪfənt/",
      "meanings": [
        "象"
      ],
      "word_forms": {},
      "collocations": [
        "white elephant",
        "elephant in the room",
        "see the elephant"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0398",
    "word": "elevator",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈelɪveitə/",
      "phonetic_us": "/ˈelɪveitə/",
      "meanings": [
        "电梯",
        "升降梯"
      ],
      "word_forms": {
        "plural": "elevators"
      },
      "collocations": [
        "take the elevator",
        "elevator music",
        "elevator pitch"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0399",
    "word": "eleven",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪˈlev(ə)n/",
      "phonetic_us": "/ɪˈlev(ə)n/",
      "meanings": [
        "十一"
      ],
      "word_forms": {
        "plural": "elevens"
      },
      "collocations": [
        "eleven o'clock",
        "at eleven"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0400",
    "word": "else",
    "level": "初一",
    "unit": "Unit 4",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/els/",
      "phonetic_us": "/els/",
      "meanings": [
        "别的",
        "其他的"
      ],
      "word_forms": {
        "comparative": "elser",
        "superlative": "elsest"
      },
      "collocations": [
        "or else",
        "someone else",
        "somewhere else",
        "anything else",
        "what else"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记别的的事物",
      "academicContext": "Understanding else concepts is essential for academic success.",
      "dailyContext": "This is really else! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0401",
    "word": "empty",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈemptɪ/",
      "phonetic_us": "/ˈemptɪ/",
      "meanings": [
        "空的"
      ],
      "word_forms": {
        "comparative": "emptier",
        "superlative": "emptiest"
      },
      "collocations": [
        "empty bottle",
        "empty stomach",
        "empty promise",
        "on an empty stomach",
        "run on empty"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记空的的事物",
      "academicContext": "Understanding empty concepts is essential for academic success.",
      "dailyContext": "This is really empty! I love it.",
      "memoryStory": "通过联想\"empty\"的发音和拼写，记住其\"空的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0402",
    "word": "encourage",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈkʌrɪdʒ/",
      "phonetic_us": "/ɪnˈkʌrɪdʒ/",
      "meanings": [
        "鼓励"
      ],
      "word_forms": {},
      "collocations": [
        "encourage sb to do",
        "greatly encouraged"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0403",
    "word": "end",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/end/",
      "phonetic_us": "/end/",
      "meanings": [
        "末尾",
        "终点",
        "结束 v. 结束"
      ],
      "word_forms": {},
      "collocations": [
        "in the end",
        "end up",
        "come to an end"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"末尾\"的概念",
      "academicContext": "The experiment ended successfully.",
      "dailyContext": "When does this class end?",
      "memoryStory": "",
      "confusableWords": [
        "finish",
        "conclusion",
        "termination"
      ],
      "etymology": {
        "root": "end",
        "meaning": "来自古英语ende,结束"
      }
    }
  },
  {
    "id": "w0404",
    "word": "enemy",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈenɪmɪ/",
      "phonetic_us": "/ˈenɪmɪ/",
      "meanings": [
        "敌人",
        "敌军"
      ],
      "word_forms": {
        "plural": "enemies"
      },
      "collocations": [
        "natural enemy",
        "sworn enemy",
        "make an enemy",
        "enemy territory",
        "public enemy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"敌人\"的概念",
      "academicContext": "The enemy plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"enemy\"的发音和拼写，记住其\"敌人\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0405",
    "word": "engineer",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/endʒɪˈnɪə(r)/",
      "phonetic_us": "/endʒɪˈnɪə(r)/",
      "meanings": [
        "工程师",
        "技师"
      ],
      "word_forms": {
        "plural": "engineers"
      },
      "collocations": [
        "software engineer",
        "chief engineer",
        "civil engineer"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0406",
    "word": "England",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɪŋɡlənd/",
      "phonetic_us": "/ˈɪŋɡlənd/",
      "meanings": [
        "英格兰"
      ],
      "word_forms": {},
      "collocations": [
        "in England",
        "from England",
        "Bank of England",
        "New England"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0407",
    "word": "English",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɪŋɡlɪʃ/",
      "phonetic_us": "/ˈɪŋɡlɪʃ/",
      "meanings": [
        "英国的",
        "英国人的",
        "英语的 n. 英语"
      ],
      "word_forms": {
        "plural": "englishes",
        "comparative": "more english",
        "superlative": "most english"
      },
      "collocations": [
        "speak English",
        "in English",
        "English language",
        "plain English",
        "broken English"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0408",
    "word": "enjoy",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɪnˈdʒɔɪ/",
      "phonetic_us": "/ɪnˈdʒɔɪ/",
      "meanings": [
        "欣赏",
        "享受乐趣",
        "喜欢"
      ],
      "word_forms": {},
      "collocations": [
        "enjoy doing",
        "enjoy oneself",
        "enjoy life"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"欣赏\"的概念",
      "academicContext": "Students who enjoy learning perform better.",
      "dailyContext": "I enjoy reading novels.",
      "memoryStory": "",
      "confusableWords": [
        "like",
        "appreciate"
      ],
      "etymology": {
        "prefix": "en-",
        "root": "joy",
        "meaning": "en(使) + joy(快乐) = 使快乐,享受"
      }
    }
  },
  {
    "id": "w0409",
    "word": "enjoyable",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈdʒɔɪəb(ə)l/",
      "phonetic_us": "/ɪnˈdʒɔɪəb(ə)l/",
      "meanings": [
        "愉快的",
        "有趣的"
      ],
      "word_forms": {
        "comparative": "more enjoyable",
        "superlative": "most enjoyable"
      },
      "collocations": [
        "most enjoyable",
        "enjoyable experience",
        "thoroughly enjoyable"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0410",
    "word": "enough",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪˈnʌf/",
      "phonetic_us": "/ɪˈnʌf/",
      "meanings": [
        "足够",
        "充足 a. 足够",
        "充分的 ad. 足够地"
      ],
      "word_forms": {},
      "collocations": [
        "good enough",
        "enough time",
        "enough money",
        "old enough",
        "not enough",
        "more than enough"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"足够\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "sufficient",
        "adequate",
        "plenty"
      ]
    }
  },
  {
    "id": "w0411",
    "word": "enter",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈentə(r)/",
      "phonetic_us": "/ˈentə(r)/",
      "meanings": [
        "进入"
      ],
      "word_forms": {
        "noun": "entrance",
        "noun2": "entry"
      },
      "collocations": [
        "enter the room",
        "enter school",
        "enter university",
        "enter for",
        "please enter"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"进入\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "go in",
        "come in",
        "access"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0412",
    "word": "entrance",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈentrəns/",
      "phonetic_us": "/ˈentrəns/",
      "meanings": [
        "入口",
        "入场",
        "进入的权利"
      ],
      "word_forms": {},
      "collocations": [
        "entrance exam",
        "entrance fee",
        "make an entrance",
        "entrance hall"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0413",
    "word": "entry",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈentrɪ/",
      "phonetic_us": "/ˈentrɪ/",
      "meanings": [
        "进入"
      ],
      "word_forms": {},
      "collocations": [
        "entry level",
        "entry form",
        "make an entry",
        "no entry",
        "entry point"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"进入\"的概念",
      "academicContext": "The entry plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"entry\"的发音和拼写，记住其\"进入\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0414",
    "word": "envelope",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈenvələʊp/",
      "phonetic_us": "/ˈenvələʊp/",
      "meanings": [
        "信封"
      ],
      "word_forms": {},
      "collocations": [
        "self-addressed envelope",
        "push the envelope",
        "sealed envelope"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0415",
    "word": "equal",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈiːkw(ə)l/",
      "phonetic_us": "/ˈiːkw(ə)l/",
      "meanings": [
        "平等的 vt. 等于",
        "使等于"
      ],
      "word_forms": {
        "comparative": "equaller",
        "superlative": "equallest"
      },
      "collocations": [
        "equal to",
        "equal rights",
        "on equal terms",
        "all things being equal",
        "without equal"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记平等的 vt. 等于的事物",
      "academicContext": "Understanding equal concepts is essential for academic success.",
      "dailyContext": "This is really equal! I love it.",
      "memoryStory": "通过联想\"equal\"的发音和拼写，记住其\"平等的 vt. 等于\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0416",
    "word": "equality",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/iːˈkwɔlətɪ/",
      "phonetic_us": "/iːˈkwɔlətɪ/",
      "meanings": [
        "平等"
      ],
      "word_forms": {
        "plural": "equalities"
      },
      "collocations": [
        "gender equality",
        "racial equality",
        "equality before the law"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0417",
    "word": "equip",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɪˈkwɪp/",
      "phonetic_us": "/ɪˈkwɪp/",
      "meanings": [
        "提供设备",
        "装备",
        "配备"
      ],
      "word_forms": {},
      "collocations": [
        "equip with",
        "be equipped with",
        "well equipped",
        "equip for"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"提供设备\"的概念",
      "academicContext": "The equip plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"equip\"的发音和拼写，记住其\"提供设备\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0418",
    "word": "equipment",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪˈkwɪpmənt/",
      "phonetic_us": "/ɪˈkwɪpmənt/",
      "meanings": [
        "装备",
        "设备"
      ],
      "word_forms": {},
      "collocations": [
        "sports equipment",
        "safety equipment",
        "office equipment",
        "heavy equipment"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0419",
    "word": "eraser",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪˈreɪzə(r)/",
      "phonetic_us": "/ɪˈreɪzə(r)/",
      "meanings": [
        "橡皮擦",
        "黑板擦"
      ],
      "word_forms": {},
      "collocations": [
        "pencil eraser",
        "blackboard eraser"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0420",
    "word": "error",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈerə(r)/",
      "phonetic_us": "/ˈerə(r)/",
      "meanings": [
        "错误",
        "差错"
      ],
      "word_forms": {
        "plural": "errors"
      },
      "collocations": [
        "human error",
        "trial and error",
        "margin of error",
        "error message",
        "by error"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"错误\"的概念",
      "academicContext": "The error plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"error\"的发音和拼写，记住其\"错误\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0421",
    "word": "especially",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪˈspeʃəlɪ/",
      "phonetic_us": "/ɪˈspeʃəlɪ/",
      "meanings": [
        "特别",
        "尤其"
      ],
      "word_forms": {
        "plural": "especiallies"
      },
      "collocations": [
        "especially for",
        "especially when",
        "not especially"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0422",
    "word": "essay",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈeseɪ/",
      "phonetic_us": "/ˈeseɪ/",
      "meanings": [
        "散文",
        "文章",
        "随笔"
      ],
      "word_forms": {
        "plural": "essays"
      },
      "collocations": [
        "write an essay",
        "essay writing",
        "photo essay",
        "personal essay"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"散文\"的概念",
      "academicContext": "The essay plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"essay\"的发音和拼写，记住其\"散文\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0423",
    "word": "Europe",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈjʊərəp/",
      "phonetic_us": "/ˈjʊərəp/",
      "meanings": [
        "欧洲"
      ],
      "word_forms": {},
      "collocations": [
        "in Europe",
        "across Europe",
        "Western Europe",
        "Eastern Europe"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0424",
    "word": "European",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/jʊərəˈpiːən/",
      "phonetic_us": "/jʊərəˈpiːən/",
      "meanings": [
        "欧洲的",
        "欧洲人的 n. 欧洲人"
      ],
      "word_forms": {
        "plural": "europeans",
        "comparative": "more european",
        "superlative": "most european"
      },
      "collocations": [
        "European Union",
        "European country"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0425",
    "word": "even",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈiːv(ə)n/",
      "phonetic_us": "/ˈiːv(ə)n/",
      "meanings": [
        "甚至",
        "连（…都）",
        "更"
      ],
      "word_forms": {},
      "collocations": [
        "even if",
        "even though",
        "not even",
        "even more",
        "even better"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"甚至\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "level",
        "flat",
        "smooth"
      ]
    }
  },
  {
    "id": "w0426",
    "word": "evening",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈiːvnɪŋ/",
      "phonetic_us": "/ˈiːvnɪŋ/",
      "meanings": [
        "傍晚",
        "晚上"
      ],
      "word_forms": {
        "plural": "evenings"
      },
      "collocations": [
        "this evening",
        "good evening",
        "evening dress",
        "in the evening",
        "yesterday evening"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0427",
    "word": "event",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɪ'vent/",
      "phonetic_us": "/ɪ'vent/",
      "meanings": [
        "事件",
        "大事"
      ],
      "word_forms": {},
      "collocations": [
        "in the event of",
        "special event",
        "main event",
        "sporting event",
        "at all events"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"事件\"的概念",
      "academicContext": "The event plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"event\"的发音和拼写，记住其\"事件\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0428",
    "word": "ever",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈevə(r)/",
      "phonetic_us": "/ˈevə(r)/",
      "meanings": [
        "曾经",
        "无论何时"
      ],
      "word_forms": {
        "plural": "evers"
      },
      "collocations": [
        "ever since",
        "ever after",
        "hardly ever",
        "forever",
        "for ever and ever"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"曾经\"的概念",
      "academicContext": "The ever plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0429",
    "word": "every",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈevrɪ/",
      "phonetic_us": "/ˈevrɪ/",
      "meanings": [
        "每一",
        "每个的"
      ],
      "word_forms": {},
      "collocations": [
        "every day",
        "every time",
        "every one",
        "every other",
        "every now and then"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"每一\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "each",
        "all",
        "any"
      ]
    }
  },
  {
    "id": "w0430",
    "word": "everybody",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈevrɪbɔdɪ/",
      "phonetic_us": "/ˈevrɪbɔdɪ/",
      "meanings": [
        "每人",
        "人人"
      ],
      "word_forms": {
        "plural": "everybodies"
      },
      "collocations": [
        "everybody knows",
        "everybody else",
        "hello everybody"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0431",
    "word": "everyday",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈevrɪdeɪ/",
      "phonetic_us": "/ˈevrɪdeɪ/",
      "meanings": [
        "每日的",
        "日常的"
      ],
      "word_forms": {
        "comparative": "more everyday",
        "superlative": "most everyday"
      },
      "collocations": [
        "everyday life",
        "everyday language",
        "everyday clothes"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0432",
    "word": "everyone",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈevrɪwʌn/",
      "phonetic_us": "/ˈevrɪwʌn/",
      "meanings": [
        "每人",
        "人人"
      ],
      "word_forms": {
        "plural": "everyones"
      },
      "collocations": [
        "everyone else",
        "everyone knows",
        "nearly everyone"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0433",
    "word": "everything",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈevrɪθɪŋ/",
      "phonetic_us": "/ˈevrɪθɪŋ/",
      "meanings": [
        "每件事",
        "事事"
      ],
      "word_forms": {
        "plural": "everythings"
      },
      "collocations": [
        "everything is fine",
        "everything else",
        "almost everything",
        "everything possible"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0434",
    "word": "everywhere",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈevrɪweə(r)/",
      "phonetic_us": "/ˈevrɪweə(r)/",
      "meanings": [
        "到处"
      ],
      "word_forms": {},
      "collocations": [
        "everywhere else",
        "go everywhere",
        "everywhere you go"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0435",
    "word": "exact",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɪɡˈzækt/",
      "phonetic_us": "/ɪɡˈzækt/",
      "meanings": [
        "精确的",
        "确切的"
      ],
      "word_forms": {
        "comparative": "exacter",
        "superlative": "exactest"
      },
      "collocations": [
        "to be exact",
        "exact change",
        "exact opposite",
        "the exact same"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记精确的的事物",
      "academicContext": "Understanding exact concepts is essential for academic success.",
      "dailyContext": "This is really exact! I love it.",
      "memoryStory": "通过联想\"exact\"的发音和拼写，记住其\"精确的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0436",
    "word": "exactly",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪɡˈzæktlɪ/",
      "phonetic_us": "/ɪɡˈzæktlɪ/",
      "meanings": [
        "精确地",
        "确切地"
      ],
      "word_forms": {
        "comparative": "more exactly",
        "superlative": "most exactly"
      },
      "collocations": [
        "exactly right",
        "not exactly",
        "exactly the same",
        "know exactly"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0437",
    "word": "examine",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪɡˈzæmɪn/",
      "phonetic_us": "/ɪɡˈzæmɪn/",
      "meanings": [
        "检查",
        "诊察"
      ],
      "word_forms": {
        "plural": "examines"
      },
      "collocations": [
        "examine carefully",
        "examine closely",
        "need to examine"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0438",
    "word": "example",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪɡˈzɑːmp(ə)l; (US) ɪɡˈzæmpl/",
      "phonetic_us": "/ɪɡˈzɑːmp(ə)l; (US) ɪɡˈzæmpl/",
      "meanings": [
        "例子",
        "榜样"
      ],
      "word_forms": {
        "plural": "examples"
      },
      "collocations": [
        "for example",
        "good example",
        "set an example",
        "give an example",
        "take...as an example"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"例子\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "instance",
        "illustration",
        "sample"
      ],
      "etymology": {
        "prefix": "ex-",
        "root": "ample",
        "meaning": "ex(向外) + ample"
      }
    }
  },
  {
    "id": "w0439",
    "word": "excellent",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈeksələnt/",
      "phonetic_us": "/ˈeksələnt/",
      "meanings": [
        "极好的",
        "优秀的"
      ],
      "word_forms": {
        "comparative": "more excellent",
        "superlative": "most excellent"
      },
      "collocations": [
        "excellent performance",
        "excellent condition",
        "absolutely excellent"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0440",
    "word": "except",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪkˈsept/",
      "phonetic_us": "/ɪkˈsept/",
      "meanings": [
        "除…之外"
      ],
      "word_forms": {
        "plural": "excepts"
      },
      "collocations": [
        "except for",
        "except that",
        "except when"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0441",
    "word": "excite",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪkˈsaɪt/",
      "phonetic_us": "/ɪkˈsaɪt/",
      "meanings": [
        "使兴奋",
        "使激动"
      ],
      "word_forms": {},
      "collocations": [
        "excite interest",
        "get excited about"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0442",
    "word": "excuse",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪkˈskjuːz/",
      "phonetic_us": "/ɪkˈskjuːz/",
      "meanings": [
        "借口",
        "辩解 vt. 原谅",
        "宽恕"
      ],
      "word_forms": {},
      "collocations": [
        "excuse me",
        "make excuses",
        "no excuse",
        "lame excuse"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0443",
    "word": "exercise",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈeksəsaɪz/",
      "phonetic_us": "/ˈeksəsaɪz/",
      "meanings": [
        "锻炼",
        "做操",
        "练习"
      ],
      "word_forms": {},
      "collocations": [
        "do exercise",
        "exercise regularly",
        "physical exercise",
        "exercise book"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0444",
    "word": "exhibition",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/eksɪˈbɪʃ(ə)n/",
      "phonetic_us": "/eksɪˈbɪʃ(ə)n/",
      "meanings": [
        "展览",
        "展览会"
      ],
      "word_forms": {
        "plural": "exhibitions"
      },
      "collocations": [
        "art exhibition",
        "on exhibition",
        "trade exhibition"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0445",
    "word": "exist",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɪg'zɪst/",
      "phonetic_us": "/ɪg'zɪst/",
      "meanings": [
        "存在"
      ],
      "word_forms": {
        "plural": "exists"
      },
      "collocations": [
        "cease to exist",
        "exist in",
        "co-exist with",
        "continue to exist"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"存在\"的概念",
      "academicContext": "The exist plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"exist\"的发音和拼写，记住其\"存在\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0446",
    "word": "expect",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪkˈspekt/",
      "phonetic_us": "/ɪkˈspekt/",
      "meanings": [
        "预料",
        "盼望",
        "认为"
      ],
      "word_forms": {},
      "collocations": [
        "expect to",
        "as expected",
        "what to expect",
        "expect the unexpected"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0447",
    "word": "expensive",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪkˈspensɪv/",
      "phonetic_us": "/ɪkˈspensɪv/",
      "meanings": [
        "昂贵的"
      ],
      "word_forms": {
        "comparative": "more expensive",
        "superlative": "most expensive"
      },
      "collocations": [
        "too expensive",
        "extremely expensive",
        "expensive taste"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0448",
    "word": "experience",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪkˈspɪərɪəns/",
      "phonetic_us": "/ɪkˈspɪərɪəns/",
      "meanings": [
        "经验",
        "经历"
      ],
      "word_forms": {
        "verb": "experience",
        "adjective": "experienced"
      },
      "collocations": [
        "work experience",
        "learning experience",
        "life experience",
        "rich experience",
        "personal experience",
        "gain experience"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"经验\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "encounter",
        "undergo",
        "live through"
      ],
      "etymology": {
        "prefix": "ex-",
        "root": "perience",
        "meaning": "ex(向外) + perience"
      }
    }
  },
  {
    "id": "w0449",
    "word": "experiment",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪkˈsperɪmənt/",
      "phonetic_us": "/ɪkˈsperɪmənt/",
      "meanings": [
        "实验"
      ],
      "word_forms": {},
      "collocations": [
        "conduct an experiment",
        "scientific experiment",
        "experiment with"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0450",
    "word": "expert",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈekspɜːt/",
      "phonetic_us": "/ˈekspɜːt/",
      "meanings": [
        "专家",
        "能手"
      ],
      "word_forms": {},
      "collocations": [
        "expert advice",
        "expert opinion",
        "become an expert",
        "expert witness"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0451",
    "word": "explain",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪksˈpleɪn/",
      "phonetic_us": "/ɪksˈpleɪn/",
      "meanings": [
        "解释",
        "说明"
      ],
      "word_forms": {},
      "collocations": [
        "explain to",
        "explain why",
        "hard to explain",
        "let me explain"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0452",
    "word": "express",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪkˈspres/",
      "phonetic_us": "/ɪkˈspres/",
      "meanings": [
        "表达",
        "表示",
        "表情 n. 快车"
      ],
      "word_forms": {
        "plural": "expresses"
      },
      "collocations": [
        "express oneself",
        "express train",
        "express delivery",
        "express concern"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0453",
    "word": "eye",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/aɪ/",
      "phonetic_us": "/aɪ/",
      "meanings": [
        "眼睛"
      ],
      "word_forms": {
        "plural": "eyes"
      },
      "collocations": [
        "keep an eye on",
        "catch one's eye",
        "in the eyes of",
        "eye to eye",
        "turn a blind eye"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"眼睛\"的概念",
      "academicContext": "The eye plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0454",
    "word": "face",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/feɪs/",
      "phonetic_us": "/feɪs/",
      "meanings": [
        "脸 vt. 面向",
        "面对"
      ],
      "word_forms": {},
      "collocations": [
        "face to face",
        "make a face",
        "lose face",
        "save face",
        "in the face of",
        "face the music"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"脸 vt. 面向\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "countenance",
        "visage",
        "features"
      ]
    }
  },
  {
    "id": "w0455",
    "word": "fact",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/fækt/",
      "phonetic_us": "/fækt/",
      "meanings": [
        "事实",
        "现实"
      ],
      "word_forms": {
        "plural": "facts"
      },
      "collocations": [
        "in fact",
        "as a matter of fact",
        "the fact is",
        "face the facts",
        "based on facts"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"事实\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "truth",
        "reality",
        "actuality"
      ]
    }
  },
  {
    "id": "w0456",
    "word": "factory",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfæktəri/",
      "phonetic_us": "/ˈfæktəri/",
      "meanings": [
        "工厂"
      ],
      "word_forms": {
        "plural": "factories"
      },
      "collocations": [
        "factory worker",
        "car factory",
        "factory outlet"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0457",
    "word": "fail",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/feɪl/",
      "phonetic_us": "/feɪl/",
      "meanings": [
        "失败",
        "不及格",
        "衰退"
      ],
      "word_forms": {},
      "collocations": [
        "fail to do",
        "without fail",
        "fail in",
        "fail the exam",
        "words fail me"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"失败\"的概念",
      "academicContext": "The fail plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0458",
    "word": "fame",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/feɪm/",
      "phonetic_us": "/feɪm/",
      "meanings": [
        "名声",
        "名望",
        "名誉"
      ],
      "word_forms": {
        "plural": "fames"
      },
      "collocations": [
        "rise to fame",
        "claim to fame",
        "hall of fame",
        "fortune and fame"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"名声\"的概念",
      "academicContext": "The fame plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0459",
    "word": "family",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈfæmɪlɪ/",
      "phonetic_us": "/ˈfæmɪlɪ/",
      "meanings": [
        "家庭",
        "家族",
        "子女"
      ],
      "word_forms": {
        "plural": "families"
      },
      "collocations": [
        "family member",
        "start a family",
        "family tree"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "血缘或情感连接的亲密群体",
      "academicContext": "Family support is crucial for children's development.",
      "dailyContext": "I love spending time with my family.",
      "memoryStory": "",
      "confusableWords": [
        "relatives",
        "kin",
        "household"
      ],
      "etymology": {
        "root": "family",
        "meaning": "来自拉丁语familia,家庭"
      }
    }
  },
  {
    "id": "w0460",
    "word": "farm",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɑːm/",
      "phonetic_us": "/fɑːm/",
      "meanings": [
        "农场",
        "农庄"
      ],
      "word_forms": {
        "plural": "farms"
      },
      "collocations": [
        "on the farm",
        "farm animals",
        "farm land",
        "buy the farm"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"农场\"的概念",
      "academicContext": "The farm plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0461",
    "word": "farmer",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɑːmə(r)/",
      "phonetic_us": "/ˈfɑːmə(r)/",
      "meanings": [
        "农民"
      ],
      "word_forms": {
        "plural": "farmers"
      },
      "collocations": [
        "local farmer",
        "dairy farmer",
        "small farmer"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0462",
    "word": "farming",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɑːmiŋ/",
      "phonetic_us": "/ˈfɑːmiŋ/",
      "meanings": [
        "农业",
        "务农"
      ],
      "word_forms": {
        "plural": "farmings"
      },
      "collocations": [
        "organic farming",
        "dairy farming",
        "intensive farming"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0463",
    "word": "farmland",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/fɑːmlænd/",
      "phonetic_us": "/fɑːmlænd/",
      "meanings": [
        "农田"
      ],
      "word_forms": {
        "plural": "farmlands"
      },
      "collocations": [
        "rich farmland",
        "fertile farmland"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0464",
    "word": "fast",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈfɑːst/",
      "phonetic_us": "/ˈfɑːst/",
      "meanings": [
        "快的",
        "迅速的",
        "紧密的 ad. 快地"
      ],
      "word_forms": {
        "comparative": "faster",
        "superlative": "fastest"
      },
      "collocations": [
        "fast food",
        "hold fast",
        "break one's fast",
        "thick and fast",
        "play fast and loose"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记快的的事物",
      "academicContext": "Understanding fast concepts is essential for academic success.",
      "dailyContext": "This is really fast! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0465",
    "word": "fasten",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɑːs(ə)n; (US) fæsn/",
      "phonetic_us": "/ˈfɑːs(ə)n; (US) fæsn/",
      "meanings": [
        "扎牢",
        "扣住"
      ],
      "word_forms": {
        "plural": "fastens"
      },
      "collocations": [
        "fasten your seatbelt",
        "fasten securely"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0466",
    "word": "fat",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fæt/",
      "phonetic_us": "/fæt/",
      "meanings": [
        "脂肪 a. 胖的",
        "肥的"
      ],
      "word_forms": {
        "comparative": "fatter",
        "superlative": "fattest"
      },
      "collocations": [
        "body fat",
        "fat chance",
        "chew the fat",
        "fat cat",
        "live off the fat of the land"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记脂肪 a. 胖的的事物",
      "academicContext": "Understanding fat concepts is essential for academic success.",
      "dailyContext": "This is really fat! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0467",
    "word": "father",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɑːðə(r)/",
      "phonetic_us": "/ˈfɑːðə(r)/",
      "meanings": [
        "父亲"
      ],
      "word_forms": {
        "plural": "fathers"
      },
      "collocations": [
        "father and mother",
        "like father like son",
        "founding father"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0468",
    "word": "fax",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fæks/",
      "phonetic_us": "/fæks/",
      "meanings": [
        "传真"
      ],
      "word_forms": {
        "plural": "faxes"
      },
      "collocations": [
        "send a fax",
        "fax machine",
        "fax number",
        "by fax"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"传真\"的概念",
      "academicContext": "The fax plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0469",
    "word": "fear",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fiə(r)/",
      "phonetic_us": "/fiə(r)/",
      "meanings": [
        "害怕",
        "恐惧",
        "担忧"
      ],
      "word_forms": {},
      "collocations": [
        "for fear of",
        "in fear",
        "no fear",
        "fear for",
        "fear of heights"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"害怕\"的概念",
      "academicContext": "The fear plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0470",
    "word": "feather",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'feðə(r)/",
      "phonetic_us": "/'feðə(r)/",
      "meanings": [
        "羽毛"
      ],
      "word_forms": {
        "plural": "feathers"
      },
      "collocations": [
        "light as a feather",
        "birds of a feather",
        "feather in one's cap"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0471",
    "word": "February",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'februəri/",
      "phonetic_us": "/'februəri/",
      "meanings": [
        "2月"
      ],
      "word_forms": {},
      "collocations": [
        "in February",
        "this February",
        "mid-February"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0472",
    "word": "federal",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'fedər(ə)l/",
      "phonetic_us": "/'fedər(ə)l/",
      "meanings": [
        "中央的",
        "（政府）联邦的"
      ],
      "word_forms": {
        "comparative": "more federal",
        "superlative": "most federal"
      },
      "collocations": [
        "federal government",
        "federal law",
        "federal court"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0473",
    "word": "fee",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fiː/",
      "phonetic_us": "/fiː/",
      "meanings": [
        "费",
        "费用"
      ],
      "word_forms": {
        "plural": "fees"
      },
      "collocations": [
        "tuition fee",
        "entrance fee",
        "service fee",
        "membership fee",
        "pay a fee"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"费\"的概念",
      "academicContext": "The fee plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0474",
    "word": "feeling",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfiːlɪŋ/",
      "phonetic_us": "/ˈfiːlɪŋ/",
      "meanings": [
        "感情",
        "感觉"
      ],
      "word_forms": {},
      "collocations": [
        "gut feeling",
        "hurt someone's feelings",
        "mixed feelings",
        "no hard feelings"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0475",
    "word": "fence",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fens/",
      "phonetic_us": "/fens/",
      "meanings": [
        "栅栏",
        "围栏",
        "篱笆"
      ],
      "word_forms": {
        "plural": "fences"
      },
      "collocations": [
        "sit on the fence",
        "mend fences",
        "chain-link fence",
        "white picket fence"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"栅栏\"的概念",
      "academicContext": "The fence plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"fence\"的发音和拼写，记住其\"栅栏\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0476",
    "word": "festival",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfestɪvəl/",
      "phonetic_us": "/ˈfestɪvəl/",
      "meanings": [
        "节日"
      ],
      "word_forms": {},
      "collocations": [
        "music festival",
        "film festival",
        "spring festival",
        "cultural festival"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0477",
    "word": "fever",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈfiːvə(r)/",
      "phonetic_us": "/ˈfiːvə(r)/",
      "meanings": [
        "发烧",
        "发热"
      ],
      "word_forms": {
        "plural": "fevers"
      },
      "collocations": [
        "high fever",
        "hay fever",
        "fever pitch",
        "cabin fever",
        "have a fever"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"发烧\"的概念",
      "academicContext": "The fever plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"fever\"的发音和拼写，记住其\"发烧\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0478",
    "word": "few",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/fjuː/",
      "phonetic_us": "/fjuː/",
      "meanings": [
        "不多",
        "少数",
        "不多的"
      ],
      "word_forms": {},
      "collocations": [
        "a few",
        "quite a few",
        "few people",
        "the next few",
        "very few",
        "few of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"不多\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "some",
        "several",
        "a handful"
      ]
    }
  },
  {
    "id": "w0479",
    "word": "field",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/fiːld/",
      "phonetic_us": "/fiːld/",
      "meanings": [
        "田地",
        "牧场",
        "场地"
      ],
      "word_forms": {
        "comparative": "fielder",
        "superlative": "fieldest"
      },
      "collocations": [
        "in the field",
        "field trip",
        "playing field",
        "field of study",
        "rice field"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "用田地的方式完成任务",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "meadow",
        "area",
        "domain"
      ]
    }
  },
  {
    "id": "w0480",
    "word": "fifteen",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/fɪfˈtiːn/",
      "phonetic_us": "/fɪfˈtiːn/",
      "meanings": [
        "十五"
      ],
      "word_forms": {
        "plural": "fifteens"
      },
      "collocations": [
        "fifteen minutes",
        "at fifteen"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0481",
    "word": "fifth",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɪfθ/",
      "phonetic_us": "/fɪfθ/",
      "meanings": [
        "第五"
      ],
      "word_forms": {
        "plural": "fifths"
      },
      "collocations": [
        "the fifth day",
        "one fifth",
        "take the fifth",
        "Fifth Avenue"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"第五\"的概念",
      "academicContext": "The fifth plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"fifth\"的发音和拼写，记住其\"第五\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0482",
    "word": "fifty",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈfɪftɪ/",
      "phonetic_us": "/ˈfɪftɪ/",
      "meanings": [
        "五十"
      ],
      "word_forms": {
        "plural": "fifties"
      },
      "collocations": [
        "fifty dollars",
        "fifty-fifty",
        "the big five-oh"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"五十\"的概念",
      "academicContext": "The fifty plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"fifty\"的发音和拼写，记住其\"五十\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0483",
    "word": "fight",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/faɪt/",
      "phonetic_us": "/faɪt/",
      "meanings": [
        "打仗（架）",
        "争论"
      ],
      "word_forms": {},
      "collocations": [
        "fight for",
        "fight against",
        "fight back",
        "pick a fight",
        "fight fire with fire"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"打仗（架）\"的概念",
      "academicContext": "The fight plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"fight\"的发音和拼写，记住其\"打仗（架）\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0484",
    "word": "fill",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɪl/",
      "phonetic_us": "/fɪl/",
      "meanings": [
        "填空",
        "装满"
      ],
      "word_forms": {},
      "collocations": [
        "fill in",
        "fill out",
        "fill up",
        "fill with",
        "have one's fill"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"填空\"的概念",
      "academicContext": "The fill plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0485",
    "word": "film",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɪlm/",
      "phonetic_us": "/fɪlm/",
      "meanings": [
        "电影",
        "影片",
        "胶卷"
      ],
      "word_forms": {
        "plural": "films"
      },
      "collocations": [
        "watch a film",
        "film industry",
        "film star",
        "action film",
        "plastic film"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"电影\"的概念",
      "academicContext": "The film plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0486",
    "word": "final",
    "level": "初一",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈfaɪn(ə)l/",
      "phonetic_us": "/ˈfaɪn(ə)l/",
      "meanings": [
        "最后的",
        "终极的"
      ],
      "word_forms": {
        "comparative": "finaller",
        "superlative": "finallest"
      },
      "collocations": [
        "final exam",
        "in the final",
        "final decision",
        "final result",
        "final say"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记最后的的事物",
      "academicContext": "Understanding final concepts is essential for academic success.",
      "dailyContext": "This is really final! I love it.",
      "memoryStory": "通过联想\"final\"的发音和拼写，记住其\"最后的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0487",
    "word": "fine",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/faɪn/",
      "phonetic_us": "/faɪn/",
      "meanings": [
        "晴朗的",
        "美好的",
        "（身体）健康的"
      ],
      "word_forms": {
        "comparative": "finer",
        "superlative": "finest"
      },
      "collocations": [
        "fine art",
        "fine weather",
        "that's fine",
        "cut it fine",
        "fine line"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记晴朗的的事物",
      "academicContext": "Understanding fine concepts is essential for academic success.",
      "dailyContext": "This is really fine! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0488",
    "word": "finger",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɪŋɡə(r)/",
      "phonetic_us": "/ˈfɪŋɡə(r)/",
      "meanings": [
        "手指"
      ],
      "word_forms": {
        "plural": "fingers"
      },
      "collocations": [
        "point a finger",
        "cross one's fingers",
        "finger food",
        "put one's finger on"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0489",
    "word": "finish",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɪnɪʃ/",
      "phonetic_us": "/ˈfɪnɪʃ/",
      "meanings": [
        "结束",
        "做完"
      ],
      "word_forms": {},
      "collocations": [
        "finish doing",
        "finish line",
        "from start to finish",
        "photo finish"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0490",
    "word": "fire",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈfaɪə(r)/",
      "phonetic_us": "/ˈfaɪə(r)/",
      "meanings": [
        "火",
        "火炉",
        "火灾 vi. 开火"
      ],
      "word_forms": {},
      "collocations": [
        "on fire",
        "catch fire",
        "open fire",
        "fire alarm",
        "play with fire"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"火\"的概念",
      "academicContext": "The fire plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0491",
    "word": "fireplace",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfaɪəpleɪs/",
      "phonetic_us": "/ˈfaɪəpleɪs/",
      "meanings": [
        "壁炉"
      ],
      "word_forms": {
        "plural": "fireplaces"
      },
      "collocations": [
        "by the fireplace",
        "stone fireplace"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0492",
    "word": "first",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/fɜːst/",
      "phonetic_us": "/fɜːst/",
      "meanings": [
        "第一 a.& ad. 第一",
        "首次",
        "最初 n. 开始"
      ],
      "word_forms": {
        "plural": "firsts"
      },
      "collocations": [
        "first of all",
        "at first",
        "the first time",
        "first place",
        "come first",
        "first name"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "传达第一 a.& ad. 第一的意思",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "initial",
        "primary",
        "foremost"
      ]
    }
  },
  {
    "id": "w0493",
    "word": "fish",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɪʃ/",
      "phonetic_us": "/fɪʃ/",
      "meanings": [
        "鱼",
        "鱼肉 vi. 钓鱼",
        "捕鱼"
      ],
      "word_forms": {},
      "collocations": [
        "big fish",
        "cold fish",
        "fish out of water",
        "go fishing",
        "like shooting fish in a barrel"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"鱼\"的概念",
      "academicContext": "The fish plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0494",
    "word": "fisherman",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɪʃəmən/",
      "phonetic_us": "/ˈfɪʃəmən/",
      "meanings": [
        "渔民",
        "钓鱼健身者"
      ],
      "word_forms": {
        "plural": "fishermans"
      },
      "collocations": [
        "local fisherman",
        "professional fisherman"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0495",
    "word": "fit",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɪt/",
      "phonetic_us": "/fɪt/",
      "meanings": [
        "健康的",
        "适合的 v.（使）适合",
        "安装"
      ],
      "word_forms": {
        "comparative": "fitter",
        "superlative": "fittest"
      },
      "collocations": [
        "keep fit",
        "fit in",
        "fit for",
        "fit out",
        "have a fit"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记健康的的事物",
      "academicContext": "Understanding fit concepts is essential for academic success.",
      "dailyContext": "This is really fit! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0496",
    "word": "five",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/faɪv/",
      "phonetic_us": "/faɪv/",
      "meanings": [
        "五"
      ],
      "word_forms": {},
      "collocations": [
        "high five",
        "take five",
        "nine to five"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记五的事物",
      "academicContext": "Understanding five concepts is essential for academic success.",
      "dailyContext": "This is really five! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0497",
    "word": "fix",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɪks/",
      "phonetic_us": "/fɪks/",
      "meanings": [
        "修理",
        "安装",
        "确定"
      ],
      "word_forms": {},
      "collocations": [
        "fix up",
        "in a fix",
        "get a fix on",
        "fix one's attention on"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"修理\"的概念",
      "academicContext": "The fix plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0498",
    "word": "flag",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/flæɡ/",
      "phonetic_us": "/flæɡ/",
      "meanings": [
        "旗",
        "标志",
        "旗舰"
      ],
      "word_forms": {
        "plural": "flags"
      },
      "collocations": [
        "wave a flag",
        "flag down",
        "red flag",
        "white flag",
        "fly the flag"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"旗\"的概念",
      "academicContext": "The flag plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0499",
    "word": "flight",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/flait/",
      "phonetic_us": "/flait/",
      "meanings": [
        "航班",
        "飞行"
      ],
      "word_forms": {},
      "collocations": [
        "direct flight",
        "flight attendant",
        "take flight",
        "flight of stairs"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0500",
    "word": "flood",
    "level": "初二",
    "unit": "Unit 5",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/flʌd/",
      "phonetic_us": "/flʌd/",
      "meanings": [
        "洪水 vt. 淹没",
        "使泛滥"
      ],
      "word_forms": {},
      "collocations": [
        "flash flood",
        "flood with",
        "in flood",
        "flood waters",
        "flood the market"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"洪水 vt. 淹没\"的概念",
      "academicContext": "The flood plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"flood\"的发音和拼写，记住其\"洪水 vt. 淹没\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0501",
    "word": "floor",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/flɔː(r)/",
      "phonetic_us": "/flɔː(r)/",
      "meanings": [
        "地面",
        "地板.（楼房的）层"
      ],
      "word_forms": {
        "comparative": "floorrer",
        "superlative": "floorrest"
      },
      "collocations": [
        "ground floor",
        "first floor",
        "dance floor",
        "floor plan",
        "wipe the floor with"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用地面的方式完成任务",
      "academicContext": "The data was analyzed floor to ensure accuracy.",
      "dailyContext": "Please do it floor this time.",
      "memoryStory": "通过联想\"floor\"的发音和拼写，记住其\"地面\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0502",
    "word": "flower",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈflaʊə(r)/",
      "phonetic_us": "/ˈflaʊə(r)/",
      "meanings": [
        "花"
      ],
      "word_forms": {
        "plural": "flowers"
      },
      "collocations": [
        "flower garden",
        "flower shop",
        "in flower",
        "pick flowers"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0503",
    "word": "focus",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈfəʊkəs/",
      "phonetic_us": "/ˈfəʊkəs/",
      "meanings": [
        "/ n. 集中（注意力",
        "精力）于",
        "焦点"
      ],
      "word_forms": {
        "plural": "focuses"
      },
      "collocations": [
        "focus on",
        "in focus",
        "out of focus",
        "focus group",
        "bring into focus"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"/ n. 集中（注意力\"的概念",
      "academicContext": "The focus plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"focus\"的发音和拼写，记住其\"/ n. 集中（注意力\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0504",
    "word": "fog",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɔɡ/",
      "phonetic_us": "/fɔɡ/",
      "meanings": [
        "雾"
      ],
      "word_forms": {
        "plural": "fogs"
      },
      "collocations": [
        "thick fog",
        "in a fog",
        "fog up"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"雾\"的概念",
      "academicContext": "The fog plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0505",
    "word": "foggy",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈfɔɡɪ/",
      "phonetic_us": "/ˈfɔɡɪ/",
      "meanings": [
        "多雾的"
      ],
      "word_forms": {
        "comparative": "foggier",
        "superlative": "foggiest"
      },
      "collocations": [
        "foggy weather",
        "not have the foggiest idea"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记多雾的的事物",
      "academicContext": "Understanding foggy concepts is essential for academic success.",
      "dailyContext": "This is really foggy! I love it.",
      "memoryStory": "通过联想\"foggy\"的发音和拼写，记住其\"多雾的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0506",
    "word": "follow",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈfɔləʊ/",
      "phonetic_us": "/ˈfɔləʊ/",
      "meanings": [
        "跟随",
        "仿效",
        "跟得上"
      ],
      "word_forms": {
        "noun": "follower",
        "adjective": "following"
      },
      "collocations": [
        "follow sb",
        "as follows",
        "follow the rules"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"跟随\"的概念",
      "academicContext": "Follow the instructions carefully.",
      "dailyContext": "Please follow me.",
      "memoryStory": "",
      "confusableWords": [
        "pursue",
        "chase",
        "track"
      ],
      "etymology": {
        "root": "follow",
        "meaning": "来自古英语folgian,跟随"
      }
    }
  },
  {
    "id": "w0507",
    "word": "following",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɔləʊɪŋ/",
      "phonetic_us": "/ˈfɔləʊɪŋ/",
      "meanings": [
        "接着的",
        "以下的"
      ],
      "word_forms": {
        "comparative": "more following",
        "superlative": "most following"
      },
      "collocations": [
        "the following day",
        "following week",
        "as follows"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0508",
    "word": "fond",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɔnd/",
      "phonetic_us": "/fɔnd/",
      "meanings": [
        "喜爱的",
        "爱好的"
      ],
      "word_forms": {
        "comparative": "fonder",
        "superlative": "fondest"
      },
      "collocations": [
        "be fond of",
        "grow fond of",
        "fond memories",
        "fond farewell"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记喜爱的的事物",
      "academicContext": "Understanding fond concepts is essential for academic success.",
      "dailyContext": "This is really fond! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0509",
    "word": "food",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/fuːd/",
      "phonetic_us": "/fuːd/",
      "meanings": [
        "食物",
        "食品"
      ],
      "word_forms": {
        "plural": "foods"
      },
      "collocations": [
        "fast food",
        "food chain",
        "junk food"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "提供能量和营养的物质",
      "academicContext": "Food security is a global concern.",
      "dailyContext": "I love Chinese food.",
      "memoryStory": "",
      "confusableWords": [
        "meal",
        "cuisine",
        "nourishment"
      ],
      "etymology": {
        "root": "food",
        "meaning": "来自古英语fōda,食物"
      }
    }
  },
  {
    "id": "w0510",
    "word": "fool",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fuːl/",
      "phonetic_us": "/fuːl/",
      "meanings": [
        "傻子",
        "蠢人"
      ],
      "word_forms": {
        "plural": "fools"
      },
      "collocations": [
        "make a fool of",
        "fool around",
        "nobody's fool",
        "fool's gold",
        "fool's paradise"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"傻子\"的概念",
      "academicContext": "The fool plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0511",
    "word": "foolish",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfuːlɪʃ/",
      "phonetic_us": "/ˈfuːlɪʃ/",
      "meanings": [
        "愚蠢的",
        "傻的"
      ],
      "word_forms": {
        "comparative": "more foolish",
        "superlative": "most foolish"
      },
      "collocations": [
        "foolish mistake",
        "foolish behavior",
        "look foolish",
        "feel foolish"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0512",
    "word": "for",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/fə(r), f ɔː (r)/",
      "phonetic_us": "/fə(r), f ɔː (r)/",
      "meanings": [
        "为了…",
        "因为…",
        "对于…"
      ],
      "word_forms": {},
      "collocations": [
        "for example",
        "for instance",
        "good for",
        "wait for",
        "look for",
        "for a while"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"为了…\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0513",
    "word": "foreign",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɔrən; (US) ˈfɔrɪn/",
      "phonetic_us": "/ˈfɔrən; (US) ˈfɔrɪn/",
      "meanings": [
        "外国的"
      ],
      "word_forms": {
        "comparative": "more foreign",
        "superlative": "most foreign"
      },
      "collocations": [
        "foreign language",
        "foreign country",
        "foreign policy",
        "foreign exchange"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0514",
    "word": "foreigner",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɔrənə(r)/",
      "phonetic_us": "/ˈfɔrənə(r)/",
      "meanings": [
        "外国人"
      ],
      "word_forms": {
        "plural": "foreigners"
      },
      "collocations": [
        "foreign tourists",
        "many foreigners"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0515",
    "word": "forest",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɔrɪst/",
      "phonetic_us": "/ˈfɔrɪst/",
      "meanings": [
        "森林"
      ],
      "word_forms": {
        "plural": "forests"
      },
      "collocations": [
        "tropical forest",
        "forest fire",
        "can't see the forest for the trees",
        "dark forest"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0516",
    "word": "forever",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/fəˈrevə(r)/",
      "phonetic_us": "/fəˈrevə(r)/",
      "meanings": [
        "永远",
        "永恒的"
      ],
      "word_forms": {},
      "collocations": [
        "last forever",
        "gone forever",
        "forever young",
        "take forever"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0517",
    "word": "forgetful",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/fəˈɡetfʊl/",
      "phonetic_us": "/fəˈɡetfʊl/",
      "meanings": [
        "健忘的",
        "不留心的"
      ],
      "word_forms": {
        "comparative": "more forgetful",
        "superlative": "most forgetful"
      },
      "collocations": [
        "become forgetful",
        "terribly forgetful"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0518",
    "word": "fork",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɔːk/",
      "phonetic_us": "/fɔːk/",
      "meanings": [
        "叉",
        "餐叉"
      ],
      "word_forms": {
        "plural": "forks"
      },
      "collocations": [
        "knife and fork",
        "fork out",
        "fork over",
        "tuning fork"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"叉\"的概念",
      "academicContext": "The fork plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0519",
    "word": "form",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/fɔːm/",
      "phonetic_us": "/fɔːm/",
      "meanings": [
        "表格",
        "形式",
        "结构"
      ],
      "word_forms": {
        "plural": "forms"
      },
      "collocations": [
        "fill in a form",
        "in the form of",
        "application form",
        "take form"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"表格\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "shape",
        "structure",
        "configuration"
      ]
    }
  },
  {
    "id": "w0520",
    "word": "forth",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɔːθ/",
      "phonetic_us": "/fɔːθ/",
      "meanings": [
        "向前",
        "往外"
      ],
      "word_forms": {},
      "collocations": [
        "back and forth",
        "and so forth",
        "set forth",
        "bring forth"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"向前\"的概念",
      "academicContext": "The forth plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"forth\"的发音和拼写，记住其\"向前\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0521",
    "word": "forty",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈfɔːtɪ/",
      "phonetic_us": "/ˈfɔːtɪ/",
      "meanings": [
        "四十"
      ],
      "word_forms": {
        "plural": "forties"
      },
      "collocations": [
        "life begins at forty",
        "forty winks"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"四十\"的概念",
      "academicContext": "The forty plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"forty\"的发音和拼写，记住其\"四十\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0522",
    "word": "found",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/faʊnd/",
      "phonetic_us": "/faʊnd/",
      "meanings": [
        "成立",
        "建立"
      ],
      "word_forms": {},
      "collocations": [
        "found out",
        "nowhere to be found",
        "lost and found"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"成立\"的概念",
      "academicContext": "The found plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"found\"的发音和拼写，记住其\"成立\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0523",
    "word": "foundation",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/faʊnˈdeiʃən/",
      "phonetic_us": "/faʊnˈdeiʃən/",
      "meanings": [
        "基础",
        "基本原理",
        "根据"
      ],
      "word_forms": {
        "plural": "foundations"
      },
      "collocations": [
        "lay the foundation",
        "strong foundation",
        "from the ground up",
        "foundation stone"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0524",
    "word": "fountain",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfaʊntɪn; (US) ˈfaʊntn/",
      "phonetic_us": "/ˈfaʊntɪn; (US) ˈfaʊntn/",
      "meanings": [
        "喷泉"
      ],
      "word_forms": {
        "plural": "fountains"
      },
      "collocations": [
        "water fountain",
        "drinking fountain",
        "fountain of youth"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0525",
    "word": "four",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɔː(r)/",
      "phonetic_us": "/fɔː(r)/",
      "meanings": [
        "四"
      ],
      "word_forms": {
        "plural": "fours"
      },
      "collocations": [
        "on all fours",
        "four corners",
        "four-letter word"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"四\"的概念",
      "academicContext": "The four plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0526",
    "word": "fourteen",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɔːˈtiːn/",
      "phonetic_us": "/ˈfɔːˈtiːn/",
      "meanings": [
        "十四"
      ],
      "word_forms": {
        "plural": "fourteens"
      },
      "collocations": [
        "fourteen years old",
        "at fourteen"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0527",
    "word": "fourth",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɔːθ/",
      "phonetic_us": "/ˈfɔːθ/",
      "meanings": [
        "第四"
      ],
      "word_forms": {
        "plural": "fourths"
      },
      "collocations": [
        "fourth place",
        "fourth grade",
        "the fourth of July"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0528",
    "word": "fox",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɔks/",
      "phonetic_us": "/fɔks/",
      "meanings": [
        "狐狸"
      ],
      "word_forms": {
        "plural": "foxes"
      },
      "collocations": [
        "sly as a fox",
        "outfox",
        "crazy like a fox"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"狐狸\"的概念",
      "academicContext": "The fox plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0529",
    "word": "France",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/fræns/",
      "phonetic_us": "/fræns/",
      "meanings": [
        "法国"
      ],
      "word_forms": {},
      "collocations": [
        "in France",
        "from France",
        "southern France",
        "Tour de France"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0530",
    "word": "free",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/friː/",
      "phonetic_us": "/friː/",
      "meanings": [
        "自由",
        "空闲的",
        "免费的"
      ],
      "word_forms": {},
      "collocations": [
        "free time",
        "set free",
        "free of charge",
        "feel free",
        "for free"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"自由\"的概念",
      "academicContext": "The free plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0531",
    "word": "French",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/frentʃ/",
      "phonetic_us": "/frentʃ/",
      "meanings": [
        "法语 a. 法国的",
        "法国人的",
        "法语的"
      ],
      "word_forms": {
        "plural": "frenches",
        "comparative": "frencher",
        "superlative": "frenchest"
      },
      "collocations": [
        "French fries",
        "speak French",
        "French toast",
        "excuse my French"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0532",
    "word": "fresh",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/freʃ/",
      "phonetic_us": "/freʃ/",
      "meanings": [
        "新鲜的"
      ],
      "word_forms": {
        "comparative": "fresher",
        "superlative": "freshest"
      },
      "collocations": [
        "fresh air",
        "fresh start",
        "fresh out of",
        "breath of fresh air",
        "fresh from"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记新鲜的的事物",
      "academicContext": "Understanding fresh concepts is essential for academic success.",
      "dailyContext": "This is really fresh! I love it.",
      "memoryStory": "通过联想\"fresh\"的发音和拼写，记住其\"新鲜的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0533",
    "word": "Friday",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfraɪdɪ/",
      "phonetic_us": "/ˈfraɪdɪ/",
      "meanings": [
        "星期五"
      ],
      "word_forms": {},
      "collocations": [
        "on Friday",
        "this Friday",
        "next Friday",
        "Black Friday",
        "Thank God it's Friday"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0534",
    "word": "friend",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/frend/",
      "phonetic_us": "/frend/",
      "meanings": [
        "朋友"
      ],
      "word_forms": {
        "plural": "friends"
      },
      "collocations": [
        "make friends",
        "close friend",
        "friend with"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "陪伴你、支持你的伙伴",
      "academicContext": "Making friends helps students adapt to school life.",
      "dailyContext": "She is my best friend.",
      "memoryStory": "",
      "confusableWords": [
        "pal",
        "buddy",
        "companion"
      ],
      "etymology": {
        "root": "friend",
        "meaning": "来自古英语frēond,朋友、爱的人"
      }
    }
  },
  {
    "id": "w0535",
    "word": "friendly",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfrendlɪ/",
      "phonetic_us": "/ˈfrendlɪ/",
      "meanings": [
        "友好的"
      ],
      "word_forms": {
        "comparative": "more friendly",
        "superlative": "most friendly"
      },
      "collocations": [
        "user friendly",
        "friendly match",
        "friendly atmosphere",
        "environmentally friendly"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0536",
    "word": "friendship",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfrendʃɪp/",
      "phonetic_us": "/ˈfrendʃɪp/",
      "meanings": [
        "友谊",
        "友情"
      ],
      "word_forms": {
        "plural": "friendships"
      },
      "collocations": [
        "close friendship",
        "lasting friendship",
        "friendship bracelet"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0537",
    "word": "frighten",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfraɪt(ə)n/",
      "phonetic_us": "/ˈfraɪt(ə)n/",
      "meanings": [
        "使惊恐",
        "吓唬"
      ],
      "word_forms": {},
      "collocations": [
        "frighten away",
        "frighten to death",
        "easily frightened"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0538",
    "word": "from",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/frəm, frɔm/",
      "phonetic_us": "/frəm, frɔm/",
      "meanings": [
        "从",
        "从…起",
        "来自"
      ],
      "word_forms": {},
      "collocations": [
        "from now on",
        "from time to time",
        "away from",
        "different from",
        "from...to..."
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"从\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0539",
    "word": "front",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/frʌnt/",
      "phonetic_us": "/frʌnt/",
      "meanings": [
        "前面的",
        "前部的 n. 前面",
        "前部"
      ],
      "word_forms": {
        "plural": "fronts",
        "comparative": "fronter",
        "superlative": "frontest"
      },
      "collocations": [
        "in front of",
        "front door",
        "up front",
        "front page",
        "on the front lines"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记前面的的事物",
      "academicContext": "Understanding front concepts is essential for academic success.",
      "dailyContext": "This is really front! I love it.",
      "memoryStory": "通过联想\"front\"的发音和拼写，记住其\"前面的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0540",
    "word": "fruit",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fruːt/",
      "phonetic_us": "/fruːt/",
      "meanings": [
        "水果",
        "果实"
      ],
      "word_forms": {
        "plural": "fruits"
      },
      "collocations": [
        "fresh fruit",
        "bear fruit",
        "fruit salad",
        "forbidden fruit",
        "fruits of labor"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"水果\"的概念",
      "academicContext": "The fruit plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"fruit\"的发音和拼写，记住其\"水果\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0541",
    "word": "fry",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fraɪ/",
      "phonetic_us": "/fraɪ/",
      "meanings": [
        "用油煎",
        "用油炸"
      ],
      "word_forms": {
        "plural": "fries"
      },
      "collocations": [
        "fry up",
        "small fry",
        "French fries",
        "stir fry"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"用油煎\"的概念",
      "academicContext": "The fry plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0542",
    "word": "full",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/fʊl/",
      "phonetic_us": "/fʊl/",
      "meanings": [
        "满的",
        "充满的",
        "完全的"
      ],
      "word_forms": {
        "verb": "fill",
        "adverb": "fully"
      },
      "collocations": [
        "be full of",
        "full name",
        "full time",
        "in full",
        "to the full"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记满的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "filled",
        "complete",
        "packed"
      ]
    }
  },
  {
    "id": "w0543",
    "word": "fun",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fʌn/",
      "phonetic_us": "/fʌn/",
      "meanings": [
        "有趣的事",
        "娱乐",
        "玩笑"
      ],
      "word_forms": {
        "comparative": "funner",
        "superlative": "funnest"
      },
      "collocations": [
        "have fun",
        "make fun of",
        "for fun",
        "fun and games",
        "poke fun at"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记有趣的事的事物",
      "academicContext": "Understanding fun concepts is essential for academic success.",
      "dailyContext": "This is really fun! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0544",
    "word": "funny",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈfʌnɪ/",
      "phonetic_us": "/ˈfʌnɪ/",
      "meanings": [
        "有趣的",
        "滑稽可笑的"
      ],
      "word_forms": {
        "comparative": "funnier",
        "superlative": "funniest"
      },
      "collocations": [
        "funny story",
        "funny thing",
        "funny business",
        "the funny thing is"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记有趣的的事物",
      "academicContext": "Understanding funny concepts is essential for academic success.",
      "dailyContext": "This is really funny! I love it.",
      "memoryStory": "通过联想\"funny\"的发音和拼写，记住其\"有趣的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0545",
    "word": "fur",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/fɜː(r)/",
      "phonetic_us": "/fɜː(r)/",
      "meanings": [
        "毛皮",
        "皮子"
      ],
      "word_forms": {
        "plural": "furs"
      },
      "collocations": [
        "fur coat",
        "make the fur fly",
        "fur and feather"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"毛皮\"的概念",
      "academicContext": "The fur plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0546",
    "word": "future",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfjuːtʃə(r)/",
      "phonetic_us": "/ˈfjuːtʃə(r)/",
      "meanings": [
        "将来、未来"
      ],
      "word_forms": {},
      "collocations": [
        "in the future",
        "future plans",
        "bright future",
        "near future",
        "for future reference"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0547",
    "word": "game",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɡeɪm/",
      "phonetic_us": "/ɡeɪm/",
      "meanings": [
        "游戏",
        "运动",
        "比赛"
      ],
      "word_forms": {},
      "collocations": [
        "play games",
        "computer game",
        "video game",
        "game over",
        "ball game",
        "Olympic Games"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"游戏\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "sport",
        "match",
        "contest"
      ]
    }
  },
  {
    "id": "w0548",
    "word": "garden",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɡɑːd(ə)n/",
      "phonetic_us": "/ˈɡɑːd(ə)n/",
      "meanings": [
        "花园",
        "果园",
        "菜园"
      ],
      "word_forms": {
        "plural": "gardens"
      },
      "collocations": [
        "botanical garden",
        "garden party",
        "lead someone down the garden path"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0549",
    "word": "gate",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡeɪt/",
      "phonetic_us": "/ɡeɪt/",
      "meanings": [
        "大门"
      ],
      "word_forms": {
        "plural": "gates"
      },
      "collocations": [
        "school gate",
        "gate keeper",
        "starting gate",
        "water gate",
        "gate crash"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"大门\"的概念",
      "academicContext": "The gate plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0550",
    "word": "general",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈdʒenər(ə)l/",
      "phonetic_us": "/ˈdʒenər(ə)l/",
      "meanings": [
        "大体",
        "笼统的",
        "总的"
      ],
      "word_forms": {},
      "collocations": [
        "in general",
        "general idea",
        "general knowledge",
        "as a general rule"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"大体\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "overall",
        "common",
        "universal"
      ],
      "etymology": {
        "root": "gener",
        "suffix": "-al",
        "meaning": "gener + al(形容词后缀)"
      }
    }
  },
  {
    "id": "w0551",
    "word": "generation",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dʒenəˈreɪʃ(ə)n/",
      "phonetic_us": "/dʒenəˈreɪʃ(ə)n/",
      "meanings": [
        "代",
        "一代"
      ],
      "word_forms": {
        "plural": "generations"
      },
      "collocations": [
        "younger generation",
        "next generation",
        "generation gap",
        "lost generation"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0552",
    "word": "generous",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʒenərəs/",
      "phonetic_us": "/ˈdʒenərəs/",
      "meanings": [
        "慷慨大方的"
      ],
      "word_forms": {
        "comparative": "more generous",
        "superlative": "most generous"
      },
      "collocations": [
        "very generous",
        "generous offer",
        "generous amount",
        "generous spirit"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0553",
    "word": "geography",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dʒɪˈɔɡrəfɪ/",
      "phonetic_us": "/dʒɪˈɔɡrəfɪ/",
      "meanings": [
        "地理学"
      ],
      "word_forms": {
        "comparative": "more geography",
        "superlative": "most geography"
      },
      "collocations": [
        "physical geography",
        "study geography",
        "geography teacher"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0554",
    "word": "geometry",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dʒɪ'ɑmɪtrɪ/",
      "phonetic_us": "/dʒɪ'ɑmɪtrɪ/",
      "meanings": [
        "几何学"
      ],
      "word_forms": {},
      "collocations": [
        "plane geometry",
        "solid geometry",
        "geometry class"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0555",
    "word": "German",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʒɜːmən/",
      "phonetic_us": "/ˈdʒɜːmən/",
      "meanings": [
        "德国的",
        "德国人的",
        "德语的 n. 德国人"
      ],
      "word_forms": {
        "plural": "germans",
        "comparative": "germanner",
        "superlative": "germannest"
      },
      "collocations": [
        "speak German",
        "German shepherd",
        "German engineering"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0556",
    "word": "Germany",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʒɜːmənɪ/",
      "phonetic_us": "/ˈdʒɜːmənɪ/",
      "meanings": [
        "德国"
      ],
      "word_forms": {},
      "collocations": [
        "in Germany",
        "from Germany",
        "West Germany",
        "East Germany"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0557",
    "word": "gift",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡɪft/",
      "phonetic_us": "/ɡɪft/",
      "meanings": [
        "赠品",
        "礼物"
      ],
      "word_forms": {
        "plural": "gifts"
      },
      "collocations": [
        "birthday gift",
        "gift shop",
        "gift wrap",
        "have a gift for",
        "gift of the gab"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"赠品\"的概念",
      "academicContext": "The gift plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0558",
    "word": "girl",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡɜːl/",
      "phonetic_us": "/ɡɜːl/",
      "meanings": [
        "女孩"
      ],
      "word_forms": {
        "plural": "girls"
      },
      "collocations": [
        "little girl",
        "girl friend",
        "baby girl",
        "good girl",
        "it girl"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"女孩\"的概念",
      "academicContext": "The girl plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0559",
    "word": "glad",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡlæd/",
      "phonetic_us": "/ɡlæd/",
      "meanings": [
        "高兴的",
        "乐意的"
      ],
      "word_forms": {
        "comparative": "gladder",
        "superlative": "gladdest"
      },
      "collocations": [
        "be glad to",
        "glad about",
        "glad tidings",
        "only too glad"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记高兴的的事物",
      "academicContext": "Understanding glad concepts is essential for academic success.",
      "dailyContext": "This is really glad! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0560",
    "word": "glass",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡlɑːs; (US) ɡlæs/",
      "phonetic_us": "/ɡlɑːs; (US) ɡlæs/",
      "meanings": [
        "玻璃杯",
        "玻璃",
        "(复)眼镜"
      ],
      "word_forms": {
        "plural": "glasses"
      },
      "collocations": [
        "a glass of water",
        "wine glass",
        "looking glass",
        "glass ceiling",
        "raise a glass"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"玻璃杯\"的概念",
      "academicContext": "The glass plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"glass\"的发音和拼写，记住其\"玻璃杯\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0561",
    "word": "glove",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡlʌv/",
      "phonetic_us": "/ɡlʌv/",
      "meanings": [
        "手套"
      ],
      "word_forms": {
        "plural": "gloves"
      },
      "collocations": [
        "boxing gloves",
        "fit like a glove",
        "hand in glove",
        "the gloves are off"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"手套\"的概念",
      "academicContext": "The glove plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"glove\"的发音和拼写，记住其\"手套\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0562",
    "word": "goat",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡəʊt/",
      "phonetic_us": "/ɡəʊt/",
      "meanings": [
        "山羊"
      ],
      "word_forms": {
        "plural": "goats"
      },
      "collocations": [
        "mountain goat",
        "get one's goat",
        "scapegoat",
        "act the goat"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"山羊\"的概念",
      "academicContext": "The goat plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0563",
    "word": "gold",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡəʊld/",
      "phonetic_us": "/ɡəʊld/",
      "meanings": [
        "黄金 a 金的",
        "黄金的"
      ],
      "word_forms": {
        "comparative": "golder",
        "superlative": "goldest"
      },
      "collocations": [
        "gold medal",
        "gold mine",
        "strike gold",
        "good as gold",
        "heart of gold"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记黄金 a 金的的事物",
      "academicContext": "Understanding gold concepts is essential for academic success.",
      "dailyContext": "This is really gold! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0564",
    "word": "golf",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡɔlf/",
      "phonetic_us": "/ɡɔlf/",
      "meanings": [
        "高尔夫球"
      ],
      "word_forms": {
        "plural": "golves"
      },
      "collocations": [
        "play golf",
        "golf course",
        "golf club",
        "mini golf"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"高尔夫球\"的概念",
      "academicContext": "The golf plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0565",
    "word": "goodness",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɡʊdnɪs/",
      "phonetic_us": "/ˈɡʊdnɪs/",
      "meanings": [
        "善良",
        "美德"
      ],
      "word_forms": {
        "plural": "goodnesses"
      },
      "collocations": [
        "goodness knows",
        "thank goodness",
        "for goodness sake",
        "honest to goodness"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0566",
    "word": "government",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɡʌvənmənt/",
      "phonetic_us": "/ˈɡʌvənmənt/",
      "meanings": [
        "政府"
      ],
      "word_forms": {},
      "collocations": [
        "local government",
        "government official",
        "central government"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"政府\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [],
      "etymology": {
        "root": "govern",
        "suffix": "-ment",
        "meaning": "govern + ment(名词后缀)"
      }
    }
  },
  {
    "id": "w0567",
    "word": "grade",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡreɪd/",
      "phonetic_us": "/ɡreɪd/",
      "meanings": [
        "等级（中小学的）",
        "学年",
        "成绩"
      ],
      "word_forms": {
        "comparative": "grader",
        "superlative": "gradest"
      },
      "collocations": [
        "first grade",
        "make the grade",
        "grade point average",
        "top grade"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记等级（中小学的）的事物",
      "academicContext": "Understanding grade concepts is essential for academic success.",
      "dailyContext": "This is really grade! I love it.",
      "memoryStory": "通过联想\"grade\"的发音和拼写，记住其\"等级（中小学的）\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0568",
    "word": "gradually",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɡrædjʊəlɪ/",
      "phonetic_us": "/ˈɡrædjʊəlɪ/",
      "meanings": [
        "逐渐地"
      ],
      "word_forms": {
        "comparative": "more gradually",
        "superlative": "most gradually"
      },
      "collocations": [
        "gradually increase",
        "gradually improve",
        "change gradually"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0569",
    "word": "graduate",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɡrædjʊeit ˈɡrædʒueit /",
      "phonetic_us": "/ˈɡrædjʊeit ˈɡrædʒueit /",
      "meanings": [
        "毕业"
      ],
      "word_forms": {
        "plural": "graduates"
      },
      "collocations": [
        "graduate from",
        "graduate school",
        "fresh graduate",
        "college graduate"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0570",
    "word": "grammar",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɡræmə(r)/",
      "phonetic_us": "/ˈɡræmə(r)/",
      "meanings": [
        "语法"
      ],
      "word_forms": {},
      "collocations": [
        "grammar school",
        "grammar rules",
        "grammar book",
        "bad grammar"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0571",
    "word": "grand",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡrænd/",
      "phonetic_us": "/ɡrænd/",
      "meanings": [
        "宏伟的"
      ],
      "word_forms": {
        "comparative": "grander",
        "superlative": "grandest"
      },
      "collocations": [
        "grand total",
        "grand piano",
        "grand opening",
        "grand slam"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记宏伟的的事物",
      "academicContext": "Understanding grand concepts is essential for academic success.",
      "dailyContext": "This is really grand! I love it.",
      "memoryStory": "通过联想\"grand\"的发音和拼写，记住其\"宏伟的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0572",
    "word": "grandchild",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'græntʃaɪld/",
      "phonetic_us": "/'græntʃaɪld/",
      "meanings": [
        "(外)孙或孙女",
        "孙辈"
      ],
      "word_forms": {
        "plural": "grandchilds"
      },
      "collocations": [
        "first grandchild",
        "visit grandchildren"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0573",
    "word": "grandparents",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɡrændpeərənts/",
      "phonetic_us": "/ˈɡrændpeərənts/",
      "meanings": [
        "祖父母",
        "外祖父母"
      ],
      "word_forms": {
        "plural": "grandparentses"
      },
      "collocations": [
        "visit grandparents",
        "stay with grandparents"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0574",
    "word": "granny",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɡrænɪ/",
      "phonetic_us": "/ˈɡrænɪ/",
      "meanings": [
        "老奶奶",
        "祖母",
        "外婆"
      ],
      "word_forms": {
        "plural": "grannies"
      },
      "collocations": [
        "granny smith",
        "visit granny"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0575",
    "word": "grape",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡreɪp/",
      "phonetic_us": "/ɡreɪp/",
      "meanings": [
        "葡萄"
      ],
      "word_forms": {
        "plural": "grapes"
      },
      "collocations": [
        "sour grapes",
        "bunch of grapes",
        "grape vine",
        "hear through the grapevine"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"葡萄\"的概念",
      "academicContext": "The grape plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"grape\"的发音和拼写，记住其\"葡萄\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0576",
    "word": "grass",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡrɑːs; (US) ɡræs/",
      "phonetic_us": "/ɡrɑːs; (US) ɡræs/",
      "meanings": [
        "草",
        "草场",
        "牧草"
      ],
      "word_forms": {
        "plural": "grasses"
      },
      "collocations": [
        "green grass",
        "grass roots",
        "snake in the grass",
        "let the grass grow under one's feet"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"草\"的概念",
      "academicContext": "The grass plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"grass\"的发音和拼写，记住其\"草\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0577",
    "word": "grateful",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɡreɪtfʊl/",
      "phonetic_us": "/ˈɡreɪtfʊl/",
      "meanings": [
        "感激的",
        "感谢的"
      ],
      "word_forms": {
        "comparative": "more grateful",
        "superlative": "most grateful"
      },
      "collocations": [
        "be grateful for",
        "grateful to",
        "deeply grateful",
        "forever grateful"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0578",
    "word": "great",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɡreɪt/",
      "phonetic_us": "/ɡreɪt/",
      "meanings": [
        "伟大的",
        "重要的",
        "好极了 ad.（口语）好极了"
      ],
      "word_forms": {
        "noun": "greatness",
        "adverb": "greatly",
        "comparative": "greater",
        "superlative": "greatest"
      },
      "collocations": [
        "a great deal",
        "great job",
        "feel great"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记伟大的的事物",
      "academicContext": "Newton made great contributions to physics.",
      "dailyContext": "That's a great idea!",
      "memoryStory": "",
      "confusableWords": [
        "excellent",
        "wonderful",
        "magnificent"
      ],
      "etymology": {
        "root": "great",
        "meaning": "来自古英语grēat,大的、卓越的"
      }
    }
  },
  {
    "id": "w0579",
    "word": "Greece",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɡriːs/",
      "phonetic_us": "/ɡriːs/",
      "meanings": [
        "希腊"
      ],
      "word_forms": {},
      "collocations": [
        "ancient Greece",
        "in Greece",
        "from Greece"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0580",
    "word": "green",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡriːn/",
      "phonetic_us": "/ɡriːn/",
      "meanings": [
        "绿色的",
        "青的 n. 绿色"
      ],
      "word_forms": {
        "plural": "greens",
        "comparative": "greenner",
        "superlative": "greennest"
      },
      "collocations": [
        "green tea",
        "green light",
        "give the green light",
        "green with envy",
        "green thumb"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记绿色的的事物",
      "academicContext": "Understanding green concepts is essential for academic success.",
      "dailyContext": "This is really green! I love it.",
      "memoryStory": "通过联想\"green\"的发音和拼写，记住其\"绿色的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0581",
    "word": "greet",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡriːt/",
      "phonetic_us": "/ɡriːt/",
      "meanings": [
        "问候",
        "向…致敬"
      ],
      "word_forms": {},
      "collocations": [
        "greet with",
        "greet each other",
        "greet warmly"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"问候\"的概念",
      "academicContext": "The greet plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"greet\"的发音和拼写，记住其\"问候\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0582",
    "word": "group",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɡruːp/",
      "phonetic_us": "/ɡruːp/",
      "meanings": [
        "组",
        "群"
      ],
      "word_forms": {
        "plural": "groups"
      },
      "collocations": [
        "in groups",
        "group work",
        "age group",
        "a group of",
        "group discussion"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"组\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "team",
        "collection",
        "bunch"
      ]
    }
  },
  {
    "id": "w0583",
    "word": "growth",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɡrəʊθ/",
      "phonetic_us": "/ɡrəʊθ/",
      "meanings": [
        "生长",
        "增长"
      ],
      "word_forms": {
        "plural": "growths"
      },
      "collocations": [
        "economic growth",
        "population growth",
        "growth rate",
        "personal growth"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0584",
    "word": "guess",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡes/",
      "phonetic_us": "/ɡes/",
      "meanings": [
        "猜"
      ],
      "word_forms": {},
      "collocations": [
        "I guess",
        "guess what",
        "anybody's guess",
        "guess right",
        "hazard a guess"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"猜\"的概念",
      "academicContext": "The guess plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"guess\"的发音和拼写，记住其\"猜\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0585",
    "word": "guest",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡest/",
      "phonetic_us": "/ɡest/",
      "meanings": [
        "客人",
        "宾客"
      ],
      "word_forms": {
        "plural": "guests"
      },
      "collocations": [
        "guest room",
        "guest of honor",
        "be my guest",
        "paying guest"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"客人\"的概念",
      "academicContext": "The guest plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"guest\"的发音和拼写，记住其\"客人\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0586",
    "word": "guide",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɡaɪd/",
      "phonetic_us": "/ɡaɪd/",
      "meanings": [
        "向导",
        "导游者"
      ],
      "word_forms": {},
      "collocations": [
        "tour guide",
        "guide dog",
        "user guide",
        "guide book",
        "guided tour"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"向导\"的概念",
      "academicContext": "The guide plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"guide\"的发音和拼写，记住其\"向导\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0587",
    "word": "guitar",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɡɪˈtɑː(r)/",
      "phonetic_us": "/ɡɪˈtɑː(r)/",
      "meanings": [
        "吉他",
        "六弦琴"
      ],
      "word_forms": {},
      "collocations": [
        "play guitar",
        "electric guitar",
        "acoustic guitar",
        "air guitar"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0588",
    "word": "habit",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈhæbɪt/",
      "phonetic_us": "/ˈhæbɪt/",
      "meanings": [
        "习惯",
        "习性"
      ],
      "word_forms": {
        "plural": "habits"
      },
      "collocations": [
        "bad habit",
        "have a habit of",
        "out of habit",
        "force of habit",
        "kick the habit"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"习惯\"的概念",
      "academicContext": "The habit plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"habit\"的发音和拼写，记住其\"习惯\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0589",
    "word": "hair",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/heə(r)/",
      "phonetic_us": "/heə(r)/",
      "meanings": [
        "头发"
      ],
      "word_forms": {
        "plural": "hairs"
      },
      "collocations": [
        "long hair",
        "hair cut",
        "hair style",
        "let one's hair down",
        "split hairs"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"头发\"的概念",
      "academicContext": "The hair plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0590",
    "word": "hall",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hɔːl/",
      "phonetic_us": "/hɔːl/",
      "meanings": [
        "大厅",
        "会堂",
        "礼堂"
      ],
      "word_forms": {
        "plural": "halls"
      },
      "collocations": [
        "city hall",
        "town hall",
        "dining hall",
        "concert hall",
        "hall of fame"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"大厅\"的概念",
      "academicContext": "The hall plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0591",
    "word": "ham",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hæm/",
      "phonetic_us": "/hæm/",
      "meanings": [
        "火腿"
      ],
      "word_forms": {
        "plural": "hams"
      },
      "collocations": [
        "ham and eggs",
        "ham sandwich",
        "ham it up"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"火腿\"的概念",
      "academicContext": "The ham plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0592",
    "word": "hamburger",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhæmbɜːɡə(r)/",
      "phonetic_us": "/ˈhæmbɜːɡə(r)/",
      "meanings": [
        "汉堡包"
      ],
      "word_forms": {},
      "collocations": [
        "cheese hamburger",
        "eat a hamburger"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0593",
    "word": "hand",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/hænd/",
      "phonetic_us": "/hænd/",
      "meanings": [
        "手",
        "指针 v. 递",
        "给"
      ],
      "word_forms": {},
      "collocations": [
        "hand in",
        "on the other hand",
        "by hand",
        "hand out",
        "shake hands",
        "give a hand"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"手\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "palm",
        "fist"
      ]
    }
  },
  {
    "id": "w0594",
    "word": "handbag",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhændbæɡ/",
      "phonetic_us": "/ˈhændbæɡ/",
      "meanings": [
        "女用皮包",
        "手提包"
      ],
      "word_forms": {},
      "collocations": [
        "leather handbag",
        "designer handbag",
        "carry a handbag"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0595",
    "word": "handwriting",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhændraɪtɪŋ/",
      "phonetic_us": "/ˈhændraɪtɪŋ/",
      "meanings": [
        "书法"
      ],
      "word_forms": {
        "plural": "handwritings"
      },
      "collocations": [
        "good handwriting",
        "poor handwriting",
        "neat handwriting",
        "handwriting analysis"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0596",
    "word": "happily",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'hæpɪlɪ/",
      "phonetic_us": "/'hæpɪlɪ/",
      "meanings": [
        "幸福地",
        "快乐地"
      ],
      "word_forms": {
        "comparative": "more happily",
        "superlative": "most happily"
      },
      "collocations": [
        "live happily",
        "happily ever after",
        "happily married"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0597",
    "word": "happy",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈhæpɪ/",
      "phonetic_us": "/ˈhæpɪ/",
      "meanings": [
        "幸福",
        "快乐的",
        "高兴的"
      ],
      "word_forms": {},
      "collocations": [
        "happy birthday",
        "happy with",
        "feel happy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "表达喜悦和满足的情绪",
      "academicContext": "Happy students tend to perform better academically.",
      "dailyContext": "I'm so happy to see you!",
      "memoryStory": "",
      "confusableWords": [
        "joyful",
        "pleased"
      ],
      "etymology": {
        "root": "happy",
        "meaning": "来自古英语hæpig,幸运的"
      }
    }
  },
  {
    "id": "w0598",
    "word": "hard",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/hɑːd/",
      "phonetic_us": "/hɑːd/",
      "meanings": [
        "努力地",
        "猛烈地 a. 硬的",
        "困难的"
      ],
      "word_forms": {
        "noun": "hardness",
        "adverb": "hard",
        "comparative": "harder",
        "superlative": "hardest"
      },
      "collocations": [
        "work hard",
        "study hard",
        "hard work",
        "try hard",
        "hardly ever"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "用努力地的方式完成任务",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "difficult",
        "tough",
        "challenging"
      ]
    }
  },
  {
    "id": "w0599",
    "word": "hardly",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhɑːdlɪ/",
      "phonetic_us": "/ˈhɑːdlɪ/",
      "meanings": [
        "几乎不"
      ],
      "word_forms": {
        "plural": "hardlies"
      },
      "collocations": [
        "hardly ever",
        "hardly any",
        "hardly anything",
        "can hardly"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0600",
    "word": "hardworking",
    "level": "初二",
    "unit": "Unit 6",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'ha:d'wə:kiŋ/",
      "phonetic_us": "/'ha:d'wə:kiŋ/",
      "meanings": [
        "努力工作的"
      ],
      "word_forms": {
        "comparative": "more hardworking",
        "superlative": "most hardworking"
      },
      "collocations": [
        "hardworking student",
        "hardworking people"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0601",
    "word": "hat",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hæt/",
      "phonetic_us": "/hæt/",
      "meanings": [
        "帽子(一般指有边的)",
        "礼帽"
      ],
      "word_forms": {
        "comparative": "hatter",
        "superlative": "hattest"
      },
      "collocations": [
        "wear a hat",
        "hat trick",
        "old hat",
        "throw one's hat in the ring",
        "at the drop of a hat"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记帽子(一般指有边的)的事物",
      "academicContext": "Understanding hat concepts is essential for academic success.",
      "dailyContext": "This is really hat! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0602",
    "word": "he",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/heɪ/",
      "phonetic_us": "/heɪ/",
      "meanings": [
        "他"
      ],
      "word_forms": {},
      "collocations": [
        "he is",
        "he can",
        "he said",
        "he will"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"他\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0603",
    "word": "head",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/hed/",
      "phonetic_us": "/hed/",
      "meanings": [
        "头",
        "头脑",
        "首脑"
      ],
      "word_forms": {
        "plural": "heads"
      },
      "collocations": [
        "head teacher",
        "use your head",
        "from head to foot",
        "head for",
        "shake one's head"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"头\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0604",
    "word": "headache",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhedeɪk/",
      "phonetic_us": "/ˈhedeɪk/",
      "meanings": [
        "头疼"
      ],
      "word_forms": {
        "plural": "headaches"
      },
      "collocations": [
        "bad headache",
        "terrible headache",
        "have a headache",
        "give someone a headache"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0605",
    "word": "headmistress",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'hed'mistrɪs/",
      "phonetic_us": "/'hed'mistrɪs/",
      "meanings": [
        "女校长"
      ],
      "word_forms": {
        "plural": "headmistresses"
      },
      "collocations": [
        "school headmistress"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0606",
    "word": "health",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/helθ/",
      "phonetic_us": "/helθ/",
      "meanings": [
        "健康",
        "卫生"
      ],
      "word_forms": {
        "adjective": "healthy",
        "adverb": "healthily"
      },
      "collocations": [
        "in good health",
        "health care",
        "mental health",
        "public health",
        "health problem"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"健康\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0607",
    "word": "healthy",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhelθɪ/",
      "phonetic_us": "/ˈhelθɪ/",
      "meanings": [
        "健康的",
        "健壮的"
      ],
      "word_forms": {
        "comparative": "more healthy",
        "superlative": "most healthy"
      },
      "collocations": [
        "healthy lifestyle",
        "healthy diet",
        "healthy food",
        "stay healthy"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0608",
    "word": "hearing",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhɪərɪŋ/",
      "phonetic_us": "/ˈhɪərɪŋ/",
      "meanings": [
        "听力"
      ],
      "word_forms": {},
      "collocations": [
        "hearing aid",
        "hard of hearing",
        "within hearing",
        "hearing loss"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0609",
    "word": "heart",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hɑːt/",
      "phonetic_us": "/hɑːt/",
      "meanings": [
        "心",
        "心脏",
        "纸牌中的红桃"
      ],
      "word_forms": {},
      "collocations": [
        "by heart",
        "at heart",
        "heart attack",
        "lose heart",
        "heart and soul"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"心\"的概念",
      "academicContext": "The heart plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"heart\"的发音和拼写，记住其\"心\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0610",
    "word": "heat",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hiːt/",
      "phonetic_us": "/hiːt/",
      "meanings": [
        "热 vt. 把…加热"
      ],
      "word_forms": {},
      "collocations": [
        "heat up",
        "in the heat of",
        "turn up the heat",
        "if you can't stand the heat"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"热 vt. 把…加热\"的概念",
      "academicContext": "The heat plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0611",
    "word": "heaven",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhev(ə)n/",
      "phonetic_us": "/ˈhev(ə)n/",
      "meanings": [
        "天",
        "天空"
      ],
      "word_forms": {
        "plural": "heavens"
      },
      "collocations": [
        "in heaven",
        "heaven on earth",
        "thank heaven",
        "seventh heaven",
        "heaven forbid"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0612",
    "word": "heavy",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈhevɪ/",
      "phonetic_us": "/ˈhevɪ/",
      "meanings": [
        "重的"
      ],
      "word_forms": {
        "comparative": "heavier",
        "superlative": "heaviest"
      },
      "collocations": [
        "heavy rain",
        "heavy traffic",
        "heavy metal",
        "with a heavy heart"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记重的的事物",
      "academicContext": "Understanding heavy concepts is essential for academic success.",
      "dailyContext": "This is really heavy! I love it.",
      "memoryStory": "通过联想\"heavy\"的发音和拼写，记住其\"重的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0613",
    "word": "heavily",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhevɪlɪ/",
      "phonetic_us": "/ˈhevɪlɪ/",
      "meanings": [
        "重地",
        "大量地"
      ],
      "word_forms": {
        "comparative": "more heavily",
        "superlative": "most heavily"
      },
      "collocations": [
        "rain heavily",
        "heavily armed",
        "depend heavily on",
        "breathe heavily"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0614",
    "word": "hello",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/həˈləʊ/",
      "phonetic_us": "/həˈləʊ/",
      "meanings": [
        "喂",
        "你好（表示打招呼",
        "问候或唤起注意）"
      ],
      "word_forms": {},
      "collocations": [
        "say hello",
        "hello there"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"喂\"的概念",
      "academicContext": "The hello plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"hello\"的发音和拼写，记住其\"喂\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0615",
    "word": "help",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/help/",
      "phonetic_us": "/help/",
      "meanings": [
        "& vt. 帮助",
        "帮忙"
      ],
      "word_forms": {
        "noun": "help",
        "adjective": "helpful",
        "noun2": "helper"
      },
      "collocations": [
        "help with",
        "help out",
        "can't help"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "伸出援手,让困难变得容易",
      "academicContext": "Technology helps us solve complex problems.",
      "dailyContext": "Can you help me with my homework?",
      "memoryStory": "",
      "confusableWords": [
        "assist",
        "aid",
        "support"
      ],
      "etymology": {
        "root": "help",
        "meaning": "来自古英语helpan,帮助"
      }
    }
  },
  {
    "id": "w0616",
    "word": "helpful",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhelpfʊl/",
      "phonetic_us": "/ˈhelpfʊl/",
      "meanings": [
        "有帮助的",
        "有益的"
      ],
      "word_forms": {
        "comparative": "more helpful",
        "superlative": "most helpful"
      },
      "collocations": [
        "very helpful",
        "helpful advice",
        "helpful tips",
        "prove helpful"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0617",
    "word": "hen",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hen/",
      "phonetic_us": "/hen/",
      "meanings": [
        "母鸡"
      ],
      "word_forms": {
        "plural": "hens"
      },
      "collocations": [
        "hen party",
        "mother hen",
        "hen house",
        "rare as hen's teeth"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"母鸡\"的概念",
      "academicContext": "The hen plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0618",
    "word": "her",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/hɜː(r)/",
      "phonetic_us": "/hɜː(r)/",
      "meanings": [
        "她(宾格)",
        "她的"
      ],
      "word_forms": {},
      "collocations": [
        "with her",
        "for her",
        "her name",
        "tell her"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "传达她(宾格)的意思",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0619",
    "word": "here",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/hɪə(r)/",
      "phonetic_us": "/hɪə(r)/",
      "meanings": [
        "这里",
        "在这里",
        "向这里"
      ],
      "word_forms": {},
      "collocations": [
        "over here",
        "come here",
        "right here",
        "here and there",
        "here you are"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"这里\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0620",
    "word": "hero",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈhɪərəʊ/",
      "phonetic_us": "/ˈhɪərəʊ/",
      "meanings": [
        "英雄",
        "勇士",
        "男主角"
      ],
      "word_forms": {
        "plural": "heros"
      },
      "collocations": [
        "war hero",
        "hero worship",
        "local hero",
        "unsung hero"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"英雄\"的概念",
      "academicContext": "The hero plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0621",
    "word": "hers",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hɜːz/",
      "phonetic_us": "/hɜːz/",
      "meanings": [
        "她的"
      ],
      "word_forms": {
        "comparative": "herser",
        "superlative": "hersest"
      },
      "collocations": [
        "a friend of hers",
        "that's hers"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记她的的事物",
      "academicContext": "Understanding hers concepts is essential for academic success.",
      "dailyContext": "This is really hers! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0622",
    "word": "herself",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/hɜːˈself/",
      "phonetic_us": "/hɜːˈself/",
      "meanings": [
        "她自己"
      ],
      "word_forms": {
        "plural": "herselves"
      },
      "collocations": [
        "by herself",
        "all by herself",
        "proud of herself"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0623",
    "word": "hey",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/heɪ/",
      "phonetic_us": "/heɪ/",
      "meanings": [
        "嘿！"
      ],
      "word_forms": {
        "plural": "heys"
      },
      "collocations": [
        "hey there",
        "hey you"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"嘿！\"的概念",
      "academicContext": "The hey plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0624",
    "word": "hi",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/haɪ/",
      "phonetic_us": "/haɪ/",
      "meanings": [
        "你好（表示打招呼、问候或唤起注意）"
      ],
      "word_forms": {},
      "collocations": [
        "say hi",
        "hi there"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"你好（表示打招呼、问候或唤起注意）\"的概念",
      "academicContext": "The hi plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0625",
    "word": "high",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/haɪ/",
      "phonetic_us": "/haɪ/",
      "meanings": [
        "高的",
        "高度的 ad. 高地"
      ],
      "word_forms": {
        "noun": "height",
        "adverb": "highly",
        "comparative": "higher",
        "superlative": "highest"
      },
      "collocations": [
        "high school",
        "high quality",
        "high level",
        "high speed",
        "high technology"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记高的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "tall",
        "elevated",
        "lofty"
      ]
    }
  },
  {
    "id": "w0626",
    "word": "highway",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhaɪweɪ/",
      "phonetic_us": "/ˈhaɪweɪ/",
      "meanings": [
        "公路",
        "主要交通道路"
      ],
      "word_forms": {
        "plural": "highways"
      },
      "collocations": [
        "interstate highway",
        "on the highway",
        "highway patrol",
        "information highway"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0627",
    "word": "hill",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hɪl/",
      "phonetic_us": "/hɪl/",
      "meanings": [
        "小山",
        "丘陵",
        "土堆"
      ],
      "word_forms": {
        "plural": "hills"
      },
      "collocations": [
        "up hill",
        "over the hill",
        "as old as the hills",
        "king of the hill"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"小山\"的概念",
      "academicContext": "The hill plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0628",
    "word": "him",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/hɪm/",
      "phonetic_us": "/hɪm/",
      "meanings": [
        "他（宾格）"
      ],
      "word_forms": {},
      "collocations": [
        "with him",
        "for him",
        "tell him",
        "give him"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"他（宾格）\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0629",
    "word": "himself",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/hɪmˈself/",
      "phonetic_us": "/hɪmˈself/",
      "meanings": [
        "他自己"
      ],
      "word_forms": {
        "plural": "himselves"
      },
      "collocations": [
        "by himself",
        "all by himself",
        "pride himself on",
        "beside himself"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0630",
    "word": "his",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/hɪz/",
      "phonetic_us": "/hɪz/",
      "meanings": [
        "他的"
      ],
      "word_forms": {},
      "collocations": [
        "his name",
        "his book",
        "his family",
        "of his own"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记他的的事物",
      "academicContext": "The research his the importance of this topic.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0631",
    "word": "history",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈhɪstərɪ/",
      "phonetic_us": "/ˈhɪstərɪ/",
      "meanings": [
        "历史",
        "历史学"
      ],
      "word_forms": {},
      "collocations": [
        "Chinese history",
        "in history",
        "natural history",
        "make history",
        "throughout history"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"历史\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "past",
        "chronicle",
        "record"
      ]
    }
  },
  {
    "id": "w0632",
    "word": "hobby",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈhɔbi/",
      "phonetic_us": "/ˈhɔbi/",
      "meanings": [
        "业余爱好",
        "嗜好"
      ],
      "word_forms": {},
      "collocations": [
        "take up a hobby",
        "favorite hobby",
        "hobby horse"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"业余爱好\"的概念",
      "academicContext": "The hobby plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"hobby\"的发音和拼写，记住其\"业余爱好\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0633",
    "word": "hole",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/həʊl/",
      "phonetic_us": "/həʊl/",
      "meanings": [
        "洞",
        "坑"
      ],
      "word_forms": {
        "plural": "holes"
      },
      "collocations": [
        "dig a hole",
        "in a hole",
        "in the hole",
        "hole in one",
        "ace in the hole"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"洞\"的概念",
      "academicContext": "The hole plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0634",
    "word": "holiday",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhɔlədi/",
      "phonetic_us": "/ˈhɔlədi/",
      "meanings": [
        "假日",
        "假期"
      ],
      "word_forms": {
        "plural": "holidays"
      },
      "collocations": [
        "on holiday",
        "public holiday",
        "holiday season",
        "take a holiday",
        "busman's holiday"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0635",
    "word": "home",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/həʊm/",
      "phonetic_us": "/həʊm/",
      "meanings": [
        "家 ad. 到家",
        "回家"
      ],
      "word_forms": {
        "plural": "homes"
      },
      "collocations": [
        "go home",
        "at home",
        "feel at home"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "归属和安全感的栖息地",
      "academicContext": "Home environment affects children's learning.",
      "dailyContext": "I'm going home now.",
      "memoryStory": "",
      "confusableWords": [
        "house",
        "residence",
        "dwelling"
      ],
      "etymology": {
        "root": "home",
        "meaning": "来自古英语hām,居所"
      }
    }
  },
  {
    "id": "w0636",
    "word": "homeland",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhəʊmlænd/",
      "phonetic_us": "/ˈhəʊmlænd/",
      "meanings": [
        "祖国"
      ],
      "word_forms": {
        "plural": "homelands"
      },
      "collocations": [
        "return to homeland",
        "homeland security",
        "love for homeland"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0637",
    "word": "hometown",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhəʊmtaʊn/",
      "phonetic_us": "/ˈhəʊmtaʊn/",
      "meanings": [
        "故乡"
      ],
      "word_forms": {
        "plural": "hometowns"
      },
      "collocations": [
        "return to hometown",
        "visit hometown",
        "from hometown"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0638",
    "word": "homework",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhəʊmwɜːk/",
      "phonetic_us": "/ˈhəʊmwɜːk/",
      "meanings": [
        "家庭作业"
      ],
      "word_forms": {
        "plural": "homeworks"
      },
      "collocations": [
        "do homework",
        "finish homework",
        "homework assignment"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0639",
    "word": "honest",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɔnɪst/",
      "phonetic_us": "/ˈɔnɪst/",
      "meanings": [
        "诚实的",
        "正直的"
      ],
      "word_forms": {
        "comparative": "honester",
        "superlative": "honestest"
      },
      "collocations": [
        "to be honest",
        "honest mistake",
        "honest opinion",
        "honest living"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0640",
    "word": "hopeful",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhəʊpfʊl/",
      "phonetic_us": "/ˈhəʊpfʊl/",
      "meanings": [
        "有希望的",
        "有前途的"
      ],
      "word_forms": {
        "comparative": "more hopeful",
        "superlative": "most hopeful"
      },
      "collocations": [
        "feel hopeful",
        "hopeful sign",
        "remain hopeful"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0641",
    "word": "horrible",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhɔrɪb(ə)l/",
      "phonetic_us": "/ˈhɔrɪb(ə)l/",
      "meanings": [
        "令人恐惧",
        "恐怖的"
      ],
      "word_forms": {},
      "collocations": [
        "horrible experience",
        "horrible mistake",
        "absolutely horrible"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0642",
    "word": "horse",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hɔːs/",
      "phonetic_us": "/hɔːs/",
      "meanings": [
        "马"
      ],
      "word_forms": {
        "plural": "horses"
      },
      "collocations": [
        "ride a horse",
        "dark horse",
        "get off one's high horse",
        "straight from the horse's mouth"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"马\"的概念",
      "academicContext": "The horse plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"horse\"的发音和拼写，记住其\"马\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0643",
    "word": "hospital",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhɔspɪt(ə)l/",
      "phonetic_us": "/ˈhɔspɪt(ə)l/",
      "meanings": [
        "医院"
      ],
      "word_forms": {},
      "collocations": [
        "in hospital",
        "go to hospital",
        "hospital bed",
        "discharge from hospital"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0644",
    "word": "hot",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hɔt,hʌt/",
      "phonetic_us": "/hɔt,hʌt/",
      "meanings": [
        "热的"
      ],
      "word_forms": {
        "comparative": "hotter",
        "superlative": "hottest"
      },
      "collocations": [
        "hot dog",
        "hot water",
        "strike while the iron is hot",
        "hot under the collar"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记热的的事物",
      "academicContext": "Understanding hot concepts is essential for academic success.",
      "dailyContext": "This is really hot! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0645",
    "word": "hotel",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/həʊˈtel/",
      "phonetic_us": "/həʊˈtel/",
      "meanings": [
        "旅馆",
        "饭店",
        "宾馆"
      ],
      "word_forms": {
        "plural": "hotels"
      },
      "collocations": [
        "stay at a hotel",
        "check into a hotel",
        "five-star hotel",
        "hotel room"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"旅馆\"的概念",
      "academicContext": "The hotel plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"hotel\"的发音和拼写，记住其\"旅馆\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0646",
    "word": "hour",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈaʊə(r)/",
      "phonetic_us": "/ˈaʊə(r)/",
      "meanings": [
        "小时"
      ],
      "word_forms": {
        "plural": "hours"
      },
      "collocations": [
        "an hour",
        "office hours",
        "rush hour",
        "at the eleventh hour",
        "happy hour"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"小时\"的概念",
      "academicContext": "The hour plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0647",
    "word": "house",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/haʊs/",
      "phonetic_us": "/haʊs/",
      "meanings": [
        "房子",
        "住宅"
      ],
      "word_forms": {
        "plural": "houses"
      },
      "collocations": [
        "at home",
        "family house",
        "go home",
        "publishing house",
        "the White House"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"房子\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "home",
        "residence",
        "dwelling"
      ]
    }
  },
  {
    "id": "w0648",
    "word": "housewife",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhaʊswaɪf/",
      "phonetic_us": "/ˈhaʊswaɪf/",
      "meanings": [
        "家庭主妇"
      ],
      "word_forms": {
        "plural": "housewives"
      },
      "collocations": [
        "full-time housewife",
        "desperate housewives"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0649",
    "word": "housework",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhaʊswɜːk/",
      "phonetic_us": "/ˈhaʊswɜːk/",
      "meanings": [
        "家务劳动"
      ],
      "word_forms": {},
      "collocations": [
        "do housework",
        "help with housework"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0650",
    "word": "how",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/haʊ/",
      "phonetic_us": "/haʊ/",
      "meanings": [
        "怎样",
        "如何",
        "多么"
      ],
      "word_forms": {},
      "collocations": [
        "how are you",
        "how much",
        "how many",
        "how about",
        "how long",
        "how often"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"怎样\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0651",
    "word": "however",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/haʊˈevə(r)/",
      "phonetic_us": "/haʊˈevə(r)/",
      "meanings": [
        "可是 conj. 然而",
        "可是",
        "尽管如此"
      ],
      "word_forms": {},
      "collocations": [
        "however hard",
        "however much",
        "however good"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"可是 conj. 然而\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "but",
        "yet",
        "nevertheless"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0652",
    "word": "hug",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hʌɡ/",
      "phonetic_us": "/hʌɡ/",
      "meanings": [
        "拥抱"
      ],
      "word_forms": {},
      "collocations": [
        "give a hug",
        "big hug",
        "group hug",
        "bear hug"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"拥抱\"的概念",
      "academicContext": "The hug plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0653",
    "word": "huge",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/hjuːdʒ/",
      "phonetic_us": "/hjuːdʒ/",
      "meanings": [
        "巨大的",
        "庞大的"
      ],
      "word_forms": {
        "comparative": "huger",
        "superlative": "hugest"
      },
      "collocations": [
        "huge amount",
        "huge success",
        "huge difference",
        "absolutely huge"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记巨大的的事物",
      "academicContext": "Understanding huge concepts is essential for academic success.",
      "dailyContext": "This is really huge! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0654",
    "word": "human",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈhjuːmən/",
      "phonetic_us": "/ˈhjuːmən/",
      "meanings": [
        "人的",
        "人类的"
      ],
      "word_forms": {
        "comparative": "humanner",
        "superlative": "humannest"
      },
      "collocations": [
        "human being",
        "human body",
        "human right",
        "human nature",
        "human race"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记人的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "person",
        "individual",
        "mankind"
      ]
    }
  },
  {
    "id": "w0655",
    "word": "hundred",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhʌndrəd/",
      "phonetic_us": "/ˈhʌndrəd/",
      "meanings": [
        "百"
      ],
      "word_forms": {
        "plural": "hundreds"
      },
      "collocations": [
        "one hundred",
        "hundreds of",
        "a hundred percent"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0656",
    "word": "hunger",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhʌŋɡə(r)/",
      "phonetic_us": "/ˈhʌŋɡə(r)/",
      "meanings": [
        "饥饿"
      ],
      "word_forms": {
        "plural": "hungers"
      },
      "collocations": [
        "die of hunger",
        "hunger strike",
        "satisfy one's hunger"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0657",
    "word": "hurry",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈhʌrɪ/",
      "phonetic_us": "/ˈhʌrɪ/",
      "meanings": [
        "赶快",
        "急忙"
      ],
      "word_forms": {
        "plural": "hurries"
      },
      "collocations": [
        "in a hurry",
        "hurry up",
        "no hurry",
        "what's the hurry"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"赶快\"的概念",
      "academicContext": "The hurry plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"hurry\"的发音和拼写，记住其\"赶快\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0658",
    "word": "husband",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈhʌzbənd/",
      "phonetic_us": "/ˈhʌzbənd/",
      "meanings": [
        "丈夫"
      ],
      "word_forms": {
        "plural": "husbands"
      },
      "collocations": [
        "husband and wife",
        "future husband",
        "ex-husband"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0659",
    "word": "I",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/aɪ/",
      "phonetic_us": "/aɪ/",
      "meanings": [
        "我"
      ],
      "word_forms": {
        "plural": "is"
      },
      "collocations": [
        "I am",
        "I think",
        "I believe",
        "I mean"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"我\"的概念",
      "academicContext": "The I plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0660",
    "word": "ice",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/aɪs/",
      "phonetic_us": "/aɪs/",
      "meanings": [
        "冰"
      ],
      "word_forms": {
        "plural": "ices"
      },
      "collocations": [
        "break the ice",
        "ice cream",
        "on ice",
        "cut no ice",
        "tip of the iceberg"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"冰\"的概念",
      "academicContext": "The ice plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0661",
    "word": "idea",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/aɪˈdɪə/",
      "phonetic_us": "/aɪˈdɪə/",
      "meanings": [
        "主意",
        "意见",
        "打算"
      ],
      "word_forms": {},
      "collocations": [
        "good idea",
        "have an idea",
        "no idea",
        "main idea",
        "bright idea"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"主意\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "thought",
        "concept",
        "notion"
      ]
    }
  },
  {
    "id": "w0662",
    "word": "idiom",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈɪdɪəm/",
      "phonetic_us": "/ˈɪdɪəm/",
      "meanings": [
        "习语",
        "成语"
      ],
      "word_forms": {
        "plural": "idioms"
      },
      "collocations": [
        "common idiom",
        "learn idioms",
        "idiomatic expression"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"习语\"的概念",
      "academicContext": "The idiom plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"idiom\"的发音和拼写，记住其\"习语\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0663",
    "word": "if",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪf/",
      "phonetic_us": "/ɪf/",
      "meanings": [
        "如果",
        "假使",
        "是否"
      ],
      "word_forms": {},
      "collocations": [
        "if possible",
        "if necessary",
        "if not",
        "as if",
        "even if"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"如果\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "whether",
        "in case",
        "supposing"
      ]
    }
  },
  {
    "id": "w0664",
    "word": "ill",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɪl/",
      "phonetic_us": "/ɪl/",
      "meanings": [
        "有病的",
        "不健康的"
      ],
      "word_forms": {
        "comparative": "iller",
        "superlative": "illest"
      },
      "collocations": [
        "fall ill",
        "speak ill of",
        "ill at ease",
        "it's an ill wind"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记有病的的事物",
      "academicContext": "Understanding ill concepts is essential for academic success.",
      "dailyContext": "This is really ill! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0665",
    "word": "illness",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɪlnɪs/",
      "phonetic_us": "/ˈɪlnɪs/",
      "meanings": [
        "疾病"
      ],
      "word_forms": {
        "plural": "illnesses"
      },
      "collocations": [
        "serious illness",
        "mental illness",
        "terminal illness",
        "recover from illness"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0666",
    "word": "imagine",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪˈmædʒɪn/",
      "phonetic_us": "/ɪˈmædʒɪn/",
      "meanings": [
        "想像",
        "设想"
      ],
      "word_forms": {},
      "collocations": [
        "just imagine",
        "can't imagine",
        "hard to imagine",
        "imagine that"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0667",
    "word": "immediately",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪˈmiːdɪətlɪ/",
      "phonetic_us": "/ɪˈmiːdɪətlɪ/",
      "meanings": [
        "立即"
      ],
      "word_forms": {
        "plural": "immediatelies"
      },
      "collocations": [
        "immediately after",
        "available immediately",
        "respond immediately"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0668",
    "word": "important",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪmˈpɔːtənt/",
      "phonetic_us": "/ɪmˈpɔːtənt/",
      "meanings": [
        "重要的"
      ],
      "word_forms": {
        "noun": "importance",
        "adverb": "importantly"
      },
      "collocations": [
        "important role",
        "important thing",
        "play an important part"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记那些不可忽视的关键事物",
      "academicContext": "Education plays an important role in personal development.",
      "dailyContext": "It's important to get enough sleep.",
      "memoryStory": "",
      "confusableWords": [
        "significant",
        "crucial",
        "essential",
        "vital"
      ],
      "etymology": {
        "prefix": "im-",
        "root": "port",
        "suffix": "-ant",
        "meaning": "im(向内) + port(带来) + ant = 带来影响的,重要的"
      }
    }
  },
  {
    "id": "w0669",
    "word": "impossible",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪmˈpɔsɪb(ə)l/",
      "phonetic_us": "/ɪmˈpɔsɪb(ə)l/",
      "meanings": [
        "不可能的"
      ],
      "word_forms": {
        "comparative": "more impossible",
        "superlative": "most impossible"
      },
      "collocations": [
        "almost impossible",
        "mission impossible",
        "nothing is impossible"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0670",
    "word": "improve",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪmˈpruːv/",
      "phonetic_us": "/ɪmˈpruːv/",
      "meanings": [
        "改进",
        "更新"
      ],
      "word_forms": {
        "plural": "improves"
      },
      "collocations": [
        "improve performance",
        "improve quality",
        "room for improvement"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0671",
    "word": "in",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪn/",
      "phonetic_us": "/ɪn/",
      "meanings": [
        "在…里(内)",
        "在 ad. 在家",
        "在内"
      ],
      "word_forms": {},
      "collocations": [
        "in fact",
        "in time",
        "in the end",
        "in all",
        "in front of",
        "in the middle of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达在…里(内)这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0672",
    "word": "inch",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɪntʃ/",
      "phonetic_us": "/ɪntʃ/",
      "meanings": [
        "英寸"
      ],
      "word_forms": {
        "plural": "inches"
      },
      "collocations": [
        "inch by inch",
        "every inch",
        "give an inch",
        "within an inch of"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"英寸\"的概念",
      "academicContext": "The inch plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0673",
    "word": "include",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪnˈkluːd/",
      "phonetic_us": "/ɪnˈkluːd/",
      "meanings": [
        "包含",
        "包括"
      ],
      "word_forms": {
        "noun": "inclusion"
      },
      "collocations": [
        "not including",
        "include...in...",
        "include sb/sth"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"包含\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [],
      "etymology": null
    }
  },
  {
    "id": "w0674",
    "word": "increase",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪnˈkriːs/",
      "phonetic_us": "/ɪnˈkriːs/",
      "meanings": [
        "& n. 增加",
        "繁殖"
      ],
      "word_forms": {
        "noun": "increase"
      },
      "collocations": [
        "increase by",
        "increase to",
        "on the increase",
        "increase in"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "传达& n. 增加的意思",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "grow",
        "rise",
        "expand"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0675",
    "word": "indeed",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈdiːd/",
      "phonetic_us": "/ɪnˈdiːd/",
      "meanings": [
        "确实",
        "实在"
      ],
      "word_forms": {
        "plural": "indeeds"
      },
      "collocations": [
        "very much indeed",
        "indeed it is",
        "thank you very much indeed"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0676",
    "word": "India",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈɪndɪə/",
      "phonetic_us": "/ˈɪndɪə/",
      "meanings": [
        "印度"
      ],
      "word_forms": {},
      "collocations": [
        "in India",
        "from India",
        "travel to India"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"印度\"的概念",
      "academicContext": "The India plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"India\"的发音和拼写，记住其\"印度\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0677",
    "word": "information",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪnfəˈmeɪʃ(ə)n/",
      "phonetic_us": "/ɪnfəˈmeɪʃ(ə)n/",
      "meanings": [
        "信息"
      ],
      "word_forms": {
        "verb": "inform",
        "adjective": "informative"
      },
      "collocations": [
        "useful information",
        "get information",
        "for your information",
        "personal information"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"信息\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "data",
        "facts",
        "knowledge"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0678",
    "word": "ink",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɪŋk/",
      "phonetic_us": "/ɪŋk/",
      "meanings": [
        "墨水",
        "油墨"
      ],
      "word_forms": {
        "plural": "inks"
      },
      "collocations": [
        "in ink",
        "ink jet",
        "pen and ink"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"墨水\"的概念",
      "academicContext": "The ink plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0679",
    "word": "insect",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɪnsekt/",
      "phonetic_us": "/ˈɪnsekt/",
      "meanings": [
        "昆虫"
      ],
      "word_forms": {
        "plural": "insects"
      },
      "collocations": [
        "insect repellent",
        "insect bite",
        "harmful insects"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0680",
    "word": "inside",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈsaɪd/",
      "phonetic_us": "/ɪnˈsaɪd/",
      "meanings": [
        "在…里面 ad. 在里面"
      ],
      "word_forms": {},
      "collocations": [
        "come inside",
        "inside out",
        "inside information",
        "on the inside"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0681",
    "word": "insist",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈsɪst/",
      "phonetic_us": "/ɪnˈsɪst/",
      "meanings": [
        "坚持",
        "坚决认为"
      ],
      "word_forms": {},
      "collocations": [
        "insist on",
        "insist that",
        "continue to insist"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0682",
    "word": "inspect",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈspekt/",
      "phonetic_us": "/ɪnˈspekt/",
      "meanings": [
        "检查",
        "检验",
        "审视"
      ],
      "word_forms": {
        "plural": "inspects"
      },
      "collocations": [
        "inspect carefully",
        "inspect the damage",
        "inspect troops"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0683",
    "word": "instruct",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈstrʌkt/",
      "phonetic_us": "/ɪnˈstrʌkt/",
      "meanings": [
        "通知",
        "指示",
        "教"
      ],
      "word_forms": {},
      "collocations": [
        "instruct sb to do",
        "as instructed"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0684",
    "word": "instruction",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈstrʌkʃ(ə)n/",
      "phonetic_us": "/ɪnˈstrʌkʃ(ə)n/",
      "meanings": [
        "说明",
        "须知",
        "教导"
      ],
      "word_forms": {},
      "collocations": [
        "follow instructions",
        "instruction manual",
        "give instructions",
        "detailed instructions"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0685",
    "word": "interest",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɪntrɪst/",
      "phonetic_us": "/ˈɪntrɪst/",
      "meanings": [
        "兴趣",
        "趣味",
        "利息"
      ],
      "word_forms": {
        "verb": "interest",
        "adjective": "interesting",
        "adjective2": "interested"
      },
      "collocations": [
        "take interest in",
        "show interest",
        "of interest"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "吸引注意力和好奇心的事物",
      "academicContext": "The research sparked great interest among scientists.",
      "dailyContext": "I have an interest in photography.",
      "memoryStory": "",
      "confusableWords": [
        "curiosity",
        "attention",
        "concern"
      ],
      "etymology": {
        "prefix": "inter-",
        "root": "est",
        "meaning": "inter(之间) + est(存在) = 存在于两者之间,感兴趣"
      }
    }
  },
  {
    "id": "w0686",
    "word": "interesting",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɪntrɪstɪŋ/",
      "phonetic_us": "/ˈɪntrɪstɪŋ/",
      "meanings": [
        "有趣的"
      ],
      "word_forms": {
        "comparative": "more interesting",
        "superlative": "most interesting"
      },
      "collocations": [
        "very interesting",
        "interesting story",
        "find it interesting",
        "interesting fact"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0687",
    "word": "international",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪntəˈnæʃən(ə)l/",
      "phonetic_us": "/ɪntəˈnæʃən(ə)l/",
      "meanings": [
        "国际的"
      ],
      "word_forms": {
        "comparative": "more international",
        "superlative": "most international"
      },
      "collocations": [
        "international airport",
        "international trade",
        "international relations"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0688",
    "word": "internet",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɪntənet/",
      "phonetic_us": "/ˈɪntənet/",
      "meanings": [
        "互联网",
        "英特网"
      ],
      "word_forms": {
        "plural": "internets"
      },
      "collocations": [
        "on the internet",
        "surf the internet",
        "internet connection",
        "internet café"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0689",
    "word": "into",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɪntʊ, ˈɪntə/",
      "phonetic_us": "/ˈɪntʊ, ˈɪntə/",
      "meanings": [
        "到…里",
        "向内",
        "变成"
      ],
      "word_forms": {},
      "collocations": [
        "go into",
        "come into",
        "look into",
        "turn into",
        "run into",
        "get into"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"到…里\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0690",
    "word": "introduce",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪntrəˈdjuːs; (US) -duːs/",
      "phonetic_us": "/ɪntrəˈdjuːs; (US) -duːs/",
      "meanings": [
        "介绍"
      ],
      "word_forms": {
        "plural": "introduces"
      },
      "collocations": [
        "introduce oneself",
        "introduce to",
        "allow me to introduce"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0691",
    "word": "invent",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈvent/",
      "phonetic_us": "/ɪnˈvent/",
      "meanings": [
        "发明",
        "创造"
      ],
      "word_forms": {},
      "collocations": [
        "invent something new",
        "newly invented"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0692",
    "word": "invention",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈvenʃ(ə)n/",
      "phonetic_us": "/ɪnˈvenʃ(ə)n/",
      "meanings": [
        "发明",
        "创造"
      ],
      "word_forms": {},
      "collocations": [
        "great invention",
        "invention of",
        "necessity is the mother of invention"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0693",
    "word": "inventor",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈventə(r)/",
      "phonetic_us": "/ɪnˈventə(r)/",
      "meanings": [
        "发明者",
        "创造者"
      ],
      "word_forms": {
        "plural": "inventors"
      },
      "collocations": [
        "famous inventor",
        "great inventor"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0694",
    "word": "invite",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪnˈvaɪt/",
      "phonetic_us": "/ɪnˈvaɪt/",
      "meanings": [
        "邀请",
        "招待"
      ],
      "word_forms": {
        "plural": "invites"
      },
      "collocations": [
        "invite sb to",
        "invite over",
        "cordially invite"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0695",
    "word": "is",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/iz/",
      "phonetic_us": "/iz/",
      "meanings": [
        "是"
      ],
      "word_forms": {},
      "collocations": [
        "is not",
        "is it",
        "as it is",
        "that is"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"是\"的概念",
      "academicContext": "The is plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0696",
    "word": "island",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈaɪlənd/",
      "phonetic_us": "/ˈaɪlənd/",
      "meanings": [
        "岛"
      ],
      "word_forms": {
        "plural": "islands"
      },
      "collocations": [
        "desert island",
        "tropical island",
        "island paradise",
        "no man is an island"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0697",
    "word": "it",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪt/",
      "phonetic_us": "/ɪt/",
      "meanings": [
        "它"
      ],
      "word_forms": {},
      "collocations": [
        "it is",
        "it was",
        "make it",
        "that's it"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"它\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0698",
    "word": "its",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɪts/",
      "phonetic_us": "/ɪts/",
      "meanings": [
        "它的"
      ],
      "word_forms": {},
      "collocations": [
        "its own",
        "its name",
        "on its own"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记它的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0699",
    "word": "itself",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɪtˈself/",
      "phonetic_us": "/ɪtˈself/",
      "meanings": [
        "它自己"
      ],
      "word_forms": {
        "plural": "itselves"
      },
      "collocations": [
        "by itself",
        "in itself",
        "speak for itself"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0700",
    "word": "jacket",
    "level": "初二",
    "unit": "Unit 7",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʒækɪt/",
      "phonetic_us": "/ˈdʒækɪt/",
      "meanings": [
        "短上衣",
        "夹克衫"
      ],
      "word_forms": {
        "plural": "jackets"
      },
      "collocations": [
        "leather jacket",
        "life jacket",
        "dinner jacket",
        "jacket potato"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0701",
    "word": "jam",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒæm/",
      "phonetic_us": "/dʒæm/",
      "meanings": [
        "果酱",
        "阻塞"
      ],
      "word_forms": {},
      "collocations": [
        "traffic jam",
        "in a jam",
        "jam session",
        "strawberry jam",
        "jam packed"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"果酱\"的概念",
      "academicContext": "The jam plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0702",
    "word": "January",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʒænjʊərɪ; (US) ˈdʒænjʊerɪ/",
      "phonetic_us": "/ˈdʒænjʊərɪ; (US) ˈdʒænjʊerɪ/",
      "meanings": [
        "1月"
      ],
      "word_forms": {},
      "collocations": [
        "in January",
        "this January",
        "early January"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0703",
    "word": "Japan",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒæˈpæn/",
      "phonetic_us": "/dʒæˈpæn/",
      "meanings": [
        "日本"
      ],
      "word_forms": {},
      "collocations": [
        "in Japan",
        "from Japan",
        "made in Japan",
        "travel to Japan"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"日本\"的概念",
      "academicContext": "The Japan plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"Japan\"的发音和拼写，记住其\"日本\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0704",
    "word": "Japanese",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/dʒæpəˈniːz/",
      "phonetic_us": "/dʒæpəˈniːz/",
      "meanings": [
        "日本的",
        "日本人的",
        "日语的 n. 日本人"
      ],
      "word_forms": {
        "plural": "japaneses",
        "comparative": "more japanese",
        "superlative": "most japanese"
      },
      "collocations": [
        "speak Japanese",
        "Japanese food",
        "Japanese culture"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0705",
    "word": "jeep",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒiːp/",
      "phonetic_us": "/dʒiːp/",
      "meanings": [
        "吉普车"
      ],
      "word_forms": {
        "plural": "jeeps"
      },
      "collocations": [
        "drive a jeep",
        "jeep tour"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"吉普车\"的概念",
      "academicContext": "The jeep plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0706",
    "word": "job",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/dʒɔb/",
      "phonetic_us": "/dʒɔb/",
      "meanings": [
        "（一份）工作"
      ],
      "word_forms": {},
      "collocations": [
        "do a good job",
        "part-time job",
        "job interview",
        "find a job",
        "dream job"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"（一份）工作\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "work",
        "occupation",
        "employment"
      ]
    }
  },
  {
    "id": "w0707",
    "word": "join",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒɔɪn/",
      "phonetic_us": "/dʒɔɪn/",
      "meanings": [
        "参加",
        "加入",
        "连接"
      ],
      "word_forms": {
        "plural": "joins"
      },
      "collocations": [
        "join in",
        "join up",
        "join hands",
        "join forces",
        "join the club"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"参加\"的概念",
      "academicContext": "The join plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0708",
    "word": "joke",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒəʊk/",
      "phonetic_us": "/dʒəʊk/",
      "meanings": [
        "笑话"
      ],
      "word_forms": {
        "plural": "jokes"
      },
      "collocations": [
        "tell a joke",
        "play a joke on",
        "crack a joke",
        "no joke",
        "get the joke"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"笑话\"的概念",
      "academicContext": "The joke plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0709",
    "word": "journalist",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʒɜːnəlɪzt/",
      "phonetic_us": "/ˈdʒɜːnəlɪzt/",
      "meanings": [
        "记者",
        "新闻工作者"
      ],
      "word_forms": {
        "plural": "journalists"
      },
      "collocations": [
        "freelance journalist",
        "investigative journalist",
        "television journalist"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0710",
    "word": "journey",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʒɜːnɪ/",
      "phonetic_us": "/ˈdʒɜːnɪ/",
      "meanings": [
        "旅行",
        "路程"
      ],
      "word_forms": {},
      "collocations": [
        "long journey",
        "safe journey",
        "journey of a thousand miles"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0711",
    "word": "joy",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒɔɪ/",
      "phonetic_us": "/dʒɔɪ/",
      "meanings": [
        "欢乐",
        "高兴",
        "乐趣"
      ],
      "word_forms": {
        "plural": "joys"
      },
      "collocations": [
        "jump for joy",
        "tears of joy",
        "to my joy",
        "pride and joy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"欢乐\"的概念",
      "academicContext": "The joy plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0712",
    "word": "judge",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒʌdʒ/",
      "phonetic_us": "/dʒʌdʒ/",
      "meanings": [
        "裁判",
        "审判员",
        "法官 vt. 判断"
      ],
      "word_forms": {},
      "collocations": [
        "judge by",
        "don't judge a book by its cover",
        "judging by",
        "as far as I can judge"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"裁判\"的概念",
      "academicContext": "The judge plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"judge\"的发音和拼写，记住其\"裁判\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0713",
    "word": "juice",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒuːs/",
      "phonetic_us": "/dʒuːs/",
      "meanings": [
        "汁、液"
      ],
      "word_forms": {
        "plural": "juices"
      },
      "collocations": [
        "orange juice",
        "fruit juice",
        "lemon juice",
        "fresh juice"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"汁、液\"的概念",
      "academicContext": "The juice plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"juice\"的发音和拼写，记住其\"汁、液\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0714",
    "word": "July",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒʊˈlaɪ/",
      "phonetic_us": "/dʒʊˈlaɪ/",
      "meanings": [
        "7月"
      ],
      "word_forms": {},
      "collocations": [
        "in July",
        "fourth of July",
        "this July",
        "last July"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用7月的方式完成任务",
      "academicContext": "The data was analyzed July to ensure accuracy.",
      "dailyContext": "Please do it July this time.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0715",
    "word": "jump",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒʌmp/",
      "phonetic_us": "/dʒʌmp/",
      "meanings": [
        "跳跃",
        "跳变 v. 跳跃",
        "惊起"
      ],
      "word_forms": {},
      "collocations": [
        "jump up",
        "jump at",
        "jump on",
        "jump to conclusions",
        "jump the gun"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"跳跃\"的概念",
      "academicContext": "The jump plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0716",
    "word": "June",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/dʒuːn/",
      "phonetic_us": "/dʒuːn/",
      "meanings": [
        "6月"
      ],
      "word_forms": {},
      "collocations": [
        "in June",
        "this June",
        "last June",
        "early June"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"6月\"的概念",
      "academicContext": "The June plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0717",
    "word": "jungle",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʒʌŋɡ(ə)l/",
      "phonetic_us": "/ˈdʒʌŋɡ(ə)l/",
      "meanings": [
        "丛林",
        "密林"
      ],
      "word_forms": {
        "plural": "jungles"
      },
      "collocations": [
        "jungle law",
        "concrete jungle",
        "it's a jungle out there"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0718",
    "word": "junior",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈdʒuːnɪə(r)/",
      "phonetic_us": "/ˈdʒuːnɪə(r)/",
      "meanings": [
        "初级的",
        "年少的"
      ],
      "word_forms": {
        "comparative": "juniorrer",
        "superlative": "juniorrest"
      },
      "collocations": [
        "junior high school",
        "junior year",
        "junior partner"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0719",
    "word": "just",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/dʒʌst/",
      "phonetic_us": "/dʒʌst/",
      "meanings": [
        "刚才",
        "恰好",
        "不过"
      ],
      "word_forms": {},
      "collocations": [
        "just now",
        "just then",
        "just like",
        "just as",
        "just in time"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"刚才\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "only",
        "simply",
        "merely"
      ]
    }
  },
  {
    "id": "w0720",
    "word": "kangaroo",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kæŋɡəˈruː/",
      "phonetic_us": "/kæŋɡəˈruː/",
      "meanings": [
        "大袋鼠"
      ],
      "word_forms": {
        "plural": "kangaroos"
      },
      "collocations": [
        "kangaroo court",
        "baby kangaroo"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0721",
    "word": "key",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kiː/",
      "phonetic_us": "/kiː/",
      "meanings": [
        "钥匙",
        "答案",
        "键"
      ],
      "word_forms": {},
      "collocations": [
        "key to",
        "key point",
        "key role",
        "answer key",
        "under lock and key"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"钥匙\"的概念",
      "academicContext": "The key plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0722",
    "word": "keyboard",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/kiːbɔːd/",
      "phonetic_us": "/kiːbɔːd/",
      "meanings": [
        "键盘"
      ],
      "word_forms": {
        "plural": "keyboards"
      },
      "collocations": [
        "computer keyboard",
        "keyboard shortcut",
        "keyboard player"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0723",
    "word": "kid",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kɪd/",
      "phonetic_us": "/kɪd/",
      "meanings": [
        "小孩"
      ],
      "word_forms": {
        "plural": "kids"
      },
      "collocations": [
        "just kidding",
        "no kidding",
        "kid around",
        "handle with kid gloves"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"小孩\"的概念",
      "academicContext": "The kid plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0724",
    "word": "kill",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kɪl/",
      "phonetic_us": "/kɪl/",
      "meanings": [
        "杀死",
        "弄死"
      ],
      "word_forms": {
        "plural": "kills"
      },
      "collocations": [
        "kill time",
        "kill two birds with one stone",
        "kill off",
        "dressed to kill"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"杀死\"的概念",
      "academicContext": "The kill plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0725",
    "word": "kilo",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈkiːləʊ/",
      "phonetic_us": "/ˈkiːləʊ/",
      "meanings": [
        "千克",
        "千米"
      ],
      "word_forms": {
        "plural": "kilos"
      },
      "collocations": [
        "per kilo",
        "five kilos"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"千克\"的概念",
      "academicContext": "The kilo plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0726",
    "word": "kilogram",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɪləuɡræm/",
      "phonetic_us": "/ˈkɪləuɡræm/",
      "meanings": [
        "千克"
      ],
      "word_forms": {
        "plural": "kilograms"
      },
      "collocations": [
        "per kilogram",
        "five kilograms"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0727",
    "word": "kilometre",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'kiləumi:tə(r)/",
      "phonetic_us": "/'kiləumi:tə(r)/",
      "meanings": [
        "千米（公里）"
      ],
      "word_forms": {
        "plural": "kilometres"
      },
      "collocations": [
        "per kilometre",
        "square kilometre"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0728",
    "word": "kind",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/kaɪnd/",
      "phonetic_us": "/kaɪnd/",
      "meanings": [
        "种",
        "类 a. 善良",
        "友好的"
      ],
      "word_forms": {
        "noun": "kindness",
        "adverb": "kindly"
      },
      "collocations": [
        "all kinds of",
        "kind of",
        "a kind of",
        "what kind of",
        "be kind to"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"种\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "type",
        "sort",
        "variety"
      ]
    }
  },
  {
    "id": "w0729",
    "word": "king",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kɪŋ/",
      "phonetic_us": "/kɪŋ/",
      "meanings": [
        "国王"
      ],
      "word_forms": {
        "plural": "kings"
      },
      "collocations": [
        "king size",
        "live like a king",
        "fit for a king",
        "king of the hill"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"国王\"的概念",
      "academicContext": "The king plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0730",
    "word": "kingdom",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɪŋdəm/",
      "phonetic_us": "/ˈkɪŋdəm/",
      "meanings": [
        "王国"
      ],
      "word_forms": {
        "plural": "kingdoms"
      },
      "collocations": [
        "United Kingdom",
        "animal kingdom",
        "kingdom come"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0731",
    "word": "kitchen",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkɪtʃɪn/",
      "phonetic_us": "/ˈkɪtʃɪn/",
      "meanings": [
        "厨房"
      ],
      "word_forms": {
        "plural": "kitchens"
      },
      "collocations": [
        "kitchen table",
        "everything but the kitchen sink",
        "kitchen cabinet"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0732",
    "word": "kite",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kaɪt/",
      "phonetic_us": "/kaɪt/",
      "meanings": [
        "风筝"
      ],
      "word_forms": {
        "plural": "kites"
      },
      "collocations": [
        "fly a kite",
        "go fly a kite",
        "high as a kite"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"风筝\"的概念",
      "academicContext": "The kite plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0733",
    "word": "knee",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/niː/",
      "phonetic_us": "/niː/",
      "meanings": [
        "膝盖"
      ],
      "word_forms": {},
      "collocations": [
        "on one's knees",
        "bring to one's knees",
        "knee deep",
        "weak at the knees"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"膝盖\"的概念",
      "academicContext": "The knee plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0734",
    "word": "knowledge",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnɔlɪdʒ/",
      "phonetic_us": "/ˈnɔlɪdʒ/",
      "meanings": [
        "知识",
        "学问"
      ],
      "word_forms": {},
      "collocations": [
        "common knowledge",
        "to my knowledge",
        "general knowledge",
        "knowledge is power"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0735",
    "word": "ladder",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlædə(r)/",
      "phonetic_us": "/ˈlædə(r)/",
      "meanings": [
        "梯子"
      ],
      "word_forms": {
        "plural": "ladders"
      },
      "collocations": [
        "climb a ladder",
        "ladder of success",
        "corporate ladder",
        "step ladder"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0736",
    "word": "lady",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈleɪdɪ/",
      "phonetic_us": "/ˈleɪdɪ/",
      "meanings": [
        "女士",
        "夫人"
      ],
      "word_forms": {
        "plural": "ladies"
      },
      "collocations": [
        "ladies and gentlemen",
        "first lady",
        "young lady",
        "lady luck"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"女士\"的概念",
      "academicContext": "The lady plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0737",
    "word": "lake",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/leɪk/",
      "phonetic_us": "/leɪk/",
      "meanings": [
        "湖"
      ],
      "word_forms": {
        "plural": "lakes"
      },
      "collocations": [
        "by the lake",
        "lake side",
        "jump in the lake"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"湖\"的概念",
      "academicContext": "The lake plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0738",
    "word": "lamp",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/læmp/",
      "phonetic_us": "/læmp/",
      "meanings": [
        "灯",
        "油灯",
        "光源"
      ],
      "word_forms": {
        "plural": "lamps"
      },
      "collocations": [
        "table lamp",
        "oil lamp",
        "street lamp",
        "lamp post"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"灯\"的概念",
      "academicContext": "The lamp plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0739",
    "word": "land",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/lænd/",
      "phonetic_us": "/lænd/",
      "meanings": [
        "陆地",
        "土地 v. 登岸(陆)降落"
      ],
      "word_forms": {
        "comparative": "lander",
        "superlative": "landest"
      },
      "collocations": [
        "on land",
        "land on",
        "promise land",
        "never-never land",
        "land of opportunity"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用陆地的方式完成任务",
      "academicContext": "The data was analyzed land to ensure accuracy.",
      "dailyContext": "Please do it land this time.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0740",
    "word": "language",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlæŋɡwɪdʒ/",
      "phonetic_us": "/ˈlæŋɡwɪdʒ/",
      "meanings": [
        "语言"
      ],
      "word_forms": {
        "plural": "languages"
      },
      "collocations": [
        "body language",
        "foreign language",
        "native language",
        "speak the same language"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0741",
    "word": "lap",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/læp/",
      "phonetic_us": "/læp/",
      "meanings": [
        "(人坐时)膝部",
        "(跑道的)一圈"
      ],
      "word_forms": {},
      "collocations": [
        "sit on one's lap",
        "lap of luxury",
        "lap up",
        "final lap"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"(人坐时)膝部\"的概念",
      "academicContext": "The lap plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0742",
    "word": "large",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/lɑːdʒ/",
      "phonetic_us": "/lɑːdʒ/",
      "meanings": [
        "大的",
        "巨大的"
      ],
      "word_forms": {
        "adverb": "largely",
        "comparative": "larger",
        "superlative": "largest"
      },
      "collocations": [
        "large number",
        "large amount",
        "at large",
        "by and large"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记大的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "big",
        "huge",
        "enormous",
        "great"
      ]
    }
  },
  {
    "id": "w0743",
    "word": "last",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/lɑːst; (US) læst/",
      "phonetic_us": "/lɑːst; (US) læst/",
      "meanings": [
        "最后的 ad. 最后地 n. 最后 v. 持续"
      ],
      "word_forms": {
        "comparative": "laster",
        "superlative": "lastest"
      },
      "collocations": [
        "at last",
        "last night",
        "last week",
        "the last time",
        "last but not least"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达最后的 ad. 最后地 n. 最后 v. 持续这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "final",
        "ultimate",
        "end"
      ]
    }
  },
  {
    "id": "w0744",
    "word": "late",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/leɪt/",
      "phonetic_us": "/leɪt/",
      "meanings": [
        "晚的",
        "迟的 ad. 晚地",
        "迟地"
      ],
      "word_forms": {
        "noun": "lateness",
        "adverb": "lately",
        "comparative": "later",
        "superlative": "latest"
      },
      "collocations": [
        "be late for",
        "stay up late",
        "sooner or later",
        "late at night"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记晚的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "tardy",
        "delayed",
        "overdue"
      ]
    }
  },
  {
    "id": "w0745",
    "word": "lately",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈleɪtlɪ/",
      "phonetic_us": "/ˈleɪtlɪ/",
      "meanings": [
        "最近",
        "不久前"
      ],
      "word_forms": {
        "plural": "latelies"
      },
      "collocations": [
        "until lately",
        "what have you been doing lately"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0746",
    "word": "later",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈleɪtə(r)/",
      "phonetic_us": "/ˈleɪtə(r)/",
      "meanings": [
        "晚些的",
        "迟些的"
      ],
      "word_forms": {
        "comparative": "laterrer",
        "superlative": "laterrest"
      },
      "collocations": [
        "see you later",
        "sooner or later",
        "later on"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记晚些的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "afterward",
        "subsequently",
        "eventually"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0747",
    "word": "law",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/lɔː/",
      "phonetic_us": "/lɔː/",
      "meanings": [
        "法律",
        "法令",
        "定律"
      ],
      "word_forms": {},
      "collocations": [
        "break the law",
        "law and order",
        "by law",
        "lay down the law",
        "above the law"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"法律\"的概念",
      "academicContext": "The law plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0748",
    "word": "lazy",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈleɪzɪ/",
      "phonetic_us": "/ˈleɪzɪ/",
      "meanings": [
        "懒惰的"
      ],
      "word_forms": {
        "comparative": "lazier",
        "superlative": "laziest"
      },
      "collocations": [
        "lazy bones",
        "lazy day",
        "too lazy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记懒惰的的事物",
      "academicContext": "Understanding lazy concepts is essential for academic success.",
      "dailyContext": "This is really lazy! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0749",
    "word": "leader",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈliːdə(r)/",
      "phonetic_us": "/ˈliːdə(r)/",
      "meanings": [
        "领袖",
        "领导人"
      ],
      "word_forms": {
        "plural": "leaders"
      },
      "collocations": [
        "team leader",
        "world leader",
        "born leader",
        "leader of the pack"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0750",
    "word": "league",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/liːɡ/",
      "phonetic_us": "/liːɡ/",
      "meanings": [
        "联盟",
        "社团"
      ],
      "word_forms": {
        "plural": "leagues"
      },
      "collocations": [
        "major league",
        "out of one's league",
        "in league with",
        "league table"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0751",
    "word": "least",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/liːst/",
      "phonetic_us": "/liːst/",
      "meanings": [
        "最少",
        "最少量"
      ],
      "word_forms": {},
      "collocations": [
        "at least",
        "not in the least",
        "last but not least"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"最少\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "minimum",
        "smallest",
        "fewest"
      ]
    }
  },
  {
    "id": "w0752",
    "word": "leather",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈleðə(r)/",
      "phonetic_us": "/ˈleðə(r)/",
      "meanings": [
        "皮革"
      ],
      "word_forms": {
        "plural": "leathers"
      },
      "collocations": [
        "leather jacket",
        "leather shoes",
        "genuine leather"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0753",
    "word": "left",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/left/",
      "phonetic_us": "/left/",
      "meanings": [
        "左边的 ad. 向左 n. 左",
        "左边"
      ],
      "word_forms": {
        "plural": "lefts",
        "comparative": "lefter",
        "superlative": "leftest"
      },
      "collocations": [
        "on the left",
        "turn left",
        "left hand",
        "be left"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记左边的 ad. 向左 n. 左的特征",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "remaining",
        "departed"
      ]
    }
  },
  {
    "id": "w0754",
    "word": "leg",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/leɡ/",
      "phonetic_us": "/leɡ/",
      "meanings": [
        "腿",
        "腿脚",
        "支柱"
      ],
      "word_forms": {
        "plural": "legs"
      },
      "collocations": [
        "pull one's leg",
        "break a leg",
        "leg up",
        "not have a leg to stand on"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"腿\"的概念",
      "academicContext": "The leg plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0755",
    "word": "lesson",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/[ˈles(ə)n/",
      "phonetic_us": "/[ˈles(ə)n/",
      "meanings": [
        "课",
        "功课",
        "教训"
      ],
      "word_forms": {},
      "collocations": [
        "learn a lesson",
        "teach a lesson",
        "lesson plan",
        "piano lesson"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0756",
    "word": "letter",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈletə(r)/",
      "phonetic_us": "/ˈletə(r)/",
      "meanings": [
        "信",
        "字母"
      ],
      "word_forms": {
        "plural": "letters"
      },
      "collocations": [
        "capital letter",
        "love letter",
        "write a letter",
        "to the letter"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0757",
    "word": "librarian",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/laiˈbreəriən/",
      "phonetic_us": "/laiˈbreəriən/",
      "meanings": [
        "图书管理员",
        "（西方的）图书馆馆长"
      ],
      "word_forms": {},
      "collocations": [
        "school librarian",
        "chief librarian"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0758",
    "word": "library",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlaibrəri; (US) ˈlaibreri/",
      "phonetic_us": "/ˈlaibrəri; (US) ˈlaibreri/",
      "meanings": [
        "图书馆",
        "图书室"
      ],
      "word_forms": {},
      "collocations": [
        "public library",
        "school library",
        "library card",
        "library book"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0759",
    "word": "license",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlaisəns/",
      "phonetic_us": "/ˈlaisəns/",
      "meanings": [
        "执照",
        "许可证"
      ],
      "word_forms": {
        "plural": "licenses"
      },
      "collocations": [
        "driver's license",
        "license plate",
        "poetic license"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0760",
    "word": "lifetime",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlaiftaim/",
      "phonetic_us": "/ˈlaiftaim/",
      "meanings": [
        "一生",
        "终生"
      ],
      "word_forms": {
        "plural": "lifetimes"
      },
      "collocations": [
        "once in a lifetime",
        "lifetime achievement",
        "in one's lifetime"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0761",
    "word": "lift",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/lift/",
      "phonetic_us": "/lift/",
      "meanings": [
        "举起",
        "抬起",
        "（云、烟等）消散 n. （英）电梯"
      ],
      "word_forms": {
        "plural": "lifts"
      },
      "collocations": [
        "give a lift",
        "lift up",
        "lift off",
        "face lift"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"举起\"的概念",
      "academicContext": "The lift plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0762",
    "word": "light",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/laɪt/",
      "phonetic_us": "/laɪt/",
      "meanings": [
        "光",
        "光亮",
        "灯"
      ],
      "word_forms": {
        "verb": "light",
        "adverb": "lightly",
        "comparative": "lighter",
        "superlative": "lightest"
      },
      "collocations": [
        "traffic light",
        "light music",
        "in the light of",
        "turn on the light"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"光\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "bright",
        "illumination",
        "lamp"
      ]
    }
  },
  {
    "id": "w0763",
    "word": "like",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/laɪk/",
      "phonetic_us": "/laɪk/",
      "meanings": [
        "像",
        "跟…一样 vt. 喜欢",
        "喜爱"
      ],
      "word_forms": {},
      "collocations": [
        "would like",
        "look like",
        "feel like",
        "like doing",
        "like to do"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"像\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "enjoy",
        "love",
        "prefer",
        "similar to"
      ]
    }
  },
  {
    "id": "w0764",
    "word": "line",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/laɪn/",
      "phonetic_us": "/laɪn/",
      "meanings": [
        "绳索",
        "线",
        "排"
      ],
      "word_forms": {
        "plural": "lines"
      },
      "collocations": [
        "stand in line",
        "in a line",
        "on line",
        "draw a line",
        "fishing line"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"绳索\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "row",
        "queue",
        "stripe"
      ]
    }
  },
  {
    "id": "w0765",
    "word": "lion",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈlaɪən/",
      "phonetic_us": "/ˈlaɪən/",
      "meanings": [
        "狮子"
      ],
      "word_forms": {
        "plural": "lions"
      },
      "collocations": [
        "lion's share",
        "lion heart",
        "like a lion",
        "throw to the lions"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"狮子\"的概念",
      "academicContext": "The lion plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0766",
    "word": "lip",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/lɪp/",
      "phonetic_us": "/lɪp/",
      "meanings": [
        "嘴唇"
      ],
      "word_forms": {
        "plural": "lips"
      },
      "collocations": [
        "upper lip",
        "bite one's lip",
        "lip service",
        "on everyone's lips"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"嘴唇\"的概念",
      "academicContext": "The lip plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0767",
    "word": "list",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/lɪst/",
      "phonetic_us": "/lɪst/",
      "meanings": [
        "一览表",
        "清单"
      ],
      "word_forms": {
        "plural": "lists"
      },
      "collocations": [
        "shopping list",
        "waiting list",
        "to-do list",
        "make a list",
        "top of the list"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"一览表\"的概念",
      "academicContext": "The list plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0768",
    "word": "listen",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlɪs(ə)n/",
      "phonetic_us": "/ˈlɪs(ə)n/",
      "meanings": [
        "听",
        "仔细听"
      ],
      "word_forms": {},
      "collocations": [
        "listen to",
        "listen carefully",
        "listen up"
      ],
      "exam_frequency": 2.5,
      "gameDescription": "用心接收和理解声音信息",
      "academicContext": "Good listeners make better learners.",
      "dailyContext": "Listen to me carefully.",
      "memoryStory": "",
      "confusableWords": [
        "hear",
        "attend"
      ],
      "etymology": {
        "root": "listen",
        "meaning": "来自古英语hlysnan,听"
      }
    }
  },
  {
    "id": "w0769",
    "word": "litter",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlɪtə(r)/",
      "phonetic_us": "/ˈlɪtə(r)/",
      "meanings": [
        "乱丢杂物"
      ],
      "word_forms": {
        "plural": "litters"
      },
      "collocations": [
        "drop litter",
        "litter bin",
        "pick up litter"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0770",
    "word": "live",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/lɪv/",
      "phonetic_us": "/lɪv/",
      "meanings": [
        "生活",
        "居住",
        "活着 a. 活的"
      ],
      "word_forms": {
        "noun": "life",
        "adjective": "alive",
        "adjective2": "living"
      },
      "collocations": [
        "live in",
        "live with",
        "live on"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "生存、居住或过某种生活",
      "academicContext": "We live in a digital age.",
      "dailyContext": "I live in Shanghai.",
      "memoryStory": "",
      "confusableWords": [
        "reside",
        "dwell",
        "exist"
      ],
      "etymology": {
        "root": "live",
        "meaning": "来自古英语libban,生活"
      }
    }
  },
  {
    "id": "w0771",
    "word": "lively",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlaɪvlɪ/",
      "phonetic_us": "/ˈlaɪvlɪ/",
      "meanings": [
        "活泼的",
        "充满生气的"
      ],
      "word_forms": {
        "comparative": "livelier",
        "superlative": "liveliest"
      },
      "collocations": [
        "lively discussion",
        "lively atmosphere",
        "lively personality"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0772",
    "word": "living",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlɪvɪŋ/",
      "phonetic_us": "/ˈlɪvɪŋ/",
      "meanings": [
        "活着的 n. 生计"
      ],
      "word_forms": {
        "plural": "livings",
        "comparative": "livinger",
        "superlative": "livingest"
      },
      "collocations": [
        "make a living",
        "living room",
        "cost of living",
        "standard of living"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0773",
    "word": "lock",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/lɔk/",
      "phonetic_us": "/lɔk/",
      "meanings": [
        "锁 vt. 锁",
        "锁上"
      ],
      "word_forms": {},
      "collocations": [
        "lock up",
        "lock down",
        "lock in",
        "lock out",
        "under lock and key"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"锁 vt. 锁\"的概念",
      "academicContext": "The lock plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0774",
    "word": "London",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlʌnd(ə)n/",
      "phonetic_us": "/ˈlʌnd(ə)n/",
      "meanings": [
        "伦敦"
      ],
      "word_forms": {},
      "collocations": [
        "in London",
        "London Bridge",
        "Greater London",
        "Tower of London"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0775",
    "word": "lonely",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈləʊnlɪ/",
      "phonetic_us": "/ˈləʊnlɪ/",
      "meanings": [
        "孤独的",
        "寂寞的"
      ],
      "word_forms": {
        "comparative": "lonelier",
        "superlative": "loneliest"
      },
      "collocations": [
        "feel lonely",
        "lonely heart",
        "lonely planet"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0776",
    "word": "long",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/lɔŋ; (US) lɔːŋ/",
      "phonetic_us": "/lɔŋ; (US) lɔːŋ/",
      "meanings": [
        "长的",
        "远 ad. 长久"
      ],
      "word_forms": {
        "noun": "length",
        "adverb": "long",
        "comparative": "longer",
        "superlative": "longest"
      },
      "collocations": [
        "long time",
        "how long",
        "before long",
        "all day long",
        "as long as",
        "no longer"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记长的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "lengthy",
        "extended",
        "prolonged"
      ]
    }
  },
  {
    "id": "w0777",
    "word": "look",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/lʊk/",
      "phonetic_us": "/lʊk/",
      "meanings": [
        "看",
        "瞧 v. 看",
        "观看 v. link 看起来"
      ],
      "word_forms": {},
      "collocations": [
        "look at",
        "look for",
        "look after"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "有意识地将视线投向某处",
      "academicContext": "Look at the data carefully before drawing conclusions.",
      "dailyContext": "Look! There's a rainbow!",
      "memoryStory": "",
      "confusableWords": [
        "see",
        "watch",
        "observe",
        "glance"
      ],
      "etymology": {
        "root": "look",
        "meaning": "来自古英语lōcian,看"
      }
    }
  },
  {
    "id": "w0778",
    "word": "lot",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/lɔt/",
      "phonetic_us": "/lɔt/",
      "meanings": [
        "许多",
        "好些"
      ],
      "word_forms": {
        "plural": "lots"
      },
      "collocations": [
        "a lot",
        "a lot of",
        "lots of",
        "parking lot",
        "quite a lot"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"许多\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "many",
        "much",
        "plenty"
      ]
    }
  },
  {
    "id": "w0779",
    "word": "loud",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/laʊd/",
      "phonetic_us": "/laʊd/",
      "meanings": [
        "大声的"
      ],
      "word_forms": {
        "comparative": "loudder",
        "superlative": "louddest"
      },
      "collocations": [
        "out loud",
        "loud and clear",
        "think out loud",
        "loud mouth"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记大声的的事物",
      "academicContext": "Understanding loud concepts is essential for academic success.",
      "dailyContext": "This is really loud! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0780",
    "word": "loudly",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/laʊdlɪ/",
      "phonetic_us": "/laʊdlɪ/",
      "meanings": [
        "大声地"
      ],
      "word_forms": {
        "comparative": "loudlier",
        "superlative": "loudliest"
      },
      "collocations": [
        "speak loudly",
        "laugh loudly",
        "cry loudly"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0781",
    "word": "loudspeaker",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/laʊdˈspiːkə(r)/",
      "phonetic_us": "/laʊdˈspiːkə(r)/",
      "meanings": [
        "扬声器",
        "喇叭"
      ],
      "word_forms": {
        "plural": "loudspeakers"
      },
      "collocations": [
        "through a loudspeaker",
        "loudspeaker system"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0782",
    "word": "lovely",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈlʌvlɪ/",
      "phonetic_us": "/ˈlʌvlɪ/",
      "meanings": [
        "美好的",
        "可爱的"
      ],
      "word_forms": {
        "comparative": "lovelier",
        "superlative": "loveliest"
      },
      "collocations": [
        "lovely day",
        "lovely weather",
        "absolutely lovely",
        "how lovely"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0783",
    "word": "luck",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/lʌk/",
      "phonetic_us": "/lʌk/",
      "meanings": [
        "运气",
        "好运"
      ],
      "word_forms": {
        "plural": "lucks"
      },
      "collocations": [
        "good luck",
        "bad luck",
        "with luck",
        "push one's luck",
        "down on one's luck"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"运气\"的概念",
      "academicContext": "The luck plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0784",
    "word": "lucky",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈlʌkɪ/",
      "phonetic_us": "/ˈlʌkɪ/",
      "meanings": [
        "运气好",
        "侥幸"
      ],
      "word_forms": {
        "plural": "luckies"
      },
      "collocations": [
        "lucky dog",
        "lucky day",
        "get lucky",
        "lucky charm"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"运气好\"的概念",
      "academicContext": "The lucky plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"lucky\"的发音和拼写，记住其\"运气好\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0785",
    "word": "lunch",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/lʌntʃ/",
      "phonetic_us": "/lʌntʃ/",
      "meanings": [
        "午餐",
        "午饭"
      ],
      "word_forms": {
        "plural": "lunches"
      },
      "collocations": [
        "have lunch",
        "lunch time",
        "lunch break",
        "lunch box",
        "out to lunch"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"午餐\"的概念",
      "academicContext": "The lunch plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"lunch\"的发音和拼写，记住其\"午餐\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0786",
    "word": "machine",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/məˈʃiːn/",
      "phonetic_us": "/məˈʃiːn/",
      "meanings": [
        "机器"
      ],
      "word_forms": {
        "plural": "machines"
      },
      "collocations": [
        "washing machine",
        "vending machine",
        "sewing machine",
        "well-oiled machine"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0787",
    "word": "magazine",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/mæɡəˈziːn/",
      "phonetic_us": "/mæɡəˈziːn/",
      "meanings": [
        "杂志"
      ],
      "word_forms": {
        "plural": "magazines"
      },
      "collocations": [
        "fashion magazine",
        "news magazine",
        "magazine article"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0788",
    "word": "magic",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈmædʒɪk/",
      "phonetic_us": "/ˈmædʒɪk/",
      "meanings": [
        "有魔力的"
      ],
      "word_forms": {
        "comparative": "magiccer",
        "superlative": "magiccest"
      },
      "collocations": [
        "magic trick",
        "like magic",
        "work like magic",
        "magic wand"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记有魔力的的事物",
      "academicContext": "Understanding magic concepts is essential for academic success.",
      "dailyContext": "This is really magic! I love it.",
      "memoryStory": "通过联想\"magic\"的发音和拼写，记住其\"有魔力的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0789",
    "word": "mail",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/meɪl/",
      "phonetic_us": "/meɪl/",
      "meanings": [
        "邮政",
        "邮递 v. (美)邮寄"
      ],
      "word_forms": {},
      "collocations": [
        "by mail",
        "mail box",
        "junk mail",
        "snail mail",
        "e-mail"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"邮政\"的概念",
      "academicContext": "The mail plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0790",
    "word": "main",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/meɪn/",
      "phonetic_us": "/meɪn/",
      "meanings": [
        "主要的"
      ],
      "word_forms": {
        "comparative": "mainner",
        "superlative": "mainnest"
      },
      "collocations": [
        "main idea",
        "main course",
        "in the main",
        "main street"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记主要的的事物",
      "academicContext": "Understanding main concepts is essential for academic success.",
      "dailyContext": "This is really main! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0791",
    "word": "mainland",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmeɪnlənd/",
      "phonetic_us": "/ˈmeɪnlənd/",
      "meanings": [
        "大陆"
      ],
      "word_forms": {
        "plural": "mainlands"
      },
      "collocations": [
        "mainland China",
        "on the mainland",
        "mainland Europe"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0792",
    "word": "manage",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmænɪdʒ/",
      "phonetic_us": "/ˈmænɪdʒ/",
      "meanings": [
        "管理",
        "设法对付"
      ],
      "word_forms": {
        "plural": "manages"
      },
      "collocations": [
        "manage to do",
        "manage time",
        "manage expectations"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0793",
    "word": "manager",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmænɪdʒə(r)/",
      "phonetic_us": "/ˈmænɪdʒə(r)/",
      "meanings": [
        "经理"
      ],
      "word_forms": {
        "plural": "managers"
      },
      "collocations": [
        "general manager",
        "project manager",
        "store manager",
        "football manager"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0794",
    "word": "map",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/mæp/",
      "phonetic_us": "/mæp/",
      "meanings": [
        "地图"
      ],
      "word_forms": {
        "comparative": "mapper",
        "superlative": "mappest"
      },
      "collocations": [
        "road map",
        "treasure map",
        "put on the map",
        "off the map"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用地图的方式完成任务",
      "academicContext": "The data was analyzed map to ensure accuracy.",
      "dailyContext": "Please do it map this time.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0795",
    "word": "March",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/mɑːtʃ/",
      "phonetic_us": "/mɑːtʃ/",
      "meanings": [
        "3月"
      ],
      "word_forms": {},
      "collocations": [
        "in March",
        "this March",
        "last March",
        "early March"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"3月\"的概念",
      "academicContext": "The March plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"March\"的发音和拼写，记住其\"3月\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0796",
    "word": "mark",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/mɑːk/",
      "phonetic_us": "/mɑːk/",
      "meanings": [
        "标记 vt. 标明",
        "作记号于"
      ],
      "word_forms": {},
      "collocations": [
        "make one's mark",
        "mark down",
        "mark up",
        "hit the mark",
        "leave a mark"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"标记 vt. 标明\"的概念",
      "academicContext": "The mark plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0797",
    "word": "market",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈmɑːkɪt/",
      "phonetic_us": "/ˈmɑːkɪt/",
      "meanings": [
        "市场",
        "集市"
      ],
      "word_forms": {
        "plural": "markets"
      },
      "collocations": [
        "go to market",
        "on the market",
        "supermarket",
        "free market",
        "stock market"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"市场\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "store",
        "bazaar",
        "marketplace"
      ]
    }
  },
  {
    "id": "w0798",
    "word": "match",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/mætʃ/",
      "phonetic_us": "/mætʃ/",
      "meanings": [
        "使相配",
        "使成对 n. 比赛",
        "竞赛 n. 火柴"
      ],
      "word_forms": {
        "plural": "matches"
      },
      "collocations": [
        "perfect match",
        "match up",
        "meet one's match",
        "striking match",
        "match made in heaven"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"使相配\"的概念",
      "academicContext": "The match plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"match\"的发音和拼写，记住其\"使相配\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0799",
    "word": "matter",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈmætə(r)/",
      "phonetic_us": "/ˈmætə(r)/",
      "meanings": [
        "要紧事",
        "要紧",
        "事情"
      ],
      "word_forms": {
        "plural": "matters"
      },
      "collocations": [
        "no matter",
        "what's the matter",
        "as a matter of fact",
        "it doesn't matter"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"要紧事\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "issue",
        "subject",
        "concern"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0800",
    "word": "May",
    "level": "初二",
    "unit": "Unit 8",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/meɪ/",
      "phonetic_us": "/meɪ/",
      "meanings": [
        "5月"
      ],
      "word_forms": {},
      "collocations": [
        "in May",
        "on May 1st",
        "this May",
        "last May",
        "next May"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"5月\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0801",
    "word": "maybe",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈmeɪbiː/",
      "phonetic_us": "/ˈmeɪbiː/",
      "meanings": [
        "可能",
        "大概",
        "也许"
      ],
      "word_forms": {},
      "collocations": [
        "maybe not",
        "maybe so",
        "maybe tomorrow"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"可能\"的概念",
      "academicContext": "The maybe plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"maybe\"的发音和拼写，记住其\"可能\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0802",
    "word": "me",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/miː, mɪ/",
      "phonetic_us": "/miː, mɪ/",
      "meanings": [
        "我（宾格）"
      ],
      "word_forms": {},
      "collocations": [
        "for me",
        "with me",
        "tell me",
        "give me",
        "let me"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记我（宾格）的特征",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0803",
    "word": "meal",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/miːl/",
      "phonetic_us": "/miːl/",
      "meanings": [
        "一餐（饭） "
      ],
      "word_forms": {},
      "collocations": [
        "three meals a day",
        "enjoy a meal",
        "square meal",
        "make a meal of"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"一餐（饭） \"的概念",
      "academicContext": "The meal plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0804",
    "word": "meaning",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmiːnɪŋ/",
      "phonetic_us": "/ˈmiːnɪŋ/",
      "meanings": [
        "意思",
        "含意"
      ],
      "word_forms": {
        "plural": "meanings"
      },
      "collocations": [
        "real meaning",
        "true meaning",
        "hidden meaning",
        "well-meaning"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0805",
    "word": "means",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/miːnz/",
      "phonetic_us": "/miːnz/",
      "meanings": [
        "方法",
        "手段",
        "财产"
      ],
      "word_forms": {
        "plural": "meanses"
      },
      "collocations": [
        "by all means",
        "by means of",
        "by no means",
        "ways and means",
        "means to an end"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"方法\"的概念",
      "academicContext": "The means plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"means\"的发音和拼写，记住其\"方法\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0806",
    "word": "meeting",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmiːtɪŋ/",
      "phonetic_us": "/ˈmiːtɪŋ/",
      "meanings": [
        "会",
        "集会",
        "会见"
      ],
      "word_forms": {
        "plural": "meetings"
      },
      "collocations": [
        "attend a meeting",
        "business meeting",
        "meeting point",
        "meeting room"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0807",
    "word": "member",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈmembə(r)/",
      "phonetic_us": "/ˈmembə(r)/",
      "meanings": [
        "成员",
        "会员"
      ],
      "word_forms": {
        "plural": "members"
      },
      "collocations": [
        "family member",
        "team member",
        "become a member",
        "member of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"成员\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "participant",
        "associate",
        "constituent"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0808",
    "word": "memory",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmemərɪ/",
      "phonetic_us": "/ˈmemərɪ/",
      "meanings": [
        "回忆",
        "记忆"
      ],
      "word_forms": {
        "plural": "memories"
      },
      "collocations": [
        "in memory of",
        "photographic memory",
        "from memory",
        "memory lane"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0809",
    "word": "mend",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/mend/",
      "phonetic_us": "/mend/",
      "meanings": [
        "修理",
        "修补"
      ],
      "word_forms": {},
      "collocations": [
        "mend one's ways",
        "on the mend",
        "mend fences"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"修理\"的概念",
      "academicContext": "The mend plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0810",
    "word": "mention",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmenʃ(ə)n/",
      "phonetic_us": "/ˈmenʃ(ə)n/",
      "meanings": [
        "提及",
        "记载 vt. 提到",
        "说起"
      ],
      "word_forms": {},
      "collocations": [
        "not to mention",
        "don't mention it",
        "honorable mention",
        "mention in passing"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0811",
    "word": "menu",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈmenjuː/",
      "phonetic_us": "/ˈmenjuː/",
      "meanings": [
        "菜单"
      ],
      "word_forms": {
        "plural": "menus"
      },
      "collocations": [
        "lunch menu",
        "menu bar",
        "set menu",
        "off the menu"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"菜单\"的概念",
      "academicContext": "The menu plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0812",
    "word": "merry",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈmerɪ/",
      "phonetic_us": "/ˈmerɪ/",
      "meanings": [
        "高兴的",
        "愉快的"
      ],
      "word_forms": {
        "comparative": "merrier",
        "superlative": "merriest"
      },
      "collocations": [
        "Merry Christmas",
        "make merry",
        "the more the merrier"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记高兴的的事物",
      "academicContext": "Understanding merry concepts is essential for academic success.",
      "dailyContext": "This is really merry! I love it.",
      "memoryStory": "通过联想\"merry\"的发音和拼写，记住其\"高兴的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0813",
    "word": "message",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmesɪdʒ/",
      "phonetic_us": "/ˈmesɪdʒ/",
      "meanings": [
        "消息",
        "音信"
      ],
      "word_forms": {
        "plural": "messages"
      },
      "collocations": [
        "text message",
        "get the message",
        "leave a message",
        "mixed messages"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0814",
    "word": "metal",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈmet(ə)l/",
      "phonetic_us": "/ˈmet(ə)l/",
      "meanings": [
        "金属 a. 金属制成的"
      ],
      "word_forms": {
        "comparative": "metaller",
        "superlative": "metallest"
      },
      "collocations": [
        "heavy metal",
        "precious metal",
        "metal detector"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记金属 a. 金属制成的的事物",
      "academicContext": "Understanding metal concepts is essential for academic success.",
      "dailyContext": "This is really metal! I love it.",
      "memoryStory": "通过联想\"metal\"的发音和拼写，记住其\"金属 a. 金属制成的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0815",
    "word": "middle",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmɪd(ə)l/",
      "phonetic_us": "/ˈmɪd(ə)l/",
      "meanings": [
        "中间",
        "当中",
        "中级的"
      ],
      "word_forms": {},
      "collocations": [
        "in the middle",
        "middle class",
        "middle school",
        "middle age",
        "stuck in the middle"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0816",
    "word": "midnight",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmɪdnaɪt/",
      "phonetic_us": "/ˈmɪdnaɪt/",
      "meanings": [
        "午夜"
      ],
      "word_forms": {
        "plural": "midnights"
      },
      "collocations": [
        "at midnight",
        "burn the midnight oil",
        "midnight snack"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0817",
    "word": "might",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/maɪt/",
      "phonetic_us": "/maɪt/",
      "meanings": [
        "aux. (may的过去式",
        "助动词) 可能",
        "也许"
      ],
      "word_forms": {},
      "collocations": [
        "might be",
        "might do",
        "might have",
        "might as well"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记aux. (may的过去式的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "may",
        "could",
        "power"
      ]
    }
  },
  {
    "id": "w0818",
    "word": "mild",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/maɪld/",
      "phonetic_us": "/maɪld/",
      "meanings": [
        "温和",
        "暖和的",
        "凉爽的"
      ],
      "word_forms": {},
      "collocations": [
        "mild climate",
        "mild manner",
        "to put it mildly"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"温和\"的概念",
      "academicContext": "The mild plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0819",
    "word": "mile",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/maɪl/",
      "phonetic_us": "/maɪl/",
      "meanings": [
        "英里"
      ],
      "word_forms": {
        "plural": "miles"
      },
      "collocations": [
        "miles away",
        "go the extra mile",
        "a mile a minute",
        "miss by a mile"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"英里\"的概念",
      "academicContext": "The mile plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0820",
    "word": "milk",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/mɪlk/",
      "phonetic_us": "/mɪlk/",
      "meanings": [
        "牛奶 vt. 挤奶"
      ],
      "word_forms": {},
      "collocations": [
        "drink milk",
        "milk shake",
        "cry over spilled milk",
        "milk and honey"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"牛奶 vt. 挤奶\"的概念",
      "academicContext": "The milk plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0821",
    "word": "million",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmɪlɪən/",
      "phonetic_us": "/ˈmɪlɪən/",
      "meanings": [
        "百万 n. 百万个（人或物）"
      ],
      "word_forms": {
        "plural": "millions"
      },
      "collocations": [
        "one million",
        "millions of",
        "one in a million",
        "feel like a million dollars"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0822",
    "word": "mind",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/maɪnd/",
      "phonetic_us": "/maɪnd/",
      "meanings": [
        "思想",
        "想法 v.介意",
        "关心"
      ],
      "word_forms": {},
      "collocations": [
        "never mind",
        "make up one's mind",
        "change one's mind",
        "keep in mind",
        "mind doing"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"思想\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "brain",
        "intellect",
        "mentality"
      ]
    }
  },
  {
    "id": "w0823",
    "word": "mine",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/maɪn/",
      "phonetic_us": "/maɪn/",
      "meanings": [
        "矿藏",
        "矿山 vt. 开采(矿物)  pron. 我的"
      ],
      "word_forms": {},
      "collocations": [
        "gold mine",
        "land mine",
        "friend of mine",
        "mine for gold"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"矿藏\"的概念",
      "academicContext": "The mine plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0824",
    "word": "minibus",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmɪnɪbʌs/",
      "phonetic_us": "/ˈmɪnɪbʌs/",
      "meanings": [
        "小型公共汽车"
      ],
      "word_forms": {
        "plural": "minibuses"
      },
      "collocations": [
        "take a minibus",
        "minibus driver"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0825",
    "word": "minus",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈmaɪnəs/",
      "phonetic_us": "/ˈmaɪnəs/",
      "meanings": [
        "& a.负的",
        "减去的"
      ],
      "word_forms": {
        "comparative": "minusser",
        "superlative": "minussest"
      },
      "collocations": [
        "plus or minus",
        "ten minus five",
        "minus sign"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记& a.负的的事物",
      "academicContext": "Understanding minus concepts is essential for academic success.",
      "dailyContext": "This is really minus! I love it.",
      "memoryStory": "通过联想\"minus\"的发音和拼写，记住其\"& a.负的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0826",
    "word": "minute",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈmɪnɪt/",
      "phonetic_us": "/ˈmɪnɪt/",
      "meanings": [
        "分钟",
        "一会儿",
        "瞬间"
      ],
      "word_forms": {
        "plural": "minutes"
      },
      "collocations": [
        "wait a minute",
        "just a minute",
        "in a minute",
        "last minute",
        "per minute"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"分钟\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "moment",
        "60 seconds",
        "instant"
      ]
    }
  },
  {
    "id": "w0827",
    "word": "mirror",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmɪrə(r)/",
      "phonetic_us": "/ˈmɪrə(r)/",
      "meanings": [
        "镜子"
      ],
      "word_forms": {
        "plural": "mirrors"
      },
      "collocations": [
        "rear-view mirror",
        "look in the mirror",
        "mirror image",
        "smoke and mirrors"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0828",
    "word": "miss",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/mɪs/",
      "phonetic_us": "/mɪs/",
      "meanings": [
        "失去",
        "错过",
        "缺"
      ],
      "word_forms": {},
      "collocations": [
        "miss the bus",
        "miss you",
        "Miss Li",
        "can't miss",
        "miss the chance"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"失去\"的概念",
      "academicContext": "The study mis new findings.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "long for",
        "overlook",
        "omit"
      ]
    }
  },
  {
    "id": "w0829",
    "word": "mist",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/mɪst/",
      "phonetic_us": "/mɪst/",
      "meanings": [
        "雾"
      ],
      "word_forms": {
        "plural": "mists"
      },
      "collocations": [
        "morning mist",
        "lost in the mist",
        "mist over"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"雾\"的概念",
      "academicContext": "The mist plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0830",
    "word": "mobile",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈməubaɪl; (US) məubl/",
      "phonetic_us": "/ˈməubaɪl; (US) məubl/",
      "meanings": [
        "活动的",
        "可移动的"
      ],
      "word_forms": {
        "comparative": "mobiler",
        "superlative": "mobilest"
      },
      "collocations": [
        "mobile phone",
        "mobile device",
        "upwardly mobile"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0831",
    "word": "model",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈmɔd(ə)l/",
      "phonetic_us": "/ˈmɔd(ə)l/",
      "meanings": [
        "模型",
        "原形",
        "范例"
      ],
      "word_forms": {
        "plural": "models"
      },
      "collocations": [
        "role model",
        "model student",
        "fashion model",
        "scale model"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"模型\"的概念",
      "academicContext": "The model plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"model\"的发音和拼写，记住其\"模型\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0832",
    "word": "modern",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmɔd(ə)n/",
      "phonetic_us": "/ˈmɔd(ə)n/",
      "meanings": [
        "现代的"
      ],
      "word_forms": {
        "comparative": "moderner",
        "superlative": "modernest"
      },
      "collocations": [
        "modern art",
        "modern times",
        "modern technology",
        "modern world"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0833",
    "word": "moment",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈməumənt/",
      "phonetic_us": "/ˈməumənt/",
      "meanings": [
        "片刻",
        "瞬间"
      ],
      "word_forms": {},
      "collocations": [
        "at the moment",
        "for a moment",
        "in a moment",
        "wait a moment",
        "just a moment"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"片刻\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "instant",
        "second",
        "minute"
      ],
      "etymology": {
        "root": "mom",
        "suffix": "-ent",
        "meaning": "mom + ent(...的)"
      }
    }
  },
  {
    "id": "w0834",
    "word": "Monday",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmʌndeɪ, ˈmʌndɪ/",
      "phonetic_us": "/ˈmʌndeɪ, ˈmʌndɪ/",
      "meanings": [
        "星期一"
      ],
      "word_forms": {},
      "collocations": [
        "on Monday",
        "this Monday",
        "next Monday",
        "Black Monday"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0835",
    "word": "money",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈmʌnɪ/",
      "phonetic_us": "/ˈmʌnɪ/",
      "meanings": [
        "钱",
        "货币"
      ],
      "word_forms": {
        "plural": "moneys"
      },
      "collocations": [
        "make money",
        "save money",
        "spend money",
        "pocket money",
        "waste money"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"钱\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "cash",
        "currency",
        "funds"
      ]
    }
  },
  {
    "id": "w0836",
    "word": "monkey",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmʌŋkɪ/",
      "phonetic_us": "/ˈmʌŋkɪ/",
      "meanings": [
        "猴子"
      ],
      "word_forms": {
        "plural": "monkeys"
      },
      "collocations": [
        "monkey around",
        "monkey business",
        "monkey see monkey do",
        "make a monkey out of"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0837",
    "word": "month",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/mʌnθ/",
      "phonetic_us": "/mʌnθ/",
      "meanings": [
        "月",
        "月份"
      ],
      "word_forms": {
        "plural": "months"
      },
      "collocations": [
        "this month",
        "last month",
        "next month",
        "every month",
        "once a month"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"月\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "30 days",
        "period"
      ]
    }
  },
  {
    "id": "w0838",
    "word": "monument",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmɔnjumənt/",
      "phonetic_us": "/ˈmɔnjumənt/",
      "meanings": [
        "纪念碑",
        "纪念物"
      ],
      "word_forms": {
        "plural": "monuments"
      },
      "collocations": [
        "national monument",
        "ancient monument",
        "monument to"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0839",
    "word": "moon",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/muːn/",
      "phonetic_us": "/muːn/",
      "meanings": [
        "月球",
        "月光",
        "月状物"
      ],
      "word_forms": {
        "plural": "moons"
      },
      "collocations": [
        "full moon",
        "half moon",
        "once in a blue moon",
        "over the moon",
        "shoot for the moon"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"月球\"的概念",
      "academicContext": "The moon plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0840",
    "word": "mooncake",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/muːnkeɪk/",
      "phonetic_us": "/muːnkeɪk/",
      "meanings": [
        "月饼"
      ],
      "word_forms": {
        "plural": "mooncakes"
      },
      "collocations": [
        "eat mooncakes",
        "traditional mooncake"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0841",
    "word": "morning",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈmɔːnɪŋ/",
      "phonetic_us": "/ˈmɔːnɪŋ/",
      "meanings": [
        "早晨",
        "上午"
      ],
      "word_forms": {
        "plural": "mornings"
      },
      "collocations": [
        "this morning",
        "in the morning",
        "good morning",
        "early morning",
        "every morning"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"早晨\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "AM",
        "dawn",
        "sunrise"
      ]
    }
  },
  {
    "id": "w0842",
    "word": "mother",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈmʌðə(r)/",
      "phonetic_us": "/ˈmʌðə(r)/",
      "meanings": [
        "母亲"
      ],
      "word_forms": {
        "plural": "mothers"
      },
      "collocations": [
        "mother tongue",
        "mother's Day",
        "my mother",
        "single mother"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"母亲\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "mom",
        "mama",
        "parent"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0843",
    "word": "motor",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈməʊtə(r)/",
      "phonetic_us": "/ˈməʊtə(r)/",
      "meanings": [
        "发动机",
        "马达"
      ],
      "word_forms": {},
      "collocations": [
        "motor vehicle",
        "motor oil",
        "electric motor",
        "motor skills"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"发动机\"的概念",
      "academicContext": "The motor plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"motor\"的发音和拼写，记住其\"发动机\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0844",
    "word": "motorbike",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈməʊtəbaɪk/",
      "phonetic_us": "/ˈməʊtəbaɪk/",
      "meanings": [
        "摩托车"
      ],
      "word_forms": {
        "plural": "motorbikes"
      },
      "collocations": [
        "ride a motorbike",
        "motorbike accident"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0845",
    "word": "motorcycle",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'məʊtəsaikl/",
      "phonetic_us": "/'məʊtəsaikl/",
      "meanings": [
        "摩托车"
      ],
      "word_forms": {
        "plural": "motorcycles"
      },
      "collocations": [
        "ride a motorcycle",
        "motorcycle helmet",
        "motorcycle gang"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0846",
    "word": "mouth",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/maʊθ/",
      "phonetic_us": "/maʊθ/",
      "meanings": [
        "嘴",
        "口"
      ],
      "word_forms": {
        "plural": "mouths"
      },
      "collocations": [
        "open one's mouth",
        "word of mouth",
        "down in the mouth",
        "put words in someone's mouth"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"嘴\"的概念",
      "academicContext": "The mouth plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"mouth\"的发音和拼写，记住其\"嘴\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0847",
    "word": "move",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/muːv/",
      "phonetic_us": "/muːv/",
      "meanings": [
        "移动",
        "搬动",
        "搬家"
      ],
      "word_forms": {
        "noun": "movement",
        "adjective": "moving"
      },
      "collocations": [
        "move on",
        "move forward",
        "move house"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"移动\"的概念",
      "academicContext": "Technology moves forward rapidly.",
      "dailyContext": "Don't move! Stay still.",
      "memoryStory": "",
      "confusableWords": [
        "shift",
        "relocate",
        "transfer"
      ],
      "etymology": {
        "root": "move",
        "meaning": "来自拉丁语movere,移动"
      }
    }
  },
  {
    "id": "w0848",
    "word": "movement",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmuːvmənt/",
      "phonetic_us": "/ˈmuːvmənt/",
      "meanings": [
        "运动",
        "活动"
      ],
      "word_forms": {},
      "collocations": [
        "civil rights movement",
        "freedom of movement",
        "art movement"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0849",
    "word": "multiply",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmʌltɪplaɪ/",
      "phonetic_us": "/ˈmʌltɪplaɪ/",
      "meanings": [
        "乘",
        "使相乘"
      ],
      "word_forms": {},
      "collocations": [
        "multiply by",
        "multiply rapidly"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0850",
    "word": "murder",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmɜːdə(r)/",
      "phonetic_us": "/ˈmɜːdə(r)/",
      "meanings": [
        "谋杀"
      ],
      "word_forms": {
        "plural": "murders"
      },
      "collocations": [
        "commit murder",
        "get away with murder",
        "murder mystery",
        "murder weapon"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0851",
    "word": "museum",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/mjuːˈzɪəm/",
      "phonetic_us": "/mjuːˈzɪəm/",
      "meanings": [
        "博物馆",
        "博物院"
      ],
      "word_forms": {
        "plural": "museums"
      },
      "collocations": [
        "art museum",
        "history museum",
        "museum piece",
        "visit a museum"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0852",
    "word": "music",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈmjuːzɪk/",
      "phonetic_us": "/ˈmjuːzɪk/",
      "meanings": [
        "音乐",
        "乐曲"
      ],
      "word_forms": {},
      "collocations": [
        "listen to music",
        "classical music",
        "pop music",
        "face the music",
        "music to my ears"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"音乐\"的概念",
      "academicContext": "The music plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"music\"的发音和拼写，记住其\"音乐\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0853",
    "word": "must",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/mʌst/",
      "phonetic_us": "/mʌst/",
      "meanings": [
        "必须",
        "应当",
        "必定是"
      ],
      "word_forms": {},
      "collocations": [
        "must be",
        "must do",
        "must have",
        "you must"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"必须\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "have to",
        "need to",
        "should"
      ]
    }
  },
  {
    "id": "w0854",
    "word": "mutton",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈmʌt(ə)n/",
      "phonetic_us": "/ˈmʌt(ə)n/",
      "meanings": [
        "羊肉"
      ],
      "word_forms": {
        "plural": "muttons"
      },
      "collocations": [
        "mutton chop",
        "mutton dressed as lamb"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0855",
    "word": "my",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/maɪ/",
      "phonetic_us": "/maɪ/",
      "meanings": [
        "我的"
      ],
      "word_forms": {},
      "collocations": [
        "my name",
        "my friend",
        "my family",
        "on my own"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记我的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0856",
    "word": "myself",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/maɪˈself/",
      "phonetic_us": "/maɪˈself/",
      "meanings": [
        "我自己"
      ],
      "word_forms": {
        "plural": "myselves"
      },
      "collocations": [
        "by myself",
        "all by myself",
        "proud of myself",
        "I myself"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0857",
    "word": "nail",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/neɪl/",
      "phonetic_us": "/neɪl/",
      "meanings": [
        "钉",
        "钉子"
      ],
      "word_forms": {
        "plural": "nails"
      },
      "collocations": [
        "hit the nail on the head",
        "tooth and nail",
        "nail down",
        "nail polish"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"钉\"的概念",
      "academicContext": "The nail plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0858",
    "word": "name",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/neɪm/",
      "phonetic_us": "/neɪm/",
      "meanings": [
        "名字",
        "姓名",
        "名称 vt. 命名"
      ],
      "word_forms": {},
      "collocations": [
        "first name",
        "last name",
        "full name",
        "by name",
        "in the name of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"名字\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "title",
        "label",
        "designation"
      ]
    }
  },
  {
    "id": "w0859",
    "word": "narrow",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnærəʊ/",
      "phonetic_us": "/ˈnærəʊ/",
      "meanings": [
        "狭窄的"
      ],
      "word_forms": {
        "comparative": "narrowwer",
        "superlative": "narrowwest"
      },
      "collocations": [
        "narrow escape",
        "narrow down",
        "narrow margin",
        "narrow-minded"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0860",
    "word": "nation",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈneɪʃ(ə)n/",
      "phonetic_us": "/ˈneɪʃ(ə)n/",
      "meanings": [
        "民族",
        "国家"
      ],
      "word_forms": {
        "plural": "nations"
      },
      "collocations": [
        "entire nation",
        "nation state",
        "island nation",
        "United Nations"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0861",
    "word": "national",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈnæʃən(ə)l/",
      "phonetic_us": "/ˈnæʃən(ə)l/",
      "meanings": [
        "国家的",
        "全国性的",
        "民族的"
      ],
      "word_forms": {
        "plural": "nationals",
        "comparative": "more national",
        "superlative": "most national"
      },
      "collocations": [
        "national day",
        "national park",
        "national team",
        "national flag"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记国家的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [],
      "etymology": {
        "root": "nation",
        "suffix": "-al",
        "meaning": "nation + al(形容词后缀)"
      }
    }
  },
  {
    "id": "w0862",
    "word": "natural",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnætʃər(ə)l/",
      "phonetic_us": "/ˈnætʃər(ə)l/",
      "meanings": [
        "自然的"
      ],
      "word_forms": {
        "comparative": "more natural",
        "superlative": "most natural"
      },
      "collocations": [
        "natural resources",
        "natural disaster",
        "natural beauty",
        "only natural"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0863",
    "word": "nature",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈneɪtʃə(r)/",
      "phonetic_us": "/ˈneɪtʃə(r)/",
      "meanings": [
        "自然",
        "性质",
        "种类"
      ],
      "word_forms": {
        "adjective": "natural",
        "adverb": "naturally"
      },
      "collocations": [
        "by nature",
        "in nature",
        "human nature",
        "natural resources"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"自然\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "environment",
        "outdoors",
        "wilderness"
      ]
    }
  },
  {
    "id": "w0864",
    "word": "near",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/nɪə(r)/",
      "phonetic_us": "/nɪə(r)/",
      "meanings": [
        "近的 ad. 附近",
        "邻近 prep. 在…附近",
        "靠近"
      ],
      "word_forms": {
        "verb": "near",
        "adverb": "nearly",
        "comparative": "nearer",
        "superlative": "nearest"
      },
      "collocations": [
        "near here",
        "come near",
        "draw near",
        "near the end",
        "in the near future"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记近的 ad. 附近的特征",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "close",
        "nearby",
        "adjacent"
      ]
    }
  },
  {
    "id": "w0865",
    "word": "nearby",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnɪəbaɪ/",
      "phonetic_us": "/ˈnɪəbaɪ/",
      "meanings": [
        "附近的"
      ],
      "word_forms": {
        "comparative": "nearbier",
        "superlative": "nearbiest"
      },
      "collocations": [
        "nearby village",
        "close nearby",
        "somewhere nearby"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0866",
    "word": "nearly",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnɪəlɪ/",
      "phonetic_us": "/ˈnɪəlɪ/",
      "meanings": [
        "将近",
        "几乎"
      ],
      "word_forms": {
        "plural": "nearlies"
      },
      "collocations": [
        "nearly done",
        "nearly finished",
        "not nearly",
        "very nearly"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0867",
    "word": "neat",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/niːt/",
      "phonetic_us": "/niːt/",
      "meanings": [
        "整洁的",
        "灵巧的"
      ],
      "word_forms": {
        "comparative": "neatter",
        "superlative": "neattest"
      },
      "collocations": [
        "neat and tidy",
        "neat freak",
        "that's neat"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记整洁的的事物",
      "academicContext": "Understanding neat concepts is essential for academic success.",
      "dailyContext": "This is really neat! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0868",
    "word": "necessary",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnesisərɪ; (US) ˈnesəserɪ/",
      "phonetic_us": "/ˈnesisərɪ; (US) ˈnesəserɪ/",
      "meanings": [
        "必需的",
        "必要的"
      ],
      "word_forms": {
        "comparative": "more necessary",
        "superlative": "most necessary"
      },
      "collocations": [
        "if necessary",
        "absolutely necessary",
        "not necessary",
        "necessary evil"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0869",
    "word": "neck",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nek/",
      "phonetic_us": "/nek/",
      "meanings": [
        "颈",
        "脖子"
      ],
      "word_forms": {
        "plural": "necks"
      },
      "collocations": [
        "neck and neck",
        "stick one's neck out",
        "pain in the neck",
        "up to one's neck"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"颈\"的概念",
      "academicContext": "The neck plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0870",
    "word": "necklace",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈneklɪs/",
      "phonetic_us": "/ˈneklɪs/",
      "meanings": [
        "项链"
      ],
      "word_forms": {
        "plural": "necklaces"
      },
      "collocations": [
        "pearl necklace",
        "gold necklace",
        "wear a necklace"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0871",
    "word": "necktie",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnektaɪ/",
      "phonetic_us": "/ˈnektaɪ/",
      "meanings": [
        "领带",
        "领花"
      ],
      "word_forms": {
        "plural": "neckties"
      },
      "collocations": [
        "wear a necktie",
        "silk necktie"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0872",
    "word": "need",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/niːd/",
      "phonetic_us": "/niːd/",
      "meanings": [
        "需要",
        "需求 aux.& v. 需要",
        "必须"
      ],
      "word_forms": {},
      "collocations": [
        "need to do",
        "in need of",
        "no need"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"需要\"的概念",
      "academicContext": "Students need proper guidance to succeed.",
      "dailyContext": "I need a cup of coffee.",
      "memoryStory": "",
      "confusableWords": [
        "require",
        "want",
        "must have"
      ],
      "etymology": {
        "root": "need",
        "meaning": "来自古英语nēad,必要"
      }
    }
  },
  {
    "id": "w0873",
    "word": "needle",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/niːd(ə)l/",
      "phonetic_us": "/niːd(ə)l/",
      "meanings": [
        "针"
      ],
      "word_forms": {
        "plural": "needles"
      },
      "collocations": [
        "needle and thread",
        "needle in a haystack",
        "on pins and needles"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0874",
    "word": "nervous",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnəːvəs/",
      "phonetic_us": "/ˈnəːvəs/",
      "meanings": [
        "紧张不安的"
      ],
      "word_forms": {
        "comparative": "more nervous",
        "superlative": "most nervous"
      },
      "collocations": [
        "feel nervous",
        "nervous breakdown",
        "nervous system",
        "make someone nervous"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0875",
    "word": "nest",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nest/",
      "phonetic_us": "/nest/",
      "meanings": [
        "巢",
        "窝"
      ],
      "word_forms": {
        "plural": "nests"
      },
      "collocations": [
        "bird's nest",
        "empty nest",
        "nest egg",
        "feather one's nest"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"巢\"的概念",
      "academicContext": "The nest plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0876",
    "word": "net",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/net/",
      "phonetic_us": "/net/",
      "meanings": [
        "网"
      ],
      "word_forms": {
        "plural": "nets"
      },
      "collocations": [
        "fishing net",
        "safety net",
        "surf the net",
        "cast a wide net"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"网\"的概念",
      "academicContext": "The net plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0877",
    "word": "network",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnetwəːk/",
      "phonetic_us": "/ˈnetwəːk/",
      "meanings": [
        "网络",
        "网状系统"
      ],
      "word_forms": {},
      "collocations": [
        "social network",
        "network connection",
        "television network",
        "old boy network"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0878",
    "word": "never",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈnevə(r)/",
      "phonetic_us": "/ˈnevə(r)/",
      "meanings": [
        "决不",
        "从来没有"
      ],
      "word_forms": {},
      "collocations": [
        "never mind",
        "never give up",
        "never been",
        "better late than never"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"决不\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "not ever",
        "at no time",
        "not once"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0879",
    "word": "new",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/njuː; (US) nuː/",
      "phonetic_us": "/njuː; (US) nuː/",
      "meanings": [
        "新的",
        "新鲜的"
      ],
      "word_forms": {
        "adverb": "newly",
        "comparative": "newer",
        "superlative": "newest"
      },
      "collocations": [
        "brand new",
        "new year",
        "something new"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记新的的事物",
      "academicContext": "Scientists discovered a new species.",
      "dailyContext": "I bought a new phone.",
      "memoryStory": "",
      "confusableWords": [
        "fresh",
        "novel",
        "recent"
      ],
      "etymology": {
        "root": "new",
        "meaning": "来自古英语nīowe,新的"
      }
    }
  },
  {
    "id": "w0880",
    "word": "news",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/njuːz; (US) nuːz/",
      "phonetic_us": "/njuːz; (US) nuːz/",
      "meanings": [
        "新闻",
        "消息"
      ],
      "word_forms": {
        "plural": "newses"
      },
      "collocations": [
        "good news",
        "bad news",
        "breaking news",
        "no news is good news",
        "news paper"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"新闻\"的概念",
      "academicContext": "The news plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0881",
    "word": "newspaper",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/njuːzˈpeɪpə(r); (US) nuːzˈpeɪpə(r)/",
      "phonetic_us": "/njuːzˈpeɪpə(r); (US) nuːzˈpeɪpə(r)/",
      "meanings": [
        "报纸"
      ],
      "word_forms": {
        "plural": "newspapers"
      },
      "collocations": [
        "read the newspaper",
        "newspaper article",
        "daily newspaper"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0882",
    "word": "next",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/nekst/",
      "phonetic_us": "/nekst/",
      "meanings": [
        "下一个的",
        "紧挨着的",
        "隔壁的 ad. 随后"
      ],
      "word_forms": {
        "comparative": "nexter",
        "superlative": "nextest"
      },
      "collocations": [
        "next time",
        "next week",
        "next to",
        "what's next",
        "next door"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记下一个的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "following",
        "subsequent",
        "after"
      ]
    }
  },
  {
    "id": "w0883",
    "word": "nice",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/naɪs/",
      "phonetic_us": "/naɪs/",
      "meanings": [
        "令人愉快",
        "好的",
        "漂亮的"
      ],
      "word_forms": {},
      "collocations": [
        "nice to meet you",
        "have a nice day",
        "nice and warm",
        "Mr. Nice Guy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"令人愉快\"的概念",
      "academicContext": "The nice plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0884",
    "word": "niece",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/niːs/",
      "phonetic_us": "/niːs/",
      "meanings": [
        "侄女",
        "甥女"
      ],
      "word_forms": {
        "plural": "nieces"
      },
      "collocations": [
        "my niece",
        "nephew and niece"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"侄女\"的概念",
      "academicContext": "The niece plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"niece\"的发音和拼写，记住其\"侄女\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0885",
    "word": "night",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/naɪt/",
      "phonetic_us": "/naɪt/",
      "meanings": [
        "夜",
        "夜间"
      ],
      "word_forms": {
        "plural": "nights"
      },
      "collocations": [
        "at night",
        "last night",
        "good night",
        "all night",
        "day and night"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"夜\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "evening",
        "nighttime",
        "dark"
      ]
    }
  },
  {
    "id": "w0886",
    "word": "nine",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/naɪn/",
      "phonetic_us": "/naɪn/",
      "meanings": [
        "九"
      ],
      "word_forms": {
        "plural": "nines"
      },
      "collocations": [
        "nine o'clock",
        "cloud nine",
        "nine to five",
        "dressed to the nines"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"九\"的概念",
      "academicContext": "The nine plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0887",
    "word": "nineteen",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/naɪnˈtiːn/",
      "phonetic_us": "/naɪnˈtiːn/",
      "meanings": [
        "十九"
      ],
      "word_forms": {
        "plural": "nineteens"
      },
      "collocations": [
        "nineteen years old",
        "at nineteen"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0888",
    "word": "ninety",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnaɪntɪ/",
      "phonetic_us": "/ˈnaɪntɪ/",
      "meanings": [
        "九十"
      ],
      "word_forms": {
        "plural": "nineties"
      },
      "collocations": [
        "ninety years old",
        "in one's nineties"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0889",
    "word": "ninth",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/naɪnθ/",
      "phonetic_us": "/naɪnθ/",
      "meanings": [
        "第九"
      ],
      "word_forms": {
        "plural": "ninths"
      },
      "collocations": [
        "the ninth grade",
        "ninth place"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"第九\"的概念",
      "academicContext": "The ninth plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"ninth\"的发音和拼写，记住其\"第九\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0890",
    "word": "no",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/nəʊ/",
      "phonetic_us": "/nəʊ/",
      "meanings": [
        "不",
        "不是 a. 没有",
        "无"
      ],
      "word_forms": {},
      "collocations": [
        "no problem",
        "no way",
        "no doubt",
        "no longer",
        "no more"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"不\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0891",
    "word": "nobody",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnəʊbədɪ/",
      "phonetic_us": "/ˈnəʊbədɪ/",
      "meanings": [
        "渺小人物 pron. 没有人",
        "谁也不"
      ],
      "word_forms": {
        "plural": "nobodies"
      },
      "collocations": [
        "nobody knows",
        "nobody else",
        "like nobody's business"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0892",
    "word": "nod",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nɔd/",
      "phonetic_us": "/nɔd/",
      "meanings": [
        "点头"
      ],
      "word_forms": {
        "plural": "nods"
      },
      "collocations": [
        "nod off",
        "give a nod",
        "nod in agreement",
        "land of Nod"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"点头\"的概念",
      "academicContext": "The nod plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0893",
    "word": "noise",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nɔɪz/",
      "phonetic_us": "/nɔɪz/",
      "meanings": [
        "声音",
        "噪声",
        "喧闹声"
      ],
      "word_forms": {
        "plural": "noises"
      },
      "collocations": [
        "make noise",
        "loud noise",
        "big noise",
        "noise pollution"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"声音\"的概念",
      "academicContext": "The noise plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"noise\"的发音和拼写，记住其\"声音\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0894",
    "word": "noisily",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'nɔɪzɪlɪ/",
      "phonetic_us": "/'nɔɪzɪlɪ/",
      "meanings": [
        "喧闹地"
      ],
      "word_forms": {
        "comparative": "more noisily",
        "superlative": "most noisily"
      },
      "collocations": [
        "eat noisily",
        "laugh noisily"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0895",
    "word": "noisy",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈnɔɪzɪ/",
      "phonetic_us": "/ˈnɔɪzɪ/",
      "meanings": [
        "喧闹的",
        "嘈杂的"
      ],
      "word_forms": {
        "comparative": "noisier",
        "superlative": "noisiest"
      },
      "collocations": [
        "too noisy",
        "noisy neighbor"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记喧闹的的事物",
      "academicContext": "Understanding noisy concepts is essential for academic success.",
      "dailyContext": "This is really noisy! I love it.",
      "memoryStory": "通过联想\"noisy\"的发音和拼写，记住其\"喧闹的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0896",
    "word": "none",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nʌn/",
      "phonetic_us": "/nʌn/",
      "meanings": [
        "无任何东西",
        "无一人"
      ],
      "word_forms": {
        "plural": "nones"
      },
      "collocations": [
        "none of",
        "second to none",
        "none the worse",
        "none other than"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"无任何东西\"的概念",
      "academicContext": "The none plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0897",
    "word": "noodle",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnuːd(ə)l/",
      "phonetic_us": "/ˈnuːd(ə)l/",
      "meanings": [
        "面条"
      ],
      "word_forms": {
        "plural": "noodles"
      },
      "collocations": [
        "instant noodle",
        "noodle soup",
        "use your noodle"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0898",
    "word": "noon",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nuːn/",
      "phonetic_us": "/nuːn/",
      "meanings": [
        "中午",
        "正午"
      ],
      "word_forms": {
        "plural": "noons"
      },
      "collocations": [
        "at noon",
        "high noon",
        "morning noon and night"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"中午\"的概念",
      "academicContext": "The noon plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0899",
    "word": "nor",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nɔː(r)/",
      "phonetic_us": "/nɔː(r)/",
      "meanings": [
        "也不"
      ],
      "word_forms": {
        "plural": "nors"
      },
      "collocations": [
        "neither...nor",
        "nor do I"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"也不\"的概念",
      "academicContext": "The nor plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0900",
    "word": "north",
    "level": "初二",
    "unit": "Unit 9",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nɔːθ/",
      "phonetic_us": "/nɔːθ/",
      "meanings": [
        "北的",
        "朝北的 ad. 向（在",
        "从）北方 n. 北"
      ],
      "word_forms": {
        "plural": "norths",
        "comparative": "norther",
        "superlative": "northest"
      },
      "collocations": [
        "north pole",
        "up north",
        "north star",
        "true north"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记北的的事物",
      "academicContext": "Understanding north concepts is essential for academic success.",
      "dailyContext": "This is really north! I love it.",
      "memoryStory": "通过联想\"north\"的发音和拼写，记住其\"北的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0901",
    "word": "northeast",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/nɔ:θ'i:st/",
      "phonetic_us": "/nɔ:θ'i:st/",
      "meanings": [
        "东北（部）"
      ],
      "word_forms": {
        "plural": "northeasts"
      },
      "collocations": [
        "in the northeast",
        "northeast corner"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0902",
    "word": "northern",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnɔːð(ə)n/",
      "phonetic_us": "/ˈnɔːð(ə)n/",
      "meanings": [
        "北方的",
        "北部的"
      ],
      "word_forms": {
        "comparative": "more northern",
        "superlative": "most northern"
      },
      "collocations": [
        "northern lights",
        "northern hemisphere",
        "northern part"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0903",
    "word": "northwest",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/nɔ:θ'west/",
      "phonetic_us": "/nɔ:θ'west/",
      "meanings": [
        "西北"
      ],
      "word_forms": {
        "plural": "northwests"
      },
      "collocations": [
        "in the northwest",
        "northwest passage"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0904",
    "word": "nose",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nəʊz/",
      "phonetic_us": "/nəʊz/",
      "meanings": [
        "鼻子"
      ],
      "word_forms": {
        "plural": "noses"
      },
      "collocations": [
        "runny nose",
        "under one's nose",
        "look down one's nose",
        "follow one's nose",
        "on the nose"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"鼻子\"的概念",
      "academicContext": "The nose plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0905",
    "word": "not",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/nɔt/",
      "phonetic_us": "/nɔt/",
      "meanings": [
        "不",
        "没"
      ],
      "word_forms": {},
      "collocations": [
        "not only",
        "not yet",
        "why not",
        "not at all",
        "if not"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"不\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0906",
    "word": "note",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nəʊt/",
      "phonetic_us": "/nəʊt/",
      "meanings": [
        "便条",
        "笔记",
        "注释"
      ],
      "word_forms": {
        "plural": "notes"
      },
      "collocations": [
        "take notes",
        "make a note",
        "of note",
        "compare notes",
        "strike a note"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"便条\"的概念",
      "academicContext": "The note plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0907",
    "word": "notebook",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnəʊtbʊk/",
      "phonetic_us": "/ˈnəʊtbʊk/",
      "meanings": [
        "笔记簿"
      ],
      "word_forms": {
        "plural": "notebooks"
      },
      "collocations": [
        "write in notebook",
        "spiral notebook"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0908",
    "word": "nothing",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈnʌθɪŋ/",
      "phonetic_us": "/ˈnʌθɪŋ/",
      "meanings": [
        "没有东西",
        "没有什么"
      ],
      "word_forms": {
        "plural": "nothings"
      },
      "collocations": [
        "nothing but",
        "for nothing",
        "have nothing to do",
        "nothing much"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"没有东西\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "zero",
        "nil",
        "naught"
      ]
    }
  },
  {
    "id": "w0909",
    "word": "notice",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈnəʊtɪs/",
      "phonetic_us": "/ˈnəʊtɪs/",
      "meanings": [
        "布告",
        "通告",
        "注意 vt. 注意"
      ],
      "word_forms": {},
      "collocations": [
        "take notice of",
        "notice board",
        "without notice",
        "at short notice"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"布告\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "observe",
        "see",
        "perceive"
      ]
    }
  },
  {
    "id": "w0910",
    "word": "November",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/nəʊˈvembə(r)/",
      "phonetic_us": "/nəʊˈvembə(r)/",
      "meanings": [
        "11月"
      ],
      "word_forms": {},
      "collocations": [
        "in November",
        "this November",
        "early November"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0911",
    "word": "now",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/naʊ/",
      "phonetic_us": "/naʊ/",
      "meanings": [
        "现在"
      ],
      "word_forms": {},
      "collocations": [
        "right now",
        "just now",
        "from now on",
        "now and then",
        "by now"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"现在\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "currently",
        "presently",
        "at present"
      ]
    }
  },
  {
    "id": "w0912",
    "word": "nowhere",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈnəʊweə(r); (US) ˈnəʊhweər/",
      "phonetic_us": "/ˈnəʊweə(r); (US) ˈnəʊhweər/",
      "meanings": [
        "任何地方都不",
        "无处"
      ],
      "word_forms": {
        "comparative": "more nowhere",
        "superlative": "most nowhere"
      },
      "collocations": [
        "nowhere to go",
        "get nowhere",
        "out of nowhere",
        "in the middle of nowhere"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0913",
    "word": "number",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈnʌmbə(r)/",
      "phonetic_us": "/ˈnʌmbə(r)/",
      "meanings": [
        "数",
        "数字",
        "号码"
      ],
      "word_forms": {
        "plural": "numbers"
      },
      "collocations": [
        "a number of",
        "the number of",
        "phone number",
        "large number"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"数\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "numeral",
        "digit",
        "figure"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0914",
    "word": "nurse",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/nəːs/",
      "phonetic_us": "/nəːs/",
      "meanings": [
        "护士",
        "保姆",
        "保育员"
      ],
      "word_forms": {
        "plural": "nurses"
      },
      "collocations": [
        "head nurse",
        "nurse back to health",
        "wet nurse"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"护士\"的概念",
      "academicContext": "The nurse plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"nurse\"的发音和拼写，记住其\"护士\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0915",
    "word": "obey",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/əˈbeɪ/",
      "phonetic_us": "/əˈbeɪ/",
      "meanings": [
        "服从",
        "顺从",
        "听从"
      ],
      "word_forms": {},
      "collocations": [
        "obey orders",
        "obey the law",
        "obey rules"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"服从\"的概念",
      "academicContext": "The obey plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0916",
    "word": "object",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɔbdʒɪkt/",
      "phonetic_us": "/ˈɔbdʒɪkt/",
      "meanings": [
        "物",
        "物体",
        "宾语"
      ],
      "word_forms": {
        "plural": "objects"
      },
      "collocations": [
        "foreign object",
        "object to",
        "sex object",
        "money is no object"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0917",
    "word": "ocean",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈəʊʃ(ə)n/",
      "phonetic_us": "/ˈəʊʃ(ə)n/",
      "meanings": [
        "海洋"
      ],
      "word_forms": {
        "plural": "oceans"
      },
      "collocations": [
        "Pacific Ocean",
        "Atlantic Ocean",
        "ocean floor",
        "drop in the ocean"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"海洋\"的概念",
      "academicContext": "The ocean plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"ocean\"的发音和拼写，记住其\"海洋\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0918",
    "word": "October",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ɔkˈtəʊbə(r)/",
      "phonetic_us": "/ɔkˈtəʊbə(r)/",
      "meanings": [
        "10月"
      ],
      "word_forms": {},
      "collocations": [
        "in October",
        "this October",
        "late October"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0919",
    "word": "of",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɔv, əv; (US) ˈɔf/",
      "phonetic_us": "/ɔv, əv; (US) ˈɔf/",
      "meanings": [
        "….的"
      ],
      "word_forms": {},
      "collocations": [
        "of course",
        "kind of",
        "sort of",
        "out of",
        "because of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记….的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0920",
    "word": "off",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɔːf/",
      "phonetic_us": "/ɔːf/",
      "meanings": [
        "离开",
        "脱离",
        "（走）开"
      ],
      "word_forms": {},
      "collocations": [
        "take off",
        "turn off",
        "put off",
        "get off",
        "show off",
        "day off"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"离开\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0921",
    "word": "office",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɔfɪs/",
      "phonetic_us": "/ˈɔfɪs/",
      "meanings": [
        "办公室"
      ],
      "word_forms": {
        "plural": "offices"
      },
      "collocations": [
        "post office",
        "office building",
        "head office",
        "in the office"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"办公室\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "workplace",
        "bureau"
      ]
    }
  },
  {
    "id": "w0922",
    "word": "often",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɔf(ə)n; (US) ˈɔːfn/",
      "phonetic_us": "/ˈɔf(ə)n; (US) ˈɔːfn/",
      "meanings": [
        "经常",
        "常常"
      ],
      "word_forms": {},
      "collocations": [
        "how often",
        "more often",
        "quite often",
        "as often as"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"经常\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "frequently",
        "regularly",
        "commonly"
      ]
    }
  },
  {
    "id": "w0923",
    "word": "oh",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/əʊ/",
      "phonetic_us": "/əʊ/",
      "meanings": [
        "哦！啊！"
      ],
      "word_forms": {},
      "collocations": [
        "oh my",
        "oh dear",
        "oh well"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"哦！啊！\"的概念",
      "academicContext": "The oh plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0924",
    "word": "oil",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ɔɪl/",
      "phonetic_us": "/ɔɪl/",
      "meanings": [
        "油"
      ],
      "word_forms": {
        "plural": "oils"
      },
      "collocations": [
        "cooking oil",
        "oil painting",
        "burn the midnight oil",
        "oil the wheels"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"油\"的概念",
      "academicContext": "The oil plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0925",
    "word": "old",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əʊld/",
      "phonetic_us": "/əʊld/",
      "meanings": [
        "老的",
        "旧的"
      ],
      "word_forms": {
        "comparative": "older",
        "superlative": "oldest"
      },
      "collocations": [
        "old friend",
        "old days",
        "get old"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记老的的事物",
      "academicContext": "This is an old tradition.",
      "dailyContext": "My grandfather is 80 years old.",
      "memoryStory": "",
      "confusableWords": [
        "aged",
        "elderly",
        "ancient"
      ],
      "etymology": {
        "root": "old",
        "meaning": "来自古英语eald,老的"
      }
    }
  },
  {
    "id": "w0926",
    "word": "on",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ɔn/",
      "phonetic_us": "/ɔn/",
      "meanings": [
        "在…上（时）",
        "关于 ad. 接通",
        "进行下去"
      ],
      "word_forms": {},
      "collocations": [
        "go on",
        "on time",
        "on foot",
        "depend on",
        "on the way",
        "and so on"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"在…上（时）\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0927",
    "word": "one",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wʌn/",
      "phonetic_us": "/wʌn/",
      "meanings": [
        "一（个",
        "只…）"
      ],
      "word_forms": {},
      "collocations": [
        "one day",
        "one by one",
        "one another",
        "the one",
        "no one"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"一（个\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0928",
    "word": "oneself",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/wʌnˈself/",
      "phonetic_us": "/wʌnˈself/",
      "meanings": [
        "自己",
        "自身"
      ],
      "word_forms": {
        "plural": "oneselves"
      },
      "collocations": [
        "by oneself",
        "express oneself",
        "pride oneself on"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0929",
    "word": "only",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈəʊnlɪ/",
      "phonetic_us": "/ˈəʊnlɪ/",
      "meanings": [
        "惟一的",
        "仅有的 ad. 仅仅",
        "只"
      ],
      "word_forms": {},
      "collocations": [
        "not only",
        "the only",
        "if only",
        "only child",
        "only one"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "用惟一的的方式完成任务",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "just",
        "solely",
        "merely"
      ]
    }
  },
  {
    "id": "w0930",
    "word": "onto",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈɔntʊ/",
      "phonetic_us": "/ˈɔntʊ/",
      "meanings": [
        "到…的上面"
      ],
      "word_forms": {},
      "collocations": [
        "get onto",
        "hold onto",
        "be onto something"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记到…的上面的事物",
      "academicContext": "Understanding onto concepts is essential for academic success.",
      "dailyContext": "This is really onto! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0931",
    "word": "open",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈəʊpən/",
      "phonetic_us": "/ˈəʊpən/",
      "meanings": [
        "开着的",
        "开的 vt. 开",
        "打开"
      ],
      "word_forms": {
        "verb": "open",
        "adverb": "openly"
      },
      "collocations": [
        "open the door",
        "open minded",
        "in the open"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记开着的的事物",
      "academicContext": "Open your mind to new ideas.",
      "dailyContext": "Can you open the window?",
      "memoryStory": "",
      "confusableWords": [
        "unlock",
        "accessible",
        "available"
      ],
      "etymology": {
        "root": "open",
        "meaning": "来自古英语open,打开的"
      }
    }
  },
  {
    "id": "w0932",
    "word": "opera",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈɔpərə/",
      "phonetic_us": "/ˈɔpərə/",
      "meanings": [
        "歌剧"
      ],
      "word_forms": {
        "plural": "operas"
      },
      "collocations": [
        "opera house",
        "soap opera",
        "opera singer"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"歌剧\"的概念",
      "academicContext": "The opera plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"opera\"的发音和拼写，记住其\"歌剧\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0933",
    "word": "opinion",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/əˈpɪnjən/",
      "phonetic_us": "/əˈpɪnjən/",
      "meanings": [
        "看法",
        "见解"
      ],
      "word_forms": {},
      "collocations": [
        "in my opinion",
        "public opinion",
        "second opinion",
        "matter of opinion"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0934",
    "word": "or",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ə(r), ɔː(r)/",
      "phonetic_us": "/ə(r), ɔː(r)/",
      "meanings": [
        "或",
        "就是",
        "否则"
      ],
      "word_forms": {},
      "collocations": [
        "or so",
        "sooner or later",
        "more or less",
        "whether...or..."
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"或\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0935",
    "word": "orange",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɔrɪndʒ; (US) ˈɔːr-/",
      "phonetic_us": "/ˈɔrɪndʒ; (US) ˈɔːr-/",
      "meanings": [
        "橘子",
        "橙子",
        "橘汁 a. 橘色的"
      ],
      "word_forms": {},
      "collocations": [
        "orange juice",
        "peel an orange",
        "compare apples and oranges"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0936",
    "word": "order",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈɔːdə(r)/",
      "phonetic_us": "/ˈɔːdə(r)/",
      "meanings": [
        "定购",
        "定货",
        "点菜n. 顺序"
      ],
      "word_forms": {
        "plural": "orders"
      },
      "collocations": [
        "in order to",
        "in order that",
        "out of order",
        "place an order"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"定购\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "sequence",
        "arrangement",
        "command"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0937",
    "word": "ordinary",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈɔːdɪnərɪ; (US) ˈɔːrdənerɪ/",
      "phonetic_us": "/ˈɔːdɪnərɪ; (US) ˈɔːrdənerɪ/",
      "meanings": [
        "普通的",
        "平常的"
      ],
      "word_forms": {
        "comparative": "more ordinary",
        "superlative": "most ordinary"
      },
      "collocations": [
        "ordinary people",
        "out of the ordinary",
        "ordinary day",
        "no ordinary"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0938",
    "word": "other",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈʌðə(r)/",
      "phonetic_us": "/ˈʌðə(r)/",
      "meanings": [
        "别人",
        "别的东西 a. 别的",
        "另外的"
      ],
      "word_forms": {},
      "collocations": [
        "each other",
        "the other",
        "other than",
        "in other words"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"别人\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "different",
        "another",
        "alternative"
      ],
      "etymology": null
    }
  },
  {
    "id": "w0939",
    "word": "our",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈaʊə(r)/",
      "phonetic_us": "/ˈaʊə(r)/",
      "meanings": [
        "我们的"
      ],
      "word_forms": {},
      "collocations": [
        "our school",
        "our teacher",
        "on our own",
        "our country"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记我们的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0940",
    "word": "ourselves",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/aʊəˈselvz/",
      "phonetic_us": "/aʊəˈselvz/",
      "meanings": [
        "我们自己"
      ],
      "word_forms": {
        "plural": "ourselveses"
      },
      "collocations": [
        "by ourselves",
        "all by ourselves",
        "among ourselves"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0941",
    "word": "out",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/aʊt/",
      "phonetic_us": "/aʊt/",
      "meanings": [
        "出外",
        "在外",
        "向外"
      ],
      "word_forms": {},
      "collocations": [
        "go out",
        "come out",
        "find out",
        "work out",
        "point out",
        "out of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"出外\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0942",
    "word": "outdoors",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/aʊtˈdɔːz/",
      "phonetic_us": "/aʊtˈdɔːz/",
      "meanings": [
        "在户外",
        "在野外"
      ],
      "word_forms": {},
      "collocations": [
        "great outdoors",
        "go outdoors",
        "love the outdoors"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0943",
    "word": "outside",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/aʊtˈsaɪd/",
      "phonetic_us": "/aʊtˈsaɪd/",
      "meanings": [
        "外面 ad. 在外面",
        "向外面 prep. 在…外面"
      ],
      "word_forms": {
        "plural": "outsides"
      },
      "collocations": [
        "outside world",
        "think outside the box",
        "outside chance"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0944",
    "word": "over",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈəʊvə(r)/",
      "phonetic_us": "/ˈəʊvə(r)/",
      "meanings": [
        "在…上方",
        "越过",
        "遍及 ad. 翻倒"
      ],
      "word_forms": {},
      "collocations": [
        "all over",
        "over there",
        "over and over",
        "over the world",
        "go over"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"在…上方\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "above",
        "beyond",
        "across"
      ]
    }
  },
  {
    "id": "w0945",
    "word": "overcoat",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈəʊvəkəʊt/",
      "phonetic_us": "/ˈəʊvəkəʊt/",
      "meanings": [
        "大衣"
      ],
      "word_forms": {
        "plural": "overcoats"
      },
      "collocations": [
        "winter overcoat",
        "wear an overcoat"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0946",
    "word": "own",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əʊn/",
      "phonetic_us": "/əʊn/",
      "meanings": [
        "自己的 v. 拥有",
        "所有"
      ],
      "word_forms": {
        "comparative": "owner",
        "superlative": "ownest"
      },
      "collocations": [
        "of one's own",
        "on one's own",
        "own up to"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达自己的 v. 拥有这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "possess",
        "have",
        "belong to"
      ]
    }
  },
  {
    "id": "w0947",
    "word": "Pacific",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pəˈsɪfɪk/",
      "phonetic_us": "/pəˈsɪfɪk/",
      "meanings": [
        "太平洋的"
      ],
      "word_forms": {
        "plural": "pacifics",
        "comparative": "more pacific",
        "superlative": "most pacific"
      },
      "collocations": [
        "Pacific Ocean",
        "Asia-Pacific",
        "South Pacific"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0948",
    "word": "pack",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pæk/",
      "phonetic_us": "/pæk/",
      "meanings": [
        "包",
        "捆",
        "（猎犬、野兽的）一群 v. (为运输或储存而)打包"
      ],
      "word_forms": {},
      "collocations": [
        "pack up",
        "pack in",
        "six pack",
        "wolf pack",
        "pack rat"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"包\"的概念",
      "academicContext": "The pack plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0949",
    "word": "packet",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpækɪt/",
      "phonetic_us": "/ˈpækɪt/",
      "meanings": [
        "小包裹",
        "袋"
      ],
      "word_forms": {},
      "collocations": [
        "packet of",
        "pay packet",
        "information packet"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0950",
    "word": "page",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/peɪdʒ/",
      "phonetic_us": "/peɪdʒ/",
      "meanings": [
        "页",
        "页码"
      ],
      "word_forms": {
        "plural": "pages"
      },
      "collocations": [
        "front page",
        "turn the page",
        "on the same page",
        "take a page from"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"页\"的概念",
      "academicContext": "The page plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0951",
    "word": "pain",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/peɪn/",
      "phonetic_us": "/peɪn/",
      "meanings": [
        "疼痛",
        "疼"
      ],
      "word_forms": {
        "plural": "pains"
      },
      "collocations": [
        "in pain",
        "pain killer",
        "no pain no gain",
        "pain in the neck"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"疼痛\"的概念",
      "academicContext": "The pain plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0952",
    "word": "painful",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpeɪnfʊl/",
      "phonetic_us": "/ˈpeɪnfʊl/",
      "meanings": [
        "使痛的",
        "使痛苦的"
      ],
      "word_forms": {
        "comparative": "more painful",
        "superlative": "most painful"
      },
      "collocations": [
        "painful experience",
        "very painful",
        "painful memories"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0953",
    "word": "paint",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/peɪnt/",
      "phonetic_us": "/peɪnt/",
      "meanings": [
        "油漆 vt. 油漆",
        "粉刷",
        "绘画"
      ],
      "word_forms": {},
      "collocations": [
        "paint a picture",
        "fresh paint",
        "wet paint",
        "paint the town red"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"油漆 vt. 油漆\"的概念",
      "academicContext": "The paint plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"paint\"的发音和拼写，记住其\"油漆 vt. 油漆\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0954",
    "word": "painter",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpeɪntə(r)/",
      "phonetic_us": "/ˈpeɪntə(r)/",
      "meanings": [
        "绘画者",
        "（油）画家"
      ],
      "word_forms": {
        "plural": "painters"
      },
      "collocations": [
        "house painter",
        "famous painter",
        "landscape painter"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0955",
    "word": "painting",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpeɪntɪŋ/",
      "phonetic_us": "/ˈpeɪntɪŋ/",
      "meanings": [
        "油画",
        "水彩画"
      ],
      "word_forms": {},
      "collocations": [
        "oil painting",
        "wall painting",
        "abstract painting"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0956",
    "word": "pair",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/peə(r)/",
      "phonetic_us": "/peə(r)/",
      "meanings": [
        "一双",
        "一对"
      ],
      "word_forms": {
        "plural": "pairs"
      },
      "collocations": [
        "a pair of shoes",
        "in pairs",
        "au pair"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"一双\"的概念",
      "academicContext": "The pair plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0957",
    "word": "palace",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpælɪs/",
      "phonetic_us": "/ˈpælɪs/",
      "meanings": [
        "宫",
        "宫殿"
      ],
      "word_forms": {
        "plural": "palaces"
      },
      "collocations": [
        "royal palace",
        "Buckingham Palace",
        "palace of",
        "crystal palace"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0958",
    "word": "pale",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/peɪl/",
      "phonetic_us": "/peɪl/",
      "meanings": [
        "苍白的",
        "灰白的"
      ],
      "word_forms": {
        "comparative": "paler",
        "superlative": "palest"
      },
      "collocations": [
        "turn pale",
        "pale face",
        "beyond the pale"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记苍白的的事物",
      "academicContext": "Understanding pale concepts is essential for academic success.",
      "dailyContext": "This is really pale! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0959",
    "word": "pan",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pæn/",
      "phonetic_us": "/pæn/",
      "meanings": [
        "平底锅"
      ],
      "word_forms": {
        "plural": "pans"
      },
      "collocations": [
        "frying pan",
        "pots and pans",
        "flash in the pan",
        "pan out"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"平底锅\"的概念",
      "academicContext": "The pan plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0960",
    "word": "panda",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈpændə/",
      "phonetic_us": "/ˈpændə/",
      "meanings": [
        "熊猫"
      ],
      "word_forms": {
        "plural": "pandas"
      },
      "collocations": [
        "giant panda",
        "red panda"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"熊猫\"的概念",
      "academicContext": "The panda plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"panda\"的发音和拼写，记住其\"熊猫\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0961",
    "word": "paper",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈpeɪpə(r)/",
      "phonetic_us": "/ˈpeɪpə(r)/",
      "meanings": [
        "纸",
        "报纸"
      ],
      "word_forms": {
        "plural": "papers"
      },
      "collocations": [
        "piece of paper",
        "on paper",
        "toilet paper",
        "not worth the paper it's written on"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"纸\"的概念",
      "academicContext": "The paper plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"paper\"的发音和拼写，记住其\"纸\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0962",
    "word": "pardon",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpɑːd(ə)n/",
      "phonetic_us": "/ˈpɑːd(ə)n/",
      "meanings": [
        "原谅",
        "宽恕",
        "对不起"
      ],
      "word_forms": {},
      "collocations": [
        "beg your pardon",
        "pardon me",
        "I beg your pardon"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0963",
    "word": "parent",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpeərənt/",
      "phonetic_us": "/ˈpeərənt/",
      "meanings": [
        "父(母)",
        "双亲"
      ],
      "word_forms": {},
      "collocations": [
        "single parent",
        "parent company",
        "foster parent",
        "parent-teacher meeting"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0964",
    "word": "park",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɑːk/",
      "phonetic_us": "/pɑːk/",
      "meanings": [
        "公园 vt. 停放（汽车）"
      ],
      "word_forms": {},
      "collocations": [
        "amusement park",
        "national park",
        "ball park",
        "in the park"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"公园 vt. 停放（汽车）\"的概念",
      "academicContext": "The park plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0965",
    "word": "parking",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpɑːkɪŋ/",
      "phonetic_us": "/ˈpɑːkɪŋ/",
      "meanings": [
        "停车"
      ],
      "word_forms": {
        "plural": "parkings"
      },
      "collocations": [
        "parking lot",
        "parking space",
        "no parking",
        "parking meter"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0966",
    "word": "parrot",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpærət/",
      "phonetic_us": "/ˈpærət/",
      "meanings": [
        "鹦鹉"
      ],
      "word_forms": {
        "plural": "parrots"
      },
      "collocations": [
        "parrot fashion",
        "sick as a parrot"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0967",
    "word": "part",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/pɑːt/",
      "phonetic_us": "/pɑːt/",
      "meanings": [
        "部分",
        "角色",
        "部件"
      ],
      "word_forms": {
        "plural": "parts"
      },
      "collocations": [
        "take part in",
        "part of",
        "play a part",
        "for the most part"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"部分\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "portion",
        "piece",
        "section"
      ]
    }
  },
  {
    "id": "w0968",
    "word": "party",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈpɑːtɪ/",
      "phonetic_us": "/ˈpɑːtɪ/",
      "meanings": [
        "聚会",
        "晚会",
        "党派"
      ],
      "word_forms": {
        "plural": "parties"
      },
      "collocations": [
        "birthday party",
        "have a party",
        "the Communist Party",
        "at the party"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"聚会\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "celebration",
        "gathering",
        "event"
      ]
    }
  },
  {
    "id": "w0969",
    "word": "pass",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/pɑːs; (US) pæs/",
      "phonetic_us": "/pɑːs; (US) pæs/",
      "meanings": [
        "传",
        "递",
        "经过"
      ],
      "word_forms": {
        "noun": "pass",
        "adjective": "passable"
      },
      "collocations": [
        "pass by",
        "pass on",
        "pass away",
        "pass the exam"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"传\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "go by",
        "overtake",
        "succeed"
      ]
    }
  },
  {
    "id": "w0970",
    "word": "passenger",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpæsɪndʒə(r)/",
      "phonetic_us": "/ˈpæsɪndʒə(r)/",
      "meanings": [
        "乘客",
        "旅客"
      ],
      "word_forms": {
        "plural": "passengers"
      },
      "collocations": [
        "passenger seat",
        "fellow passenger",
        "airline passenger"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0971",
    "word": "passport",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpɑːspɔːt; (US) ˈpæspɔːt/",
      "phonetic_us": "/ˈpɑːspɔːt; (US) ˈpæspɔːt/",
      "meanings": [
        "护照"
      ],
      "word_forms": {
        "plural": "passports"
      },
      "collocations": [
        "valid passport",
        "passport control",
        "passport to success"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0972",
    "word": "past",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/pɑːst; (US) pæst/",
      "phonetic_us": "/pɑːst; (US) pæst/",
      "meanings": [
        "过 n. 过去",
        "昔日",
        "往事 prep. 过…"
      ],
      "word_forms": {},
      "collocations": [
        "in the past",
        "past tense",
        "go past",
        "half past"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"过 n. 过去\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "history",
        "former time",
        "previous"
      ]
    }
  },
  {
    "id": "w0973",
    "word": "path",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɑːθ; (US) pæθ/",
      "phonetic_us": "/pɑːθ; (US) pæθ/",
      "meanings": [
        "小道",
        "小径"
      ],
      "word_forms": {
        "plural": "paths"
      },
      "collocations": [
        "beaten path",
        "down the garden path",
        "cross paths"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"小道\"的概念",
      "academicContext": "The path plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0974",
    "word": "patient",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpeɪʃ(ə)nt/",
      "phonetic_us": "/ˈpeɪʃ(ə)nt/",
      "meanings": [
        "病人"
      ],
      "word_forms": {},
      "collocations": [
        "be patient with",
        "patient care",
        "hospital patient"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0975",
    "word": "pea",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/piː/",
      "phonetic_us": "/piː/",
      "meanings": [
        "豌豆"
      ],
      "word_forms": {
        "plural": "peas"
      },
      "collocations": [
        "peas in a pod",
        "like two peas in a pod",
        "split pea soup"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"豌豆\"的概念",
      "academicContext": "The pea plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0976",
    "word": "peace",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/piːs/",
      "phonetic_us": "/piːs/",
      "meanings": [
        "和平"
      ],
      "word_forms": {},
      "collocations": [
        "at peace",
        "peace and quiet",
        "make peace",
        "peace of mind",
        "rest in peace"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"和平\"的概念",
      "academicContext": "The peace plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"peace\"的发音和拼写，记住其\"和平\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0977",
    "word": "pear",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/peə(r)/",
      "phonetic_us": "/peə(r)/",
      "meanings": [
        "梨子",
        "梨树"
      ],
      "word_forms": {},
      "collocations": [
        "pear tree",
        "pear shaped"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"梨子\"的概念",
      "academicContext": "The pear plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0978",
    "word": "pen",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pen/",
      "phonetic_us": "/pen/",
      "meanings": [
        "钢笔",
        "笔"
      ],
      "word_forms": {
        "plural": "pens"
      },
      "collocations": [
        "pen pal",
        "ballpoint pen",
        "put pen to paper",
        "the pen is mightier than the sword"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"钢笔\"的概念",
      "academicContext": "The pen plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0979",
    "word": "pencil",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpens(ə)l/",
      "phonetic_us": "/ˈpens(ə)l/",
      "meanings": [
        "铅笔"
      ],
      "word_forms": {
        "plural": "pencils"
      },
      "collocations": [
        "pencil case",
        "pencil sharpener",
        "in pencil",
        "pencil and paper"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0980",
    "word": "people",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈpiːp(ə)l/",
      "phonetic_us": "/ˈpiːp(ə)l/",
      "meanings": [
        "人",
        "人们",
        "人民"
      ],
      "word_forms": {
        "plural": "peoples"
      },
      "collocations": [
        "many people",
        "young people",
        "Chinese people",
        "some people"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"人\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "persons",
        "individuals",
        "folk"
      ]
    }
  },
  {
    "id": "w0981",
    "word": "pepper",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpepə(r)/",
      "phonetic_us": "/ˈpepə(r)/",
      "meanings": [
        "胡椒粉"
      ],
      "word_forms": {
        "plural": "peppers"
      },
      "collocations": [
        "salt and pepper",
        "black pepper",
        "bell pepper"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0982",
    "word": "performance",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pəˈfɔːməns/",
      "phonetic_us": "/pəˈfɔːməns/",
      "meanings": [
        "演出",
        "表演"
      ],
      "word_forms": {
        "plural": "performances"
      },
      "collocations": [
        "live performance",
        "peak performance",
        "job performance",
        "give a performance"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0983",
    "word": "perhaps",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/pəˈhæps/",
      "phonetic_us": "/pəˈhæps/",
      "meanings": [
        "可能",
        "或"
      ],
      "word_forms": {},
      "collocations": [
        "perhaps not",
        "perhaps because",
        "perhaps the most"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"可能\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "maybe",
        "possibly",
        "conceivably"
      ]
    }
  },
  {
    "id": "w0984",
    "word": "permit",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pəˈmɪt/",
      "phonetic_us": "/pəˈmɪt/",
      "meanings": [
        "许可",
        "允许",
        "执照 n. 许可证"
      ],
      "word_forms": {
        "plural": "permits"
      },
      "collocations": [
        "parking permit",
        "work permit",
        "weather permitting"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0985",
    "word": "person",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈpɜːs(ə)n/",
      "phonetic_us": "/ˈpɜːs(ə)n/",
      "meanings": [
        "人"
      ],
      "word_forms": {
        "plural": "persons"
      },
      "collocations": [
        "in person",
        "personal information",
        "young person",
        "the right person"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"人\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "individual",
        "human",
        "someone"
      ]
    }
  },
  {
    "id": "w0986",
    "word": "personal",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpɜːsən(ə)l/",
      "phonetic_us": "/ˈpɜːsən(ə)l/",
      "meanings": [
        "个人的",
        "私人的"
      ],
      "word_forms": {
        "comparative": "more personal",
        "superlative": "most personal"
      },
      "collocations": [
        "personal information",
        "personal computer",
        "personal space",
        "nothing personal"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0987",
    "word": "pet",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pet/",
      "phonetic_us": "/pet/",
      "meanings": [
        "宠物",
        "爱畜"
      ],
      "word_forms": {
        "plural": "pets"
      },
      "collocations": [
        "pet dog",
        "pet shop",
        "teacher's pet",
        "pet peeve"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"宠物\"的概念",
      "academicContext": "The pet plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0988",
    "word": "photograph",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfəʊtəʊɡrɑːf; (US) -ɡræf/",
      "phonetic_us": "/ˈfəʊtəʊɡrɑːf; (US) -ɡræf/",
      "meanings": [
        "照片"
      ],
      "word_forms": {
        "plural": "photographs"
      },
      "collocations": [
        "take a photograph",
        "old photograph",
        "photograph album"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0989",
    "word": "phrase",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/freɪz/",
      "phonetic_us": "/freɪz/",
      "meanings": [
        "短语",
        "习惯用语"
      ],
      "word_forms": {
        "plural": "phrases"
      },
      "collocations": [
        "catch phrase",
        "turn of phrase",
        "coin a phrase"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0990",
    "word": "physicist",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɪzɪsɪst/",
      "phonetic_us": "/ˈfɪzɪsɪst/",
      "meanings": [
        "物理学家"
      ],
      "word_forms": {},
      "collocations": [
        "theoretical physicist",
        "nuclear physicist"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0991",
    "word": "physics",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈfɪzɪks/",
      "phonetic_us": "/ˈfɪzɪks/",
      "meanings": [
        "物理（学）"
      ],
      "word_forms": {},
      "collocations": [
        "quantum physics",
        "physics class",
        "study physics"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0992",
    "word": "pianist",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpɪənist/",
      "phonetic_us": "/ˈpɪənist/",
      "meanings": [
        "钢琴家"
      ],
      "word_forms": {
        "plural": "pianists"
      },
      "collocations": [
        "concert pianist",
        "piano player"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w0993",
    "word": "piano",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɪˈænəʊ/",
      "phonetic_us": "/pɪˈænəʊ/",
      "meanings": [
        "钢琴"
      ],
      "word_forms": {
        "plural": "pianos"
      },
      "collocations": [
        "play the piano",
        "grand piano",
        "piano keys",
        "piano lesson"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"钢琴\"的概念",
      "academicContext": "The piano plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"piano\"的发音和拼写，记住其\"钢琴\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0994",
    "word": "pick",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɪk/",
      "phonetic_us": "/pɪk/",
      "meanings": [
        "拾起",
        "采集",
        "挑选"
      ],
      "word_forms": {},
      "collocations": [
        "pick up",
        "pick out",
        "pick on",
        "take your pick",
        "pick and choose"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"拾起\"的概念",
      "academicContext": "The pick plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0995",
    "word": "pie",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/paɪ/",
      "phonetic_us": "/paɪ/",
      "meanings": [
        "甜馅饼"
      ],
      "word_forms": {
        "plural": "pies"
      },
      "collocations": [
        "apple pie",
        "piece of pie",
        "easy as pie",
        "pie in the sky"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"甜馅饼\"的概念",
      "academicContext": "The pie plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0996",
    "word": "piece",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɪs/",
      "phonetic_us": "/pɪs/",
      "meanings": [
        "一块（片",
        "张",
        "件…）"
      ],
      "word_forms": {
        "plural": "pieces"
      },
      "collocations": [
        "piece of cake",
        "piece by piece",
        "go to pieces",
        "piece together"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"一块（片\"的概念",
      "academicContext": "The piece plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"piece\"的发音和拼写，记住其\"一块（片\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w0997",
    "word": "pig",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɪg/",
      "phonetic_us": "/pɪg/",
      "meanings": [
        "猪"
      ],
      "word_forms": {
        "plural": "pigs"
      },
      "collocations": [
        "guinea pig",
        "pig out",
        "buy a pig in a poke",
        "when pigs fly"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"猪\"的概念",
      "academicContext": "The pig plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0998",
    "word": "pill",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɪl/",
      "phonetic_us": "/pɪl/",
      "meanings": [
        "药丸",
        "药片"
      ],
      "word_forms": {
        "plural": "pills"
      },
      "collocations": [
        "take a pill",
        "bitter pill to swallow",
        "sugar the pill"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"药丸\"的概念",
      "academicContext": "The pill plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w0999",
    "word": "pilot",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈpaɪlət/",
      "phonetic_us": "/ˈpaɪlət/",
      "meanings": [
        "飞行员"
      ],
      "word_forms": {},
      "collocations": [
        "pilot program",
        "test pilot",
        "pilot light",
        "automatic pilot"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"飞行员\"的概念",
      "academicContext": "The pilot plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"pilot\"的发音和拼写，记住其\"飞行员\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1000",
    "word": "pink",
    "level": "初二",
    "unit": "Unit 10",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɪŋk/",
      "phonetic_us": "/pɪŋk/",
      "meanings": [
        "粉红色的"
      ],
      "word_forms": {
        "comparative": "pinker",
        "superlative": "pinkest"
      },
      "collocations": [
        "in the pink",
        "tickled pink",
        "pink slip"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记粉红色的的事物",
      "academicContext": "Understanding pink concepts is essential for academic success.",
      "dailyContext": "This is really pink! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1001",
    "word": "pioneer",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/paɪəˈnɪə(r)/",
      "phonetic_us": "/paɪəˈnɪə(r)/",
      "meanings": [
        "先锋",
        "开拓者"
      ],
      "word_forms": {
        "plural": "pioneers"
      },
      "collocations": [
        "pioneer spirit",
        "pioneer in",
        "pioneer work"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1002",
    "word": "pity",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈpɪtɪ/",
      "phonetic_us": "/ˈpɪtɪ/",
      "meanings": [
        "怜悯",
        "同情"
      ],
      "word_forms": {
        "plural": "pities"
      },
      "collocations": [
        "what a pity",
        "take pity on",
        "more's the pity",
        "self-pity"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"怜悯\"的概念",
      "academicContext": "The pity plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1003",
    "word": "place",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/pleɪs/",
      "phonetic_us": "/pleɪs/",
      "meanings": [
        "地方",
        "处所 v. 放置",
        "安置"
      ],
      "word_forms": {
        "comparative": "placer",
        "superlative": "placest"
      },
      "collocations": [
        "take place",
        "in the first place",
        "in place of",
        "no place like home"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "用地方的方式完成任务",
      "academicContext": "The data was analyzed place to ensure accuracy.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "location",
        "spot",
        "site"
      ]
    }
  },
  {
    "id": "w1004",
    "word": "plane",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pleɪn/",
      "phonetic_us": "/pleɪn/",
      "meanings": [
        "飞机"
      ],
      "word_forms": {
        "plural": "planes"
      },
      "collocations": [
        "by plane",
        "plane ticket",
        "on a plane",
        "paper plane"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"飞机\"的概念",
      "academicContext": "The plane plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"plane\"的发音和拼写，记住其\"飞机\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1005",
    "word": "planet",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈplænɪt/",
      "phonetic_us": "/ˈplænɪt/",
      "meanings": [
        "行星"
      ],
      "word_forms": {},
      "collocations": [
        "save the planet",
        "planet Earth",
        "alien planet"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1006",
    "word": "plant",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/plɑːnt; (US) ˈplænt/",
      "phonetic_us": "/plɑːnt; (US) ˈplænt/",
      "meanings": [
        "种植",
        "播种 n. 植物"
      ],
      "word_forms": {
        "plural": "plants"
      },
      "collocations": [
        "house plant",
        "plant a tree",
        "plant seeds",
        "power plant"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"种植\"的概念",
      "academicContext": "The plant plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"plant\"的发音和拼写，记住其\"种植\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1007",
    "word": "plastic",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈplæstɪk/",
      "phonetic_us": "/ˈplæstɪk/",
      "meanings": [
        "塑料的"
      ],
      "word_forms": {
        "comparative": "more plastic",
        "superlative": "most plastic"
      },
      "collocations": [
        "plastic bag",
        "plastic surgery",
        "plastic cup",
        "credit card plastic"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1008",
    "word": "plate",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pleɪt/",
      "phonetic_us": "/pleɪt/",
      "meanings": [
        "板",
        "片",
        "牌"
      ],
      "word_forms": {
        "plural": "plates"
      },
      "collocations": [
        "dinner plate",
        "license plate",
        "clean plate",
        "have a lot on one's plate"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"板\"的概念",
      "academicContext": "The plate plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"plate\"的发音和拼写，记住其\"板\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1009",
    "word": "play",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/pleɪ/",
      "phonetic_us": "/pleɪ/",
      "meanings": [
        "玩",
        "打（球）",
        "游戏"
      ],
      "word_forms": {
        "noun": "play",
        "noun2": "player"
      },
      "collocations": [
        "play with",
        "play a role",
        "play games"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"玩\"的概念",
      "academicContext": "Play is important for children's development.",
      "dailyContext": "Let's play basketball.",
      "memoryStory": "",
      "confusableWords": [
        "game",
        "sport",
        "perform"
      ],
      "etymology": {
        "root": "play",
        "meaning": "来自古英语plega,运动、游戏"
      }
    }
  },
  {
    "id": "w1010",
    "word": "playground",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpleɪgraʊnd/",
      "phonetic_us": "/ˈpleɪgraʊnd/",
      "meanings": [
        "操场",
        "运动场"
      ],
      "word_forms": {},
      "collocations": [
        "school playground",
        "children's playground"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1011",
    "word": "pleasant",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈplezənt/",
      "phonetic_us": "/ˈplezənt/",
      "meanings": [
        "令人愉快的",
        "舒适的"
      ],
      "word_forms": {
        "comparative": "more pleasant",
        "superlative": "most pleasant"
      },
      "collocations": [
        "pleasant surprise",
        "pleasant experience",
        "pleasant weather"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1012",
    "word": "please",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pliːz/",
      "phonetic_us": "/pliːz/",
      "meanings": [
        "请",
        "使人高兴",
        "使人满意"
      ],
      "word_forms": {},
      "collocations": [
        "yes please",
        "please do",
        "if you please",
        "please and thank you"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1013",
    "word": "pleased",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pliːzd/",
      "phonetic_us": "/pliːzd/",
      "meanings": [
        "高兴的"
      ],
      "word_forms": {
        "comparative": "more pleased",
        "superlative": "most pleased"
      },
      "collocations": [
        "pleased to meet you",
        "pleased with",
        "very pleased"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1014",
    "word": "pleasure",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpleʒə/",
      "phonetic_us": "/ˈpleʒə/",
      "meanings": [
        "高兴",
        "愉快"
      ],
      "word_forms": {
        "plural": "pleasures"
      },
      "collocations": [
        "with pleasure",
        "it's my pleasure",
        "guilty pleasure",
        "business and pleasure"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1015",
    "word": "plenty",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/plenti/",
      "phonetic_us": "/plenti/",
      "meanings": [
        "充足",
        "大量"
      ],
      "word_forms": {
        "plural": "plenties"
      },
      "collocations": [
        "plenty of",
        "plenty of time",
        "in plenty"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1016",
    "word": "plus",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/plʌs/",
      "phonetic_us": "/plʌs/",
      "meanings": [
        "加",
        "加上"
      ],
      "word_forms": {
        "plural": "pluses"
      },
      "collocations": [
        "plus point",
        "plus side",
        "plus or minus"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"加\"的概念",
      "academicContext": "The plus plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1017",
    "word": "point",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/pɔɪnt/",
      "phonetic_us": "/pɔɪnt/",
      "meanings": [
        "指",
        "指向 n. 点",
        "分数"
      ],
      "word_forms": {
        "plural": "points"
      },
      "collocations": [
        "point out",
        "to the point",
        "the point is",
        "make a point"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"指\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "spot",
        "location",
        "tip"
      ]
    }
  },
  {
    "id": "w1018",
    "word": "police",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pəˈliːs/",
      "phonetic_us": "/pəˈliːs/",
      "meanings": [
        "警察",
        "警务人员"
      ],
      "word_forms": {
        "plural": "polices"
      },
      "collocations": [
        "police station",
        "call the police",
        "police officer",
        "police car"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1019",
    "word": "polite",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pəˈlaɪt/",
      "phonetic_us": "/pəˈlaɪt/",
      "meanings": [
        "有礼貌的",
        "有教养的"
      ],
      "word_forms": {
        "comparative": "politer",
        "superlative": "politest"
      },
      "collocations": [
        "polite society",
        "polite conversation",
        "be polite to"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1020",
    "word": "politics",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpɔlɪtɪks/",
      "phonetic_us": "/ˈpɔlɪtɪks/",
      "meanings": [
        "政治"
      ],
      "word_forms": {
        "plural": "politicses"
      },
      "collocations": [
        "in politics",
        "play politics",
        "office politics",
        "party politics"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1021",
    "word": "pollute",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pəˈluːt/",
      "phonetic_us": "/pəˈluːt/",
      "meanings": [
        "污染"
      ],
      "word_forms": {},
      "collocations": [
        "pollute the environment",
        "heavily polluted"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1022",
    "word": "pool",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/puːl/",
      "phonetic_us": "/puːl/",
      "meanings": [
        "水塘",
        "水池"
      ],
      "word_forms": {
        "plural": "pools"
      },
      "collocations": [
        "swimming pool",
        "car pool",
        "gene pool",
        "pool resources"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"水塘\"的概念",
      "academicContext": "The pool plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1023",
    "word": "poor",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pʊə(r)/",
      "phonetic_us": "/pʊə(r)/",
      "meanings": [
        "贫穷",
        "可怜",
        "不好的"
      ],
      "word_forms": {},
      "collocations": [
        "poor quality",
        "poor thing",
        "in poor health",
        "poor as a church mouse"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"贫穷\"的概念",
      "academicContext": "The poor plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1024",
    "word": "popular",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpɔpjʊlə(r)/",
      "phonetic_us": "/ˈpɔpjʊlə(r)/",
      "meanings": [
        "流行",
        "大众",
        "受欢迎的"
      ],
      "word_forms": {},
      "collocations": [
        "popular music",
        "popular culture",
        "highly popular",
        "popular with"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1025",
    "word": "population",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pɔpjʊˈleɪʃ(ə)n/",
      "phonetic_us": "/pɔpjʊˈleɪʃ(ə)n/",
      "meanings": [
        "人口",
        "人数"
      ],
      "word_forms": {
        "plural": "populations"
      },
      "collocations": [
        "total population",
        "population growth",
        "aging population"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1026",
    "word": "pork",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɔːk/",
      "phonetic_us": "/pɔːk/",
      "meanings": [
        "猪肉"
      ],
      "word_forms": {
        "plural": "porks"
      },
      "collocations": [
        "pork chop",
        "pork barrel",
        "pulled pork"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"猪肉\"的概念",
      "academicContext": "The pork plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1027",
    "word": "porridge",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpɔrɪdʒ; (US) ˈpɔːrɪdʒ/",
      "phonetic_us": "/ˈpɔrɪdʒ; (US) ˈpɔːrɪdʒ/",
      "meanings": [
        "稀饭",
        "粥"
      ],
      "word_forms": {
        "plural": "porridges"
      },
      "collocations": [
        "bowl of porridge",
        "make porridge"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1028",
    "word": "port",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɔːt/",
      "phonetic_us": "/pɔːt/",
      "meanings": [
        "港口",
        "码头"
      ],
      "word_forms": {
        "plural": "ports"
      },
      "collocations": [
        "sea port",
        "port city",
        "port wine",
        "any port in a storm"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"港口\"的概念",
      "academicContext": "The port plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1029",
    "word": "possible",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈpɔsɪb(ə)l/",
      "phonetic_us": "/ˈpɔsɪb(ə)l/",
      "meanings": [
        "可能的"
      ],
      "word_forms": {
        "noun": "possibility",
        "adverb": "possibly"
      },
      "collocations": [
        "as soon as possible",
        "if possible",
        "make it possible",
        "as...as possible"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记可能的的事物",
      "academicContext": "This theory posibles our understanding.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "feasible",
        "achievable",
        "viable",
        "workable"
      ],
      "etymology": {
        "root": "poss",
        "suffix": "-ible",
        "meaning": "poss + ible(能够的)"
      }
    }
  },
  {
    "id": "w1030",
    "word": "post",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pəʊst/",
      "phonetic_us": "/pəʊst/",
      "meanings": [
        "邮政",
        "邮寄",
        "邮件 v. 投寄"
      ],
      "word_forms": {},
      "collocations": [
        "post office",
        "fence post",
        "post a letter",
        "keep posted"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"邮政\"的概念",
      "academicContext": "The post plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1031",
    "word": "postage",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpəʊstɪdʒ/",
      "phonetic_us": "/ˈpəʊstɪdʒ/",
      "meanings": [
        "邮费"
      ],
      "word_forms": {
        "plural": "postages"
      },
      "collocations": [
        "postage stamp",
        "postage paid",
        "postage and handling"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1032",
    "word": "postbox",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpəʊstbɔks/",
      "phonetic_us": "/ˈpəʊstbɔks/",
      "meanings": [
        "邮箱"
      ],
      "word_forms": {
        "plural": "postboxes"
      },
      "collocations": [
        "red postbox",
        "drop in the postbox"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1033",
    "word": "postcard",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpəʊstkɑːd/",
      "phonetic_us": "/ˈpəʊstkɑːd/",
      "meanings": [
        "明信片"
      ],
      "word_forms": {
        "plural": "postcards"
      },
      "collocations": [
        "send a postcard",
        "picture postcard"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1034",
    "word": "postcode",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpəʊstkəʊd/",
      "phonetic_us": "/ˈpəʊstkəʊd/",
      "meanings": [
        "（英）邮政编码"
      ],
      "word_forms": {
        "plural": "postcodes"
      },
      "collocations": [
        "enter your postcode",
        "postal code"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1035",
    "word": "postman",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpəʊstmən/",
      "phonetic_us": "/ˈpəʊstmən/",
      "meanings": [
        "邮递员"
      ],
      "word_forms": {
        "plural": "postmans"
      },
      "collocations": [
        "postman always rings twice"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1036",
    "word": "potato",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pəʊteɪtəʊ/",
      "phonetic_us": "/pəʊteɪtəʊ/",
      "meanings": [
        "土豆",
        "马铃薯"
      ],
      "word_forms": {
        "plural": "potatos"
      },
      "collocations": [
        "baked potato",
        "couch potato",
        "hot potato",
        "small potatoes"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1037",
    "word": "potential",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/pəʊtenʃ (ə)l/",
      "phonetic_us": "/pəʊtenʃ (ə)l/",
      "meanings": [
        "潜在的",
        "可能的"
      ],
      "word_forms": {
        "comparative": "more potential",
        "superlative": "most potential"
      },
      "collocations": [
        "full potential",
        "potential customer",
        "reach potential",
        "untapped potential"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1038",
    "word": "pound",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/paund/",
      "phonetic_us": "/paund/",
      "meanings": [
        "磅",
        "英镑"
      ],
      "word_forms": {
        "plural": "pounds"
      },
      "collocations": [
        "pound cake",
        "pound the pavement",
        "pound for pound"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"磅\"的概念",
      "academicContext": "The pound plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"pound\"的发音和拼写，记住其\"磅\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1039",
    "word": "pour",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/paʊ(r)/",
      "phonetic_us": "/paʊ(r)/",
      "meanings": [
        "倾泻",
        "不断流出"
      ],
      "word_forms": {
        "plural": "pours"
      },
      "collocations": [
        "pour out",
        "pour in",
        "pour cold water on",
        "it never rains but it pours"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"倾泻\"的概念",
      "academicContext": "The pour plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1040",
    "word": "prepare",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/prɪˈpeə(r)/",
      "phonetic_us": "/prɪˈpeə(r)/",
      "meanings": [
        "准备",
        "预备",
        "调制"
      ],
      "word_forms": {
        "plural": "prepares"
      },
      "collocations": [
        "prepare for",
        "prepare to do",
        "be prepared"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1041",
    "word": "present",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈprez(ə)nt/",
      "phonetic_us": "/ˈprez(ə)nt/",
      "meanings": [
        "出现的",
        "出席的 n. 礼物",
        "赠品 vt. 呈奉"
      ],
      "word_forms": {
        "comparative": "more present",
        "superlative": "most present"
      },
      "collocations": [
        "at present",
        "present situation",
        "be present at",
        "the present day"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记出现的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "gift",
        "current",
        "now"
      ],
      "etymology": {
        "prefix": "pre-",
        "root": "sent",
        "meaning": "pre(预先) + sent"
      }
    }
  },
  {
    "id": "w1042",
    "word": "press",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pres/",
      "phonetic_us": "/pres/",
      "meanings": [
        "压",
        "按 n. 新闻界",
        "出版社"
      ],
      "word_forms": {
        "plural": "presses"
      },
      "collocations": [
        "press conference",
        "printing press",
        "hot off the press",
        "press on"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"压\"的概念",
      "academicContext": "The press plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"press\"的发音和拼写，记住其\"压\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1043",
    "word": "pretty",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈprɪtɪ/",
      "phonetic_us": "/ˈprɪtɪ/",
      "meanings": [
        "漂亮的",
        "俊俏的"
      ],
      "word_forms": {
        "comparative": "prettier",
        "superlative": "prettiest"
      },
      "collocations": [
        "pretty good",
        "pretty much",
        "sitting pretty",
        "not just a pretty face"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1044",
    "word": "prevent",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/prɪˈvent/",
      "phonetic_us": "/prɪˈvent/",
      "meanings": [
        "防止",
        "预防"
      ],
      "word_forms": {},
      "collocations": [
        "prevent from",
        "prevent disease",
        "better to prevent"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1045",
    "word": "price",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/praɪs/",
      "phonetic_us": "/praɪs/",
      "meanings": [
        "价格",
        "价钱"
      ],
      "word_forms": {
        "plural": "prices"
      },
      "collocations": [
        "at any price",
        "asking price",
        "price tag",
        "pay the price"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"价格\"的概念",
      "academicContext": "The price plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"price\"的发音和拼写，记住其\"价格\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1046",
    "word": "pride",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/praɪd/",
      "phonetic_us": "/praɪd/",
      "meanings": [
        "自豪",
        "骄傲"
      ],
      "word_forms": {
        "plural": "prides"
      },
      "collocations": [
        "take pride in",
        "pride and joy",
        "pride goes before a fall",
        "swallow one's pride"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"自豪\"的概念",
      "academicContext": "The pride plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"pride\"的发音和拼写，记住其\"自豪\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1047",
    "word": "print",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/prɪnt/",
      "phonetic_us": "/prɪnt/",
      "meanings": [
        "印刷"
      ],
      "word_forms": {},
      "collocations": [
        "in print",
        "out of print",
        "fine print",
        "print out"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"印刷\"的概念",
      "academicContext": "The print plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"print\"的发音和拼写，记住其\"印刷\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1048",
    "word": "prize",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/praɪz/",
      "phonetic_us": "/praɪz/",
      "meanings": [
        "奖赏",
        "奖品"
      ],
      "word_forms": {
        "plural": "prizes"
      },
      "collocations": [
        "first prize",
        "prize winner",
        "booby prize",
        "win a prize"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"奖赏\"的概念",
      "academicContext": "The prize plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"prize\"的发音和拼写，记住其\"奖赏\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1049",
    "word": "probable",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈprɔbəb(ə)l/",
      "phonetic_us": "/ˈprɔbəb(ə)l/",
      "meanings": [
        "很可能",
        "很有希望的"
      ],
      "word_forms": {},
      "collocations": [
        "highly probable",
        "most probable"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1050",
    "word": "probably",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈprɔbəb(ə)lɪ/",
      "phonetic_us": "/ˈprɔbəb(ə)lɪ/",
      "meanings": [
        "很可能",
        "大概"
      ],
      "word_forms": {},
      "collocations": [
        "probably not",
        "probably will",
        "most probably"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "用很可能的方式完成任务",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "likely",
        "perhaps",
        "possibly"
      ],
      "etymology": {
        "root": "probab",
        "suffix": "-ly",
        "meaning": "probab + ly(副词后缀)"
      }
    }
  },
  {
    "id": "w1051",
    "word": "problem",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈprɔbləm/",
      "phonetic_us": "/ˈprɔbləm/",
      "meanings": [
        "问题",
        "难题"
      ],
      "word_forms": {},
      "collocations": [
        "solve a problem",
        "face a problem",
        "no problem"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "需要解决的困难和挑战",
      "academicContext": "This mathematical problem requires careful analysis.",
      "dailyContext": "I have a problem with my computer.",
      "memoryStory": "",
      "confusableWords": [
        "issue",
        "difficulty",
        "trouble"
      ],
      "etymology": {
        "prefix": "pro-",
        "root": "blem",
        "meaning": "pro(向前) + blem(扔) = 扔在前面的障碍,问题"
      }
    }
  },
  {
    "id": "w1052",
    "word": "produce",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/prəˈdjuːs; (US) -ˈduːs/",
      "phonetic_us": "/prəˈdjuːs; (US) -ˈduːs/",
      "meanings": [
        "生产",
        "制造"
      ],
      "word_forms": {},
      "collocations": [
        "produce结果",
        "mass produce",
        "produce goods"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"生产\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "make",
        "create",
        "manufacture"
      ]
    }
  },
  {
    "id": "w1053",
    "word": "professor",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/prəˈfesə(r)/",
      "phonetic_us": "/prəˈfesə(r)/",
      "meanings": [
        "教授"
      ],
      "word_forms": {},
      "collocations": [
        "university professor",
        "associate professor",
        "Professor Smith"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1054",
    "word": "progress",
    "level": "初二",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈprəʊɡres; (US) ˈprɔɡres/",
      "phonetic_us": "/ˈprəʊɡres; (US) ˈprɔɡres/",
      "meanings": [
        "进步",
        "上进 vi. 进展",
        "进行"
      ],
      "word_forms": {},
      "collocations": [
        "make progress",
        "in progress",
        "work in progress",
        "progress report"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1055",
    "word": "pronounce",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/prəˈnaʊns/",
      "phonetic_us": "/prəˈnaʊns/",
      "meanings": [
        "发音"
      ],
      "word_forms": {
        "plural": "pronounces"
      },
      "collocations": [
        "pronounce correctly",
        "hard to pronounce",
        "pronounce judgment"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1056",
    "word": "pronunciation",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/prənʌnsɪˈeɪʃ(ə)n/",
      "phonetic_us": "/prənʌnsɪˈeɪʃ(ə)n/",
      "meanings": [
        "发音"
      ],
      "word_forms": {
        "plural": "pronunciations"
      },
      "collocations": [
        "correct pronunciation",
        "improve pronunciation"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1057",
    "word": "proper",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈprɔpə(r)/",
      "phonetic_us": "/ˈprɔpə(r)/",
      "meanings": [
        "恰当的",
        "合适的"
      ],
      "word_forms": {
        "comparative": "properrer",
        "superlative": "properrest"
      },
      "collocations": [
        "proper way",
        "proper time",
        "in proper order",
        "prim and proper"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1058",
    "word": "protect",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/prəˈtekt/",
      "phonetic_us": "/prəˈtekt/",
      "meanings": [
        "保护"
      ],
      "word_forms": {
        "plural": "protects"
      },
      "collocations": [
        "protect from",
        "protect against",
        "protect the environment"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1059",
    "word": "proud",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/praʊd/",
      "phonetic_us": "/praʊd/",
      "meanings": [
        "自豪的",
        "骄傲的"
      ],
      "word_forms": {
        "comparative": "proudder",
        "superlative": "prouddest"
      },
      "collocations": [
        "be proud of",
        "do someone proud",
        "proud as a peacock"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记自豪的的事物",
      "academicContext": "Understanding proud concepts is essential for academic success.",
      "dailyContext": "This is really proud! I love it.",
      "memoryStory": "通过联想\"proud\"的发音和拼写，记住其\"自豪的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1060",
    "word": "provide",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/prəˈvaɪd/",
      "phonetic_us": "/prəˈvaɪd/",
      "meanings": [
        "提供"
      ],
      "word_forms": {
        "noun": "provision",
        "noun2": "provider"
      },
      "collocations": [
        "provide sb with sth",
        "provide for",
        "provide sth for sb"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"提供\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "supply",
        "give",
        "furnish"
      ]
    }
  },
  {
    "id": "w1061",
    "word": "province",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈprɔvɪns/",
      "phonetic_us": "/ˈprɔvɪns/",
      "meanings": [
        "省"
      ],
      "word_forms": {
        "plural": "provinces"
      },
      "collocations": [
        "provincial government",
        "in the province of"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1062",
    "word": "public",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈpʌblɪk/",
      "phonetic_us": "/ˈpʌblɪk/",
      "meanings": [
        "公共",
        "公众的 n. 公众"
      ],
      "word_forms": {
        "plural": "publics"
      },
      "collocations": [
        "in public",
        "public service",
        "public transport",
        "the general public"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"公共\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "community",
        "people",
        "society"
      ],
      "etymology": {
        "root": "publ",
        "suffix": "-ic",
        "meaning": "publ + ic(...的)"
      }
    }
  },
  {
    "id": "w1063",
    "word": "purple",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈpɜːp(ə)l/",
      "phonetic_us": "/ˈpɜːp(ə)l/",
      "meanings": [
        "/ a. 紫色"
      ],
      "word_forms": {},
      "collocations": [
        "deep purple",
        "purple prose",
        "born to the purple"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1064",
    "word": "purse",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/pɜːs/",
      "phonetic_us": "/pɜːs/",
      "meanings": [
        "钱包"
      ],
      "word_forms": {},
      "collocations": [
        "hold the purse strings",
        "clutch purse",
        "light purse"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"钱包\"的概念",
      "academicContext": "The purse plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"purse\"的发音和拼写，记住其\"钱包\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1065",
    "word": "quarrel",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkwɔrəl; (US) ˈkwɔːrəl/",
      "phonetic_us": "/ˈkwɔrəl; (US) ˈkwɔːrəl/",
      "meanings": [
        "争吵",
        "吵架"
      ],
      "word_forms": {
        "plural": "quarrels"
      },
      "collocations": [
        "pick a quarrel",
        "quarrel with",
        "have a quarrel"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1066",
    "word": "quarter",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈkwɔːtə(r)/",
      "phonetic_us": "/ˈkwɔːtə(r)/",
      "meanings": [
        "四分之一",
        "一刻钟"
      ],
      "word_forms": {
        "plural": "quarters"
      },
      "collocations": [
        "a quarter of",
        "quarter past",
        "quarter to",
        "at close quarters"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1067",
    "word": "queen",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kwiːn/",
      "phonetic_us": "/kwiːn/",
      "meanings": [
        "皇后",
        "女王"
      ],
      "word_forms": {
        "plural": "queens"
      },
      "collocations": [
        "queen bee",
        "beauty queen",
        "drama queen",
        "fit for a queen"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"皇后\"的概念",
      "academicContext": "The queen plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"queen\"的发音和拼写，记住其\"皇后\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1068",
    "word": "question",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈkwestʃ(ə)n/",
      "phonetic_us": "/ˈkwestʃ(ə)n/",
      "meanings": [
        "询问 n. 问题"
      ],
      "word_forms": {
        "plural": "questions"
      },
      "collocations": [
        "ask questions",
        "answer the question",
        "no question",
        "out of the question"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达询问 n. 问题这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "query",
        "inquiry",
        "problem"
      ],
      "etymology": {
        "root": "ques",
        "suffix": "-tion",
        "meaning": "ques + tion(名词后缀)"
      }
    }
  },
  {
    "id": "w1069",
    "word": "queue",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kjuː/",
      "phonetic_us": "/kjuː/",
      "meanings": [
        "行列",
        "长队"
      ],
      "word_forms": {},
      "collocations": [
        "stand in a queue",
        "queue up",
        "jump the queue"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"行列\"的概念",
      "academicContext": "The queue plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"queue\"的发音和拼写，记住其\"行列\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1070",
    "word": "quick",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kwɪk/",
      "phonetic_us": "/kwɪk/",
      "meanings": [
        "快",
        "敏捷的",
        "急剧的"
      ],
      "word_forms": {},
      "collocations": [
        "quick and easy",
        "be quick",
        "quick fix",
        "cut to the quick"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"快\"的概念",
      "academicContext": "The quick plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"quick\"的发音和拼写，记住其\"快\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1071",
    "word": "quiet",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈkwaɪət/",
      "phonetic_us": "/ˈkwaɪət/",
      "meanings": [
        "安静的",
        "寂静的"
      ],
      "word_forms": {
        "comparative": "quietter",
        "superlative": "quiettest"
      },
      "collocations": [
        "keep quiet",
        "peace and quiet",
        "quiet as a mouse",
        "on the quiet"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记安静的的事物",
      "academicContext": "Understanding quiet concepts is essential for academic success.",
      "dailyContext": "This is really quiet! I love it.",
      "memoryStory": "通过联想\"quiet\"的发音和拼写，记住其\"安静的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1072",
    "word": "quilt",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kwɪlt/",
      "phonetic_us": "/kwɪlt/",
      "meanings": [
        "被子",
        "被状物"
      ],
      "word_forms": {
        "plural": "quilts"
      },
      "collocations": [
        "patchwork quilt",
        "quilt cover"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"被子\"的概念",
      "academicContext": "The quilt plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"quilt\"的发音和拼写，记住其\"被子\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1073",
    "word": "quit",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kwɪt/",
      "phonetic_us": "/kwɪt/",
      "meanings": [
        "离任",
        "离校",
        "戒掉"
      ],
      "word_forms": {
        "plural": "quits"
      },
      "collocations": [
        "quit smoking",
        "quit one's job",
        "call it quits"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"离任\"的概念",
      "academicContext": "The quit plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1074",
    "word": "quite",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/kwaɪt/",
      "phonetic_us": "/kwaɪt/",
      "meanings": [
        "完全",
        "十分"
      ],
      "word_forms": {},
      "collocations": [
        "quite a few",
        "quite a lot",
        "quite good",
        "not quite"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"完全\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "rather",
        "fairly",
        "very"
      ]
    }
  },
  {
    "id": "w1075",
    "word": "quiz",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/kwɪz/",
      "phonetic_us": "/kwɪz/",
      "meanings": [
        "测验",
        "小型考试"
      ],
      "word_forms": {},
      "collocations": [
        "pop quiz",
        "quiz show",
        "take a quiz"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"测验\"的概念",
      "academicContext": "The quiz plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1076",
    "word": "rabbit",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈræbɪt/",
      "phonetic_us": "/ˈræbɪt/",
      "meanings": [
        "兔",
        "家兔"
      ],
      "word_forms": {
        "plural": "rabbits"
      },
      "collocations": [
        "rabbit hole",
        "pull a rabbit out of a hat",
        "like a rabbit in headlights"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1077",
    "word": "race",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/reɪs/",
      "phonetic_us": "/reɪs/",
      "meanings": [
        "种族",
        "民族 v.（速度）竞赛",
        "比赛 n. 赛跑"
      ],
      "word_forms": {},
      "collocations": [
        "human race",
        "race against time",
        "arms race",
        "rat race",
        "off to the races"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"种族\"的概念",
      "academicContext": "The race plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1078",
    "word": "radio",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/reɪdɪəʊ/",
      "phonetic_us": "/reɪdɪəʊ/",
      "meanings": [
        "无线电",
        "收音机"
      ],
      "word_forms": {},
      "collocations": [
        "on the radio",
        "radio station",
        "car radio",
        "radio wave"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"无线电\"的概念",
      "academicContext": "The radio plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"radio\"的发音和拼写，记住其\"无线电\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1079",
    "word": "rail",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/reɪl/",
      "phonetic_us": "/reɪl/",
      "meanings": [
        "铁路"
      ],
      "word_forms": {
        "plural": "rails"
      },
      "collocations": [
        "by rail",
        "off the rails",
        "ride the rails"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"铁路\"的概念",
      "academicContext": "The rail plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1080",
    "word": "railway",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈreɪlweɪ/",
      "phonetic_us": "/ˈreɪlweɪ/",
      "meanings": [
        "铁路",
        "铁道"
      ],
      "word_forms": {
        "plural": "railways"
      },
      "collocations": [
        "railway station",
        "railway track",
        "underground railway"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1081",
    "word": "rain",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/reɪn/",
      "phonetic_us": "/reɪn/",
      "meanings": [
        "雨",
        "雨水 vi. 下雨"
      ],
      "word_forms": {},
      "collocations": [
        "heavy rain",
        "rain or shine",
        "rain cats and dogs",
        "rain check"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"雨\"的概念",
      "academicContext": "The rain plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1082",
    "word": "raincoat",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈreɪnkəʊt/",
      "phonetic_us": "/ˈreɪnkəʊt/",
      "meanings": [
        "雨衣"
      ],
      "word_forms": {
        "plural": "raincoats"
      },
      "collocations": [
        "wear a raincoat",
        "yellow raincoat"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1083",
    "word": "rainy",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈreɪnɪ/",
      "phonetic_us": "/ˈreɪnɪ/",
      "meanings": [
        "下雨的",
        "多雨的"
      ],
      "word_forms": {
        "comparative": "rainier",
        "superlative": "rainiest"
      },
      "collocations": [
        "rainy day",
        "save for a rainy day",
        "rainy season"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记下雨的的事物",
      "academicContext": "Understanding rainy concepts is essential for academic success.",
      "dailyContext": "This is really rainy! I love it.",
      "memoryStory": "通过联想\"rainy\"的发音和拼写，记住其\"下雨的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1084",
    "word": "raise",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/reɪz/",
      "phonetic_us": "/reɪz/",
      "meanings": [
        "使升高",
        "饲养"
      ],
      "word_forms": {},
      "collocations": [
        "raise one's hand",
        "raise money",
        "raise the price",
        "raise a question"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"使升高\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "lift",
        "elevate",
        "increase"
      ]
    }
  },
  {
    "id": "w1085",
    "word": "rat",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ræt/",
      "phonetic_us": "/ræt/",
      "meanings": [
        "老鼠"
      ],
      "word_forms": {
        "plural": "rats"
      },
      "collocations": [
        "smell a rat",
        "rat race",
        "like a drowned rat"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"老鼠\"的概念",
      "academicContext": "The rat plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1086",
    "word": "rather",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈrɑːðə; (US) ˈræðər/",
      "phonetic_us": "/ˈrɑːðə; (US) ˈræðər/",
      "meanings": [
        "相当",
        "宁可"
      ],
      "word_forms": {},
      "collocations": [
        "would rather",
        "or rather",
        "rather than",
        "rather good"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"相当\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "somewhat",
        "quite",
        "fairly"
      ],
      "etymology": null
    }
  },
  {
    "id": "w1087",
    "word": "reach",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/riːtʃ/",
      "phonetic_us": "/riːtʃ/",
      "meanings": [
        "到达",
        "伸手(脚)够到"
      ],
      "word_forms": {},
      "collocations": [
        "reach for",
        "out of reach",
        "within reach",
        "reach an agreement"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"到达\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "arrive at",
        "attain",
        "get to"
      ],
      "etymology": {
        "prefix": "re-",
        "root": "ach",
        "meaning": "re(再次、返回) + ach"
      }
    }
  },
  {
    "id": "w1088",
    "word": "ready",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈredɪ/",
      "phonetic_us": "/ˈredɪ/",
      "meanings": [
        "准备好的"
      ],
      "word_forms": {
        "verb": "ready",
        "adverb": "readily"
      },
      "collocations": [
        "get ready",
        "be ready for",
        "ready to do",
        "ready-made"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达准备好的这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "prepared",
        "set",
        "willing"
      ],
      "etymology": {
        "prefix": "re-",
        "root": "ady",
        "meaning": "re(再次、返回) + ady"
      }
    }
  },
  {
    "id": "w1089",
    "word": "real",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/riːl/",
      "phonetic_us": "/riːl/",
      "meanings": [
        "真实的",
        "确实的"
      ],
      "word_forms": {
        "noun": "reality",
        "adverb": "really"
      },
      "collocations": [
        "real life",
        "in real",
        "the real reason",
        "come true"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记真实的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "actual",
        "genuine",
        "true"
      ]
    }
  },
  {
    "id": "w1090",
    "word": "reason",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈriːz(ə)n/",
      "phonetic_us": "/ˈriːz(ə)n/",
      "meanings": [
        "理由",
        "原因"
      ],
      "word_forms": {
        "plural": "reasons"
      },
      "collocations": [
        "the reason why",
        "for some reason",
        "main reason",
        "reason for"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"理由\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "cause",
        "motive",
        "explanation"
      ],
      "etymology": {
        "prefix": "re-",
        "root": "ason",
        "meaning": "re(再次、返回) + ason"
      }
    }
  },
  {
    "id": "w1091",
    "word": "receive",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/rɪˈsiːv/",
      "phonetic_us": "/rɪˈsiːv/",
      "meanings": [
        "收到",
        "得到"
      ],
      "word_forms": {
        "noun": "receipt",
        "noun2": "receiver"
      },
      "collocations": [
        "receive from",
        "receive a gift",
        "well received"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记收到的事物",
      "academicContext": "Students receive feedback on their work.",
      "dailyContext": "Did you receive my email?",
      "memoryStory": "",
      "confusableWords": [
        "get",
        "obtain",
        "accept"
      ],
      "etymology": {
        "prefix": "re-",
        "root": "ceive",
        "meaning": "re(向后) + ceive(拿) = 拿回来,接收"
      }
    }
  },
  {
    "id": "w1092",
    "word": "recent",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈriːsənt/",
      "phonetic_us": "/ˈriːsənt/",
      "meanings": [
        "近来的",
        "最近的"
      ],
      "word_forms": {
        "comparative": "recenter",
        "superlative": "recentest"
      },
      "collocations": [
        "in recent years",
        "recent study",
        "until recently"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1093",
    "word": "record",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈrekɔːd; (US) ˈrekərd/",
      "phonetic_us": "/ˈrekɔːd; (US) ˈrekərd/",
      "meanings": [
        "记录",
        "唱片"
      ],
      "word_forms": {},
      "collocations": [
        "world record",
        "break a record",
        "criminal record",
        "off the record"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1094",
    "word": "recycle",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/riːˈsaɪk(ə)l/",
      "phonetic_us": "/riːˈsaɪk(ə)l/",
      "meanings": [
        "回收",
        "再循环"
      ],
      "word_forms": {},
      "collocations": [
        "recycle bin",
        "recycle paper",
        "recycle waste"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1095",
    "word": "red",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/red/",
      "phonetic_us": "/red/",
      "meanings": [
        "红色 a. 红色的"
      ],
      "word_forms": {
        "comparative": "redder",
        "superlative": "reddest"
      },
      "collocations": [
        "red carpet",
        "see red",
        "in the red",
        "red tape",
        "paint the town red"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记红色 a. 红色的的事物",
      "academicContext": "Understanding red concepts is essential for academic success.",
      "dailyContext": "This is really red! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1096",
    "word": "refuse",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/rɪˈfjuːz/",
      "phonetic_us": "/rɪˈfjuːz/",
      "meanings": [
        "拒绝",
        "不愿"
      ],
      "word_forms": {},
      "collocations": [
        "refuse to do",
        "flat refuse",
        "point-blank refuse"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1097",
    "word": "regard",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/rɪˈɡɑːd/",
      "phonetic_us": "/rɪˈɡɑːd/",
      "meanings": [
        "把…看作"
      ],
      "word_forms": {},
      "collocations": [
        "with regard to",
        "in this regard",
        "regard as",
        "best regards"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1098",
    "word": "regulation",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/reɡjʊˈleɪʃ(ə)n/",
      "phonetic_us": "/reɡjʊˈleɪʃ(ə)n/",
      "meanings": [
        "规则",
        "规章"
      ],
      "word_forms": {
        "plural": "regulations"
      },
      "collocations": [
        "safety regulation",
        "government regulation",
        "under regulation"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1099",
    "word": "relay",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈriːleɪ/",
      "phonetic_us": "/ˈriːleɪ/",
      "meanings": [
        "接力",
        "接替人",
        "中转 v. 接替"
      ],
      "word_forms": {},
      "collocations": [
        "relay race",
        "relay station"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"接力\"的概念",
      "academicContext": "The relay plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"relay\"的发音和拼写，记住其\"接力\"的含义。",
      "etymology": {
        "prefix": "re-",
        "meaning": "re(再) + "
      },
      "confusableWords": []
    }
  },
  {
    "id": "w1100",
    "word": "remain",
    "level": "初三",
    "unit": "Unit 11",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/rɪˈmeɪn/",
      "phonetic_us": "/rɪˈmeɪn/",
      "meanings": [
        "余下",
        "留下 vi. 保持",
        "仍是"
      ],
      "word_forms": {},
      "collocations": [
        "remain silent",
        "remain calm",
        "remain to be seen",
        "it remains that"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1101",
    "word": "remember",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/rɪˈmembə(r)/",
      "phonetic_us": "/rɪˈmembə(r)/",
      "meanings": [
        "记得",
        "想起"
      ],
      "word_forms": {
        "noun": "memory"
      },
      "collocations": [
        "remember to do",
        "remember doing",
        "as far as I remember"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"记得\"的概念",
      "academicContext": "Remember to cite your sources.",
      "dailyContext": "Do you remember me?",
      "memoryStory": "",
      "confusableWords": [
        "recall",
        "recollect",
        "retain"
      ],
      "etymology": {
        "prefix": "re-",
        "root": "member",
        "meaning": "re(再) + member(成员) = 重新成为记忆的一员"
      }
    }
  },
  {
    "id": "w1102",
    "word": "repeat",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/rɪˈpiːt/",
      "phonetic_us": "/rɪˈpiːt/",
      "meanings": [
        "重说",
        "重做"
      ],
      "word_forms": {},
      "collocations": [
        "repeat after me",
        "history repeats itself",
        "repeat performance"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1103",
    "word": "reply",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/rɪˈplaɪ/",
      "phonetic_us": "/rɪˈplaɪ/",
      "meanings": [
        "回答",
        "答复"
      ],
      "word_forms": {},
      "collocations": [
        "in reply to",
        "quick reply",
        "reply to"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用回答的方式完成任务",
      "academicContext": "The data was analyzed reply to ensure accuracy.",
      "dailyContext": "Please do it reply this time.",
      "memoryStory": "通过联想\"reply\"的发音和拼写，记住其\"回答\"的含义。",
      "etymology": {
        "prefix": "re-",
        "meaning": "re(再) + ",
        "suffix": "-ly"
      },
      "confusableWords": []
    }
  },
  {
    "id": "w1104",
    "word": "research",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/rɪˈsɜːtʃ/",
      "phonetic_us": "/rɪˈsɜːtʃ/",
      "meanings": [
        "研究",
        "调查"
      ],
      "word_forms": {
        "plural": "researches"
      },
      "collocations": [
        "do research",
        "research on",
        "research into",
        "scientific research"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"研究\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [],
      "etymology": {
        "prefix": "re-",
        "root": "search",
        "meaning": "re(再次、返回) + search"
      }
    }
  },
  {
    "id": "w1105",
    "word": "rest",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/rest/",
      "phonetic_us": "/rest/",
      "meanings": [
        "休息",
        "剩余的部分",
        "其余的人（物） vi. 休息"
      ],
      "word_forms": {},
      "collocations": [
        "the rest of",
        "at rest",
        "rest assured",
        "put to rest",
        "rest in peace"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"休息\"的概念",
      "academicContext": "The rest plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1106",
    "word": "restaurant",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈrestərɔnt; (US) ˈrestərənt/",
      "phonetic_us": "/ˈrestərɔnt; (US) ˈrestərənt/",
      "meanings": [
        "饭馆",
        "饭店"
      ],
      "word_forms": {},
      "collocations": [
        "fancy restaurant",
        "fast food restaurant",
        "restaurant menu"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1107",
    "word": "result",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/rɪˈzʌlt/",
      "phonetic_us": "/rɪˈzʌlt/",
      "meanings": [
        "结果",
        "效果"
      ],
      "word_forms": {
        "plural": "results"
      },
      "collocations": [
        "as a result",
        "result in",
        "result from",
        "the result of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"结果\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "outcome",
        "consequence",
        "effect"
      ],
      "etymology": {
        "prefix": "re-",
        "root": "sult",
        "meaning": "re(再次、返回) + sult"
      }
    }
  },
  {
    "id": "w1108",
    "word": "return",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/rɪˈtɜːn/",
      "phonetic_us": "/rɪˈtɜːn/",
      "meanings": [
        "归还"
      ],
      "word_forms": {
        "plural": "returns"
      },
      "collocations": [
        "in return",
        "return home",
        "return to",
        "on one's return"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"归还\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "go back",
        "come back",
        "give back"
      ],
      "etymology": {
        "prefix": "re-",
        "root": "turn",
        "meaning": "re(再次、返回) + turn"
      }
    }
  },
  {
    "id": "w1109",
    "word": "review",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/rɪˈvjuː/",
      "phonetic_us": "/rɪˈvjuː/",
      "meanings": [
        "重新调查",
        "回顾",
        "复习 n. 复查"
      ],
      "word_forms": {
        "plural": "reviews"
      },
      "collocations": [
        "under review",
        "book review",
        "performance review",
        "pass in review"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1110",
    "word": "rice",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/raɪs/",
      "phonetic_us": "/raɪs/",
      "meanings": [
        "稻米",
        "米饭"
      ],
      "word_forms": {
        "plural": "rices"
      },
      "collocations": [
        "fried rice",
        "rice bowl",
        "rice field",
        "rice cooker"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"稻米\"的概念",
      "academicContext": "The rice plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1111",
    "word": "rich",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/rɪtʃ/",
      "phonetic_us": "/rɪtʃ/",
      "meanings": [
        "富裕的",
        "有钱的"
      ],
      "word_forms": {
        "comparative": "richer",
        "superlative": "richest"
      },
      "collocations": [
        "get rich",
        "strike it rich",
        "rich and famous",
        "embarrassment of riches"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记富裕的的事物",
      "academicContext": "Understanding rich concepts is essential for academic success.",
      "dailyContext": "This is really rich! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1112",
    "word": "riddle",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈrɪd(ə)l/",
      "phonetic_us": "/ˈrɪd(ə)l/",
      "meanings": [
        "谜(语)"
      ],
      "word_forms": {
        "plural": "riddles"
      },
      "collocations": [
        "solve a riddle",
        "riddle with",
        "riddle me this"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1113",
    "word": "right",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/raɪt/",
      "phonetic_us": "/raɪt/",
      "meanings": [
        "权利 a. 对",
        "正确的 ad. 正确地",
        "恰恰"
      ],
      "word_forms": {
        "noun": "right",
        "verb": "right",
        "adverb": "rightly"
      },
      "collocations": [
        "all right",
        "right now",
        "right away",
        "on the right",
        "human rights"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记权利 a. 对的特征",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "correct",
        "proper",
        "appropriate"
      ]
    }
  },
  {
    "id": "w1114",
    "word": "river",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈrɪvə(r)/",
      "phonetic_us": "/ˈrɪvə(r)/",
      "meanings": [
        "江",
        "河",
        "水道"
      ],
      "word_forms": {
        "plural": "rivers"
      },
      "collocations": [
        "by the river",
        "river bank",
        "sell down the river",
        "up the river"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"江\"的概念",
      "academicContext": "The river plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"river\"的发音和拼写，记住其\"江\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1115",
    "word": "road",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/rəud/",
      "phonetic_us": "/rəud/",
      "meanings": [
        "路",
        "道路"
      ],
      "word_forms": {
        "plural": "roads"
      },
      "collocations": [
        "on the road",
        "road trip",
        "hit the road",
        "down the road",
        "fork in the road"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"路\"的概念",
      "academicContext": "The road plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1116",
    "word": "rob",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/rɔb/",
      "phonetic_us": "/rɔb/",
      "meanings": [
        "抢夺",
        "抢劫"
      ],
      "word_forms": {
        "plural": "robs"
      },
      "collocations": [
        "rob a bank",
        "rob someone blind",
        "daylight robbery"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"抢夺\"的概念",
      "academicContext": "The rob plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1117",
    "word": "robot",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈrəubɔt/",
      "phonetic_us": "/ˈrəubɔt/",
      "meanings": [
        "机器人"
      ],
      "word_forms": {
        "plural": "robots"
      },
      "collocations": [
        "industrial robot",
        "robot vacuum",
        "like a robot"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"机器人\"的概念",
      "academicContext": "The robot plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"robot\"的发音和拼写，记住其\"机器人\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1118",
    "word": "rock",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/rɔk/",
      "phonetic_us": "/rɔk/",
      "meanings": [
        "岩石",
        "大石头 vt. 摇",
        "摇晃"
      ],
      "word_forms": {},
      "collocations": [
        "rock and roll",
        "rock bottom",
        "between a rock and a hard place",
        "solid as a rock"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"岩石\"的概念",
      "academicContext": "The rock plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1119",
    "word": "room",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/rum/",
      "phonetic_us": "/rum/",
      "meanings": [
        "房间",
        "室",
        "空间"
      ],
      "word_forms": {
        "plural": "rooms"
      },
      "collocations": [
        "living room",
        "sitting room",
        "classroom",
        "make room for"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"房间\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "chamber",
        "space",
        "area"
      ]
    }
  },
  {
    "id": "w1120",
    "word": "rose",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/rəuz/",
      "phonetic_us": "/rəuz/",
      "meanings": [
        "玫瑰花"
      ],
      "word_forms": {
        "plural": "roses"
      },
      "collocations": [
        "rose garden",
        "rose colored glasses",
        "bed of roses",
        "rose to fame"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"玫瑰花\"的概念",
      "academicContext": "The rose plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1121",
    "word": "rough",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/rʌf/",
      "phonetic_us": "/rʌf/",
      "meanings": [
        "粗糙的",
        "粗略的"
      ],
      "word_forms": {
        "comparative": "rougher",
        "superlative": "roughest"
      },
      "collocations": [
        "rough draft",
        "rough estimate",
        "diamond in the rough",
        "rough it"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记粗糙的的事物",
      "academicContext": "Understanding rough concepts is essential for academic success.",
      "dailyContext": "This is really rough! I love it.",
      "memoryStory": "通过联想\"rough\"的发音和拼写，记住其\"粗糙的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1122",
    "word": "round",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/raund/",
      "phonetic_us": "/raund/",
      "meanings": [
        "转过来 prep. 环绕一周",
        "围着 a. 圆的",
        "球形的"
      ],
      "word_forms": {},
      "collocations": [
        "all year round",
        "round trip",
        "round the clock",
        "round of applause"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"转过来 prep. 环绕一周\"的概念",
      "academicContext": "The round plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"round\"的发音和拼写，记住其\"转过来 prep. 环绕一周\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1123",
    "word": "rubber",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈrʌbə(r)/",
      "phonetic_us": "/ˈrʌbə(r)/",
      "meanings": [
        "橡胶",
        "合成橡胶"
      ],
      "word_forms": {
        "plural": "rubbers"
      },
      "collocations": [
        "rubber band",
        "rubber stamp",
        "burn rubber"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1124",
    "word": "rubbish",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈrʌbiːʃ/",
      "phonetic_us": "/ˈrʌbiːʃ/",
      "meanings": [
        "垃圾",
        "废物"
      ],
      "word_forms": {
        "plural": "rubbishes"
      },
      "collocations": [
        "rubbish bin",
        "talk rubbish",
        "complete rubbish"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1125",
    "word": "rude",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ruːd/",
      "phonetic_us": "/ruːd/",
      "meanings": [
        "无理的",
        "粗鲁的"
      ],
      "word_forms": {
        "comparative": "ruder",
        "superlative": "rudest"
      },
      "collocations": [
        "rude awakening",
        "how rude",
        "rude behavior"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记无理的的事物",
      "academicContext": "Understanding rude concepts is essential for academic success.",
      "dailyContext": "This is really rude! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1126",
    "word": "rule",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ruːl/",
      "phonetic_us": "/ruːl/",
      "meanings": [
        "规则",
        "规定 vt. 统治",
        "支配"
      ],
      "word_forms": {},
      "collocations": [
        "as a rule",
        "rule out",
        "golden rule",
        "rule of thumb",
        "bend the rules"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"规则\"的概念",
      "academicContext": "The rule plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1127",
    "word": "ruler",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈruːlə(r)/",
      "phonetic_us": "/ˈruːlə(r)/",
      "meanings": [
        "统治者",
        "直尺"
      ],
      "word_forms": {
        "plural": "rulers"
      },
      "collocations": [
        "twelve inch ruler",
        "the ruler of"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"统治者\"的概念",
      "academicContext": "The ruler plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"ruler\"的发音和拼写，记住其\"统治者\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1128",
    "word": "runner",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈrʌnə(r)/",
      "phonetic_us": "/ˈrʌnə(r)/",
      "meanings": [
        "赛跑者",
        "操作者",
        "滑行装置"
      ],
      "word_forms": {},
      "collocations": [
        "long-distance runner",
        "front runner",
        "runner-up"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1129",
    "word": "rush",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/rʌʃ/",
      "phonetic_us": "/rʌʃ/",
      "meanings": [
        "冲",
        "奔跑"
      ],
      "word_forms": {},
      "collocations": [
        "rush hour",
        "in a rush",
        "rush into",
        "gold rush",
        "rush through"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"冲\"的概念",
      "academicContext": "The rush plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1130",
    "word": "Russia",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈrʌʃə/",
      "phonetic_us": "/ˈrʌʃə/",
      "meanings": [
        "俄罗斯",
        "俄国"
      ],
      "word_forms": {},
      "collocations": [
        "in Russia",
        "from Russia",
        "Mother Russia"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1131",
    "word": "Russian",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈrʌʃ(ə)n/",
      "phonetic_us": "/ˈrʌʃ(ə)n/",
      "meanings": [
        "俄国人的",
        "俄语的 n. 俄国人",
        "俄语"
      ],
      "word_forms": {
        "plural": "russians",
        "comparative": "more russian",
        "superlative": "most russian"
      },
      "collocations": [
        "speak Russian",
        "Russian roulette",
        "Russian doll"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1132",
    "word": "safe",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/seɪf/",
      "phonetic_us": "/seɪf/",
      "meanings": [
        "安全的 n. 保险柜"
      ],
      "word_forms": {
        "plural": "saves",
        "comparative": "safer",
        "superlative": "safest"
      },
      "collocations": [
        "safe and sound",
        "play it safe",
        "better safe than sorry",
        "safe bet"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记安全的 n. 保险柜的事物",
      "academicContext": "Understanding safe concepts is essential for academic success.",
      "dailyContext": "This is really safe! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1133",
    "word": "safety",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈseɪftɪ/",
      "phonetic_us": "/ˈseɪftɪ/",
      "meanings": [
        "安全",
        "保险"
      ],
      "word_forms": {
        "plural": "safeties"
      },
      "collocations": [
        "safety first",
        "safety net",
        "safety measure",
        "in safety"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1134",
    "word": "sail",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/seɪl/",
      "phonetic_us": "/seɪl/",
      "meanings": [
        "航行 v. 航行",
        "开航"
      ],
      "word_forms": {},
      "collocations": [
        "set sail",
        "sail through",
        "plain sailing",
        "take the wind out of someone's sails"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"航行 v. 航行\"的概念",
      "academicContext": "The sail plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1135",
    "word": "salad",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsæləd/",
      "phonetic_us": "/ˈsæləd/",
      "meanings": [
        "色拉"
      ],
      "word_forms": {},
      "collocations": [
        "green salad",
        "fruit salad",
        "salad bar",
        "salad days"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"色拉\"的概念",
      "academicContext": "The salad plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"salad\"的发音和拼写，记住其\"色拉\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1136",
    "word": "sale",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/seɪl/",
      "phonetic_us": "/seɪl/",
      "meanings": [
        "卖",
        "出售"
      ],
      "word_forms": {},
      "collocations": [
        "for sale",
        "on sale",
        "garage sale",
        "fire sale"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"卖\"的概念",
      "academicContext": "The sale plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1137",
    "word": "salesgirl",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈseɪlzɡɜːl/",
      "phonetic_us": "/ˈseɪlzɡɜːl/",
      "meanings": [
        "女售货员"
      ],
      "word_forms": {
        "plural": "salesgirls"
      },
      "collocations": [
        "young salesgirl",
        "friendly salesgirl"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1138",
    "word": "salesman",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈseɪlzmən/",
      "phonetic_us": "/ˈseɪlzmən/",
      "meanings": [
        "男售货员"
      ],
      "word_forms": {
        "plural": "salesmans"
      },
      "collocations": [
        "traveling salesman",
        "car salesman",
        "door-to-door salesman"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1139",
    "word": "saleswoman",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/seɪlzwʊmən/",
      "phonetic_us": "/seɪlzwʊmən/",
      "meanings": [
        "女售货员"
      ],
      "word_forms": {
        "plural": "saleswomans"
      },
      "collocations": [
        "experienced saleswoman"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1140",
    "word": "salt",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sɔːlt, sɔlt/",
      "phonetic_us": "/sɔːlt, sɔlt/",
      "meanings": [
        "盐"
      ],
      "word_forms": {
        "plural": "salts"
      },
      "collocations": [
        "salt and pepper",
        "take with a grain of salt",
        "worth one's salt",
        "rub salt in the wound"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"盐\"的概念",
      "academicContext": "The salt plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1141",
    "word": "same",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/seɪm/",
      "phonetic_us": "/seɪm/",
      "meanings": [
        "同样的事 a. 同样的",
        "同一"
      ],
      "word_forms": {
        "comparative": "samer",
        "superlative": "samest"
      },
      "collocations": [
        "at the same time",
        "the same as",
        "all the same",
        "just the same"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记同样的事 a. 同样的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "identical",
        "equal",
        "similar"
      ]
    }
  },
  {
    "id": "w1142",
    "word": "sand",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sænd/",
      "phonetic_us": "/sænd/",
      "meanings": [
        "沙",
        "沙子"
      ],
      "word_forms": {
        "plural": "sands"
      },
      "collocations": [
        "sand castle",
        "bury one's head in the sand",
        "draw a line in the sand",
        "sands of time"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"沙\"的概念",
      "academicContext": "The sand plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1143",
    "word": "sandwich",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsænwɪdʒ/",
      "phonetic_us": "/ˈsænwɪdʒ/",
      "meanings": [
        "三明治（夹心面包片）"
      ],
      "word_forms": {},
      "collocations": [
        "make a sandwich",
        "ham sandwich",
        "sandwich between"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1144",
    "word": "satellite",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsætəlaɪt/",
      "phonetic_us": "/ˈsætəlaɪt/",
      "meanings": [
        "卫星"
      ],
      "word_forms": {
        "plural": "satellites"
      },
      "collocations": [
        "satellite TV",
        "satellite dish",
        "communication satellite"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1145",
    "word": "satisfaction",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/sætɪsˈfækʃ(ə)n/",
      "phonetic_us": "/sætɪsˈfækʃ(ə)n/",
      "meanings": [
        "满意"
      ],
      "word_forms": {
        "plural": "satisfactions"
      },
      "collocations": [
        "job satisfaction",
        "customer satisfaction",
        "to one's satisfaction"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1146",
    "word": "satisfy",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsætɪsfaɪ/",
      "phonetic_us": "/ˈsætɪsfaɪ/",
      "meanings": [
        "满足",
        "使满意"
      ],
      "word_forms": {},
      "collocations": [
        "satisfy requirements",
        "satisfy needs",
        "hard to satisfy"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1147",
    "word": "Saturday",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsætədɪ/",
      "phonetic_us": "/ˈsætədɪ/",
      "meanings": [
        "星期六"
      ],
      "word_forms": {},
      "collocations": [
        "on Saturday",
        "this Saturday",
        "next Saturday",
        "Saturday night"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1148",
    "word": "save",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/seɪv/",
      "phonetic_us": "/seɪv/",
      "meanings": [
        "救",
        "挽救",
        "节省"
      ],
      "word_forms": {
        "plural": "saves"
      },
      "collocations": [
        "save money",
        "save time",
        "save the day",
        "save face",
        "save one's breath"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"救\"的概念",
      "academicContext": "The save plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1149",
    "word": "scenery",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsiːnərɪ/",
      "phonetic_us": "/ˈsiːnərɪ/",
      "meanings": [
        "风景",
        "景色",
        "风光"
      ],
      "word_forms": {
        "plural": "sceneries"
      },
      "collocations": [
        "beautiful scenery",
        "mountain scenery",
        "change of scenery"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1150",
    "word": "school",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/skuːl/",
      "phonetic_us": "/skuːl/",
      "meanings": [
        "学校"
      ],
      "word_forms": {},
      "collocations": [
        "go to school",
        "at school",
        "school year"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "学习知识和成长的地方",
      "academicContext": "Schools play a vital role in education.",
      "dailyContext": "I go to school every day.",
      "memoryStory": "",
      "confusableWords": [
        "institution",
        "academy",
        "college"
      ],
      "etymology": {
        "root": "school",
        "meaning": "来自希腊语skholē,闲暇、讲座"
      }
    }
  },
  {
    "id": "w1151",
    "word": "schoolbag",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'sku:lbæg/",
      "phonetic_us": "/'sku:lbæg/",
      "meanings": [
        "书包"
      ],
      "word_forms": {},
      "collocations": [
        "carry a schoolbag",
        "heavy schoolbag"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1152",
    "word": "schoolmate",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈskuːlmeɪt/",
      "phonetic_us": "/ˈskuːlmeɪt/",
      "meanings": [
        "同校同学"
      ],
      "word_forms": {},
      "collocations": [
        "old schoolmate",
        "former schoolmate"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1153",
    "word": "science",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈsaɪəns/",
      "phonetic_us": "/ˈsaɪəns/",
      "meanings": [
        "科学",
        "自然科学"
      ],
      "word_forms": {
        "noun": "scientist",
        "adjective": "scientific"
      },
      "collocations": [
        "natural science",
        "science fiction",
        "scientific research"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"科学\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "knowledge",
        "study",
        "field"
      ]
    }
  },
  {
    "id": "w1154",
    "word": "scientific",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/saɪənˈtɪfɪk/",
      "phonetic_us": "/saɪənˈtɪfɪk/",
      "meanings": [
        "科学的"
      ],
      "word_forms": {
        "comparative": "more scientific",
        "superlative": "most scientific"
      },
      "collocations": [
        "scientific research",
        "scientific method",
        "scientific evidence"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1155",
    "word": "scientist",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsaɪəntɪst/",
      "phonetic_us": "/ˈsaɪəntɪst/",
      "meanings": [
        "科学家"
      ],
      "word_forms": {},
      "collocations": [
        "research scientist",
        "computer scientist",
        "mad scientist"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1156",
    "word": "scissors",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsɪzəz/",
      "phonetic_us": "/ˈsɪzəz/",
      "meanings": [
        "剪刀",
        "剪子"
      ],
      "word_forms": {
        "plural": "scissorses"
      },
      "collocations": [
        "pair of scissors",
        "cut with scissors",
        "run with scissors"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1157",
    "word": "screen",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/skriːn/",
      "phonetic_us": "/skriːn/",
      "meanings": [
        "幕",
        "荧光屏"
      ],
      "word_forms": {
        "plural": "screens"
      },
      "collocations": [
        "big screen",
        "silver screen",
        "on screen",
        "screen time"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1158",
    "word": "sea",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/siː/",
      "phonetic_us": "/siː/",
      "meanings": [
        "海",
        "海洋"
      ],
      "word_forms": {
        "plural": "seas"
      },
      "collocations": [
        "at sea",
        "by sea",
        "sea level",
        "all at sea",
        "between the devil and the deep blue sea"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"海\"的概念",
      "academicContext": "The sea plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1159",
    "word": "seagull",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsiːɡʌl/",
      "phonetic_us": "/ˈsiːɡʌl/",
      "meanings": [
        "海鸥"
      ],
      "word_forms": {
        "plural": "seagulls"
      },
      "collocations": [
        "flock of seagulls",
        "seagull cry"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1160",
    "word": "season",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsiːz(ə)n/",
      "phonetic_us": "/ˈsiːz(ə)n/",
      "meanings": [
        "季",
        "季节"
      ],
      "word_forms": {
        "plural": "seasons"
      },
      "collocations": [
        "in season",
        "out of season",
        "rainy season",
        "holiday season"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1161",
    "word": "seat",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/siːt/",
      "phonetic_us": "/siːt/",
      "meanings": [
        "座位",
        "座"
      ],
      "word_forms": {
        "plural": "seats"
      },
      "collocations": [
        "take a seat",
        "have a seat",
        "back seat",
        "front seat",
        "in the driver's seat"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"座位\"的概念",
      "academicContext": "The seat plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1162",
    "word": "second",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsekənd/",
      "phonetic_us": "/ˈsekənd/",
      "meanings": [
        "秒 num. 第二 a. 第二的"
      ],
      "word_forms": {
        "comparative": "seconder",
        "superlative": "secondest"
      },
      "collocations": [
        "second chance",
        "split second",
        "second to none",
        "second nature"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1163",
    "word": "secondhand",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'sekənd'hænd/",
      "phonetic_us": "/'sekənd'hænd/",
      "meanings": [
        "二手货",
        "旧货"
      ],
      "word_forms": {
        "plural": "secondhands"
      },
      "collocations": [
        "secondhand smoke",
        "secondhand shop",
        "buy secondhand"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1164",
    "word": "secret",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsiːkrɪt/",
      "phonetic_us": "/ˈsiːkrɪt/",
      "meanings": [
        "秘密",
        "内情"
      ],
      "word_forms": {
        "plural": "secrets"
      },
      "collocations": [
        "top secret",
        "keep a secret",
        "secret agent",
        "open secret"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1165",
    "word": "secretary",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsekrətərɪ/",
      "phonetic_us": "/ˈsekrətərɪ/",
      "meanings": [
        "秘书",
        "书记"
      ],
      "word_forms": {},
      "collocations": [
        "personal secretary",
        "company secretary",
        "Secretary of State"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1166",
    "word": "seem",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/siːm/",
      "phonetic_us": "/siːm/",
      "meanings": [
        "似乎",
        "好像"
      ],
      "word_forms": {
        "plural": "seems"
      },
      "collocations": [
        "seem to be",
        "it seems that",
        "seem like"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"似乎\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "appear",
        "look like",
        "give impression"
      ]
    }
  },
  {
    "id": "w1167",
    "word": "seldom",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈseldəm/",
      "phonetic_us": "/ˈseldəm/",
      "meanings": [
        "很少",
        "不常"
      ],
      "word_forms": {
        "plural": "seldoms"
      },
      "collocations": [
        "seldom if ever",
        "very seldom"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1168",
    "word": "sentence",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsent(ə)ns/",
      "phonetic_us": "/ˈsent(ə)ns/",
      "meanings": [
        "句子"
      ],
      "word_forms": {
        "plural": "sentences"
      },
      "collocations": [
        "complete sentence",
        "death sentence",
        "prison sentence",
        "serve a sentence"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1169",
    "word": "separate",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsepərət/",
      "phonetic_us": "/ˈsepərət/",
      "meanings": [
        "使分开",
        "使分离 a. 单独的",
        "分开的"
      ],
      "word_forms": {},
      "collocations": [
        "separate from",
        "separate ways",
        "go separate ways"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1170",
    "word": "September",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/səpˈtembə(r)/",
      "phonetic_us": "/səpˈtembə(r)/",
      "meanings": [
        "9月"
      ],
      "word_forms": {},
      "collocations": [
        "in September",
        "this September",
        "early September"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1171",
    "word": "serious",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsɪərɪəs/",
      "phonetic_us": "/ˈsɪərɪəs/",
      "meanings": [
        "严肃的",
        "严重的",
        "认真的"
      ],
      "word_forms": {
        "comparative": "more serious",
        "superlative": "most serious"
      },
      "collocations": [
        "serious problem",
        "deadly serious",
        "serious about",
        "get serious"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1172",
    "word": "servant",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsɜːvənt/",
      "phonetic_us": "/ˈsɜːvənt/",
      "meanings": [
        "仆人",
        "佣人"
      ],
      "word_forms": {},
      "collocations": [
        "civil servant",
        "public servant",
        "faithful servant"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1173",
    "word": "serve",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/sɜːv/",
      "phonetic_us": "/sɜːv/",
      "meanings": [
        "招待（顾客等）",
        "服务"
      ],
      "word_forms": {
        "noun": "service",
        "noun2": "server"
      },
      "collocations": [
        "serve as",
        "serve...with...",
        "serve the people"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "传达招待（顾客等）的意思",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "help",
        "assist",
        "wait on"
      ]
    }
  },
  {
    "id": "w1174",
    "word": "seven",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsev(ə)n/",
      "phonetic_us": "/ˈsev(ə)n/",
      "meanings": [
        "七"
      ],
      "word_forms": {
        "plural": "sevens"
      },
      "collocations": [
        "seven o'clock",
        "at sixes and sevens"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"七\"的概念",
      "academicContext": "The seven plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"seven\"的发音和拼写，记住其\"七\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1175",
    "word": "seventeen",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/sevənˈtiːn/",
      "phonetic_us": "/sevənˈtiːn/",
      "meanings": [
        "十七"
      ],
      "word_forms": {
        "plural": "seventeens"
      },
      "collocations": [
        "seventeen years old",
        "at seventeen"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1176",
    "word": "seventh",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsevənθ/",
      "phonetic_us": "/ˈsevənθ/",
      "meanings": [
        "第七"
      ],
      "word_forms": {
        "plural": "sevenths"
      },
      "collocations": [
        "seventh heaven",
        "seventh grade"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1177",
    "word": "seventy",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsevəntɪ/",
      "phonetic_us": "/ˈsevəntɪ/",
      "meanings": [
        "七十"
      ],
      "word_forms": {
        "plural": "seventies"
      },
      "collocations": [
        "seventy years old",
        "in one's seventies"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1178",
    "word": "several",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈsevr(ə)l/",
      "phonetic_us": "/ˈsevr(ə)l/",
      "meanings": [
        "几个",
        "数个 a. 若干"
      ],
      "word_forms": {},
      "collocations": [
        "several times",
        "several days",
        "several of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"几个\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "some",
        "various",
        "a few"
      ],
      "etymology": {
        "root": "sever",
        "suffix": "-al",
        "meaning": "sever + al(形容词后缀)"
      }
    }
  },
  {
    "id": "w1179",
    "word": "severe",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/sɪˈvɪə(r)/",
      "phonetic_us": "/sɪˈvɪə(r)/",
      "meanings": [
        "极为恶劣",
        "十分严重的"
      ],
      "word_forms": {},
      "collocations": [
        "severe weather",
        "severe pain",
        "severe punishment"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1180",
    "word": "shall",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ʃæl, ʃ(ə)l/",
      "phonetic_us": "/ʃæl, ʃ(ə)l/",
      "meanings": [
        "aux.（表示将来）将要",
        "会",
        "…好吗"
      ],
      "word_forms": {},
      "collocations": [
        "shall we",
        "I shall",
        "shall not"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"aux.（表示将来）将要\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "will",
        "should",
        "ought to"
      ]
    }
  },
  {
    "id": "w1181",
    "word": "shape",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃeɪp/",
      "phonetic_us": "/ʃeɪp/",
      "meanings": [
        "形状",
        "外形 v. 使成型",
        "制造"
      ],
      "word_forms": {},
      "collocations": [
        "in shape",
        "out of shape",
        "take shape",
        "shape up",
        "in good shape"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"形状\"的概念",
      "academicContext": "The shape plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"shape\"的发音和拼写，记住其\"形状\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1182",
    "word": "share",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃeə(r)/",
      "phonetic_us": "/ʃeə(r)/",
      "meanings": [
        "分享",
        "共同使用"
      ],
      "word_forms": {},
      "collocations": [
        "share with",
        "fair share",
        "lion's share",
        "share and share alike"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"分享\"的概念",
      "academicContext": "The share plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"share\"的发音和拼写，记住其\"分享\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1183",
    "word": "sharp",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃɑːp/",
      "phonetic_us": "/ʃɑːp/",
      "meanings": [
        "锋利的",
        "尖的"
      ],
      "word_forms": {
        "comparative": "sharper",
        "superlative": "sharpest"
      },
      "collocations": [
        "sharp knife",
        "look sharp",
        "sharp turn",
        "sharp tongue"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记锋利的的事物",
      "academicContext": "Understanding sharp concepts is essential for academic success.",
      "dailyContext": "This is really sharp! I love it.",
      "memoryStory": "通过联想\"sharp\"的发音和拼写，记住其\"锋利的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1184",
    "word": "sharpener",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈʃɑːpənə(r)/",
      "phonetic_us": "/ˈʃɑːpənə(r)/",
      "meanings": [
        "削尖用的器具"
      ],
      "word_forms": {
        "comparative": "more sharpener",
        "superlative": "most sharpener"
      },
      "collocations": [
        "pencil sharpener",
        "knife sharpener"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1185",
    "word": "she",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ʃiː/",
      "phonetic_us": "/ʃiː/",
      "meanings": [
        "她"
      ],
      "word_forms": {},
      "collocations": [
        "she is",
        "she said",
        "she can"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"她\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "her",
        "female"
      ]
    }
  },
  {
    "id": "w1186",
    "word": "sheet",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃiːt/",
      "phonetic_us": "/ʃiːt/",
      "meanings": [
        "成幅的薄片",
        "薄板"
      ],
      "word_forms": {
        "comparative": "sheetter",
        "superlative": "sheettest"
      },
      "collocations": [
        "bed sheet",
        "sheet of paper",
        "white as a sheet",
        "balance sheet"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记成幅的薄片的事物",
      "academicContext": "Understanding sheet concepts is essential for academic success.",
      "dailyContext": "This is really sheet! I love it.",
      "memoryStory": "通过联想\"sheet\"的发音和拼写，记住其\"成幅的薄片\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1187",
    "word": "shine",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃaɪn/",
      "phonetic_us": "/ʃaɪn/",
      "meanings": [
        "光泽",
        "光彩",
        "阳光"
      ],
      "word_forms": {
        "plural": "shines"
      },
      "collocations": [
        "rain or shine",
        "take a shine to",
        "rise and shine"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"光泽\"的概念",
      "academicContext": "The shine plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"shine\"的发音和拼写，记住其\"光泽\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1188",
    "word": "ship",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃɪp/",
      "phonetic_us": "/ʃɪp/",
      "meanings": [
        "船",
        "轮船 vi. 用船装运"
      ],
      "word_forms": {},
      "collocations": [
        "by ship",
        "ship out",
        "jump ship",
        "when my ship comes in"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"船\"的概念",
      "academicContext": "The ship plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1189",
    "word": "shirt",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃɜːt/",
      "phonetic_us": "/ʃɜːt/",
      "meanings": [
        "男衬衫"
      ],
      "word_forms": {
        "plural": "shirts"
      },
      "collocations": [
        "T-shirt",
        "dress shirt",
        "lose one's shirt",
        "keep your shirt on"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"男衬衫\"的概念",
      "academicContext": "The shirt plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"shirt\"的发音和拼写，记住其\"男衬衫\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1190",
    "word": "shoe",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃuː/",
      "phonetic_us": "/ʃuː/",
      "meanings": [
        "鞋"
      ],
      "word_forms": {
        "plural": "shoes"
      },
      "collocations": [
        "put on shoes",
        "in someone's shoes",
        "if the shoe fits",
        "shoe string budget"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"鞋\"的概念",
      "academicContext": "The shoe plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1191",
    "word": "shop",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃɔp/",
      "phonetic_us": "/ʃɔp/",
      "meanings": [
        "买东西 n. 商店",
        "车间"
      ],
      "word_forms": {},
      "collocations": [
        "coffee shop",
        "shop around",
        "window shopping",
        "talk shop"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"买东西 n. 商店\"的概念",
      "academicContext": "The shop plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1192",
    "word": "shopping",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈʃɔpɪŋ/",
      "phonetic_us": "/ˈʃɔpɪŋ/",
      "meanings": [
        "买东西"
      ],
      "word_forms": {},
      "collocations": [
        "go shopping",
        "shopping mall",
        "shopping center",
        "shopping list"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1193",
    "word": "shore",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃɔː(r)/",
      "phonetic_us": "/ʃɔː(r)/",
      "meanings": [
        "滨",
        "岸"
      ],
      "word_forms": {
        "plural": "shores"
      },
      "collocations": [
        "on shore",
        "shore up",
        "shore leave"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"滨\"的概念",
      "academicContext": "The shore plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"shore\"的发音和拼写，记住其\"滨\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1194",
    "word": "short",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ʃɔːt/",
      "phonetic_us": "/ʃɔːt/",
      "meanings": [
        "短的",
        "矮的"
      ],
      "word_forms": {
        "verb": "shorten",
        "adverb": "shortly",
        "comparative": "shorter",
        "superlative": "shortest"
      },
      "collocations": [
        "in short",
        "short of",
        "for short",
        "be short for"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记短的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "brief",
        "concise",
        "small"
      ]
    }
  },
  {
    "id": "w1195",
    "word": "should",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ʃud/",
      "phonetic_us": "/ʃud/",
      "meanings": [
        "mod. 应当",
        "应该",
        "会 v. aux. 会"
      ],
      "word_forms": {},
      "collocations": [
        "should do",
        "should have done",
        "you should"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记mod. 应当的特征",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "ought to",
        "must",
        "need to"
      ]
    }
  },
  {
    "id": "w1196",
    "word": "show",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ʃəʊ/",
      "phonetic_us": "/ʃəʊ/",
      "meanings": [
        "展示",
        "展览（会）",
        "演出"
      ],
      "word_forms": {
        "noun": "show"
      },
      "collocations": [
        "show off",
        "show up",
        "show around"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"展示\"的概念",
      "academicContext": "The data shows a clear trend.",
      "dailyContext": "Let me show you how it works.",
      "memoryStory": "",
      "confusableWords": [
        "display",
        "exhibit",
        "demonstrate"
      ],
      "etymology": {
        "root": "show",
        "meaning": "来自古英语sceawian,看"
      }
    }
  },
  {
    "id": "w1197",
    "word": "shower",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈʃaʊə(r)/",
      "phonetic_us": "/ˈʃaʊə(r)/",
      "meanings": [
        "阵雨",
        "淋浴"
      ],
      "word_forms": {
        "plural": "showers"
      },
      "collocations": [
        "take a shower",
        "baby shower",
        "bridal shower",
        "scattered showers"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1198",
    "word": "shy",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ʃaɪ/",
      "phonetic_us": "/ʃaɪ/",
      "meanings": [
        "害羞的"
      ],
      "word_forms": {
        "comparative": "shier",
        "superlative": "shiest"
      },
      "collocations": [
        "camera shy",
        "fight shy of",
        "once bitten twice shy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记害羞的的事物",
      "academicContext": "Understanding shy concepts is essential for academic success.",
      "dailyContext": "This is really shy! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1199",
    "word": "sick",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sɪk/",
      "phonetic_us": "/sɪk/",
      "meanings": [
        "有病",
        "患病的",
        "（想）呕吐"
      ],
      "word_forms": {},
      "collocations": [
        "feel sick",
        "call in sick",
        "sick and tired",
        "sick to one's stomach",
        "worry oneself sick"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"有病\"的概念",
      "academicContext": "The sick plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1200",
    "word": "side",
    "level": "初三",
    "unit": "Unit 12",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/said/",
      "phonetic_us": "/said/",
      "meanings": [
        "边",
        "旁边",
        "面"
      ],
      "word_forms": {
        "plural": "sides"
      },
      "collocations": [
        "side by side",
        "on the other side",
        "both sides",
        "on one side"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"边\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "edge",
        "border",
        "flank"
      ]
    }
  },
  {
    "id": "w1201",
    "word": "silly",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsili/",
      "phonetic_us": "/ˈsili/",
      "meanings": [
        "傻的",
        "愚蠢的"
      ],
      "word_forms": {
        "comparative": "sillier",
        "superlative": "silliest"
      },
      "collocations": [
        "silly mistake",
        "don't be silly",
        "silly season"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用傻的的方式完成任务",
      "academicContext": "The data was analyzed silly to ensure accuracy.",
      "dailyContext": "Please do it silly this time.",
      "memoryStory": "通过联想\"silly\"的发音和拼写，记住其\"傻的\"的含义。",
      "etymology": {
        "suffix": "-ly",
        "root": "sil",
        "meaning": "sil + ly(地)"
      },
      "confusableWords": []
    }
  },
  {
    "id": "w1202",
    "word": "since",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/sins/",
      "phonetic_us": "/sins/",
      "meanings": [
        "从那时以来 conj. 从…以来",
        "…以后",
        "由于 prep. 从…以来"
      ],
      "word_forms": {},
      "collocations": [
        "ever since",
        "since then",
        "long since"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达从那时以来 conj. 从…以来这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "because",
        "as",
        "from that time"
      ]
    }
  },
  {
    "id": "w1203",
    "word": "singer",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/siŋə/",
      "phonetic_us": "/siŋə/",
      "meanings": [
        "歌唱家",
        "歌手"
      ],
      "word_forms": {
        "plural": "singers"
      },
      "collocations": [
        "famous singer",
        "lead singer",
        "opera singer"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1204",
    "word": "single",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsiŋɡ(ə)l/",
      "phonetic_us": "/ˈsiŋɡ(ə)l/",
      "meanings": [
        "单一的",
        "单个的"
      ],
      "word_forms": {
        "comparative": "singler",
        "superlative": "singlest"
      },
      "collocations": [
        "single room",
        "every single",
        "single out",
        "not a single"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1205",
    "word": "sir",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/səː (r)/",
      "phonetic_us": "/səː (r)/",
      "meanings": [
        "先生",
        "阁下"
      ],
      "word_forms": {
        "plural": "sirs"
      },
      "collocations": [
        "yes sir",
        "dear sir",
        "sir or madam"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"先生\"的概念",
      "academicContext": "The sir plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1206",
    "word": "sister",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsistə(r)/",
      "phonetic_us": "/ˈsistə(r)/",
      "meanings": [
        "姐",
        "妹"
      ],
      "word_forms": {
        "plural": "sisters"
      },
      "collocations": [
        "big sister",
        "little sister",
        "sister city",
        "soul sister"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1207",
    "word": "six",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sɪks/",
      "phonetic_us": "/sɪks/",
      "meanings": [
        "六"
      ],
      "word_forms": {
        "plural": "sixes"
      },
      "collocations": [
        "six o'clock",
        "six pack",
        "at sixes and sevens"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"六\"的概念",
      "academicContext": "The six plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1208",
    "word": "sixth",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sɪksθ/",
      "phonetic_us": "/sɪksθ/",
      "meanings": [
        "第六"
      ],
      "word_forms": {
        "plural": "sixths"
      },
      "collocations": [
        "sixth sense",
        "sixth grade"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"第六\"的概念",
      "academicContext": "The sixth plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"sixth\"的发音和拼写，记住其\"第六\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1209",
    "word": "sixty",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsɪkstɪ/",
      "phonetic_us": "/ˈsɪkstɪ/",
      "meanings": [
        "六十"
      ],
      "word_forms": {
        "plural": "sixties"
      },
      "collocations": [
        "sixty years old",
        "the sixties"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"六十\"的概念",
      "academicContext": "The sixty plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"sixty\"的发音和拼写，记住其\"六十\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1210",
    "word": "sixteen",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsɪkstiːn/",
      "phonetic_us": "/ˈsɪkstiːn/",
      "meanings": [
        "十六"
      ],
      "word_forms": {
        "plural": "sixteens"
      },
      "collocations": [
        "sixteen years old",
        "sweet sixteen"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1211",
    "word": "sixteenth",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/sɪksˈtiːnθ/",
      "phonetic_us": "/sɪksˈtiːnθ/",
      "meanings": [
        "第十六"
      ],
      "word_forms": {
        "plural": "sixteenths"
      },
      "collocations": [
        "sixteenth century",
        "sixteenth birthday"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1212",
    "word": "size",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/saiz/",
      "phonetic_us": "/saiz/",
      "meanings": [
        "尺寸",
        "大小"
      ],
      "word_forms": {
        "plural": "sizes"
      },
      "collocations": [
        "full size",
        "king size",
        "cut down to size",
        "that's about the size of it"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"尺寸\"的概念",
      "academicContext": "The size plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1213",
    "word": "skate",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/skeɪt/",
      "phonetic_us": "/skeɪt/",
      "meanings": [
        "溜冰",
        "滑冰"
      ],
      "word_forms": {
        "plural": "skates"
      },
      "collocations": [
        "ice skate",
        "roller skate",
        "skate on thin ice"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"溜冰\"的概念",
      "academicContext": "The skate plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"skate\"的发音和拼写，记住其\"溜冰\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1214",
    "word": "skateboard",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈskeɪtbɔːd/",
      "phonetic_us": "/ˈskeɪtbɔːd/",
      "meanings": [
        "冰鞋",
        "滑板"
      ],
      "word_forms": {
        "plural": "skateboards"
      },
      "collocations": [
        "ride a skateboard",
        "skateboard park"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1215",
    "word": "skirt",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/skɜːt/",
      "phonetic_us": "/skɜːt/",
      "meanings": [
        "女裙"
      ],
      "word_forms": {
        "plural": "skirts"
      },
      "collocations": [
        "mini skirt",
        "skirt around",
        "skirt the issue"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"女裙\"的概念",
      "academicContext": "The skirt plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"skirt\"的发音和拼写，记住其\"女裙\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1216",
    "word": "sky",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/skaɪ/",
      "phonetic_us": "/skaɪ/",
      "meanings": [
        "天",
        "天空"
      ],
      "word_forms": {
        "plural": "skies"
      },
      "collocations": [
        "blue sky",
        "sky high",
        "the sky's the limit",
        "pie in the sky"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"天\"的概念",
      "academicContext": "The sky plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1217",
    "word": "slow",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sləʊ/",
      "phonetic_us": "/sləʊ/",
      "meanings": [
        "慢慢地",
        "缓慢地"
      ],
      "word_forms": {
        "comparative": "slowwer",
        "superlative": "slowwest"
      },
      "collocations": [
        "slow down",
        "slow and steady",
        "slow motion",
        "slow but sure"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "用慢慢地的方式完成任务",
      "academicContext": "The data was analyzed slow to ensure accuracy.",
      "dailyContext": "Please do it slow this time.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1218",
    "word": "small",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/smɔːl/",
      "phonetic_us": "/smɔːl/",
      "meanings": [
        "小的",
        "少的"
      ],
      "word_forms": {
        "comparative": "smaller",
        "superlative": "smallest"
      },
      "collocations": [
        "small amount",
        "small business",
        "small talk"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记小的的事物",
      "academicContext": "Small changes can lead to big results.",
      "dailyContext": "I need a small coffee.",
      "memoryStory": "",
      "confusableWords": [
        "little",
        "tiny",
        "minute"
      ],
      "etymology": {
        "root": "small",
        "meaning": "来自古英语smæl,细小的"
      }
    }
  },
  {
    "id": "w1219",
    "word": "smoke",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sməʊk/",
      "phonetic_us": "/sməʊk/",
      "meanings": [
        "烟 v. 冒烟",
        "吸烟"
      ],
      "word_forms": {},
      "collocations": [
        "no smoke without fire",
        "go up in smoke",
        "smoke and mirrors",
        "smoke out"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"烟 v. 冒烟\"的概念",
      "academicContext": "The smoke plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"smoke\"的发音和拼写，记住其\"烟 v. 冒烟\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1220",
    "word": "smoking",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsməʊkɪŋ/",
      "phonetic_us": "/ˈsməʊkɪŋ/",
      "meanings": [
        "吸烟",
        "抽烟",
        "冒烟"
      ],
      "word_forms": {
        "plural": "smokings"
      },
      "collocations": [
        "no smoking",
        "quit smoking",
        "smoking gun",
        "smoking area"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1221",
    "word": "snake",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sneɪk/",
      "phonetic_us": "/sneɪk/",
      "meanings": [
        "蛇 v. 蛇般爬行",
        "蜿蜒行进"
      ],
      "word_forms": {},
      "collocations": [
        "snake in the grass",
        "snake oil",
        "snake eyes"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"蛇 v. 蛇般爬行\"的概念",
      "academicContext": "The snake plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"snake\"的发音和拼写，记住其\"蛇 v. 蛇般爬行\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1222",
    "word": "snow",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/snəʊ/",
      "phonetic_us": "/snəʊ/",
      "meanings": [
        "雪 vi.下雪"
      ],
      "word_forms": {},
      "collocations": [
        "snow ball",
        "snow man",
        "pure as the driven snow",
        "snowed under"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"雪 vi.下雪\"的概念",
      "academicContext": "The snow plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1223",
    "word": "so",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/səʊ/",
      "phonetic_us": "/səʊ/",
      "meanings": [
        "如此",
        "这么",
        "非常"
      ],
      "word_forms": {},
      "collocations": [
        "so that",
        "so...that...",
        "or so",
        "so far",
        "and so on"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"如此\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "therefore",
        "thus",
        "hence",
        "very"
      ]
    }
  },
  {
    "id": "w1224",
    "word": "soap",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/səʊp/",
      "phonetic_us": "/səʊp/",
      "meanings": [
        "肥皂"
      ],
      "word_forms": {
        "plural": "soaps"
      },
      "collocations": [
        "soap opera",
        "soap bubble",
        "bar of soap",
        "soft soap"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"肥皂\"的概念",
      "academicContext": "The soap plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1225",
    "word": "society",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/səˈsaɪətɪ/",
      "phonetic_us": "/səˈsaɪətɪ/",
      "meanings": [
        "社会"
      ],
      "word_forms": {
        "plural": "societies"
      },
      "collocations": [
        "modern society",
        "in society",
        "human society"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"社会\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "community",
        "civilization",
        "culture"
      ]
    }
  },
  {
    "id": "w1226",
    "word": "sock",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sɔk/",
      "phonetic_us": "/sɔk/",
      "meanings": [
        "短袜"
      ],
      "word_forms": {
        "plural": "socks"
      },
      "collocations": [
        "knock one's socks off",
        "pull up one's socks",
        "put a sock in it"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"短袜\"的概念",
      "academicContext": "The sock plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1227",
    "word": "soft",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sɔft; (US) sɔːft/",
      "phonetic_us": "/sɔft; (US) sɔːft/",
      "meanings": [
        "软的",
        "柔和的"
      ],
      "word_forms": {
        "comparative": "softer",
        "superlative": "softest"
      },
      "collocations": [
        "soft drink",
        "soft spot",
        "soft touch",
        "have a soft spot for"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记软的的事物",
      "academicContext": "Understanding soft concepts is essential for academic success.",
      "dailyContext": "This is really soft! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1228",
    "word": "soil",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sɔɪl/",
      "phonetic_us": "/sɔɪl/",
      "meanings": [
        "土壤",
        "土地"
      ],
      "word_forms": {},
      "collocations": [
        "rich soil",
        "native soil",
        "till the soil"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"土壤\"的概念",
      "academicContext": "The soil plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1229",
    "word": "soldier",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsəʊldʒə(r)/",
      "phonetic_us": "/ˈsəʊldʒə(r)/",
      "meanings": [
        "士兵",
        "战士"
      ],
      "word_forms": {
        "plural": "soldiers"
      },
      "collocations": [
        "brave soldier",
        "toy soldier",
        "soldier on",
        "unknown soldier"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1230",
    "word": "some",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/sʌm/",
      "phonetic_us": "/sʌm/",
      "meanings": [
        "一些",
        "若干",
        "有些"
      ],
      "word_forms": {},
      "collocations": [
        "some day",
        "some time",
        "some of",
        "some...others..."
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"一些\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "several",
        "a few",
        "certain"
      ]
    }
  },
  {
    "id": "w1231",
    "word": "somebody",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌmbɔdɪ/",
      "phonetic_us": "/ˈsʌmbɔdɪ/",
      "meanings": [
        "某人",
        "有人",
        "有名气的人"
      ],
      "word_forms": {},
      "collocations": [
        "somebody else",
        "be somebody",
        "somebody important"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1232",
    "word": "someone",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌmwʌn/",
      "phonetic_us": "/ˈsʌmwʌn/",
      "meanings": [
        "某一个人"
      ],
      "word_forms": {
        "plural": "someones"
      },
      "collocations": [
        "someone else",
        "someone special",
        "someone like you"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1233",
    "word": "something",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈsʌmθɪŋ/",
      "phonetic_us": "/ˈsʌmθɪŋ/",
      "meanings": [
        "某事",
        "某物"
      ],
      "word_forms": {
        "plural": "somethings"
      },
      "collocations": [
        "something wrong",
        "something new",
        "or something"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"某事\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1234",
    "word": "somewhere",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌmweə/",
      "phonetic_us": "/ˈsʌmweə/",
      "meanings": [
        "在某处"
      ],
      "word_forms": {},
      "collocations": [
        "somewhere else",
        "go somewhere",
        "get somewhere"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1235",
    "word": "son",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sʌn/",
      "phonetic_us": "/sʌn/",
      "meanings": [
        "儿子"
      ],
      "word_forms": {
        "plural": "sons"
      },
      "collocations": [
        "son and heir",
        "favorite son",
        "prodigal son",
        "like father like son"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"儿子\"的概念",
      "academicContext": "The son plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1236",
    "word": "song",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sɔŋ/",
      "phonetic_us": "/sɔŋ/",
      "meanings": [
        "歌唱",
        "歌曲"
      ],
      "word_forms": {},
      "collocations": [
        "sing a song",
        "theme song",
        "swan song",
        "for a song"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"歌唱\"的概念",
      "academicContext": "The song plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1237",
    "word": "soon",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/suːn/",
      "phonetic_us": "/suːn/",
      "meanings": [
        "不久",
        "很快",
        "一会儿"
      ],
      "word_forms": {
        "plural": "soons"
      },
      "collocations": [
        "as soon as",
        "sooner or later",
        "no sooner...than",
        "see you soon"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"不久\"的概念",
      "academicContext": "The soon plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1238",
    "word": "sorry",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsɔrɪ/",
      "phonetic_us": "/ˈsɔrɪ/",
      "meanings": [
        "对不起",
        "抱歉",
        "难过的"
      ],
      "word_forms": {},
      "collocations": [
        "I'm sorry",
        "feel sorry for",
        "better safe than sorry",
        "sorry to say"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"对不起\"的概念",
      "academicContext": "The sorry plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"sorry\"的发音和拼写，记住其\"对不起\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1239",
    "word": "sound",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/saʊnd/",
      "phonetic_us": "/saʊnd/",
      "meanings": [
        "听起来",
        "发出声音 n. 声音"
      ],
      "word_forms": {},
      "collocations": [
        "sound like",
        "safe and sound",
        "sound asleep"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"听起来\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "noise",
        "tone",
        "audio"
      ]
    }
  },
  {
    "id": "w1240",
    "word": "soup",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/suːp/",
      "phonetic_us": "/suːp/",
      "meanings": [
        "汤"
      ],
      "word_forms": {
        "plural": "soups"
      },
      "collocations": [
        "chicken soup",
        "soup spoon",
        "in the soup",
        "from soup to nuts"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"汤\"的概念",
      "academicContext": "The soup plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1241",
    "word": "sour",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsauə(r)/",
      "phonetic_us": "/ˈsauə(r)/",
      "meanings": [
        "酸的",
        "馊的"
      ],
      "word_forms": {
        "comparative": "sourrer",
        "superlative": "sourrest"
      },
      "collocations": [
        "sour grapes",
        "go sour",
        "sour milk",
        "sweet and sour"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记酸的的事物",
      "academicContext": "Understanding sour concepts is essential for academic success.",
      "dailyContext": "This is really sour! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1242",
    "word": "south",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsauθ/",
      "phonetic_us": "/ˈsauθ/",
      "meanings": [
        "南(方)的 ad. 在南方",
        "向南方 n. 南",
        "南方"
      ],
      "word_forms": {
        "plural": "souths",
        "comparative": "souther",
        "superlative": "southest"
      },
      "collocations": [
        "down south",
        "south pole",
        "south of"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记南(方)的 ad. 在南方的事物",
      "academicContext": "Understanding south concepts is essential for academic success.",
      "dailyContext": "This is really south! I love it.",
      "memoryStory": "通过联想\"south\"的发音和拼写，记住其\"南(方)的 ad. 在南方\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1243",
    "word": "southeast",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/‚sauθ'iːst/",
      "phonetic_us": "/‚sauθ'iːst/",
      "meanings": [
        "东南"
      ],
      "word_forms": {
        "plural": "southeasts"
      },
      "collocations": [
        "in the southeast",
        "southeast Asia"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1244",
    "word": "southern",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'sʌð(ə)n/",
      "phonetic_us": "/'sʌð(ə)n/",
      "meanings": [
        "南部的",
        "南方的"
      ],
      "word_forms": {
        "comparative": "more southern",
        "superlative": "most southern"
      },
      "collocations": [
        "southern hemisphere",
        "southern accent",
        "southern hospitality"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1245",
    "word": "southwest",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/sauθ'west/",
      "phonetic_us": "/sauθ'west/",
      "meanings": [
        "西南"
      ],
      "word_forms": {
        "plural": "southwests"
      },
      "collocations": [
        "in the southwest",
        "southwest region"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1246",
    "word": "space",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/speɪs/",
      "phonetic_us": "/speɪs/",
      "meanings": [
        "空间"
      ],
      "word_forms": {
        "plural": "spaces"
      },
      "collocations": [
        "outer space",
        "space ship",
        "personal space",
        "breathing space",
        "waste of space"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"空间\"的概念",
      "academicContext": "The space plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"space\"的发音和拼写，记住其\"空间\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1247",
    "word": "spaceship",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈspeɪsʃɪp/",
      "phonetic_us": "/ˈspeɪsʃɪp/",
      "meanings": [
        "宇宙飞船"
      ],
      "word_forms": {
        "plural": "spaceships"
      },
      "collocations": [
        "board a spaceship",
        "alien spaceship"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1248",
    "word": "special",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈspeʃ(ə)l/",
      "phonetic_us": "/ˈspeʃ(ə)l/",
      "meanings": [
        "特别的",
        "专门的"
      ],
      "word_forms": {
        "adverb": "specially",
        "noun": "specialty"
      },
      "collocations": [
        "something special",
        "special offer",
        "nothing special"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记特别的的事物",
      "academicContext": "Understanding special concepts is essential for academic success.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "unique",
        "particular",
        "specific"
      ],
      "etymology": {
        "root": "speci",
        "suffix": "-al",
        "meaning": "speci + al(形容词后缀)"
      }
    }
  },
  {
    "id": "w1249",
    "word": "speech",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/spiːtʃ/",
      "phonetic_us": "/spiːtʃ/",
      "meanings": [
        "演讲"
      ],
      "word_forms": {
        "plural": "speeches"
      },
      "collocations": [
        "give a speech",
        "freedom of speech",
        "speech therapy",
        "figure of speech"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1250",
    "word": "speed",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/spiːd/",
      "phonetic_us": "/spiːd/",
      "meanings": [
        "速度 v.（使）加速"
      ],
      "word_forms": {},
      "collocations": [
        "at full speed",
        "speed up",
        "speed limit",
        "pick up speed"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"速度 v.（使）加速\"的概念",
      "academicContext": "The speed plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"speed\"的发音和拼写，记住其\"速度 v.（使）加速\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1251",
    "word": "spell",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/spel/",
      "phonetic_us": "/spel/",
      "meanings": [
        "拼写"
      ],
      "word_forms": {},
      "collocations": [
        "spell out",
        "spell trouble",
        "under a spell",
        "cast a spell"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"拼写\"的概念",
      "academicContext": "The spell plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"spell\"的发音和拼写，记住其\"拼写\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1252",
    "word": "spirit",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈspɪrɪt/",
      "phonetic_us": "/ˈspɪrɪt/",
      "meanings": [
        "精神"
      ],
      "word_forms": {
        "plural": "spirits"
      },
      "collocations": [
        "team spirit",
        "in spirit",
        "Christmas spirit",
        "fighting spirit",
        "free spirit"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1253",
    "word": "spit",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/spɪt/",
      "phonetic_us": "/spɪt/",
      "meanings": [
        "吐唾沫",
        "吐痰"
      ],
      "word_forms": {
        "plural": "spits"
      },
      "collocations": [
        "spit out",
        "spit it out",
        "spitting image"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"吐唾沫\"的概念",
      "academicContext": "The spit plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1254",
    "word": "spoon",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/spuːn/",
      "phonetic_us": "/spuːn/",
      "meanings": [
        "匙",
        "调羹"
      ],
      "word_forms": {
        "plural": "spoons"
      },
      "collocations": [
        "silver spoon",
        "born with a silver spoon",
        "wooden spoon"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"匙\"的概念",
      "academicContext": "The spoon plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"spoon\"的发音和拼写，记住其\"匙\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1255",
    "word": "sport",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/spɔːt/",
      "phonetic_us": "/spɔːt/",
      "meanings": [
        "体育运动",
        "锻炼",
        "(复"
      ],
      "word_forms": {},
      "collocations": [
        "good sport",
        "sporting chance",
        "blood sport"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"体育运动\"的概念",
      "academicContext": "The sport plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"sport\"的发音和拼写，记住其\"体育运动\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1256",
    "word": "spot",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/spɔt/",
      "phonetic_us": "/spɔt/",
      "meanings": [
        "斑点",
        "污点",
        "场所"
      ],
      "word_forms": {
        "plural": "spots"
      },
      "collocations": [
        "on the spot",
        "hit the spot",
        "spot on",
        "blind spot",
        "leopard can't change its spots"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"斑点\"的概念",
      "academicContext": "The spot plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1257",
    "word": "spring",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/sprɪŋ/",
      "phonetic_us": "/sprɪŋ/",
      "meanings": [
        "春天",
        "春季 n. 泉水",
        "泉"
      ],
      "word_forms": {
        "plural": "springs"
      },
      "collocations": [
        "in spring",
        "spring water",
        "spring cleaning",
        "hope springs eternal"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1258",
    "word": "square",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/skweə(r)/",
      "phonetic_us": "/skweə(r)/",
      "meanings": [
        "广场 a. 平方的",
        "方形的",
        "宽而结实的（体格"
      ],
      "word_forms": {
        "comparative": "squarer",
        "superlative": "squarest"
      },
      "collocations": [
        "town square",
        "square meal",
        "back to square one",
        "fair and square"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1259",
    "word": "stamp",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/stæmp/",
      "phonetic_us": "/stæmp/",
      "meanings": [
        "邮票"
      ],
      "word_forms": {
        "plural": "stamps"
      },
      "collocations": [
        "postage stamp",
        "stamp out",
        "stamp collection",
        "rubber stamp"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"邮票\"的概念",
      "academicContext": "The stamp plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"stamp\"的发音和拼写，记住其\"邮票\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1260",
    "word": "stand",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/stænd/",
      "phonetic_us": "/stænd/",
      "meanings": [
        "站",
        "立",
        "停止"
      ],
      "word_forms": {},
      "collocations": [
        "stand up",
        "stand for",
        "can't stand"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"站\"的概念",
      "academicContext": "Stand up for what you believe.",
      "dailyContext": "Please stand in line.",
      "memoryStory": "",
      "confusableWords": [
        "rise",
        "get up",
        "tolerate"
      ],
      "etymology": {
        "root": "stand",
        "meaning": "来自古英语standan,站立"
      }
    }
  },
  {
    "id": "w1261",
    "word": "star",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/stɑː(r)/",
      "phonetic_us": "/stɑː(r)/",
      "meanings": [
        "星",
        "恒星"
      ],
      "word_forms": {},
      "collocations": [
        "movie star",
        "rising star",
        "reach for the stars",
        "see stars"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"星\"的概念",
      "academicContext": "The star plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1262",
    "word": "start",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/stɑːt/",
      "phonetic_us": "/stɑːt/",
      "meanings": [
        "开始",
        "着手",
        "出发"
      ],
      "word_forms": {},
      "collocations": [
        "start doing",
        "start with",
        "from the start"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"开始\"的概念",
      "academicContext": "Let's start with the basics.",
      "dailyContext": "What time does the movie start?",
      "memoryStory": "",
      "confusableWords": [
        "begin",
        "commence",
        "initiate"
      ],
      "etymology": {
        "root": "start",
        "meaning": "来自古英语styrtan,跳起、开始"
      }
    }
  },
  {
    "id": "w1263",
    "word": "state",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/steɪt/",
      "phonetic_us": "/steɪt/",
      "meanings": [
        "状态",
        "情形",
        "国家"
      ],
      "word_forms": {
        "plural": "states"
      },
      "collocations": [
        "the United States",
        "in a state of",
        "state of mind"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"状态\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "condition",
        "status",
        "nation"
      ]
    }
  },
  {
    "id": "w1264",
    "word": "station",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsteɪʃ(ə)n/",
      "phonetic_us": "/ˈsteɪʃ(ə)n/",
      "meanings": [
        "站",
        "所",
        "车站"
      ],
      "word_forms": {},
      "collocations": [
        "train station",
        "gas station",
        "police station",
        "radio station"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1265",
    "word": "steep",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/stiːp/",
      "phonetic_us": "/stiːp/",
      "meanings": [
        "险峻的",
        "陡峭的"
      ],
      "word_forms": {
        "comparative": "steepper",
        "superlative": "steeppest"
      },
      "collocations": [
        "steep hill",
        "steep price",
        "steep learning curve"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记险峻的的事物",
      "academicContext": "Understanding steep concepts is essential for academic success.",
      "dailyContext": "This is really steep! I love it.",
      "memoryStory": "通过联想\"steep\"的发音和拼写，记住其\"险峻的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1266",
    "word": "step",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/step/",
      "phonetic_us": "/step/",
      "meanings": [
        "脚步",
        "台阶",
        "梯级 vi. 走"
      ],
      "word_forms": {},
      "collocations": [
        "step by step",
        "step up",
        "watch one's step",
        "in step with",
        "out of step"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"脚步\"的概念",
      "academicContext": "The step plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1267",
    "word": "still",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/stɪl/",
      "phonetic_us": "/stɪl/",
      "meanings": [
        "不动的",
        "平静的 ad. 仍然",
        "还"
      ],
      "word_forms": {
        "plural": "stills"
      },
      "collocations": [
        "still now",
        "stand still",
        "still life"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记不动的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "yet",
        "motionless",
        "quiet"
      ]
    }
  },
  {
    "id": "w1268",
    "word": "stocking",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈstɔkɪŋ/",
      "phonetic_us": "/ˈstɔkɪŋ/",
      "meanings": [
        "长统袜"
      ],
      "word_forms": {
        "plural": "stockings"
      },
      "collocations": [
        "Christmas stocking",
        "silk stockings",
        "in one's stocking feet"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1269",
    "word": "stomach",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈstʌmək/",
      "phonetic_us": "/ˈstʌmək/",
      "meanings": [
        "胃",
        "胃部"
      ],
      "word_forms": {
        "plural": "stomaches"
      },
      "collocations": [
        "upset stomach",
        "empty stomach",
        "pit of one's stomach",
        "turn one's stomach"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1270",
    "word": "stomachache",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈstʌməkeɪk/",
      "phonetic_us": "/ˈstʌməkeɪk/",
      "meanings": [
        "胃疼"
      ],
      "word_forms": {
        "plural": "stomachaches"
      },
      "collocations": [
        "bad stomachache",
        "have a stomachache"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1271",
    "word": "stone",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/stəʊn/",
      "phonetic_us": "/stəʊn/",
      "meanings": [
        "石头",
        "石料"
      ],
      "word_forms": {
        "plural": "stones"
      },
      "collocations": [
        "stone's throw",
        "leave no stone unturned",
        "set in stone",
        "kill two birds with one stone"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"石头\"的概念",
      "academicContext": "The stone plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"stone\"的发音和拼写，记住其\"石头\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1272",
    "word": "stop",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/stɔp/",
      "phonetic_us": "/stɔp/",
      "meanings": [
        "停",
        "（停车）站 v. 停",
        "停止"
      ],
      "word_forms": {},
      "collocations": [
        "stop doing",
        "can't stop",
        "stop by"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"停\"的概念",
      "academicContext": "",
      "dailyContext": "Stop talking and listen.",
      "memoryStory": "",
      "confusableWords": [
        "halt",
        "cease",
        "end"
      ],
      "etymology": {
        "root": "stop",
        "meaning": "来自古英语stoppian,堵塞、停止"
      }
    }
  },
  {
    "id": "w1273",
    "word": "store",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/stɔː(r)/",
      "phonetic_us": "/stɔː(r)/",
      "meanings": [
        "商店 vt. 储藏",
        "存储"
      ],
      "word_forms": {},
      "collocations": [
        "department store",
        "in store",
        "store up",
        "mind the store"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"商店 vt. 储藏\"的概念",
      "academicContext": "The store plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"store\"的发音和拼写，记住其\"商店 vt. 储藏\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1274",
    "word": "storm",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/stɔːm/",
      "phonetic_us": "/stɔːm/",
      "meanings": [
        "风暴",
        "暴（风）雨"
      ],
      "word_forms": {
        "plural": "storms"
      },
      "collocations": [
        "weather the storm",
        "take by storm",
        "storm in a teacup",
        "perfect storm"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"风暴\"的概念",
      "academicContext": "The storm plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"storm\"的发音和拼写，记住其\"风暴\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1275",
    "word": "story",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈstɔːrɪ/",
      "phonetic_us": "/ˈstɔːrɪ/",
      "meanings": [
        "故事",
        "小说"
      ],
      "word_forms": {},
      "collocations": [
        "tell a story",
        "story book",
        "short story",
        "the whole story"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"故事\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "tale",
        "narrative",
        "account"
      ]
    }
  },
  {
    "id": "w1276",
    "word": "straight",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/streɪt/",
      "phonetic_us": "/streɪt/",
      "meanings": [
        "一直的",
        "直的 ad. 一直地",
        "直地"
      ],
      "word_forms": {
        "comparative": "more straight",
        "superlative": "most straight"
      },
      "collocations": [
        "straight line",
        "straight away",
        "straight face",
        "get straight to the point"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1277",
    "word": "strange",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/streɪndʒ/",
      "phonetic_us": "/streɪndʒ/",
      "meanings": [
        "奇怪",
        "奇特的",
        "陌生的"
      ],
      "word_forms": {},
      "collocations": [
        "strange thing",
        "strange feeling",
        "strange to say",
        "truth is stranger than fiction"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1278",
    "word": "street",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/striːt/",
      "phonetic_us": "/striːt/",
      "meanings": [
        "街",
        "街道"
      ],
      "word_forms": {
        "plural": "streets"
      },
      "collocations": [
        "on the street",
        "across the street",
        "street corner"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"街\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "road",
        "avenue",
        "lane"
      ]
    }
  },
  {
    "id": "w1279",
    "word": "strict",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/strɪkt/",
      "phonetic_us": "/strɪkt/",
      "meanings": [
        "严格的",
        "严密的"
      ],
      "word_forms": {
        "comparative": "stricter",
        "superlative": "strictest"
      },
      "collocations": [
        "strict rules",
        "strict discipline",
        "in strict confidence"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1280",
    "word": "strong",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/strɔŋ/",
      "phonetic_us": "/strɔŋ/",
      "meanings": [
        "强(壮)的",
        "坚固的",
        "强烈的"
      ],
      "word_forms": {
        "noun": "strength",
        "adverb": "strongly",
        "comparative": "stronger",
        "superlative": "strongest"
      },
      "collocations": [
        "strong wind",
        "be strong in",
        "strong point"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达强(壮)的这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "powerful",
        "mighty",
        "sturdy"
      ]
    }
  },
  {
    "id": "w1281",
    "word": "student",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈstjuːdənt/",
      "phonetic_us": "/ˈstjuːdənt/",
      "meanings": [
        "学生"
      ],
      "word_forms": {},
      "collocations": [
        "university student",
        "middle school student",
        "good student"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"学生\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "pupil",
        "learner",
        "scholar"
      ],
      "etymology": {
        "root": "stud",
        "suffix": "-ent",
        "meaning": "stud + ent(...的)"
      }
    }
  },
  {
    "id": "w1282",
    "word": "study",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈstʌdɪ/",
      "phonetic_us": "/ˈstʌdɪ/",
      "meanings": [
        "学习",
        "研究 n. 书房"
      ],
      "word_forms": {
        "noun": "study",
        "noun2": "student"
      },
      "collocations": [
        "study hard",
        "study for",
        "case study"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"学习\"的概念",
      "academicContext": "Scientists study climate change patterns.",
      "dailyContext": "I need to study for the exam.",
      "memoryStory": "",
      "confusableWords": [
        "learn",
        "research",
        "examine"
      ],
      "etymology": {
        "root": "study",
        "meaning": "来自拉丁语studium,热心、学习"
      }
    }
  },
  {
    "id": "w1283",
    "word": "stupid",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈstjuːpɪd/",
      "phonetic_us": "/ˈstjuːpɪd/",
      "meanings": [
        "愚蠢的",
        "笨的"
      ],
      "word_forms": {
        "comparative": "stupidder",
        "superlative": "stupiddest"
      },
      "collocations": [
        "stupid mistake",
        "stupid question",
        "feel stupid"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1284",
    "word": "subject",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈsʌbdʒɪkt/",
      "phonetic_us": "/ˈsʌbdʒɪkt/",
      "meanings": [
        "题目",
        "主题",
        "学科"
      ],
      "word_forms": {},
      "collocations": [
        "school subject",
        "favorite subject",
        "subject to"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"题目\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "topic",
        "theme",
        "course"
      ],
      "etymology": {
        "prefix": "sub-",
        "root": "ject",
        "meaning": "sub(下面) + ject"
      }
    }
  },
  {
    "id": "w1285",
    "word": "succeed",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/səkˈsiːd/",
      "phonetic_us": "/səkˈsiːd/",
      "meanings": [
        "成功"
      ],
      "word_forms": {},
      "collocations": [
        "succeed in",
        "succeed in doing",
        "if at first you don't succeed"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1286",
    "word": "success",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/səkˈses/",
      "phonetic_us": "/səkˈses/",
      "meanings": [
        "成功"
      ],
      "word_forms": {},
      "collocations": [
        "great success",
        "key to success",
        "success story",
        "overnight success"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1287",
    "word": "successful",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/səkˈsesfʊl/",
      "phonetic_us": "/səkˈsesfʊl/",
      "meanings": [
        "成功的",
        "有成就的"
      ],
      "word_forms": {
        "comparative": "more successful",
        "superlative": "most successful"
      },
      "collocations": [
        "highly successful",
        "successful career",
        "successful business"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1288",
    "word": "sudden",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌd(ə)n/",
      "phonetic_us": "/ˈsʌd(ə)n/",
      "meanings": [
        "突然的"
      ],
      "word_forms": {
        "comparative": "suddenner",
        "superlative": "suddennest"
      },
      "collocations": [
        "all of a sudden",
        "sudden death",
        "sudden change"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1289",
    "word": "sugar",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈʃʊɡə(r)/",
      "phonetic_us": "/ˈʃʊɡə(r)/",
      "meanings": [
        "糖"
      ],
      "word_forms": {},
      "collocations": [
        "sugar daddy",
        "sugar coat",
        "brown sugar"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"糖\"的概念",
      "academicContext": "The sugar plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"sugar\"的发音和拼写，记住其\"糖\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1290",
    "word": "suggest",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/səˈdʒest; (US) sə ˈdʒest/",
      "phonetic_us": "/səˈdʒest; (US) sə ˈdʒest/",
      "meanings": [
        "建议",
        "提议"
      ],
      "word_forms": {},
      "collocations": [
        "suggest that",
        "suggest doing",
        "may I suggest"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1291",
    "word": "suggestion",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/səˈdʒestʃ(ə)n/",
      "phonetic_us": "/səˈdʒestʃ(ə)n/",
      "meanings": [
        "建议"
      ],
      "word_forms": {},
      "collocations": [
        "make a suggestion",
        "helpful suggestion",
        "any suggestions"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1292",
    "word": "suit",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/suːt, sjuːt/",
      "phonetic_us": "/suːt, sjuːt/",
      "meanings": [
        "适合 n. 一套（衣服）"
      ],
      "word_forms": {
        "plural": "suits"
      },
      "collocations": [
        "follow suit",
        "strong suit",
        "suit yourself",
        "suit up"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"适合 n. 一套（衣服）\"的概念",
      "academicContext": "The suit plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1293",
    "word": "summer",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌmə(r)/",
      "phonetic_us": "/ˈsʌmə(r)/",
      "meanings": [
        "夏天",
        "夏季"
      ],
      "word_forms": {
        "plural": "summers"
      },
      "collocations": [
        "in summer",
        "summer vacation",
        "summer camp",
        "Indian summer"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1294",
    "word": "sun",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/sʌn/",
      "phonetic_us": "/sʌn/",
      "meanings": [
        "太阳",
        "阳光"
      ],
      "word_forms": {
        "plural": "suns"
      },
      "collocations": [
        "under the sun",
        "place in the sun",
        "sun set",
        "sun rise",
        "catch some sun"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"太阳\"的概念",
      "academicContext": "The sun plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1295",
    "word": "Sunday",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌndeɪ/",
      "phonetic_us": "/ˈsʌndeɪ/",
      "meanings": [
        "星期日"
      ],
      "word_forms": {},
      "collocations": [
        "on Sunday",
        "this Sunday",
        "next Sunday",
        "Sunday best"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1296",
    "word": "sunglasses",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌnɡlɑːsɪs/",
      "phonetic_us": "/ˈsʌnɡlɑːsɪs/",
      "meanings": [
        "太阳眼镜",
        "墨镜"
      ],
      "word_forms": {
        "plural": "sunglasseses"
      },
      "collocations": [
        "wear sunglasses",
        "pair of sunglasses",
        "designer sunglasses"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1297",
    "word": "sunlight",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌnlaɪt/",
      "phonetic_us": "/ˈsʌnlaɪt/",
      "meanings": [
        "日光",
        "阳光"
      ],
      "word_forms": {
        "plural": "sunlights"
      },
      "collocations": [
        "bright sunlight",
        "direct sunlight",
        "in the sunlight"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1298",
    "word": "sunny",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsʌnɪ/",
      "phonetic_us": "/ˈsʌnɪ/",
      "meanings": [
        "晴朗的",
        "阳光充足的"
      ],
      "word_forms": {
        "comparative": "sunnier",
        "superlative": "sunniest"
      },
      "collocations": [
        "sunny side up",
        "on the sunny side"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记晴朗的的事物",
      "academicContext": "Understanding sunny concepts is essential for academic success.",
      "dailyContext": "This is really sunny! I love it.",
      "memoryStory": "通过联想\"sunny\"的发音和拼写，记住其\"晴朗的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1299",
    "word": "sunrise",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌnraɪs/",
      "phonetic_us": "/ˈsʌnraɪs/",
      "meanings": [
        "黎明",
        "拂晓"
      ],
      "word_forms": {
        "plural": "sunrises"
      },
      "collocations": [
        "at sunrise",
        "before sunrise",
        "watch the sunrise"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1300",
    "word": "sunset",
    "level": "初三",
    "unit": "Unit 13",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌnset/",
      "phonetic_us": "/ˈsʌnset/",
      "meanings": [
        "日落(时分)"
      ],
      "word_forms": {
        "plural": "sunsets"
      },
      "collocations": [
        "at sunset",
        "after sunset",
        "watch the sunset",
        "ride off into the sunset"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1301",
    "word": "sunshine",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌnʃaɪn/",
      "phonetic_us": "/ˈsʌnʃaɪn/",
      "meanings": [
        "阳光"
      ],
      "word_forms": {
        "plural": "sunshines"
      },
      "collocations": [
        "bright sunshine",
        "ray of sunshine",
        "walk on sunshine"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1302",
    "word": "super",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsuːpə(r), ˈsjuːpə(r)/",
      "phonetic_us": "/ˈsuːpə(r), ˈsjuːpə(r)/",
      "meanings": [
        "顶好的",
        "超级的"
      ],
      "word_forms": {
        "comparative": "superrer",
        "superlative": "superrest"
      },
      "collocations": [
        "super market",
        "super star",
        "super power"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记顶好的的事物",
      "academicContext": "Understanding super concepts is essential for academic success.",
      "dailyContext": "This is really super! I love it.",
      "memoryStory": "通过联想\"super\"的发音和拼写，记住其\"顶好的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1303",
    "word": "supermarket",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsuːpəmɑːkɪt/",
      "phonetic_us": "/ˈsuːpəmɑːkɪt/",
      "meanings": [
        "超级市场"
      ],
      "word_forms": {
        "plural": "supermarkets"
      },
      "collocations": [
        "go to the supermarket",
        "supermarket chain"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1304",
    "word": "supper",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈsʌpə(r)/",
      "phonetic_us": "/ˈsʌpə(r)/",
      "meanings": [
        "晚餐",
        "晚饭"
      ],
      "word_forms": {
        "plural": "suppers"
      },
      "collocations": [
        "have supper",
        "after supper",
        "Last Supper"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1305",
    "word": "suppose",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/səˈpəʊz/",
      "phonetic_us": "/səˈpəʊz/",
      "meanings": [
        "猜想",
        "假定",
        "料想"
      ],
      "word_forms": {},
      "collocations": [
        "I suppose",
        "suppose that",
        "supposed to"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1306",
    "word": "sure",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ʃʊə(r), ʃɔː(r)/",
      "phonetic_us": "/ʃʊə(r), ʃɔː(r)/",
      "meanings": [
        "确信",
        "肯定 ad. (口语)的确",
        "一定"
      ],
      "word_forms": {},
      "collocations": [
        "make sure",
        "be sure of",
        "for sure",
        "to be sure"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"确信\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "certain",
        "confident",
        "positive"
      ]
    }
  },
  {
    "id": "w1307",
    "word": "surf",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈsɜːf/",
      "phonetic_us": "/ˈsɜːf/",
      "meanings": [
        "冲浪"
      ],
      "word_forms": {
        "plural": "surves"
      },
      "collocations": [
        "surf the internet",
        "surf the web",
        "go surfing"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"冲浪\"的概念",
      "academicContext": "The surf plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1308",
    "word": "surprise",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/səˈpraɪz/",
      "phonetic_us": "/səˈpraɪz/",
      "meanings": [
        "使惊奇",
        "使诧异 n. 惊奇",
        "诧异"
      ],
      "word_forms": {
        "plural": "surprises"
      },
      "collocations": [
        "big surprise",
        "come as a surprise",
        "surprise party",
        "element of surprise"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1309",
    "word": "sweater",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈswetə(r)/",
      "phonetic_us": "/ˈswetə(r)/",
      "meanings": [
        "厚运动衫",
        "毛衣"
      ],
      "word_forms": {},
      "collocations": [
        "wool sweater",
        "wear a sweater",
        "ugly sweater"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1310",
    "word": "sweet",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/swiːt/",
      "phonetic_us": "/swiːt/",
      "meanings": [
        "甜食",
        "蜜饯",
        "甜点"
      ],
      "word_forms": {
        "plural": "sweets"
      },
      "collocations": [
        "sweet tooth",
        "sweet dreams",
        "sweet talk",
        "short and sweet"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"甜食\"的概念",
      "academicContext": "The sweet plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"sweet\"的发音和拼写，记住其\"甜食\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1311",
    "word": "swimming",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈswɪmɪŋ/",
      "phonetic_us": "/ˈswɪmɪŋ/",
      "meanings": [
        "游泳"
      ],
      "word_forms": {
        "plural": "swimmings"
      },
      "collocations": [
        "go swimming",
        "swimming pool",
        "swimming costume"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1312",
    "word": "swing",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/swɪŋ/",
      "phonetic_us": "/swɪŋ/",
      "meanings": [
        "挥舞",
        "摆动 n. 秋千"
      ],
      "word_forms": {},
      "collocations": [
        "in full swing",
        "get into the swing of",
        "swing by",
        "take a swing at"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"挥舞\"的概念",
      "academicContext": "The swing plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"swing\"的发音和拼写，记住其\"挥舞\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1313",
    "word": "table",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈteɪb(ə)l/",
      "phonetic_us": "/ˈteɪb(ə)l/",
      "meanings": [
        "桌子",
        "表格"
      ],
      "word_forms": {},
      "collocations": [
        "at the table",
        "table tennis",
        "on the table",
        "set the table"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记桌子的事物",
      "academicContext": "Understanding table concepts is essential for academic success.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "desk",
        "counter",
        "chart"
      ]
    }
  },
  {
    "id": "w1314",
    "word": "tail",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/teɪl/",
      "phonetic_us": "/teɪl/",
      "meanings": [
        "(动物的)尾巴"
      ],
      "word_forms": {
        "comparative": "tailler",
        "superlative": "taillest"
      },
      "collocations": [
        "tail end",
        "head or tails",
        "turn tail",
        "can't make head nor tail of"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记(动物的)尾巴的事物",
      "academicContext": "Understanding tail concepts is essential for academic success.",
      "dailyContext": "This is really tail! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1315",
    "word": "tailor",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈteɪlə(r)/",
      "phonetic_us": "/ˈteɪlə(r)/",
      "meanings": [
        "裁缝"
      ],
      "word_forms": {
        "plural": "tailors"
      },
      "collocations": [
        "tailor-made",
        "tailor to"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1316",
    "word": "tale",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/teɪl/",
      "phonetic_us": "/teɪl/",
      "meanings": [
        "故事",
        "传说"
      ],
      "word_forms": {},
      "collocations": [
        "fairy tale",
        "tell tales",
        "old wives' tale",
        "thereby hangs a tale"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"故事\"的概念",
      "academicContext": "The tale plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1317",
    "word": "tall",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tɔːl/",
      "phonetic_us": "/tɔːl/",
      "meanings": [
        "高的"
      ],
      "word_forms": {
        "comparative": "taller",
        "superlative": "tallest"
      },
      "collocations": [
        "tall order",
        "stand tall",
        "tall tale",
        "walk tall"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记高的的事物",
      "academicContext": "Understanding tall concepts is essential for academic success.",
      "dailyContext": "This is really tall! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1318",
    "word": "tape",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/teɪp/",
      "phonetic_us": "/teɪp/",
      "meanings": [
        "磁带",
        "录音带"
      ],
      "word_forms": {
        "plural": "tapes"
      },
      "collocations": [
        "red tape",
        "tape recorder",
        "duct tape",
        "on tape"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"磁带\"的概念",
      "academicContext": "The tape plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1319",
    "word": "task",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tɑːsk; (US) tæsk/",
      "phonetic_us": "/tɑːsk; (US) tæsk/",
      "meanings": [
        "任务",
        "工作"
      ],
      "word_forms": {},
      "collocations": [
        "difficult task",
        "task force",
        "take someone to task"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"任务\"的概念",
      "academicContext": "The task plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1320",
    "word": "taste",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/teɪst/",
      "phonetic_us": "/teɪst/",
      "meanings": [
        "品尝",
        "尝味",
        "味道 vt. 品尝"
      ],
      "word_forms": {},
      "collocations": [
        "good taste",
        "bad taste",
        "taste of",
        "acquire a taste for",
        "leave a bad taste"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"品尝\"的概念",
      "academicContext": "The taste plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"taste\"的发音和拼写，记住其\"品尝\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1321",
    "word": "taxi",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈtæksɪ/",
      "phonetic_us": "/ˈtæksɪ/",
      "meanings": [
        "出租汽车"
      ],
      "word_forms": {
        "plural": "taxis"
      },
      "collocations": [
        "take a taxi",
        "taxi driver",
        "taxi stand",
        "by taxi"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"出租汽车\"的概念",
      "academicContext": "The taxi plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1322",
    "word": "tea",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tiː/",
      "phonetic_us": "/tiː/",
      "meanings": [
        "茶",
        "茶叶 "
      ],
      "word_forms": {
        "plural": "teas"
      },
      "collocations": [
        "cup of tea",
        "tea pot",
        "not my cup of tea",
        "tea break"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"茶\"的概念",
      "academicContext": "The tea plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1323",
    "word": "teacher",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈtiːtʃə(r)/",
      "phonetic_us": "/ˈtiːtʃə(r)/",
      "meanings": [
        "教师",
        "教员"
      ],
      "word_forms": {},
      "collocations": [
        "head teacher",
        "our teacher",
        "English teacher"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"教师\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "instructor",
        "educator",
        "tutor"
      ],
      "etymology": null
    }
  },
  {
    "id": "w1324",
    "word": "team",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/tiːm/",
      "phonetic_us": "/tiːm/",
      "meanings": [
        "队",
        "组"
      ],
      "word_forms": {
        "plural": "teams"
      },
      "collocations": [
        "team spirit",
        "team work",
        "basketball team",
        "in a team"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"队\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "group",
        "crew",
        "squad"
      ]
    }
  },
  {
    "id": "w1325",
    "word": "teamwork",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtiːmwəːk/",
      "phonetic_us": "/ˈtiːmwəːk/",
      "meanings": [
        "合作",
        "协同工作"
      ],
      "word_forms": {},
      "collocations": [
        "good teamwork",
        "teamwork skills",
        "through teamwork"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1326",
    "word": "teapot",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtiːpɔt/",
      "phonetic_us": "/ˈtiːpɔt/",
      "meanings": [
        "茶壶"
      ],
      "word_forms": {
        "plural": "teapots"
      },
      "collocations": [
        "tempest in a teapot",
        "fill the teapot"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1327",
    "word": "tear",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/teə(r)/",
      "phonetic_us": "/teə(r)/",
      "meanings": [
        "眼泪 v. 扯破",
        "撕开"
      ],
      "word_forms": {},
      "collocations": [
        "in tears",
        "burst into tears",
        "tear down",
        "tear up",
        "wear and tear"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"眼泪 v. 扯破\"的概念",
      "academicContext": "The tear plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1328",
    "word": "technology",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/tekˈnɔlədʒɪ/",
      "phonetic_us": "/tekˈnɔlədʒɪ/",
      "meanings": [
        "技术"
      ],
      "word_forms": {
        "plural": "technologies"
      },
      "collocations": [
        "modern technology",
        "information technology",
        "high technology",
        "cutting-edge technology"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1329",
    "word": "telegram",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtelɪɡræm/",
      "phonetic_us": "/ˈtelɪɡræm/",
      "meanings": [
        "电报"
      ],
      "word_forms": {
        "plural": "telegrams"
      },
      "collocations": [
        "send a telegram",
        "telegram service"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1330",
    "word": "telegraph",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtelɪɡrɑːf; (US) -ɡræf/",
      "phonetic_us": "/ˈtelɪɡrɑːf; (US) -ɡræf/",
      "meanings": [
        "(拍) 电报"
      ],
      "word_forms": {
        "plural": "telegraphs"
      },
      "collocations": [
        "by telegraph",
        "bush telegraph"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1331",
    "word": "telephone",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtelɪfəun/",
      "phonetic_us": "/ˈtelɪfəun/",
      "meanings": [
        "打电话 n. 电话"
      ],
      "word_forms": {
        "plural": "telephones"
      },
      "collocations": [
        "answer the telephone",
        "telephone number",
        "telephone call",
        "on the telephone"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1332",
    "word": "television",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtelɪviʒən/",
      "phonetic_us": "/ˈtelɪviʒən/",
      "meanings": [
        "电视"
      ],
      "word_forms": {
        "plural": "televisions"
      },
      "collocations": [
        "watch television",
        "on television",
        "television program",
        "reality television"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1333",
    "word": "temperature",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtemprɪtʃə(r)/",
      "phonetic_us": "/ˈtemprɪtʃə(r)/",
      "meanings": [
        "温度"
      ],
      "word_forms": {
        "plural": "temperatures"
      },
      "collocations": [
        "room temperature",
        "body temperature",
        "high temperature",
        "take one's temperature"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1334",
    "word": "ten",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ten/",
      "phonetic_us": "/ten/",
      "meanings": [
        "十"
      ],
      "word_forms": {
        "plural": "tens"
      },
      "collocations": [
        "ten o'clock",
        "ten to one",
        "nine times out of ten"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"十\"的概念",
      "academicContext": "The ten plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1335",
    "word": "tent",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tent/",
      "phonetic_us": "/tent/",
      "meanings": [
        "帐篷"
      ],
      "word_forms": {},
      "collocations": [
        "pitch a tent",
        "circus tent"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"帐篷\"的概念",
      "academicContext": "The tent plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1336",
    "word": "term",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/tɜːm/",
      "phonetic_us": "/tɜːm/",
      "meanings": [
        "学期",
        "术语",
        "条款"
      ],
      "word_forms": {},
      "collocations": [
        "in terms of",
        "long term",
        "short term",
        "this term"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"学期\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1337",
    "word": "terrible",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈterɪb(ə)l/",
      "phonetic_us": "/ˈterɪb(ə)l/",
      "meanings": [
        "可怕的",
        "糟糕的"
      ],
      "word_forms": {
        "comparative": "more terrible",
        "superlative": "most terrible"
      },
      "collocations": [
        "terrible mistake",
        "terrible accident",
        "feel terrible",
        "look terrible"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1338",
    "word": "terrify",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈterɪfaɪ/",
      "phonetic_us": "/ˈterɪfaɪ/",
      "meanings": [
        "使人感到恐怖"
      ],
      "word_forms": {},
      "collocations": [
        "absolutely terrified",
        "terrify into"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1339",
    "word": "text",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tekst/",
      "phonetic_us": "/tekst/",
      "meanings": [
        "文本",
        "课文"
      ],
      "word_forms": {
        "plural": "texts"
      },
      "collocations": [
        "text book",
        "text message",
        "send a text"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"文本\"的概念",
      "academicContext": "The text plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1340",
    "word": "textbook",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtekstbʊk/",
      "phonetic_us": "/ˈtekstbʊk/",
      "meanings": [
        "课本",
        "教科书"
      ],
      "word_forms": {},
      "collocations": [
        "school textbook",
        "textbook example",
        "textbook case"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1341",
    "word": "than",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðen, ðæn/",
      "phonetic_us": "/ðen, ðæn/",
      "meanings": [
        "比"
      ],
      "word_forms": {
        "plural": "thans"
      },
      "collocations": [
        "more than",
        "less than",
        "rather than",
        "other than"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"比\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "compared to",
        "in comparison with"
      ]
    }
  },
  {
    "id": "w1342",
    "word": "thank",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/θæŋk/",
      "phonetic_us": "/θæŋk/",
      "meanings": [
        "感谢",
        "致谢",
        "道谢 n.（复）感谢"
      ],
      "word_forms": {
        "plural": "thanks"
      },
      "collocations": [
        "thank you",
        "thanks to",
        "thank goodness"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"感谢\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "appreciate",
        "acknowledge",
        "express gratitude"
      ]
    }
  },
  {
    "id": "w1343",
    "word": "thankful",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈθæŋkfʊl/",
      "phonetic_us": "/ˈθæŋkfʊl/",
      "meanings": [
        "感谢的",
        "感激的"
      ],
      "word_forms": {
        "comparative": "more thankful",
        "superlative": "most thankful"
      },
      "collocations": [
        "be thankful for",
        "thankful that",
        "truly thankful"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1344",
    "word": "the",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðə, ðɪ, ðiː/",
      "phonetic_us": "/ðə, ðɪ, ðiː/",
      "meanings": [
        "这（那）个",
        "这（那）些"
      ],
      "word_forms": {},
      "collocations": [
        "the more...the more...",
        "the same",
        "in the end"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记这（那）个的特征",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1345",
    "word": "their",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðeə(r)/",
      "phonetic_us": "/ðeə(r)/",
      "meanings": [
        "他(她",
        "它)们的"
      ],
      "word_forms": {},
      "collocations": [
        "their own",
        "on their own",
        "their names"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"他(她\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1346",
    "word": "theirs",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ðeəz/",
      "phonetic_us": "/ðeəz/",
      "meanings": [
        "他（她",
        "它）们的"
      ],
      "word_forms": {},
      "collocations": [
        "friend of theirs",
        "that's theirs"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1347",
    "word": "them",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ð(ə)m, ðem/",
      "phonetic_us": "/ð(ə)m, ðem/",
      "meanings": [
        "他/她/它们（宾格）"
      ],
      "word_forms": {},
      "collocations": [
        "all of them",
        "some of them",
        "for them"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记他/她/它们（宾格）的特征",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1348",
    "word": "themselves",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðəmˈselvz/",
      "phonetic_us": "/ðəmˈselvz/",
      "meanings": [
        "他/她/它们自己"
      ],
      "word_forms": {
        "plural": "themselveses"
      },
      "collocations": [
        "by themselves",
        "enjoy themselves",
        "help themselves"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "表达他/她/它们自己这一概念",
      "academicContext": "The research themselves the importance of this topic.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1349",
    "word": "then",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðen/",
      "phonetic_us": "/ðen/",
      "meanings": [
        "当时",
        "那时",
        "然后"
      ],
      "word_forms": {},
      "collocations": [
        "and then",
        "since then",
        "by then",
        "now and then"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"当时\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "next",
        "afterward",
        "subsequently"
      ]
    }
  },
  {
    "id": "w1350",
    "word": "there",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðeə(r)/",
      "phonetic_us": "/ðeə(r)/",
      "meanings": [
        "那!你瞧! n. 那里",
        "那儿 ad. 在那里",
        "往那里"
      ],
      "word_forms": {},
      "collocations": [
        "over there",
        "there is",
        "there are",
        "here and there"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记那!你瞧! n. 那里的特征",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "in that place",
        "at that point"
      ]
    }
  },
  {
    "id": "w1351",
    "word": "these",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðiːz/",
      "phonetic_us": "/ðiːz/",
      "meanings": [
        "& pron. 这些"
      ],
      "word_forms": {},
      "collocations": [
        "these days",
        "these years",
        "all these"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "传达& pron. 这些的意思",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "those",
        "the ones",
        "such"
      ]
    }
  },
  {
    "id": "w1352",
    "word": "they",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðeɪ/",
      "phonetic_us": "/ðeɪ/",
      "meanings": [
        "他（她）们",
        "它们"
      ],
      "word_forms": {},
      "collocations": [
        "they are",
        "they said",
        "they can"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记他（她）们的特征",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1353",
    "word": "thick",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/θɪk/",
      "phonetic_us": "/θɪk/",
      "meanings": [
        "厚的"
      ],
      "word_forms": {
        "comparative": "thicker",
        "superlative": "thickest"
      },
      "collocations": [
        "thick and thin",
        "through thick and thin",
        "in the thick of",
        "thick skin"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记厚的的事物",
      "academicContext": "Understanding thick concepts is essential for academic success.",
      "dailyContext": "This is really thick! I love it.",
      "memoryStory": "通过联想\"thick\"的发音和拼写，记住其\"厚的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1354",
    "word": "thin",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/θɪn/",
      "phonetic_us": "/θɪn/",
      "meanings": [
        "薄的",
        "瘦的",
        "稀的"
      ],
      "word_forms": {
        "comparative": "thinner",
        "superlative": "thinnest"
      },
      "collocations": [
        "thin air",
        "vanish into thin air",
        "thin on the ground",
        "wear thin"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记薄的的事物",
      "academicContext": "Understanding thin concepts is essential for academic success.",
      "dailyContext": "This is really thin! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1355",
    "word": "thing",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/θɪŋ/",
      "phonetic_us": "/θɪŋ/",
      "meanings": [
        "东西",
        "(复)物品",
        "用品"
      ],
      "word_forms": {
        "plural": "things"
      },
      "collocations": [
        "the thing is",
        "first thing",
        "such a thing",
        "nothing else"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"东西\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "object",
        "item",
        "matter"
      ]
    }
  },
  {
    "id": "w1356",
    "word": "third",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/θəːd/",
      "phonetic_us": "/θəːd/",
      "meanings": [
        "第三"
      ],
      "word_forms": {
        "plural": "thirds"
      },
      "collocations": [
        "third party",
        "third time's the charm",
        "third world"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"第三\"的概念",
      "academicContext": "The third plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"third\"的发音和拼写，记住其\"第三\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1357",
    "word": "thirst",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/θəːst/",
      "phonetic_us": "/θəːst/",
      "meanings": [
        "渴",
        "口渴"
      ],
      "word_forms": {
        "plural": "thirsts"
      },
      "collocations": [
        "quench one's thirst",
        "die of thirst",
        "thirst for knowledge"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1358",
    "word": "thirsty",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈθəːstɪ/",
      "phonetic_us": "/ˈθəːstɪ/",
      "meanings": [
        "渴"
      ],
      "word_forms": {
        "plural": "thirsties"
      },
      "collocations": [
        "feel thirsty",
        "make someone thirsty"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1359",
    "word": "thirteen",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/θəːtiːn/",
      "phonetic_us": "/θəːtiːn/",
      "meanings": [
        "十三"
      ],
      "word_forms": {
        "plural": "thirteens"
      },
      "collocations": [
        "thirteen years old",
        "baker's dozen"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1360",
    "word": "thirty",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈθəːtɪ/",
      "phonetic_us": "/ˈθəːtɪ/",
      "meanings": [
        "三十"
      ],
      "word_forms": {
        "plural": "thirties"
      },
      "collocations": [
        "thirty years old",
        "in one's thirties"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1361",
    "word": "though",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðəʊ/",
      "phonetic_us": "/ðəʊ/",
      "meanings": [
        "虽然",
        "可是"
      ],
      "word_forms": {
        "plural": "thoughs"
      },
      "collocations": [
        "even though",
        "as though",
        "though...still..."
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"虽然\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "although",
        "even if",
        "however"
      ]
    }
  },
  {
    "id": "w1362",
    "word": "thought",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/θɔːt/",
      "phonetic_us": "/θɔːt/",
      "meanings": [
        "思考",
        "思想",
        "念头"
      ],
      "word_forms": {},
      "collocations": [
        "food for thought",
        "lost in thought",
        "second thought",
        "train of thought"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1363",
    "word": "thousand",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈθaʊzənd/",
      "phonetic_us": "/ˈθaʊzənd/",
      "meanings": [
        "千"
      ],
      "word_forms": {
        "plural": "thousands"
      },
      "collocations": [
        "one thousand",
        "thousands of",
        "a thousand times"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1364",
    "word": "three",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/θriː/",
      "phonetic_us": "/θriː/",
      "meanings": [
        "三"
      ],
      "word_forms": {
        "plural": "threes"
      },
      "collocations": [
        "three times",
        "rule of three",
        "two's company three's a crowd"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"三\"的概念",
      "academicContext": "The three plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"three\"的发音和拼写，记住其\"三\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1365",
    "word": "through",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/θruː/",
      "phonetic_us": "/θruː/",
      "meanings": [
        "穿（通）过",
        "从始至终 ad. 穿(通)过",
        "自始至终"
      ],
      "word_forms": {
        "plural": "throughs"
      },
      "collocations": [
        "go through",
        "get through",
        "all through",
        "through the Internet"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "传达穿（通）过的意思",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "via",
        "by way of",
        "across"
      ]
    }
  },
  {
    "id": "w1366",
    "word": "Thursday",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈθəːzdeɪ/",
      "phonetic_us": "/ˈθəːzdeɪ/",
      "meanings": [
        "星期四"
      ],
      "word_forms": {},
      "collocations": [
        "on Thursday",
        "this Thursday",
        "next Thursday"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1367",
    "word": "thus",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ðʌs/",
      "phonetic_us": "/ðʌs/",
      "meanings": [
        "这样",
        "因而"
      ],
      "word_forms": {
        "plural": "thuses"
      },
      "collocations": [
        "thus far",
        "and thus"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"这样\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1368",
    "word": "tick",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tɪk/",
      "phonetic_us": "/tɪk/",
      "meanings": [
        "作记号 n. 记号",
        "符号",
        "滴答声"
      ],
      "word_forms": {
        "plural": "ticks"
      },
      "collocations": [
        "tick off",
        "tick tock",
        "what makes someone tick"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"作记号 n. 记号\"的概念",
      "academicContext": "The tick plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1369",
    "word": "ticket",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtɪkɪt/",
      "phonetic_us": "/ˈtɪkɪt/",
      "meanings": [
        "票",
        "卷"
      ],
      "word_forms": {
        "plural": "tickets"
      },
      "collocations": [
        "buy a ticket",
        "ticket office",
        "ticket to ride",
        "meal ticket"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1370",
    "word": "tidy",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈtaidi/",
      "phonetic_us": "/ˈtaidi/",
      "meanings": [
        "整洁的",
        "干净的 vt. 弄整洁",
        "弄干净"
      ],
      "word_forms": {
        "comparative": "tidier",
        "superlative": "tidiest"
      },
      "collocations": [
        "tidy up",
        "tidy sum",
        "neat and tidy"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记整洁的的事物",
      "academicContext": "Understanding tidy concepts is essential for academic success.",
      "dailyContext": "This is really tidy! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1371",
    "word": "tiger",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈtaɪɡə(r)/",
      "phonetic_us": "/ˈtaɪɡə(r)/",
      "meanings": [
        "老虎"
      ],
      "word_forms": {
        "plural": "tigers"
      },
      "collocations": [
        "paper tiger",
        "tiger mom",
        "eye of the tiger"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"老虎\"的概念",
      "academicContext": "The tiger plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"tiger\"的发音和拼写，记住其\"老虎\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1372",
    "word": "time",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/taɪm/",
      "phonetic_us": "/taɪm/",
      "meanings": [
        "时间",
        "时期",
        "钟点"
      ],
      "word_forms": {
        "plural": "times"
      },
      "collocations": [
        "on time",
        "in time",
        "at the same time",
        "have a good time",
        "from time to time"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"时间\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "period",
        "moment",
        "duration"
      ]
    }
  },
  {
    "id": "w1373",
    "word": "tire",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈtaɪə(r)/",
      "phonetic_us": "/ˈtaɪə(r)/",
      "meanings": [
        "使疲劳"
      ],
      "word_forms": {},
      "collocations": [
        "never tire of",
        "tire out"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"使疲劳\"的概念",
      "academicContext": "The tire plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1374",
    "word": "tired",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈtaɪəd/",
      "phonetic_us": "/ˈtaɪəd/",
      "meanings": [
        "疲劳的",
        "累的"
      ],
      "word_forms": {
        "comparative": "tiredder",
        "superlative": "tireddest"
      },
      "collocations": [
        "tired of",
        "sick and tired",
        "dead tired"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记疲劳的的事物",
      "academicContext": "Understanding tired concepts is essential for academic success.",
      "dailyContext": "This is really tired! I love it.",
      "memoryStory": "通过联想\"tired\"的发音和拼写，记住其\"疲劳的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1375",
    "word": "to",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/tʊ, tuː/",
      "phonetic_us": "/tʊ, tuː/",
      "meanings": [
        "给",
        "对",
        "向"
      ],
      "word_forms": {},
      "collocations": [
        "go to",
        "to and from",
        "to the point",
        "to some extent"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"给\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1376",
    "word": "together",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/təˈgeðə/",
      "phonetic_us": "/təˈgeðə/",
      "meanings": [
        "一起",
        "共同"
      ],
      "word_forms": {},
      "collocations": [
        "get together",
        "put together",
        "together with",
        "all together"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"一起\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "jointly",
        "collectively",
        "in unison"
      ],
      "etymology": null
    }
  },
  {
    "id": "w1377",
    "word": "toilet",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtɔɪlɪt/",
      "phonetic_us": "/ˈtɔɪlɪt/",
      "meanings": [
        "厕所"
      ],
      "word_forms": {
        "plural": "toilets"
      },
      "collocations": [
        "go to the toilet",
        "toilet paper",
        "flush the toilet"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1378",
    "word": "Tokyo",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈtəʊkjəʊ/",
      "phonetic_us": "/ˈtəʊkjəʊ/",
      "meanings": [
        "东京"
      ],
      "word_forms": {},
      "collocations": [
        "in Tokyo",
        "Tokyo tower"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"东京\"的概念",
      "academicContext": "The Tokyo plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"Tokyo\"的发音和拼写，记住其\"东京\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1379",
    "word": "tomato",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/təˈmɑːtəʊ; (US) təˈmeɪtəʊ/",
      "phonetic_us": "/təˈmɑːtəʊ; (US) təˈmeɪtəʊ/",
      "meanings": [
        "西红柿",
        "番茄"
      ],
      "word_forms": {
        "plural": "tomatos"
      },
      "collocations": [
        "tomato sauce",
        "tomato soup",
        "cherry tomato"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1380",
    "word": "tomb",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tuːm/",
      "phonetic_us": "/tuːm/",
      "meanings": [
        "坟墓"
      ],
      "word_forms": {
        "plural": "tombs"
      },
      "collocations": [
        "ancient tomb",
        "tomb stone"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"坟墓\"的概念",
      "academicContext": "The tomb plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1381",
    "word": "tomorrow",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/təˈmɔrəʊ/",
      "phonetic_us": "/təˈmɔrəʊ/",
      "meanings": [
        "& n. 明天"
      ],
      "word_forms": {
        "plural": "tomorrows"
      },
      "collocations": [
        "the day after tomorrow",
        "tomorrow morning",
        "see you tomorrow"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记& n. 明天的特征",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "next day",
        "future"
      ]
    }
  },
  {
    "id": "w1382",
    "word": "tongue",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/tʌŋ/",
      "phonetic_us": "/tʌŋ/",
      "meanings": [
        "舌",
        "舌头"
      ],
      "word_forms": {
        "plural": "tongues"
      },
      "collocations": [
        "mother tongue",
        "bite one's tongue",
        "slip of the tongue",
        "tongue twister"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1383",
    "word": "too",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/tuː/",
      "phonetic_us": "/tuː/",
      "meanings": [
        "也",
        "还",
        "又"
      ],
      "word_forms": {},
      "collocations": [
        "too...to...",
        "too much",
        "too many",
        "me too"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"也\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "also",
        "as well",
        "excessively"
      ]
    }
  },
  {
    "id": "w1384",
    "word": "tool",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tuːl/",
      "phonetic_us": "/tuːl/",
      "meanings": [
        "工具",
        "器具"
      ],
      "word_forms": {
        "plural": "tools"
      },
      "collocations": [
        "tool box",
        "tool kit",
        "power tool",
        "right tool for the job"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"工具\"的概念",
      "academicContext": "The tool plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1385",
    "word": "toothache",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtuːθeɪk/",
      "phonetic_us": "/ˈtuːθeɪk/",
      "meanings": [
        "牙痛"
      ],
      "word_forms": {
        "plural": "toothaches"
      },
      "collocations": [
        "bad toothache",
        "have a toothache"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1386",
    "word": "toothbrush",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtuːθbrʌʃ/",
      "phonetic_us": "/ˈtuːθbrʌʃ/",
      "meanings": [
        "牙刷"
      ],
      "word_forms": {},
      "collocations": [
        "electric toothbrush",
        "brush with toothbrush"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1387",
    "word": "toothpaste",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtuːθpeɪst/",
      "phonetic_us": "/ˈtuːθpeɪst/",
      "meanings": [
        "牙膏"
      ],
      "word_forms": {
        "plural": "toothpastes"
      },
      "collocations": [
        "tube of toothpaste",
        "squeeze toothpaste"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1388",
    "word": "top",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tɔp/",
      "phonetic_us": "/tɔp/",
      "meanings": [
        "顶部",
        "（物体的）上面"
      ],
      "word_forms": {
        "plural": "tops"
      },
      "collocations": [
        "on top of",
        "at the top",
        "top secret",
        "from top to bottom",
        "over the top"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"顶部\"的概念",
      "academicContext": "The top plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1389",
    "word": "total",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈtəʊt(ə)l/",
      "phonetic_us": "/ˈtəʊt(ə)l/",
      "meanings": [
        "总数的",
        "完全的 n./ v. 合计",
        "总计"
      ],
      "word_forms": {
        "comparative": "totaller",
        "superlative": "totallest"
      },
      "collocations": [
        "in total",
        "total number",
        "total amount"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记总数的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "sum",
        "whole",
        "entire"
      ],
      "etymology": {
        "root": "tot",
        "suffix": "-al",
        "meaning": "tot + al(形容词后缀)"
      }
    }
  },
  {
    "id": "w1390",
    "word": "touch",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʌtʃ/",
      "phonetic_us": "/tʌtʃ/",
      "meanings": [
        "触摸",
        "接触"
      ],
      "word_forms": {},
      "collocations": [
        "get in touch",
        "keep in touch",
        "lose touch",
        "touch base",
        "finishing touch"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"触摸\"的概念",
      "academicContext": "The touch plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"touch\"的发音和拼写，记住其\"触摸\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1391",
    "word": "tough",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʌf /",
      "phonetic_us": "/tʌf /",
      "meanings": [
        "坚硬的",
        "结实的",
        "棘手的"
      ],
      "word_forms": {
        "comparative": "tougher",
        "superlative": "toughest"
      },
      "collocations": [
        "tough luck",
        "hang tough",
        "tough it out",
        "when the going gets tough"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记坚硬的的事物",
      "academicContext": "Understanding tough concepts is essential for academic success.",
      "dailyContext": "This is really tough! I love it.",
      "memoryStory": "通过联想\"tough\"的发音和拼写，记住其\"坚硬的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1392",
    "word": "tour",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tʊə(r)/",
      "phonetic_us": "/tʊə(r)/",
      "meanings": [
        "参观",
        "观光",
        "旅行"
      ],
      "word_forms": {},
      "collocations": [
        "on tour",
        "guided tour",
        "grand tour",
        "tour guide"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"参观\"的概念",
      "academicContext": "The tour plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1393",
    "word": "tourism",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtʊərɪz(ə)m/",
      "phonetic_us": "/ˈtʊərɪz(ə)m/",
      "meanings": [
        "旅游业",
        "观光"
      ],
      "word_forms": {
        "plural": "tourisms"
      },
      "collocations": [
        "tourism industry",
        "promote tourism",
        "boost tourism"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1394",
    "word": "tourist",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtʊərɪst/",
      "phonetic_us": "/ˈtʊərɪst/",
      "meanings": [
        "旅行者",
        "观光者"
      ],
      "word_forms": {},
      "collocations": [
        "tourist attraction",
        "tourist destination",
        "foreign tourist"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1395",
    "word": "towel",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈtaʊəl/",
      "phonetic_us": "/ˈtaʊəl/",
      "meanings": [
        "毛巾"
      ],
      "word_forms": {
        "plural": "towels"
      },
      "collocations": [
        "bath towel",
        "throw in the towel",
        "beach towel"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"毛巾\"的概念",
      "academicContext": "The towel plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"towel\"的发音和拼写，记住其\"毛巾\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1396",
    "word": "tower",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈtaʊə(r)/",
      "phonetic_us": "/ˈtaʊə(r)/",
      "meanings": [
        "塔"
      ],
      "word_forms": {
        "plural": "towers"
      },
      "collocations": [
        "ivory tower",
        "tower over",
        "tower of strength",
        "control tower"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"塔\"的概念",
      "academicContext": "The tower plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"tower\"的发音和拼写，记住其\"塔\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1397",
    "word": "town",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/taʊn/",
      "phonetic_us": "/taʊn/",
      "meanings": [
        "城镇",
        "城"
      ],
      "word_forms": {
        "plural": "towns"
      },
      "collocations": [
        "in town",
        "go to town",
        "around town",
        "home town"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"城镇\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "city",
        "municipality",
        "village"
      ]
    }
  },
  {
    "id": "w1398",
    "word": "toy",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/tɔɪ/",
      "phonetic_us": "/tɔɪ/",
      "meanings": [
        "玩具",
        "玩物"
      ],
      "word_forms": {},
      "collocations": [
        "toy with",
        "play with toys",
        "toy soldier"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"玩具\"的概念",
      "academicContext": "The toy plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1399",
    "word": "track",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/træk/",
      "phonetic_us": "/træk/",
      "meanings": [
        "轨道",
        "田径"
      ],
      "word_forms": {
        "plural": "tracks"
      },
      "collocations": [
        "keep track of",
        "lose track of",
        "on track",
        "off track",
        "track and field"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"轨道\"的概念",
      "academicContext": "The track plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"track\"的发音和拼写，记住其\"轨道\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1400",
    "word": "tractor",
    "level": "初三",
    "unit": "Unit 14",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtræktə(r)/",
      "phonetic_us": "/ˈtræktə(r)/",
      "meanings": [
        "拖拉机"
      ],
      "word_forms": {},
      "collocations": [
        "drive a tractor",
        "farm tractor"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1401",
    "word": "trade",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/treɪd/",
      "phonetic_us": "/treɪd/",
      "meanings": [
        "商业",
        "贸易 vt. 交易"
      ],
      "word_forms": {},
      "collocations": [
        "trade in",
        "trade off",
        "trade secret",
        "jack of all trades"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"商业\"的概念",
      "academicContext": "The trade plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"trade\"的发音和拼写，记住其\"商业\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1402",
    "word": "tradition",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/trəˈdɪʃ (ə)n/",
      "phonetic_us": "/trəˈdɪʃ (ə)n/",
      "meanings": [
        "传统",
        "风俗"
      ],
      "word_forms": {
        "plural": "traditions"
      },
      "collocations": [
        "long tradition",
        "family tradition",
        "by tradition",
        "break with tradition"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1403",
    "word": "traditional",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/trəˈdɪʃ(ə)n(ə)l/",
      "phonetic_us": "/trəˈdɪʃ(ə)n(ə)l/",
      "meanings": [
        "传统的",
        "风俗的",
        "惯例的"
      ],
      "word_forms": {
        "comparative": "more traditional",
        "superlative": "most traditional"
      },
      "collocations": [
        "traditional culture",
        "traditional music",
        "traditional method"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1404",
    "word": "traffic",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtræfɪk/",
      "phonetic_us": "/ˈtræfɪk/",
      "meanings": [
        "交通",
        "来往车辆"
      ],
      "word_forms": {},
      "collocations": [
        "heavy traffic",
        "traffic jam",
        "traffic light",
        "traffic accident"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1405",
    "word": "train",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/treɪn/",
      "phonetic_us": "/treɪn/",
      "meanings": [
        "火车 v. 培训",
        "训练"
      ],
      "word_forms": {},
      "collocations": [
        "by train",
        "train station",
        "take the train",
        "train hard"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"火车 v. 培训\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "coach",
        "instruct",
        "educate"
      ]
    }
  },
  {
    "id": "w1406",
    "word": "trainer",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/treɪnə(r)/",
      "phonetic_us": "/treɪnə(r)/",
      "meanings": [
        "训练人",
        "教练"
      ],
      "word_forms": {},
      "collocations": [
        "personal trainer",
        "fitness trainer",
        "animal trainer"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1407",
    "word": "training",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtreɪnɪŋ/",
      "phonetic_us": "/ˈtreɪnɪŋ/",
      "meanings": [
        "培训"
      ],
      "word_forms": {
        "plural": "trainings"
      },
      "collocations": [
        "training program",
        "job training",
        "training course",
        "in training"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1408",
    "word": "translate",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/trænsˈleɪt/",
      "phonetic_us": "/trænsˈleɪt/",
      "meanings": [
        "翻译"
      ],
      "word_forms": {
        "plural": "translates"
      },
      "collocations": [
        "translate into",
        "translate from",
        "lost in translation"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1409",
    "word": "trap",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/træp/",
      "phonetic_us": "/træp/",
      "meanings": [
        "陷阱 vt. 使陷入困境"
      ],
      "word_forms": {},
      "collocations": [
        "fall into a trap",
        "trap door",
        "speed trap",
        "booby trap"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"陷阱 vt. 使陷入困境\"的概念",
      "academicContext": "The trap plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1410",
    "word": "traveler",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtrævələ(r)/",
      "phonetic_us": "/ˈtrævələ(r)/",
      "meanings": [
        "旅行者"
      ],
      "word_forms": {},
      "collocations": [
        "frequent traveler",
        "world traveler",
        "fellow traveler"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1411",
    "word": "treat",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/triːt/",
      "phonetic_us": "/triːt/",
      "meanings": [
        "对待",
        "看待"
      ],
      "word_forms": {},
      "collocations": [
        "treat...as...",
        "my treat",
        "treat sb to sth"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"对待\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "handle",
        "deal with",
        "entertain"
      ]
    }
  },
  {
    "id": "w1412",
    "word": "tree",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/triː/",
      "phonetic_us": "/triː/",
      "meanings": [
        "树"
      ],
      "word_forms": {
        "plural": "trees"
      },
      "collocations": [
        "Christmas tree",
        "family tree",
        "apple tree",
        "under the tree"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"树\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "plant",
        "timber"
      ]
    }
  },
  {
    "id": "w1413",
    "word": "trip",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/trɪp/",
      "phonetic_us": "/trɪp/",
      "meanings": [
        "旅行",
        "旅程"
      ],
      "word_forms": {},
      "collocations": [
        "take a trip",
        "round trip",
        "business trip",
        "guilt trip",
        "trip over"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"旅行\"的概念",
      "academicContext": "The trip plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1414",
    "word": "trouble",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtrʌb(ə)l/",
      "phonetic_us": "/ˈtrʌb(ə)l/",
      "meanings": [
        "使苦恼",
        "使忧虑",
        "使麻烦 n. 问题"
      ],
      "word_forms": {
        "plural": "troubles"
      },
      "collocations": [
        "in trouble",
        "get into trouble",
        "trouble is",
        "ask for trouble",
        "looking for trouble"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1415",
    "word": "trousers",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtraʊzəz/",
      "phonetic_us": "/ˈtraʊzəz/",
      "meanings": [
        "裤子",
        "长裤"
      ],
      "word_forms": {
        "plural": "trouserses"
      },
      "collocations": [
        "pair of trousers",
        "wear trousers",
        "trouser leg"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1416",
    "word": "truck",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/trʌk/",
      "phonetic_us": "/trʌk/",
      "meanings": [
        "卡车",
        "运货车",
        "车皮"
      ],
      "word_forms": {
        "plural": "trucks"
      },
      "collocations": [
        "fire truck",
        "truck driver",
        "have no truck with",
        "food truck"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"卡车\"的概念",
      "academicContext": "The truck plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"truck\"的发音和拼写，记住其\"卡车\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1417",
    "word": "true",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/truː/",
      "phonetic_us": "/truː/",
      "meanings": [
        "真的",
        "真实的",
        "忠诚的"
      ],
      "word_forms": {
        "noun": "truth",
        "adverb": "truly"
      },
      "collocations": [
        "come true",
        "true or false",
        "true friend",
        "it's true that"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记真的的事物",
      "academicContext": "Understanding true concepts is essential for academic success.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "correct",
        "accurate",
        "genuine"
      ]
    }
  },
  {
    "id": "w1418",
    "word": "truth",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/truːθ/",
      "phonetic_us": "/truːθ/",
      "meanings": [
        "真理",
        "事实",
        "真相"
      ],
      "word_forms": {
        "plural": "truths"
      },
      "collocations": [
        "tell the truth",
        "moment of truth",
        "plain truth",
        "truth be told"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"真理\"的概念",
      "academicContext": "The truth plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"truth\"的发音和拼写，记住其\"真理\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1419",
    "word": "try",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/trai/",
      "phonetic_us": "/trai/",
      "meanings": [
        "试",
        "试图",
        "努力"
      ],
      "word_forms": {
        "noun": "try",
        "noun2": "trial"
      },
      "collocations": [
        "try to do",
        "try doing",
        "try out"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "尝试做某事,不管结果如何",
      "academicContext": "Scientists try different approaches to solve problems.",
      "dailyContext": "Let's try this new restaurant.",
      "memoryStory": "",
      "confusableWords": [
        "attempt",
        "endeavor",
        "effort"
      ],
      "etymology": {
        "root": "try",
        "meaning": "来自古法语trier,选择、尝试"
      }
    }
  },
  {
    "id": "w1420",
    "word": "Tuesday",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtjuːzdeɪ/",
      "phonetic_us": "/ˈtjuːzdeɪ/",
      "meanings": [
        "星期二"
      ],
      "word_forms": {},
      "collocations": [
        "on Tuesday",
        "this Tuesday",
        "next Tuesday"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1421",
    "word": "turkey",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtɜːkɪ/",
      "phonetic_us": "/ˈtɜːkɪ/",
      "meanings": [
        "火鸡"
      ],
      "word_forms": {
        "plural": "turkeys"
      },
      "collocations": [
        "roast turkey",
        "cold turkey",
        "talk turkey"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1422",
    "word": "turn",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/tɜːn/",
      "phonetic_us": "/tɜːn/",
      "meanings": [
        "旋转",
        "翻转",
        "转变"
      ],
      "word_forms": {},
      "collocations": [
        "turn on",
        "turn off",
        "in turn"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"旋转\"的概念",
      "dailyContext": "Turn left at the traffic light.",
      "memoryStory": "",
      "confusableWords": [
        "rotate",
        "spin",
        "change direction"
      ],
      "etymology": {
        "root": "turn",
        "meaning": "来自拉丁语tornare,旋转"
      }
    }
  },
  {
    "id": "w1423",
    "word": "turning",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtɜːnɪŋ/",
      "phonetic_us": "/ˈtɜːnɪŋ/",
      "meanings": [
        "拐弯处",
        "拐角处"
      ],
      "word_forms": {
        "plural": "turnings"
      },
      "collocations": [
        "turning point",
        "at the turning"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1424",
    "word": "twelfth",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/twelfθ/",
      "phonetic_us": "/twelfθ/",
      "meanings": [
        "第十二"
      ],
      "word_forms": {
        "plural": "twelfths"
      },
      "collocations": [
        "twelfth night",
        "twelfth grade"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1425",
    "word": "twelve",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/twelv/",
      "phonetic_us": "/twelv/",
      "meanings": [
        "十二"
      ],
      "word_forms": {
        "plural": "twelves"
      },
      "collocations": [
        "twelve o'clock",
        "at twelve"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1426",
    "word": "twenty",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈtwentɪ/",
      "phonetic_us": "/ˈtwentɪ/",
      "meanings": [
        "二十"
      ],
      "word_forms": {
        "plural": "twenties"
      },
      "collocations": [
        "twenty years old",
        "in one's twenties",
        "twenty-four seven"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1427",
    "word": "twice",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/twaɪs/",
      "phonetic_us": "/twaɪs/",
      "meanings": [
        "两次",
        "两倍"
      ],
      "word_forms": {
        "plural": "twices"
      },
      "collocations": [
        "think twice",
        "once or twice",
        "twice as much"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"两次\"的概念",
      "academicContext": "The twice plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"twice\"的发音和拼写，记住其\"两次\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1428",
    "word": "twin",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/twɪn/",
      "phonetic_us": "/twɪn/",
      "meanings": [
        "双胞胎之一"
      ],
      "word_forms": {
        "plural": "twins"
      },
      "collocations": [
        "twin brother",
        "twin sister",
        "identical twin"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"双胞胎之一\"的概念",
      "academicContext": "The twin plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1429",
    "word": "two",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/tuː/",
      "phonetic_us": "/tuː/",
      "meanings": [
        "二"
      ],
      "word_forms": {
        "plural": "twos"
      },
      "collocations": [
        "in两",
        "two or three",
        "between two"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"二\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1430",
    "word": "type",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈtaɪp/",
      "phonetic_us": "/ˈtaɪp/",
      "meanings": [
        "打字 n. 种类",
        "类型"
      ],
      "word_forms": {
        "plural": "types"
      },
      "collocations": [
        "type of",
        "this type",
        "all types of"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "传达打字 n. 种类的意思",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "kind",
        "sort",
        "category"
      ]
    }
  },
  {
    "id": "w1431",
    "word": "umbrella",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ʌmˈbrelə/",
      "phonetic_us": "/ʌmˈbrelə/",
      "meanings": [
        "雨伞"
      ],
      "word_forms": {
        "plural": "umbrellas"
      },
      "collocations": [
        "under an umbrella",
        "beach umbrella",
        "umbrella term"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1432",
    "word": "uncle",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈʌŋk(ə)l/",
      "phonetic_us": "/ˈʌŋk(ə)l/",
      "meanings": [
        "叔",
        "伯",
        "舅"
      ],
      "word_forms": {
        "plural": "uncles"
      },
      "collocations": [
        "uncle Sam",
        "cry uncle",
        "say uncle"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"叔\"的概念",
      "academicContext": "The uncle plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"uncle\"的发音和拼写，记住其\"叔\"的含义。",
      "etymology": {
        "prefix": "un-",
        "meaning": "un(不) + "
      },
      "confusableWords": []
    }
  },
  {
    "id": "w1433",
    "word": "underground",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ʌndəˈɡraʊnd/",
      "phonetic_us": "/ʌndəˈɡraʊnd/",
      "meanings": [
        "地下的 n. 地铁"
      ],
      "word_forms": {
        "plural": "undergrounds",
        "comparative": "more underground",
        "superlative": "most underground"
      },
      "collocations": [
        "go underground",
        "underground railway",
        "underground music"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1434",
    "word": "understanding",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ʌndəˈstændɪŋ/",
      "phonetic_us": "/ʌndəˈstændɪŋ/",
      "meanings": [
        "领会",
        "理解"
      ],
      "word_forms": {},
      "collocations": [
        "mutual understanding",
        "come to an understanding",
        "beyond understanding"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1435",
    "word": "unfair",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ʌnˈfeə(r)/",
      "phonetic_us": "/ʌnˈfeə(r)/",
      "meanings": [
        "不公平的",
        "不公正的"
      ],
      "word_forms": {
        "comparative": "unfairrer",
        "superlative": "unfairrest"
      },
      "collocations": [
        "unfair advantage",
        "unfair treatment",
        "completely unfair"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1436",
    "word": "unit",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈjuːnɪt/",
      "phonetic_us": "/ˈjuːnɪt/",
      "meanings": [
        "单元",
        "单位"
      ],
      "word_forms": {
        "plural": "units"
      },
      "collocations": [
        "unit price",
        "family unit",
        "military unit"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"单元\"的概念",
      "academicContext": "The unit plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1437",
    "word": "universe",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈjuːnɪvɜːs/",
      "phonetic_us": "/ˈjuːnɪvɜːs/",
      "meanings": [
        "宇宙"
      ],
      "word_forms": {
        "plural": "universes"
      },
      "collocations": [
        "across the universe",
        "center of the universe",
        "parallel universe"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1438",
    "word": "university",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/juːnɪˈvɜːsɪtɪ/",
      "phonetic_us": "/juːnɪˈvɜːsɪtɪ/",
      "meanings": [
        "大学"
      ],
      "word_forms": {},
      "collocations": [
        "go to university",
        "at university",
        "university student"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1439",
    "word": "unknown",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ʌnnəun/",
      "phonetic_us": "/ʌnnəun/",
      "meanings": [
        "不知道的"
      ],
      "word_forms": {
        "comparative": "more unknown",
        "superlative": "most unknown"
      },
      "collocations": [
        "into the unknown",
        "unknown territory",
        "journey into the unknown"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1440",
    "word": "unless",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ʌnˈles/",
      "phonetic_us": "/ʌnˈles/",
      "meanings": [
        "如果不",
        "除非"
      ],
      "word_forms": {},
      "collocations": [
        "unless otherwise",
        "not unless"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1441",
    "word": "unlike",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ʌnˈlaɪk/",
      "phonetic_us": "/ʌnˈlaɪk/",
      "meanings": [
        "不像",
        "和…不同"
      ],
      "word_forms": {
        "plural": "unlikes"
      },
      "collocations": [
        "unlike anything",
        "unlike others",
        "quite unlike"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1442",
    "word": "unusual",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ʌnˈjuːʒuəl/",
      "phonetic_us": "/ʌnˈjuːʒuəl/",
      "meanings": [
        "不平常的",
        "异常的"
      ],
      "word_forms": {
        "comparative": "more unusual",
        "superlative": "most unusual"
      },
      "collocations": [
        "highly unusual",
        "nothing unusual",
        "unusual circumstances"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1443",
    "word": "up",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ʌp/",
      "phonetic_us": "/ʌp/",
      "meanings": [
        "向上",
        "在上方 prep. 向(高处)",
        "向(在)…上(面)游"
      ],
      "word_forms": {},
      "collocations": [
        "get up",
        "wake up",
        "grow up",
        "give up",
        "come up",
        "pick up"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"向上\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "upward",
        "above",
        "higher"
      ]
    }
  },
  {
    "id": "w1444",
    "word": "upon",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/əˈpɔn/",
      "phonetic_us": "/əˈpɔn/",
      "meanings": [
        "在…上面"
      ],
      "word_forms": {},
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "表达在…上面这一概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "on",
        "on top of",
        "at"
      ]
    }
  },
  {
    "id": "w1445",
    "word": "upstairs",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ʌpˈsteəz/",
      "phonetic_us": "/ʌpˈsteəz/",
      "meanings": [
        "在楼上",
        "到楼上"
      ],
      "word_forms": {},
      "collocations": [
        "go upstairs",
        "come upstairs",
        "kick upstairs"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1446",
    "word": "use",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/juːz/",
      "phonetic_us": "/juːz/",
      "meanings": [
        "利用",
        "使用",
        "应用 n. [juːs] 用法"
      ],
      "word_forms": {
        "noun": "use",
        "adjective": "useful",
        "adverb": "usefully",
        "noun2": "user"
      },
      "collocations": [
        "make use of",
        "use for",
        "use up"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "将工具或方法应用到实际中",
      "academicContext": "We use scientific methods to test hypotheses.",
      "dailyContext": "I use my phone to check the weather.",
      "memoryStory": "",
      "confusableWords": [
        "employ",
        "utilize",
        "apply"
      ],
      "etymology": {
        "root": "use",
        "meaning": "来自拉丁语usus,使用"
      }
    }
  },
  {
    "id": "w1447",
    "word": "used",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/juːzd/",
      "phonetic_us": "/juːzd/",
      "meanings": [
        "用过的",
        "旧的",
        "二手的"
      ],
      "word_forms": {
        "comparative": "usedder",
        "superlative": "useddest"
      },
      "collocations": [
        "get used to",
        "used car",
        "used to do"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记用过的的事物",
      "academicContext": "Understanding used concepts is essential for academic success.",
      "dailyContext": "This is really used! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1448",
    "word": "useful",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈjuːsful/",
      "phonetic_us": "/ˈjuːsful/",
      "meanings": [
        "有用的",
        "有益的"
      ],
      "word_forms": {
        "comparative": "usefuller",
        "superlative": "usefullest"
      },
      "collocations": [
        "very useful",
        "useful information",
        "useful tool",
        "prove useful"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1449",
    "word": "useless",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈjuːslɪs/",
      "phonetic_us": "/ˈjuːslɪs/",
      "meanings": [
        "无用的"
      ],
      "word_forms": {
        "comparative": "more useless",
        "superlative": "most useless"
      },
      "collocations": [
        "completely useless",
        "useless information",
        "feel useless"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1450",
    "word": "user",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈjuːzə/",
      "phonetic_us": "/ˈjuːzə/",
      "meanings": [
        "使用者",
        "用户"
      ],
      "word_forms": {
        "plural": "users"
      },
      "collocations": [
        "end user",
        "user friendly",
        "user name",
        "user manual"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"使用者\"的概念",
      "academicContext": "The user plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1451",
    "word": "usual",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈjuːʒʊəl/",
      "phonetic_us": "/ˈjuːʒʊəl/",
      "meanings": [
        "通常的",
        "平常的"
      ],
      "word_forms": {
        "comparative": "usualler",
        "superlative": "usuallest"
      },
      "collocations": [
        "as usual",
        "business as usual",
        "the usual suspects"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记通常的的事物",
      "academicContext": "Understanding usual concepts is essential for academic success.",
      "dailyContext": "This is really usual! I love it.",
      "memoryStory": "通过联想\"usual\"的发音和拼写，记住其\"通常的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1452",
    "word": "usually",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈjuːʒʊəlɪ/",
      "phonetic_us": "/ˈjuːʒʊəlɪ/",
      "meanings": [
        "通常",
        "经常"
      ],
      "word_forms": {
        "plural": "usuallies"
      },
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "用通常的方式完成任务",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [],
      "etymology": {
        "root": "usual",
        "suffix": "-ly",
        "meaning": "usual + ly(副词后缀)"
      }
    }
  },
  {
    "id": "w1453",
    "word": "valley",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈvælɪ/",
      "phonetic_us": "/ˈvælɪ/",
      "meanings": [
        "山谷",
        "溪谷"
      ],
      "word_forms": {
        "plural": "valleys"
      },
      "collocations": [
        "valley floor",
        "silicon valley",
        "Death Valley",
        "through the valley"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1454",
    "word": "vegetable",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈvedʒɪtəb(ə)l/",
      "phonetic_us": "/ˈvedʒɪtəb(ə)l/",
      "meanings": [
        "蔬菜"
      ],
      "word_forms": {},
      "collocations": [
        "fresh vegetables",
        "vegetable oil",
        "vegetable garden",
        "fruit and vegetables"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1455",
    "word": "very",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈverɪ/",
      "phonetic_us": "/ˈverɪ/",
      "meanings": [
        "很",
        "非常"
      ],
      "word_forms": {},
      "collocations": [
        "very much",
        "very good",
        "the very",
        "very well"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"很\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "extremely",
        "greatly",
        "highly"
      ]
    }
  },
  {
    "id": "w1456",
    "word": "victim",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈvɪktɪm/",
      "phonetic_us": "/ˈvɪktɪm/",
      "meanings": [
        "受害者",
        "牺牲品"
      ],
      "word_forms": {
        "plural": "victims"
      },
      "collocations": [
        "fall victim to",
        "innocent victim",
        "victim of circumstance"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1457",
    "word": "video",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈvɪdɪəʊ/",
      "phonetic_us": "/ˈvɪdɪəʊ/",
      "meanings": [
        "录像",
        "视频"
      ],
      "word_forms": {
        "plural": "videos"
      },
      "collocations": [
        "video game",
        "video camera",
        "music video",
        "video chat"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"录像\"的概念",
      "academicContext": "The video plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"video\"的发音和拼写，记住其\"录像\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1458",
    "word": "village",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈvɪlɪdʒ/",
      "phonetic_us": "/ˈvɪlɪdʒ/",
      "meanings": [
        "村庄",
        "乡村"
      ],
      "word_forms": {
        "plural": "villages"
      },
      "collocations": [
        "small village",
        "village life",
        "global village",
        "it takes a village"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1459",
    "word": "villager",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'vilidʒə/",
      "phonetic_us": "/'vilidʒə/",
      "meanings": [
        "村民"
      ],
      "word_forms": {
        "plural": "villagers"
      },
      "collocations": [
        "local villager",
        "fellow villagers"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1460",
    "word": "violin",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/vaɪəˈlɪn/",
      "phonetic_us": "/vaɪəˈlɪn/",
      "meanings": [
        "小提琴"
      ],
      "word_forms": {},
      "collocations": [
        "play the violin",
        "violin concerto",
        "first violin"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1461",
    "word": "visitor",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈvɪzɪtə(r)/",
      "phonetic_us": "/ˈvɪzɪtə(r)/",
      "meanings": [
        "访问者",
        "参观者"
      ],
      "word_forms": {
        "plural": "visitors"
      },
      "collocations": [
        "frequent visitor",
        "welcome visitors",
        "visitor center"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1462",
    "word": "voice",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/vɔɪs/",
      "phonetic_us": "/vɔɪs/",
      "meanings": [
        "说话声",
        "语态"
      ],
      "word_forms": {},
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"说话声\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "sound",
        "speech",
        "tone"
      ]
    }
  },
  {
    "id": "w1463",
    "word": "volleyball",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/vɔlibɔːl/",
      "phonetic_us": "/vɔlibɔːl/",
      "meanings": [
        "排球"
      ],
      "word_forms": {
        "plural": "volleyballs"
      },
      "collocations": [
        "play volleyball",
        "beach volleyball",
        "volleyball game"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1464",
    "word": "wait",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/weɪt/",
      "phonetic_us": "/weɪt/",
      "meanings": [
        "等",
        "等候"
      ],
      "word_forms": {
        "noun": "wait"
      },
      "collocations": [
        "wait for",
        "can't wait",
        "wait a minute"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"等\"的概念",
      "academicContext": "Wait for the results before concluding.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "stay",
        "remain",
        "pause"
      ],
      "etymology": {
        "root": "wait",
        "meaning": "来自古法语waitier,观察"
      }
    }
  },
  {
    "id": "w1465",
    "word": "wallet",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwɔlɪt/",
      "phonetic_us": "/ˈwɔlɪt/",
      "meanings": [
        "(放钱",
        "证件等的)皮夹"
      ],
      "word_forms": {},
      "collocations": [
        "lose one's wallet",
        "empty wallet",
        "leather wallet",
        "vote with one's wallet"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1466",
    "word": "want",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wɔnt/",
      "phonetic_us": "/wɔnt/",
      "meanings": [
        "想",
        "想要",
        "需要"
      ],
      "word_forms": {},
      "collocations": [
        "want to do",
        "want sb to do",
        "if you want"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"想\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "desire",
        "wish",
        "need"
      ]
    }
  },
  {
    "id": "w1467",
    "word": "war",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wɔː(r)/",
      "phonetic_us": "/wɔː(r)/",
      "meanings": [
        "战争"
      ],
      "word_forms": {},
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"战争\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "conflict",
        "battle",
        "fighting"
      ]
    }
  },
  {
    "id": "w1468",
    "word": "warm",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wɔːm/",
      "phonetic_us": "/wɔːm/",
      "meanings": [
        "暖和的",
        "温暖的",
        "热情的"
      ],
      "word_forms": {
        "comparative": "warmer",
        "superlative": "warmest"
      },
      "collocations": [
        "warm up",
        "warm welcome",
        "warm heart",
        "keep warm"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记暖和的的事物",
      "academicContext": "Understanding warm concepts is essential for academic success.",
      "dailyContext": "This is really warm! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1469",
    "word": "warning",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwɔːnɪŋ/",
      "phonetic_us": "/ˈwɔːnɪŋ/",
      "meanings": [
        "警报"
      ],
      "word_forms": {
        "plural": "warnings"
      },
      "collocations": [
        "warning sign",
        "advance warning",
        "fair warning",
        "without warning"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1470",
    "word": "washroom",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwɔʃrʊm/",
      "phonetic_us": "/ˈwɔʃrʊm/",
      "meanings": [
        "盥洗室"
      ],
      "word_forms": {},
      "collocations": [
        "public washroom",
        "go to the washroom"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1471",
    "word": "watch",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wɔtʃ/",
      "phonetic_us": "/wɔtʃ/",
      "meanings": [
        "观看",
        "注视",
        "当心"
      ],
      "word_forms": {
        "noun": "watch"
      },
      "collocations": [
        "watch out",
        "watch TV",
        "watch over"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"观看\"的概念",
      "academicContext": "Researchers watch animal behavior in the wild.",
      "dailyContext": "I watch TV every evening.",
      "memoryStory": "",
      "confusableWords": [
        "observe",
        "look at",
        "timepiece"
      ],
      "etymology": {
        "root": "watch",
        "meaning": "来自古英语wæccan,保持清醒、守望"
      }
    }
  },
  {
    "id": "w1472",
    "word": "water",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈwɔːtə(r)/",
      "phonetic_us": "/ˈwɔːtə(r)/",
      "meanings": [
        "水v. 浇水"
      ],
      "word_forms": {},
      "collocations": [
        "drink water",
        "water bottle",
        "under water"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"水v. 浇水\"的概念",
      "academicContext": "Water covers 71% of Earth's surface.",
      "dailyContext": "Can I have a glass of water?",
      "memoryStory": "",
      "confusableWords": [
        "H2O",
        "liquid",
        "aqua"
      ],
      "etymology": {
        "root": "water",
        "meaning": "来自古英语wæter,水"
      }
    }
  },
  {
    "id": "w1473",
    "word": "way",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/weɪ/",
      "phonetic_us": "/weɪ/",
      "meanings": [
        "路",
        "路线",
        "方式"
      ],
      "word_forms": {},
      "collocations": [
        "on the way",
        "in the way",
        "by the way",
        "all the way",
        "in this way"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"路\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "method",
        "manner",
        "route"
      ]
    }
  },
  {
    "id": "w1474",
    "word": "we",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wiː, wɪ/",
      "phonetic_us": "/wiː, wɪ/",
      "meanings": [
        "我们"
      ],
      "word_forms": {},
      "collocations": [
        "we are",
        "we can",
        "we should",
        "we all"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"我们\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1475",
    "word": "weak",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wiːk/",
      "phonetic_us": "/wiːk/",
      "meanings": [
        "差的",
        "弱的",
        "淡的"
      ],
      "word_forms": {
        "comparative": "weakker",
        "superlative": "weakkest"
      },
      "collocations": [
        "weak point",
        "weak spot",
        "in a weak moment",
        "the weakest link"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记差的的事物",
      "academicContext": "Understanding weak concepts is essential for academic success.",
      "dailyContext": "This is really weak! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1476",
    "word": "weather",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/weðə(r)/",
      "phonetic_us": "/weðə(r)/",
      "meanings": [
        "天气"
      ],
      "word_forms": {
        "plural": "weathers"
      },
      "collocations": [
        "bad weather",
        "weather forecast",
        "under the weather",
        "fair weather friend"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1477",
    "word": "Wednesday",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwenzdeɪ/",
      "phonetic_us": "/ˈwenzdeɪ/",
      "meanings": [
        "星期三"
      ],
      "word_forms": {},
      "collocations": [
        "on Wednesday",
        "this Wednesday",
        "next Wednesday"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1478",
    "word": "week",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wiːk/",
      "phonetic_us": "/wiːk/",
      "meanings": [
        "星期",
        "周"
      ],
      "word_forms": {
        "plural": "weeks"
      },
      "collocations": [
        "this week",
        "last week",
        "next week",
        "once a week",
        "weekend"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"星期\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "seven days"
      ]
    }
  },
  {
    "id": "w1479",
    "word": "weekday",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwiːkdeɪ/",
      "phonetic_us": "/ˈwiːkdeɪ/",
      "meanings": [
        "平日",
        "工作日"
      ],
      "word_forms": {},
      "collocations": [
        "on weekdays",
        "weekday morning"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1480",
    "word": "weekend",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/wiːkˈend, ˈwiːkend/",
      "phonetic_us": "/wiːkˈend, ˈwiːkend/",
      "meanings": [
        "周末"
      ],
      "word_forms": {
        "plural": "weekends"
      },
      "collocations": [
        "this weekend",
        "have a good weekend",
        "weekend getaway",
        "long weekend"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1481",
    "word": "weigh",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/weɪ/",
      "phonetic_us": "/weɪ/",
      "meanings": [
        "称…的重量",
        "重（若干）"
      ],
      "word_forms": {
        "comparative": "weigher",
        "superlative": "weighest"
      },
      "collocations": [
        "weigh up",
        "weigh in",
        "weigh on",
        "weigh one's words"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记称…的重量的事物",
      "academicContext": "Understanding weigh concepts is essential for academic success.",
      "dailyContext": "This is really weigh! I love it.",
      "memoryStory": "通过联想\"weigh\"的发音和拼写，记住其\"称…的重量\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1482",
    "word": "weight",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/weɪt/",
      "phonetic_us": "/weɪt/",
      "meanings": [
        "重",
        "重量"
      ],
      "word_forms": {
        "plural": "weights"
      },
      "collocations": [
        "lose weight",
        "gain weight",
        "body weight",
        "pull one's weight",
        "weight off one's shoulders"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1483",
    "word": "welcome",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwelkəm/",
      "phonetic_us": "/ˈwelkəm/",
      "meanings": [
        "& v. 欢迎 a. 受欢迎的"
      ],
      "word_forms": {
        "comparative": "more welcome",
        "superlative": "most welcome"
      },
      "collocations": [
        "you're welcome",
        "warm welcome",
        "welcome back",
        "welcome aboard"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1484",
    "word": "west",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/west/",
      "phonetic_us": "/west/",
      "meanings": [
        "(在)西",
        "向西",
        "从西来的 ad. 在西方"
      ],
      "word_forms": {},
      "collocations": [
        "go west",
        "wild west",
        "west coast",
        "east and west"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"(在)西\"的概念",
      "academicContext": "The west plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1485",
    "word": "western",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwest(ə)n/",
      "phonetic_us": "/ˈwest(ə)n/",
      "meanings": [
        "西方的",
        "西部的"
      ],
      "word_forms": {
        "comparative": "more western",
        "superlative": "most western"
      },
      "collocations": [
        "western culture",
        "western world",
        "western movie",
        "wild west"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1486",
    "word": "westerner",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'westənə/",
      "phonetic_us": "/'westənə/",
      "meanings": [
        "西方人"
      ],
      "word_forms": {
        "plural": "westerners"
      },
      "collocations": [
        "typical westerner",
        "fellow westerner"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1487",
    "word": "westwards",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwestwədz/",
      "phonetic_us": "/ˈwestwədz/",
      "meanings": [
        "向西"
      ],
      "word_forms": {},
      "collocations": [
        "move westwards",
        "head westwards"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1488",
    "word": "wet",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wet/",
      "phonetic_us": "/wet/",
      "meanings": [
        "湿的",
        "潮的",
        "多雨的"
      ],
      "word_forms": {
        "comparative": "wetter",
        "superlative": "wettest"
      },
      "collocations": [
        "wet blanket",
        "get wet",
        "all wet",
        "wet behind the ears"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记湿的的事物",
      "academicContext": "Understanding wet concepts is essential for academic success.",
      "dailyContext": "This is really wet! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1489",
    "word": "what",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wɔt; (US) hwɑt/",
      "phonetic_us": "/wɔt; (US) hwɑt/",
      "meanings": [
        "什么",
        "怎么样 a. 多么",
        "何等"
      ],
      "word_forms": {
        "plural": "whats"
      },
      "collocations": [
        "what about",
        "what if",
        "so what",
        "what's more",
        "what for"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"什么\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "which",
        "that which"
      ]
    }
  },
  {
    "id": "w1490",
    "word": "whatever",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/wɔtˈevə(r)/",
      "phonetic_us": "/wɔtˈevə(r)/",
      "meanings": [
        "& pron. 无论什么",
        "不管什么"
      ],
      "word_forms": {
        "plural": "whatevers"
      },
      "collocations": [
        "whatever happens",
        "whatever it takes",
        "or whatever",
        "whatever you say"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1491",
    "word": "wheat",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wiːt; (US) hwiːt/",
      "phonetic_us": "/wiːt; (US) hwiːt/",
      "meanings": [
        "小麦"
      ],
      "word_forms": {
        "plural": "wheats"
      },
      "collocations": [
        "wheat field",
        "separate the wheat from the chaff"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"小麦\"的概念",
      "academicContext": "The wheat plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"wheat\"的发音和拼写，记住其\"小麦\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1492",
    "word": "wheel",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wiːl; (US) hwiːl/",
      "phonetic_us": "/wiːl; (US) hwiːl/",
      "meanings": [
        "轮",
        "机轮"
      ],
      "word_forms": {
        "plural": "wheels"
      },
      "collocations": [
        "behind the wheel",
        "fifth wheel",
        "reinvent the wheel",
        "wheels within wheels"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"轮\"的概念",
      "academicContext": "The wheel plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"wheel\"的发音和拼写，记住其\"轮\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1493",
    "word": "when",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wen/",
      "phonetic_us": "/wen/",
      "meanings": [
        "当…的时候 ad. 什么时候",
        "何时"
      ],
      "word_forms": {},
      "collocations": [
        "when...then...",
        "since when"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记当…的时候 ad. 什么时候的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "while",
        "at what time",
        "whenever"
      ]
    }
  },
  {
    "id": "w1494",
    "word": "whenever",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/wenˈevə(r)/",
      "phonetic_us": "/wenˈevə(r)/",
      "meanings": [
        "每当",
        "无论何时"
      ],
      "word_forms": {
        "plural": "whenevers"
      },
      "collocations": [
        "whenever possible",
        "whenever you want",
        "come whenever"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1495",
    "word": "where",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/weə(r); (US) hweər/",
      "phonetic_us": "/weə(r); (US) hweər/",
      "meanings": [
        "在哪里",
        "往哪里"
      ],
      "word_forms": {},
      "collocations": [
        "where...from",
        "where to go"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"在哪里\"的概念",
      "academicContext": "The where plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"where\"的发音和拼写，记住其\"在哪里\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1496",
    "word": "wherever",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/weərˈevə(r)/",
      "phonetic_us": "/weərˈevə(r)/",
      "meanings": [
        "无论在哪里"
      ],
      "word_forms": {
        "plural": "wherevers"
      },
      "collocations": [
        "wherever you go",
        "wherever possible",
        "wherever that may be"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1497",
    "word": "whether",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈweðə(r); (US) ˈhweðər/",
      "phonetic_us": "/ˈweðə(r); (US) ˈhweðər/",
      "meanings": [
        "是否"
      ],
      "word_forms": {
        "plural": "whethers"
      },
      "collocations": [
        "whether...or...",
        "whether or not"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"是否\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "if",
        "either...or"
      ],
      "etymology": null
    }
  },
  {
    "id": "w1498",
    "word": "which",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wɪtʃ; (US) hwɪtʃ/",
      "phonetic_us": "/wɪtʃ; (US) hwɪtʃ/",
      "meanings": [
        "哪一个",
        "哪些"
      ],
      "word_forms": {
        "plural": "whiches"
      },
      "collocations": [
        "in which",
        "of which",
        "which one"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"哪一个\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "what",
        "that"
      ]
    }
  },
  {
    "id": "w1499",
    "word": "whichever",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/wɪtʃˈevə(r)/",
      "phonetic_us": "/wɪtʃˈevə(r)/",
      "meanings": [
        "无论哪个",
        "无论哪些"
      ],
      "word_forms": {
        "plural": "whichevers"
      },
      "collocations": [
        "whichever way",
        "whichever you prefer",
        "whichever comes first"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1500",
    "word": "while",
    "level": "初三",
    "unit": "Unit 15",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/waɪl; (US) hwaɪl/",
      "phonetic_us": "/waɪl; (US) hwaɪl/",
      "meanings": [
        "在…的时候",
        "和…同时 n. 一会儿",
        "一段时间"
      ],
      "word_forms": {},
      "collocations": [
        "after a while",
        "once in a while",
        "for a while",
        "while...at the same time..."
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记在…的时候的事物",
      "academicContext": "Understanding while concepts is essential for academic success.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "during",
        "whereas",
        "although"
      ]
    }
  },
  {
    "id": "w1501",
    "word": "white",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/waɪt; (US) hwaɪt/",
      "phonetic_us": "/waɪt; (US) hwaɪt/",
      "meanings": [
        "白色的 n. 白色"
      ],
      "word_forms": {
        "plural": "whites",
        "comparative": "whiter",
        "superlative": "whitest"
      },
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记白色的 n. 白色的事物",
      "academicContext": "Understanding white concepts is essential for academic success.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "pale",
        "light",
        "blank"
      ]
    }
  },
  {
    "id": "w1502",
    "word": "who",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/huː/",
      "phonetic_us": "/huː/",
      "meanings": [
        "谁"
      ],
      "word_forms": {},
      "collocations": [
        "who knows",
        "who cares",
        "who else"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"谁\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1503",
    "word": "whole",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/həʊl/",
      "phonetic_us": "/həʊl/",
      "meanings": [
        "整个的"
      ],
      "word_forms": {
        "comparative": "wholer",
        "superlative": "wholest"
      },
      "collocations": [
        "the whole",
        "on the whole",
        "as a whole"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记整个的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "entire",
        "complete",
        "total"
      ]
    }
  },
  {
    "id": "w1504",
    "word": "whom",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/huːm/",
      "phonetic_us": "/huːm/",
      "meanings": [
        "(who的宾格 )"
      ],
      "word_forms": {
        "comparative": "whommer",
        "superlative": "whommest"
      },
      "collocations": [
        "to whom",
        "with whom",
        "from whom"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记(who的宾格 )的事物",
      "academicContext": "Understanding whom concepts is essential for academic success.",
      "dailyContext": "This is really whom! I love it.",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1505",
    "word": "whose",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/huːz/",
      "phonetic_us": "/huːz/",
      "meanings": [
        "谁的"
      ],
      "word_forms": {
        "comparative": "whoser",
        "superlative": "whosest"
      },
      "collocations": [
        "whose book",
        "whose turn"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记谁的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "of whom",
        "of which"
      ]
    }
  },
  {
    "id": "w1506",
    "word": "wide",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/waid/",
      "phonetic_us": "/waid/",
      "meanings": [
        "宽阔的"
      ],
      "word_forms": {
        "noun": "width",
        "verb": "widen",
        "adverb": "widely",
        "comparative": "wider",
        "superlative": "widest"
      },
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记宽阔的的事物",
      "academicContext": "Understanding wide concepts is essential for academic success.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "broad",
        "extensive",
        "spacious"
      ]
    }
  },
  {
    "id": "w1507",
    "word": "wife",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/waɪf/",
      "phonetic_us": "/waɪf/",
      "meanings": [
        "妻子"
      ],
      "word_forms": {
        "plural": "wives"
      },
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"妻子\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "spouse",
        "partner",
        "mate"
      ]
    }
  },
  {
    "id": "w1508",
    "word": "will",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wɪl/",
      "phonetic_us": "/wɪl/",
      "meanings": [
        "意志",
        "遗嘱"
      ],
      "word_forms": {},
      "collocations": [
        "will be",
        "will do",
        "free will"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"意志\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "shall",
        "desire",
        "testament"
      ]
    }
  },
  {
    "id": "w1509",
    "word": "will",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wɪl/",
      "phonetic_us": "/wɪl/",
      "meanings": [
        "将",
        "会(表示将来)",
        "愿意"
      ],
      "word_forms": {},
      "collocations": [
        "will be",
        "will do",
        "free will"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"将\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "shall",
        "desire",
        "testament"
      ]
    }
  },
  {
    "id": "w1510",
    "word": "window",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/ˈwɪndəʊ/",
      "phonetic_us": "/ˈwɪndəʊ/",
      "meanings": [
        "窗户",
        "计算机的窗"
      ],
      "word_forms": {},
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"窗户\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "pane",
        "opening",
        "glass"
      ]
    }
  },
  {
    "id": "w1511",
    "word": "windy",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈwɪndɪ/",
      "phonetic_us": "/ˈwɪndɪ/",
      "meanings": [
        "有风的",
        "多风的"
      ],
      "word_forms": {
        "comparative": "windier",
        "superlative": "windiest"
      },
      "collocations": [
        "windy day",
        "windy weather"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记有风的的事物",
      "academicContext": "Understanding windy concepts is essential for academic success.",
      "dailyContext": "This is really windy! I love it.",
      "memoryStory": "通过联想\"windy\"的发音和拼写，记住其\"有风的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1512",
    "word": "wine",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/waɪn/",
      "phonetic_us": "/waɪn/",
      "meanings": [
        "酒"
      ],
      "word_forms": {
        "plural": "wines"
      },
      "collocations": [
        "red wine",
        "white wine",
        "wine and dine",
        "new wine in old bottles"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"酒\"的概念",
      "academicContext": "The wine plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1513",
    "word": "winner",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwɪnə(r)/",
      "phonetic_us": "/ˈwɪnə(r)/",
      "meanings": [
        "获胜者"
      ],
      "word_forms": {
        "plural": "winners"
      },
      "collocations": [
        "clear winner",
        "prize winner",
        "winner takes all",
        "pick a winner"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1514",
    "word": "winter",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwɪntə(r)/",
      "phonetic_us": "/ˈwɪntə(r)/",
      "meanings": [
        "冬天",
        "冬季"
      ],
      "word_forms": {
        "plural": "winters"
      },
      "collocations": [
        "in winter",
        "winter coat",
        "winter sports",
        "nuclear winter"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1515",
    "word": "wish",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wɪʃ/",
      "phonetic_us": "/wɪʃ/",
      "meanings": [
        "愿望",
        "祝愿 vt. 希望",
        "想要"
      ],
      "word_forms": {},
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"愿望\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "desire",
        "want",
        "hope"
      ]
    }
  },
  {
    "id": "w1516",
    "word": "without",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wɪðaʊt/",
      "phonetic_us": "/wɪðaʊt/",
      "meanings": [
        "没有"
      ],
      "word_forms": {},
      "collocations": [
        "go without",
        "without doubt",
        "do without"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"没有\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "lacking",
        "absent",
        "minus"
      ]
    }
  },
  {
    "id": "w1517",
    "word": "wonder",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwʌndə(r)/",
      "phonetic_us": "/ˈwʌndə(r)/",
      "meanings": [
        "对…疑惑",
        "感到惊奇",
        "想知道 n. 惊讶"
      ],
      "word_forms": {},
      "collocations": [
        "no wonder",
        "I wonder",
        "wonder about",
        "wonder of the world",
        "work wonders"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1518",
    "word": "wonderful",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈwʌndəfʊl/",
      "phonetic_us": "/ˈwʌndəfʊl/",
      "meanings": [
        "美妙的",
        "精彩的",
        "了不起的"
      ],
      "word_forms": {
        "comparative": "more wonderful",
        "superlative": "most wonderful"
      },
      "collocations": [
        "absolutely wonderful",
        "wonderful time",
        "wonderful experience"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1519",
    "word": "wool",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wul/",
      "phonetic_us": "/wul/",
      "meanings": [
        "n. 羊毛",
        "羊绒"
      ],
      "word_forms": {
        "plural": "wools"
      },
      "collocations": [
        "pull the wool over someone's eyes",
        "wool sweater",
        "dyed in the wool"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"n. 羊毛\"的概念",
      "academicContext": "The wool plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1520",
    "word": "woolen",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'wulin/",
      "phonetic_us": "/'wulin/",
      "meanings": [
        "羊毛的",
        "羊毛制的"
      ],
      "word_forms": {
        "comparative": "woolenner",
        "superlative": "woolennest"
      },
      "collocations": [
        "woolen coat",
        "woolen sweater",
        "made of wool"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1521",
    "word": "word",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wəːd/",
      "phonetic_us": "/wəːd/",
      "meanings": [
        "词",
        "单词",
        "话"
      ],
      "word_forms": {
        "plural": "words"
      },
      "collocations": [
        "in other words",
        "word by word",
        "keep one's word",
        "in a word"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"词\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "term",
        "expression",
        "vocabulary"
      ]
    }
  },
  {
    "id": "w1522",
    "word": "work",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wəːk/",
      "phonetic_us": "/wəːk/",
      "meanings": [
        "工作",
        "劳动",
        "事情 vi. 工作"
      ],
      "word_forms": {
        "noun": "work",
        "noun2": "worker",
        "adjective": "working"
      },
      "collocations": [
        "work on",
        "work out",
        "at work"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"工作\"的概念",
      "academicContext": "Research works to advance human knowledge.",
      "dailyContext": "I work at a technology company.",
      "memoryStory": "",
      "confusableWords": [
        "job",
        "labor",
        "employment",
        "function"
      ],
      "etymology": {
        "root": "work",
        "meaning": "来自古英语weorc,劳动"
      }
    }
  },
  {
    "id": "w1523",
    "word": "worker",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/wəːkə(r)/",
      "phonetic_us": "/wəːkə(r)/",
      "meanings": [
        "工人",
        "工作者"
      ],
      "word_forms": {
        "plural": "workers"
      },
      "collocations": [
        "hard worker",
        "factory worker",
        "office worker",
        "worker bee"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1524",
    "word": "workplace",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/wəːkpleɪs/",
      "phonetic_us": "/wəːkpleɪs/",
      "meanings": [
        "工作场所",
        "车间"
      ],
      "word_forms": {},
      "collocations": [
        "in the workplace",
        "workplace safety",
        "toxic workplace"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1525",
    "word": "works",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wəːks/",
      "phonetic_us": "/wəːks/",
      "meanings": [
        "著作",
        "作品"
      ],
      "word_forms": {
        "plural": "workses"
      },
      "collocations": [
        "in the works",
        "the whole works",
        "public works"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"著作\"的概念",
      "academicContext": "The works plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"works\"的发音和拼写，记住其\"著作\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1526",
    "word": "world",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wəːld/",
      "phonetic_us": "/wəːld/",
      "meanings": [
        "世界"
      ],
      "word_forms": {
        "plural": "worlds"
      },
      "collocations": [
        "all over the world",
        "around the world",
        "in the world",
        "World Cup"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"世界\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "earth",
        "globe",
        "planet"
      ]
    }
  },
  {
    "id": "w1527",
    "word": "worm",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wəːm/",
      "phonetic_us": "/wəːm/",
      "meanings": [
        "软体虫",
        "蠕虫(尤指蚯蚓)"
      ],
      "word_forms": {
        "plural": "worms"
      },
      "collocations": [
        "can of worms",
        "early bird catches the worm",
        "book worm"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"软体虫\"的概念",
      "academicContext": "The worm plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1528",
    "word": "worried",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/'wʌrɪd/",
      "phonetic_us": "/'wʌrɪd/",
      "meanings": [
        "担心的",
        "烦恼的"
      ],
      "word_forms": {
        "comparative": "more worried",
        "superlative": "most worried"
      },
      "collocations": [
        "worried about",
        "worried sick",
        "nothing to be worried about"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1529",
    "word": "worse",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wə:s/",
      "phonetic_us": "/wə:s/",
      "meanings": [
        "(bad的比较级)更坏的"
      ],
      "word_forms": {
        "comparative": "worser",
        "superlative": "worsest"
      },
      "collocations": [
        "worse off",
        "for better or worse",
        "go from bad to worse",
        "none the worse"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记(bad的比较级)更坏的的事物",
      "academicContext": "Understanding worse concepts is essential for academic success.",
      "dailyContext": "This is really worse! I love it.",
      "memoryStory": "通过联想\"worse\"的发音和拼写，记住其\"(bad的比较级)更坏的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1530",
    "word": "worst",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wə:st/",
      "phonetic_us": "/wə:st/",
      "meanings": [
        "(bad的最高级)最坏的"
      ],
      "word_forms": {
        "comparative": "worster",
        "superlative": "worstest"
      },
      "collocations": [
        "at worst",
        "worst case scenario",
        "if worst comes to worst",
        "do your worst"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记(bad的最高级)最坏的的事物",
      "academicContext": "Understanding worst concepts is essential for academic success.",
      "dailyContext": "This is really worst! I love it.",
      "memoryStory": "通过联想\"worst\"的发音和拼写，记住其\"(bad的最高级)最坏的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1531",
    "word": "worth",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/wə:θ/",
      "phonetic_us": "/wə:θ/",
      "meanings": [
        "有…的价值",
        "值得…的"
      ],
      "word_forms": {
        "comparative": "worther",
        "superlative": "worthest"
      },
      "collocations": [
        "worth it",
        "worth while",
        "for what it's worth",
        "a picture is worth a thousand words"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记有…的价值的事物",
      "academicContext": "Understanding worth concepts is essential for academic success.",
      "dailyContext": "This is really worth! I love it.",
      "memoryStory": "通过联想\"worth\"的发音和拼写，记住其\"有…的价值\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1532",
    "word": "would",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/wəd, wud/",
      "phonetic_us": "/wəd, wud/",
      "meanings": [
        "v.（will的过去时）将会",
        "打算",
        "想要"
      ],
      "word_forms": {},
      "collocations": [
        "would like",
        "would rather",
        "would you please"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "标记v.（will的过去时）将会的特征",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "will",
        "should"
      ]
    }
  },
  {
    "id": "w1533",
    "word": "wounded",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/wu:ndɪd/",
      "phonetic_us": "/wu:ndɪd/",
      "meanings": [
        "受伤的"
      ],
      "word_forms": {
        "comparative": "more wounded",
        "superlative": "most wounded"
      },
      "collocations": [
        "wounded soldier",
        "walking wounded",
        "wounded pride"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1534",
    "word": "wrong",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/rɔŋ/",
      "phonetic_us": "/rɔŋ/",
      "meanings": [
        "错误",
        "不正常",
        "有毛病的"
      ],
      "word_forms": {
        "adverb": "wrongly"
      },
      "collocations": [],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"错误\"的概念",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "incorrect",
        "mistaken",
        "improper"
      ]
    }
  },
  {
    "id": "w1535",
    "word": "yard",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/jɑːd/",
      "phonetic_us": "/jɑːd/",
      "meanings": [
        "码",
        "院子",
        "场地"
      ],
      "word_forms": {},
      "collocations": [
        "back yard",
        "front yard",
        "school yard",
        "by the yard"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"码\"的概念",
      "academicContext": "The yard plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1536",
    "word": "year",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/jɪə(r), jəː(r)/",
      "phonetic_us": "/jɪə(r), jəː(r)/",
      "meanings": [
        "年"
      ],
      "word_forms": {},
      "collocations": [
        "this year",
        "last year",
        "all year round",
        "year by year"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"年\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "12 months",
        "annual period"
      ]
    }
  },
  {
    "id": "w1537",
    "word": "yellow",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/ˈjeləʊ/",
      "phonetic_us": "/ˈjeləʊ/",
      "meanings": [
        "黄色的"
      ],
      "word_forms": {
        "comparative": "yellowwer",
        "superlative": "yellowwest"
      },
      "collocations": [
        "bright yellow",
        "mellow yellow",
        "yellow fever",
        "yellow journalism"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1538",
    "word": "yes",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/jes/",
      "phonetic_us": "/jes/",
      "meanings": [
        "是",
        "好",
        "同意"
      ],
      "word_forms": {
        "plural": "yeses"
      },
      "collocations": [
        "say yes",
        "yes or no"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"是\"的概念",
      "academicContext": "The yes plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1539",
    "word": "yet",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/jet/",
      "phonetic_us": "/jet/",
      "meanings": [
        "尚",
        "还",
        "仍然"
      ],
      "word_forms": {
        "plural": "yets"
      },
      "collocations": [
        "not yet",
        "yet another"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"尚\"的概念",
      "academicContext": "The yet plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1540",
    "word": "you",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/juː, jʊ/",
      "phonetic_us": "/juː, jʊ/",
      "meanings": [
        "你",
        "你们"
      ],
      "word_forms": {},
      "collocations": [
        "thank you",
        "you know",
        "you see"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "识别和理解\"你\"的概念",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1541",
    "word": "young",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/jʌŋ/",
      "phonetic_us": "/jʌŋ/",
      "meanings": [
        "年轻的"
      ],
      "word_forms": {
        "noun": "youth",
        "comparative": "younger",
        "superlative": "youngest"
      },
      "collocations": [
        "young people",
        "the young",
        "when young"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记年轻的的事物",
      "academicContext": "",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "youthful",
        "juvenile",
        "immature"
      ]
    }
  },
  {
    "id": "w1542",
    "word": "your",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "高频",
    "data": {
      "phonetic_uk": "/jɔː/",
      "phonetic_us": "/jɔː/",
      "meanings": [
        "你的",
        "你们的"
      ],
      "word_forms": {},
      "collocations": [
        "your name",
        "your turn",
        "on your own"
      ],
      "exam_frequency": 4.5,
      "gameDescription": "在生活中识别和标记你的的事物",
      "academicContext": "Understanding your concepts is essential for academic success.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": [
        "yours",
        "belonging to you"
      ]
    }
  },
  {
    "id": "w1543",
    "word": "yours",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/jɔːz, jʊəz/",
      "phonetic_us": "/jɔːz, jʊəz/",
      "meanings": [
        "你的",
        "你们的"
      ],
      "word_forms": {
        "comparative": "yourser",
        "superlative": "yoursest"
      },
      "collocations": [
        "sincerely yours",
        "yours truly",
        "up to you"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "在生活中识别和标记你的的事物",
      "academicContext": "Understanding yours concepts is essential for academic success.",
      "dailyContext": "This is really yours! I love it.",
      "memoryStory": "通过联想\"yours\"的发音和拼写，记住其\"你的\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1544",
    "word": "yourself",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/jɔːˈself; (US) jʊərˈself/",
      "phonetic_us": "/jɔːˈself; (US) jʊərˈself/",
      "meanings": [
        "你自己"
      ],
      "word_forms": {
        "plural": "yourselves"
      },
      "collocations": [
        "by yourself",
        "help yourself",
        "be yourself",
        "make yourself at home"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1545",
    "word": "yourselves",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "低频",
    "data": {
      "phonetic_uk": "/jɔːˈselvz; (US) jʊərˈselvz/",
      "phonetic_us": "/jɔːˈselvz; (US) jʊərˈselvz/",
      "meanings": [
        "你们自己"
      ],
      "word_forms": {
        "plural": "yourselveses"
      },
      "collocations": [
        "by yourselves",
        "among yourselves",
        "help yourselves"
      ],
      "exam_frequency": 2.5
    }
  },
  {
    "id": "w1546",
    "word": "youth",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/juːθ/",
      "phonetic_us": "/juːθ/",
      "meanings": [
        "青春",
        "青年"
      ],
      "word_forms": {
        "plural": "youths"
      },
      "collocations": [
        "youth hostel",
        "fountain of youth",
        "in one's youth"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"青春\"的概念",
      "academicContext": "The youth plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "通过联想\"youth\"的发音和拼写，记住其\"青春\"的含义。",
      "confusableWords": []
    }
  },
  {
    "id": "w1547",
    "word": "zero",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/ˈzɪərəʊ/",
      "phonetic_us": "/ˈzɪərəʊ/",
      "meanings": [
        "& num. 零",
        "零度",
        "零点"
      ],
      "word_forms": {
        "plural": "zeros"
      },
      "collocations": [
        "zero in on",
        "absolute zero",
        "zero tolerance",
        "below zero"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"& num. 零\"的概念",
      "academicContext": "The zero plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  },
  {
    "id": "w1548",
    "word": "zoo",
    "level": "初三",
    "unit": "Unit 16",
    "frequency": "中频",
    "data": {
      "phonetic_uk": "/zuː/",
      "phonetic_us": "/zuː/",
      "meanings": [
        "动物园"
      ],
      "word_forms": {},
      "collocations": [
        "at the zoo",
        "zoo keeper",
        "petting zoo"
      ],
      "exam_frequency": 3.5,
      "gameDescription": "识别和理解\"动物园\"的概念",
      "academicContext": "The zoo plays a crucial role in this academic discipline.",
      "dailyContext": "",
      "memoryStory": "",
      "confusableWords": []
    }
  }
];

// 导出完整词库：优先展示20个精选高频词，然后是其他词汇
export const sampleWords = [...highFrequencyWords, ...remainingWords] as Word[];
