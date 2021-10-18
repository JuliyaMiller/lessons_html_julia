import React, { useState } from 'react';
import UserItem from './UserItem';

export default function UserList() {
    const  [users, setUser] = useState([ {id: 1, name: 'Oleg'}, {id: 2, name: 'Egor'}, {id: 3, name: 'Artem'},]); 

    const addUser = (user) => {
        setUser([...user])
    } 
    
    return (
        <div>
           {users.map(user => <UserItem user={user} key={user.id} />)} 
        </div>
    )
}
