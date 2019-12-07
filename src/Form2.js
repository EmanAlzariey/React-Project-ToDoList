import React, { Component } from 'react'

export class Form2 extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <input type="text" name="task" onChange={this.props.changeHandler} placeholder='Enter Your Task'/>
                <br/>
                <br/>
                <input type="date" name="date" onChange={this.props.changeHandler}/>
                <br/>
                <br/>
                <button type='submit'>Add</button>
                
            </form>
        )
    }
}

export default Form2