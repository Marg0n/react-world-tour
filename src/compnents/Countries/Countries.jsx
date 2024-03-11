import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log("add to the visited country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul className="visited-countries-list">
          {visitedCountries.map((country) => (
            <li key={country.cca3}>
              <div>
                <p>{country.name.common}</p>
                <img className="visited-flag" src={country.flags.png} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            key={country.cca2}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
