import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
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
    currentlyReading: [],
    wantToRead: [],
    read: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState(() => {
        return {
          currentlyReading: BooksAPI.assignBookToShelf(
            books,
            "currentlyReading"
          ),
          wantToRead: BooksAPI.assignBookToShelf(books, "wantToRead"),
          read: BooksAPI.assignBookToShelf(books, "read"),
        };
      });
    });
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;
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
                <BookShelf books={currentlyReading} shelf={shelfs[0]} />
                <BookShelf books={wantToRead} shelf={shelfs[1]} />
                <BookShelf books={read} shelf={shelfs[2]} />
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
