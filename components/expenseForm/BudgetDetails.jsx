import { Budget } from "./Budget";
import { BudgetAvailable } from "./BudgetAvailable";

export function BudgetDetails() {
  return (
    <div className="flex">
      <Budget />
      <BudgetAvailable />
    </div>
  );
}
