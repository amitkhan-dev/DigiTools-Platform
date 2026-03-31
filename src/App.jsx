
import './App.css'
import Allcards from './Components/Allcards'
import Banner from './Components/Banner'
import BelowBanner from './Components/BelowBanner'
import GetStarts from './Components/GetStarts'
import Navbar from './Components/Navbar'


const getProducts = async () =>{
  const res = await fetch("/products.json")
  return res.json()
}

const fetchPromise = getProducts();
// console.log(fetchPromise)

function App() {
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <BelowBanner/>
      <Allcards fetchPromise={fetchPromise}/>
      <GetStarts/>
    </>
  )
}

export default App
