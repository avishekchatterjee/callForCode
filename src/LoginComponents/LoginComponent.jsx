import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeHandler, login } from './loginActions';

class LoginComponent extends Component {
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
                    <div className='textbox'>
                        <span className='left-span'>OTP</span>
                        <span><input type='text' maxLength='6' value={this.props.loginOtp}
                            onChange={(e) => this.props.onChangeHandler(e, 'loginOtp')} /></span>
                    </div>
                    <div className='submit'>
                        <button className={submitDisabled ? 'btn disabled' : 'btn'} onClick={this.props.login}>Log in</button>
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
    return {
        mobNumber: state.mobNumber,
        loginOtp: state.loginOtp,
        submitted: state.submitted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (e, stateName) => { dispatch(onChangeHandler(e, stateName)) },
        login: () => { dispatch(login()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);