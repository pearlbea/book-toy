import React from "react";
import { Link } from "@reach/router";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { Info } from "@material-ui/icons";

import AddButton from "./AddButton";

const GridView = props => (
  <div>
    <GridList>
      {props.books.map(book => (
        <GridListTile key={book.id}>
          <GridListTileBar
            title={book.title}
            subtitle={
              <span>
                by {book.author_first} {book.author_last}
              </span>
            }
            actionIcon={
              <IconButton component={Link} to={`../${book.id}`}>
                <Info />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
    <AddButton />
  </div>
);

export default GridView;
