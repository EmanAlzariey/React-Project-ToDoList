import React, { Component } from 'react'

export class ListItem extends Component {
    render() {
        return (
            <div>
            <li>
               {this.props.newTask} 
            </li>
            <button onClick={()=>{this.props.editTask(this.props.id)}} />
            <button onClick={()=>{this.props.deleteTask(this.props.id)}} />
            </div>
        )
    }
}

export default ListItem
