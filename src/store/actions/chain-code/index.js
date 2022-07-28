import types from './../../constants/chainCodeType'

//Direct update value to redux store
export const listing = (data) => {
    return {
        type: types.ALL_REQUEST,
        payload: data
    };
};

export const checkUpdate = () => {
    return {
        type: types.CHECK_UPDATE_REQUEST,
    };
};


export const installChainCode = (data) => {
    return {
        type: types.INSTALL_CHAINCODE_REQUEST,
        payload: data
    };
};