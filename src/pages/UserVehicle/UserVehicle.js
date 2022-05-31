import React from "react";
import Footer from "../../components/Footer/Footer";
import UserMenu from "../../components/Menu/UserMenu/UserMenu";

import TableUserVehicle from "./TableUserVehicle";

export default function UserVehicle() {
  return (
    <div className="content">
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <UserMenu />
            <div className="body-right col-md-10">
              <div className="title-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="title col-md-12">
                      <p className="title-content">My Vehicles</p>
                      <p className="title-small">
                        View real-time and occupied parking space
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <TableUserVehicle />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
