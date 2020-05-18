import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";
import PropTypes from "prop-types";

class App extends Component {
  static defaultProps = {
    shelfs: ["Currently Reading", "Want to Read", "Read"],
  };

  static propTypes = { shelfs: PropTypes.array.isRequired };

  state = {
    showSearchPage: false,
  };

  render() {
    const { shelfs } = this.props;
    const { showSearchPage } = this.state;
    return (
      <div className="app">
        {showSearchPage ? (
          <BookSearch />
        ) : (
          <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
            </div>
            {shelfs.map((shelf) => (
              <BookShelf shelf={shelf} />
            ))}
            <div className="open-search">
              <button>Add a book</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
