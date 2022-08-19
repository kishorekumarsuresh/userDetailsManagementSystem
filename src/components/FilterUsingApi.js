import React, { useEffect, useState } from 'react'
import { MenuItem,FormControl,InputLabel,Select, Input } from "@mui/material";
import axios from 'axios';

function FilterUsingApi({setOutput}) {

    const [filtVal,setFiltVal] =  useState("")

    const handleFilter = () => {
        //console.log("inside api call", filtVal);

        if (filtVal==="male" || filtVal==="female"){

            axios.get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorizaton:
            "Bearer 0ee057fd533ccad974e9383af8209a2e3db05bf7db963840f9c9b68f2c09f4f2",
        },
        params: { gender:filtVal },
      })
      .then((response) => {
        //setUsers(response.data);
        setOutput(response.data);
        console.log("data loaded");
      })
      .catch((err) => {
        console.log(err);
      });
        }

        else {
            

            axios.get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorizaton:
            "Bearer 0ee057fd533ccad974e9383af8209a2e3db05bf7db963840f9c9b68f2c09f4f2",
        },
        params: { status:filtVal },
      })
      .then((response) => {
        //setUsers(response.data);
        setOutput(response.data);
        console.log("data loaded");
      })
      .catch((err) => {
        console.log(err);

        })
         
        }
    }
   

    useEffect(()=>{
        handleFilter()
    },[filtVal])
    

  return (
    <div>
        {console.log("filterval", filtVal)}
      <FormControl sx={{width:170}}>
        <InputLabel>Filter</InputLabel>
        <Select 
        value={filtVal}
        onChange={(e)=>{setFiltVal(e.target.value)}}
        >

        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="inactive">inactive(status)</MenuItem>
        <MenuItem value="active">active(status)</MenuItem>
        

        </Select>
      </FormControl>
    </div>
  )
}

export default FilterUsingApi
