import React from "react";

export default function BookingPayment() {
  return (
    <div class="payment">
      <i class="fa fa-wallet mt-3 pl-3"></i>
      <span class="pay-title">Payment Information</span>
      <div class="d-flex justify-content-between payment-detail">
        <p class="payment-detail-info">Slot number</p>
        <p class="payment-detail-value">A14</p>
      </div>
      <div class="d-flex justify-content-between payment-detail">
        <p class="payment-detail-info">Payment Method</p>
        <p class="payment-detail-value">Cash</p>
      </div>
      <div class="d-flex justify-content-between payment-detail">
        <p class="payment-detail-info">Booking fee</p>
        <p class="payment-detail-value">80.000</p>
      </div>
      <div class="d-flex justify-content-between payment-detail">
        <p class="payment-detail-info">Total</p>
        <p class="payment-detail-value">80.000</p>
      </div>
      <button class="button-pay">PAY</button>
    </div>
  );
}
