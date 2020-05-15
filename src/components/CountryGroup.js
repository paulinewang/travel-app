import React from "react";
import PropTypes from "prop-types";

import "./../styles/country-group.scss";

const CountryGroup = ({ sortedCountries }) => {
  // Data structure:
  // [{A: [{ name: "Australia", capital: "Canberra" }, { name: "Austria", capital: "Vienna" }]}]

  /*
  const mapCountries = (countrySet) => {
    if (!countrySet) {
      return;
    }

    // Each object in the set represents an alphabetic group
    return countrySet.map((element, i) => {
      // For each object, we get the letter (key property)
      const letter = String.fromCharCode(i + 65);
      // Get the array of countries for each letter
      const countriesPerLetter = countrySet[i][letter];
      // Iterate over every array of countries to
      // return the letter and country names
      return countriesPerLetter.map((country, index) => (
        <p key={index}>{country.name}</p>
      ));
    });
  };
  */

  const mapCountries = (countrySet) => {
    if (!countrySet) {
      return;
    }

    // Each object in the set represents an alphabetic group
    return countrySet.map((element, i) => {
      // For each object, we get the letter (key property)
      const letter = String.fromCharCode(i + 65);
      // Get the array of countries for each letter
      const countriesPerLetter = countrySet[i][letter];
      // Iterate over every array of countries to
      // return the letter and country names
      return (
        <>
          <p>{letter}</p>
          {countriesPerLetter.map((country, index) => (
            <p key={index}>{country.name}</p>
          ))}
        </>
      );
    });
  };

  return (
    <>
      <p>Countries</p>
      <div>{mapCountries(sortedCountries)}</div>
    </>
  );
};

export default CountryGroup;

CountryGroup.propTypes = {
  countries: PropTypes.array,
};
