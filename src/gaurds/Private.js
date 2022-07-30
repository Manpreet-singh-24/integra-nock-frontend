import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import LocalStorageService from 'services/LocalStorageService';

const Private = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                LocalStorageService.getAccessToken() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/authentication/sign-in" />
                )
            }
        />
    );
};

export default Private;
