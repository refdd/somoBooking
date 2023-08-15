// components/NationalityInput.js
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";

const NationalityInput = ({ value, onChange, nationalityOptions }) => {
  return (
    <FormControl variant="standard" fullWidth sx={{}}>
      <InputLabel id="demo-multiple-checkbox-label">Nationality</InputLabel>
      <Select
        label="Nationality"
        variant="standard"
        value={value}
        onChange={onChange}
        fullWidth
      >
        {nationalityOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default NationalityInput;
