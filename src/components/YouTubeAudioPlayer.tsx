import React, { useEffect, useRef } from 'react';

interface YouTubeAudioPlayerProps {
  isPlaying: boolean;
  videoUrl?: string;
}

export const YouTubeAudioPlayer: React.FC<YouTubeAudioPlayerProps> = ({
  isPlaying,
  videoUrl = "https://www.youtube.com/embed/IBFWlwnrpdU?enablejsapi=1&loop=1&playlist=IBFWlwnrpdU&origin=" + (typeof window !== 'undefined' ? window.location.origin : '')
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    try {
      // Send postMessage command to YouTube iframe API
      const command = isPlaying ? 'playVideo' : 'pauseVideo';
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
    } catch {
      // Ignore cross-origin error
    }
  }, [isPlaying]);

  return (
    <div className="sr-only pointer-events-none" aria-hidden="true">
      {/* Only mount iframe with src when user starts music, or keep clean without autoplay=1 */}
      <iframe
        ref={iframeRef}
        width="1"
        height="1"
        src={isPlaying || isLoadedRef.current ? videoUrl : undefined}
        onLoad={() => {
          isLoadedRef.current = true;
          if (iframeRef.current && iframeRef.current.contentWindow && isPlaying) {
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
              '*'
            );
          }
        }}
        title="Wedding Background Music"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};
