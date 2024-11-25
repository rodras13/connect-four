import ToggleColorMode from "./ToggleColorMode";

function Header() {
  return (
    <header className="flex flex-col gap-3 items-center pb-10">
      <h1
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600 cursor-default"
      >
        Conecta 4
      </h1>
      <ToggleColorMode />
    </header>
  );
}

export default Header;