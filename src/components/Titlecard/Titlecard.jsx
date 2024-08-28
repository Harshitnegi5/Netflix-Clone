import React from 'react'
import "./Titlecard.css"
import Cards_data from "../../assets/cards/Cards_data.js"
import cards_data from '../../assets/cards/Cards_data.js'

const Titlecard = () => {
  return (
    <div className='titlecards'>
        <h2>Popular on Netflix</h2>
        <div className="card_list">
            {cards_data.map((card,index)=>(
                 <div className='cards' key={index}>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                 </div>
            ))}
        </div>
      
    </div>
  )
}

export default Titlecard
