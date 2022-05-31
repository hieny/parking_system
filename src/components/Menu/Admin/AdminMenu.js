import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminMenu() {
  return (
    <div className="body-left col-md-2 p-0">
      <div className="d-flex flex-column">
        <button className="menu-detail actived mt-2">
          <i className="icon fa fa-chalkboard pr-3" />
          <NavLink to="adashboard">DashBoard</NavLink>
        </button>
        <button className="menu-detail mt-2">
          <i className="icon fa fa-user pr-3" />
          <NavLink to="admanagerment">Users Manage</NavLink>
        </button>
        <button className="menu-detail mt-2">
          <i className="icon fa fa-car pr-3" />
          <NavLink to="avevhiclemanagerment">Vehicles Manage</NavLink>
        </button>
        <button className="menu-detail mt-2">
          <i className="icon fa fa-newspaper pr-3" />
          <NavLink to="arequestmanagerment">Users Requests</NavLink>
        </button>
      </div>
    </div>
  );
}
