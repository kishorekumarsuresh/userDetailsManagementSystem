import React, { useEffect, useState } from "react";
import axios from "axios";
import NewShow from "./NewShow";
import { Button, TextField } from "@mui/material";

function NewHome() {
  const [users, setUsers] = useState([]);
  const [output, setOutput] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorizaton:
            "Bearer bf0f401f79f16bfff0c3dd99cc7d2395f41b613717f92226522562487ceff6bf",
        },
        params: { page: 7 },
      })
      .then((response) => {
        setUsers(response.data);
        setOutput(response.data);
        console.log("data loaded");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    setOutput([
      ...users.filter(
        (x) =>
          x.name.toLowerCase().includes(searchTerm) ||
          x.name.includes(searchTerm)
      ),
    ]);
  }, [searchTerm]);

  return (
    <div>
      <br />

      <TextField
        sx={{ width: 400, mb: 2 }}
        label="Search by name "
        color="success"
        variant="standard"
        align="center"
        value={searchTerm}
        onChange={handleChange}
      />

      <br />

      <NewShow output={output} setOutput={setOutput} />
      {/* <Pagination output={output}/> */}
    </div>
  );
}

export default NewHome;
