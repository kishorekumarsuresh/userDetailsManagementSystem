import {
  CardActions,
  CardContent,
  Typography,
  Box,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple, teal } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PageNum from "./PageNum";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmailRounded";
import VerifiedIcon from "@mui/icons-material/Verified";
import UnpublishedIcon from "@mui/icons-material/Unpublished";

class NewShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  deletehandler = (id) => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization:
            "Bearer bf0f401f79f16bfff0c3dd99cc7d2395f41b613717f92226522562487ceff6bf",
        },
      })
      .then((response) => {
        //this.props.setOutput(response.data)
        console.log("passed", response.data);
      })
      .catch((errr) => {
        console.log("failed to delete");
      });
  };

  changeHandler = (arg) => {
    this.setState({ page: arg });
  };

  render() {
    const { output, setOutput } = this.props;

    const usersPerPage = 2;
    const pagesCount = Math.ceil(output.length / usersPerPage);
    const lastIndex = this.state.page * usersPerPage;
    const firstIndex = lastIndex - usersPerPage;
    const poutput = output.slice(firstIndex, lastIndex);

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "19%",
            alignItem: "center",
          }}
        >
          {output.map((post) => (
            <Box display="flex" justifyContent="center" alignItems="start">
              <Card
                sx={{
                  mr: 2,
                  mb: 2,
                  height: 250,
                  width: 400,
                  alignItems: "center",
                  backgroundColor: "ButtonFace",
                }}
              >
                <Link to={`userdetails/${post.id}`}>
                  <CardMedia sx={{ ml: 22, mt: 2 }}>
                    {post.gender === "male" ? (
                      <Avatar sx={{ bgcolor: deepPurple[500] }}>
                        {post.name.split(" ")[0][0]}
                        {post.name.split(" ")[1][0]}
                      </Avatar>
                    ) : (
                      <Avatar sx={{ bgcolor: teal[500] }}>
                        {post.name.split(" ")[0][0]}
                        {post.name.split(" ")[1][0]}
                      </Avatar>
                    )}
                  </CardMedia>
                </Link>

                <CardContent>
                  <Typography>
                    {post.name}
                    {post.status === "active" ? (
                      <VerifiedIcon color="success" sx={{height:25,mt:2}}/>
                    ) : (
                      <UnpublishedIcon color="action" />
                    )}
                  </Typography>

                  <AttachEmailRoundedIcon sx={{margin:'auto'}}/>
                  <Typography>{post.email}</Typography>
                </CardContent>

                <CardActions>
                  <Button variant="outlined" size="small" color="primary">
                    <Link to={`editdetails/${post.id}`}>edit</Link>
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => {
                      this.deletehandler(post.id);
                    }}
                  >
                    delete
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </div>

        <PageNum count={pagesCount} changeHandler={this.changeHandler} />
      </div>
    );
  }
}
export default NewShow;
