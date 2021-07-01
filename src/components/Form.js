import React from "react";
import { useState } from "react";

const Form = ({ getCategory, setSelected, filter, data, setData }) => {
  const [newSearch, setNewSearch] = useState("");

  //functions
  const getNewCategory = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
    getCategory(e.target.value);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setNewSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filter(data, newSearch);
    console.log(filter(data, newSearch));
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <fieldset className="form-input-group">
          <label htmlFor="category">Select a category</label>
          <select
            name="category"
            id="category"
            onChange={getNewCategory}
            className="form-input-group-category"
          >
            <option value="villagers" defaultValue>
              Villagers
            </option>
            <option value="fish">Fish</option>
            <option value="sea">Sea Creature</option>
            <option value="bugs">Bugs</option>
            <option value="fossils">Fossils</option>
            <option value="houseware">Items</option>
            <option value="art">Art</option>
          </select>
        </fieldset>

        <fieldset className="form-input-group">
          <input
            type="text"
            placeholder="Please Write your search"
            id="search"
            className="form-input-group-search"
            onChange={handleInput}
            value={newSearch}
          ></input>
          <input type="submit" value="Search" className="btn"></input>
        </fieldset>
      </form>
    </section>
  );
};

export default Form;
