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
    
    //checks if country already exists, then delete it or add it
    if(visitedCountries.includes(country)){
      const newVisitedCountries = visitedCountries.filter(removeCoutry => removeCoutry.name !== country.name);
      setVisitedCountries(newVisitedCountries);
      // Here, visitedCountries.filter(removeCoutry => removeCoutry.name !== country.name) means “create an array that consists ( .include returns TRUE or FALSE ) of those country whose names are different from country.name”. In other words, each country’s button will filter that country out of the array, and then request a re-render with the resulting array. Note that filter does not modify the original array.
    }
    else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
    
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
