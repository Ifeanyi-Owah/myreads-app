import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const App = (props) => {
  const { shelfs } = props;
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      </div>
      {shelfs.map((shelf) => (
        <BookShelf shelf={shelf} />
      ))}
    </div>
  );
};

App.defaultProps = {
  shelfs: ["Currently Reading", "Want to Read", "Read"],
};

App.propTypes = {
  shelfs: PropTypes.array.isRequired,
};

export default App;
