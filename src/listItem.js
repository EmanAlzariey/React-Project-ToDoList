import React, { Component } from 'react'

export class listItem extends Component {
    render() {
        return (
            <li>
               `${this.props.task.newTask} on ${this.props.task.newDate}` 
            </li>
        )
    }
}

export default listItem
