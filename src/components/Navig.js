import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";

const styles = {
  s1: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "13px",
    backgroundColor: "rgb(255, 255, 128)",
    border: "2px solid white",
    height: "30px",
    textDecoration: "none",
    marginTop: "1px",
  },
  s2: {
    "&:hover": {
      backgroundColor: "orange",
    },
  },
};

class Navig extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav>
        <div>
          <p className={classes.s1}>
            <Button className={classes.s2} variant="text" color="secondary">
              <Link to="/">Home</Link>
            </Button>

            <Button className={classes.s2} variant="text" color="secondary">
              <Link to="/create">Create</Link>
            </Button>
          </p>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navig);
