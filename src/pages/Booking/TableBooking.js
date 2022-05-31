import React from "react";
import BookingPayment from "./BookingPayment";
import CarDetail from "./CarDetail";
import ParkingLotDetail from "./ParkingLotDetail";
import PersonalBookingDetail from "./PersonalBookingDetail";

export default function TableBooking() {
  return (
    <div class="booking-content">
      <div class="container-fluid">
        <div class="row">
          <div class="booking-left col-md-9">
            <CarDetail />
            <PersonalBookingDetail />
          </div>
          <div class="booking-right col-md-3">
            <ParkingLotDetail />
            <BookingPayment />
          </div>
        </div>
      </div>
    </div>
  );
}
