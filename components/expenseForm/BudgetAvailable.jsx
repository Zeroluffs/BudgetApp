export function BudgetAvailable() {
  return (
    <div className="ml-9">
      <lable htmlFor="budget" className="ml-4 text-2xl font-semibold">
        Remaining Budget
      </lable>
      <div
        id="budget"
        className="block h-20 pl-6 mt-4 mb-6 text-xl bg-blue-100 shadow-lg w-60 rounded-xl "
      ></div>
    </div>
  );
}
