import React, { Component } from 'react';
import { connect } from 'react-redux';

import donationData from '../JSONdb/DonationDetails.json';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class donationTracking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donationDetails: []
        }
    }

    componentDidMount() {
        if (donationData.length > 0) {
            const donationDetails = donationData.filter((row) => {              
                return row;
            });
            this.setState({ donationDetails });
            
        }
    }

    render() {      
        
    const { donationDetails } = this.state;
       
       console.log (donationDetails);
        return (
           
            <>
            <div className='header-box'>Donation Tracking list</div>
            
            {donationDetails.length > 0 && donationDetails.map((row) => {
                return (                            
                    <Row key={row.id}>
                        <Col xs={12} sm={6} style={{ height: '10rem' }}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{row.ItemDetails}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Quentity - {row.ItemQuantity}</Card.Subtitle>
                                    <Card.Subtitle className="mb-1 text-muted">
                                        PinCode - {row.PinCode}
                                    </Card.Subtitle>                                       
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={5} className="mt-4">
                        
                        </Col>
                    </Row>
                )

            })}
        </>
            
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state);
   
}

const mapDispatchToProps = dispatch => {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(donationTracking);