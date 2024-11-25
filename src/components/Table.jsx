import Cell from "./Cell";

function Table() {
  const array = Array(42).fill(null);

  return (
    <main className="flex flex-col items-center pt-8 h-auto">
      <section className="bg-violet-500 dark:bg-violet-800 grid grid-cols-7 rounded-md shadow-md shadow-violet-500 p-2 gap-2">
        {
          array.map((index, cell) => {
            return (
              <Cell key={index}>
                {cell}
              </Cell>
            );
          })
        }
      </section>
    </main>
  );
}

export default Table;