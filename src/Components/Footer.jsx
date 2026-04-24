import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-10">
      <section className='container mx-auto flex flex-col lg:flex-row justify-between gap-10 mt-7 mb-10'>
        
        <nav className="text-center lg:text-left">
          <h3 className='text-3xl font-bold'>DigiTols</h3>
          <p className='text-[16px] text-[#ffffff]/80 mt-4'>
            Premium digital tools for creators,<br className="hidden lg:block" /> 
            professionals, and businesses. Work smarter <br className="hidden lg:block" /> 
            with our suite of powerful tools.
          </p>
        </nav>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:gap-20 gap-8">
          <nav className='flex flex-col gap-2'>
            <h6 className="text-[20px] text-[#ffffff] font-semibold mb-2">Product</h6>
            <a className="link link-hover text-[#ffffff]/80">Features</a>
            <a className="link link-hover text-[#ffffff]/80">Pricing</a>
            <a className="link link-hover text-[#ffffff]/80">Templates</a>
            <a className="link link-hover text-[#ffffff]/80">Integrations</a>
          </nav>

          <nav className='flex flex-col gap-2'>
            <h6 className="text-[20px] text-[#ffffff] font-semibold mb-2">Company</h6>
            <a className="link link-hover text-[#ffffff]/80">About</a>
            <a className="link link-hover text-[#ffffff]/80">Blog</a>
            <a className="link link-hover text-[#ffffff]/80">Careers</a>
            <a className="link link-hover text-[#ffffff]/80">Press</a>
          </nav>

          <nav className='flex flex-col gap-2'>
            <h6 className="text-[20px] text-[#ffffff] font-semibold mb-2">Resources</h6>
            <a className="link link-hover text-[#ffffff]/80">Documentation</a>
            <a className="link link-hover text-[#ffffff]/80">Help Center</a>
            <a className="link link-hover text-[#ffffff]/80">Community</a>
            <a className="link link-hover text-[#ffffff]/80">Contact</a>
          </nav>
        </div>

        <nav className="flex flex-col items-center lg:items-start">
          <h6 className="text-[20px] text-[#ffffff] mb-4">Social</h6>
          <div className="flex gap-4">
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


      <section className='mt-8 container mx-auto border-t border-gray-700 pt-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-center'>
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className='flex gap-4 md:gap-6'>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;