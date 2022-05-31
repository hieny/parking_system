import { Route } from "react-router-dom";
import Header from "../../DashBoard/Header/Header";
import Footer from "../../../components/Footer/Footer";

export const NormalTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};
