import React from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

class ToDos extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}
          />
        ))}
      </div>
    );
  }
}
// PropTypes
ToDos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default ToDos;
