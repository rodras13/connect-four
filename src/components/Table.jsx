import Cell from "./Cell";
import ColumnSelection from "./ColumnSelection";
import PropTypes from "prop-types";

function Table({ turn }) {
  const array = Array(42).fill(null);

  return (
    <main className="flex flex-col items-center h-auto">
      <ColumnSelection turn={turn} />
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
    </main >
  );
}

Table.propTypes = {
  turn: PropTypes.string.isRequired
};

export default Table;