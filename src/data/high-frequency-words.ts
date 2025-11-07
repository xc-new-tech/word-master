import { Word } from '@/types';

// 精选20个高频词 - 完整学习资料
// 专门为新卡片设计优化的数据
export const highFrequencyWords: Word[] = [
  {
    id: "hf001",
    word: "important",
    level: "初一",
    unit: "Unit 1",
    frequency: "高频",
    data: {
      phonetic_uk: "/ɪmˈpɔːtnt/",
      phonetic_us: "/ɪmˈpɔːrtnt/",
      meanings: ["重要的", "重大的"],
      word_forms: {
        noun: "importance",
        adverb: "importantly"
      },
      collocations: [
        "very important",
        "important thing",
        "important role",
        "important decision",
        "important information",
        "most important"
      ],
      exam_frequency: 4.8,
      etymology: {
        prefix: "im-",
        root: "port",
        suffix: "-ant",
        meaning: "im(进入) + port(携带) + ant(形容词) = 带入内心的 → 重要的"
      },
      gameDescription: "在生活中标记那些不可忽视的事物",
      academicContext: "Critical thinking is important for academic success in all subjects.",
      dailyContext: "It's important to brush your teeth twice a day.",
      memoryStory: "想象一个'进口'(im-port)商品，因为很重要(important)所以才值得进口。",
      confusableWords: ["significant", "crucial", "essential", "vital"]
    }
  },
  {
    id: "hf002",
    word: "different",
    level: "初一",
    unit: "Unit 2",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈdɪfrənt/",
      phonetic_us: "/ˈdɪfrənt/",
      meanings: ["不同的", "各式各样的"],
      word_forms: {
        noun: "difference",
        adverb: "differently",
        verb: "differ"
      },
      collocations: [
        "different from",
        "different kinds",
        "very different",
        "completely different",
        "different ways",
        "something different"
      ],
      exam_frequency: 4.7,
      etymology: {
        prefix: "dif-",
        root: "fer",
        suffix: "-ent",
        meaning: "dif(分开) + fer(携带) + ent(形容词) = 分开携带的 → 不同的"
      },
      gameDescription: "在比较中发现事物的独特之处",
      academicContext: "Different cultures have different ways of celebrating festivals.",
      dailyContext: "My sister and I have very different tastes in music.",
      memoryStory: "differ(差异)后面加ent就是different，想象两个人拿着不同(different)的东西。",
      confusableWords: ["various", "diverse", "distinct", "unique"]
    }
  },
  {
    id: "hf003",
    word: "beautiful",
    level: "初一",
    unit: "Unit 3",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈbjuːtɪfl/",
      phonetic_us: "/ˈbjuːtɪfl/",
      meanings: ["美丽的", "漂亮的"],
      word_forms: {
        noun: "beauty",
        adverb: "beautifully"
      },
      collocations: [
        "beautiful day",
        "beautiful place",
        "beautiful girl",
        "beautiful music",
        "beautiful scenery",
        "beautiful weather"
      ],
      exam_frequency: 4.6,
      etymology: {
        root: "beaut",
        suffix: "-iful",
        meaning: "beaut(美) + i + ful(充满) = 充满美的 → 美丽的"
      },
      gameDescription: "用来赞美令人愉悦的视觉体验",
      academicContext: "The poem describes the beautiful landscape of ancient China.",
      dailyContext: "What a beautiful sunset! Let's take a photo.",
      memoryStory: "beauty(美丽)加ful(充满)就是beautiful，充满美丽的景色。",
      confusableWords: ["pretty", "lovely", "attractive", "gorgeous"]
    }
  },
  {
    id: "hf004",
    word: "interesting",
    level: "初一",
    unit: "Unit 4",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈɪntrəstɪŋ/",
      phonetic_us: "/ˈɪntrəstɪŋ/",
      meanings: ["有趣的", "引起兴趣的"],
      word_forms: {
        noun: "interest",
        adverb: "interestingly",
        verb: "interest"
      },
      collocations: [
        "very interesting",
        "interesting story",
        "interesting fact",
        "interesting idea",
        "find interesting",
        "interesting place"
      ],
      exam_frequency: 4.7,
      etymology: {
        prefix: "inter-",
        root: "est",
        suffix: "-ing",
        meaning: "inter(在...之间) + est(存在) + ing(进行) = 存在于心间的 → 有趣的"
      },
      gameDescription: "描述能够吸引注意力和好奇心的事物",
      academicContext: "The professor gave an interesting lecture on ancient civilizations.",
      dailyContext: "That's an interesting movie! I want to watch it again.",
      memoryStory: "interest(兴趣)加ing就是interesting，正在引起兴趣的事物。",
      confusableWords: ["fascinating", "engaging", "intriguing", "captivating"]
    }
  },
  {
    id: "hf005",
    word: "happy",
    level: "初一",
    unit: "Unit 1",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈhæpi/",
      phonetic_us: "/ˈhæpi/",
      meanings: ["快乐的", "幸福的"],
      word_forms: {
        noun: "happiness",
        adverb: "happily",
        adjective: "happier"
      },
      collocations: [
        "happy birthday",
        "feel happy",
        "happy life",
        "happy smile",
        "happy ending",
        "make happy"
      ],
      exam_frequency: 4.8,
      etymology: {
        root: "hap",
        suffix: "-py",
        meaning: "hap(运气、机会) + py = 有好运的 → 快乐的"
      },
      gameDescription: "表达内心愉悦和满足的情绪状态",
      academicContext: "The research shows that helping others makes people happier.",
      dailyContext: "I'm so happy to see you! It's been a long time.",
      memoryStory: "happen(发生)好事时我们很happy(快乐)。",
      confusableWords: ["joyful", "cheerful", "pleased", "delighted"]
    }
  },
  {
    id: "hf006",
    word: "difficult",
    level: "初一",
    unit: "Unit 5",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈdɪfɪkəlt/",
      phonetic_us: "/ˈdɪfɪkəlt/",
      meanings: ["困难的", "艰难的"],
      word_forms: {
        noun: "difficulty",
        adverb: "difficultly"
      },
      collocations: [
        "difficult task",
        "difficult situation",
        "difficult time",
        "difficult question",
        "find difficult",
        "very difficult"
      ],
      exam_frequency: 4.6,
      etymology: {
        prefix: "dif-",
        root: "fic",
        suffix: "-ult",
        meaning: "dif(不) + fic(做) + ult = 不容易做的 → 困难的"
      },
      gameDescription: "标记需要付出额外努力才能完成的挑战",
      academicContext: "The math problem was difficult, but I solved it after trying several times.",
      dailyContext: "Learning to ride a bike is difficult at first, but you'll get better.",
      memoryStory: "difficulty(困难)去掉y就是difficult，面对困难(difficult)的事情。",
      confusableWords: ["hard", "challenging", "tough", "complicated"]
    }
  },
  {
    id: "hf007",
    word: "popular",
    level: "初二",
    unit: "Unit 1",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈpɒpjələ(r)/",
      phonetic_us: "/ˈpɑːpjələr/",
      meanings: ["流行的", "受欢迎的"],
      word_forms: {
        noun: "popularity",
        adverb: "popularly"
      },
      collocations: [
        "popular music",
        "very popular",
        "popular among",
        "popular culture",
        "most popular",
        "become popular"
      ],
      exam_frequency: 4.5,
      etymology: {
        root: "popul",
        suffix: "-ar",
        meaning: "popul(人民) + ar(形容词) = 人民喜爱的 → 流行的"
      },
      gameDescription: "描述被大众普遍喜爱和接受的事物",
      academicContext: "Shakespeare's plays remain popular in literature courses worldwide.",
      dailyContext: "This song is really popular right now. Everyone is singing it!",
      memoryStory: "people(人民)喜欢的就是popular(流行的)。",
      confusableWords: ["famous", "well-known", "trending", "fashionable"]
    }
  },
  {
    id: "hf008",
    word: "friendly",
    level: "初一",
    unit: "Unit 2",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈfrendli/",
      phonetic_us: "/ˈfrendli/",
      meanings: ["友好的", "友善的"],
      word_forms: {
        noun: "friendliness",
        adjective: "friendlier"
      },
      collocations: [
        "friendly person",
        "friendly smile",
        "friendly atmosphere",
        "user-friendly",
        "eco-friendly",
        "friendly advice"
      ],
      exam_frequency: 4.7,
      etymology: {
        root: "friend",
        suffix: "-ly",
        meaning: "friend(朋友) + ly(形容词后缀) = 像朋友一样的 → 友好的"
      },
      gameDescription: "形容待人和善、易于相处的性格特征",
      academicContext: "A friendly learning environment helps students perform better.",
      dailyContext: "Our new neighbor is very friendly. She always says hello.",
      memoryStory: "friend(朋友)加ly就是friendly，像朋友一样友好的。",
      confusableWords: ["kind", "amiable", "cordial", "warm"]
    }
  },
  {
    id: "hf009",
    word: "favorite",
    level: "初一",
    unit: "Unit 3",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈfeɪvərɪt/",
      phonetic_us: "/ˈfeɪvərɪt/",
      meanings: ["最喜欢的", "特别喜爱的"],
      word_forms: {
        verb: "favor"
      },
      collocations: [
        "favorite color",
        "favorite food",
        "favorite subject",
        "favorite teacher",
        "my favorite",
        "favorite place"
      ],
      exam_frequency: 4.6,
      etymology: {
        root: "favor",
        suffix: "-ite",
        meaning: "favor(喜爱) + ite(名词/形容词) = 最被喜爱的 → 最喜欢的"
      },
      gameDescription: "表达对某事物的特别偏好和喜爱",
      academicContext: "Her favorite subject is biology because she loves nature.",
      dailyContext: "What's your favorite movie? Mine is The Lion King.",
      memoryStory: "favor(喜爱)加ite就是favorite，最喜爱的事物。",
      confusableWords: ["preferred", "beloved", "cherished", "treasured"]
    }
  },
  {
    id: "hf010",
    word: "wonderful",
    level: "初一",
    unit: "Unit 4",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈwʌndəfl/",
      phonetic_us: "/ˈwʌndərfl/",
      meanings: ["精彩的", "绝妙的"],
      word_forms: {
        noun: "wonder",
        adverb: "wonderfully"
      },
      collocations: [
        "wonderful time",
        "wonderful experience",
        "wonderful place",
        "wonderful idea",
        "wonderful day",
        "wonderful news"
      ],
      exam_frequency: 4.5,
      etymology: {
        root: "wonder",
        suffix: "-ful",
        meaning: "wonder(惊奇) + ful(充满) = 充满惊奇的 → 精彩的"
      },
      gameDescription: "用来赞叹令人惊喜和愉悦的体验",
      academicContext: "The science fair showcased wonderful innovations by young students.",
      dailyContext: "We had a wonderful vacation at the beach last summer.",
      memoryStory: "wonder(惊奇)加ful(充满)就是wonderful，充满惊奇的精彩事物。",
      confusableWords: ["marvelous", "fantastic", "splendid", "magnificent"]
    }
  },
  {
    id: "hf011",
    word: "comfortable",
    level: "初二",
    unit: "Unit 2",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈkʌmftəbl/",
      phonetic_us: "/ˈkʌmftərbl/",
      meanings: ["舒适的", "舒服的"],
      word_forms: {
        noun: "comfort",
        adverb: "comfortably"
      },
      collocations: [
        "comfortable chair",
        "comfortable life",
        "feel comfortable",
        "comfortable clothes",
        "comfortable room",
        "make comfortable"
      ],
      exam_frequency: 4.4,
      etymology: {
        root: "comfort",
        suffix: "-able",
        meaning: "comfort(舒适) + able(能够) = 能够带来舒适的 → 舒适的"
      },
      gameDescription: "形容身体或心理上感到放松和满足的状态",
      academicContext: "A comfortable classroom environment improves student concentration.",
      dailyContext: "These shoes are very comfortable. I can walk all day in them.",
      memoryStory: "comfort(舒适)加able就是comfortable，能够让人舒适的。",
      confusableWords: ["cozy", "pleasant", "relaxing", "restful"]
    }
  },
  {
    id: "hf012",
    word: "delicious",
    level: "初一",
    unit: "Unit 5",
    frequency: "高频",
    data: {
      phonetic_uk: "/dɪˈlɪʃəs/",
      phonetic_us: "/dɪˈlɪʃəs/",
      meanings: ["美味的", "可口的"],
      word_forms: {
        adverb: "deliciously"
      },
      collocations: [
        "delicious food",
        "taste delicious",
        "delicious meal",
        "delicious dessert",
        "look delicious",
        "smell delicious"
      ],
      exam_frequency: 4.5,
      etymology: {
        prefix: "de-",
        root: "lic",
        suffix: "-ious",
        meaning: "de(加强) + lic(吸引) + ious(形容词) = 非常吸引人的 → 美味的"
      },
      gameDescription: "描述食物带来的美好味觉体验",
      academicContext: "The cooking class teaches students how to prepare delicious and healthy meals.",
      dailyContext: "Mom's homemade pizza is delicious! Can I have another slice?",
      memoryStory: "de(非常)加licious就像delicious(美味的)，非常美味。",
      confusableWords: ["tasty", "yummy", "flavorful", "savory"]
    }
  },
  {
    id: "hf013",
    word: "excited",
    level: "初二",
    unit: "Unit 3",
    frequency: "高频",
    data: {
      phonetic_uk: "/ɪkˈsaɪtɪd/",
      phonetic_us: "/ɪkˈsaɪtɪd/",
      meanings: ["兴奋的", "激动的"],
      word_forms: {
        verb: "excite",
        noun: "excitement",
        adverb: "excitedly"
      },
      collocations: [
        "feel excited",
        "get excited",
        "excited about",
        "very excited",
        "excited to do",
        "excited voice"
      ],
      exam_frequency: 4.6,
      etymology: {
        prefix: "ex-",
        root: "cit",
        suffix: "-ed",
        meaning: "ex(向外) + cit(唤起) + ed(被动) = 被唤起向外的 → 兴奋的"
      },
      gameDescription: "表达因期待或快乐而产生的强烈情绪",
      academicContext: "Students were excited to hear about the upcoming field trip.",
      dailyContext: "I'm so excited about my birthday party this weekend!",
      memoryStory: "excite(使兴奋)加d就是excited，被激动的情绪充满。",
      confusableWords: ["thrilled", "enthusiastic", "eager", "animated"]
    }
  },
  {
    id: "hf014",
    word: "tired",
    level: "初一",
    unit: "Unit 6",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈtaɪəd/",
      phonetic_us: "/ˈtaɪərd/",
      meanings: ["疲倦的", "累的"],
      word_forms: {
        verb: "tire",
        noun: "tiredness"
      },
      collocations: [
        "feel tired",
        "get tired",
        "tired of",
        "very tired",
        "tired eyes",
        "tired out"
      ],
      exam_frequency: 4.5,
      etymology: {
        root: "tire",
        suffix: "-d",
        meaning: "tire(使疲劳) + d = 被使疲劳的 → 疲倦的"
      },
      gameDescription: "描述身体或精神需要休息的状态",
      academicContext: "After the long exam, students felt tired but relieved.",
      dailyContext: "I'm tired after playing basketball for two hours.",
      memoryStory: "tire(使疲劳)加d就是tired，感到疲劳的状态。",
      confusableWords: ["exhausted", "weary", "fatigued", "worn-out"]
    }
  },
  {
    id: "hf015",
    word: "famous",
    level: "初二",
    unit: "Unit 4",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈfeɪməs/",
      phonetic_us: "/ˈfeɪməs/",
      meanings: ["著名的", "出名的"],
      word_forms: {
        noun: "fame",
        adverb: "famously"
      },
      collocations: [
        "famous person",
        "famous for",
        "famous place",
        "famous singer",
        "world famous",
        "become famous"
      ],
      exam_frequency: 4.6,
      etymology: {
        root: "fam",
        suffix: "-ous",
        meaning: "fam(名声) + ous(充满) = 充满名声的 → 著名的"
      },
      gameDescription: "形容被很多人知道和认可的人或事物",
      academicContext: "Shakespeare is famous for his plays and sonnets.",
      dailyContext: "This restaurant is famous for its dumplings.",
      memoryStory: "fame(名声)加ous就是famous，拥有名声的著名人物。",
      confusableWords: ["renowned", "celebrated", "notable", "prominent"]
    }
  },
  {
    id: "hf016",
    word: "terrible",
    level: "初一",
    unit: "Unit 7",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈterəbl/",
      phonetic_us: "/ˈterəbl/",
      meanings: ["可怕的", "糟糕的"],
      word_forms: {
        noun: "terror",
        adverb: "terribly"
      },
      collocations: [
        "terrible weather",
        "terrible accident",
        "terrible mistake",
        "feel terrible",
        "terrible news",
        "terrible pain"
      ],
      exam_frequency: 4.4,
      etymology: {
        root: "terr",
        suffix: "-ible",
        meaning: "terr(恐惧) + ible(能够) = 能引起恐惧的 → 可怕的"
      },
      gameDescription: "描述非常糟糕或令人不快的事物",
      academicContext: "The terrible consequences of war are studied in history class.",
      dailyContext: "I had a terrible headache yesterday and had to stay in bed.",
      memoryStory: "terror(恐怖)加ible就是terrible，令人恐怖的可怕事物。",
      confusableWords: ["awful", "dreadful", "horrible", "ghastly"]
    }
  },
  {
    id: "hf017",
    word: "expensive",
    level: "初二",
    unit: "Unit 5",
    frequency: "高频",
    data: {
      phonetic_uk: "/ɪkˈspensɪv/",
      phonetic_us: "/ɪkˈspensɪv/",
      meanings: ["昂贵的", "花钱多的"],
      word_forms: {
        noun: "expense",
        adverb: "expensively"
      },
      collocations: [
        "expensive car",
        "very expensive",
        "expensive restaurant",
        "expensive clothes",
        "too expensive",
        "most expensive"
      ],
      exam_frequency: 4.5,
      etymology: {
        prefix: "ex-",
        root: "pens",
        suffix: "-ive",
        meaning: "ex(向外) + pens(花费) + ive(形容词) = 需要向外花费的 → 昂贵的"
      },
      gameDescription: "描述价格高、需要支付很多钱的物品",
      academicContext: "The research equipment was expensive but necessary for the experiment.",
      dailyContext: "This phone is too expensive. Let's look for a cheaper one.",
      memoryStory: "expense(花费)加ive就是expensive，需要花费很多的昂贵物品。",
      confusableWords: ["costly", "pricey", "dear", "high-priced"]
    }
  },
  {
    id: "hf018",
    word: "possible",
    level: "初二",
    unit: "Unit 6",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈpɒsəbl/",
      phonetic_us: "/ˈpɑːsəbl/",
      meanings: ["可能的", "办得到的"],
      word_forms: {
        noun: "possibility",
        adverb: "possibly",
        verb: "possibilize"
      },
      collocations: [
        "as possible",
        "possible solution",
        "possible way",
        "make possible",
        "if possible",
        "possible outcome"
      ],
      exam_frequency: 4.7,
      etymology: {
        root: "poss",
        suffix: "-ible",
        meaning: "poss(能够) + ible(可以) = 可以实现的 → 可能的"
      },
      gameDescription: "表示事情有发生或实现的机会",
      academicContext: "With hard work, it's possible to achieve your academic goals.",
      dailyContext: "Is it possible to finish homework before dinner?",
      memoryStory: "poss(能够)加ible就是possible，能够实现的可能性。",
      confusableWords: ["feasible", "achievable", "viable", "workable"]
    }
  },
  {
    id: "hf019",
    word: "necessary",
    level: "初二",
    unit: "Unit 7",
    frequency: "高频",
    data: {
      phonetic_uk: "/ˈnesəsəri/",
      phonetic_us: "/ˈnesəseri/",
      meanings: ["必要的", "必需的"],
      word_forms: {
        noun: "necessity",
        adverb: "necessarily"
      },
      collocations: [
        "necessary for",
        "necessary to do",
        "if necessary",
        "necessary information",
        "absolutely necessary",
        "necessary step"
      ],
      exam_frequency: 4.6,
      etymology: {
        root: "necess",
        suffix: "-ary",
        meaning: "necess(需要) + ary(形容词) = 需要的 → 必要的"
      },
      gameDescription: "形容不可缺少或必须具备的事物",
      academicContext: "Regular practice is necessary to master a foreign language.",
      dailyContext: "It's necessary to wear a helmet when riding a bike.",
      memoryStory: "necessity(必需品)去掉ity加ary就是necessary，必要的东西。",
      confusableWords: ["essential", "required", "vital", "indispensable"]
    }
  },
  {
    id: "hf020",
    word: "successful",
    level: "初三",
    unit: "Unit 1",
    frequency: "高频",
    data: {
      phonetic_uk: "/səkˈsesfl/",
      phonetic_us: "/səkˈsesfl/",
      meanings: ["成功的", "有成就的"],
      word_forms: {
        noun: "success",
        adverb: "successfully",
        verb: "succeed"
      },
      collocations: [
        "successful career",
        "successful person",
        "be successful",
        "successful business",
        "successful in",
        "most successful"
      ],
      exam_frequency: 4.7,
      etymology: {
        root: "success",
        suffix: "-ful",
        meaning: "success(成功) + ful(充满) = 充满成功的 → 成功的"
      },
      gameDescription: "描述达到预期目标和取得良好结果的状态",
      academicContext: "The successful completion of the project earned the team high praise.",
      dailyContext: "She's a successful doctor who helps many patients every day.",
      memoryStory: "success(成功)加ful(充满)就是successful，充满成功的人生。",
      confusableWords: ["triumphant", "prosperous", "thriving", "accomplished"]
    }
  }
];
