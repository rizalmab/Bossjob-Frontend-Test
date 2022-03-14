import React, { Component } from "react";
import "./App.css";

import Header from "./shared/components/Header";
import Search from "./assets/images/search.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          {/* <div style={{ padding: "10px 20px" }}>
            <p>Please show a list of jobs as per design</p>
          </div> */}
          <div>
            <img
              alt="search icon"
              src={Search}
              style={{ height: "20px", width: "20px", display: "inline-block" }}
            />
            <p style={{ display: "inline-block" }}>
              Search for job title or company name
            </p>
          </div>
          <div>
            <p>Filter results</p>
          </div>
          <div>
            <p>Jobs section</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
