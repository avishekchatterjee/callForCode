import React, { Component } from 'react';

export default class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className='header-box'>
                    Sign Up with some of your basic info to get personalised data for your area
                </div>
                <div className='details-block-left'>
                    <div className='textbox'>
                        <span className='left-span'>Name</span>
                        <span><input type='text' maxLength='30'/></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Mobile Number</span>
                        <span><input type='text' maxLength='10' /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>OTP</span>
                        <span><input type='text' maxLength='6' /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Area Pin</span>
                        <span><input type='text' maxLength='6' /></span>
                    </div>
                    <div className='submit'>
                        <button className='btn'>Sign Up</button>
                    </div>
                </div>
                <div className='details-block-left'>
                    <div>
                        <button className='btn' style={{'height':'80px', 'width':'250px'}}>All about Covid !!!</button>
                    </div>
                    <div className='covid-faq-box'>
                        Sign Up with some of your basic info to get personalised data for your area
                    </div>
                </div>
            </div>
        )
    }
}