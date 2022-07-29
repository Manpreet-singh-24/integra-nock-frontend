import types from 'store/constants/chainCodeType';
import { all, call, takeLatest, put } from 'redux-saga/effects';
// import {apiFailed, allData} from './../../actions/category';
<<<<<<< HEAD
import { get, post } from 'services/ApiService';
import {SNACKBAR_OPEN, LOADER_OPEN, LOADER_CLOSE} from 'store/actions/common/actions';
// import history from 'store/redirect/history';
=======
import { get, post, putRequest, patch, deleteRequest } from 'services/ApiService';
import { SNACKBAR_OPEN, LOADER_OPEN, LOADER_CLOSE } from 'store/actions/common/actions';
import history from 'store/redirect/history';
const prefix = '/admin'
>>>>>>> 51c326869c8f666d7c09e65033c9aa4e0c2c75bc

////// NOTE ====> Make sure each WATCHER FUNCTION is imported inside root-saga file

//All category
export function* listing(action) {
    history.push(`category/list`)
    try {
<<<<<<< HEAD
        yield put({type: LOADER_OPEN});
        // yield put({type: types.DATA_LOADED_STATUS});
        const result = yield call(get,`chaincode/list`);
        //yield put(saveUserData(result));
        yield put({type: types.ALL_DATA, payload: result.data });
        yield put({type: LOADER_CLOSE});
=======
        yield put({ type: LOADER_OPEN });
        const result = yield call(get, 'chaincode/checkupdates', action.payload.data);
        //const result = yield call(get, `chaincode/checkupdates`);
        //yield put(saveUserData(result));
        yield put({ type: types.ALL_DATA, payload: result.data });
        yield put({ type: LOADER_CLOSE });
>>>>>>> 51c326869c8f666d7c09e65033c9aa4e0c2c75bc
    } catch (error) {
        yield put({ type: LOADER_CLOSE });
        if (error.status === 422) {
          
            return false;
        }
        // yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
    }
}

//Function generator (watcher )
export function* listingReq() {
    yield takeLatest(types.ALL_REQUEST, listing);
}

export function* checkUpdate(action) {
    try {
<<<<<<< HEAD
        yield put({type: LOADER_OPEN});
        // yield put({type: types.DATA_LOADED_STATUS});
        const result = yield call(get,`chaincode/checkforupdates`);
        yield put({type: types.CHECK_UPDATE, payload: result.data });
        //yield put(saveUserData(result));
        yield put({type: LOADER_CLOSE});
=======
        yield put({ type: LOADER_OPEN });
        const result = yield call(post, 'category', action.payload);
        //yield put(saveUserData(result));
        yield put({ type: types.ADD, payload: result });
        yield put({ type: LOADER_CLOSE });
        yield put({ type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert' });
    } catch (error) {
        yield put({ type: LOADER_CLOSE });
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
            // yield put(apiFailed(object));
            return false;
        }
        yield put({ type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert' });
    }
}

//Function generator (watcher )
export function* createReq() {
    yield takeLatest(types.ADD_REQUEST, create);
}

// Get category by id
export function* edit(action) {
    try {
        yield put({ type: LOADER_OPEN });
        const result = yield call(get, `category/${action.payload}`);
        yield put({ type: types.EDIT, payload: result });
        yield put({ type: LOADER_CLOSE });
    } catch (error) {
        yield put({ type: LOADER_CLOSE });
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
            //yield put(apiFailed(object));
            return false;
        }
        yield put({ type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert' });
    }
}

//Function generator (watcher )
export function* editReq() {
    yield takeLatest(types.EDIT_REQUEST, edit);
}

//Update category
export function* update(action) {
    try {
        yield put({ type: LOADER_OPEN });
        const result = yield call(putRequest, `category/${action.payload.id}`, action.payload.data);
        //yield put(saveUserData(result));
        yield put({ type: types.UPDATE, payload: result });
        yield put({ type: LOADER_CLOSE });
        // yield put({type: REDIRECT_TO, url: '/category/list'});
        // history.push(`${prefix}/category/list`)
        yield put({ type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert' });

>>>>>>> 51c326869c8f666d7c09e65033c9aa4e0c2c75bc
    } catch (error) {
        yield put({ type: LOADER_CLOSE });
        if (error.status === 422) {
<<<<<<< HEAD
          
            return false;
        }
        // yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
=======
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
            //yield put(apiFailed(object));
            return false;
        }
        yield put({ type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert' });
>>>>>>> 51c326869c8f666d7c09e65033c9aa4e0c2c75bc
    }
}

//Function generator (watcher )
<<<<<<< HEAD
export function* checkUpdateRequest() {
    yield takeLatest(types.CHECK_UPDATE_REQUEST, checkUpdate);
=======
export function* updateReq() {
    yield takeLatest(types.UPDATE_REQUEST, update);
}

//Delete category
export function* deleteData(action) {
    try {
        yield put({ type: LOADER_OPEN });
        const result = yield call(deleteRequest, `category`, action.payload.id);
        console.log(" Delete Category saga result ===== ", result)
        // yield put({type: types.DELETE, payload: result._id});
        //yield put(allData(action.payload.data));
        yield put({ type: LOADER_CLOSE });
        yield put({ type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert' });
    } catch (error) {
        yield put({ type: LOADER_CLOSE });
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
            // yield put(apiFailed(object));
            return false;
        }
        yield put({ type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert' });
    }
>>>>>>> 51c326869c8f666d7c09e65033c9aa4e0c2c75bc
}


export function* installChainCode(action) {
    try {
<<<<<<< HEAD
        yield put({type: LOADER_OPEN});
        // yield put({type: types.DATA_LOADED_STATUS});
        const result = yield call(post,`chaincode/update/${action.payload.chaincode}`);
        console.log(" --------------------------- ========== ", result)
       // yield put({type: types.CHECK_UPDATE, payload: result.data });
        //yield put(saveUserData(result));
        yield put({type: LOADER_CLOSE});
    } catch (error) {
        yield put({type: LOADER_CLOSE});
        // yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
=======
        yield put({ type: LOADER_OPEN });
        const result = yield call(patch, `category/changeStatus`, action.payload.id);
        //yield put(saveUserData(result));
        yield put({ type: types.CHANGE_STATUS, payload: result });
        //yield put(allData(action.payload.data));
        yield put({ type: LOADER_CLOSE });
        yield put({ type: SNACKBAR_OPEN, open: true, message: result.message, alertSeverity: 'success', variant: 'alert' });
    } catch (error) {
        yield put({ type: LOADER_CLOSE });
        if (error.status === 422) {
            //convert backend field validation error(status code=>422, array of object) into single object
            let arr = error.data.errors;
            let object = arr.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
            //yield put(apiFailed(object));
            return false;
        }
        yield put({ type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert' });
>>>>>>> 51c326869c8f666d7c09e65033c9aa4e0c2c75bc
    }
}

//Function generator (watcher )
export function* installChainCodeRequest() {
    yield takeLatest(types.INSTALL_CHAINCODE_REQUEST, installChainCode);
}

export default function* chainCodeSaga() {
<<<<<<< HEAD
    yield all([ allRecordReq(), checkUpdateRequest(), installChainCodeRequest() ]);
=======
    yield all([listingReq(), createReq(), editReq(), updateReq(), changeStatusReq(), deleteReq()]);
>>>>>>> 51c326869c8f666d7c09e65033c9aa4e0c2c75bc
}
