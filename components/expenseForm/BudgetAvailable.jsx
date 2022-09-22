import { useEffect, useState } from "react";
import { selectAllExpenses } from "../../slices/expenses";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { CurrencyFormatter } from "../../utils/CurrencyFormater";

export function BudgetAvailable() {
  const [decodedToken, setDecodedToken] = useState(null);
  useEffect(() => {
    setDecodedToken(jwtDecode(localStorage.getItem("jwtToken")));
  }, []);

  const budget = decodedToken?.budget;
  let expenses = useSelector(selectAllExpenses);

  let remaining = expenses.reduce((acc, expense) => {
    return (acc += expense.cost);
  }, 0);

  remaining = CurrencyFormatter(budget - remaining);
  return (
    <div className="ml-9">
      <lable htmlFor="budget" className="ml-4 text-2xl font-semibold dark:text-slate-300">
        Remaining Budget
      </lable>
      <div
        id="budget"
        className="block h-20 pt-6 pl-6 mt-4 mb-6 text-xl text-orange-500 bg-blue-100 shadow-lg w-60 rounded-xl "
      >
        {remaining}
      </div>
    </div>
  );
}
