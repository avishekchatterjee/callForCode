import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeHandler, signUp } from './loginActions';
import { Redirect } from 'react-router-dom';

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {mobileNumberGiven: false}
    }

    enterMobile = () =>{
        this.setState({mobileNumberGiven: true});
    }

    openLink = () =>{
        window.open(
            'https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=47afdbae-d75e-4ed0-8f18-0938888d2fff&serviceInstanceID=e082c043-42fe-4831-ab3c-3b69af080ad3',
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    signUp = () => {
        this.props.signUp(this.props);
    }

    render() {
        if(this.props.submitted){
            return <Redirect to="/login"/>
        }

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
                    {!this.state.mobileNumberGiven &&
                        <div className='submit'>
                            <button className='btn' onClick={this.enterMobile}>Get OTP</button>
                        </div>
                    }
                    {this.state.mobileNumberGiven &&
                        <>
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
                                <button className={submitDisabled ? 'btn disabled' : 'btn'} onClick={this.signUp}>Sign Up</button>
                            </div>
                        </>
                }
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.loginReducers.name,
        mobNumber: state.loginReducers.mobNumber,
        otp: state.loginReducers.otp,
        areaPin: state.loginReducers.areaPin,
        govtId: state.loginReducers.govtId,
        submitted: state.loginReducers.submitted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (e, stateName) => { dispatch(onChangeHandler(e, stateName)) },
        signUp: (payload) => { dispatch(signUp(payload)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);