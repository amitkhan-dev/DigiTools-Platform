import React from 'react';
import bannerImg from '../assets/banner.png';
import { LucideDot, Play } from 'lucide-react';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className=" flex max-w-300 items-center justify-center gap-5 p-2 flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl"/>
          <div className=''>
            <button className="bg-[#e1e7ff] hover:bg-[#d5dcff] transition-colors duration-300 px-1.5  py-1 rounded-full flex items-center mb-8" > <LucideDot size={40} strokeWidth={6} className="text-[#4f39f6] animate-pulse"/><span className='px-2 bg-[#e1e7ff] rounded-full text-[16px] text-gradient'> New: AI-Powered Tools Available</span> </button>
              <div>
                <h1 className="text-5xl mx-w-50 font-bold">Supercharge Your Digital Workflow</h1>
                <p className="py-6 text-[#627382]">
                  Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
                </p>
                <div className='flex gap-4'>
                  <button className="btn btn-primary rounded-full custom-gradient">Explore Products</button>
                  <button className="btn transparent rounded-full border border-blue-600 "><Play size={25} strokeWidth={0.75} />  <span className='text-gradient'>Watch Demo</span></button>
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
  );
};

export default Banner;