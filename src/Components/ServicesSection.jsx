import { clownImg } from "../assets/Images";

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#181B20] py-8 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left: Image + Download Button in grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="relative bg-white border-8 border-yellow-400 rounded-lg w-[300px] h-[340px] sm:w-[350px] sm:h-[400px] lg:w-[370px] lg:h-[420px] flex items-center justify-center">
            <img
              src={clownImg}
              alt="Clown"
              className="w-2/3 h-2/3 object-contain mx-auto"
            />
            <span className="absolute top-4 right-6 text-black font-semibold text-sm">Only $3.99</span>
            <div className="absolute bottom-8 left-8">
              <div className="text-3xl sm:text-4xl font-bold text-gray-800">HD 4K</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-black">Resolution!</div>
            </div>
          </div>
          <button className="bg-yellow-400 text-black font-semibold rounded-lg px-4 py-2 w-24 h-32 flex flex-col justify-center items-center shadow-lg mx-auto lg:mx-0">
            <span className="transform -rotate-90 tracking-widest text-lg">DOWNLOAD</span>
            <span className="mt-2">↓</span>
          </button>
        </div>

        {/* Right: Text and Features */}
        <div className="flex-1 w-full">
          <div className="mb-2 flex items-center gap-2">
            <span className="w-8 h-1 bg-yellow-400 inline-block rounded-full"></span>
            <span className="uppercase text-xs text-gray-300 tracking-widest font-semibold">Our Services</span>
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-2">
            Download Your Shows<br />Watch Offline.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.
          </p>
          <div className="flex flex-col gap-6">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="border-2 border-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
                {/* TV Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-400">
                  <rect x="3" y="7" width="18" height="12" rx="2" fill="none" stroke="currentColor" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 3l4 4 4-4" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-base sm:text-lg">Enjoy on Your TV.</div>
                <div className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="border-2 border-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
                {/* Group Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-400">
                  <circle cx="8" cy="10" r="3" />
                  <circle cx="16" cy="10" r="3" />
                  <path d="M2 20c0-3.314 5.373-6 12-6s12 2.686 12 6" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-base sm:text-lg">Watch Everywhere.</div>
                <div className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
