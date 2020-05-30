import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

class Book extends Component {
  state = {
    shelf: this.props.shelf,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    imageLink: PropTypes.string.isRequired,
  };

  handleChange = (e) => {
    if (this.props.query) {
      this.setState(
        {
          shelf: e.target.value,
        },
        () => {
          this.props.addNewBook(this.props.id, this.state.shelf);
        }
      );
    } else {
      this.setState(
        {
          shelf: e.target.value,
        },
        () => {
          this.props.updateBook(this.props.id, this.state.shelf);
        }
      );
    }
  };

  render() {
    const { title, authors, imageLink } = this.props;
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
              <select
                value={this.state.shelf}
                onChange={this.handleChange}
                selected
              >
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
                <p key={uuid()}>
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
