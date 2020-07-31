import React, { Component } from 'react';
import { connect } from 'react-redux';
import covidData from '../JSONdb/COVIDTracker.json';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class COVIDPatientDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidPatientList: [],
            isGovtEmployee: false
        }
    }

    componentDidMount() {
        if (covidData.length > 0) {
            const covidPatientList = covidData.filter((row) => {
                return row.COVIDConfirm === true && row.PatientCured === false ;
            });
            this.setState({ covidPatientList });
        }
    }

    render() {

        const { covidPatientList, isGovtEmployee } = this.state;
        return (
            <>
            <div className='header-box'>Patient list</div>
                {covidPatientList.length > 0 && covidPatientList.map((row) => {
                    return (                       
                        <Row key={row.id}>
                            <Col xs={12} sm={6} style={{ height: '12rem' }}>
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
                                        <Card.Subtitle className="mb-1 text-muted">                                        
                                            Address - {row.PatientDetails.Address}
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-1 text-muted">
                                            Pin - {row.PatientDetails.PinCode}
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

                }
                )
                }
            </>
            
        )        
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(COVIDPatientDetails);