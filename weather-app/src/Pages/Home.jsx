
import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Search from '../Components/Search'
import Forcast from '../Components/Forcast'


function Home() {
  return (
    <div className='bg-blue-950 min-h-screen pb-20 '> 
    <Navbar/>
    <Hero/>
    <Search/>
    <Forcast/>
   
    
    <style>{`body { overflow-x: hidden; }`}</style>
    </div>
  )
}

export default Home