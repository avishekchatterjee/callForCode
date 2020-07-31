export const onChangeHandler = (event, stateName) => {
    return { type: 'ON_CHANGE_SUSPECT', payload: { value: event.target.value, stateName: stateName } };
}

export const addSuspect = payload => {
    return { type: 'ADD_SUSPECT', payload: payload }
}