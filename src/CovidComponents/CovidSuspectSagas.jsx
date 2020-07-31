import { takeEvery, put } from 'redux-saga/effects';

function* addSuspectSaga(action) {
    let formData = {
        patientName: action.payload.patientName,
        patientAddress: action.payload.patientAddress,
        pincode: action.payload.patientPincode,
        travelHistory: action.payload.travelHistory,
        travleDetails: action.payload.travleDetails,
        suspectReportedBy: action.payload.suspectReportedBy
    };
    const response = yield fetch('https://cfc2020apis.azurewebsites.net/api/Patient/newSuspect', {
        method: 'POST',
        headers: {'content-type': 'application/json;charset=utf-8'},
        body: JSON.stringify(formData)
    }).then(response => response.json(), );
    yield put({ type: 'ON_ADD_SUSPECT', response });
}

export function* addSuspect() {
    yield takeEvery('ADD_SUSPECT', addSuspectSaga);
}
