import React from "react";
import "./Searchbar.css";
import Search from "../../../assets/images/search.png";

const Searchbar = () => {
  return (
    <div>
      <div className="searchbar-container">
        <img alt="search icon" src={Search} className="search-icon" />
        <form className="search-form">
          <input
            className="search-input"
            placeholder="Search for job title or company name"
          />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
