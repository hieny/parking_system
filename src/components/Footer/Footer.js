import React from "react";

export default function Footer() {
  return (
    <div className="footer mt-3">
      <div className="row pt-1">
        <div className="col-md-6 mt-0">
          <div className="container-fluid">
            <h5 className="text-center">Our Address</h5>
            <div className="text-center">
              <p className="p-0 mb-0">457 Nguyen Hue</p>
              <p className="p-0 mb-0">Distric 1, TP.HCM, Viet Nam</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5>Contact Us</h5>
          <i className="fa fa-phone fa-lg" />: 028 7300 1866
          <br />
          <i className="fa fa-envelope fa-lg" />:
          <a href="daisymarika81@gmail.com">daisymarika81@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
