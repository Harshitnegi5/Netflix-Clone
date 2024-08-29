import React, { useEffect, useRef } from "react";
import "./Titlecard.css";

import cards_data from "../../assets/cards/Cards_data.js";

const Titlecard = ({title}) => {
  const cardsRef = useRef();

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", (dets) => {
      dets.preventDefault();
      cardsRef.current.scrollLeft += dets.deltaY;
    });
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className="cards" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Titlecard;
