import PropTypes from "prop-types";

function Cell({ children }) {
  return (
    <div className="bg-violet-200 size-14 rounded-full flex justify-center items-center text-black">{children}</div>
  );
}

Cell.propTypes = {
  children: PropTypes.number
};

export default Cell;