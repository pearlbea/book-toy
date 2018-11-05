import React, { Component } from "react";
import { Router } from "@reach/router";

import BookDetail from "./BookDetail";
import BookList from "./BookList";
import GridView from "./GridView";
import ListView from "./ListView";
import NewBook from "./NewBook";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.books
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
        <Router>
          <BookList path="/">
            <GridView default path="grid" books={this.state.books} />
            <ListView path="list" books={this.state.books} />
            <BookDetail
              path=":id"
              books={this.state.books}
              onDelete={this.handleDelete}
            />
            <NewBook path="new" onSubmit={this.handleSubmit} />
          </BookList>
        </Router>
      </div>
    );
  }
}

export default App;
