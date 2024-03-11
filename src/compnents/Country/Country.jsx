import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area, cca2 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

//   console.log(handleRemoveVisitedCountries);

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited && "purple" }}>Name: {name?.common}</h3>
      <img className="img-height" src={flags.png} alt="flagsPicture" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca2}</small>
      </p>
      <button
        onClick={() => {
          handleVisited();
          handleVisitedCountries(country);
        }}
      >
        {visited ? "Visited" : "Going"}
      </button>
      <p>
        {visited
          ? `I have visited ${name?.common}`
          : `I want to visit ${name?.common}`}
      </p>
    </div>
  );
};

export default Country;
