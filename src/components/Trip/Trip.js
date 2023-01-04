import React from 'react'
import "./TripStyles.css"
import Trip1 from "../../assets/SinhaRaja.jpg"
import Trip2 from "../../assets/Yala.jpg"
import Trip3 from "../../assets/Bentota.webp"
import Trip4 from "../../assets/ArugamBay.webp"
import TripData from "./TripData"

const Trip = () => {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations visited by highest number of tourists using Google Maps.</p>
        
        <div className="tripCard">
                <TripData
                 image={Trip1}
                 heading="Trip in Sinharaja Forest Reserve"
                 text="Declared as a World Heritage Site by UNESCO, Sinharaja Forest Reserve (kingdom of the lion), is a paradise for nature and wildlife lovers. 
                       It is home to a vast number of endemic species of birds and mammals of Sri Lanka."
                />
                <TripData
                 image={Trip2}
                 heading="Trip in Yala National Park"
                 text="Spotting a leopard prowling in the Park of Yala is quite an ordinary spectacle. 
                       Witness the untamed world of nature in the Yala National Park and quench your eagerness to explore and learn more about wildlife. 
                       Yala National Park is located in the South-East part of Sri Lanka."
                />
                <TripData
                 image={Trip3}
                 heading="Trip in Bentota Beach"
                 text="An extraordinary experience amidst an ordinary setup lies 65 kilometres from Colombo and is named Bentota beach. 
                       Soak yourself in the ordinary golden sand while enjoying the marvellous sound of the mighty Indian Ocean crashing against the shores."
                />
                <TripData
                 image={Trip4}
                 heading="Trip in Arugam Bay"
                 text="Sri Lanka has a coastline of over 1600 km and is ideally suited for windsurfing, speed boating, and other water sports. 
                       Arugam Bay has azure skies and slanting coconut trees. If you are looking to surf in turquoise waters, Arugam Bay must be in your list of must-see tourist places in Sri Lanka."
                />
                
            </div>
    
    
    </div>
  )
}

export default Trip