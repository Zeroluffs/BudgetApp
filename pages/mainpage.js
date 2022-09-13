import { BudgetDetails } from "../components/expenseForm/BudgetDetails";
import { ExpenseAddComponent } from "../components/expenseForm/ExpenseAddComponent";
import { TableComponent } from "../components/table/TableComponent";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <BudgetDetails/>
      <ExpenseAddComponent />
      <TableComponent />
    </div>
  );
}
