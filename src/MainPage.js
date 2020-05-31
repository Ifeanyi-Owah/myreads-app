import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
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
    searchedBooks: [],
    error: null,
  };

  static propTypes = { shelfs: PropTypes.array.isRequired };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => {
        return {
          books: books
            .filter((book) => book.imageLinks.smallThumbnail)
            .map((book) => ({
              id: book.id,
              title: book.title,
              authors: book.authors ? book.authors : ["No authors found"],
              imageLink: book.imageLinks.smallThumbnail,
              shelf: book.shelf,
            })),
        };
      });
    });
  }

  updateBookShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then(() => {
      const booksInShelf = [...this.state.books]
        .filter((book) => book.shelf !== "None")
        .map((book) => {
          if (book.id === updatedBook.id) {
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

  addBook = (newBook, shelf) => {
    BooksAPI.update(newBook, shelf).then(() => {
      const newBooks = [...this.state.searchedBooks].map((book) => {
        if (book.id === newBook.id) {
          return { ...book, shelf };
        }
        return book;
      });
      this.setState((state, props) => {
        return {
          searchedBooks: newBooks,
        };
      });
      this.setState((state, props) => {
        const bookSet = [
          ...new Set([...this.state.books, { ...newBook, shelf }]),
        ];
        return {
          books: bookSet,
        };
      });
    });
  };

  searchedBookUpdate = (query) => {
    BooksAPI.search(query).then((books) => {
      if (books.error) {
        this.setState((state, props) => {
          return { searchedBooks: [] };
        });
      } else {
        this.setState((state, props) => {
          return {
            searchedBooks: books
              .filter((book) => book.imageLinks.smallThumbnail)
              .map((book) => ({
                id: book.id,
                title: book.title,
                authors: book.authors ? book.authors : ["No authors found"],
                imageLink: book.imageLinks.smallThumbnail,
                shelf: book.shelf ? book.shelf : "none",
              })),
          };
        });
      }
    });
  };

  clearSearch = () => {
    this.setState((state, props) => {
      return {
        searchedBooks: [],
      };
    });
  };

  render() {
    const { shelfs } = this.props;
    const { books, searchedBooks } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/search"
            render={() => (
              <BookSearch
                books={searchedBooks}
                searchBookUpdate={this.searchedBookUpdate}
                addBook={this.addBook}
                clearSearch={this.clearSearch}
              />
            )}
          />
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
                    key={uuid()}
                    books={books}
                    shelf={book.shelf}
                    title={book.title}
                    updateBookShelf={this.updateBookShelf}
                  />
                ))}
                <div className="open-search">
                  <Link to="/search">
                    <button>Add a book</button>
                  </Link>
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
