/**
 * Audio Manager for Wedding MP3 Background Music
 * Uses HTML5 Audio element with pre-buffering for full cross-device compatibility (iOS, Android, Desktop).
 */

class WeddingAudioManager {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private listeners: Set<(playing: boolean) => void> = new Set();
  private audioSrc: string = '/audio/lagu_pengantin.mp3';
  private fallbackSrc: string = '/assets/aistudio/_____________b670ebc7.mp3';

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
    }
  }

  private initAudio() {
    if (this.audio) return;

    try {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = 0.85;

      // Fallback if primary path fails
      this.audio.addEventListener('error', () => {
        if (this.audio && this.audio.src !== this.fallbackSrc) {
          console.warn('Primary audio failed, switching to fallback path');
          this.audio.src = this.fallbackSrc;
          this.audio.load();
          if (this.isPlaying) {
            this.audio.play().catch(() => {});
          }
        }
      });

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notifyListeners(true);
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners(false);
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notifyListeners(false);
      });
    } catch (e) {
      console.warn('Audio init error:', e);
    }
  }

  public setListener(cb: (playing: boolean) => void): () => void {
    this.listeners.add(cb);
    cb(this.isPlaying);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notifyListeners(playing: boolean) {
    this.listeners.forEach((cb) => {
      try {
        cb(playing);
      } catch (err) {
        console.error(err);
      }
    });
  }

  public async start(): Promise<boolean> {
    if (!this.audio) {
      this.initAudio();
    }
    if (!this.audio) return false;

    try {
      await this.audio.play();
      this.isPlaying = true;
      this.notifyListeners(true);
      return true;
    } catch (err) {
      console.warn('Playback prevented by browser autoplay policy:', err);
      // Setup one-time touch listener to resume audio on next user touch
      const resumeOnTouch = () => {
        if (this.audio && this.isPlaying) {
          this.audio.play().catch(() => {});
        }
        window.removeEventListener('click', resumeOnTouch);
        window.removeEventListener('touchstart', resumeOnTouch);
      };
      window.addEventListener('click', resumeOnTouch, { once: true });
      window.addEventListener('touchstart', resumeOnTouch, { once: true });
      return false;
    }
  }

  public stop() {
    if (!this.audio) return;
    try {
      this.audio.pause();
    } catch (err) {
      console.warn(err);
    }
    this.isPlaying = false;
    this.notifyListeners(false);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(val: number) {
    if (!this.audio) return;
    this.audio.volume = Math.max(0, Math.min(1, val));
  }
}

export const weddingAudio = new WeddingAudioManager();
