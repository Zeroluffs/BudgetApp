import { api } from "../../../utils/ApiRoute";

export function logUser(userInfo) {
  api
    .post("/users/login", userInfo)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        const loggedUser = {
          username: res.data.user.username,
          token: res.data.token,
          expenses: res.data.user.expenses,
        };
        console.log(loggedUser);
        return loggedUser;
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Error Logging in please try again");
    });
}
