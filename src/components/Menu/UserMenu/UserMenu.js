import React from "react";
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  return (
    <div className="body-left col-md-2 p-0">
      <div className="d-flex flex-column">
        <button className="menu-detail actived mt-2">
          <i className="icon fa fa-chalkboard pr-3" />
          <NavLink to="dashboard">DashBoard</NavLink>
        </button>
        <button className="menu-detail mt-2">
          <i className="icon fa fa-user pr-3" />
          <NavLink to="userupdate">Update Profile</NavLink>
        </button>
        <button className="menu-detail mt-2">
          <i className="icon fa fa-car pr-3" />
          <NavLink to="uservehicle">Vehicle list</NavLink>
        </button>
        <button className="menu-detail mt-2">
          <i className="icon fa fa-newspaper pr-3" />
          <NavLink to="userrequest">My Requests</NavLink>
        </button>
        <button className="menu-detail mt-2">
          <i className="icon fa fa-money-check-alt pr-3" />
          <NavLink to="booking">Booking</NavLink>
        </button>
      </div>
    </div>
  );
}
