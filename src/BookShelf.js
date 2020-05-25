import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class BookShelf extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
  };

  render() {
    const { shelf, books } = this.props;
    console.log(books);
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf"></div>
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <Book
                  key={book.id}
                  title={book.title}
                  authors={[book.authors]}
                  imageLink={book.imageLinks.thumbnail}
                  shelf={book.shelf}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
