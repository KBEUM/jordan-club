const InitialState = {};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "loginUser":
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};

export default userReducer;
