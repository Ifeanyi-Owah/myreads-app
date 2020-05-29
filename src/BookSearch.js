import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

class BookSearch extends Component {
  state = {
    book: null,
    query: "",
    isQueryEmpty: false,
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
    searchBookUpdate: PropTypes.func.isRequired,
    addBook: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState(
      {
        query: e.target.value,
      },
      () => {
        const { query } = this.state;
        if (!query) {
          this.setState({
            isQueryEmpty: true,
          });
        } else {
          setTimeout(() => {
            this.props.searchBookUpdate(query);
          }, 2500);
        }
      }
    );
  };

  addNewBook = (idx, shelf) => {
    const newBook = this.props.books.find((b) => b.id === idx);
    this.setState(
      {
        book: newBook,
      },
      () => {
        const { book } = this.state;
        this.props.addBook(book, shelf);
      }
    );
  };

  render() {
    const { books } = this.props;
    const { query, isQueryEmpty } = this.state;

    if (isQueryEmpty) {
      return (
        <div>
          <h2 style={{ padding: "20px", color: "darkgray" }}>
            No results found...
          </h2>
        </div>
      );
    }
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {books.map((book) => (
                <Book
                  key={book.id}
                  {...book}
                  addNewBook={this.addNewBook}
                  query={query}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSearch;
