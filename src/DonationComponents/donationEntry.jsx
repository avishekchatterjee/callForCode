import React, { Component } from 'react';
import { connect } from 'react-redux';

class donationEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                    <button className='btn' style={{ 'height': '80px', 'width': '250px' }}>All about Covid !!!</button>
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