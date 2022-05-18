import types from 'store/constants/chainCodeType';
import {all, call, takeLatest, put} from 'redux-saga/effects';
// import {apiFailed, allData} from './../../actions/category';
import {get, post, putRequest, patch, deleteRequest} from 'services/ApiService';
import {SNACKBAR_OPEN, LOADER_OPEN, LOADER_CLOSE} from 'store/actions/common/actions';
import history from 'store/redirect/history';
const prefix = '/admin'

////// NOTE ====> Make sure each WATCHER FUNCTION is imported inside root-saga file

//All category
export function* allRecord(action) {
    try {

        yield put({type: LOADER_OPEN});
        // yield put({type: types.DATA_LOADED_STATUS});
        const result = yield call(
            get,
            `posts/?per_page=${action.payload.per_page}&page_no=${action.payload.page_no}&search_by=${
                action.payload.search_by ? action.payload.search_by : ''
            }`,
            action.payload.data
        );
        //yield put(saveUserData(result));
       // yield put({type: types.ALL_DATA, payload: result});
        yield put({type: LOADER_CLOSE});
    } catch (error) {
        yield put({type: LOADER_CLOSE});
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, {[item.key]: item.value}), {});
            // yield put(apiFailed(object));
            return false;
        }
        yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
    }
}

//Function generator (watcher )
export function* allRecordReq() {
    yield takeLatest(types.ALL_REQUEST, allRecord);
}

//Create category
export function* create(action) {
    try {
        yield put({type: LOADER_OPEN});
        const result = yield call(post, 'category', action.payload);
        //yield put(saveUserData(result));
        yield put({type: types.ADD, payload: result});
        yield put({type: LOADER_CLOSE});
        yield put({type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert'});
    } catch (error) {
        yield put({type: LOADER_CLOSE});
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, {[item.key]: item.value}), {});
            // yield put(apiFailed(object));
            return false;
        }
        yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
    }
}

//Function generator (watcher )
export function* createReq() {
    yield takeLatest(types.ADD_REQUEST, create);
}

// Get category by id
export function* edit(action) {
    try {
        yield put({type: LOADER_OPEN});
        const result = yield call(get, `category/${action.payload}`);
        yield put({type: types.EDIT, payload: result});
        yield put({type: LOADER_CLOSE});
    } catch (error) {
        yield put({type: LOADER_CLOSE});
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, {[item.key]: item.value}), {});
            //yield put(apiFailed(object));
            return false;
        }
        yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
    }
}

//Function generator (watcher )
export function* editReq() {
    yield takeLatest(types.EDIT_REQUEST, edit);
}

//Update category
export function* update(action) {
    try {
        yield put({type: LOADER_OPEN});
        const result = yield call(putRequest, `category/${action.payload.id}`, action.payload.data);
        //yield put(saveUserData(result));
        yield put({type: types.UPDATE, payload: result});
        yield put({type: LOADER_CLOSE});
        // yield put({type: REDIRECT_TO, url: '/category/list'});
        // history.push(`${prefix}/category/list`)
        yield put({type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert'});

    } catch (error) {
        yield put({type: LOADER_CLOSE});
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, {[item.key]: item.value}), {});
            //yield put(apiFailed(object));
            return false;
        }
        yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
    }
}

//Function generator (watcher )
export function* updateReq() {
    yield takeLatest(types.UPDATE_REQUEST, update);
}

//Delete category
export function* deleteData(action) {
    try {
        yield put({type: LOADER_OPEN});
        const result = yield call(deleteRequest, `category`, action.payload.id);
        console.log(" Delete Category saga result ===== ", result)
       // yield put({type: types.DELETE, payload: result._id});
        //yield put(allData(action.payload.data));
        yield put({type: LOADER_CLOSE});
        yield put({type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert'});
    } catch (error) {
        yield put({type: LOADER_CLOSE});
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, {[item.key]: item.value}), {});
           // yield put(apiFailed(object));
            return false;
        }
        yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
    }
}

//Function generator (watcher )
export function* deleteReq() {
    yield takeLatest(types.DELETE_REQUEST, deleteData);
}

//Change status category
export function* changeStatus(action) {
    try {
        yield put({type: LOADER_OPEN});
        const result = yield call(patch, `category/changeStatus`, action.payload.id);
        //yield put(saveUserData(result));
        yield put({type: types.CHANGE_STATUS, payload: result});
        //yield put(allData(action.payload.data));
        yield put({type: LOADER_CLOSE});
        yield put({type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert'});
    } catch (error) {
        yield put({type: LOADER_CLOSE});
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, {[item.key]: item.value}), {});
            //yield put(apiFailed(object));
            return false;
        }
        yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
    }
}

//Function generator (watcher )
export function* changeStatusReq() {
    yield takeLatest(types.CHANGE_STATUS_REQUEST, changeStatus);
}

export default function* chainCodeSaga() {
    yield all([allRecordReq(), createReq(), editReq(), updateReq(), changeStatusReq(), deleteReq()]);
}
