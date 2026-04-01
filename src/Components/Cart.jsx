import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {
  const totalPrice = carts.reduce((sum, item)=> sum + item.price,0);
  
  const handlePayment =()=>{
    setCarts([])
    toast.success("Payment Successful")
  }

  const handleDelect = (item)=>{
    const filterArray = carts.filter(c=> c.id !== item.id) 
    setCarts(filterArray);
  }
  return (
    <div>
      <div className='container border border-gray-300 rounded-2xl p-6 m-8'>
        <h2 className='text-[24px] font-bold mx-3 mb-4'>Your Carts:</h2>

        {carts.length === 0 ? <p className=' font-bold text-2xl text-center items-center'> The cart is Emty</p>: 
        
        <>
        {carts.map(item=> 
      <div key={item.name} className=' border border-gray-400 mx-3 p-8 mb-4 bg-[#f9fafc] rounded-lg'>
        <div>
          <div className=' flex justify-between'>
          <div className='flex gap-5 items-center justify-center '>
            <div className='border border-gray-300 p-3 rounded-full'>
            <img className='w-20 h-20 rounded-full p-2 bg-[#ffffff] ' src={item.icon} alt="" />
          </div>
          <div>
            <h2 className='text-[24px] font-semibold'>{item.name}</h2>
            <p className='text-[20px] font-semibold'>${item.price}</p>
          </div>
          </div>
          
          
          <div>
            <button onClick={()=> handleDelect(item)}  className=' btn bg-red-200 text-[#f92170] text-[16px] font-semibold' >Remove</button>
          </div>
        </div>
        </div>
        
      </div>
        
        
      )}
      <div className='flex justify-between mx-4 mb-4'>
        <h2>Total</h2>
        <p className='text-[24px] font-bold mr-2'>${totalPrice}</p>
      </div>
      <button onClick={handlePayment} className='btn custom-gradient w-full rounded-full  text-[16px] font-bold text-[#ffffff] mb-3'>Proceed to Checkout</button>
        </>}
    
    
      </div>
    </div>
  );
};

export default Cart;