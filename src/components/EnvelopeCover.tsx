import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import gambar1LeftDoor from '../assets/images/gambar1_left_door.jpg';
import gambar1RightDoor from '../assets/images/gambar1_right_door.jpg';
import goldSealBase from '../assets/images/gold_seal_as_base.png';

interface EnvelopeCoverProps {
  onOpen: () => void;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Smooth door parting animation before revealing the inner card
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden select-none bg-[#2e050a]">
      {/* ---------------------------------------------------------------------------------
          1. PANEL PINTU DUA BELAH (GATEFOLD) WARNA BURGUNDY POLOS / DEEP MAROON
          - Panel pintu kiri dan kanan dengan warna merah hati gelap (deep maroon plain)
          - Kemasan renda bunga putih berkerawang di kedua-dua belah sisi tepi
          - Jambangan orkid ungu & anthurium burgundy asli yang menawan
         --------------------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-10 flex overflow-hidden pointer-events-none">
        {/* Daun Pintu Kiri (Membuka ke kiri) */}
        <div
          className={`w-1/2 h-full relative overflow-hidden transition-all duration-1000 ease-in-out origin-left ${
            isOpening ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
          style={{
            boxShadow: 'inset -10px 0 28px rgba(0, 0, 0, 0.65)',
          }}
        >
          <img
            src={gambar1LeftDoor}
            alt="Daun Pintu Kiri Burgundy Renda & Orkid"
            className="w-full h-full object-cover filter brightness-[0.98] contrast-105"
          />
          {/* Garisan bayang halus celah pintu tengah */}
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-black/70 to-transparent" />
        </div>

        {/* Daun Pintu Kanan (Membuka ke kanan) */}
        <div
          className={`w-1/2 h-full relative overflow-hidden transition-all duration-1000 ease-in-out origin-right ${
            isOpening ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
          style={{
            boxShadow: 'inset 10px 0 28px rgba(0, 0, 0, 0.65)',
          }}
        >
          <img
            src={gambar1RightDoor}
            alt="Daun Pintu Kanan Burgundy Renda & Orkid"
            className="w-full h-full object-cover filter brightness-[0.98] contrast-105"
          />
          {/* Garisan bayang halus celah pintu tengah */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------
          2. MOHOR EMAS BUJUR BERTEKSTUR TIMBUL (EMBOSSED ANTIQUE GOLD WAX SEAL)
          - Mohor emas bujur klasik antik timbul
          - Initial huruf "AS" menggunakan kaligrafi klasik (Pinyon Script) berona gangsa keemasan timbul
         --------------------------------------------------------------------------------- */}
      <div
        className={`relative z-30 flex flex-col items-center justify-center transition-all duration-700 ${
          isOpening ? 'scale-110 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        <button
          onClick={handleOpenClick}
          className="group relative flex flex-col items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Tekan Mohor Emas AS Untuk Buka Kad"
        >
          {/* Bekas Mohor Emas Bujur Timbul */}
          <div
            className={`relative w-36 h-48 sm:w-40 sm:h-52 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 active:scale-95 ${
              isOpening ? 'animate-seal-succession' : ''
            }`}
          >
            {/* Bayang lembut luaran mohor emas antik */}
            <div
              className="absolute inset-1 rounded-[50%/60%] pointer-events-none"
              style={{
                boxShadow: '0 20px 35px -5px rgba(0, 0, 0, 0.8), 0 8px 16px -2px rgba(0, 0, 0, 0.6)',
              }}
            />

            {/* Gambar mohor emas bujur bertekstur timbul (embossed antique gold) */}
            <img
              src={goldSealBase}
              alt="Mohor Emas Bujur Bertekstur Timbul"
              className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] select-none pointer-events-none"
            />

            {/* Ukiran Inisial Huruf "AS" Kaligrafi Klasik (Pinyon Script) Berona Gangsa Keemasan Timbul */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none pt-0.5">
              <div className="relative flex flex-col items-center justify-center -space-y-4">
                {/* Huruf A (Amar) - Kaligrafi Klasik Pinyon Script */}
                <span
                  className="font-pinyon text-5xl sm:text-6xl font-bold leading-none select-none z-10"
                  style={{
                    color: '#341d01',
                    textShadow: `
                      -1px -1px 1px rgba(255, 240, 180, 0.9),
                      1px 2px 3px rgba(15, 8, 1, 0.98),
                      0 0 2px rgba(255, 245, 200, 0.7)
                    `,
                  }}
                >
                  A
                </span>

                {/* Huruf S (Syuhada) - Kaligrafi Klasik Pinyon Script */}
                <span
                  className="font-pinyon text-5xl sm:text-6xl font-bold leading-none select-none"
                  style={{
                    color: '#3d2503',
                    textShadow: `
                      -1px -1px 1px rgba(255, 235, 175, 0.85),
                      1px 2px 3px rgba(20, 10, 2, 0.95),
                      0 0 1px rgba(255, 245, 200, 0.6)
                    `,
                  }}
                >
                  S
                </span>
              </div>
            </div>
          </div>

          {/* Lencana Petunjuk di Bawah Mohor */}
          <div className="mt-5 px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-amber-300/40 text-amber-200 text-xs font-medium flex items-center gap-1.5 shadow-xl group-hover:bg-[#680b18] group-hover:text-white transition-all duration-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            <span>Sentuh Mohor Untuk Buka Kad</span>
          </div>
        </button>
      </div>
    </div>
  );
};
