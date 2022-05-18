import types from './../../constants/organisationType'

//Direct update value to redux store
export const allRecord = (data) => {
    return {
        type: types.ALL_REQUEST,
        payload: data
    };
};

export const create = (data) => {
    return {
        type: types.ADD_REQUEST,
        payload: data
    };
};

export const edit = (data) => {
    return {
        type: types.EDIT_REQUEST,
        payload: data
    };
};

export const update = (id, data) => {
    return {
        type: types.UPDATE_REQUEST,
        payload: {id, data}
    };
};

export const deleteRecord = (id, data) => {
    return {
        type: types.DELETE_REQUEST,
        payload: {id, data}
    };
};

export const changeStatus = (id, data) => {
    return {
        type: types.CHANGE_STATUS_REQUEST,
        payload: {id,data}
    };
};

export const clearFormFields = () => {
    return {
        type: types.CLEAR_FORM_FIELD,
    };
};

export const clearError = () => {
    return {
        type: types.CLEAR_ERROR
    }
}

export const apiFailed = (data) => ({
    type: types.API_FAILED,
    payload: data
});

