import React, { Component } from 'react'
import Form2 from './Form2'
import ToDoList from './ToDoList'

 class Container extends Component {
 
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
            <div>
                <Form2 handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } 
                newTask={ this.state.newTask } newDate={ this.state.newDate } />
                <ToDoList tasks={ this.state.tasks }/>
            </div>
        )
    }
}

export default Container
