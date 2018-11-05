import React from "react";
import { Link } from "@reach/router";
import Card from "@material-ui/core/Card";
import AddButton from "./AddButton";

const ListView = props => {
  return (
    <div>
      <div className="book-card-list">
        {props.books.map(book => (
          <Card key={book.id} className="book-card">
            <Link to={`../${book.id}`}>{book.title}</Link>
          </Card>
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default ListView;
