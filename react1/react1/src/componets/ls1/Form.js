import React, { Component } from 'react'

export default class Form extends Component {
    

    constructor(props){
        super(props);
        this.state = {
            newUserName: props.user?.name
        }
    }

    onChangeName = e => {
        this.setState({
            newUserName: e.target.value
        })
    }

    submitUser = () => {
        const { user } = this.props;
        const { newUserName: name } = this.state;
        const newUser = {name, id: user ? user.id: Date.now() };
        if(!newUser.name) return alert('Name is required');
        this.props.onSubmitUser(newUser);

        this.setState({
            newUserName: ''
        })
    }

    render() {
        const { newUserName } = this.state;
        return (
            <div>
                <input 
                    value={newUserName}
                    onChange={this.onChangeName}
                    placeholder="Egor"
                    name="name" 
                    type="text"
                />
                <button onClick={this.submitUser}>Submit User</button>
            </div>
        )
    }
}
