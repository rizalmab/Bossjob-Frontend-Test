import React, { Component } from "react";
import "./App.css";

import Header from "./shared/components/Header";
import Search from "./assets/images/search.png";
import Filter from "./shared/components/SearchBar/Filter";
import Searchbar from "./shared/components/SearchBar/Searchbar";
import Results from "./shared/components/Results/Results";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <Searchbar />
          <Filter />
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
