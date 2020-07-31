import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class CovidSuspectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidSuspectList: [],
            isGovtEmployee: true
        }
    }

    componentDidMount() {
        let formData = {"covIdSuspect": true}
        fetch('https://cfc2020apis.azurewebsites.net/api/Patient/fetchPatient', {
            method: 'POST',
            headers: {'content-type': 'application/json;charset=utf-8'},
            body: JSON.stringify(formData)
        }).then(response => response.json())
        .then(data => {
            this.setState({ covidSuspectList: data.value });
        });
    }

    render() {

        const { covidSuspectList, isGovtEmployee } = this.state;
        return (
            <>
            <div className='header-box'>New Suspect list</div>
                {covidSuspectList.length > 0 && covidSuspectList.map((row) => {
                    return (                       
                        <Row key={row.id}>
                            <Col xs={12} sm={6} style={{ height: '10rem' }}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{row.patientName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Covid Status - {row.covidConfirm ? 'Confirmed' : 'Not Confirmed'}</Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            Travel History - {row.travleDetails}
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            Patient Condition - {row.patientCondition}
                                        </Card.Subtitle>                                       
                                        <Card.Subtitle className="mb-1 text-muted">                                        
                                            Address - {row.patientAddress}
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            Pin - {row.pincode}
                                        </Card.Subtitle>                                       
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={5} className="mt-4">
                            {isGovtEmployee && 
                                <Button variant="primary">Update</Button>
                            }
                            </Col>
                        </Row>
                    )

                })}
            </>
        )
    }
}
