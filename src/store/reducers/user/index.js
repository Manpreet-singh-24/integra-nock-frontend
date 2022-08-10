import type from "store/constants/userTypes";

const initialState = {
  user: {},
  isLoginSuccess: false,
  userRole: "",
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
    case type.USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
