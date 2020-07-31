export const onChangeHandler = (event, stateName) => {
    return { type: 'ON_CHANGE', payload: { value: event.target.value, stateName: stateName } };
}

export const signUp = payload => {
    return { type: 'SIGN_UP', payload: payload }
}

export const login = payload => {
    return { type: 'LOG_IN', mobNumber: payload }
}

export const logout = () => {
    return { 
        type: 'LOG_OUT'
    }
}