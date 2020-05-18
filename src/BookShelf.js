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
      console.log(books);
      this.setState(() => {
        return {
          books: books.map((book) => {
            return {
              id: book.id,
              title: book.title,
              authors: book.authors,
              imageLink: book.imageLinks.thumbnail,
              shelf: book.shelf,
            };
          }),
        };
      });
    });
  }

  render() {
    const { shelf } = this.props;
    const { books } = this.state;
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
                  imageLink={book.imageLink}
                  bookShelf={book.shelf}
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
