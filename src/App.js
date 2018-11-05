import React, { Component } from "react";
import { Router } from "@reach/router";

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

  render() {
    return (
      <div className="App">
        <Router>
          <BookList path="/">
            <GridView default path="grid" books={this.props.books} />
            <ListView path="list" books={this.props.books} />
          </BookList>
        </Router>
      </div>
    );
  }
}

export default App;
