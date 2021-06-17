import api from "../../asset/common/http_base";

const author = (username: string, password: string) => {
  return api.post("/login/admin", { username, password }).then((res) => res);
};
const removeItem = () => {
  localStorage.removeItem("token");
};
const setItem = (token: string) => {
  localStorage.setItem("token", JSON.stringify(token));
};
const getItem = () => {
  return JSON.parse(localStorage.getItem("token") ?? "[]");
};
export { author, removeItem, setItem, getItem };
