const InitialState = {};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "loginUser":
      return { ...state, loginSuccess: action.payload };
    case "logoutUser":
      return {};
    default:
      return state;
  }
};

export default userReducer;
