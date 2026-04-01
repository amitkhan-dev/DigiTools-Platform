import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Cards = ({card ,carts, setCarts}) => {
  const [isSubscribe, setIsSubscribe] = useState( false);
  // console.log(carts)
  const handleSubscribe = ()=>{
    setIsSubscribe( true); 

    const isFound = carts.find(item=> item.id=== card.id)

    if(isFound){
      toast.error(`${card.name } Already add to Cart`)
      return
    }

    setCarts([...carts, card]);
    toast.success(`${card.name } add to Cart`)
    
  }
  return (
    <div>
      <div key={card.id} >
          <div className="card w-96 bg-base-100 shadow-sm border border-green-500 transition-transform hover:scale-105 duration-300">
            <div className="card-body">
              <div className='relative '>
                <img src={card.icon} className='h-15 w-15 rounded-full border border-gray-200 p-2' alt="" />
                <div className="absolute top-4 right-4">
                  <span className={`badge badge-xs p-2 font-semibold ${
                    card.tagType === 'best-seller' ? 'badge-error text-white' : 
                    card.tagType === 'popular' ? 'badge-warning' : 
                    'badge-success text-white'}`}>{card.tag}</span>
                  </div>
                </div>
              <div className="">
                <div>
                  <h2 className="text-3xl font-bold">{card.name}</h2>
                  <p>{card.description}</p>
                  </div>
              
                  <span className="text-xl">$ {card.price}/month</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>{card.features[0]}</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span><span>{card.features[1]}</span></span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span><span>{card.features[2]}</span></span>
      </li>
    </ul>
    <div className="mt-6">
      <button onClick={handleSubscribe} className="btn custom-gradient w-full rounded-full text-white hover:text-[16px] hover:text-red-100 ">{ isSubscribe ?"SubsCribe":"Subscribe Now"}</button>
    </div>
  </div>
          </div>
          </div>
    </div>
  );
};

export default Cards;