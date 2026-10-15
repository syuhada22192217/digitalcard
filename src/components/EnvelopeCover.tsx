import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import anthuriumPetalImg from '../assets/images/anthurium_petal_1792061936557.jpg';

interface EnvelopeCoverProps {
  onOpen: () => void;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Allow succession animation of names & seal followed by smooth gate-fold split
    setTimeout(() => {
      onOpen();
    }, 1300);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden select-none bg-[#f3f4f6]">
      {/* ---------------------------------------------------------------------------------
          1. GATEFOLD COVER PANELS (LEFT & RIGHT)
          Clean minimalist luxury off-white paper texture with vertical split seam and shadow
         --------------------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-10 flex overflow-hidden pointer-events-none">
        {/* Left Panel */}
        <div
          className={`w-1/2 h-full bg-[#f8f9fa] border-r border-stone-200/80 transition-transform duration-1000 ease-in-out ${
            isOpening ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 100% 50%, rgba(0,0,0,0.03) 0%, transparent 70%)`,
          }}
        />

        {/* Vertical Center Shadow Line on the Right Panel */}
        <div
          className={`w-1/2 h-full bg-[#f8f9fa] transition-transform duration-1000 ease-in-out relative ${
            isOpening ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{
            boxShadow: '-8px 0 25px -4px rgba(0, 0, 0, 0.12)',
            backgroundImage: `radial-gradient(circle at 0% 50%, rgba(0,0,0,0.04) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* ---------------------------------------------------------------------------------
          2. FALLING PARTICLES: BUNGA ANTHURIUM DEEP RED (SIKIT-SIKIT SAHAJA, GENTLE & ELEGAN)
         --------------------------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {/* Petal 1 */}
        <div
          className="absolute animate-petal opacity-85"
          style={{
            left: '14%',
            top: '-30px',
            animationDuration: '14s',
            animationDelay: '0s',
          }}
        >
          <img
            src={anthuriumPetalImg}
            alt="Kelopak Anthurium"
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain rotate-12 drop-shadow-sm filter contrast-110"
          />
        </div>

        {/* Petal 2 */}
        <div
          className="absolute animate-petal opacity-75"
          style={{
            left: '78%',
            top: '-40px',
            animationDuration: '17s',
            animationDelay: '3.5s',
          }}
        >
          <img
            src={anthuriumPetalImg}
            alt="Kelopak Anthurium"
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain -rotate-45 drop-shadow-sm filter contrast-110"
          />
        </div>

        {/* Petal 3 */}
        <div
          className="absolute animate-petal opacity-80"
          style={{
            left: '38%',
            top: '-35px',
            animationDuration: '16s',
            animationDelay: '7s',
          }}
        >
          <img
            src={anthuriumPetalImg}
            alt="Kelopak Anthurium"
            className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 object-contain rotate-45 drop-shadow-sm filter contrast-110"
          />
        </div>

        {/* Petal 4 */}
        <div
          className="absolute animate-petal opacity-70"
          style={{
            left: '86%',
            top: '-25px',
            animationDuration: '19s',
            animationDelay: '10.5s',
          }}
        >
          <img
            src={anthuriumPetalImg}
            alt="Kelopak Anthurium"
            className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 object-contain rotate-90 drop-shadow-xs filter contrast-110"
          />
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------
          3. EMBOSSED WHITE WAX SEAL BUTTON DENGAN SUCCESSION ANIMATE PADA NAMA AMAR & SYUHADA
         --------------------------------------------------------------------------------- */}
      <div
        className={`relative z-30 flex flex-col items-center justify-center transition-all duration-700 ${
          isOpening ? 'scale-110 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        <button
          onClick={handleOpenClick}
          className="group relative flex flex-col items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Tekan Mohor Putih Untuk Buka Kad"
        >
          {/* Circular Luxury White Wax Seal */}
          <div
            className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105 active:scale-95 ${
              isOpening ? 'animate-seal-succession' : ''
            }`}
            style={{
              background: 'linear-gradient(145deg, #ffffff, #e6e8eb)',
              boxShadow: `
                0 18px 36px -6px rgba(0, 0, 0, 0.22),
                0 6px 14px -3px rgba(0, 0, 0, 0.12),
                inset 0 2px 4px rgba(255, 255, 255, 0.95),
                inset 0 -3px 6px rgba(0, 0, 0, 0.08)
              `,
            }}
          >
            {/* Raised outer wax lip */}
            <div
              className="absolute inset-2.5 rounded-full border border-white/80"
              style={{
                boxShadow: `
                  inset 0 3px 6px rgba(0, 0, 0, 0.1),
                  0 2px 4px rgba(255, 255, 255, 0.8)
                `,
              }}
            />

            {/* Raised secondary inner groove */}
            <div
              className="absolute inset-5 rounded-full border border-stone-200/90"
              style={{
                background: 'linear-gradient(135deg, #fdfdfd 0%, #ebeef2 100%)',
                boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.08)',
              }}
            />

            {/* Embossed Names in Dark Red Calligraphy with succession animation upon touch */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 select-none">
              {/* Amar (Succession item 1) */}
              <span
                className={`font-script text-3xl sm:text-4xl text-[#7A0C16] leading-tight font-bold inline-flex items-baseline transition-all duration-500 ${
                  isOpening ? 'scale-110 text-[#8B0000]' : ''
                }`}
                style={{
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.9), 0 -1px 1px rgba(122, 12, 22, 0.2)',
                }}
              >
                <span className="font-pinyon text-4xl sm:text-5xl font-bold -mr-0.5 inline-block">A</span>
                <span>mar</span>
              </span>

              {/* '&' (Succession item 2) */}
              <span
                className={`font-script text-sm sm:text-base text-[#8B0000]/80 my-0 font-bold italic transition-all duration-700 delay-100 ${
                  isOpening ? 'scale-125 text-[#7A0C16]' : ''
                }`}
                style={{
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.9)',
                }}
              >
                &
              </span>

              {/* Syuhada (Succession item 3) */}
              <span
                className={`font-script text-3xl sm:text-4xl text-[#7A0C16] leading-tight font-bold transition-all duration-700 delay-200 ${
                  isOpening ? 'scale-110 text-[#8B0000]' : ''
                }`}
                style={{
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.9), 0 -1px 1px rgba(122, 12, 22, 0.2)',
                }}
              >
                {WEDDING_DATA.bride.shortName}
              </span>
            </div>
          </div>

          {/* Hint Badge */}
          <div className="mt-5 px-4 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-300/40 text-stone-100 text-xs font-medium flex items-center gap-1.5 shadow-md group-hover:bg-[#7A0C16] transition-colors duration-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            <span>Sentuh Mohor Untuk Buka Kad</span>
          </div>
        </button>
      </div>
    </div>
  );
};
