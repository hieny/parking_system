import React from "react";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="home-page">
      <div className="boder-rect" />
      <div className="container-fluid">
        <div className="header d-flex flex-row justify-content-between">
          <div className="mt-3 d-flex align-items-center">
            {/* <img
              className="logo-home-page"
              src="../../assets/img/logo.png"
              alt="logo"
  /> */}
            <p>
              <span
                style={{
                  color: "#1e8af9",
                  fontWeight: 800,
                  fontSize: 60,
                  marginLeft: 50,
                  marginBottom: 50,
                }}
              >
                Luas
              </span>
            </p>
          </div>
          <div className="login-home-page d-flex align-items-center">
            <button className="btn-login-home-page mt-3">Login</button>
          </div>
        </div>
        <div className="body-home-page">
          <div className="home-page-title">
            {/* <p class="landing-page-title">PARKING SYSTEM</p> */}
            <p className="landing-page-sologan">
              It's not just Parking
              <br />
              It's
              <span
                style={{
                  color: "#1e8af9",
                  fontWeight: 800,
                  fontSize: 90,
                  marginLeft: 50,
                }}
              >
                Luas
              </span>
            </p>
            <p className="landing-page-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              expedita nemo impedit sint possimus, quo nam in atque iste minus
              facilis perspiciatis dolores. Excepturi at quos adipisci
              reprehenderit libero voluptate ducimus quaerat deserunt dolores
              deleniti dolorem possimus, pariatur distinctio inventore ipsam!
              Iure quos, tempora velit temporibus natus maxime illo dolore.
            </p>
          </div>
          <div className="home-page-img">
            <img src="../../assets/img/landing-page.png" alt="landing-img" />
          </div>
          <button className="btn btn-warning">
            <NavLink to="dashboard">Find your parking lot</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
