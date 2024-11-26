import { TURNS } from "../utilities/constants";
import PropTypes from "prop-types";

function Turn({ turn }) {
  // Creamos un objeto para cambiar el color del fondo dinámicamente, guardando primero los valores de las piezas
  const { blue, purple } = TURNS;
  const bgTurn = {
    [blue]: "bg-blue-500/90 shadow-blue-500",
    [purple]: "bg-violet-600/50 shadow-violet-500"
  };
  return (
    <footer className="flex justify-center py-4 rounded-">
      <div className={`size-12 ${turn === TURNS.blue ? bgTurn[turn] : ""} rounded-l-md shadow-md`}>
        <span className="text-4xl">{TURNS.blue}</span>
      </div>
      <div className={`size-12 ${turn === TURNS.purple ? bgTurn[turn] : ""} rounded-r-md shadow-md`}>
        <span className="text-4xl">{TURNS.purple}</span>
      </div>
    </footer>
  );
}

Turn.propTypes = {
  turn: PropTypes.string.isRequired
};

export default Turn;