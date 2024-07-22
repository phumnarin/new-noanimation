import React, { useState,useEffect } from "react";
import { countryArray, categoryArray } from "./Array";

function CountryAndCate({ onSelectionChange }) {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");


  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  console.log(country, "และ", category, "check country and category");

  return (
    <>
      <select value={country} onChange={handleCountry}>
        {countryArray?.map((item, index) => (
          <option value={item.isoCode} key={index}>
            {" "}
            {item.countryName}
          </option>
        ))}
      </select>

      <select value={category} onChange={handleCategory}>
        {categoryArray?.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default CountryAndCate;
