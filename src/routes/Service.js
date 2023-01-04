import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import ServiceImg from "../assets/Service.jpg"
import Footer from "../components/Footer/Footer"
import Trip from "../components/Trip/Trip"

const Service = () => {
  return (
    <div>
       <Navbar />
       <Hero 
          cName="heroMid"
          heroImg={ServiceImg}
          title="Service"
          btnClass="hide"
        />
        <Trip />
        <Footer />
    </div>
  )
}

export default Service