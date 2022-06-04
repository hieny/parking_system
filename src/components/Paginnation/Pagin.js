import React from "react";
import PropTypes from "prop-types";

Pagin.propTypes = {
  paginantion: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagin.defaultProps = {
  onPageChange: null,
};

export default function Pagin(props) {
  const { paginantion, onPageChange } = props;
  const { page, limit, totalRows } = paginantion;
  const totalPages = Math.ceil(totalRows / limit);
  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <div>
      <button
        onClick={handlePageChange(page - 1)}
        disabled={page <= 1}
        // className="btn btn-primary"
      >
        Prev
      </button>
      <button
        onClick={handlePageChange(page + 1)}
        disabled={page <= totalPages}
        // className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
}
