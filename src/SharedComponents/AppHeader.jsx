import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../LoginComponents/loginActions';
/**Bootstrap imports**/
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const AppHeader = (props) => {

    const history = useHistory();

    const logout = async () => {
        await props.logout();
        history.push("/login");
    }

    return (
        <Navbar bg="dark" variant="dark  " expand="lg">
            <Navbar.Brand className="mr-0"> <img src='img/CallForCodeLogo.png' alt='callForCodeImg' style={{ width: '4rem' }}></img></Navbar.Brand>
            <span className="mr-auto portal-title">Call For Code COVID-2019 Portal</span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Donation" id="basic-nav-dropdown1">
                        {
                            props.loggedIn && <NavDropdown.Item as={Link} className='nav-links' to="/donationEntry">Entry</NavDropdown.Item>
                        }
                        <NavDropdown.Item as={Link} className='nav-links' to="/donationTracking">Tracking</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Covid" id="basic-nav-dropdown2">
                        {props.loggedIn && <NavDropdown.Item as={Link} className='nav-links' to="/newSuspect">New Suspect</NavDropdown.Item>}
                        <NavDropdown.Item as={Link} className='nav-links' to="/suspectList">Suspect Tracking</NavDropdown.Item>
                        {props.loggedIn && props.loggedInUserProfile.govtOfficial && <NavDropdown.Item as={Link} className='nav-links' to="/patientUpdate">Patient Update</NavDropdown.Item>}
                        {props.loggedIn && props.loggedInUserProfile.govtOfficial && <NavDropdown.Item as={Link} className='nav-links' to="/patientList">Patient List</NavDropdown.Item>}
                    </NavDropdown>
                    {props.loggedIn && <Nav.Link className='nav-links' onClick={logout}>Logout</Nav.Link>}
                    {!props.loggedIn && <Nav.Link as={Link} className='nav-links' to='/signup'>Sign Up</Nav.Link>}
                    {!props.loggedIn && <Nav.Link as={Link} className='nav-links' to='/login'>Log In</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducers.loggedIn,
        loggedInUserProfile: state.loginReducers.userProfile

    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onChangeHandler: (e, stateName) => { dispatch(onChangeHandler(e, stateName)) },
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);