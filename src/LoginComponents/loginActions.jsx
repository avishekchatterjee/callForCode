export const onChangeHandler = (event, stateName) => {
    return { type: 'ON_CHANGE', payload: { value: event.target.value, stateName: stateName } };
}

export const signUp = () => {
    return { type: 'SIGN_UP' }
}

export const login = () => {
    return { type: 'LOG_IN' }
}