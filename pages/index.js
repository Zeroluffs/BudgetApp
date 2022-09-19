import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { logUser } from "../services/api/auth/Login";
import { AuthContext } from "../context/auth";
import { LogInComponent } from "../components/auth/LogInComponent";
import { AuthProvider } from "../context/auth";

export default function Home() {
  const context = useContext(AuthContext);
  const { loadUser } = context;
  const router = useRouter();

  useEffect(() => {
    console.log("hi");
    context.loadUser();
  }, []);

  return <LogInComponent />;
}
