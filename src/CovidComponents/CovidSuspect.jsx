import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeHandler, addSuspect } from './CovidSuspectActions';
import { Redirect } from 'react-router-dom';

class CovidSuspect extends Component {
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

    addSuspect = () => {
        this.props.addSuspect(this.props)
    }

    render() {
        if(this.props.suspectAdded){
            return <Redirect to="/suspectList"/>
        }
       
        return (
            <div>
                <div className='header-box'>
                    Register New Suspect
                </div>
                <div className='details-block-left'>
                    <div className='textbox'>
                        <span className='left-span'>Name</span>
                        <span><input type='text' maxLength='30' value={this.props.patientName}
                            onChange={(e) => this.props.onChangeHandler(e, 'patientName')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Address</span>
                        <span><input type='textArea'  value={this.props.patientAddress}
                            onChange={(e) => this.props.onChangeHandler(e, 'patientAddress')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Area Pin</span>
                        <span><input type='text' maxLength='6' value={this.props.patientPincode}
                            onChange={(e) => this.props.onChangeHandler(e, 'patientPincode')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Travel history</span>
                        <span><input type='CheckBox' checked={this.props.travelHistory}
                            onClick={(e) => this.props.onChangeHandler(e, 'travelHistory')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Travel Details</span>
                        <span><input type='textbox' value={this.props.travleDetails}
                            onChange={(e) => this.props.onChangeHandler(e, 'travleDetails')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Suspect Reported By</span>
                        <span><input type='textbox' value={this.props.suspectReportedBy}
                            onChange={(e) => this.props.onChangeHandler(e, 'suspectReportedBy')} /></span>
                    </div>

                    <div className='submit '>
                        <button className='btn' style ={{width:'100%', textAlign:'right'}} onClick={this.addSuspect}>Add Suspect</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        patientName: state.CovidSuspectReducers.patientName,
        patientAddress: state.CovidSuspectReducers.patientAddress,
        patientPincode: state.CovidSuspectReducers.patientPincode,
        travelHistory: state.CovidSuspectReducers.travelHistory,
        travleDetails: state.CovidSuspectReducers.travleDetails,
        suspectReportedBy: state.CovidSuspectReducers.suspectReportedBy,
        suspectAdded: state.CovidSuspectReducers.suspectAdded
    }
   
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (e, stateName) => { dispatch(onChangeHandler(e, stateName)) },
        addSuspect: (payload) => { dispatch(addSuspect(payload)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidSuspect);