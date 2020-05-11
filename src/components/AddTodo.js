import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);
      this.setState({
        title: "",
      });
      console.log(this.state.title);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.title);
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
