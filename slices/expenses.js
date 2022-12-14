import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import expenseService from "../services/api/expenses/expense.service";

const initialState = {
  expenses: [],
  status: "idle",
  error: null,
};

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async () => {
    const response = await expenseService.fetchExpenses();
    return response;
  }
);

export const addExpense = createAsyncThunk(
  "expenses/addExpense",
  async (expense) => {
    const response = await expenseService.addExpense(expense);
    return response;
  }
);
export const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async (expenseID) => {
    await expenseService.deleteExpense(expenseID);
    return expenseID;
  }
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    reset(state) {
      Object.assign(state, initialState);
    },
    expenseUpdated(state, action) {
      const { name, cost, _id } = action.payload;
      let expense = {
        name: name,
        cost: cost,
      };
      expenseService.updateExpense(_id, expense);
      const existingExpense = state.expenses.find(
        (expense) => expense._id === _id
      );
      if (existingExpense) {
        existingExpense.name = name;
        existingExpense.cost = parseInt(cost);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchExpenses.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.expenses.length === 0) {
          state.expenses = state.expenses.concat(action.payload);
        }
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter(
          ({ id }) => id !== action.payload
        );
        state.expenses.splice(
          state.expenses.findIndex((arrow) => arrow._id === action.payload),
          1
        );
      });
  },
});

export default expensesSlice.reducer;
export const { reset, expenseUpdated } = expensesSlice.actions;
export const selectAllExpenses = (state) => state.expenses.expenses;
export const selectExpenseById = (state, expenseID) =>
  state.expense.expense.find((expense) => expense._id === expenseID);
