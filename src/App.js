import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {description: 'Code React', isCompleted: true},
        {description: 'Grocery shopping', isCompleted: false},
        {description: 'Book massage appointment', isCompleted: false}
      ],
      newTodoDescription: ''
    };
  }

  handleChange(e){
    this.setState({ newTodoDescription: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.newTodoDescription) {return}
    const newTodo = {description: this.state.newTodoDescription, isCompleted:false};
    this.setState({todos: [...this.state.todos, newTodo], newTodoDescription: ''});
  }

  toggleComplete(index){
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos: todos});
  }

  deleteTodo(index){
    console.log("onDelete was called for " + index);
    let arr = this.state.todos;
    arr.splice(index, 1);
    this.setState({todos: arr})
  }

  render() {
    return (
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) =>
           <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } onDelete={() => this.deleteTodo(index)} />
         )}
      </ul>
      <form onSubmit={ (e) => this.handleSubmit(e)}>
        <input type="text" value={this.state.newTodoDescription} onChange={ (e) => this.handleChange(e)} />
        <input type="submit" />
      </form>
      </div>
    );
  }
}

export default App;
