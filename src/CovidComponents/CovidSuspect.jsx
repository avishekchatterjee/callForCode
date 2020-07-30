import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    render() {
       
        return (
            <div>
                <div className='header-box'>
                    Register New Suspect
                </div>
                <div className='details-block-left'>
                    <div className='textbox'>
                        <span className='left-span'>Name</span>
                        <span><input type='text' maxLength='30' value={this.props.name}
                            onChange={(e) => this.props.onChangeHandler(e, 'name')} /></span>
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
                        <span className='left-span'>Travel history</span>
                        <span><input type='CheckBox' value={this.props.travelHistory}
                            onChange={(e) => this.props.onChangeHandler(e, 'travelHistory')} /></span>
                    </div>
                    <div className='textbox'>
                        <span className='left-span'>Travel Details</span>
                        <span><input type='textbox' value={this.props.travelDetails}
                            onChange={(e) => this.props.onChangeHandler(e, 'travelDetails')} /></span>
                    </div>

                    <div className='submit '>
                        <button className='btn' >Register</button>
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
   
}

const mapDispatchToProps = dispatch => {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidSuspect);