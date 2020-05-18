import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const App = (props) => {
  return (
    <div className="App">
      <BookShelf />
    </div>
  );
};

App.propTypes = {};

export default App;
