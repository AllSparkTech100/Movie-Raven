
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaSearch } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-[#181B20] text-white mt-12">
      {/* Trial Banner */}
      <div className="w-full bg-yellow-400 py-8 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181B20] mb-2">TRIAL START FIRST 30 DAYS.</h2>
          <p className="text-[#181B20] text-base">Enter your email to create or restart your membership.</p>
        </div>
        <form className="flex items-center w-full max-w-md lg:max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-lg border-none outline-none text-black text-base"
          />
          <button type="submit" className="bg-[#181B20] text-yellow-400 font-bold px-6 py-3 rounded-r-lg border-none hover:bg-black transition">GET STARTED</button>
        </form>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Logo & Nav */}
          <div className="flex flex-col items-center lg:items-start gap-6 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
                {/* Logo Icon */}
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#181B20" /><circle cx="12" cy="12" r="7" fill="#E6C800" /><circle cx="12" cy="12" r="3" fill="#181B20" /></svg>
              </span>
              <span className="text-2xl font-bold text-white">Movflix</span>
            </div>
            <nav className="flex flex-wrap gap-4 text-base font-semibold">
              <a href="#" className="hover:text-yellow-400">HOME</a>
              <a href="#" className="hover:text-yellow-400">MOVIE</a>
              <a href="#" className="hover:text-yellow-400">TV SHOW</a>
              <a href="#" className="hover:text-yellow-400">PAGES</a>
              <a href="#" className="hover:text-yellow-400">PRICING</a>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col items-center lg:items-end gap-4 flex-1">
            <form className="flex items-center w-full max-w-xs">
              <input
                type="text"
                placeholder="Find Favorite Movie"
                className="flex-1 px-4 py-3 rounded-l-full border-none outline-none text-black text-base"
              />
              <button type="submit" className="bg-[#181B20] text-yellow-400 px-4 py-3 rounded-r-full border-none flex items-center justify-center">
                <FaSearch className="w-5 h-5" />
              </button>
            </form>
            <div className="flex gap-3 mt-2">
              <a href="#" className="bg-[#23262b] rounded-full w-8 h-8 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"><FaFacebookF /></a>
              <a href="#" className="bg-[#23262b] rounded-full w-8 h-8 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"><FaTwitter /></a>
              <a href="#" className="bg-[#23262b] rounded-full w-8 h-8 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"><FaPinterestP /></a>
              <a href="#" className="bg-[#23262b] rounded-full w-8 h-8 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-400 text-sm">
          <a href="#" className="hover:text-yellow-400">FAQ</a>
          <a href="#" className="hover:text-yellow-400">HELP CENTER</a>
          <a href="#" className="hover:text-yellow-400">TERMS OF USE</a>
          <a href="#" className="hover:text-yellow-400">PRIVACY</a>
        </div>
      </div>

      {/* Copyright & Payment Icons */}
      <div className="w-full bg-[#181B20] border-t border-gray-800 py-4 px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-gray-400 text-sm">Copyright © 2021. All Rights Reserved By <span className="text-yellow-400">Movflix</span></span>
        <div className="flex gap-2 mt-2 md:mt-0">
          {/* Payment icons - use placeholder images or SVGs */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Ebay_logo.svg" alt="eBay" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Discover_Card_logo.svg" alt="Discover" className="h-6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer