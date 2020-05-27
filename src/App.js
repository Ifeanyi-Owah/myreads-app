import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";
import PropTypes from "prop-types";

class App extends Component {
  static defaultProps = {
    shelfs: [
      { id: "1", title: "Currently Reading", shelf: "currentlyReading" },
      { id: "2", title: "Want to Read", shelf: "wantToRead" },
      { id: "3", title: "Read", shelf: "read" },
    ],
  };

  static propTypes = { shelfs: PropTypes.array.isRequired };

  render() {
    const { shelfs } = this.props;
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
                  <BookShelf key={book.id} {...book} />
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
