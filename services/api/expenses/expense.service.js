import jwt_decode from "jwt-decode";
import { api } from "../../../utils/ApiRoute";
import { tokenConfig } from "../../../utils/AuthorizationHeader";

const addExpense = async (expense) => {
  var jwtToken = localStorage.getItem("jwtToken");
  var decodedToken = jwt_decode(jwtToken);
  var response = await api.post(
    "expenses/" + decodedToken.id,
    expense,
    tokenConfig
  );
  return response.data;
};

const fetchExpenses = async () => {
  var jwtToken = localStorage.getItem("jwtToken");
  var decodedToken = jwt_decode(jwtToken);
  var response = await api.get("expenses/" + decodedToken.id);
  return response.data;
};

const deleteExpense = async (expenseID) => {
  var jwtToken = localStorage.getItem("jwtToken");
  var decodedToken = jwt_decode(jwtToken);
  var response = await api.delete(
    "expenses/" + decodedToken.id + "/" + expenseID,
    tokenConfig
  );
  return response.data;
};
const updateExpense = async (expenseID, expense) => {
  var response = await api.patch("expenses/" + expenseID, expense, tokenConfig);
  return response.data;
};
const expenseService = {
  addExpense,
  fetchExpenses,
  deleteExpense,
  updateExpense,
};
export default expenseService;
