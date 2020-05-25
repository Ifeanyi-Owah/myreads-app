import React, { Component } from "react";

class Book extends Component {
  render() {
    const { title, authors, imageLink } = this.props;
    // console.log(shelf);
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 130,
                height: 193,
                backgroundImage: `url(${imageLink})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors.map((author) => {
              return (
                <p key={title}>
                  <span>{author}</span>
                  <br />
                </p>
              );
            })}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
