import React, { useState, useEffect } from "react";
import "./App.css";

import Search from "./components/Search";
import CountryGroup from "./components/CountryGroup";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [countriesByAlphabet, setCountriesByAlphabet] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      let data = await response.json();

      // Filter the properties — only keep name and capital for now
      let countries = [];
      data.map(({ name, capital }) => countries.push({ name, capital }));
      setAllCountries(countries);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    var alphabeticallyGroupedCountries = [];
    var i, j;
    // Converting char codes to the letters
    for (i = 0; i < 26; i++) {
      // Creating the object properties that match the letter
      alphabeticallyGroupedCountries.push({
        [String.fromCharCode(i + 65)]: [],
      });
      // Run through every country and check the first letter
      for (j = 0; j < allCountries.length; j++) {
        if (allCountries[j]["name"].charAt(0) === String.fromCharCode(i + 65)) {
          const array =
            alphabeticallyGroupedCountries[i][String.fromCharCode(i + 65)];
          array.push(allCountries[j]);
        }
      }
    }
    setCountriesByAlphabet(alphabeticallyGroupedCountries);
    console.log(alphabeticallyGroupedCountries);
  }, [allCountries, setCountriesByAlphabet]);

  return (
    <div className="App">
      <h1>Travel app</h1>
      <Search />
      <CountryGroup sortedCountries={countriesByAlphabet} />
    </div>
  );
}

export default App;
