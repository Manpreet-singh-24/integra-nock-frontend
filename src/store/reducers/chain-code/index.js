import type from 'store/constants/chainCodeType';

const initialState = {
    categories: [],
    categoryDropOptions: [],
    category: {},
    isDataLoaded: false,
    loading: false,
    loaded: false,
    errors: {},
    total_count: 0
};

const chainCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.CLEAR_FORM_FIELD:
            return {
                ...state,
                loaded: false
            };

        case type.CLEAR_ERROR:
            return {
                ...state,
                errors: {}
            };

        case type.DATA_LOADED_STATUS:
            return {
                ...state,
                isDataLoaded: false
            };

        case type.ALL_DATA:
            return {
                ...state,
                //loaded:true,
                loading: false,
                categories: action.payload.data,
                total_count: action.payload.total_count,
                isDataLoaded: true
            };

        case type.DROP_OPTION:
            return {
                ...state,
                //loaded:true,
                loading: false,
                categoryDropOptions: action.payload
            };

        case type.ADD:
            return {
                ...state,
                loaded: true,
                loading: false,
                errors: []
            };

        case type.EDIT:
            return {
                ...state,
                loaded: true,
                loading: false,
                errors: [],
                category: action.payload.data
            };

        case type.UPDATE:
            return {
                ...state,
                loaded: true,
                loading: false
                //categories: action.payload,
            };

        case type.DELETE:
            return {
                ...state,
                loading: false,
                categories: state.categories.filter((category) => category.id !== action.payload)
            };

        case type.API_FAILED:
            return {
                ...state,
                loaded: false,
                loading: false,
                errors: action.payload
            };

        default:
            return state;
    }
};

export default chainCodeReducer;
