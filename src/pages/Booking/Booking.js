import React from "react";
import Footer from "../../components/Footer/Footer";
import UserMenu from "../../components/Menu/UserMenu/UserMenu";
import TableBooking from "./TableBooking";

export default function Booking() {
  return (
    <div class="content">
      <div class="content-body">
        <div class="container-fluid">
          <div class="row">
            <UserMenu />
            <div class="body-right col-md-10">
              <div class="title-content">
                <div class="container-fluid">
                  <div class="row">
                    <div class="title col-md-12">
                      <p class="title-content">Booking</p>
                      <p class="title-small">
                        View real-time and occupied parking space
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <TableBooking />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
