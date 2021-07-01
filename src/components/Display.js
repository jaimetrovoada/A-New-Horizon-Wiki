import React from "react";
import Villager from "./Villager";
import { useState } from "react";

const Display = ({ data, name, image, data_key }) => {
  // declare states
  const [show, setShow] = useState(false);
  const [personality, setPersonality] = useState("");
  const [birthday, setBirthday] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [catch_phrase, setCatch_phrase] = useState("");

  // functions
  const handleClick = (e) => {
    const clickedElement = parseInt(e.target.getAttribute("data-key"));

    setShow(true);
    setBirthday(data && data[clickedElement]["birthday-string"]);
    setCatch_phrase(data && data[clickedElement]["catch-phrase"]);
    setGender(data && data[clickedElement].gender);
    setPersonality(data && data[clickedElement].personality);
    setSpecies(data && data[clickedElement].species);
  };


  return (
    <>
      <div
        key={data_key}
        className="display-card"
        onClick={handleClick}
        data-key={data_key - 1}
      >
        <figure data-key={data_key - 1}>
          <img
            src={image}
            alt=""
            className="display-card-image"
            data-key={data_key - 1}
          />
        </figure>
        <span className="display-card-name" data-key={data_key - 1}>
          <strong data-key={data_key - 1}>{name}</strong>
        </span>
      </div>
      <Villager
        show={show}
        setShow={setShow}
        name={name}
        image={image}
        personality={personality}
        birthday={birthday}
        species={species}
        gender={gender}
        catch_phrase={catch_phrase}
      />
    </>
  );
};

export default Display;
