import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeHandler, login } from './loginActions';
import { Redirect } from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {mobileNumberGiven : false}
    }

    openLink = () =>{
        window.open(
            'https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=eu-gb&integrationID=47afdbae-d75e-4ed0-8f18-0938888d2fff&serviceInstanceID=e082c043-42fe-4831-ab3c-3b69af080ad3',
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    
    enterMobile = () =>{
        this.setState({mobileNumberGiven: true});
        console.log('enter');
    }

    login = async() => {
        await this.props.login(this.props.mobNumber);
        console.log("thisprops", this.props);        
    }

    render() {
        if(this.props.loggedIn){
            return <Redirect to="/suspectList"/>
        }
        const submitDisabled = (this.props.mobNumber.trim() === '' || this.props.loginOtp.trim() === '');
        return (
            <div>
                <div className='header-box'>Login With Your Mobile Number</div>
                <div className='details-block-left'>
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
                                <span><input type='text' maxLength='6' value={this.props.loginOtp}
                                    onChange={(e) => this.props.onChangeHandler(e, 'loginOtp')} /></span>
                            </div>
                            <div className='submit'>
                                <button className={submitDisabled ? 'btn disabled' : 'btn'} onClick={this.login}>Log in</button>
                            </div>
                        </>
                    }
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
    console.log('map', state);
    return {
        mobNumber: state.loginReducers.mobNumber,
        loginOtp: state.loginReducers.loginOtp,
        submitted: state.loginReducers.submitted,
        loggedIn: state.loginReducers.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (e, stateName) => { dispatch(onChangeHandler(e, stateName)) },
        login: (mobile) => { dispatch(login(mobile)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);