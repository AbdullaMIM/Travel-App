import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Destination from "../components/Destination/Destination"
import Trip from "../components/Trip/Trip"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <div> 
       <Navbar />
       <Hero 
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination In Sri Lanka"
          buttonText="Travel Plan"
          url="/"
          btnClass="show"
        />
      <Destination />
      <Trip />
      <Footer />
    </div>
  )
}

export default Home