import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { func } from "prop-types";

function EditDetails() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [uname, setUname] = useState("");
  const [umail, setUmail] = useState("");

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization:
            "Bearer " +
            "bf0f401f79f16bfff0c3dd99cc7d2395f41b613717f92226522562487ceff6bf",
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { name, email, gender, status } = userData;

  useEffect(() => {
    setUname(name);
    setUmail(email);
  }, [name, email]);

  function display() {
    axios({
      method: "PATCH",
      data: { name: { uname }, mail: { umail } },
      headers: {
        Authorization:
          "Bearer bf0f401f79f16bfff0c3dd99cc7d2395f41b613717f92226522562487ceff6bf",
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((errr) => {
        console.log(errr);
      });
    nav("/");
  }

  const nav = useNavigate();

  return (
    <div>
      EditDetails:
      <br />
      <FormControl>
        <FormLabel>
          Name:
          <TextField
            sx={{ width: 360 }}
            value={uname}
            onChange={(e) => {
              setUname(e.target.value);
            }}
          ></TextField>
        </FormLabel>
        <FormLabel>
          email:
          <TextField
            sx={{ width: 360 }}
            value={umail}
            onChange={(e) => {
              setUmail(e.target.value);
            }}
          >
            email:
          </TextField>
        </FormLabel>
        <Button
          sx={{ mt: 1 }}
          variant="contained"
          color="success"
          onClick={display}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
}

export default EditDetails;
