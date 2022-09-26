import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from "../../context/auth";
import { logUser } from "../../services/api/auth/Login";
import { useDispatch } from "react-redux";
import { fetchExpenses } from "../../slices/expenses";
import {
  username_str,
  password_str,
  login_btn,
  not_account,
} from "./constants";

export function LogInComponent() {
  const dispatch = useDispatch();
  const context = useContext(AuthContext);
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      username: e.target.elements.username?.value,
      password: e.target.elements.password?.value,
    };

    const loggingOn = async (userInfo) => {
      const loggedUser = await logUser(userInfo);

      context.login(loggedUser);
      dispatch(fetchExpenses()).unwrap();
      router.push("/mainpage");
    };
    loggingOn(userInfo);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden justify-ceter">
      <div className="w-full p-6 m-auto rounded-md shadow-xl bg-slate-100 dark:bg-slate-600 shadow-slate-200 dark:shadow-slate-700 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-500 uppercase dark:text-blue-300">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300"
            >
              {username_str}
            </label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md text-slate-700 dark:bg-slate-200 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300"
            >
              {password_str}
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md text-slate-700 dark:bg-slate-200 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a
            href="#"
            className="text-xs text-blue-500 dark:text-blue-300 hover:underline"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide transition-colors duration-200 transform bg-blue-500 rounded-md text-slate-200 dark:text-slate-600 dark:bg-blue-300 hover:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none focus:bg-blue-600">
              {login_btn}
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700 dark:text-slate-200">
          {" "}
          {not_account} {""}
          <Link href="/signup">
            <a className="font-medium text-blue-600 dark:text-blue-300 hover:underline">
              Sign up
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
