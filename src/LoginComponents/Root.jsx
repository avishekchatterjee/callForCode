import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import LogInComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';
import AppHeader from '../SharedComponents/AppHeader';
import AppFooter from '../SharedComponents/AppFooter';
import CovidNewSuspect from '../CovidComponents/CovidSuspect';
import CovidSuspectList from '../CovidComponents/CovidSuspectList';
import CovidPatientUpdate from '../CovidComponents/COVIDPatientUpdate';
import DonationEntry from '../DonationComponents/donationEntry';
import DonationTracking from '../DonationComponents/donationTracking';
import COVIDPatientDetails from '../CovidComponents/COVIDPatientDetails';
/**Bootstrap imports**/
import { Container } from 'react-bootstrap';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (          
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
                                <Route exact path='/newSuspect'><CovidNewSuspect /></Route>
                                <Route exact path='/suspectList'><CovidSuspectList /></Route>
                                <Route exact path='/patientUpdate'><CovidPatientUpdate /></Route>
                                <Route exact path='/donationEntry'><DonationEntry /></Route>
                                <Route exact path='/donationTracking'><DonationTracking /></Route>
                                <Route exact path='/patientList'><COVIDPatientDetails /></Route>
                            </Switch>
                        </Container>
                   
                    <AppFooter />
                </BrowserRouter>         
        )
    }
}