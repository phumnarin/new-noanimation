import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { categoryArray, countryArray } from "./Array";
import { FaSearch } from "react-icons/fa";

function SearchAndOp({ onSubmit, count }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [iso, setIso] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [iso2, setIso2] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [countrySearch, setCountrySearch] = useState("");

  ///// data /////
  const handleDateChange = (date) => {
    setStartDate(date);
    const changeIso = format(date, "yyyy-MM-dd");
    setIso(changeIso);
  };
  const handleDateChange2 = (date) => {
    setFromDate(date);
    const changeIso = format(date, "yyyy-MM-dd");
    setIso2(changeIso);
  };
  ///// input /////
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  ///// sortby /////
  const handleSortBySelectChange = (event) => {
    setSortBy(event.target.value);
  };
  ///// countrySearch /////
  const handleCountrySearch = (e) => {
    setCountrySearch(e.target.value);
  };
  ///// categorySearch /////
  const handleCategorySearch = (e) => {
    setCategorySearch(e.target.value);
  };
  ///// submit /////
  const handlesubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm, sortBy, iso, iso2, countrySearch, categorySearch);
    //console.log(
      //searchTerm,
      //sortBy,
      //iso,
      //iso2,
      //categorySearch,
      //countrySearch,
      //"ส่งฟอร์ม"
    //);
  };

  useEffect(() => {
    setSearchTerm("");
    setStartDate("");
    setFromDate("");
    setSortBy("");
    setCategorySearch("");
    setCountrySearch("");
  }, [count]);

  //console.log("----------------");
  //console.log(searchTerm);
  //console.log(sortBy);
  //console.log(iso, iso2, "check", typeof iso);
  //console.log(data);
  //console.log("----------------");

  return (
    <div className="bg-gray-100 flex justify-center ...">
      <form
        onSubmit={handlesubmit}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-5"
      >
        <div className="grid grid-cols-3  ">
          <span className="bg-gray-400 text-right pr-1 text-white rounded-l-full">search :</span>
          <input
            className="col-span-2 "
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="  Type the word  "
          />
        </div>

        <div className="grid grid-cols-3  ">
          <span className="bg-gray-400 text-right pr-1 text-white rounded-l-full">sort by :</span>
          <select
            value={sortBy}
            onChange={handleSortBySelectChange}
            className="col-span-2"
          >
            <option value="">select</option>
            <option value="relevancy"> relevancy </option>
            <option value="popularity"> popularity </option>
            <option value="publishedAt"> publishedAt </option>
          </select>
        </div>

        <div className="grid grid-cols-3 ">
          <span className="bg-gray-400 text-right pr-1 text-white rounded-l-full">Country :</span>
          <select
            value={countrySearch}
            onChange={handleCountrySearch}
            className="col-span-2"
          >
            <option value="">select</option>
            {countryArray?.map((item, index) => (
              <option value={item.isoCode} key={index}>
                {item.countryName}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-3  ">
          <span className="bg-gray-400 text-right pr-1 text-white rounded-l-full">Category :</span>
          <select
            value={categorySearch}
            onChange={handleCategorySearch}
            className="col-span-2"
          >
            <option value="">select</option>
            {categoryArray?.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-3 ">
          <span className="bg-gray-400 text-right pr-1 text-white rounded-l-full">From :</span>
          <span className="col-span-2">
            <DatePicker
              selected={startDate}
              onSelect={handleDateChange}
              dateFormat="yyyy-MM-dd"
            />
          </span>
        </div>

        <div className="grid grid-cols-3 ">
          <span className="bg-gray-400 text-right pr-1 text-white rounded-l-full">To :</span>
          <div className="col-span-2">
            <DatePicker
              selected={fromDate}
              onSelect={handleDateChange2}
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-full bg-blue-500/100 px-10 py-2 my-2 text-white justify-self-start w-[70%] hover:bg-blue-700"
        >
          {" "}
          Enter{" "}
        </button>
      </form>
    </div>
  );
}

export default SearchAndOp;
