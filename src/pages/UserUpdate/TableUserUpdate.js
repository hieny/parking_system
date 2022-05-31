import React from "react";

export default function TableUserUpdate() {
  return (
    <div
      className="bg-white"
      style={{
        marginRight: 60,
        marginLeft: 47,
        height: "65vh",
        position: "relative",
      }}
    >
      <div className="row">
        <div className="col-md-4" />
        <div className="login_form_inner col-md-4" style={{ marginTop: 30 }}>
          <form
            className="row login_form"
            action="mainController"
            method="post"
          >
            <div
              style={{
                fontSize: 20,
                marginLeft: 24,
                marginBottom: 15,
                marginTop: 15,
              }}
            >
              Your Current Full Name:
            </div>
            <div className="col-md-12 form-group">
              <input
                name="txtfullnameupdate"
                required
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter New Full Name"
                defaultValue
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter New Full Name'"
                style={{ width: 300 }}
              />
            </div>
            <div
              style={{
                fontSize: 20,
                marginLeft: 24,
                marginBottom: 15,
                marginTop: 15,
              }}
            >
              Your current phone:
            </div>
            <div className="col-md-12 form-group">
              <input
                className="form-control"
                id="name"
                name="phoneUpdate"
                type="text"
                placeholder="Enter New Phone"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter New Phone'"
                style={{ width: 300 }}
              />
            </div>
            <div
              style={{
                fontSize: 20,
                marginLeft: 24,
                marginBottom: 15,
                marginTop: 15,
              }}
            >
              Your current Address:
            </div>
            <div className="col-md-12 form-group">
              <input
                className="form-control"
                id="name"
                name="phoneUpdate"
                type="text"
                placeholder="Enter New Address"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter New Address'"
                style={{ width: 300 }}
              />
            </div>
            <div className="col-md-12 form-group">
              <input
                className="form-control"
                id="name"
                name="phoneUpdate"
                type="password"
                placeholder="Enter Your Password"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter Your Password'"
                style={{ width: 300 }}
              />
            </div>
            <div
              className="col-md-12 form-group"
              style={{ textAlign: "center", paddingRight: 60 }}
            >
              <button type="button" className="btn btn-outline-primary">
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4" />
      </div>
    </div>
  );
}
