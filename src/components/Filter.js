import React, { useEffect, useState } from 'react'
import { MenuItem,FormControl,InputLabel,Select } from "@mui/material";

function Filter({users,setOutput}) {

    const [filt,setFilt] = useState("")

    function Filtering(){
        filt=="male" || "female"?
        setOutput([...users.filter(
            (x) =>
            x.gender==(filt))]):
        setOutput([...users.filter(
            (y) =>
            y.status==(filt))])
        
    }

    useEffect(()=>{
        Filtering()
    },[filt])

  return (
    <div>
      <FormControl>
      <InputLabel >Filter</InputLabel>
      <Select
      value={filt}
      onChange={(e)=>{setFilt(e.target.value)}}>

    <MenuItem value="male">gender(Female)</MenuItem>
    <MenuItem value="female">gender(Male)</MenuItem>
    <MenuItem value="inactive">status(InActive)</MenuItem>
    <MenuItem value="active">status(Active)</MenuItem>

      </Select>
      </FormControl>
    </div>
  )
}

export default Filter
