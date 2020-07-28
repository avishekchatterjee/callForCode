import React, { Component } from 'react';
import { connect } from 'react-redux';

class CovidSuspectList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
       
        return (
            <div>
                Suspect List
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state);
   
}

const mapDispatchToProps = dispatch => {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidSuspectList);