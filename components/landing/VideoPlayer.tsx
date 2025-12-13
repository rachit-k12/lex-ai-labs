'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, Play, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  subtitle?: string;
}

function getYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export default function VideoPlayer({
  src,
  poster,
  title = 'Inside the Club',
  subtitle = 'See how members connect and grow',
}: VideoPlayerProps) {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const youtubeId = getYouTubeId(src);
  const isYoutube = !!youtubeId;

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlay = useCallback(() => {
    if (isMobile) {
      // On mobile, play inline
      setIsPlayingInline(true);
    } else {
      // On desktop, open fullscreen modal
      setIsFullscreen(true);
    }
  }, [isMobile]);

  const closeVideo = useCallback(() => {
    setIsPlayingInline(false);
    setIsFullscreen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen && e.key === 'Escape') {
        closeVideo();
      }
    };

    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isFullscreen, closeVideo]);

  return (
    <>
      {/* Video Container */}
      <div className="aspect-video relative overflow-hidden">
        {/* Show inline video on mobile when playing */}
        {isPlayingInline && isMobile ? (
          <div className="absolute inset-0 bg-black">
            {isYoutube ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video
                src={src}
                poster={poster}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            )}
            {/* Close button for inline video */}
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 z-10 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Thumbnail/Preview - shown when not playing inline */
          <div className="absolute inset-0 cursor-pointer group" onClick={handlePlay}>
            {/* Background gradient placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-coral-100 via-coral-50 to-white" />

            {/* Grainy texture */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <svg className="w-full h-full">
                <filter id="videoNoise">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.7"
                    numOctaves="4"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="100%" filter="url(#videoNoise)" opacity="0.4" />
              </svg>
            </div>

            {/* YouTube thumbnail if available */}
            {isYoutube && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg)`,
                }}
              />
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

            {/* Play button and text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 md:w-20 md:h-20 bg-neutral-900/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl mb-3 md:mb-4 group-hover:bg-neutral-800 transition-colors"
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
              </motion.button>
              <h3 className="text-lg md:text-xl font-serif italic text-white mb-1 text-shadow">
                {title}
              </h3>
              <p className="text-white/80 text-xs md:text-sm">{subtitle}</p>
            </div>

            {/* Fullscreen hint - desktop only */}
            <div className="hidden md:block absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                <Maximize2 className="w-3 h-3" />
                Click to watch
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Video Modal - Desktop only */}
      <AnimatePresence>
        {isFullscreen && !isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          >
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video container */}
            <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
              {isYoutube ? (
                <div className="w-full max-w-7xl aspect-video bg-transparent rounded-2xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                  />
                </div>
              ) : (
                <video
                  src={src}
                  poster={poster}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-2xl"
                  playsInline
                />
              )}
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={closeVideo} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
