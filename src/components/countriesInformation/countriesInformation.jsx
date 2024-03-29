/* The code is a React component called `CountryInfo`. It imports necessary dependencies such as
`useState`, `useEffect`, `Link`, `FaArrowLeft`, and `useTheme`. It also imports a CSS file called
`countriesInformation.css`. */
import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";
import "./countriesInformation.css";


/* The code defines a React functional component called `CountryInfo`. It takes a prop called
`countriInfo` as input. */
const CountryInfo = ({ countriInfo }) => {
  const [country, setCountry] = useState(null);
  const { isDarkMode } = useTheme();

 /* This hook in the code is used to update the state variable `country` whenever the
 `countriInfo` prop changes. */
  useEffect(() => {
    if (countriInfo && typeof countriInfo === "object") {
      setCountry(countriInfo);
    } else {
      setCountry(null);
    }
  }, [countriInfo]);

  return (
    <div
      className={`all-container ${
        isDarkMode ? "All-dark-mode" : "All-light-mode"
      }`}
    >
      <Link to="/">
        <FaArrowLeft
          className={`back ${
            isDarkMode ? "button-dark-mode" : "button-light-mode"
          }`}
        />
      </Link>

      {country && (
        <div
          className={`country__info__container ${
            isDarkMode ? "countryinfo-dark-mode" : "countryinfo-light-mode"
          }`}
        >
          <div className="country__info-img">
            <img src={country.flags?.png} alt={country.name?.common} />
          </div>

          <div className="country__info">
            <h3>{country.name?.common}</h3>

            <div className="country__info-left">
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Subregion: <span>{country.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
              <h5>
                Languages:{" "}
                <span>
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : ""}
                </span>
              </h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
