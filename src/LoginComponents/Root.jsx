import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import LogInComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <BrowserRouter>
                <div className='pull-right heading'>
                    <Link className='link-alignment' to='/signup'>Sign Up</Link>
                    <Link className='link-alignment' to='/login'>Log In</Link>
                </div>
                <Switch>
                    <Route path='/signup'><SignUpComponent /></Route>
                    <Route path='/login'><LogInComponent /></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}