import React, { useState, useRef } from 'react';
import { CRAFTSMANSHIP_VIDEOS, VideoShowcase } from '../data/jewelryData';
import { useMediaUrl } from '../data/mediaStore';
import { 
  Play, 
  X, 
  Flame, 
  Film,
  Sparkles,
  Maximize2
} from 'lucide-react';

// Poster thumbnails matched to user's uploaded assets
const VIDEO_POSTERS: Record<string, string> = {
  'vid-cad-precision': 'The Sovereign Baroque Aquamarine Ring - CAD.jpg',
  'vid-goldsmithing-setting': 'Peacock Meenakari Choker & Grand Pendant Set - Real.png',
  'vid-meenakari-enameling': 'Silver and Royal Blue Enamel Peacock Drop Earrings - Real.png',
  'vid-finished-polish': 'The Art Deco Hexagonal Link Diamond Bracelet - Real.png'
};

const VideoCardThumbnail: React.FC<{ video: VideoShowcase; onPlay: () => void }> = ({ video, onPlay }) => {
  const posterFileName = VIDEO_POSTERS[video.id] || 'Peacock Meenakari Choker & Grand Pendant Set - Real.png';
  const customPosterUrl = useMediaUrl(posterFileName);
  const directPosterUrl = `/${encodeURIComponent(posterFileName)}`;
  const [imgError, setImgError] = useState(false);

  const posterSrc = customPosterUrl || (!imgError ? directPosterUrl : null);

  return (
    <div 
      onClick={onPlay}
      className="group relative bg-white border border-[#EED7D5] rounded-xl hover:border-[#4A154B] transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-xs hover:shadow-xl"
    >
      {/* Video Poster Screen */}
      <div className="relative aspect-[16/10] bg-[#160B18] overflow-hidden flex items-center justify-center">
        {posterSrc ? (
          <img
            src={posterSrc}
            alt={video.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-90"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-tr ${video.visualTheme} opacity-85 group-hover:scale-105 transition-transform duration-700`} />
        )}

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#160B18] via-black/40 to-black/20" />

        {/* Center Play Button Icon */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/60 group-hover:bg-[#4A154B] group-hover:border-[#D4AF37] group-hover:scale-110 flex items-center justify-center text-white transition-all duration-300 shadow-2xl">
            <Play className="w-6 h-6 ml-1 fill-white text-white" />
          </div>
          <span className="text-[10px] uppercase font-sans tracking-widest text-[#F8D2D0] mt-3 font-semibold bg-black/60 px-3 py-1 rounded-full border border-white/10">
            {video.duration} · High Definition
          </span>
        </div>

        {/* Discipline Tag */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded-full text-[10px] text-white/90 font-mono tracking-wider">
          {video.discipline}
        </div>
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
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C86A6A]" />
            <span>Watch Artisan Process</span>
          </span>
          <Maximize2 className="w-3.5 h-3.5 text-[#7D6B82] group-hover:text-[#4A154B] transition-colors" />
        </div>
      </div>
    </div>
  );
};

export const CraftsmanshipVideos: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoShowcase | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Call hook unconditionally
  const activeVideoUrl = useMediaUrl(activeVideo?.fileName || '');

  return (
    <section id="craftsmanship-videos" className="py-20 sm:py-24 bg-[#FAF4F2] text-[#2D2232] relative overflow-hidden border-b border-[#F0DCDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E9D2D0] text-[#4A154B] text-xs tracking-widest uppercase font-bold rounded-full mb-3 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-[#C86A6A]" />
            <span>Atelier Cinematography</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D2232] tracking-tight mb-3">
            Four Disciplines of Sovereign Craft
          </h2>

          <p className="text-sm sm:text-base text-[#5F4E64] font-sans leading-relaxed">
            Experience the authentic creation of bespoke jewellery across four master films: 3D CAD modeling, 22K solid casting, vitreous meenakari enameling, and diamond scintillation inspection.
          </p>
        </div>

        {/* 4 Video Cards Grid with Poster Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFTSMANSHIP_VIDEOS.map((video) => (
            <VideoCardThumbnail
              key={video.id}
              video={video}
              onPlay={() => setActiveVideo(video)}
            />
          ))}
        </div>

      </div>

      {/* HTML5 Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="fixed inset-0" onClick={() => setActiveVideo(null)} />

          <div
            className="relative z-10 w-full max-w-4xl bg-[#140816] text-white border border-[#4A154B]/80 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#250C28]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4A154B] border border-[#D4AF37]/50 flex items-center justify-center text-white">
                  <Film className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#F8D2D0] block">
                    NAUJÉ ATELIER CINEMATOGRAPHY
                  </span>
                  <h3 className="text-base sm:text-lg font-serif text-white font-medium">
                    {activeVideo.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player"
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Real HTML5 Video Element */}
            <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src={activeVideoUrl || `/${encodeURIComponent(activeVideo.fileName)}`}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                <source src={activeVideoUrl || `/${encodeURIComponent(activeVideo.fileName)}`} type="video/mp4" />
                <source src={`/${activeVideo.fileName}`} type="video/mp4" />
                <source src={activeVideo.fallbackStreamUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Footer Note */}
            <div className="px-6 py-4 bg-[#250C28] border-t border-white/10 flex items-center justify-between text-xs text-[#F8D2D0]">
              <span className="font-serif italic text-sm">
                {activeVideo.subtitle}
              </span>
              <span className="text-white/60 font-mono text-[11px]">
                {activeVideo.duration} Masterwork
              </span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
