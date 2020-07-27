import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeHandler, signUp } from './loginActions';

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const submitDisabled = (this.props.name.trim() === '' || this.props.mobNumber.trim() === ''
            || this.props.otp.trim() === '' || this.props.areaPin.trim() === '');
        return (
            <div>
                <div className='header-box'>
                    Sign Up with some of your basic info to get personalised data for your area
                </div>
                <div className='details-block-left'>
                    <div className='textbox'>
                        <span className='left-span'>Name</span>
                        <span><input type='text' maxLength='30' value={this.props.name}
                            onChange={(e) => this.props.onChangeHandler(e, 'name')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Mobile Number</span>
                        <span><input type='text' maxLength='10' value={this.props.mobNumber}
                            onChange={(e) => this.props.onChangeHandler(e, 'mobNumber')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>OTP</span>
                        <span><input type='text' maxLength='6' value={this.props.otp}
                            onChange={(e) => this.props.onChangeHandler(e, 'otp')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Area Pin</span>
                        <span><input type='text' maxLength='6' value={this.props.areaPin}
                            onChange={(e) => this.props.onChangeHandler(e, 'areaPin')} /></span>
                    </div>

                    <div className='textbox'>
                        <span className='left-span'>Govt ID</span>
                        <span><input type='text' maxLength='5' value={this.props.govtId}
                            onChange={(e) => this.props.onChangeHandler(e, 'govtId')} /></span>
                    </div>

                    <div className='submit '>
                        <button className={submitDisabled ? 'btn disabled' : 'btn'} onClick={this.props.signUp}>Sign Up</button>
                    </div>
                </div>
                <div className='details-block-left'>
                    <div>
                        <button className='btn' style={{ 'height': '80px', 'width': '250px' }}>All about Covid !!!</button>
                    </div>
                    <div className='covid-faq-box'>
                        Sign Up with some of your basic info to get personalised data for your area
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        name: state.name,
        mobNumber: state.mobNumber,
        otp: state.otp,
        areaPin: state.areaPin,
        govtId: state.govtId,
        submitted: state.submitted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (e, stateName) => { dispatch(onChangeHandler(e, stateName)) },
        signUp: () => { dispatch(signUp()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);