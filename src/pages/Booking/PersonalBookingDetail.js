import React from "react";

export default function PersonalBookingDetail() {
  return (
    <div class="personal-detail">
      <div class="personal-detail-title pl-3 pt-2">
        <i class="fa fa-user-circle"></i> Car & Personal Information
      </div>
      <form class="container-fluid mt-3">
        <div class="row">
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="fullName"
              name="fullName"
              placeholder="FULL NAME"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="address"
              name="address"
              placeholder="ADDRESS"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="EMAIL"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="gender"
              name="gender"
              placeholder="GENDER"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="phone"
              class="form-control"
              id="phone"
              name="phone"
              placeholder="PHONE"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="DOB"
              name="DOB"
              placeholder="DAY OF BIRTH"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="identity"
              name="identity"
              placeholder="IDENTITY NUM"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="number-plate"
              name="number-plate"
              placeholder="NUMBER PLATE"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
