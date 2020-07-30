import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    render() {
       
        return (
            <div>
            <div className='header-box'>
                Donation Entry
            </div>
            <div className='details-block-left'>
                <div className='textbox'>
                    <span className='left-span'>Item Name</span>
                    <span><input type='text' maxLength='30' value={this.props.itemName}
                        onChange={(e) => this.props.onChangeHandler(e, 'itemName')} /></span>
                </div>
                <div className='textbox'>
                    <span className='left-span'>Quantity</span>
                    <span><input type='textbox' value={this.props.quantity}
                        onChange={(e) => this.props.onChangeHandler(e, 'quantity')} /></span>
                </div>
                <div className='textbox'>
                    <span className='left-span'>Address</span>
                    <span><input type='textArea'  
                        onChange={(e) => this.props.onChangeHandler(e, 'mobNumber')} /></span>
                </div>
                <div className='textbox'>
                    <span className='left-span'>Area Pin</span>
                    <span><input type='text' maxLength='6' value={this.props.areaPin}
                        onChange={(e) => this.props.onChangeHandler(e, 'areaPin')} /></span>
                </div>
                <div className='submit '>
                    <button className='btn' >Entry</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(donationEntry);