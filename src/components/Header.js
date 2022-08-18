import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      log: false,
    };
  }

  handleToggle = () => {
    this.setState({ log: !this.state.log });
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ height: "90px" }} color="primary">
          <Toolbar>
            <FolderCopyIcon sx={{ mr: 1, height: 710, width: 70 }} />
            <Typography
              variant="h3"
              component="div"
              display="flex"
              justifyContent="left"
              alignItem="left"
              sx={{ flexGrow: 10, mt: 1 }}
            >
              Meta-Data
            </Typography>
            <Typography
              variant="h6"
              component="div"
              display="flex"
              justifyContent="left"
              alignItem="left"
              sx={{ flexGrow: 10, mt: 1 }}
            >
              The site for getting user's information...
            </Typography>

            
            <GoogleAuth />
            
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default Header;
