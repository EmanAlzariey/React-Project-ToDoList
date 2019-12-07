import React, { Component } from 'react'

export class ListItem extends Component {
    render() {
        return (
            <div>
            <li>
               {this.props.newTask} 
            </li>
            <button onClick={()=>{this.props.editTask(this.props.id)}}>Edit</button>
            <button onClick={()=>{this.props.deleteTask(this.props.id)}} >Delete</button>
            </div>
        )
    }
}

export default ListItem
