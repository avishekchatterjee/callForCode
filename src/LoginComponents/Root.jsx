import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
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
                <div className='header'>
                    <div style={{ width: '10%' }}>
                        <img src="img/CallForCodeLogo.png" width="100" height="100"></img>
                    </div>
                    <div style={{ width: '75%', textAlign: 'center' }}>
                        <label className="header-main" >Call For Code COVID-2019 Portal</label>
                    </div>
                    <div style={{ width: '15%' }} className='heading'>
                        <Link className='link-alignment' to='/signup'>Sign Up</Link>
                        <Link className='link-alignment' to='/login'>Log In</Link>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/"><Redirect to="/login" /></Route>
                    <Route exact path='/signup'><SignUpComponent /></Route>
                    <Route exact path='/login'><LogInComponent /></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}