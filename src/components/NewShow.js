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
import DescriptionIcon from '@mui/icons-material/Description';
import axios from "axios";
import PageNum from "./PageNum";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmailRounded";
import VerifiedIcon from "@mui/icons-material/Verified";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import  { withRouter  } from 'react-router-dom'

class NewShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   page: 1,
    // };
  }

  deletehandler = (id) => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization:
            "Bearer 0ee057fd533ccad974e9383af8209a2e3db05bf7db963840f9c9b68f2c09f4f2",
        },
      })
      .then((response) => {
        console.log("passed", response.data);
      })
      .catch((errr) => {
        console.log("failed to delete");
      });
      //this.props.history.push("/");
  };

  // changeHandler = (arg) => {
  //   this.setState({ page: arg });
  // };

  render() {
    const { output, setOutput } = this.props;

    // const usersPerPage = 2;
    // const pagesCount = Math.ceil(output.length / usersPerPage);
    // const lastIndex = this.state.page * usersPerPage;
    // const firstIndex = lastIndex - usersPerPage;
    // const poutput = output.slice(firstIndex, lastIndex);

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
          { output[0] ?

          (output.map((post) => (
            <Box display="flex" justifyContent="center" alignItems="start" key={post.id}>
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

                <CardContent >
                  <div style={{display:"flex",justifyContent:'center' ,alignItem:'center'}}>
                  <Typography>
                    {post.name}
                  </Typography>
                  {
                  post.status === "active" ? (
                      <VerifiedIcon color="success" />
                    ) : (
                      <UnpublishedIcon color="action" />
                    )}
                    </div>
                      <div>
                      <AttachEmailRoundedIcon sx={{margin:'auto'}}/>
                      <Typography>{post.email}</Typography>
                      </div>
                  
                </CardContent>

                <CardActions sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
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
          ))):
          
          <Typography sx={{ml:35,height:140,}}> <DescriptionIcon color="primary" sx={{height:30,width:40}}/>  No results found...</Typography>
        }
        </div>
        
        {/* <PageNum count={pagesCount} changeHandler={this.changeHandler} /> */}
      </div>
    );
  }
}
//export default withRouter(NewShow);
export default NewShow
