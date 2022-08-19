import React, { useEffect, useState } from "react";
import axios from "axios";
import NewShow from "./NewShow";
import { Button, TextField } from "@mui/material";
import Sorting from "./Sorting";
import Filter from "./Filter";
import PageNum from "./PageNum";
import FilterUsingApi from "./FilterUsingApi";

//import GoogleAuth from "./GoogleAuth";

function NewHome() {
  const [users, setUsers] = useState([]);
  const [output, setOutput] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //const [pag,setPag] = useState(1)
  const [page,setPage] = useState(1)
  const [pagesCount ,setPagesCount] = useState(10)

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorizaton:
            "Bearer 0ee057fd533ccad974e9383af8209a2e3db05bf7db963840f9c9b68f2c09f4f2",
        },
        params: { page: page ,},
      })
      .then((response) => {
        setUsers(response.data);
        setOutput(response.data);
        console.log("data loaded");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  // const changePageHandler = (arg) => {
  //   setPag(arg)
  // }
  const handlePage = (arg) =>{
      setPage(arg)
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

      {/* <Button variant="contained" onClick={handlePage}>Change page</Button> */}

      <br />
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginBottom:5,margin:20}}>
      <Sorting users={users} setOutput={setOutput}/>
      {/* <Filter users={users} setOutput={setOutput}/> */}
      <FilterUsingApi setOutput={setOutput}/>
      </div>
      
      <NewShow output={output} setOutput={setOutput} />
      <PageNum count={pagesCount} changeHandler={handlePage} />
      {/* <PageNum count={pagesCount} changeHandler={changePageHandler} /> */}
    </div>
  );
}

export default NewHome;
