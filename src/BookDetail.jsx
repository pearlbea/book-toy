import React from "react";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    const book = props.books.find(book => String(book.id) === props.id);
    this.state = {
      book: book
    };
  }

  onDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div>
        <div>Book {this.props.id}</div>
        <h2>{this.state.book.title}</h2>
        <h3>
          by {this.state.book.author_first} {this.state.book.author_last}
        </h3>
        <Button
          onClick={async () => {
            await this.onDelete();
            navigate("/");
          }}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default BookDetail;
