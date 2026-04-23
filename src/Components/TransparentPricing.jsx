import React from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for getting started',
    price: '0',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    buttonText: 'Get Started Free',
    isPro: false,
  },
  {
    name: 'Pro',
    subtitle: 'Best for professionals',
    price: '29',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    buttonText: 'Start Pro Trial',
    isPro: true, 
  },
  {
    name: 'Enterprise',
    subtitle: 'For teams and businesses',
    price: '99',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    buttonText: 'Contact Sales',
    isPro: false,
  },
];

const TransparentPricing = () => {
  return (
    <section className="bg-[#F9FAFB] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative flex flex-col p-8 rounded-3xl w-full max-w-sm h-full transition-all duration-300 ${ plan.isPro ? 'custom-gradient text-white shadow-2xl scale-105 z-10' : 'bg-white text-gray-900 border border-gray-100 shadow-sm'
          }`}>
              {/* badge */}
              {plan.isPro && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-4 py-1 rounded-full shadow-sm"> Most Popular</div>
                )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold ${plan.isPro ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              
                <p className={`text-sm mt-2 ${plan.isPro ? 'text-purple-100' : 'text-gray-500'}`}> {plan.subtitle}
                  
                </p>
              </div>

              <div className="mb-8">
                <p className="text-5xl font-bold">${plan.price}</p>
                <p className={`text-lg ${plan.isPro ? 'text-purple-100' : 'text-gray-400'}`}>/Month</p>
              </div>

              <ul className=" grow space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                  
                    <svg
                      className={`w-5 h-5 shrink-0 ${plan.isPro ? 'text-white' : 'text-green-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm opacity-90">{feature}</p>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${ plan.isPro ? 'bg-white text-[#8B2CF5] hover:bg-gray-50 rounded-full'
              : 'custom-gradient text-white hover:bg-purple-700 rounded-full'}`}>{plan.buttonText} </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparentPricing;