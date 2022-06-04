import { combineReducers } from "redux";
import ModalReducer from "./reducers/ModalReducer";
import ParkingLotReducer from "./reducers/ParkingLotReducer";

const rootReducer = combineReducers({
  ModalReducer,
  ParkingLotReducer,
});

export default rootReducer;
