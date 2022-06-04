import { GET_PARKING_LOT } from "../constrants/ParkingLotConstrants";

const initialState = {
  lot: [],
};

const ParkingLotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PARKING_LOT: {
      state.lot = action.lot;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ParkingLotReducer;
