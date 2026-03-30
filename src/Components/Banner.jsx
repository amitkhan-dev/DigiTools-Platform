import React from 'react';
import bannerImg from '../assets/banner.png';
import { LucideDot, Play } from 'lucide-react';

const Banner = () => {
  return (
    <div>
      <div className="bg-white min-h-screen flex items-center py-12 px-6">
  <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
    
    {/* Left Side: Content */}
    <div className="w-full lg:w-1/2 text-left flex flex-col items-start">
      
      <div className="bg-[#eef2ff] px-4 py-1.5 rounded-full flex items-center gap-2 mb-6 self-start">
        <LucideDot size={32} strokeWidth={8} className="text-[#6366f1] animate-pulse" />
        <span className="text-[#6366f1] text-[13px] font-bold">
          New: AI-Powered Tools Available
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4">
        Supercharge Your <br /> Digital Workflow
      </h1>
      <p className="text-[#64748b] text-base md:text-lg max-w-lg mb-8 leading-relaxed">
        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button className=" btn custom-gradient border-none text-white rounded-full px-8 ">
          Explore Products
        </button>
        
        <button className="btn transparent rounded-full border border-blue-600 "><Play size={25} strokeWidth={0.75} />  <span className='text-gradient'>Watch Demo</span></button>
      </div>
    </div>

    {/* Right Side */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <div className="relative group">
        <img 
          src={bannerImg} 
          className="w-full max-w-[500px] rounded-3xl shadow-xl border border-gray-100 transition-transform hover:scale-105 duration-300" 
          alt=" Banner"
        />
      </div>
    </div>

  </div>
</div>
    </div>
  );
};

export default Banner;