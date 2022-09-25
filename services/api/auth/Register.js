import { api } from "../../../utils/ApiRoute";

export async function RegisterUser(userInfo) {
  try {
    const res = await api.post("/users", userInfo);
    const loggedUser = {
      username: res.data.user.username,
      token: res.data.token,
      expenses: res.data.user.expenses,
    };
    return loggedUser;
  } catch (error) {
    alert("Error Registering please try again");
  }
}
