import React from 'react'

export default function UserItem(props) {
    let user = props.user;            
    return (
        <div>
            {user.name}
        </div>
    )
}
