import React, { useEffect, useState } from "react";
import { TextField, FormControl, Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmailRounded";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
function Searching({ datas, details, setDetails }) {
  const [ascend, setAscend] = useState([]);
  const [search, setSearchterm] = useState("");

  // const handleChange = () =>{
  //   setAscend(datas.sort((a,b)=> a.name > b.name ? 1: -1))
  // }

  useEffect(() => {
    setDetails([
      ...datas.filter(
        (val) =>
          val.name.toLowerCase().includes(search) ||
          val.email.toLowerCase().includes(search)
      ),
    ]);
  }, [search]);

  return (
    <div>
      {/* <FormControlLabel sx={{display:'flex' ,justifyContent:'flex-start'}}control={<Switch onClick={handleChange}/>} label="sort by A-Z" /> */}
      {/* <Button  onClick={handleChange} sx={{display:'flex',justifyContent:'flex-start',marginTop:1}}variant='outlined'>Sort by (Name)</Button> */}
      <Box sx={{ m: 5, color: "text.primary" }}>
        <FormControl>
          <TextField
            sx={{ width: 400 }}
            label="Search by name ,email ,gender"
            color="success"
            variant="outlined"
            align="center"
            value={search}
            onChange={(e) => {
              setSearchterm(e.target.value);
            }}
            required
          />
          {/* <Button
            sx={{ ml: 13, mr: 3, mt: 1, width: 170 }}
            variant='contained'
            endIcon={<SearchIcon />}
            onClick={() => { alert(search) }}
          >
            Search
          </Button> */}
        </FormControl>
      </Box>
      {/* <p>
        {
          datas.filter((val) => val.name.toLowerCase().includes(search) || val.name.includes(search) ||
            val.email.toLowerCase().includes(search))
            .map((value) => (
              <Box display='flex' justifyContent='center' alignItem='center'>
                <span>
                  <Card
                    sx={{ width: 395, mb: 1, ml: 1 }}>
                    <CardMedia sx={{ ml: 22, mt: 2 }}>
                      <Avatar src="/broken-image.jpg" />
                    </CardMedia>
                    <CardContent>
                      <p >
                        <p><b>Name:</b>{value.name} </p>
                        <p> <Grid conatianer direction="column" alignItems="left"><AttachEmailRoundedIcon src={{ mt: 11 }} /></Grid> &nbsp; {value.email}</p>
                      </p>
                    </CardContent>
                  </Card>
                </span>
              </Box>
            ))
        }
      </p> */}
    </div>
  );
}

export default Searching;
