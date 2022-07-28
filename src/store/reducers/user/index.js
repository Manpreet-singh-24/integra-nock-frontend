import type from "store/constants/userTypes";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DETAIL_DATA:
      return {
        ...state,
        user: action.payload.data,
      };

    default:
      return state;
  }
};

export default userReducer;
