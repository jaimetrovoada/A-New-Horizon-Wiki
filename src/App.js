import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  // DECLARE STATES
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("villagers");
  const [isLoading, setLoading] = useState(false);
  const [newSearch, setNewSearch] = useState("");

  // FUNCTIONS
  useEffect(() => {
    axios
      .get(`https://acnhapi.com/v1/villagers`)
      .then(setLoading(true))
      .then((res) => {
        console.log("promise fullfiled");
        setData(Object.keys(res.data).map((key) => res.data[key]));
        setLoading(false);
      });
  }, []);

  const getCategory = (param) => {
    axios
      .get(`https://acnhapi.com/v1/${param}`)
      .then(setLoading(true))
      .then((res) => {
        console.log({
          res,
        });

        setData(Object.keys(res.data).map((key) => res.data[key]));
        console.log("promise getInfo fullfiled");
        setLoading(false);
      });
  };

  const isVillager = category === "villagers";
  const isFish = category === "fish";
  const isSea = category === "sea";
  const isBugs = category === "bugs";
  const isFossils = category === "fossils";
  const isHouseware = category === "houseware";
  const isArt = category === "art";

  const imageToShow = () =>
    category === "fossils" || category === "art" || category === "houseware"
      ? "image_uri"
      : "icon_uri";

  /*const filterArr = (arr, query) => { return arr.filter((el) => {
        return (
          el.name["name-USen"].toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      })
  };*/

  // logging
  console.log({ data });
  console.log({ isLoading });

  return (
    <div className="App">
      <Route path="/" exact>
        <section className="wlcmScreen">
          <div className="container">
            <div> Welcome to ACNH - pedia </div>
            <div>
              <Link to="/explore">
                <button className="btn"> Explore </button>
              </Link>
            </div>
          </div>
        </section>
      </Route>
      <Route path="/explore">
        <section>
          <Form
            getCategory={getCategory}
            setCategory={setCategory}
            newSearch={newSearch}
            setNewSearch={setNewSearch}
          />
        </section>
        <section className="display">
          <div className="display-wrapper">
            {/* if villager */}
            {!isLoading &&
              data &&
              isVillager &&
              data
                .filter((villager) => {
                  return (
                    villager.name["name-USen"]
                      .toLowerCase()
                      .indexOf(newSearch.toLowerCase()) !== -1
                  );
                })
                .map((villager) => (
                  <Card
                    key={villager.id}
                    name={villager.name["name-USen"]}
                    image={villager[imageToShow()]}
                    category={category}
                    personality={villager.personality}
                    birthday={villager.birthday}
                    species={villager.species}
                    gender={villager.gender}
                    catch_phrase={villager["catch-phrase"]}
                  />
                ))}
           
            {/* if fish */}
            {!isLoading &&
              data &&
              isFish &&
              data
                .filter((fish) => {
                  return (
                    fish.name["name-USen"]
                      .toLowerCase()
                      .indexOf(newSearch.toLowerCase()) !== -1
                  );
                })
                .map((fish) => (
                  <Card
                    key={fish.id}
                    name={fish.name["name-USen"]}
                    image={fish[imageToShow()]}
                    category={category}
                    location={fish.availability.location}
                    price={fish.price}
                    rarity={fish.availability.rarity}
                    month_north={fish.availability["month-northern"]}
                    month_south={fish.availability["month-southern"]}
                    catch_phrase={fish["catch-phrase"]}
                  />
                ))}
            {/* if houseware */}
            {!isLoading &&
              data &&
              isHouseware &&
              data
                .filter((houseware) => {
                  return (
                    houseware.name["name-USen"]
                      .toLowerCase()
                      .indexOf(newSearch.toLowerCase()) !== -1
                  );
                })
                .map((result) =>
                  result.map((houseware) => (
                    <Card
                      name={houseware.name["name-USen"]}
                      image={houseware[imageToShow()]}
                      category={category}
                      price={houseware["buy-price"]}
                      size={houseware.size}
                      source={houseware["source-detail"]}
                      tag={houseware.tag}
                    />
                  ))
                )}
            {/* if art */}
            {!isLoading &&
              data &&
              isArt &&
              data
                .filter((art) => {
                  return (
                    art.name["name-USen"]
                      .toLowerCase()
                      .indexOf(newSearch.toLowerCase()) !== -1
                  );
                })
                .map((art) => (
                  <Card
                    key={art.id}
                    name={art.name["name-USen"]}
                    image={art[imageToShow()]}
                    category={category}
                    price={art.price}
                    description={art["museum-desc"]}
                  />
                ))}
            {/* if fossils*/}
    {!isLoading && data && isFossils && data.filter((fossils) => {
                  return (
                  fossils.name["name-USen"]
                      .toLowerCase()
                      .indexOf(newSearch.toLowerCase()) !== -1
                  );
                })
                .map((fossils) => (
                  <Card
                    key={fossils.id}
                    name={fossils.name["name-USen"]}
                    image={fossils[imageToShow()]}
                    category={category}
                    price={fossils.price}
                    description={fossils["museum-desc"]}/>))}
          </div>
        </section>
      </Route>
    </div>
  );
}

export default App;
