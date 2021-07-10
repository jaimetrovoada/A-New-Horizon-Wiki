import React from "react";

const Form = ({
  getCategory,
  setCategory,
  newSearch,
  setNewSearch,
}) => {
 
  //functions
  const getNewCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    getCategory(e.target.value);
  };

const handleSearch = (e) => {
    console.log(e.target.value);
    setNewSearch(e.target.value);
  };

  return (
    <section className="form">
      <form className="form-wrapper" autoComplete="off">
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
            placeholder="Search..."
            id="search"
            className="form-input-group-search"
            onChange={handleSearch}
            value={newSearch}
          ></input>
        </fieldset>
        <div className="info">
          <span>Click on the icons to see more information</span>
        </div>
      </form>
    </section>
  );
};

export default Form;
