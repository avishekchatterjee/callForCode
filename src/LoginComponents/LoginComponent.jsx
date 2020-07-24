import React, { Component } from 'react';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
            <div className='header-box'>
                Login With Your Mobile Number
            </div>
            <div className='details-block-left'>
          
                <div className='textbox'>
                    <span className='left-span'>Mobile Number</span>
                    <span><input type='text' maxLength='10' /></span>
                </div>
                <div className='textbox'>
                    <span className='left-span'>OTP</span>
                    <span><input type='text' maxLength='6' /></span>
                </div>
                
                <div className='submit'>
                    <button className='btn'>Log in</button>
                </div>
            </div>
        </div>
        )
    }
}