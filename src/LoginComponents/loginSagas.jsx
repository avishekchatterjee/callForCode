import { takeEvery, put } from 'redux-saga/effects';

function* signUpSaga(action) {
    let formData = {
        "mobNo": action.payload.mobNumber.toString(),
        "name": action.payload.name, 
        "pincode": action.payload.areaPin.toString(),
        "userAddress": 'address',
        "govtOfficial": action.payload.govtId ? true : false,
        "govtId": action.payload.govtId.toString()
    };
    const response = yield fetch('https://cfc2020apis.azurewebsites.net/api/SignUp/CreateNewUser', {
        method: 'POST',
        headers: {'content-type': 'application/json;charset=utf-8'},
        body: JSON.stringify(formData)
    }).then(response => response.json(), );
    yield put({ type: 'ON_SIGN_UP', response });
}

function* logInSaga(action) {
    let jsonOutput = yield fetch('https://cfc2020apis.azurewebsites.net/'+action.mobNumber)
        .then(response => response.json(), );
    yield put({ type: 'ON_LOG_IN', jsonOutput });
}

export function* signUp(action) {
    yield takeEvery('SIGN_UP', signUpSaga);
}

export function* logIn() {
    yield takeEvery('LOG_IN', logInSaga);
}
