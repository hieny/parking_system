import React from "react";
import Footer from "../../../components/Footer/Footer";
import AdminMenu from "../../../components/Menu/Admin/AdminMenu";
import TableAdminRequestMana from "./TableAdminRequestMana";

export default function AdminRequestMana() {
  return (
    <div className="content">
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <AdminMenu />
            <div className="body-right col-md-10">
              <div className="title-content mb-1">
                <div className="container-fluid">
                  <div className="row">
                    <div className="title col-md-12">
                      <p className="title-content">User Request Management</p>
                      <p className="title-small">
                        View real-time and occupied parking space
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <TableAdminRequestMana />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
