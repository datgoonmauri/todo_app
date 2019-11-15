import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import {Route, NavLink} from "react-router-dom";
import TodoList from "./TodoList.js";
import {connect} from "react-redux"
import {addTodo, clearCompletedTodos} from "./actions"


class App extends Component {
  state = {
    todos: todosList,
    value: ""
  };
  //event handlers- inside we are using this.setState
  handleDelete = todoIdToDelete => {
    //identify what we want to change in state ;
    //create a copy of state and modify it ;
    const newTodoList = this.state.todos.filter(
      todo => todo.id !== todoIdToDelete);
    //overwrite old state with new state 
    this.setState({ todos: newTodoList });
  };

  handleCreate = (event) => {
    if (event.key === "Enter") {
this.props.addTodo(this.state.value);
this.setState ({ value: ""});

    }

  };

  handleChange = (event) => {
    this.setState({value: event.target.value });
  };

  
  handleClearClick = () => {
    let todos = this.props.todos;
    todos = todos.filter(a => !a.completed);
    this.setState({ todos: todos });
  };
  
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown={this.handleCreate}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </header>
      <Route 
      exact
        path = "/"
          render= { ()  => ( 
        <TodoList 
        // handleToggle={this.handleToggle}
        handleDelete={this.handleDelete}
        todos = {this.props.todos} 
            />
          )}
          />
          <Route 
          path="/active"
            render= {()  => ( 
          <TodoList 
          // handleToggle={this.handleToggle}
          handleDelete={this.handleDelete}
          todos={this.props.todos.filter(todo => todo.completed === false)} 
              />
            )}
            />
            <Route 
            path="/completed"
              render= {()  => ( 
            <TodoList 
            // handleToggle={this.handleToggle}
            handleDelete={this.handleDelete}
            todos={this.props.todos.filter(todo => todo.completed === true)} 
                />
              )}
              />
         
              <footer className="footer">
              {/* <!-- This should be `0 items left` by default --> */}
              <span className="todo-count">
                <strong>{this.props.todos.length}</strong> item(s) left
              </span>
              <ul className="filters">
                <li>
                  <NavLink exact to="/"activeClassName="selected">All</NavLink>
                </li>
                <li>
                  <NavLink to="/active"activeClassName="selected">Active</NavLink>
                </li>
                <li>
                  <NavLink to ="/completed"activeClassName="selected">Completed</NavLink>
                </li>
              </ul>
             
                <button className="clear-completed"
                onClick={this.props.clearCompletedTodos}>
               
                  Clear completed
                </button>
            </footer> 
      </section>
    );
  }
}


const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = {
  addTodo, 
  clearCompletedTodos

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
