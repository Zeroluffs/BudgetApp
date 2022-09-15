import { api } from "../../../utils/ApiRoute";

export async function logUser(userInfo) {
  try {
    const res = await api.post("/users/login", userInfo);
    const loggedUser = {
      username: res.data.user.username,
      token: res.data.token,
      expenses: res.data.user.expenses,
    };
    return loggedUser;
  } catch (error) {
    alert("Error Logging in please try again");
  }
}
