import React from "react";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

const GridView = props => (
  <div>
    <GridList>
      {props.books.map(book => (
        <GridListTile key={book.id}>
          <GridListTileBar
            title={book.title}
            subtitle={<span>by {book.author_first}</span>}
            actionIcon={
              <IconButton>
                <Link to={`../${book.id}`}>Info</Link>
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
    <Link to="/new">
      <Button variant="fab">New</Button>
    </Link>
  </div>
);

export default GridView;
