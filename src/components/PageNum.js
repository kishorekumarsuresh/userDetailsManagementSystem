import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PageNum({ count, changeHandler }) {
  const handleChange = (e, value) => {
    changeHandler(value);
  };

  return (
    <div>
      <Stack spacing={2} sx={{ ml: 64, mb: 15, mt: 7 }}>
        <Pagination count={count} color="primary" onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default PageNum;
