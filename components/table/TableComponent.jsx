import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  selectAllExpenses,
  deleteExpense,
  fetchExpenses,
} from "../../slices/expenses";
import { EditIcon } from "./icons/EditIcon";
import { DeleteIcon } from "./icons/DeleteIcon";

const ExpensesTable = ({ expenses, deleteExp, editExp }) => {
  return (
    <table id="expenses_table" className="table w-full">
      <thead>
        <tr>
          <th className="px-1 py-2 text-center text-orange-100 bg-blue-500 dark:text-slate-600 dark:bg-blue-300 rounded-tl-xl">
            #
          </th>
          <th className="px-1 py-2 text-left text-orange-100 bg-blue-500 dark:bg-blue-300 dark:text-slate-600">
            Expense
          </th>
          <th className="px-1 py-2 text-left text-orange-100 bg-blue-500 dark:bg-blue-300 dark:text-slate-600">
            Cost
          </th>
          <th className="px-1 py-2 text-left text-orange-100 bg-blue-500 dark:bg-blue-300 dark:text-slate-600">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.length <= 0 ? (
          <tr className="odd:bg-blue-100 even:bg-blue-50">
            <td className="px-1 py-2 text-center text-orange-800" colSpan="3">
              No Expenses found. Add a few to begin.
            </td>
          </tr>
        ) : (
          ""
        )}{" "}
        {expenses.map((expenses) => {
          return (
            <ExpenseItem
              key={expenses.id}
              expense={expenses}
              deleteExp={deleteExp}
              editExp={editExp}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const ExpenseItem = ({ expense, deleteExp, editExp }) => {
  return (
    <tr
      key={expense.id}
      className={"transition duration-300  odd:bg-blue-100 even:bg-blue-50"}
    >
      <td className="px-1 py-2 text-center text-orange-800">{expense.id}</td>
      <td className="px-1 py-2 text-orange-800 ">{expense.name}</td>
      <td className="px-1 py-2 text-orange-800 ">{expense.cost}</td>
      <td className="flex justify-start gap-3 px-1 py-2 text-center text-orange-800">
        <button
          onClick={(e) => {
            const expenseObject = {
              _id: expense._id,
              name: expense.name,
              cost: expense.cost,
            };

            editExp(expenseObject);
          }}
          className="text-blue-900"
        >
          <EditIcon />
        </button>

        <button
          onClick={(e) => {
            const apiCall = async (expenseID) => {
              await deleteExp(expenseID);
            };

            apiCall(expense._id);
          }}
          className="text-orange-600"
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export function TableComponent({ setMode, setExpense }) {
  const expenses = useSelector(selectAllExpenses);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchExpenses()).unwrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deleteExp = async (expenseID) => {
    const apiCall = async (expenseID) => {
      try {
        await dispatch(deleteExpense(expenseID)).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    await apiCall(expenseID);
  };

  const editExp = (expense) => {
    setExpense({
      _id: expense._id,
      name: expense.name,
      cost: expense.cost,
    });
    setMode(true);
  };
  return (
    <div className="container w-full max-w-2xl">
      <div className="p-5 mt-5 text-gray-700 bg-gray-100 shadow-lg dark:bg-slate-600 rounded-xl">
        <div className="overflow-y-auto max-h-80">
          <ExpensesTable
            expenses={expenses}
            deleteExp={deleteExp}
            editExp={editExp}
          />
        </div>
      </div>
    </div>
  );
}
