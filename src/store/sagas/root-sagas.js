import {all, fork} from 'redux-saga/effects';
//import { all, call } from 'redux-saga/effects'
//import {createReq, editReq, updateReq, allCategoriesReq, changeStatusReq, deleteReq} from './category/category.saga';
import chainCodeSaga from './chain-code/chainCode.saga';

export default function* rootSaga() {
    yield all(
        [
            fork(chainCodeSaga),

        ]
    );
}
