import { TURNS } from "../utilities/constants";
import PropTypes from "prop-types";

function CellSelection({ turn }) {
  // Creamos estilos dinámicos, dependiendo del turno
  const { blue, purple } = TURNS;
  const cellOpacityColor = {
    [blue]: "bg-blue-500 shadow-md shadow-blue-500 hover:opacity-100",
    [purple]: "bg-violet-600 shadow-md shadow-violet-400 hover:opacity-100"
  };

  return (
    <div className={`size-14 rounded-full opacity-0 ${cellOpacityColor[turn]}`}></div>
  );
}

CellSelection.propTypes = {
  turn: PropTypes.string
};

export default CellSelection;