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
                    <div style={{ width: '10%', marginBottom: '-4px' }}>
                        <img src='img/CallForCodeLogo.png' alt='callForCodeImg' width="100" height="100"></img>
                    </div>
                    <div style={{ width: '70%', textAlign: 'center' }}>
                        <label className="header-main" >Call For Code COVID-2019 Portal</label>
                    </div>
                    <div style={{ width: '20%' }} className='heading'>
                        <Link className='link-alignment' to='/signup'>Sign Up</Link>
                        <Link className='link-alignment' to='/login'>Log In</Link>                      
                        <nav role="navigation">
                            <ul>                            
                                <li><a href="#">Donation</a>
                                <ul class="dropdown">
                                    <Link to='/' >Donation Entry</Link>
                                    <br></br>
                                    <Link to='/donationTracking'>Donation Tracking</Link>
                                </ul>
                                </li> 
                            </ul>
                        </nav>
                        <nav role="navigation">
                            <ul>                            
                                <li><a href="#">COVID</a>
                                <ul class="dropdown">
                                    <Link to='/' >Suspect Entry</Link>
                                    <Link to='/'>Suspect Tracking</Link>
                                    <Link to='/'>Patient Update</Link> 
                                </ul>
                                </li> 
                            </ul>
                        </nav>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/"><Redirect to="/login" /></Route>
                    <Route exact path='/signup'><SignUpComponent /></Route>
                    <Route exact path='/login'><LogInComponent /></Route>
                    <Route exact path='/donationTracking'><donationTracking /></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}