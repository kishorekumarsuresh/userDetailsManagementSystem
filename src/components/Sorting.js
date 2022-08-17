import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function Sorting(props) {
  const [asecend, setAscend] = useState(false);
  const datas = props.users;

  let Ascending = (st) => {
    if (st) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  return <div></div>;
}

export default Sorting;
