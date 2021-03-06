import type from "store/constants/chainCodeType";

const initialState = {
  listingData: [],
  total_count: 0,
  updateList: [],

  releasesList: [{}],
};

const chainCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ALL_DATA:
      return {
        ...state,
        listingData: action.payload,
        // total_count: action.payload.total_count,
      };

    case type.CHECK_UPDATE:
      return {
        ...state,
        updateList: action.payload,
        // total_count: action.payload.total_count,
      };

      case type.RELEASE_LIST:
        return {
          ...state,
          rekeasesList: action.payload,
          // total_count: action.payload.total_count,
        };

    default:
      return state;
  }
};

export default chainCodeReducer;
