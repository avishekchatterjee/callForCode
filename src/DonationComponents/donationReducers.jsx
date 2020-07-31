const initialState = {
    donationItemName: '',
    donationQuantity: '',
    donationNote: '',
    donationPincode: '',
    donationContactPersonName: '',
    donationMobNumber: '',
    donationAdded: false
}

export const donationReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CHANGE_DONATE':
            let regexMatching = true;
            if (action.payload.stateName === 'donationQuantity' || action.payload.stateName === 'donationMobNumber'
                || action.payload.stateName === 'donationPincode') {
                let reg = new RegExp('^[0-9]+$');
                regexMatching = (reg.test(action.payload.value) || action.payload.value === '');
            }
            if (regexMatching) {
                return {
                    ...state,
                    [action.payload.stateName]: action.payload.value
                }
            } else {
                return state;
            }
        case 'ON_DONATE_ENTRY':
            return {
                ...state,
                donationAdded: true
            }
        default:
            return state;
    }
}