import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import LogInComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';
import AppHeader from '../SharedComponents/AppHeader';
import AppFooter from '../SharedComponents/AppFooter';
/**Bootstrap imports**/
import { Container } from 'react-bootstrap';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <AppHeader />
                  
                        <Container fluid className="main-div">
                            {/* <div className='header'>
                            <div style={{ width: '10%', marginBottom: '-4px' }}>

                            </div>
                           <div style={{ width: '70%', textAlign: 'center' }}>
                                <label className="header-main" ></label>
                            </div> 
                        <div style={{ width: '20%' }} className='heading'>
                            <Link className='link-alignment' to='/signup'>Sign Up</Link>
                            <Link className='link-alignment' to='/login'>Log In</Link>
                            <nav role="navigation">
                                <ul>
                                    <li><a href="#">Donation</a>
                                        <ul class="dropdown">
                                            <li><a href="#">Entry</a></li>
                                            <li><a href="#">Tracking</a></li>
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
                        </div> */}
                            <Switch>
                                <Route exact path="/"><Redirect to="/login" /></Route>
                                <Route exact path='/signup'><SignUpComponent /></Route>
                                <Route exact path='/login'><LogInComponent /></Route>
                            </Switch>
                        </Container>
                   
                    <AppFooter />
                </BrowserRouter>
            </>
        )
    }
}