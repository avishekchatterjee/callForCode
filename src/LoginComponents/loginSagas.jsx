import { takeEvery, put, delay } from 'redux-saga/effects';

function* signUpSaga() {
    yield (delay(1000));
    yield put({ type: 'ON_SIGN_UP' });
}

function* logInSaga() {
    yield (delay(1000));
    yield put({ type: 'ON_LOG_IN' });
}

export function* signUp() {
    yield takeEvery('SIGN_UP', signUpSaga);
}

export function* logIn() {
    yield takeEvery('LOG_IN', logInSaga);
}
