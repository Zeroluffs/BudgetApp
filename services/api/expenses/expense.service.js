import jwt_decode from "jwt-decode";
import { api } from "../../../utils/ApiRoute";

const addExpense = async (expense) => {
  var jwtToken = localStorage.getItem("jwtToken");
  var decodedToken = jwt_decode(jwtToken);
  var response = await api.post("expenses/" + decodedToken.id, expense);
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
    "expenses/" + decodedToken.id + "/" + expenseID
  );
  return response.data;
};
const updateExpense = async (expenseID, expense) => {
  var response = await api.patch("expenses/" + expenseID, expense);
  return response.data;
};
const expenseService = {
  addExpense,
  fetchExpenses,
  deleteExpense,
  updateExpense,
};
export default expenseService;