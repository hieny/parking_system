import React from "react";
import Footer from "../../components/Footer/Footer";
import UserMenu from "../../components/Menu/UserMenu/UserMenu";

import TableUserUpdate from "./TableUserUpdate";

export default function UserUpdate() {
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
                      <p className="title-content">Update Profile</p>
                      <p className="title-small">
                        View real-time and occupied parking space
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <TableUserUpdate />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
