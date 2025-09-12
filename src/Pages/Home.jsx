import React from 'react';
import { shotman } from '../assets/Images';
import Upcoming from '../Components/Upcoming';

function Home() {
  return (
    <>
      <section className="relative w-full min-h-[600px] flex items-center justify-center bg-[#181B20] overflow-hidden">
        {/* Single background image */}
        <img
          src={shotman}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          style={{ filter: 'blur(2px) brightness(0.7)' }}
        />
        {/* Glass effect overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'rgba(24, 27, 32, 0.4)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
          }}
        />
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl px-6 py-16">
          {/* Left: Text */}
          <div className="flex-1 text-left text-white">
            <h2 className="text-[#E6C800] text-xl font-bold mb-2">Movflix</h2>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Unlimited <span className="text-[#E6C800]">Movie</span>,<br />
              TVs Shows, & More.
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-white text-[#181B20] font-bold px-3 py-1 rounded text-xs">PG 18</span>
              <span className="bg-white text-[#181B20] font-bold px-3 py-1 rounded text-xs">HD</span>
              <span className="text-gray-300 text-sm">Romance, Drama</span>
              <span className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="#E6C800" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /></svg>
                2021
              </span>
              <span className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="#E6C800" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                128 min
              </span>
            </div>
            <button className="mt-2 px-8 py-3 rounded-full border-2 border-[#E6C800] text-white font-bold text-lg flex items-center gap-2 hover:bg-[#E6C800] hover:text-[#181B20] transition">
              <svg className="w-5 h-5" fill="none" stroke="#E6C800" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="#E6C800" /></svg>
              WATCH NOW
            </button>
          </div>

        </div>
      </section>

      <section className="mt-10">
        <Upcoming />
      </section>
    </>
  );
}

export default Home;