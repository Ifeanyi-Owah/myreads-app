import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class BookShelf extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  };
  state = {
    book: null,
    shelf: "",
  };

  updateBook = (idx, shelf) => {
    const updatedBook = this.props.books.find((b) => b.id === idx);
    this.setState(
      {
        book: updatedBook,
      },
      () => {
        const { book } = this.state;
        this.props.updateBookShelf(book, shelf);
      }
    );
  };

  render() {
    const { title, shelf, books } = this.props;
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf"></div>
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => {
                return (
                  book.shelf === shelf && (
                    <Book
                      key={book.id}
                      {...book}
                      updateBook={this.updateBook}
                    />
                  )
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
