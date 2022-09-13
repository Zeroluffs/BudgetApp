import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const ExpensesTable = ({ expenses }) => {
  return (
    <table id="expenses_table" className="table w-full">
      <thead>
        <tr>
          <th className="text-center px-1 py-2 bg-blue-500 text-orange-100 rounded-tl-xl">
            #
          </th>
          <th className="text-left px-1 py-2 bg-blue-500 text-orange-100">
            Expense
          </th>
          <th className="text-left px-1 py-2 bg-blue-500 text-orange-100">
            Cost
          </th>
          <th className="text-left px-1 py-2 bg-blue-500 text-orange-100">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.length <= 0 ? (
          <tr className="odd:bg-blue-100 even:bg-blue-50">
            <td className="text-center  px-1 py-2 text-orange-800" colSpan="3">
              No Expenses found. Add a few to begin.
            </td>
          </tr>
        ) : (
          ""
        )}{" "}
        {expenses.map((expenses, index) => {
          return <ExpenseItem key={index} expense={expenses} index={index} />;
        })}
      </tbody>
    </table>
  );
};

const ExpenseItem = ({ expense, index }) => {
  return (
    <tr
      key={index}
      className={"transition duration-300  odd:bg-blue-100 even:bg-blue-50"}
    >
      <td className="text-center  px-1 py-2 text-orange-800">{index + 1}</td>
      <td className=" px-1 py-2 text-orange-800">{expense.name}</td>
      <td className=" px-1 py-2 text-orange-800">{expense.cost}</td>
      <td className="text-center  px-1 py-2 text-orange-800 flex gap-3 justify-start">
        <button className="text-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        <button className="text-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {}, [expenses]);

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
    <div className="relative flex flex-col justify-ceter min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-slate-200  lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-500  uppercase ">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-blue-500 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Login
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Do not have an account?{" "}
          <Link href="/signup">
            <a className="font-medium text-blue-600 hover:underline">Sign up</a>
          </Link>
        </p>
      </div>
    </div>

    // <div className="flex justify-center flex-col items-center h-screen">
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <lable htmlFor="expense_name" className="text-lg">
    //         Expense Name
    //       </lable>
    //       <input
    //         id="expense_name"
    //         type="text"
    //         className=" py-2 block w-80 text-lg pl-2 rounded-md border-2 border-gray-300 text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
    //       ></input>
    //     </div>

    //     <div className="relative pt-6">
    //       <label htmlFor="expense_cost" className="text-lg">
    //         Cost
    //       </label>
    //       <input
    //         id="expense_cost"
    //         type="number"
    //         className="py-2 block  w-80 text-lg pl-6 rounded-md border-2 border-gray-300 text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
    //       ></input>
    //       <p className="absolute bottom-2.5 left-3 text-lg font-bold">$</p>
    //     </div>
    //     <div>
    //       <button
    //         type="submit"
    //         className="rounded-full w-40 h-9 text-xl bg-blue-500 text-white mt-8 mx-20"
    //       >
    //         Add Expense
    //       </button>
    //     </div>
    //   </form>

    //   <div className="container w-full max-w-2xl">
    //     <div className="bg-gray-100 mt-5 p-5 rounded-xl shadow-lg text-gray-700">
    //       <div className="max-h-80 overflow-y-auto">
    //         <ExpensesTable expenses={expenses} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
