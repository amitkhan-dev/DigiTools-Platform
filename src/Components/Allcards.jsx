import React, { use } from 'react';
import Cards from './Cards';
import SelectTab from './SelectTab';


const Allcards = ({fetchPromise,carts,setCarts}) => {
  

  const allCards= use(fetchPromise);

  return (
    <div className="container mx-auto max-w-7xl">
      
      
      <div className='contaoner mx-auto grid grid-cols-1 md:grid-cols-2 md:mx-auto lg:grid-cols-3 gap-4 mb-4'>
        
        {allCards.map(card=>
          <Cards key={card.id} card={card} 
          carts={carts}
          setCarts={setCarts}
          />)}
      </div>
    </div>
  );
};

export default Allcards;