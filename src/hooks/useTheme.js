import { useCallback, useState } from "react";

/** Gère le thème jour/nuit (classe "dark" sur <html>, mémorisée dans localStorage). */
export default function useTheme() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        /* stockage indisponible */
      }
      return next;
    });
  }, []);

  return { dark, toggle };
}
