import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  FormControl,
  FormLabel,
  Snackbar,
  TextField,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function EditDetails() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [uname, setUname] = useState("");
  const [umail, setUmail] = useState("");
  const [active, setActive] = useState("active");
  const [ugender, setUgender] = useState("");
  const [open, setOpen] = useState(false);

  const [vname,setVname] = useState("")
  const [vmail,setVmail] = useState("")

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization:
            "Bearer " +
            "0ee057fd533ccad974e9383af8209a2e3db05bf7db963840f9c9b68f2c09f4f2",
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
    setUgender(gender);
  }, [name, email, gender]);

  function editHandler() {
    const data = {
      name: uname,
      email: umail,
      status: "active",
    };
    axios
      .patch(`https://gorest.co.in/public/v2/users/${id}`, data, {
        headers: {
          Authorization:
            "Bearer 0ee057fd533ccad974e9383af8209a2e3db05bf7db963840f9c9b68f2c09f4f2",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((errr) => {
        console.log(errr);
      });
    setOpen(true);

    }

  function handleClose() {
    setOpen(false);
    nav("/");
  }


  const handleEditName = (e) =>{
    
      setUname(e.target.value)
      setVname((/^[a-zA-Z+$]/.test(e.target.value))? "":" Name should be characters only ")
      
  }

  const handleEditMail = (e) =>{
    setUmail(e.target.value)
    setVmail((/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value))? "":"provide a valid  email")
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
            onChange={handleEditName}
          ></TextField>
          <p>{vname}</p>
        </FormLabel>
        <FormLabel>
          email:
          <TextField
            sx={{ width: 360 }}
            value={umail}
            onChange={handleEditMail}
          >
            email:
          </TextField>
          <p>{vmail}</p>
        </FormLabel>
        <FormLabel>
          Select a gender :
          <RadioGroup
            row
            onChange={(e) => {
              setUgender(e.target.value);
            }}
            value={ugender}
            name="gender"
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormLabel>
        <Button
          sx={{ mt: 1 }}
          variant="contained"
          color="success"
          onClick={editHandler}
        >
          Submit
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          message="Data Edited"
          onClose={handleClose}
        />
      </FormControl>
    </div>
  );
}

export default EditDetails;
