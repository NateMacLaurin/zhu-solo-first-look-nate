import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchPets() {
    try {
        //go and get pets
        //the cookie comes along automatically
        const response = yield axios.get('/api/pets');
        console.log(`GET response: ${response.data}`);
        yield put({type: 'SET_PETS', payload: response.data});
    } catch(err) {
        console.log(`ERROR in fetchPets: ${err}`);
    }
}

function* petSaga() {
    yield takeEvery('FETCH_PETS', fetchPets);
}

export default petSaga;