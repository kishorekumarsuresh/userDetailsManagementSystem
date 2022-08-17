import { Typography } from "@mui/material";
import React, { Component } from "react";
import BlockIcon from "@mui/icons-material/Block";

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <Typography variant="h3">
          <BlockIcon />
          404!
        </Typography>
        <h4>Page Not Found...</h4>
      </div>
    );
  }
}

export default PageNotFound;
