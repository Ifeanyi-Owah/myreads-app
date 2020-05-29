import React, { Component } from "react";
import Book from "./Book";

class BookSearch extends Component {
  state = {
    book: null,
    query: "",
    isQueryEmpty: false,
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
          this.props.searchBookUpdate(query);
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
      return <h2>No results...Refresh page to start a new search</h2>;
    }
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              //   onClick={() => this.setState({ showSearchPage: false })}
            >
              Close
            </button>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.handleChange}
                onInvalid={this.handleInvalid}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {books.map((book) => (
                <Book {...book} addNewBook={this.addNewBook} query={query} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSearch;
