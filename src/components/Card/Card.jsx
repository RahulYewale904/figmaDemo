import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="image" />
        <p className='card-header'>{props.header}</p>
        <p className='card-desc'>{props.desc}</p>
        </div>
  )
}

export default Card