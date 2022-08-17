import React from "react";
import { TextField, FormControl, Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import axios from "axios";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmailRounded";
import ManSharpIcon from "@mui/icons-material/ManSharp";
import WomanSharpIcon from "@mui/icons-material/WomanSharp";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Searching from "./Searching";
import Display from "./Display";

function Home() {
  const [users, setUsers] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get("https://gorest.co.in/public/v2/users").then((response) => {
      setUsers(response.data);
      setDetails(response.data);
    });
  }, []);

  return (
    <div>
      <Searching datas={users} details={details} setDetails={setDetails} />
      <Display details={details} setDetails={setDetails} />
    </div>
  );
}

export default Home;
