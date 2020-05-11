import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ToDos from "./components/ToDos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";
import About from "./components/pages/About";

class App extends React.Component {
  state = {
    todos: [],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <ToDos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/About" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
