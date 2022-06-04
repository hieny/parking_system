import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2  p-0">
            <NavLink
              to="/dashboard"
              className="header-logo"
              style={{
                color: "#1e8af9",
                fontWeight: 600,
                fontSize: 30,
                marginLeft: 50,
                borderRight: 0,
                padding: 0,
              }}
            >
              Luas
            </NavLink>
          </div>
          <div
            className="col-md-10 header-welcome d-flex justify-content-end p-0 "
            style={{ padding: 5 }}
          >
            <div className="btn-group dropleft">
              <button
                type="button"
                className="btn dropdown-toggle p-1 pr-5"
                data-toggle="dropdown"
              >
                <img
                  src="https://i.pravatar.cc/500"
                  alt="profile"
                  className="btn-setting"
                />
                <span className="ml-3 " style={{ fontWeight: "bold" }}>
                  hienthq
                </span>
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" href="#">
                  View Profile
                </button>
                <button className="dropdown-item" href="#">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
