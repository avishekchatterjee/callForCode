import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default class donationTracking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donationDetails: []
        }
    }

    componentDidMount() {
        let formData = {donateItem:'', pincode: ''}
        fetch('https://cfc2020apis.azurewebsites.net/api/Donation/fetchDonation', {
            method: 'POST',
            headers: {'content-type': 'application/json;charset=utf-8'},
            body: JSON.stringify(formData)
        }).then(response => response.json())
        .then(data => {
            this.setState({ donationDetails: data.value });
        });
    }
    

    render() {      
        const { donationDetails } = this.state;
        return (   
            <>
                <div className='header-box'>Donation Tracking list</div>
            
                {donationDetails.length > 0 && donationDetails.map((row) => {
                    return (                            
                        <Row key={row.id}>
                            <Col xs={12} sm={6} style={{ height: '10rem' }}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{row.donateItem}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Note - {row.donationNote}</Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            Quantity - {row.itemQuantity}
                                        </Card.Subtitle>   
                                        <Card.Subtitle className="mb-1 text-muted">
                                            PinCode - {row.pincode}
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
