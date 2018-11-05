import React from "react";

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
            actionIcon={<IconButton href={`../${book.id}`}>i</IconButton>}
          />
        </GridListTile>
      ))}
    </GridList>
    <Button variant="fab" href="/new">
      New
    </Button>
  </div>
);

export default GridView;
