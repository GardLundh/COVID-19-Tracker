import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

//Changes the text color of the country picker
const WhiteTextSelect = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(NativeSelect);

//Lets user pick country from all available countries
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.FormControl}>
      <WhiteTextSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option
          style={{ backgroundColor: "rgb(36, 36, 36)", color: "white" }}
          value=""
        >
          Global
        </option>
        {fetchedCountries.map((country, i) => (
          <option
            style={{ backgroundColor: "rgb(36, 36, 36)", color: "white" }}
            key={i}
            value={country}
          >
            {country}
          </option>
        ))}
      </WhiteTextSelect>
    </FormControl>
  );
};

export default CountryPicker;
