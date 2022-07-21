import React from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default App;
