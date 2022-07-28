import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

const MDSelectOption = (props) => {
  const { name, options, ...rest } = props;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <label>Chaincode:</label>
        </Grid>
        <Grid item xs={8}>
          <TextField name={name} {...rest}>
            {options.map((option) => (
              <option
                key={option.id}
                value={option.id}
                disabled={option.value === "" ? true : false}
              >
                {option.name}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

MDSelectOption.propTypes = {
  name: PropTypes.string,
  options: PropTypes.any,
};

export default MDSelectOption;
