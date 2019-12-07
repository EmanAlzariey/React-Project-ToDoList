import React, { Component } from 'react'
import listItem from './listItem'

export class List extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map((task,index) => {
                return <listItem key={index} id={index} newTask={task.newTask} newDate={task.newDate}/>
                })}
            </ul>
        )
    }
}

export default List
