import React from "react";
import Modal from "react-bootstrap/Modal";

const InfoModal = (props) => {
  //functions
  const handleClose = () => props.setShow(false);

  const villagerDetails = props.category === "villagers" && (
    <>
      <figure>
        <img src={props.image} alt={`${props.name}`} />
      </figure>
      <div className="villager-info">
        <p>
          <strong>birthday: </strong>
          {props.birthday}
        </p>
        <p>
          <strong>gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>species: </strong>
          {props.species}
        </p>
        <p>
          <strong>personality: </strong>
          {props.personality}
        </p>
        <p>
          <strong>catch phrase: </strong>
          {props.catch_phrase}
        </p>
      </div>
    </>
  );

  const fishDetails = props.category === "fish" && (
    <>
      <figure>
        <img src={props.image} alt={`${props.name}`} />
      </figure>
      <div className="villager-info">
        <p>
          <strong>location: </strong>
          {props.location}
        </p>
        <p>
          <strong>price: </strong>
          {props.price}
        </p>
        <p>
          <strong>rarity: </strong>
          {props.rarity}
        </p>
        <p>
          <strong>Avalilable: </strong>
          {props.month_north} for the north hemisphere and
          {props.month_south} for the south hemisphere
        </p>
        <p>
          <strong>catch phrase: </strong>
          {props.catch_phrase}
        </p>
      </div>
    </>
  );

  const seaDetails = props.category === "sea" && (
    <>
      <figure>
        <img src={props.image} alt={`${props.name}`} />
      </figure>
      <div className="villager-info">
        <p>
          <strong>price: </strong>
          {props.price}
        </p>
        <p>
          <strong>speed: </strong>
          {props.speed}
        </p>
        <p>
          <strong>Avalilable: </strong>
          {props.month_north} for the north hemisphere and
          {props.month_south} for the south hemisphere at {props.time}
        </p>
        <p>
          <strong>catch phrase: </strong>
          {props.catch_phrase}
        </p>
      </div>
    </>
  );

  const bugsDetails = props.category === "bugs" && (
    <>
      <figure>
        <img src={props.image} alt={`${props.name}`} />
      </figure>
      <div className="villager-info">
        <p>
          <strong>price: </strong>
          {props.price}
        </p>
        <p>
          <strong>rarity: </strong>
          {props.rarity}
        </p>
        <p>
          <strong>Avalilable: </strong>
          {props.month_north} for the north hemisphere and
          {props.month_south} for the south hemisphere at {props.time}
        </p>
        <p>
          <strong>catch phrase: </strong>
          {props.catch_phrase}
        </p>
      </div>
    </>
  );

  const fossilsDetails = props.category === "fossils" && (
    <>
      <figure>
        <img src={props.image} alt={`${props.name}`} />
      </figure>
      <div className="villager-info">
        <p>
          <strong>price: </strong>
          {props.price}
        </p>
        <p>
          <strong>museum phrase: </strong>
          {props.museum_phrase}
        </p>
      </div>
    </>
  );

  const housewareDetails = props.category === "houseware" && (
    <>
      <figure>
        <img src={props.image} alt={`${props.name}`} />
      </figure>
      <div className="villager-info">
        <p>
          <strong>price: </strong>
          {props.price}
        </p>
        <p>
          <strong>size: </strong>
          {props.size}
        </p>
        <p>
          <strong>how to get: </strong>
          {props.source}
        </p>
        <p>
          <strong>Category: </strong>
          {props.tag}
        </p>
      </div>
    </>
  );

  const artDetails = props.category === "art" && (
    <>
      <figure>
        <img src={props.image} alt={`${props.name}`} />
      </figure>
      <div className="villager-info">
        <p>
          <strong>price: </strong>
          {props.price}
        </p>
        <p>
          <strong>description: </strong>
          {props.description}
        </p>
      </div>
    </>
  );

  return (
    <>
      <Modal show={props.show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {villagerDetails}
          {fishDetails}
          {seaDetails}
          {bugsDetails}
          {fossilsDetails}
          {housewareDetails}
          {artDetails}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InfoModal;
