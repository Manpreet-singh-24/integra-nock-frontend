import React from "react";
import { Route, Navigate } from "react-router-dom";
import LocalStorageService from "services/LocalStorageService";

const Private = ({ component: Component, ...rest }) => {
  const AccessToken = LocalStorageService.getAccessToken();

  return (
    <>
      {AccessToken ? <Component /> : <Navigate to="/authentication/sign-in" />}
    </>
  );
};

export default Private;
