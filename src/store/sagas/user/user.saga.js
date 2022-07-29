import types from 'store/constants/userTypes';
import {all, call, takeLatest, put} from 'redux-saga/effects';
// import {apiFailed, allData} from './../../actions/category';
import LocalStorageService from 'services/LocalStorageService'
import { get, post } from 'services/ApiService';
import {SNACKBAR_OPEN, LOADER_OPEN, LOADER_CLOSE} from 'store/actions/common/actions';
// import history from 'store/redirect/history';
const prefix = '/admin'

////// NOTE ====> Make sure each WATCHER FUNCTION is imported inside root-saga file


//Login 
export function* login(action) {
    try {
        yield put({type: LOADER_OPEN});
        const result = yield call(post, 'user/login', action.payload);
        LocalStorageService.setToken(result.data)
        //yield put(saveUserData(result));
        yield put({type: types.LOGIN, payload: {}});
        yield put({type: LOADER_CLOSE});
        yield put({type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert'});
    } catch (error) {
        yield put({type: LOADER_CLOSE});
        if (error.status === 422) {
           
        }
        yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
    }
}

//Function generator (watcher )
export function* loginRequest() {
    yield takeLatest(types.LOGIN_REQUEST, login);
}

//User Info
export function* detail(action) {
    try {
        yield put({type: LOADER_OPEN});
        const result = yield call(get, 'user/home');
        yield put({type: types.DETAIL_DATA , payload: result.data});
        yield put({type: LOADER_CLOSE});
        yield put({type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert'});
    } catch (error) {
        yield put({type: LOADER_CLOSE});
        if (error.status === 422) {
           
        }
        yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
    }
}

//Function generator (watcher )
export function* detailRequest() {
    yield takeLatest(types.DETAIL_REQUEST, detail);
}

export default function* userSaga() {
    yield all([ loginRequest(), detailRequest() ]);
}
