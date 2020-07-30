export const onChangeHandler = (event, stateName) => {
    return { type: 'ON_CHANGE_DONATE', payload: { value: event.target.value, stateName: stateName } };
}

export const donationEntrySubmit = payload => {
    return { type: 'DONATE_ENTRY', payload: payload }
}
