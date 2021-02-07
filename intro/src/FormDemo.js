import React, { Component } from 'react'

export default class FormDemo extends Component {
    state={userName:''}
    onChangeHandler=(e)=>{
        this.setState({userName:e.target.value})
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        alert(this.state.userName)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <input type="text" onChange={this.onChangeHandler}></input>
                    <h3>User Name {this.state.userName}</h3>
                    <button type="submit" className="btn btn-primary">Deneme</button>
                </form>
            </div>
        )
    }
}
