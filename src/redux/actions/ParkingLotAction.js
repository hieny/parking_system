import Axios from "axios";
import { GET_PARKING_LOT } from "../constrants/ParkingLotConstrants";

export const getParkingListAPI = () => {
  return async (dispatch) => {
    try {
      let { data, status, ...res } = await Axios({
        url: "http://localhost:6969/parking/api/lots",
        method: "GET",
      });
      if (status === 200) {
        // console.log("asiox lot status: " + status);
        dispatch({
          type: GET_PARKING_LOT,
          lot: data,
        });
      }
    } catch (err) {}
  };
};
