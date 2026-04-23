import React from 'react';


const Footer = () => {
  return (
    <footer className="  sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <section className='container mx-auto flex justify-between gap-2 mt-7 mb-10'>
        <nav>
        <h3 className='text-3xl'>DigiTols</h3>
        <p className='text-[16px] text-[#ffffff]/80'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br/> with our suite of powerful tools.</p>
      </nav>

      <nav className='flex flex-col'>
        <h6 className=" text-[20px] text-[#ffffff] mb-2">Product</h6>
        <a className="link link-hover text-[#ffffff]/80">Features</a>
        <a className="link link-hover text-[#ffffff]/80">Pricing</a>
        <a className="link link-hover text-[#ffffff]/80">Templates</a>
        <a className="link link-hover text-[#ffffff]/80">Integrations</a>
      </nav>
      <nav className='flex flex-col'>
        <h6 className=" text-[20px] text-[#ffffff] mb-2">Company</h6>
        <a className="link link-hover text-[#ffffff]/80">About </a>
        <a className="link link-hover text-[#ffffff]/80">Blog</a>
        <a className="link link-hover text-[#ffffff]/80">Careers</a>
        <a className="link link-hover text-[#ffffff]/80">Press</a>
      </nav>
      <nav className='flex flex-col'>
        <h6 className=" text-[20px] text-[#ffffff] mb-2">Resources</h6>
        <a className="link link-hover text-[#ffffff]/80">Documentation</a>
        <a className="link link-hover text-[#ffffff]/80">Help Center</a>
        <a className="link link-hover text-[#ffffff]/80">Community</a>
        <a className="link link-hover text-[#ffffff]/80">Contact</a>
      </nav>
      <nav>
    <h6 className="text-[20px] text-[#ffffff] mb-2">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110">

      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>
    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>

    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="black">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
      </svg>
    </a>
</div>
  </nav>
      </section>

      
  <section className='mt-8 container mx-auto'>
  <div className=" bg-gray-800 mt-7"> <hr/></div>
  <div>
    
  </div>
  <div className='flex justify-between mt-7 items-center text-center '>
    <div className=''>
    <p>© 2026 Digitools. All rights reserved.</p>
  </div>
  <div>
    <div className='flex gap-4'>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
      <p>Cookies</p>
    </div>
  </div>
  </div>
  
  
  </section>
  </footer>
    
  );
};

export default Footer;