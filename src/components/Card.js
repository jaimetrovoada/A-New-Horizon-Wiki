import React, { useState } from "react";
import InfoModal from "./InfoModal";
//import { Route, Link } from "react-router-dom";

const Card = (props) => {
  // STATES
  const [show, setShow] = useState(false);

  // FUNCTION
  const handleClick = (e) => {
    setShow(true);
  };

  return (
    <>
      <div className="display-card" onClick={handleClick}>
        <figure>
          <img src={props.image} alt="" className="display-card-image" />
        </figure>
        <span className="display-card-name">
          <strong>{props.name}</strong>
        </span>
      </div>

      <InfoModal
        show={show}
        setShow={setShow}
        name={props.name}
        image={props.image}
        personality={props.personality}
        birthday={props.birthday}
        species={props.species}
        gender={props.gender}
        catch_phrase={props.catch_phrase}
        category={props.category}
        location={props.location}
        price={props.price}
        rarity={props.rarity}
        month_north={props.month_north}
        month_south={props.month_south}
        speed={props.speed}
        time={props.time}
        museum_phrase={props.museum_phrase}
        size={props.size}
        source={props.source}
        tag={props.tag}
        description={props.description}
      />
    </>
  );
};

export default Card;
