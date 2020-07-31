import React, { Component } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class COVIDPatientUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    openLink = () =>{
        window.open(
            'https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=47afdbae-d75e-4ed0-8f18-0938888d2fff&serviceInstanceID=e082c043-42fe-4831-ab3c-3b69af080ad3',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    render() {
       
        return (
            <div>
                <div className='header-box'>
                    Register New Suspect
                </div>
                <div className='details-block-left'>
                    <div className='textbox'>
                        <span className='left-span'>Patient ID</span>
                        <span><input type='lebel' value="123" /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Patient Name</span>
                        <span><input type='text' maxLength='30' value={this.props.name}
                            onChange={(e) => this.props.onChangeHandler(e, 'name')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Patient Age</span>
                        <span><input type='text' maxLength='30' value={this.props.age}
                            onChange={(e) => this.props.onChangeHandler(e, 'age')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Address</span>
                        <span><input type='textArea'  value={this.props.address}
                            onChange={(e) => this.props.onChangeHandler(e, 'address')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Area Pin</span>
                        <span><input type='text' maxLength='6' value={this.props.areaPin}
                            onChange={(e) => this.props.onChangeHandler(e, 'areaPin')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Patient Condition</span>
                        <span><input type='text'  value={this.props.patientCondition}
                            onChange={(e) => this.props.onChangeHandler(e, 'patientCondition')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Travel history</span>
                        <span><input type='CheckBox' value={this.props.travelHistory}
                            onChange={(e) => this.props.onChangeHandler(e, 'travelHistory')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Travel Details</span>
                        <span><input type='textbox' value={this.props.travelDetails}
                            onChange={(e) => this.props.onChangeHandler(e, 'travelDetails')} /></span>
                    </div>

                    <div className='textbox'>
                        <span className='left-span'>COVID Confirm</span>
                        <span><input type='CheckBox' value={this.props.covidConfirm}
                            onChange={(e) => this.props.onChangeHandler(e, 'covidConfirm')} /></span>
                    </div>

                    <div className='textbox'>
                        <span className='left-span'>Patient Curied</span>
                        <span><input type='CheckBox' value={this.props.patientCuried}
                            onChange={(e) => this.props.onChangeHandler(e, 'patientCuried')} /></span>
                    </div>

                    <div className='textbox'>
                        <span className='left-span'>COVID Repeat</span>
                        <span><input type='CheckBox' value={this.props.covidRepeat}
                            onChange={(e) => this.props.onChangeHandler(e, 'covidRepeat')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Previous Patient ID</span>
                        <span><input type='text' value={this.props.prevPatientID}
                            onChange={(e) => this.props.onChangeHandler(e, 'prevPatientID')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Isolation Start Date</span>
                        <DatePicker selected={this.state.startDate}  onChange={this.handleChange}   />
                    </div>

                    <div className='textbox'>
                        <span className='left-span'>Isolation End Date</span>
                        <DatePicker selected={this.state.startDate}  onChange={this.handleChange}   />
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Emergency Contact</span>
                        <span><input type='text' value={this.props.emergencyContact}
                            onChange={(e) => this.props.onChangeHandler(e, 'emergencyContact')} /></span>
                    </div>

                   


                    <div className='submit '>
                        <button className='btn' >Update</button>
                    </div>
                </div>
                <div className='details-block-left'>
                    <div>
                        <button className='btn' onClick={this.openLink} style={{ 'height': '80px', 'width': '250px' }}>All about Covid !!!</button>
                    </div>
                </div>
            </div>
        )
    }
}