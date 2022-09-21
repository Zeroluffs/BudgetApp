import { useEffect, useState } from "react";

export function useDarkSide() {
  const [theme, setTheme] = useState(null);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    if (!localStorage.theme) {
      setTheme(localStorage.theme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
