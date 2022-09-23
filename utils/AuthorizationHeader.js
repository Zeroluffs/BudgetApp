// export const tokenConfig = {
//   headers: {
//     Authorization: "Bearer " + localStorage.getItem("jwtToken"),
//   },
// };

export function getToken() {
  if (typeof window !== "undefined") {
    const tokenConfiguration = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    };
    return tokenConfiguration;
  }
}
