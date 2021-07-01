import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Villager = ({
  show,
  setShow,
  name,
  image,
  personality,
  birthday,
  species,
  gender,
  catch_phrase,
}) => {
  //functions
  const handleClose = () => setShow(false);
  // console.log("name in Villager modal", name);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <figure>
            <img src={image} alt={`${name}`} />
          </figure>
          <div className="villager-info">
            <p>
              <strong>birthday: </strong>
              {birthday}
            </p>
            <p>
              <strong>gender: </strong>
              {gender}
            </p>
            <p>
              <strong>species: </strong>
              {species}
            </p>
            <p>
              <strong>personality: </strong>
              {personality}
            </p>
            <p>
              <strong>catch_phrase: </strong>
              {catch_phrase}
            </p>
          </div>
        </Modal.Body>
        {/*  <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Villager;
