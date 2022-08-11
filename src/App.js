import React from "react";
import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather Search Engine</h1>
      <Search />
      <br></br>
      <footer>
        This project is created by Helene Lipp and is {" "}
        <a href="https://github.com/HeleneLi/React-Weather-App" target="_blank" rel="noreferrer">
        open-sourced on Github
        </a>
      </footer>
    </div>
    </div>
  );
}
