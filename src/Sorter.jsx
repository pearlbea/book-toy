import React from "react";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";
import { AccessTime, ArrowDropUp, ArrowDropDown } from "@material-ui/icons";

import "./Sorter.css";

const Sorter = props => (
  <div className="Sorter">
    <Button
      className={`sort-button ${props.sort === "alpha-asc" ? "active" : ""}`}
      variant="outlined"
      component={Link}
      to={`${props.path}?sort=alpha-asc`}
    >
      A-Z <ArrowDropDown />
    </Button>
    <Button
      className={`sort-button ${props.sort === "alpha-desc" ? "active" : ""}`}
      variant="outlined"
      component={Link}
      to={`${props.path}?sort=alpha-desc`}
    >
      A-Z <ArrowDropUp />
    </Button>

    <Button
      className={`sort-button ${props.sort === "added-asc" ? "active" : ""}`}
      variant="outlined"
      component={Link}
      to={`${props.path}?sort=added-asc`}
    >
      <AccessTime />
      <ArrowDropDown />
    </Button>
    <Button
      className={`sort-button ${props.sort === "added-desc" ? "active" : ""}`}
      variant="outlined"
      component={Link}
      to={`${props.path}?sort=added-desc`}
    >
      <AccessTime />
      <ArrowDropUp />
    </Button>
  </div>
);

export default Sorter;
