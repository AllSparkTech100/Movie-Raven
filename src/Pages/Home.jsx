import React from 'react';
import { clownImg, shotman } from '../assets/Images';
import Upcoming from '../Components/Upcoming';
import ServicesSection from '../Components/ServicesSection';

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

      <section>
        <ServicesSection/>
      </section>
      {/* New Section: Live Movie & TV Shows For Friends & Family */}
      <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center h-full">
            <div className="mb-2 flex items-center gap-2">
              <span className="w-8 h-1 bg-yellow-400 inline-block rounded-full"></span>
              <span className="uppercase text-xs text-gray-500 tracking-widest font-semibold">Online Streaming</span>
            </div>
            <h2 className="text-black font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-2">
              Live Movie & TV Shows For<br />Friends & Family
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elseddo eiusmod tempor. There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.
            </p>
            <div className="flex flex-wrap items-center gap-8 mb-8">
              <span className="text-5xl sm:text-6xl font-extrabold text-[#E6C800] border-2 border-[#E6C800] px-4 py-2 rounded-lg">HD 4K</span>
              <div>
                <span className="text-3xl font-bold text-black">20K+</span><br />
                <span className="text-base font-semibold text-black">Active Customer</span>
              </div>
            </div>
            <button className="bg-[#E6C800] text-black font-bold rounded-full px-8 py-3 shadow-lg flex items-center gap-2 hover:bg-yellow-500 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="currentColor" /></svg>
              WATCH NOW
            </button>
          </div>
          {/* Right: Image */}
          <div className="flex items-center justify-center w-full">
            <img
              src={clownImg}
              alt="Friends watching TV"
              className="w-full max-w-xl rounded-xl object-cover"
            />
            <button className="absolute bottom-8 right-8 bg-[#E6C800] text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;