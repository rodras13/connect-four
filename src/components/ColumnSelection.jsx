import CellSelection from "./CellSelection";
import PropTypes from "prop-types";

function ColumnSelection({ turn }) {
  const prevColumnSelection = Array(7).fill(null);

  return (
    <div className="flex gap-2 p-2">
      {
        prevColumnSelection.map((index, cell) => {
          return (
            <CellSelection key={index} turn={turn}>
              {cell}
            </CellSelection>
          );
        })
      }
    </div>
  );
}

ColumnSelection.propTypes = {
  turn: PropTypes.string
};
export default ColumnSelection;