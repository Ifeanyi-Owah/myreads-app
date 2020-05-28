import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
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

  state = {
    books: [],
    query: "",
  };

  static propTypes = { shelfs: PropTypes.array.isRequired };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => {
        return {
          books: books.map((book) => ({
            id: book.id,
            title: book.title,
            authors: book.authors,
            imageLink: book.imageLinks.smallThumbnail,
            shelf: book.shelf,
          })),
        };
      });
    });
  }

  updateShelf = (newBook, shelf) => {
    BooksAPI.update(newBook, shelf).then(() => {
      const booksInShelf = [...this.state.books]
        .filter((book) => book.shelf !== "None")
        .map((book) => {
          if (book.id === newBook.id) {
            return { ...book, shelf };
          }
          return book;
        });

      this.setState((state, props) => {
        return {
          books: booksInShelf,
        };
      });
    });
  };

  render() {
    const { shelfs } = this.props;
    const { books } = this.state;
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
                  <BookShelf
                    key={book.id}
                    books={books}
                    shelf={book.shelf}
                    title={book.title}
                    updateBookShelf={this.updateShelf}
                  />
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
