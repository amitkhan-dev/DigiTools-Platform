import React from 'react';

const BelowBanner = () => {
  return (
    <div className='custom-gradient py-10'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 max-w-7xl mx-auto px-4'>
    
        <div className='flex flex-col items-center md:items-start text-center   md:text-left'>
          <h3 className='text-[#ffffff] font-bold text-[36px] md:text-[50px]'>50K+</h3>
          <p className='text-[18px] md:text-[24px] text-[#ffffff]/80 font-medium'>Active Users</p>
        </div>
          {/* Divider */}
        <div className="hidden md:flex divider divider-horizontal h-16 self-center before:bg-white/30 after:bg-white/30"></div>
        <div className="md:hidden divider w-1/2 mx-auto before:bg-white/30 after:bg-white/30"></div>

    
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <h3 className='text-[#ffffff] font-bold text-[36px] md:text-[50px]'>200+</h3>
          <p className='text-[18px] md:text-[24px] text-[#ffffff]/80 font-medium'>Premium Tools</p>
        </div>

       {/* Divider  */}
        <div className="hidden md:flex divider divider-horizontal h-16 self-center before:bg-white/30 after:bg-white/30"></div>
        <div className="md:hidden divider w-1/2 mx-auto before:bg-white/30 after:bg-white/30"></div>

      <div className='flex flex-col items-center md:items-start text-center md:text-left'>
        <h3 className='text-[#ffffff] font-bold text-[36px] md:text-[50px]'>4.9</h3>
        <p className='text-[18px] md:text-[24px] text-[#ffffff]/80 font-medium'>Rating</p>
      </div>

  </div>
</div>
  );
};

export default BelowBanner;