import React from "react";
import { useState } from "react";

const Form = ({ getCategory, setCategory, filter, data }) => {
  const [newSearch, setNewSearch] = useState("");

  //functions
  const getNewCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
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
          <label htmlFor="category">Category</label>
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
            placeholder="Filter"
            id="search"
            className="form-input-group-search"
            onChange={handleInput}
            value={newSearch}
          ></input>
          <input type="submit" value="Search" className="btn"></input>
        </fieldset>
        <div className="info">
          <span>Click on the icons to see more information</span>
        </div>
      </form>
    </section>
  );
};

export default Form;
