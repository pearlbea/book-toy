import React, { Component } from "react";
import BookList from "./BookList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const initialBooks = this.props.books;
    this.state = {
      books: initialBooks
    };
  }

  handleDelete = bookId => {
    const index = this.state.books.findIndex(el => String(el.id) === bookId);
    let editedBooks = this.state.books.slice();
    editedBooks.splice(index, 1);
    this.setState({ books: editedBooks });
  };

  handleSubmit = book => {
    this.setState(state => {
      return { books: state.books.concat(book) };
    });
  };

  render() {
    return (
      <div className="App">
        <BookList
          books={this.state.books}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
