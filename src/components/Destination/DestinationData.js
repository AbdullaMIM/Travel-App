import React, { Component } from 'react'

export default class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}> 
         
         <div className='desText'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
         </div>

         <div className='image'>
            <img alt='img' src={this.props.img1} />
            <img alt='img' src={this.props.img2} />   
         </div>

      </div>
    )
  }
}
