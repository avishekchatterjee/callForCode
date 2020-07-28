import React, { Component } from 'react';
import { connect } from 'react-redux';

class CovidSuspect extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
       
        return (
            <div>
                New Suspect
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