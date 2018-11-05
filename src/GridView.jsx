import React from "react";
import { Link } from "@reach/router";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { Info } from "@material-ui/icons";

import AddButton from "./AddButton";
import Sorter from "./Sorter";
import { ascSort, descSort } from "./utilities";

class GridView extends React.Component {
  sortedBooks = [];
  sort = "alpha-asc";

  componentWillMount = () => {
    const sort = this.getSortFromParams(window.location.search);
    this.handleSortChange(sort);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.location.search !== this.props.location.search) {
      const sort = this.getSortFromParams(nextProps.location.search);
      this.handleSortChange(sort);
    }
  };

  getSortFromParams(search) {
    const urlParams = new URLSearchParams(search);
    return urlParams.get("sort") || "alpha-asc";
  }

  handleSortChange(sort) {
    switch (sort) {
      case "alpha-desc":
        this.sort = "alpha-desc";
        this.sortedBooks = descSort(this.props.books, "title");
        break;
      case "added-asc":
        this.sort = "added-asc";
        this.sortedBooks = ascSort(this.props.books, "id");
        break;
      case "added-desc":
        this.sort = "added-desc";
        this.sortedBooks = descSort(this.props.books, "id");
        break;
      default:
        this.sort = "alpha-asc";
        this.sortedBooks = ascSort(this.props.books, "title");
        break;
    }
  }

  render() {
    return (
      <div>
        <Sorter path={this.props.location.pathname} sort={this.sort} />
        <GridList className="grid-list">
          {this.sortedBooks.map(book => (
            <GridListTile key={book.id} className="grid-card">
              <GridListTileBar
                className="grid-card-title"
                title={book.title}
                subtitle={
                  <span>
                    by {book.author_first} {book.author_last}
                  </span>
                }
                actionIcon={
                  <IconButton
                    className="info-button"
                    component={Link}
                    to={`../${book.id}`}
                  >
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
  }
}
export default GridView;
