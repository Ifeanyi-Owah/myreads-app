import React, { Component } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import PropTypes from "prop-types";

class BookShelf extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
  };

  state = {
    books: [],
  };

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

  updateShelf = (id, shelf) => {
    const newBook = this.state.books.find((book) => book.id === id);
    BooksAPI.update(newBook, shelf).then(() => {
      return BooksAPI.getAll().then((books) => {
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
    });
  };

  render() {
    const { books } = this.state;
    const { title, shelf } = this.props;
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
                      updateBookShelf={this.updateShelf}
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

//
