import React, { Component } from "react";
import { Router } from "@reach/router";

import BookDetail from "./BookDetail";
import BookList from "./BookList";
import GridView from "./GridView";
import ListView from "./ListView";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.books
    };
  }

  handleDelete() {
    // TODO: delete a book
    console.log("deleted");
  }

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
          </BookList>
        </Router>
      </div>
    );
  }
}

export default App;
