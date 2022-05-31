import React from "react";

export default function CarDetail() {
  return (
    <div class="car-detail">
      <div class="row">
        <div class="car-detail-item-left col-md-10">
          <div class="d-flex justify-content-between pt-2 pl-3">
            <div class="car-infor d-flex flex-row">
              <img
                // src="https://vcdn-vnexpress.vnecdn.net/2021/10/24/17372-GhibliHybrid-1031-163504-9453-2967-1635044998.jpg"
                src="../../assets/img/car.jpg"
                class="car-img"
                alt="hinh anh"
              />
              <div class="car-infor-detail">
                <p class="car-name p-0">Maserati</p>
                <p class="car-id">29A-666.66</p>
              </div>
            </div>
            <div class="booking-date">
              <p class="time">May 16, 20:00</p>
              <p class="time-title">Booking Date</p>
            </div>
          </div>
        </div>
        <div class="car-detail-item-right col-md-2 pt-2">
          <div class="d-flex flex-column justify-content-center">
            <p class="time text-center">2h</p>
            <p class="time-title text-center">duration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
