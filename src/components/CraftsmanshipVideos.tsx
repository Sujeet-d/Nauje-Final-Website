import React, { useState, useRef, useEffect } from 'react';
import { CRAFTSMANSHIP_VIDEOS, VideoShowcase } from '../data/jewelryData';
import { useMediaUrl } from '../data/mediaStore';
import { 
  Play, 
  Pause,
  X, 
  Flame, 
  Film,
  Sparkles,
  Maximize2,
  Volume2,
  VolumeX,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

const VIDEO_POSTERS: Record<string, string> = {
  'vid-cad-precision': '/thumbnails/video1-poster.jpg',
  'vid-goldsmithing-setting': '/thumbnails/video2-poster.jpg',
  'vid-meenakari-enameling': '/thumbnails/video3-poster.jpg',
  'vid-finished-polish': '/thumbnails/video4-poster.jpg'
};

const getVideoIndex = (id: string): number => {
  if (id.includes('cad')) return 1;
  if (id.includes('goldsmithing')) return 2;
  if (id.includes('meenakari')) return 3;
  return 4;
};

interface VideoCardProps {
  video: VideoShowcase;
  onOpenTheater: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onOpenTheater }) => {
  const vIndex = getVideoIndex(video.id);
  const posterPath = VIDEO_POSTERS[video.id] || `/thumbnails/video${vIndex}-poster.jpg`;
  const customPosterUrl = useMediaUrl(posterPath);
  const activePoster = customPosterUrl || posterPath;

  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const inlineVideoRef = useRef<HTMLVideoElement>(null);

  const customVideoUrl = useMediaUrl(video.fileName);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inlineVideoRef.current) {
      if (isPlayingInline) {
        inlineVideoRef.current.pause();
        setIsPlayingInline(false);
      } else {
        setVideoError(false);
        inlineVideoRef.current.play()
          .then(() => setIsPlayingInline(true))
          .catch((err) => {
            console.warn('Playback notice:', err);
            // Open full theater player if inline autoplay policy restricted
            onOpenTheater();
          });
      }
    } else {
      setIsPlayingInline(true);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inlineVideoRef.current) {
      inlineVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="group relative bg-white border border-[#EED7D5] rounded-xl hover:border-[#4A154B] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl">
      {/* Video Screen Container */}
      <div className="relative aspect-[16/10] bg-[#160B18] overflow-hidden flex items-center justify-center">
        {/* Inline Active HTML5 Video Player */}
        {isPlayingInline ? (
          <div className="relative w-full h-full bg-black">
            <video
              ref={inlineVideoRef}
              autoPlay
              playsInline
              loop
              muted={isMuted}
              onLoadedData={() => setHasLoaded(true)}
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover"
            >
              {customVideoUrl && <source src={customVideoUrl} type="video/mp4" />}
              <source src={`/Jewels_Video_${vIndex}.mp4`} type="video/mp4" />
              <source src={`/Jewels Video ${vIndex}.mp4`} type="video/mp4" />
              <source src={`/videos/Jewels_Video_${vIndex}.mp4`} type="video/mp4" />
              <source src={`/videos/Jewels Video ${vIndex}.mp4`} type="video/mp4" />
              <source src={`/${encodeURIComponent(video.fileName)}`} type="video/mp4" />
              <source src={`/${video.fileName}`} type="video/mp4" />
              <source src={video.fallbackStreamUrl} type="video/mp4" />
            </video>

            {/* Quick Inline Controls Overlay */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between z-20 bg-black/60 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  aria-label={isPlayingInline ? "Pause video" : "Play video"}
                  className="p-1 rounded text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {isPlayingInline ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button
                  type="button"
                  onClick={handleToggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="p-1 rounded text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#F8D2D0] font-mono tracking-wider">
                  PLAYING
                </span>
                <button
                  type="button"
                  onClick={onOpenTheater}
                  aria-label="Open fullscreen theater"
                  className="p-1 rounded text-white/80 hover:text-[#D4AF37] transition-colors cursor-pointer"
                  title="Expand Theater View"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Poster Thumbnail Screen with Play Trigger */
          <div 
            onClick={handleTogglePlay} 
            className="w-full h-full relative cursor-pointer"
          >
            <img
              src={activePoster}
              alt={video.title}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#160B18] via-black/35 to-black/20" />

            {/* Center Gold Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/70 group-hover:bg-[#4A154B] group-hover:border-[#D4AF37] group-hover:scale-110 flex items-center justify-center text-white transition-all duration-300 shadow-2xl">
                <Play className="w-6 h-6 ml-0.5 fill-white text-white" />
              </div>
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#F8D2D0] mt-3 font-semibold bg-black/65 px-3 py-1 rounded-full border border-white/10">
                {video.duration} · Master Film
              </span>
            </div>

            {/* Discipline Tag */}
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/75 backdrop-blur-sm rounded-full text-[10px] text-white/90 font-mono tracking-wider border border-white/10">
              {video.discipline}
            </div>
          </div>
        )}

        {/* Playback Error Fallback */}
        {videoError && (
          <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-4 text-center z-30">
            <p className="text-xs text-rose-300 mb-2">Video playback interrupted</p>
            <button
              onClick={() => {
                setVideoError(false);
                onOpenTheater();
              }}
              className="px-3 py-1.5 bg-[#4A154B] border border-[#D4AF37] text-white rounded text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Open in Theater</span>
            </button>
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-serif text-lg font-semibold text-[#2D2232] group-hover:text-[#4A154B] transition-colors leading-snug">
            {video.title}
          </h3>
          <p className="text-xs text-[#7D6B82] font-sans font-medium mt-1">
            {video.subtitle}
          </p>
          <p className="text-xs text-[#5F4E64] font-sans mt-2.5 leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-[#F0DCDB] flex items-center justify-between text-xs text-[#4A154B] font-semibold">
          <button
            type="button"
            onClick={handleTogglePlay}
            className="flex items-center gap-1.5 hover:text-[#7A1F7D] transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C86A6A]" />
            <span>{isPlayingInline ? 'Pause Process' : 'Watch Process'}</span>
          </button>
          <button
            type="button"
            onClick={onOpenTheater}
            className="flex items-center gap-1 text-[#7D6B82] hover:text-[#4A154B] transition-colors cursor-pointer"
            title="Open Grand Cinema View"
          >
            <span className="text-[11px] font-mono uppercase">Cinema View</span>
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const CraftsmanshipVideos: React.FC = () => {
  const [theaterVideo, setTheaterVideo] = useState<VideoShowcase | null>(null);
  const theaterVideoRef = useRef<HTMLVideoElement>(null);
  const [theaterMuted, setTheaterMuted] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const theaterCustomUrl = useMediaUrl(theaterVideo?.fileName || '');
  const theaterIndex = theaterVideo ? getVideoIndex(theaterVideo.id) : 1;

  // Auto-play theater video when modal opens
  useEffect(() => {
    if (theaterVideo && theaterVideoRef.current) {
      setLoadError(false);
      theaterVideoRef.current.currentTime = 0;
      theaterVideoRef.current.play().catch(() => {
        // Autoplay policy might require initial user tap; controls allow manual play
      });
    }
  }, [theaterVideo]);

  return (
    <section id="craftsmanship-videos" className="py-20 sm:py-24 bg-[#FAF4F2] text-[#2D2232] relative overflow-hidden border-b border-[#F0DCDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E9D2D0] text-[#4A154B] text-xs tracking-widest uppercase font-bold rounded-full mb-3 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-[#C86A6A]" />
            <span>Atelier Cinematography</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D2232] tracking-tight mb-3">
            Four Disciplines of Sovereign Craft
          </h2>

          <p className="text-sm sm:text-base text-[#5F4E64] font-sans leading-relaxed">
            Experience the creation of bespoke jewellery across four master films: 3D CAD modeling, 22K solid casting, vitreous meenakari enameling, and diamond scintillation inspection.
          </p>

          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-[#7D6B82] font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Original Master Films Ready
            </span>
            <span>·</span>
            <span>Click any film to play inline or in cinema mode</span>
          </div>
        </div>

        {/* 4 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFTSMANSHIP_VIDEOS.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onOpenTheater={() => setTheaterVideo(video)}
            />
          ))}
        </div>

      </div>

      {/* Grand HTML5 Cinema Player Modal */}
      {theaterVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
          <div className="fixed inset-0" onClick={() => setTheaterVideo(null)} />

          <div
            className="relative z-10 w-full max-w-4xl bg-[#140816] text-white border border-[#4A154B]/80 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#250C28]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#4A154B] border border-[#D4AF37] flex items-center justify-center text-white shadow-md">
                  <Film className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#F8D2D0] block">
                    NAUJÉ ATELIER CINEMATOGRAPHY · {theaterVideo.discipline}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif text-white font-medium">
                    {theaterVideo.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setTheaterVideo(null)}
                aria-label="Close cinema player"
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Area */}
            <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                key={theaterVideo.id}
                ref={theaterVideoRef}
                controls
                autoPlay
                playsInline
                preload="auto"
                poster={VIDEO_POSTERS[theaterVideo.id] || `/thumbnails/video${theaterIndex}-poster.jpg`}
                onError={() => setLoadError(true)}
                className="w-full h-full object-contain"
              >
                {theaterCustomUrl && <source src={theaterCustomUrl} type="video/mp4" />}
                <source src={`/Jewels_Video_${theaterIndex}.mp4`} type="video/mp4" />
                <source src={`/Jewels Video ${theaterIndex}.mp4`} type="video/mp4" />
                <source src={`/videos/Jewels_Video_${theaterIndex}.mp4`} type="video/mp4" />
                <source src={`/videos/Jewels Video ${theaterIndex}.mp4`} type="video/mp4" />
                <source src={`/${encodeURIComponent(theaterVideo.fileName)}`} type="video/mp4" />
                <source src={`/${theaterVideo.fileName}`} type="video/mp4" />
                <source src={theaterVideo.fallbackStreamUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {loadError && (
                <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-center z-20">
                  <p className="text-sm text-[#F8D2D0] mb-3">Playback stream reconnecting...</p>
                  <button
                    onClick={() => {
                      setLoadError(false);
                      if (theaterVideoRef.current) {
                        theaterVideoRef.current.load();
                        theaterVideoRef.current.play();
                      }
                    }}
                    className="px-4 py-2 bg-[#4A154B] border border-[#D4AF37] text-white rounded-lg text-xs tracking-wider uppercase font-semibold flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <RotateCcw className="w-4 h-4 text-[#D4AF37]" />
                    <span>Reload Video Stream</span>
                  </button>
                </div>
              )}
            </div>

            {/* Video Footer Note */}
            <div className="px-6 py-4 bg-[#250C28] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#F8D2D0]">
              <span className="font-serif italic text-sm">
                {theaterVideo.subtitle}
              </span>
              <div className="flex items-center gap-4 text-white/70 font-mono text-[11px]">
                <span>Duration: {theaterVideo.duration}</span>
                <span>·</span>
                <span className="text-[#D4AF37]">HD 1080p Master Quality</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
