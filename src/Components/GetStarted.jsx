import React from 'react';
import userIcon from '../assets/user.png';
import productIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const data = [
  {
    number: '01',
    icon: userIcon, // এখানে স্ট্রিং 'userIcon' না দিয়ে সরাসরি ভেরিয়েবল দিবেন
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    icon: productIcon,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    icon: rocketIcon,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
];

const GetStarted = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-3xl p-10 md:p-12 shadow-md w-full max-w-sm md:max-w-none hover:shadow-lg transition-shadow duration-300">
              
              <div className="absolute top-6 right-6 bg-[#6B21A8] text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded-full">
                {item.number}
              </div>
              <div className="bg-[#FAF5FF] w-32 h-32 rounded-full flex items-center justify-center mb-10 mx-auto">
              
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-16 h-16 object-contain" 
                />
              </div>

              
              <div className="text-center mt-6">
                <h3 className="text-2xl font-semibold text-gray-950 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;