import React from 'react'
import "./HeroStyles.css"

const Hero = (props) => {
  return (
    <div className={props.cName}>
       
       <img alt="HeroImg" src={props.heroImg}/>
    
       <div className="HeroText">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
           {props.buttonText}
        </a>
       </div>

    </div>
  )
}

export default Hero