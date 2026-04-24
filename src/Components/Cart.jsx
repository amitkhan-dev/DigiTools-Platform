import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful");
  };

  const handleDelect = (item) => {
    const filterArray = carts.filter(c => c.id !== item.id);
    setCarts(filterArray);
    toast.error("Item removed from cart");
  };

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='container border border-gray-300 rounded-2xl p-4 md:p-8 my-10 bg-white shadow-sm'>
        
        <h2 className='text-2xl md:text-3xl font-bold mb-6 text-gray-800'>Your Cart:</h2>

        {carts.length === 0 ? (
          <div className='py-20 text-center'>
            <p className='font-bold text-2xl text-gray-400'>The cart is empty</p>
          </div>
        ) : (
          <>
            {carts.map(item => (
              <div key={item.id} className='border border-gray-100 p-4 md:p-6 mb-4 bg-[#f9fafc] rounded-xl'>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                  
                  <div className='flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left'>
                    <div className='border border-gray-200 p-2 rounded-2xl bg-white shadow-sm'>
                      <img 
                        className='w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg' 
                        src={item.icon} 
                        alt={item.name} 
                      />
                    </div>
                    <div>
                      <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>{item.name}</h2>
                      <p className='text-lg md:text-xl font-medium text-gray-600 mt-1'>Price: ${item.price}</p>
                    </div>
                  </div>

              
                  <div className='w-full sm:w-auto'>
                    <button 
                      onClick={() => handleDelect(item)}  
                      className='btn bg-red-50 hover:bg-red-100 border-red-200 text-[#f92170] w-full sm:w-auto px-6 font-bold'
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className='mt-8 pt-6 border-t border-gray-200'>
              <div className='flex justify-between items-center px-2 mb-6'>
                <h2 className='text-xl font-medium text-gray-700'>Total Amount:</h2>
                <p className='text-2xl md:text-3xl font-extrabold '>${totalPrice}</p>
              </div>
              <button 
                onClick={handlePayment} 
                className='btn bg-blue-600 hover:bg-blue-700 w-full rounded-full text-lg font-bold text-white py-3 shadow-lg transition-all border-none'
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;