import React from 'react';
import { clownImg, shotman } from '../assets/Images';
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
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
          loading='lazy'
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
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl px-3 py-16">
          {/* Left: Text */}
          <div className="flex-1 text-left lg:-ms-5 text-white">
            <h2 className="text-[#E6C800] text-xl font-bold mb-2"> Movie-Raven</h2>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Unlimited <span className="text-[#E6C800]">Movie</span>,<br />
              TVs Shows, & More.
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-white text-[#181B20] font-bold px-3 py-2 text-xs">PG 18</span>
              <span className="bg-transparent border-white border-[2px] text-white font-bold px-3 py-1 text-xs">HD</span>
              <span className="text-gray-300 text-sm">Romance, Drama</span>
              <span className="flex items-center justify-center gap-2 text-gray-300 text-sm">
                <FaCalendarAlt className='text-yellow-500' size={20} />
                2021
              </span>
              <span className="flex items-center justify-center gap-2 text-gray-300 text-sm">
                <MdOutlineAccessTime className='text-yellow-500' size={20} />
                128 min
              </span>
            </div>
            <button className="mt-2 px-8 py-3 rounded-full border-2 border-[#E6C800] text-white font-bold text-lg flex items-center gap-2 hover:bg-[#E6C800] hover:text-[#181B20] lg:hover:border-0 lg:cursor-pointer transition">
              <FaPlay size={20}/>
              WATCH NOW
            </button>
          </div>

        </div>
      </section>

      <section className="mt-10">
        <Upcoming />
      </section>

      <section>
        <ServicesSection />
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
         </div>
        </div>
      </section>
      {/* World Best TV Series Section */}
      <section className="w-full bg-[#181B20] py-12 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-8">
            <span className="uppercase text-xs text-yellow-400 tracking-widest font-semibold">Best TV Series</span>
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-2">World Best TV Series</h2>
          </div>
          <Upcoming />
        </div>
      </section>
    </>
  );
}

export default Home;