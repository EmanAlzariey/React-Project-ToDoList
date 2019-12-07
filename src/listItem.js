import React, { Component } from 'react'

export class listItem extends Component {
    render() {
        return (
            <div>
            <li>
               {this.props.newTask} 
            </li>
            <button onClick={()=>{this.props.editTask(this.props.id)}} />
            </div>
        )
    }
}

export default listItem
