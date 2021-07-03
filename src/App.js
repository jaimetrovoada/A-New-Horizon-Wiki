import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Form from "./components/Form";
import Card from "./components/Card";
import React from "react";

function App() {
  // DECLARE STATES
  const [data, setData] = useState(null);
  const [category, setCategory] = useState("villagers");
  const [isLoading, setLoading] = useState(false);

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
        console.log({ res });

        setData(Object.keys(res.data).map((key) => res.data[key]));
        //setData(Object.keys(res.data).map((key) => res.data[key]));
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

  // let results = data && data.map((info) => info);

  const filterArr = (arr, query) => {
    return setData(
      arr.filter((el) => {
        return (
          el.name["name-USen"].toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      })
    );
  };

  // logging
  console.log({ data });
  console.log({ isLoading });
  // console.log({ results });

  return (
    <div className="App">
      <Route path="/" exact>
        <section className="wlcmScreen">
          <div className="container">
            <div>Welcome to ACNH-pedia</div>
            <div>
              <Link to="/explore">
                <button className="btn">Explore</button>
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
            filter={filterArr}
            data={data}
          />

          <section className="display">
            <div className="display-wrapper">
              {/* if villager */}
              {!isLoading &&
                data &&
                isVillager &&
                data.map((result) => (
                  <Card
                    key={result.id}
                    name={result.name["name-USen"]}
                    image={result[imageToShow()]}
                    category={category}
                    personality={result.personality}
                    birthday={result.birthday}
                    species={result.species}
                    gender={result.gender}
                    catch_phrase={result["catch-phrase"]}
                  />
                ))}

              {/* if fish */}
              {!isLoading &&
                data &&
                isFish &&
                data.map((result) => (
                  <Card
                    key={result.id}
                    name={result.name["name-USen"]}
                    image={result[imageToShow()]}
                    category={category}
                    location={result.availability.location}
                    price={result.price}
                    rarity={result.availability.rarity}
                    month_north={result.availability["month-northern"]}
                    month_south={result.availability["month-southern"]}
                    catch_phrase={result["catch-phrase"]}
                  />
                ))}

              {/* if sea creature */}
              {!isLoading &&
                data &&
                isSea &&
                data.map((result) => (
                  <Card
                    key={result.id}
                    name={result.name["name-USen"]}
                    image={result[imageToShow()]}
                    category={category}
                    price={result.price}
                    speed={result.speed}
                    month_north={result.availability["month-northern"]}
                    month_south={result.availability["month-southern"]}
                    time={result.availability.time}
                    catch_phrase={result["catch-phrase"]}
                  />
                ))}

              {/* if bug */}
              {!isLoading &&
                data &&
                isBugs &&
                data.map((result) => (
                  <Card
                    key={result.id}
                    name={result.name["name-USen"]}
                    image={result[imageToShow()]}
                    category={category}
                    price={result.price}
                    month_north={result.availability["month-northern"]}
                    month_south={result.availability["month-southern"]}
                    time={result.availability.time}
                    rarity={result.availability.rarity}
                    catch_phrase={result["catch-phrase"]}
                  />
                ))}

              {/* if fossil */}
              {!isLoading &&
                data &&
                isFossils &&
                data.map((result) => (
                  <Card
                    key={result.id}
                    name={result.name["name-USen"]}
                    image={result[imageToShow()]}
                    category={category}
                    price={result.price}
                    museum_phrase={result["museum-phrase"]}
                  />
                ))}

              {/* if houseware */}
              {!isLoading &&
                data &&
                isHouseware &&
                data.map((result) =>
                  result.map((key) => (
                    <Card
                      name={key.name["name-USen"]}
                      image={key[imageToShow()]}
                      category={category}
                      price={key["buy-price"]}
                      size={key.size}
                      source={key["source-detail"]}
                      tag={key.tag}
                    />
                  ))
                )}

              {/* if art */}
              {!isLoading &&
                data &&
                isArt &&
                data.map((result) => (
                  <Card
                    key={result.id}
                    name={result.name["name-USen"]}
                    image={result[imageToShow()]}
                    category={category}
                    price={result.price}
                    description={result["museum-desc"]}
                  />
                ))}
            </div>
          </section>
        </section>
      </Route>
    </div>
  );
}

export default App;
