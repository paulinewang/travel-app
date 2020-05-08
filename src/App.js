import React, { useState, useEffect } from "react";
import "./App.css";

import Search from "./components/Search";

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      let data = await response.json();

      // Filter the properties so that we only keep name and capital for now
      let countries = [];
      data.map(({ name, capital }) => {
        countries.push({ name, capital });
      });
      setAllCountries(countries);
    };

    fetchCountries();
  }, []);

  return (
    <div className="App">
      <h1>Travel app</h1>
      <Search />
    </div>
  );
}

export default App;
