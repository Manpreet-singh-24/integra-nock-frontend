import React from "react";
import { Route, Navigate } from "react-router-dom";
import LocalStorageService from "services/LocalStorageService";

const Private = ({ component: Component, roles, ...rest }) => {
  const AccessToken = LocalStorageService.getAccessToken();
  const userRole = LocalStorageService.getUserRole();

  return (
    <>
      {AccessToken ? (
        <>
          {roles.includes(userRole) ? (
            <Component />
          ) : (
            <Navigate to="/dashboard" />
          )}
        </>
      ) : (
        <Navigate to="/authentication/sign-in" />
      )}
    </>
  );
};

export default Private;
