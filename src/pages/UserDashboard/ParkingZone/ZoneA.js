import React from "react";
import { useDispatch } from "react-redux";
import Header from "../../../template/Normal/Layouts/Header/Header";

export default function ZoneA() {
  const dispatch = useDispatch();
  return (
    <div className="zone-A">
      <div className="container-fluid">
        <div className="row">
          <div className="zone-name-A">Zone A</div>
          <div className="zone-A-content col-md-12">
            <div className="zone-A-lists">
              <div className="zone-A-lot d-flex flex-row">
                <button
                  type="button"
                  className="lot-A-detail actived mr-3"
                  data-toggle="modal"
                  data-target="#modelId"
                  onClick={() => {
                    dispatch({
                      type: "Open_Login",
                      Component: <p>Hello there</p>,
                    });
                  }}
                >
                  A0
                </button>
                <button className="lot-A-detail mr-3">A1</button>
                <button className="lot-A-detail mr-3">A2</button>
                <button className="lot-A-detail mr-3">A3</button>
                <button className="lot-A-detail mr-3">A4</button>
                <button className="lot-A-detail mr-3">A5</button>
                <button className="lot-A-detail mr-3">A6</button>
                <button className="lot-A-detail mr-3">A7</button>
                <button className="lot-A-detail mr-3">A8</button>
                <button className="lot-A-detail mr-3">A9</button>
                <button className="lot-A-detail mr-3">A10</button>
                <button className="lot-A-detail mr-3">A11</button>
                <button className="lot-A-detail mr-3">A12</button>
                <button className="lot-A-detail mr-3">A13</button>
                <button className="lot-A-detail mr-3">A14</button>
                <button className="lot-A-detail actived mr-3">A</button>
                <button className="lot-A-detail mr-3">A15</button>
                <button className="lot-A-detail mr-3">A16</button>
                <button className="lot-A-detail mr-3">A17</button>
                <button className="lot-A-detail mr-3">A18</button>
                <button className="lot-A-detail actived mr-3">A19</button>
                <button className="lot-A-detail actived mr-3">A20</button>
                <button className="lot-A-detail mr-3">A21</button>
                <button className="lot-A-detail mr-3">A22</button>
                <button className="lot-A-detail mr-3">A23</button>
                <button className="lot-A-detail mr-3">A24</button>
                <button className="lot-A-detail mr-3">A25</button>
                <button className="lot-A-detail mr-3">A26</button>
                <button className="lot-A-detail mr-3">A27</button>
                <button className="lot-A-detail mr-3">A28</button>
                <button className="lot-A-detail mr-3">A29</button>
                <button className="lot-A-detail mr-3">A30</button>
                <button className="lot-A-detail mr-3">A31</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
