import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import AboutImg from "../assets/About1.jpg"
import Footer from "../components/Footer/Footer"
import AboutUs from "../components/AboutUs/AboutUs"

const About = () => {
  return (
    <div>
       <Navbar />
       <Hero 
          cName="heroMid"
          heroImg={AboutImg}
          title="About"
          btnClass="hide"
        />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default About