import React from "react";
import "./Results.css";
import SmallDetails from "./SmallDetails";

const Results = () => {
  return (
    <div className="results-container">
      <p>? jobs found</p>
      <div className="indiv-result-container">
        <div className="job-title">
          <p>Customer Service Representative</p>
        </div>
        <div className="pay-range">
          <p>30k - 35k</p>
        </div>
        <div className="job-details">
          {/* <p>Cebu City</p>
          <p>1 - 3 years</p>
          <p>Diploma</p>
          <p>Full Time</p> */}
          <SmallDetails />
          <SmallDetails />
          <SmallDetails />
          <SmallDetails />
        </div>
        <div className="company">
          <img src="#" alt="company logo" />
          <p>Arc Refreshments Corp</p>
        </div>
        <div className="last-posted">
          <p>3 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
