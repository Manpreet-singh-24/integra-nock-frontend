import types from "store/constants/organisationType";
import { all, call, takeLatest, put } from "redux-saga/effects";
// import {apiFailed, allData} from './../../actions/category';
import { get, post } from "services/ApiService";
import {
  SNACKBAR_OPEN,
  LOADER_OPEN,
  LOADER_CLOSE,
} from "store/actions/common/actions";
//import history from 'store/redirect/history';

//All category
export function* listing(action) {
  try {
    yield put({ type: LOADER_OPEN });
    // yield put({type: types.DATA_LOADED_STATUS});
    const result = yield call(get, "organization");
    yield put({ type: types.ALL_DATA, payload: result.data });
    yield put({ type: LOADER_CLOSE });
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
  yield takeLatest(types.ALL_DATA_REQUEST, listing);
}

export function* signOrganisation(action) {
  try {
    yield put({ type: LOADER_OPEN });
    // yield put({type: types.DATA_LOADED_STATUS});
    const result = yield call(post, `organization/sign/${action.payload}`);
    yield put({ type: LOADER_CLOSE });
  } catch (error) {
    yield put({ type: LOADER_CLOSE });
    // yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
  }
}

//Function generator (watcher )
export function* signOrganisationRequest() {
  yield takeLatest(types.SIGN_ORGANISATION_REQUEST, signOrganisation);
}

//Create Organisation
export function* createOrganisation(action) {
  // history.push(`category/list`)
  try {
    yield put({ type: LOADER_OPEN });
    // yield put({type: types.DATA_LOADED_STATUS});
    const result = yield call(post, `organization`, action.payload.data);
    //yield put(saveUserData(result));
    yield put({ type: LOADER_CLOSE });
  } catch (error) {
    yield put({ type: LOADER_CLOSE });
    if (error.status === 422) {
      return false;
    }
    // yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
  }
}

//Function generator (watcher )
export function* createOrganisationReq() {
  yield takeLatest(types.ADD_REQUEST, createOrganisation);
}

export function* checkUpdate(action) {
  try {
    yield put({ type: LOADER_OPEN });
    // yield put({type: types.DATA_LOADED_STATUS});
    const result = yield call(get, `chaincode/checkforupdates`);
    yield put({ type: types.CHECK_UPDATE, payload: result.data });
    //yield put(saveUserData(result));
    yield put({ type: LOADER_CLOSE });
  } catch (error) {
    yield put({ type: LOADER_CLOSE });
    if (error.status === 422) {
      return false;
    }
    // yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
  }
}

//Function generator (watcher )
export function* checkUpdateRequest() {
  yield takeLatest(types.CHECK_UPDATE_REQUEST, checkUpdate);
}

export function* installChainCode(action) {
  try {
    yield put({ type: LOADER_OPEN });
    // yield put({type: types.DATA_LOADED_STATUS});
    const result = yield call(
      post,
      `chaincode/update/${action.payload.chaincode}`
    );
    // yield put({type: types.CHECK_UPDATE, payload: result.data });
    //yield put(saveUserData(result));
    yield put({ type: LOADER_CLOSE });
  } catch (error) {
    yield put({ type: LOADER_CLOSE });
    // yield put({type: SNACKBAR_OPEN, open: true, message: error.data.error.message, alertSeverity: 'error', variant: 'alert'});
  }
}

//Function generator (watcher )
export function* installChainCodeRequest() {
  yield takeLatest(types.INSTALL_CHAINCODE_REQUEST, installChainCode);
}

export default function* organisationSaga() {
  yield all([
    listingReq(),
    signOrganisationRequest(),
    createOrganisationReq(),
    checkUpdateRequest(),
    installChainCodeRequest(),
  ]);
}
