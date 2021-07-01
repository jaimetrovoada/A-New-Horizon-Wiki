import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import Display from "./components/Display";
import React from "react";

function App() {
  // declare states
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState("villagers");
  const [isLoading, setLoading] = useState(false);

  // functions
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
    axios.get(`https://acnhapi.com/v1/${param}`).then((res) => {
      setData(Object.keys(res.data).map((key) => res.data[key]));
      console.log("promise getInfo fullfiled");
    });
  };

  const imageToShow = () =>
    selected === "fossils" || selected === "art" ? "image_uri" : "icon_uri";

  // const query = () => "an";
  let results = data && data.map((info) => info);

  const filterArr = (arr, query) => {
    return arr.filter((el) => {
      return (
        el.name["name-USen"].toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
  };

  //set states

  // logging
  console.log({ data });
  console.log({ isLoading });
  console.log({ results });

  return (
    <div className="App">
      <Form
        getCategory={getCategory}
        setSelected={setSelected}
        selected={selected}
        filter={filterArr}
        data={data}
      />

      <section className="display">
        <div className="display-wrapper">
          {data &&
            data.map((result) => (
              <Display
                name={result.name["name-USen"]}
                image={result[imageToShow()]}
                data_key={result.id}
                data={data}
                setData={setData}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default App;
