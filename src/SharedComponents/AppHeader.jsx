import React from 'react';
import { Link } from 'react-router-dom';
/**Bootstrap imports**/
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const AppHeader = (props) => {

    const logout = () => {
        console.log('Logout function')
    }

    return (
        <Navbar bg="dark" variant="dark  " expand="lg">
            <Navbar.Brand className="mr-0"> <img src='img/CallForCodeLogo.png' alt='callForCodeImg' style={{ width: '4rem' }}></img></Navbar.Brand>
            <span className="mr-auto portal-title">Call For Code COVID-2019 Portal</span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Donation" id="basic-nav-dropdown1">
                        <NavDropdown.Item href="#action/3.1">Entry</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Tracking</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Covid" id="basic-nav-dropdown2">
                        <NavDropdown.Item href="#action/3.1">Suspect Entry</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Suspect Tracking</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Patient Update</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='nav-links' onClick={() => logout()}>Logout</Nav.Link>
                    <Nav.Link as={Link} className='nav-links' to='/signup'>Sign Up</Nav.Link>
                    <Nav.Link as={Link} className='nav-links' to='/login'>Log In</Nav.Link>
                </Nav>               
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppHeader;