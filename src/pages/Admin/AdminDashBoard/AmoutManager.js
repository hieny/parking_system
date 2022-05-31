import React from "react";

export default function AmoutManager() {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="overview row">
          <div className="col-md-4 icon-center">
            <i className="fa-solid fa-car" />
          </div>
          <div className="col-md-8 textoverview-center">
            <div
              className="font-weight-bold"
              style={{ color: "#7f4ec5", fontSize: "1.4rem" }}
            >
              3
            </div>
            <div className="font-weight-bold">Total Vehicle in parking lot</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="overview row">
          <div className="col-md-4 icon-center">
            <i className="fa-solid fa-users" />
          </div>
          <div className="col-md-8 textoverview-center">
            <div
              className="font-weight-bold"
              style={{ color: "#7f4ec5", fontSize: "1.4rem" }}
            >
              3
            </div>
            <div className="font-weight-bold">Total Registered User</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="overview row">
          <div className="col-md-4 icon-center">
            <i className="fa-solid fa-bell" />
          </div>
          <div className="col-md-8 textoverview-center">
            <div
              className="font-weight-bold"
              style={{ color: "#7f4ec5", fontSize: "1.4rem" }}
            >
              3
            </div>
            <div className="font-weight-bold">
              Total Registered User Request
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
