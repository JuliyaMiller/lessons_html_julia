import React from 'react'; 
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'

import Counter from './Counter/Counter';
import UserList from './User/UserList';


export default function Routes() {
    const admin = true;
    return (
        <Router>
            <NavLink to="/">home</NavLink>
            <NavLink to="/user">user</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
            <Switch>
                <Route exact path="/" component={ Counter }/>
                { admin && <Route path="/user" component={ UserList }/>}
                <Route path="*">
                    <h1>404</h1>
                </Route>
            </Switch>
        </Router>
    )
}
