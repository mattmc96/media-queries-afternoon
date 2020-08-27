import React, { Component } from "react";
import "./App.css";
// import Reset from "./components/reset.css";
import Body from "./components/Body.js";
import Header from "./components/Header.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
