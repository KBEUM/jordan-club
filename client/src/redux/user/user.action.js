import axios from "axios";

export const loginUser = (body) => {
  const request = axios
    .post("https://jordan-club-server.herokuapp.com/account/login", body)
    .then((res) => res.data);
  return { type: "loginUser", payload: request };
};

export const logoutUser = () => ({
  type: "logoutUser",
});
