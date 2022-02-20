import React from 'react'
import Presentation from '../components/Presentation'
import Header from '../components/Header'
import OurServices from '../components/OurServices'
import Blog from '../components/Blog'
import Galery from '../components/Galery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const Index = () => {
  return (
    <div className='bg-dinamic'>


        <Header/>
        <Presentation/>
      
        <OurServices/>
        <Galery/>
        <Blog/>
        <Contact/>
        <Footer/>
 
        
    </div>
  )
}

export default Index