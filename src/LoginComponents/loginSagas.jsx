import { takeEvery, put, delay } from 'redux-saga/effects';

function* signUpSaga() {
    yield (delay(1000));
    yield put({ type: 'ON_SIGN_UP' });
}

export function* signUp() {
    yield takeEvery('SIGN_UP', signUpSaga);
}