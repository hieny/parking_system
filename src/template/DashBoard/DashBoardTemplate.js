import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";

export const DashBoardTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <Component {...restProps} />
          </Fragment>
        );
      }}
    />
  );
};
