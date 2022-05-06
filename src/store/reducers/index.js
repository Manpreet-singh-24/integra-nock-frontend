import { combineReducers } from 'redux'

//@@@@@@@@@@@@@@@@ Defalut Theme Reducers @@@@@@@@@@@@@@@@@@@@@@
import customizationReducer from './common/customizationReducer';
import snackbarReducer from './common/snackbarReducer';

//@@@@@@@@@@@@@@@@ Our Reducers @@@@@@@@@@@@@@@@@@@@@@
import chainCodeReducer from './chain-code' 

const rootReducer =  combineReducers({
    chainCode: chainCodeReducer,
    customization: customizationReducer,
    snackbar: snackbarReducer
})

export default rootReducer;