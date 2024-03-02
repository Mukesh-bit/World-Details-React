import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryContainerShimmer from "./CountryContainerShimmer";

const CountriesContainer = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountriesData(data));
  }, []);

  if(!countriesData.length) {
    return <CountryContainerShimmer/>
  }

  return (
    <>
      
        <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            )
            .map((country, i) => (
              <CountryCard
                key={i}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital}
                data={country}
              />
            ))}
        </div>
      
    </>
  );
};

export default CountriesContainer;
