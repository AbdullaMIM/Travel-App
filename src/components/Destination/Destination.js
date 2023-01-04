import React from 'react'
import DestinationData from "./DestinationData"
import './DestinationStyles.css'
import Sigiriya1 from '../../assets/Sigiriya1.jpg'
import Sigiriya2 from '../../assets/Sigiriya2.jpg'
import WE1 from '../../assets/WE1.jpg'
import WE3 from '../../assets/WE3.jpg'
import TempleTooth1 from '../../assets/TempleTooth.webp'
import TempleTooth2 from '../../assets/TempleTooth.jpg'
import NAB1 from '../../assets/NAB.webp'
import NAB2 from '../../assets/NAB2.jpg'

const Destination = () => {
  return (
    <div className="Destination">
        
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot within a time frame</p>
    
        <DestinationData 
           className="firstDes"
           heading="Sigiriya" 
           text="A visit to this place will show you an 1600 years old Sigiriya Fortress which was built by King Kasyapa.
                 This massive compound is protected by two moats and three ramparts. 
                 It is once known to be the private residence of King Kasyapa and also one of the best places to visit in Sri Lanka.
                 If you are interested in ancient places, this is one of the best tourist places to visit in Sri Lanka."
           img1={Sigiriya1}
           img2={Sigiriya2}
        />

        <DestinationData 
           className="firstDesReverse"
           heading="World's End Nuwara Eliya"
           text="One of the most jaw-dropping experience you can ever have in Sri Lanka is the World’s End on the Horton Plains. 
                 Enjoy a tuk-tuk ride to the Horton plains from Nuwara Eliya and it is among the best tourist places to visit in Sri Lanka.
                 You can see animals such as leopards and deer. Experience the amazing flora and fauna which will be an amazing experience."
           img1={WE1}
           img2={WE3}
       />

        <DestinationData 
           className="firstDes"
           heading="Temple Of Tooth At Kandy" 
           text="The Temple of the Sacred Tooth Relic is a Buddhist temple in the city of Kandy, Sri Lanka. 
                 It is located in the royal palace complex which houses the Relic of the tooth of Buddha. 
                 Since ancient times, the relic has played an important role in local politics because it is believed that whoever holds the relic holds the governance of the country."
           img1={TempleTooth1}
           img2={TempleTooth2}
        />

        <DestinationData 
           className="firstDesReverse"
           heading="Nine Arch Bridge"
           text="Nine Arch Bridge is also called the Bridge in the sky and is among the iconic Sri Lanka tourism places. 
                 It is in the small mountain town of Ella and offers visitors with splendid view of the surrounding area which comprises of lush greenery and tea fields. 
                 What makes the bridge unique is that it is made up of stone, brick and cement. There is no use of any steel. It is one of the best places to visit in Sri Lanka for a memorable holiday."        
           img1={NAB1}
           img2={NAB2}
        />
    </div>
  )
}

export default Destination