import React from "react";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author_first: "",
      author_last: "",
      id: Date.now()
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form
        onSubmit={async event => {
          await this.handleSubmit(event);
          navigate("/");
        }}
      >
        <TextField
          id="title-input"
          label="Title"
          margin="normal"
          onChange={this.handleChange("title")}
          required
          type="text"
          value={this.state.title}
        />
        <TextField
          id="author-first-input"
          label="Author First Name"
          margin="normal"
          onChange={this.handleChange("author_first")}
          required
          type="text"
          value={this.state.author_first}
        />
        <TextField
          id="author-last-input"
          label="Author Last Name"
          margin="normal"
          onChange={this.handleChange("author_last")}
          required
          type="text"
          value={this.state.author_last}
        />
        <Button type="submit" value="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default NewBook;
