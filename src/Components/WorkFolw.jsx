import React from 'react';

const WorkFlow = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner with Gradient */}
        <div className=" custom-gradient rounded-[40px] py-16 px-6 md:py-24 text-center text-white shadow-xl">
          
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready To Transform Your Workflow?
          </h2>

          {/* Subtitle */}
          <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter. 
            Start your free trial today.
          </p>

          {/* Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="bg-white text-[#8B2CF5] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto text-lg">
              Explore Products
            </button>
            <button className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-lg">
              View Pricing
            </button>
          </div>

          {/* Trust Badges / Info */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-purple-200 text-sm md:text-base opacity-90">
            <span>14-day free trial</span>
            <span className="hidden sm:inline">•</span>
            <span>No credit card required</span>
            <span className="hidden sm:inline">•</span>
            <span>Cancel anytime</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;