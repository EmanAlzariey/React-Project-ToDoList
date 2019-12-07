import React, { Component } from 'react'
import Form2 from './Form2'
import ToDoList from './ToDoList'

export class Container extends Component {
 

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
