import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

class BookSearch extends Component {
  state = {
    book: null,
    query: "",
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
    searchBookUpdate: PropTypes.func.isRequired,
    addBook: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    const query = e.target.value;
    if (query) {
      this.setState(
        {
          query: e.target.value,
        },
        () => {
          const { query } = this.state;
          return setTimeout(() => {
            this.props.searchBookUpdate(query);
          }, 200);
        }
      );
    } else {
      this.setState(
        {
          query: "",
        },
        () => {
          this.props.clearSearch();
          const { query } = this.state;
          this.props.searchBookUpdate(query);
        }
      );
    }
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

  handleClick = () => {
    this.props.clearSearch();
  };

  render() {
    const { books } = this.props;
    const { query } = this.state;
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search" onClick={this.handleClick}>
                Close
              </button>
            </Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                name="search"
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
