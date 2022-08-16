import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const MDSelectOption = (props) => {
  const { name, options, ...rest } = props;
  return (
    <React.Fragment>
      <TextField name={name} {...rest}>
        {options.map((option) => (
          <option
            key={option.id}
            value={option.id || option.Id}
            disabled={option.value === "" ? true : false}
          >
            {option.name}
          </option>
        ))}
      </TextField>
    </React.Fragment>
  );
};

MDSelectOption.propTypes = {
  name: PropTypes.string,
  options: PropTypes.any,
};

export default MDSelectOption;
