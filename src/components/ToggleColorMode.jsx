import { useState, useEffect } from "react";

function ToggleColorMode() {
  const [scheme, setScheme] = useState("light");

  // Creamos un efecto que cambie dinámicamente la clase según el estado
  useEffect(() => {
    if (scheme === "dark") {
      document.querySelector("html")?.setAttribute("class", "dark");
    } else {
      document.querySelector("html")?.removeAttribute("class");
    }
  }, [scheme]);

  const handleClick = (event) => {
    event.preventDefault();

    // Cambiamos el estado para que elija entre los que quiera
    setScheme(scheme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="bg-violet-500 dark:bg-violet-800 px-2 py-1 max-w-36 rounded-md shadow-md shadow-violet-200 dark:shadow-violet-700 text-white text-sm"
      onClick={handleClick}
    >
      Change Color
    </button>
  );
}

export default ToggleColorMode;