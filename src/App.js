import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      newTask: '',
      newDate: '',
      tasks: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let tasks = [...this.state.tasks];

    tasks.push({newTask: this.state.newTask, newDate: this.state.newDate});

    this.setState({
      tasks,
      newTask: '',
      newDate: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Container handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } 
        newTask={ this.state.newTask } newDate={ this.state.newDate } tasks={ this.state.tasks }/>
        
      </div>
    );
  }
}

export default App;
