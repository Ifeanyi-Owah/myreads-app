import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";
import PropTypes from "prop-types";

class App extends Component {
  static defaultProps = {
    shelfs: [
      { id: "1", shelf: "Currently Reading" },
      { id: "2", shelf: "Want to Read" },
      { id: "3", shelf: "Read" },
    ],
  };

  static propTypes = { shelfs: PropTypes.array.isRequired };

  state = {
    // showSearchPage: false,
  };

  render() {
    const { shelfs } = this.props;
    // const { showSearchPage } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/search" render={() => <BookSearch />} />
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                </div>
                {shelfs.map((book) => (
                  <BookShelf key={book.id} shelf={book.shelf} />
                ))}
                <div className="open-search">
                  <button>Add a book</button>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
