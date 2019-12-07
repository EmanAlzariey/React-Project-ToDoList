import React, { Component } from 'react'
import Form2 from './Form2'
import List from './List'

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
        let myTask= {
            newTask: this.state.newTask,
             newDate: this.state.newDate
        }
        let tasks = [...this.state.tasks,myTask];
        this.setState({
          tasks,
          newTask: '',
          newDate: ''
        });
      };
    
      handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      };
    
    render() {
        return (
            <div>
                <Form2 handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } />
                <List tasks={ this.state.tasks } />
            </div>
        )
    }
}

export default Container
