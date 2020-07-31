const initialState = {
    patientName: '',
    patientAddress: '',
    patientPincode: '',
    travelHistory: false,
    travleDetails: '',
    suspectReportedBy: '',
    suspectAdded: false
}

export const CovidSuspectReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CHANGE_SUSPECT':
            let regexMatching = true;
            if (action.payload.stateName === 'patientPincode') {
                let reg = new RegExp('^[0-9]+$');
                regexMatching = (reg.test(action.payload.value) || action.payload.value === '');
            }
            if (action.payload.stateName === 'travelHistory') {
                return {
                    ...state,
                    [action.payload.stateName]: action.payload.value === true ? false : true
                }
            }
            if (regexMatching) {
                return {
                    ...state,
                    [action.payload.stateName]: action.payload.value
                }
            } else {
                return state;
            }
        case 'ON_ADD_SUSPECT':
            return {
                ...state,
                suspectAdded: true
            }
        default:
            return state;
    }
}