import axios from "axios";

export function loginUser(body) {
  const request = axios
    .post("http://localhost:5000/login", body)
    .then((res) => res.data);
  return { type: "loginUser", payload: request };
}
