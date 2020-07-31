import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
import ChatBot from '../ChatBot/ChatBot';

/**Bootstrap imports**/
import { Container } from 'react-bootstrap';

export default class Root extends Component {
    constructor(props) {
        super(props);        
        this.state={}
    }
    
    render() {
        return (
            <BrowserRouter>
                <AppHeader />
                <Container fluid className="main-div">
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
                <ChatBot />               
                <AppFooter />
            </BrowserRouter>
        )
    }
}