import React from "react";
import Footer from "../../../components/Footer/Footer";
import AdminMenu from "../../../components/Menu/Admin/AdminMenu";
import AmoutManager from "./AmoutManager";

export default function AdminDashBoard() {
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
                      <p className="title-content">Admin Dashboard</p>
                      <p className="title-small">
                        View real-time and occupied parking space
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <AmoutManager />
              <div
                className="bg-white"
                style={{
                  marginRight: 60,
                  marginLeft: 47,
                  height: "50vh",
                  position: "relative",
                  boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="centerbutton d-flex justify-content-center">
                  <button className="btn btn-primary mt-5">
                    View Parking Lot
                  </button>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
