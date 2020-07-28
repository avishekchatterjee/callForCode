import React, { Component } from 'react';
import { connect } from 'react-redux';
import covidData from '../JSONdb/COVIDTracker.json';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class CovidSuspectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidSuspectList: [],
            isGovtEmployee: false
        }
    }

    componentDidMount() {
        if (covidData.length > 0) {
            const covidSuspectList = covidData.filter((row) => {
                return row.COVIDSuspect === true;
            });
            this.setState({ covidSuspectList });
        }
    }

    render() {

        const { covidSuspectList, isGovtEmployee } = this.state;
        return (
            <>
                {covidSuspectList.length > 0 && covidSuspectList.map((row) => {
                    return (
                        <Row key={row.id}>
                            <Col xs={12} sm={6} style={{ height: '10rem' }}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{row.PatientDetails.PatientName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Covid Status - {row.COVIDConfirm ? 'Confirmed' : 'Not Confirmed'}</Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            Travel History - {row.PatientDetails.TravelHistory}
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            Patient Condition - {row.PatientDetails.PatientCondition}
                                        </Card.Subtitle>                                       
                                        <Card.Text>                                        
                                            Address - {row.PatientDetails.Address}
                                        </Card.Text>
                                        <Card.Text>
                                            Pin - {row.PatientDetails.PinCode}
                                        </Card.Text>                                       
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

const mapStateToProps = state => {
    console.log('state', state);

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(CovidSuspectList);