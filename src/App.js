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
  // const [housewareItems, setHousewareItems] = useState()

  // FUNCTIONS
  useEffect(() => {
    axios
      .get(`https://acnhapi.com/v1/villagers`)
      .then(setLoading(true))
      .then((res) => {
        console.log("promise fullfiled");
        console.log("resdata", res.data);
        setData(Object.keys(res.data).map((key) => res.data[key]));
        setLoading(false);
      });
  }, []);

  const getCategory = (param) => {
    axios
      .get(`https://acnhapi.com/v1/${param}`)
      .then(setLoading(true))
      .then((res) => {
        console.log(`promise get ${category} fullfiled`);
        console.log("resdata", res.data);
        setData(Object.keys(res.data).map((key) => res.data[key]));
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

  const housewareItems = data && isHouseware && data.map((item) => item[0]);
  console.log({ housewareItems });

  // logging
  console.log({ data });
  console.log({ isLoading });

  return (
    <div className="App">
      <Route path="/" exact>
        <section className="wlcmScreen">
          <div className="container">
            <div> Welcome to New Horizons Wiki </div>
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
                    houseware[0].name["name-USen"]
                      .toLowerCase()
                      .indexOf(newSearch.toLowerCase()) !== -1
                  );
                })
                .map((houseware, index) => (
                  <Card
                    key={index + 1}
                    name={houseware[0].name["name-USen"]}
                    image={houseware[0][imageToShow()]}
                    category={category}
                    price={houseware[0]["buy-price"]}
                    size={houseware[0].size}
                    source={houseware[0]["source-detail"]}
                    tag={houseware[0].tag}
                  />
                ))}

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
                    price={art["buy-price"]}
                    description={art["museum-desc"]}
                  />
                ))}
            {/* if fossils*/}
            {!isLoading &&
              data &&
              isFossils &&
              data
                .filter((fossils) => {
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
                    museum_phrase={fossils["museum-phrase"]}
                  />
                ))}

            {/*if sea creture*/}
            {!isLoading &&
              data &&
              isSea &&
              data
                .filter((sea) => {
                  return (
                    sea.name["name-USen"]
                      .toLowerCase()
                      .indexOf(newSearch.toLowerCase()) !== -1
                  );
                })
                .map((sea) => (
                  <Card
                    key={sea.id}
                    name={sea.name["name-USen"]}
                    image={sea[imageToShow()]}
                    category={category}
                    price={sea.price}
                    speed={sea.speed}
                    month_south={sea.availability["month-southern"]}
                    month_north={sea.availability["month-northern"]}
                    catch_phrase={sea["catch-phrase"]}
                  />
                ))}
            {/* is bugs*/}
            {!isLoading &&
              data &&
              isBugs &&
              data
                .filter((bugs) => {
                  return (
                    bugs.name["name-USen"]
                      .toLowerCase()
                      .indexOf(newSearch.toLowerCase()) !== -1
                  );
                })
                .map((bugs) => (
                  <Card
                    key={bugs.id}
                    name={bugs.name["name-USen"]}
                    image={bugs[imageToShow()]}
                    category={category}
                    price={bugs.price}
                    rarity={bugs.availability.rarity}
                    month_south={bugs.availability["month-southern"]}
                    month_north={bugs.availability["month-northern"]}
                    catch_phrase={bugs["catch-phrase"]}
                  />
                ))}
          </div>
        </section>
      </Route>
    </div>
  );
}

export default App;
