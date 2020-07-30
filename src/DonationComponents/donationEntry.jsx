import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeHandler, donationEntrySubmit } from './donationActions';
import { Redirect } from 'react-router-dom';

class donationEntry extends Component {
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

    donationEntrySubmit = () => {
        this.props.donationEntrySubmit(this.props);
    }

    render() {
        if(this.props.donationAdded){
            return <Redirect to="/donationTracking"/>
        }
       
        return (
            <div>
            <div className='header-box'>
                Donation Entry
            </div>
            <div className='details-block-left'>
                <div className='textbox'>
                    <span className='left-span'>Item Name</span>
                    <span><input type='text' maxLength='30' value={this.props.donationItemName}
                        onChange={(e) => this.props.onChangeHandler(e, 'donationItemName')} /></span>
                </div>
                <div className='textbox'>
                    <span className='left-span'>Quantity</span>
                    <span><input type='textbox' value={this.props.donationQuantity}
                        onChange={(e) => this.props.onChangeHandler(e, 'donationQuantity')} /></span>
                </div>
                <div className='textbox'>
                    <span className='left-span'>Note</span>
                    <span><input type='textArea'  
                        onChange={(e) => this.props.onChangeHandler(e, 'donationNote')} /></span>
                </div>
                <div className='textbox'>
                    <span className='left-span'>Area Pin</span>
                    <span><input type='text' maxLength='6' value={this.props.donationPincode}
                        onChange={(e) => this.props.onChangeHandler(e, 'donationPincode')} /></span>
                </div>
                <div className='textbox'>
                    <span className='left-span'>contact Person Name</span>
                    <span><input type='textArea' value={this.props.donationContactPersonName}
                        onChange={(e) => this.props.onChangeHandler(e, 'donationContactPersonName')} /></span>
                </div>
                <div className='textbox'>
                        <span className='left-span'>Contact Person Mobile Number</span>
                        <span><input type='text' maxLength='10' value={this.props.donationMobNumber}
                            onChange={(e) => this.props.onChangeHandler(e, 'donationMobNumber')} /></span>
                    </div>
                <div className='submit '>
                    <button className='btn' onClick={this.donationEntrySubmit}>Entry</button>
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

const mapStateToProps = state => {
    console.log('state', state);
    return{
        donationItemName: state.donationReducers.donationItemName,
        donationQuantity: state.donationReducers.donationQuantity,
        donationNote: state.donationReducers.donationNote,
        donationPincode: state.donationReducers.donationPincode,
        donationContactPersonName: state.donationReducers.donationContactPersonName,
        donationMobNumber: state.donationReducers.donationMobNumber,
        donationAdded: state.donationReducers.donationAdded
    }
   
}

const mapDispatchToProps = dispatch => {
    return{
        onChangeHandler: (e, stateName) => { dispatch(onChangeHandler(e, stateName)) },
        donationEntrySubmit: (payload) => { dispatch(donationEntrySubmit(payload)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(donationEntry);