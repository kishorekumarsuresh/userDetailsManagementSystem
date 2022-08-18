import React ,{useEffect, useState} from 'react';
import { MenuItem,FormControl,InputLabel,Select } from "@mui/material";

function Sorting({users,setOutput}) {

  const [sort,setSort] = useState("")

  
  
    useEffect(()=>{
      sarting()
    },[sort])

    function sarting(){
      sort=='Z-A'? setOutput([...users.sort((a,b)=>(a.name>b.name)? -1 : 1 )]) :
      setOutput([...users.sort((a,b)=>(a.name<b.name)? -1 : 1 )])
    }

    

  return (
    <div>
      <FormControl sx={{width:110}}>
      <InputLabel id="select-label">SortBy</InputLabel>
      <Select
      value={sort}
      onChange={(e)=>{setSort(e.target.value)}}>

        <MenuItem value="A-Z">sort A-Z</MenuItem>
        <MenuItem value="Z-A">sort Z-A</MenuItem>

      </Select>
      </FormControl>
    </div>
  )
}

export default Sorting
