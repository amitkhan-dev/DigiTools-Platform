

const SelectTab = ({activeTab, setActiveTab,carts}) => {
  
  // console.log(products);
  return (
    <div>
      {/* <div className="flex flex-col items-center w-full mt-10">
        <div className="tabs tabs-boxed p-2 bg-gray-100 rounded-lg">
        <input 
            type="radio" 
            name="nav_tabs" 
            className="tab px-6 py-2" 
            aria-label="Products" 
            defaultChecked 
            />

          <input 
            type="radio" 
            name="nav_tabs" 
            className="tab px-6 py-2" 
            aria-label="Cart" 
        />
          
        </div>
      </div> */}

      {/* <div className='container mt-2 mb-10 flex items-center justify-center text-center gap-2'>
        
        <button onClick={()=> setActiveTab("Products")} className='btn px-4 custom-gradient py-2 rounded-full'>Products</button>
        <button onClick={()=> setActiveTab("Cart")} className='btn px-4 py-2 rounded-full'>{`Cart (${carts.length })`}</button>
      </div> */}
      
<div className="tabs tabs-box justify-center bg-transparent mt-2 mb-10 flex items-center gap-3 ">
  <input type="radio"
  name="my_tabs_1" 
  className={`tab rounded-full w-40 font-bold text-[18px] 
      ${activeTab === "Products" 
        ? "custom-gradient text-white " 
        : " bg-gray-100 text-gray-700"}`} 
  aria-label="Products"
  onClick={()=> setActiveTab("Products")}
  defaultChecked />
  <input type="radio" 
  name="my_tabs_1" 
  className={`tab rounded-full w-40 font-bold text-[18px] 
      ${activeTab === "Cart" 
        ? "custom-gradient text-white " 
        : "bg-gray-100 text-gray-700"}`}
  onClick={()=> setActiveTab("Cart")}
  aria-label={`Cart (${carts.length})`} />
</div>
      
    </div>
  );
};

export default SelectTab;