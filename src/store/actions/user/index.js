import types from './../../constants/userTypes'

export const loginRequest = (data) => {
    return {
        type: types.LOGIN_REQUEST,
        payload: data
    };
};

export const userDetail = () => {
    return {
        type: types.DETAIL_REQUEST,
    };
};
