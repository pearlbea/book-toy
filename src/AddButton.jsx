import React from "react";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";
import { Add } from "@material-ui/icons";

const AddButton = () => {
  return (
    <Button component={Link} to="/new" variant="fab" className="add-button">
      <Add />
    </Button>
  );
};

export default AddButton;
