import React from "react";
import { Link, Router } from "@reach/router";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import BookDetail from "./BookDetail";

import GridView from "./GridView";
import ListView from "./ListView";
import NewBook from "./NewBook";

class BookList extends React.Component {
  render() {
    return (
      <div>
        <Typography component="h3" variant="h3" gutterBottom>
          Book List
        </Typography>
        <Link to="/">
          <Button>Grid view</Button>
        </Link>
        <Link to="list">
          <Button>List view</Button>
        </Link>

        <Router>
          <GridView default path="/" books={this.props.books} />
          <ListView path="list" books={this.props.books} />
          <BookDetail
            path=":id"
            books={this.props.books}
            onDelete={this.props.handleDelete}
          />
          <NewBook path="new" onSubmit={this.props.handleSubmit} />
        </Router>
      </div>
    );
  }
}

export default BookList;
