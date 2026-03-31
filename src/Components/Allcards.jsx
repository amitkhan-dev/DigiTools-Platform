import React, { use, useState } from 'react';
import Cards from './Cards';

const Allcards = ({fetchPromise}) => {
  const [isSubscribe, setIsSubscribe] = useState( false);  
  const allCards= use(fetchPromise);

  return (
    <div className="container mx-auto max-w-7xl">
      <div className='py-30 text-center'>
        <h2  className='text-5xl font-bold text-[#101727] mb-4 '>Premium Digital Tools</h2>
        <p>Choose from our curated collection of premium digital products <br /> designedto boost your productivity and creativity.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:mx-auto lg:grid-cols-3 gap-4 mb-4'>
        {allCards.map(card=>
          <Cards card={card}/>)}
      </div>
    </div>
  );
};

export default Allcards;