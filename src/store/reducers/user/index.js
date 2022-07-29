import type from "store/constants/userTypes";

const initialState = {
  user: {},
  isLoginSuccess: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case type.LOGIN:
      return {
        ...state,
        isLoginSuccess: true,
      };

    case type.DETAIL_DATA:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
