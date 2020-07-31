const initialState = {
    name: '',
    mobNumber: '',
    otp: '',
    areaPin: '',
    loginOtp: '',
    govtId: '',
    submitted: false,
    loggedIn: false,
    loginError: false
}

export const loginReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CHANGE':
            let regexMatching = true;
            if (action.payload.stateName === 'otp' || action.payload.stateName === 'mobNumber'
                || action.payload.stateName === 'areaPin' || action.payload.stateName === 'loginOtp' 
                || action.payload.stateName === 'govtId') {
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
            console.log('actions', action);
            return {
                ...state,
                submitted: true
            }
        case 'ON_LOG_IN':
            if(action.jsonOutput.message === 'Login failed'){
                return {
                    ...state,
                    loggedIn: false,
                    loginError: true
                }
            }else{
                return {
                    ...state,
                    loggedIn: true
                }
            }
        default:
            return state;
    }
}