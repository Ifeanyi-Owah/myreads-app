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
    searchedBooks: [],
    error: null,
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

  updateShelf = (updatedBook, shelf) => {
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
        return {
          books: [...state.books, { ...newBook, shelf }],
        };
      });
    });
  };

  searchedBooksUpdate = (query) => {
    BooksAPI.search(query).then((books) => {
      console.log(books);
      this.setState(() => {
        try {
          return {
            searchedBooks: books
              .filter((book) => book.imageLinks.smallThumbnail)
              .map((book) => ({
                id: book.id,
                title: book.title,
                authors: book.authors ? book.authors : ["No authors found"],
                imageLink: book.imageLinks.smallThumbnail,
                shelf: "None",
              })),
          };
        } catch (error) {
          this.setState({
            error,
          });
        }
      });
    });
  };

  render() {
    const { shelfs } = this.props;
    const { books, searchedBooks, error } = this.state;
    if (error) {
      return <h2>No results found...</h2>;
    }
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/search"
            render={() => (
              <BookSearch
                books={searchedBooks}
                searchBookUpdate={this.searchedBooksUpdate}
                addBook={this.addBook}
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
