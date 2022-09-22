import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../slices/expenses";

export function ExpenseAddComponent({
  setMode,
  expenseToEdit,
  editMode,
  setExpense,
}) {
  const dispatch = useDispatch();
  const [expenseAuto, setExpenseAuto] = useState(expenseToEdit);
  console.log(expenseToEdit);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.elements.expense_name.value,
      cost: e.target.elements.expense_cost.value,
    };

    await dispatch(addExpense(obj)).unwrap();
    e.target.elements.expense_name.value = "";
    e.target.elements.expense_cost.value = 0;
  };

  const SubmitButton = () => {
    return (
      <button
        type="submit"
        className="w-40 mx-20 mt-8 text-xl text-white transition-colors duration-200 bg-blue-500 rounded-full dark:text-slate-600 dark:bg-blue-300 hover:bg-blue-600 h-9"
      >
        Add Expense
      </button>
    );
  };

  const CancelButton = () => {
    return (
      <button
        onClick={(e) => {
          setMode(false);
          setExpense({
            _id: "",
            name: "",
            cost: 0,
          });
        }}
        className="w-40 mx-20 mt-8 text-xl text-white transition-colors duration-200 bg-red-500 rounded-full hover:bg-red-700 h-9"
      >
        Cancel
      </button>
    );
  };

  const EditButtons = () => {
    return (
      <div>
        <div>
          <SubmitButton />
        </div>
        <div>
          <CancelButton />
        </div>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <lable htmlFor="expense_name" className="text-lg dark:text-slate-300">
          Expense Name
        </lable>
        <input
          key={expenseToEdit.name}
          autoFocus={true}
          id="expense_name"
          type="text"
          defaultValue={expenseToEdit.name}
          className="block py-2 pl-2 text-lg text-black border-2 border-gray-300 rounded-md w-80 focus:outline-none dark:bg-slate-200 focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
        ></input>
      </div>

      <div className="relative pt-6">
        <label htmlFor="expense_cost" className="text-lg dark:text-slate-300">
          Cost
        </label>
        <input
          key={expenseToEdit.cost}
          id="expense_cost"
          type="number"
          defaultValue={expenseToEdit.cost}
          className="block py-2 pl-6 text-lg text-black border-2 border-gray-300 rounded-md dark:bg-slate-200 w-80 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
        ></input>
        <p className="absolute bottom-2.5 left-3 text-lg font-bold">$</p>
      </div>
      <div>{!editMode ? <SubmitButton /> : <EditButtons />}</div>
    </form>
  );
}
