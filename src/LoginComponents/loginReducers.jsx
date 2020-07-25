const initialState = {
    name: '',
    mobNumber: '',
    otp: '',
    areaPin: '',
    submitted: false
}

export const loginReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CHANGE':
            let regexMatching = true;
            if (action.payload.stateName === 'otp' || action.payload.stateName === 'mobNumber'
                || action.payload.stateName === 'areaPin') {
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
        case 'ON_SIGN_UP':
            return {
                ...state,
                submitted: true
            }
        default:
            return state;
    }
}