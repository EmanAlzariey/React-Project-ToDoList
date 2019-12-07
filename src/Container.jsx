import React, { Component } from 'react'

export class Container extends Component {
    constructor() {
        super();
    
        this.state = {
          taskname: '',
          date: '',
          items: []
        }
      };
submitHandler= (e)=>{

}
changeHandler =(e)=>{

}

    render() {
        return (
            <div>
                <Form />
                <ToDoList />
            </div>
        )
    }
}

export default Container
