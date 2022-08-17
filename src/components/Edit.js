import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, TextField } from "@mui/material";

class Edit extends Component {
  render() {
    return (
      <div>
        <Typography sx={{ mr: 85 }} variant="h5">
          Are you new User?
        </Typography>
        <br />
        <FormControl>
          <Typography sx={{ mr: 55 }} variant="body1">
            Username
          </Typography>
          <TextField color="success" name="name" variant="outlined" />
          <Typography sx={{ mr: 55 }} variant="body1">
            Email-id
          </Typography>
          <TextField color="success" name="email" variant="outlined" />
          <Typography sx={{ mr: 45 }} variant="body1">
            Select your Gender
          </Typography>
          <RadioGroup row name="gender">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <Button variant="contained" color="success">
            Submit
          </Button>
        </FormControl>
      </div>
    );
  }
}

export default Edit;
