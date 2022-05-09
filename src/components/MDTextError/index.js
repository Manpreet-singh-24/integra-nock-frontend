import React from "react";
import { FormHelperText } from '@mui/material';

const MDTextError = (props) => {
    return (
        <React.Fragment>
            <FormHelperText error id="standard-weight-helper-text-email-login">
                {props.children}
            </FormHelperText>
        </React.Fragment>
    );
};

export default MDTextError;
