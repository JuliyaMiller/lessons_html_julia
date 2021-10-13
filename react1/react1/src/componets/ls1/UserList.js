import React, { Component } from 'react';
import UserItem from './UserItem';
import Form from './Form';

export default class UserList extends Component {
    state = {
        users: [
            {id: '1', name: 'Oleg'},
            {id: '2', name: 'Egor'},
            {id: '3', name: 'Artem'},
        ],
    };

    editUser = (newName, id) => {
        this.setState({
            users: this.state.users.map( user => {
                if(user.id === id){
                    user.name = newName
                }
                return user
            })
        })
    }

    addUser = newUser => {
        this.setState({
            users: [...this.state.users, newUser]
        })
    }

    remove = id => {
        this.setState({
            users: this.state.users.filter( user => user.id !== id)
        });
    }

    render() {
        const { users } = this.state;  
        return (
            <div className="list">
                <Form onSubmitUser={this.addUser}/>
                <ul>
                    {users.map( user => 
                        <UserItem 
                            key={user.id}
                            user={user}
                            onEdit = {this.editUser}
                            onDelete={this.remove}
                        />    
                    )}
                </ul>
            </div>
        )
    }
}

