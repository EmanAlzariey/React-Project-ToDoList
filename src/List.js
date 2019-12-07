import React, { Component } from 'react'
import ListItem from './ListItem'

export class List extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map((task,index) => {
                return <ListItem key={index} id={index} newTask={task.newTask} newDate={task.newDate}/>
                })}
            </ul>
        )
    }
}

export default List
