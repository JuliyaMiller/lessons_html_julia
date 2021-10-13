import React, { Component } from 'react'

export default class UserItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: props.user, 
            change: false, 
            newUserName: props.user.name
        }
    }

    onChangeName = (e) => {
        this.setState({
            newUserName: e.target.value
        })
    }

    render() {
        const { user } = this.props;
        const { change, newUserName } = this.state;
        console.log( change );
        return (
            <div className="user-item">
                
                { change ? <div>
                        <input value={newUserName} onChange={this.onChangeName} />
                        <button onClick={() => {this.props.onEdit(newUserName, user.id)}}>Submit</button>
                    </div>: 
                    <h3>{user.name}</h3>
                
                }
                <button className="change" onClick={() => this.setState({change: !change})}>Change data</button>
                <button className="delete" onClick={() => this.props.onDelete(user.id)}>delete</button>
            </div>
        )
    }
}
