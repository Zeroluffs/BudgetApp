import React, { useEffect, useState } from "react";
import { BudgetDetails } from "../components/expenseForm/BudgetDetails";
import { ExpenseAddComponent } from "../components/expenseForm/ExpenseAddComponent";
import { TableComponent } from "../components/table/TableComponent";
import { useDispatch } from "react-redux";

export default function MainPage() {
  const [editMode, setEditMode] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState({
    _id: "",
    name: "",
    cost: 1,
  });
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <BudgetDetails />
      <ExpenseAddComponent
        setMode={(mode) => setEditMode(mode)}
        expenseToEdit={expenseToEdit}
        editMode={editMode}
      />
      <TableComponent
        setMode={(mode) => setEditMode(mode)}
        setExpense={(expenseToEdit) => setExpenseToEdit(expenseToEdit)}
      />
    </div>
  );
}
