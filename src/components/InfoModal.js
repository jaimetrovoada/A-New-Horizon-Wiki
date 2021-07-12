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
      <div className="modal-info">
        <p>
          <strong>Birthday: </strong>
          {props.birthday}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Species: </strong>
          {props.species}
        </p>
        <p>
          <strong>Personality: </strong>
          {props.personality}
        </p>
        <p>
          <strong>Catch Phrase: </strong>
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
      <div className="modal-info">
        <p>
          <strong>Location: </strong>
          {props.location}
        </p>
        <p>
          <strong>Price: </strong>
          {props.price}
        </p>
        <p>
          <strong>Rarity: </strong>
          {props.rarity}
        </p>
        <p>
          <strong>Avalilable: </strong>
          {props.month_north} for the north hemisphere and
          {props.month_south} for the south hemisphere
        </p>
        <p>
          <strong>Catch Phrase: </strong>
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
      <div className="modal-info">
        <p>
          <strong>Price: </strong>
          {props.price}
        </p>
        <p>
          <strong>Speed: </strong>
          {props.speed}
        </p>
        <p>
          <strong>Avalilable: </strong>
          {props.month_north} for the north hemisphere and
          {props.month_south} for the south hemisphere at {props.time}
        </p>
        <p>
          <strong>Catch Phrase: </strong>
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
      <div className="modal-info">
        <p>
          <strong>Price: </strong>
          {props.price}
        </p>
        <p>
          <strong>Rarity: </strong>
          {props.rarity}
        </p>
        <p>
          <strong>Avalilable: </strong>
          {props.month_north} for the north hemisphere and
          {props.month_south} for the south hemisphere at {props.time}
        </p>
        <p>
          <strong>Catch Phrase: </strong>
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
      <div className="modal-info">
        <p>
          <strong>Price: </strong>
          {props.price}
        </p>
        <p>
          <strong>Description: </strong>
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
      <div className="modal-info">
        <p>
          <strong>Price: </strong>
          {props.price}
        </p>
        <p>
          <strong>Size: </strong>
          {props.size}
        </p>
        <p>
          <strong>How to get: </strong>
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
      <div className="modal-info">
        <p>
          <strong>Price: </strong>
          {props.price}
        </p>
        <p>
          <strong>Description: </strong>
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
