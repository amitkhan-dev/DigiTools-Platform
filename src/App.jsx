
import { useState } from 'react'
import './App.css'
import Allcards from './Components/Allcards'
import Banner from './Components/Banner'
import BelowBanner from './Components/BelowBanner'
import SelectTab from './Components/SelectTab'
import GetStarted from './Components/GetStarted'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import PremiumText from './Components/PremiumText'
import TransparentPricing from './Components/TransparentPricing'
import WorkFlow from './Components/WorkFolw'
import Footer from './Components/Footer'


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
      <Navbar carts={carts}/>
      <Banner/>
      <BelowBanner/>
      <PremiumText/>
      <SelectTab activeTab={activeTab}
      setActiveTab={setActiveTab}
      carts={carts}
      />
      {activeTab === "Products" && (
        <>
        <Allcards fetchPromise={fetchPromise}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      carts={carts}
      setCarts={setCarts}
      /> <GetStarted/>
      <TransparentPricing/>
      <WorkFlow/>
      <Footer/>
      </>)}
      {activeTab ==="Cart" && <Cart carts={carts}
      setCarts={setCarts}
      />}
      
    </>
  )
}

export default App
