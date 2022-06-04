import React from "react";
import { useState, useSelector, useDispatch } from "react-redux";

export default function Modal() {
  let Component = useSelector((state) => state.ModalReducer.Component);
  return (
    <div>
      <div>
        <div
          className="modal"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{ borderBottom: 0 }}>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{Component}</div>
              <div className="modal-footer" style={{ borderTop: 0 }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
