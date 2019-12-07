import React, { Component } from 'react'

export class Form2 extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleFormSubmit}>
                <input type="text" name="newTask" onChange={this.props.handleInputChange} placeholder='Enter Your Task'/>
                <br/>
                <br/>
                <input type="date" name="newDate"  onChange={this.props.handleInputChange}/>
                <br/>
                <br/>
                <button type='submit'>Add</button>
                
            </form>
        )
    }
}

export default Form2