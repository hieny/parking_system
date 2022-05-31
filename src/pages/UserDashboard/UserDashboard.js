import React from "react";
import UserMenu from "../../components/Menu/UserMenu/UserMenu";
import "../../style/styles.css";
import ZoneA from "./ParkingZone/ZoneA";
import ZoneBottom from "./ParkingZone/ZoneBottom";

export default function UserDashboard() {
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
                      <p className="title-content">Parking Space Overview</p>
                      <p className="title-small">
                        View real-time and occupied parking space
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lot-content">
                <div className="container-fluid">
                  <div className="parking-list">
                    {/* Zone A */}
                    <ZoneA />
                    {/* Zone B & C */}
                    <ZoneBottom />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
