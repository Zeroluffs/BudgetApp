export function ExpenseAddComponent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.expense_name.value);
    const obj = {
      index: 0,
      name: e.target.elements.expense_name.value,
      cost: e.target.elements.expense_name.cost,
    };
    setExpenses((oldArray) => [...oldArray, obj]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <lable htmlFor="expense_name" className="text-lg">
          Expense Name
        </lable>
        <input
          id="expense_name"
          type="text"
          className="block py-2 pl-2 text-lg text-black border-2 border-gray-300 rounded-md w-80 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
        ></input>
      </div>

      <div className="relative pt-6">
        <label htmlFor="expense_cost" className="text-lg">
          Cost
        </label>
        <input
          id="expense_cost"
          type="number"
          className="block py-2 pl-6 text-lg text-black border-2 border-gray-300 rounded-md w-80 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
        ></input>
        <p className="absolute bottom-2.5 left-3 text-lg font-bold">$</p>
      </div>
      <div>
        <button
          type="submit"
          className="w-40 mx-20 mt-8 text-xl text-white bg-blue-500 rounded-full h-9"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}