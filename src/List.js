import React, { Component } from 'react'
import ListItem from './ListItem'

export class List extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map((task,index) => {
                return <ListItem key={index} id={index} newTask={task.newTask} newDate={task.newDate} 
                deleteTask={this.props.deleteTask}  editTask={this.props.editTask}
                />
                })}
            </ul>
        )
    }
}

export default List
