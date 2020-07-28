import React, { Component } from 'react';
import { connect } from 'react-redux';

class COVIDPatientUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
       
        return (
            <div>
                Patient Update
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state);
   
}

const mapDispatchToProps = dispatch => {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(COVIDPatientUpdate);