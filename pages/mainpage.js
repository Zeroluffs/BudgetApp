import React, { useEffect } from "react";
import { BudgetDetails } from "../components/expenseForm/BudgetDetails";
import { ExpenseAddComponent } from "../components/expenseForm/ExpenseAddComponent";
import { TableComponent } from "../components/table/TableComponent";
import { fetchExpenses } from "../slices/expenses";
import { useDispatch } from "react-redux";

export default function MainPage() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchExpenses()).unwrap();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <BudgetDetails />
      <ExpenseAddComponent />
      <TableComponent />
    </div>
  );
}
