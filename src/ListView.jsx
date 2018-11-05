import React from "react";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";

const ListView = props => {
  return (
    <div>
      <ul>
        {props.books.map(book => (
          <li key={book.id}>
            <Link to={`../${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <Button variant="fab" href="/new">
        New
      </Button>
    </div>
  );
};

export default ListView;
