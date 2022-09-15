import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { logUser } from "../services/api/auth/Login";
import { AuthContext } from "../context/auth";

export default function Home() {
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
      router.push("/mainpage");
    };
    loggingOn(userInfo);
  };
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden justify-ceter">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-slate-200 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-500 uppercase ">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
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
  );
}
