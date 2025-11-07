// Web Speech API 语音播放工具

export type VoiceType = 'uk' | 'us';

interface SpeechOptions {
  rate?: number;  // 语速 0.1-10，默认1
  pitch?: number; // 音调 0-2，默认1
  volume?: number; // 音量 0-1，默认1
  voiceType?: VoiceType; // 口音类型
}

class SpeechSynthesisManager {
  private synthesis: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];
  private isInitialized: boolean = false;

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.initVoices();
  }

  // 初始化语音列表
  private initVoices() {
    const loadVoices = () => {
      this.voices = this.synthesis.getVoices();
      this.isInitialized = true;
    };

    loadVoices();

    // Chrome需要等待voices加载完成
    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = loadVoices;
    }
  }

  // 获取可用的英语语音
  private getEnglishVoice(voiceType: VoiceType): SpeechSynthesisVoice | null {
    if (!this.isInitialized || this.voices.length === 0) {
      return null;
    }

    // 根据voiceType选择语音
    const langCode = voiceType === 'uk' ? 'en-GB' : 'en-US';

    // 优先查找完全匹配的语音
    let voice = this.voices.find(v => v.lang === langCode);

    // 如果没有找到，尝试匹配语言前缀
    if (!voice) {
      voice = this.voices.find(v => v.lang.startsWith(langCode.split('-')[0]));
    }

    // 如果还是没有，使用第一个英语语音
    if (!voice) {
      voice = this.voices.find(v => v.lang.startsWith('en'));
    }

    return voice || null;
  }

  // 播放单词发音
  speak(text: string, options: SpeechOptions = {}): Promise<void> {
    return new Promise((resolve, reject) => {
      // 停止当前播放
      this.stop();

      const utterance = new SpeechSynthesisUtterance(text);

      // 设置语音参数
      utterance.rate = options.rate || 0.9; // 稍慢一点，更清晰
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      // 设置语音
      const voice = this.getEnglishVoice(options.voiceType || 'us');
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = options.voiceType === 'uk' ? 'en-GB' : 'en-US';
      }

      // 事件监听
      utterance.onend = () => resolve();
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        reject(event);
      };

      // 开始播放
      try {
        this.synthesis.speak(utterance);
      } catch (error) {
        console.error('Failed to speak:', error);
        reject(error);
      }
    });
  }

  // 停止播放
  stop() {
    if (this.synthesis.speaking) {
      this.synthesis.cancel();
    }
  }

  // 暂停播放
  pause() {
    if (this.synthesis.speaking) {
      this.synthesis.pause();
    }
  }

  // 恢复播放
  resume() {
    if (this.synthesis.paused) {
      this.synthesis.resume();
    }
  }

  // 检查是否支持语音合成
  static isSupported(): boolean {
    return 'speechSynthesis' in window;
  }

  // 获取所有可用语音列表（用于调试）
  getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }
}

// 导出单例
export const speechManager = new SpeechSynthesisManager();

// 便捷函数
export const speakWord = (word: string, voiceType: VoiceType = 'us') => {
  return speechManager.speak(word, { voiceType, rate: 0.85 });
};

export const stopSpeaking = () => {
  speechManager.stop();
};

export const isSpeechSupported = SpeechSynthesisManager.isSupported();
