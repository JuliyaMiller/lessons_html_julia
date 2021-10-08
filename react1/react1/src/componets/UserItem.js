import React, { Component } from 'react'

export default class UserItem extends Component {
    render() {
        const {user} = this.props;
        return (
            <div>
                <li>{user.name}</li>
            </div>
        )
    }
}
