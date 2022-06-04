import React from "react";

const stateDefaults = {
  Component: <p> Nội dung mặc định </p>,
};

const BookingReducer = (state = stateDefaults, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "Open_Login": {
      state.Component = action.Component;
      return { ...state };
    }
  }
  return { ...state };
};

export default BookingReducer;
