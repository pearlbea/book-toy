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

      <Link to="/new">
        <Button variant="fab">New</Button>
      </Link>
    </div>
  );
};

export default ListView;
