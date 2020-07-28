import React, { Component } from 'react';
import { connect } from 'react-redux';

class donationTracking extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
       
        return (
            <div>
                Donation Tracking
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state);
   
}

const mapDispatchToProps = dispatch => {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(donationTracking);