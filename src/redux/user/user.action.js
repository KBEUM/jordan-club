import axios from "axios";

export const loginUser = (body) => {
  const request = axios
    .post("http://localhost:5000/account/login", body)
    .then((res) => res.data);
  return { type: "loginUser", payload: request };
};

export const logoutUser = () => ({
  type: "logoutUser",
});
