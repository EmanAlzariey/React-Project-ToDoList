import React, { Component } from 'react'
import ListItem from './listItem'

export class List extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map((task,index) => {
                return <ListItem key={index} id={index} newTask={task.newTask} newDate={task.newDate} 
                deleteTask={this.props.deleteTask(id)}  editTask={this.props.editTask}
                />
                })}
            </ul>
        )
    }
}

export default List
