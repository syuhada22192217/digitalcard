import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import coupleWalkingGarden from '../assets/images/pengantinasal.jpg';
import ringExchangeMirrorBg from '../assets/images/newcermin.jpg';
import frameTallBurgundy from '../assets/images/frame_tall_burgundy_1792597275647.jpg';
import frameBurgundyLace from '../assets/images/frame_burgundy_lace_1792597245969.jpg';

interface BrideGroomSectionProps {
  themeStyle: 'emerald' | 'white';
}

export const BrideGroomSection: React.FC<BrideGroomSectionProps> = ({ themeStyle }) => {
  const isEmerald = themeStyle === 'emerald';

  return (
    <div className={`relative transition-colors duration-500 ${isEmerald ? 'bg-[#3b4728] text-white' : 'bg-[#3b4728] text-white'}`}>
      {/* -------------------------------------------------------------
          1. HEADER MIRROR REVEAL (Menyarung Cincin di Dalam Cermin Emas)
          Requirement 4: Tulisan "Amar & Syuhada" di dalam screenshot diubah kepada warna putih
         ------------------------------------------------------------- */}
      <div className="relative pt-6 pb-10 px-4 text-center overflow-hidden">
        {/* Background foliage */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={ringExchangeMirrorBg}
            alt="Latar Cermin"
            className="w-full h-full object-cover filter blur-xs"
          />
        </div>

        {/* Floating Bokeh Fairy Lights */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute w-3 h-3 rounded-full bg-amber-200/50 blur-[1px] animate-petal" style={{ left: '15%', top: '25%', animationDuration: '8s' }} />
          <div className="absolute w-4 h-4 rounded-full bg-amber-100/40 blur-[1px] animate-petal" style={{ left: '80%', top: '30%', animationDuration: '10s', animationDelay: '1.5s' }} />
          <div className="absolute w-2 h-2 rounded-full bg-white/60 blur-[1px] animate-petal" style={{ left: '50%', top: '65%', animationDuration: '12s', animationDelay: '3s' }} />
        </div>

        {/* Ornate Gold Mirror Frame Container with Menyarung Cincin reflection */}
        <div className="relative z-20 max-w-[340px] sm:max-w-sm mx-auto shadow-2xl rounded-[160px] overflow-hidden border-4 border-amber-300/80 p-2 bg-gradient-to-b from-amber-100/30 via-transparent to-amber-900/30">
          <div className="relative rounded-[150px] overflow-hidden aspect-[9/14] flex flex-col items-center justify-between p-6 text-center shadow-inner">
            <img
              src={ringExchangeMirrorBg}
              alt="Cermin Pengantin Menyarung Cincin"
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]" />

            {/* Top Text inside mirror */}
            <div className="relative z-10 pt-4">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-200 font-serif font-bold drop-shadow-md">
                Walimatul Urus
              </span>
            </div>

            {/* Center Names in Pure White with deep shadow (Requirement 4: tukarkan kepada tulisan warna putih) */}
            <div className="relative z-10 my-auto py-2">
              <h1 className="name1 font-script text-5xl sm:text-6xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-none font-bold inline-flex items-baseline justify-center tracking-wide">
                <span className="font-pinyon text-6xl sm:text-7xl font-bold -mr-0.5 inline-block transform scale-110">A</span>
                <span>mar</span>
              </h1>
              <span className="and font-script text-2xl text-white my-1 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-bold">
                &
              </span>
              <h1 className="name2 font-script text-5xl sm:text-6xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-none font-bold tracking-wide">
                {WEDDING_DATA.bride.shortName}
              </h1>
            </div>

            {/* Bottom Date inside mirror */}
            <div className="relative z-10 pb-4">
              <p className="cover-date font-serif text-sm font-bold text-amber-100 drop-shadow-md tracking-wider">
                Jumaat • 01.01.2027
              </p>
              <p className="text-[11px] text-amber-200/90 tracking-wide font-medium">
                {WEDDING_DATA.event.dateHijri}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. INVITATION DETAILS BODY (Harmonious Botanical Color Palette)
         ------------------------------------------------------------- */}
      <div className="relative py-10 px-3 sm:px-4 text-center overflow-hidden border-t bg-[#3b4728] border-amber-300/20 text-white">
        <div className="relative z-20 max-w-md mx-auto space-y-7">

          {/* -------------------------------------------------------------
              FRAME DESIGN SEPERTI GAMBAR2.JPG UNTUK KOTAK NAMA IBU BAPA
              (Requirement 1: bahagian kotak nama ibu bapa pengantin lelaki dan ibu bapa pengantin perempuan, letakkan frame design seperti gambar2.jpg)
             ------------------------------------------------------------- */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-300/40 bg-[#360714] text-white">
            {/* Background artwork: Scalloped burgundy embroidered lace, beads, orchids & butterflies */}
            <img
              src={frameTallBurgundy}
              alt="Bingkai Renda Burgundy Gambar 2"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.98] contrast-105"
            />
            {/* Center burgundy overlay to ensure readability */}
            <div className="absolute inset-0 bg-[#360714]/65 backdrop-blur-[0.5px]" />

            {/* Content inside the frame */}
            <div className="relative z-10 px-5 py-7 sm:px-8 sm:py-9 space-y-5">
              {/* Islamic Calligraphy & Bismillah Header as seen in gambar2.jpg */}
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-serif-luxury tracking-wide text-amber-100 drop-shadow-md" dir="rtl">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-amber-200/90 pt-1">
                  ASSALAMUALAIKUM W.B.T.
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-stone-200/90">
                  DENGAN NAMA ALLAH YANG MAHA PEMURAH & MAHA PENYAYANG
                </p>
              </div>

              {/* Decorative separator */}
              <div className="flex items-center justify-center gap-2 max-w-[180px] mx-auto opacity-70">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
                <span className="text-amber-300 text-xs">❦</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
              </div>

              {/* Ibu Bapa Pengantin Lelaki */}
              <div className="space-y-1">
                <p className="parent_name text-base sm:text-lg font-serif font-bold text-white tracking-wide uppercase leading-snug drop-shadow-sm">
                  {WEDDING_DATA.groom.father}
                </p>
                <p className="text-xs font-serif text-amber-300 font-bold">&</p>
                <p className="parent_name text-base sm:text-lg font-serif font-bold text-white tracking-wide uppercase leading-snug drop-shadow-sm">
                  {WEDDING_DATA.groom.mother}
                </p>
                <span className="inline-block mt-1 text-[10px] uppercase tracking-wider font-semibold text-amber-200/90 bg-black/40 px-3 py-0.5 rounded-full border border-amber-300/30">
                  Ibu Bapa Pengantin Lelaki
                </span>
              </div>

              {/* Bersama divider */}
              <p className="font-script text-2xl text-amber-300 font-bold my-1 drop-shadow-sm">
                bersama
              </p>

              {/* Ibu Bapa Pengantin Perempuan */}
              <div className="space-y-1">
                <p className="parent_name text-base sm:text-lg font-serif font-bold text-white tracking-wide uppercase leading-snug drop-shadow-sm">
                  {WEDDING_DATA.bride.father}
                </p>
                <p className="text-xs font-serif text-amber-300 font-bold">&</p>
                <p className="parent_name text-base sm:text-lg font-serif font-bold text-white tracking-wide uppercase leading-snug drop-shadow-sm">
                  {WEDDING_DATA.bride.mother}
                </p>
                <span className="inline-block mt-1 text-[10px] uppercase tracking-wider font-semibold text-amber-200/90 bg-black/40 px-3 py-0.5 rounded-full border border-amber-300/30">
                  Ibu Bapa Pengantin Perempuan
                </span>
              </div>

              {/* Invitation Prose (seperti di gambar2.jpg) */}
              <div className="pt-2 border-t border-amber-300/20 text-center space-y-1">
                <p className="text-[11px] sm:text-xs tracking-wider uppercase text-amber-200/90 font-medium">
                  Dengan Penuh Takzim Ingin Menjemput
                </p>
                <p className="text-xs sm:text-sm font-serif font-bold text-white tracking-widest uppercase">
                  DATO' / DATIN / TUAN / PUAN / ENCIK / CIK
                </p>
                <p className="text-[11px] text-stone-200">
                  ke majlis perkahwinan puteri & putera kami
                </p>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------
              FRAME DESIGN SEPERTI GAMBAR2.JPG UNTUK KOTAK NAMA PASANGAN PENGANTIN
              (Requirement 1: buat juga untuk bahagian nama "pasangan pengantin MUHAMMAD AMAR MUAZZAM BIN MOHD SAYUNI & NUR ALIA SYUHADA BINTI MUSTAFFA")
             ------------------------------------------------------------- */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-300/40 bg-[#360714] text-white">
            {/* Background artwork: Scalloped burgundy embroidered lace, beads, orchids & butterflies */}
            <img
              src={frameBurgundyLace}
              alt="Bingkai Renda Burgundy Pasangan Pengantin"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.98] contrast-105"
            />
            {/* Center burgundy overlay for pristine contrast */}
            <div className="absolute inset-0 bg-[#360714]/65 backdrop-blur-[0.5px]" />

            {/* Content inside the frame */}
            <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 text-center space-y-4">
              <div className="space-y-1">
                <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-amber-300 font-bold px-3 py-0.5 bg-black/40 rounded-full border border-amber-300/30 shadow-xs">
                  Pasangan Pengantin
                </span>
              </div>

              {/* Nama Pengantin Lelaki: MUHAMMAD AMAR MUAZZAM BIN MOHD SAYUNI */}
              <h2 className="name1 font-serif text-base sm:text-xl font-bold tracking-wider text-white uppercase leading-snug drop-shadow-md">
                MUHAMMAD AMAR MUAZZAM BIN MOHD SAYUNI
              </h2>

              {/* Decorative separator */}
              <div className="my-2 flex items-center justify-center gap-3">
                <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
                <span className="font-script text-3xl sm:text-4xl text-amber-300 font-bold drop-shadow-sm leading-none">&</span>
                <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
              </div>

              {/* Nama Pengantin Perempuan: NUR ALIA SYUHADA BINTI MUSTAFFA */}
              <h2 className="name2 font-serif text-base sm:text-xl font-bold tracking-wider text-white uppercase leading-snug drop-shadow-md">
                NUR ALIA SYUHADA BINTI MUSTAFFA
              </h2>

              <p className="text-[11px] text-amber-200/90 font-serif italic pt-1 tracking-wide">
                Moga Mahabbah Berkekalan Hingga Ke Syurga
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          3. FULL BLEED ARTWORK: Pengantin Berjalan di Taman Bunga Burgundy
         ------------------------------------------------------------- */}
      <div className="relative w-full max-w-md mx-auto my-6 px-4">
        <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300/60 shadow-2xl group">
          <img
            src={coupleWalkingGarden}
            alt="Amar & Syuhada Berjalan di Taman Bunga"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5 text-left text-white">
            <p className="font-script text-3xl text-amber-100 leading-tight inline-flex items-baseline">
              <span className="font-pinyon text-4xl font-bold -mr-0.5 inline-block">A</span>
              <span>mar & Syuhada</span>
            </p>
            <p className="text-xs text-stone-200 italic mt-1 leading-relaxed">
              "Semoga ikatan cinta dan kasih sayang ini dikurniakan sakinah, mawaddah, rahmah dan kekal hingga ke syurga"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
