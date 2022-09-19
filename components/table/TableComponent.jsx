import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllExpenses,
  deleteExpense,
  fetchExpenses,
} from "../../slices/expenses";
const ExpensesTable = ({ expenses, deleteExp }) => {
  return (
    <table id="expenses_table" className="table w-full">
      <thead>
        <tr>
          <th className="px-1 py-2 text-center text-orange-100 bg-blue-500 rounded-tl-xl">
            #
          </th>
          <th className="px-1 py-2 text-left text-orange-100 bg-blue-500">
            Expense
          </th>
          <th className="px-1 py-2 text-left text-orange-100 bg-blue-500">
            Cost
          </th>
          <th className="px-1 py-2 text-left text-orange-100 bg-blue-500">
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
            />
          );
        })}
      </tbody>
    </table>
  );
};

const ExpenseItem = ({ expense, deleteExp }) => {
  return (
    <tr
      key={expense.id}
      className={"transition duration-300  odd:bg-blue-100 even:bg-blue-50"}
    >
      <td className="px-1 py-2 text-center text-orange-800">{expense.id}</td>
      <td className="px-1 py-2 text-orange-800 ">{expense.name}</td>
      <td className="px-1 py-2 text-orange-800 ">{expense.cost}</td>
      <td className="flex justify-start gap-3 px-1 py-2 text-center text-orange-800">
        <button className="text-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export function TableComponent() {
  const expenses = useSelector(selectAllExpenses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenses()).unwrap();
  }, []);
  console.log("all", expenses);
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

  
  return (
    <div className="container w-full max-w-2xl">
      <div className="p-5 mt-5 text-gray-700 bg-gray-100 shadow-lg rounded-xl">
        <div className="overflow-y-auto max-h-80">
          <ExpensesTable expenses={expenses} deleteExp={deleteExp} />
        </div>
      </div>
    </div>
  );
}
