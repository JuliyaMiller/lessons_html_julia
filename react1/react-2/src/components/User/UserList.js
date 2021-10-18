import React from 'react';
import UserItem from './UserItem';


export default function UserList() {
    let users = [ {id: 1, name: 'Oleg'}, {id: 2, name: 'Egor'}, {id: 3, name: 'Artem'},]
    return (
        <div>
           {users.map(user => <UserItem user={user} key={user.id} />)} 
        </div>
    )
}
