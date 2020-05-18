import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  state = {
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        avatarURL:
          "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        shelf: this.props.books,
      },
      {
        title: "Ender's Game",
        author: "Orson Scott Card",
        avatarURL:
          "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        shelf: this.props.books,
      },
      {
        title: "1776",
        author: "David McCullough",
        avatarURL:
          "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        shelf: this.props.books,
      },
    ],
  };
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
                  title={book.title}
                  author={book.author}
                  avatarURL={book.avatarURL}
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
