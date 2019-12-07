import React, { Component } from 'react'

export class ListItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
            <li>
               {this.props.newTask} 
            </li>
            <button id="Button2"onClick={()=>{this.props.editTask(this.props.id)}} >  Edit
          </button>
            <button id="Button2" onClick={()=>{this.props.deleteTask(this.props.id)}} >  Remove
          </button>
            </div>
        )
    }
}

export default ListItem
