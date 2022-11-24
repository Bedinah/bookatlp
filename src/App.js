import React from "react";
import Book from "./addbook";
import "./App.css";
import Category from "./category";

const App = () => {
  return (
    <>
      <div style={{ margin: "3rem" }}>
        <h1>GET ALL YOUR BOOKMARKS HERE !</h1>
        <Book />
      </div>

      <Category />
    </>
  );
};

export default App;
