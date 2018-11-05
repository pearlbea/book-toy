import React from "react";
import { Link } from "@reach/router";
import AddButton from "./AddButton";

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
      <AddButton />
    </div>
  );
};

export default ListView;
