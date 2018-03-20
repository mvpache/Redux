import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newTodo: ''
    };
  }

  handleInput = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  submitTodo = (event) => {
    console.log('submit', this.props.todos)
    event.preventDefault();
    console.log(this.state.newTodo)
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  }

  render() {
    return (
      <div className="App">
        Todo App
        <form onSubmit={this.submitTodo}>
          <input type="text" onChange={this.handleInput} placeholder="Add a new todo" value={this.state.newTodo} />
        </form>
        <div>
          {console.log('prop', this.props.todos)}
          <ol>
          {this.props.todos.map((todo, i) => {
            return (
              <li key={i}>
                {todo.text}
              </li>
            )
          })}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { addTodo })(App);
