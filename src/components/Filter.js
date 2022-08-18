import React, { useEffect, useState } from 'react'
import { MenuItem,FormControl,InputLabel,Select } from "@mui/material";

function Filter({users,setOutput}) {

    const [filt,setFilt] = useState("")

    function Filtering(){
        
        if (filt=="male" || filt=="female"){
          setOutput([...users.filter(
            (x) =>
            x.gender==(filt))])
        }
        else if (filt=="active" || filt=="inactive"){
          setOutput([...users.filter(
            (y) =>
            y.status==(filt))])
        }
        
        
    }

    useEffect(()=>{
        Filtering()
    },[filt])

  return (
    <div>
      <FormControl sx={{width:210}}>
      <InputLabel >Filter</InputLabel>
      <Select
      value={filt}
      onChange={(e)=>{setFilt(e.target.value)}}>

    <MenuItem value="female">gender(Female)</MenuItem>
    <MenuItem value="male">gender(Male)</MenuItem>
    <MenuItem value="inactive">status(InActive)</MenuItem>
    <MenuItem value="active">status(Active)</MenuItem>

      </Select>
      </FormControl>
    </div>
  )
}

export default Filter
