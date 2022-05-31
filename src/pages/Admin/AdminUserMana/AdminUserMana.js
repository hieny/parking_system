import React from "react";
import Footer from "../../../components/Footer/Footer";
import AdminMenu from "../../../components/Menu/Admin/AdminMenu";
import TableAdminUserMana from "./TableAdminUserMana";

export default function AdminUserMana() {
  return (
    <div className="content">
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <AdminMenu />
            <div className="body-right col-md-10">
              <div className="title-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="title col-md-12">
                      <p className="title-content">User's Managerment</p>
                      <p className="title-small">
                        View real-time and occupied parking space
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <TableAdminUserMana />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
