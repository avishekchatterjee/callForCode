import { takeEvery, put } from 'redux-saga/effects';

function* donateEntrySaga(action) {
    let formData = {
        "donateItem": action.payload.donationItemName,
        "itemQuantity": Number(action.payload.donationQuantity),
        "donationNote": action.payload.donationNote,
        "pincode": action.payload.donationPincode.toString(),
        "contactPointAddress": "donation Address",
        "contactPersonName": action.payload.donationContactPersonName,
        "contactNo": action.payload.donationMobNumber.toString()
    };
    const response = yield fetch('https://cfc2020apis.azurewebsites.net/api/Donation/createDonation', {
        method: 'POST',
        headers: {'content-type': 'application/json;charset=utf-8'},
        body: JSON.stringify(formData)
    }).then(response => response.json(), );
    yield put({ type: 'ON_DONATE_ENTRY', response });
}

export function* donationEntrySubmit() {
    yield takeEvery('DONATE_ENTRY', donateEntrySaga);
}
