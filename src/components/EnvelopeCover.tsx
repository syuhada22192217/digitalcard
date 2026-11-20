import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import fittedDoorLeft from '../assets/images/barucover_door_left.png';
import fittedDoorRight from '../assets/images/barucover_door_right.png';
import anthuriumPetalImg from '../assets/images/anthurium_petal_1792061936557.jpg';

interface EnvelopeCoverProps {
  onOpen: () => void;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Smooth gatefold door slide animation before opening inner card
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <div className="relative w-full min-h-screen sm:min-h-[640px] flex items-center justify-center overflow-hidden select-none bg-[#3b0811]">
      {/* ---------------------------------------------------------------------------------
          1. PANEL PINTU DUA BELAH (FITTED FRONTPAGE - TIADA RUANG PUTIH)
          - Menggunakan fittedfrontpage.jpg yang dipotong kemas kiri dan kanan tanpa ruang putih
          - Latar pintu deep maroon penuh dengan renda berkerawang di sisi tepi kiri & kanan
          - Jambangan orkid burgundy/magenta & daun anthurium asli di kedua-dua belah
         --------------------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-10 flex overflow-hidden pointer-events-none">
        {/* Daun Pintu Kiri (Membuka ke kiri) */}
        <div
          className={`w-1/2 h-full relative overflow-hidden transition-all duration-1000 ease-in-out origin-left ${
            isOpening ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
          style={{
            boxShadow: 'inset -8px 0 24px rgba(0, 0, 0, 0.6)',
          }}
        >
          <img
            src={fittedDoorLeft}
            alt="Daun Pintu Kiri Deep Maroon Renda & Orkid"
            className="w-full h-full object-cover filter brightness-[0.98] contrast-105"
          />
          {/* Garisan bayang halus celah pintu tengah */}
          <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-gradient-to-l from-black/60 to-transparent" />
        </div>

        {/* Daun Pintu Kanan (Membuka ke kanan) */}
        <div
          className={`w-1/2 h-full relative overflow-hidden transition-all duration-1000 ease-in-out origin-right ${
            isOpening ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
          style={{
            boxShadow: 'inset 8px 0 24px rgba(0, 0, 0, 0.6)',
          }}
        >
          <img
            src={fittedDoorRight}
            alt="Daun Pintu Kanan Deep Maroon Renda & Orkid"
            className="w-full h-full object-cover filter brightness-[0.98] contrast-105"
          />
          {/* Garisan bayang halus celah pintu tengah */}
          <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------
          2. KELOPAK BUNGA GUGUR PERLAHAN (ATMOSPHERIC TOUCH)
         --------------------------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        <div
          className="absolute animate-petal opacity-85"
          style={{ left: '15%', top: '-30px', animationDuration: '14s' }}
        >
          <img
            src={anthuriumPetalImg}
            alt="Kelopak"
            className="w-5 h-5 object-contain rotate-12 drop-shadow-sm filter contrast-110"
          />
        </div>
        <div
          className="absolute animate-petal opacity-75"
          style={{ left: '82%', top: '-40px', animationDuration: '17s', animationDelay: '4s' }}
        >
          <img
            src={anthuriumPetalImg}
            alt="Kelopak"
            className="w-4 h-4 object-contain -rotate-45 drop-shadow-sm filter contrast-110"
          />
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------
          3. MOHOR WARNA PUTIH DENGAN NAMA "AMAR & SYUHADA" WARNA DEEP MAROON
          (Nama Amar & Syuhada warna deep maroon di atas mohor warna putih)
         --------------------------------------------------------------------------------- */}
      <div
        className={`relative z-30 flex flex-col items-center justify-center transition-all duration-700 ${
          isOpening ? 'scale-110 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        <button
          onClick={handleOpenClick}
          className="group relative flex flex-col items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Sentuh Mohor Putih Untuk Buka Kad"
        >
          {/* Mohor Putih Mewah (Luxury White Wax Seal) */}
          <div
            className={`relative w-40 h-52 sm:w-44 sm:h-56 rounded-[50%/54%] flex items-center justify-center transition-transform duration-500 group-hover:scale-105 active:scale-95 ${
              isOpening ? 'animate-seal-succession' : ''
            }`}
            style={{
              background: 'radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f6f7f9 40%, #e5e8ed 75%, #d5d9e0 100%)',
              boxShadow: `
                0 20px 40px -6px rgba(0, 0, 0, 0.8),
                0 8px 18px -3px rgba(0, 0, 0, 0.5),
                inset 0 2px 4px rgba(255, 255, 255, 1),
                inset 0 -3px 6px rgba(0, 0, 0, 0.12)
              `,
              border: '3px solid rgba(255, 255, 255, 0.85)',
            }}
          >
            {/* Outer embossed wax lip */}
            <div
              className="absolute inset-2 rounded-[50%/54%] pointer-events-none"
              style={{
                border: '1.5px solid rgba(200, 205, 215, 0.7)',
                boxShadow: `
                  inset 0 3px 6px rgba(0, 0, 0, 0.12),
                  0 2px 4px rgba(255, 255, 255, 0.9)
                `,
              }}
            />

            {/* Inner secondary engraved groove */}
            <div
              className="absolute inset-4 rounded-[50%/54%] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 40% 35%, #ffffff 0%, #f9fafb 60%, #edf0f5 100%)',
                border: '1px solid rgba(210, 215, 225, 0.8)',
                boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.08)',
              }}
            />

            {/* Nama Amar & Syuhada dalam Warna Deep Maroon (#580713) di atas Mohor Putih */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 select-none pointer-events-none py-2">
              {/* Amar */}
              <span
                className={`font-script text-3xl sm:text-4xl text-[#580713] leading-none font-bold inline-flex items-baseline tracking-wide transition-all duration-500 ${
                  isOpening ? 'scale-110 text-[#7A0C16]' : ''
                }`}
                style={{
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.95), 0 -1px 1px rgba(88, 7, 19, 0.25)',
                }}
              >
                <span className="font-pinyon text-4xl sm:text-5xl font-bold -mr-0.5 inline-block">A</span>
                <span>mar</span>
              </span>

              {/* & (Ampersand Kaligrafi) */}
              <span
                className={`font-script text-lg sm:text-xl text-[#6a0917] my-0.5 font-bold italic leading-none transition-all duration-700 delay-100 ${
                  isOpening ? 'scale-125 text-[#7A0C16]' : ''
                }`}
                style={{
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.95)',
                }}
              >
                &
              </span>

              {/* Syuhada */}
              <span
                className={`font-script text-3xl sm:text-4xl text-[#580713] leading-none font-bold tracking-wide transition-all duration-700 delay-200 ${
                  isOpening ? 'scale-110 text-[#7A0C16]' : ''
                }`}
                style={{
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.95), 0 -1px 1px rgba(88, 7, 19, 0.25)',
                }}
              >
                Syuhada
              </span>
            </div>
          </div>

          {/* Lencana Petunjuk di Bawah Mohor */}
          <div className="mt-5 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-300/40 text-amber-200 text-xs font-medium flex items-center gap-1.5 shadow-xl group-hover:bg-[#580713] group-hover:text-white transition-all duration-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            <span>Sentuh Mohor Untuk Buka Kad</span>
          </div>
        </button>
      </div>
    </div>
  );
};
