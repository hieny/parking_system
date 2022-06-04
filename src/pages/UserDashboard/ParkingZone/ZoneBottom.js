import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ZoneBottom() {
  const { lot } = useSelector((state) => state.ParkingLotReducer);

  const getLotBLeftLeft = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 32 && lot.parkingSlot_ID <= 45) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-3 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotBLeftRight = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 46 && lot.parkingSlot_ID <= 59) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-5 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotBLeftRightLeft = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 60 && lot.parkingSlot_ID <= 73) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-3 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotBLeftRightRight = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 74 && lot.parkingSlot_ID <= 87) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-5 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotBRightLeft = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 88 && lot.parkingSlot_ID <= 101) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-4 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotBRightRight = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 102 && lot.parkingSlot_ID <= 115) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-5 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotCLeftLeft = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 116 && lot.parkingSlot_ID <= 129) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-4 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotCLeftRight = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 130 && lot.parkingSlot_ID <= 143) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-5 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotCRightLeftLeft = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 144 && lot.parkingSlot_ID <= 157) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-3 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotCRightLeftRight = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 158 && lot.parkingSlot_ID <= 171) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-5 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotCRightRightLeft = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 172 && lot.parkingSlot_ID <= 185) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-3 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };

  const getLotCRightRightRight = () => {
    return lot.map((lot, index) => {
      let actived = lot.parkingSlot_status === "1" ? "actived" : "";
      if (lot.parkingSlot_ID >= 186 && lot.parkingSlot_ID <= 199) {
        return (
          <button key={index} className={`lot-B-detail ${actived} mr-5 mt-3`}>
            {lot.parkingSlot_number}
          </button>
        );
      }
    });
  };
  return (
    <div className="zone-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="zone-B col-md-6">
            <div className="zone-B-name">Zone B</div>
            <div className>
              {/*container-fluid*/}
              <div className="row">
                <div className="zone-B-left col-md-7">
                  <div className="zone-B-lot-left">
                    <div className="d-flex flex-row">
                      <div className="d-flex flex-row left-left-detail mr-3">
                        <div className="d-flex flex-column">
                          {getLotBLeftLeft()}
                        </div>
                        <div className="d-flex flex-column">
                          {getLotBLeftRight()}
                        </div>
                      </div>
                      <div className="line-B-left" />
                      <div className="d-flex flex-row left-right-detail">
                        <div className="d-flex flex-column">
                          {getLotBLeftRightLeft()}
                        </div>
                        <div className="d-flex flex-column">
                          {getLotBLeftRightRight()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="zone-B-right col-md-5">
                  <div className="zone-B-lot-right">
                    <div className="d-flex flex-row">
                      <div className="d-flex flex-row left-left-detail mr-4">
                        <div className="d-flex flex-column">
                          {getLotBRightLeft()}
                        </div>
                        <div className="line-B-right" />
                        <div className="d-flex flex-column">
                          {getLotBRightRight()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="zone-C col-md-6">
            <div className="zone-C-name">Zone C</div>
            <div className>
              {/*container-fluid*/}
              <div className="row">
                <div className="zone-C-left col-md-5">
                  <div className="zone-C-lot-left">
                    <div className="d-flex flex-row">
                      <div className="d-flex flex-row left-left-detail mr-4">
                        <div className="d-flex flex-column">
                          {getLotCLeftLeft()}
                        </div>
                        <div className="line-C-left" />
                        <div className="d-flex flex-column">
                          {getLotCLeftRight()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="zone-C-right col-md-7">
                  <div className="zone-C-lot-right">
                    <div className="d-flex flex-row">
                      <div className="d-flex flex-row left-left-detail mr-3">
                        <div className="d-flex flex-column">
                          {getLotCRightLeftLeft()}
                        </div>
                        <div className="d-flex flex-column">
                          {getLotCRightLeftRight()}
                        </div>
                      </div>
                      <div className="line-C-right" />
                      <div className="d-flex flex-row left-right-detail">
                        <div className="d-flex flex-column">
                          {getLotCRightRightLeft()}
                        </div>
                        <div className="d-flex flex-column">
                          {getLotCRightRightRight()}
                        </div>
                      </div>
                    </div>
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
