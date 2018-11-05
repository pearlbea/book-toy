import React from "react";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const BookList = props => {
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
      <div>{props.children}</div>
    </div>
  );
};

export default BookList;
