
import { useState } from 'react'
import './App.css'
import Allcards from './Components/Allcards'
import Banner from './Components/Banner'
import BelowBanner from './Components/BelowBanner'
import SelectTab from './Components/SelectTab'
import GetStarts from './Components/GetStarts'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import PremiumText from './Components/PremiumText'


const getProducts = async () =>{
  const res = await fetch("/products.json")
  return res.json()
}

const fetchPromise = getProducts();
// console.log(fetchPromise)

function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const[carts,setCarts]= useState([]);
  


  return (
    <>
      <Navbar/>
      <Banner/>
      <BelowBanner/>
      <PremiumText/>
      <SelectTab activeTab={activeTab}
      setActiveTab={setActiveTab}
      />
      {activeTab === "Products" && <Allcards fetchPromise={fetchPromise}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      carts={carts}
      setCarts={setCarts}
      />}
      {activeTab ==="Cart" && <Cart carts={carts}
      
      />}

      
      <GetStarts/>
    </>
  )
}

export default App
