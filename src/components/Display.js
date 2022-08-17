import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Divider, List, ListItemText, ListItem } from "@mui/material";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import VerifiedIcon from "@mui/icons-material/Verified";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmailRounded";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Sorting from "./Sorting";
import { Padding } from "@mui/icons-material";

function Display({ details, setDetails }) {
  const [render, setRender] = useState(false);
  const [open, setOpen] = useState(false);
  const [page, setpage] = useState(1);

  const navig = useNavigate();

  // useEffect(() => {
  //     let getData = () => {
  //         axios.get('https://gorest.co.in/public/v2/users')
  //         .then(response => {
  //             setDetails(response.data)

  //         })
  //     };
  //     getData();
  // }, [render])

  // let deletehandler = (id) => {
  //     axios.delete(`https://gorest.co.in/public/v2/users/${id}`, {
  //         headers: {
  //             Authorization: "Bearer bf0f401f79f16bfff0c3dd99cc7d2395f41b613717f92226522562487ceff6bf"
  //         }
  //     })
  //         .then(response => {
  //             console.log("passed")
  //             setDetails((prv) => prv.filter(ele => {
  //                 if (ele.id !== id)
  //                     return true
  //                 else
  //                     return false
  //             }));
  //             setRender(true);
  //             setOpen(true)
  //         })
  // }

  // let displayInfo = (uname, email, gen, id) => {
  //     alert(`Id:${id}
  //            Name: ${uname}
  //            email: ${email}
  //            gender:${gen}
  //             `)
  // }

  let changeHandler = (arg) => {
    setpage(arg);
  };

  const usersPerPage = 12;
  const pagesCount = Math.ceil.apply(details.length / usersPerPage);
  const lastIndex = page * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const output = details.slice(firstIndex, lastIndex);

  console.log(details);

  return (
    <div>
      <Typography sx={{ mr: 6 }} variant="h5">
        User Details
      </Typography>

      {details ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "33px",
            alignItem: "center",
          }}
        >
          {output.map((elem) => {
            let id = elem.id;
            let uname = elem.name;
            let email = elem.email;
            let gen = elem.gender;

            return (
              <Box display="flex" justifyContent="center" alignItem="center">
                <div>
                  <Card
                    sx={{ width: 395, minHeight: 300, mb: 1, ml: 1 }}
                    key={elem}
                  >
                    <CardMedia sx={{ ml: 22, mt: 2 }}>
                      {elem.gender === "male" ? (
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>
                          {elem.name.split(" ")[0][0]}
                          {elem.name.split(" ")[1][0]}
                        </Avatar>
                      ) : (
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>
                          {elem.name.split(" ")[0][0]}
                          {elem.name.split(" ")[1][0]}
                        </Avatar>
                      )}
                    </CardMedia>

                    <CardContent>
                      <p>
                        <p>
                          {" "}
                          Name: {elem.name}{" "}
                          {elem.status === "active" ? (
                            <VerifiedIcon color="success" />
                          ) : (
                            <UnpublishedIcon color="action" />
                          )}
                        </p>

                        <p>
                          {" "}
                          <Grid conatianer direction="column">
                            <AttachEmailRoundedIcon src={{ mt: 11 }} />
                          </Grid>{" "}
                          &nbsp; {elem.email}
                        </p>
                      </p>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" size="small" color="success">
                        view
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={() => {
                          navig("/edit");
                        }}
                      >
                        edit
                      </Button>
                      <Button variant="contained" size="small" color="error">
                        delete
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </Box>
            );
          })}

          {/* </center> */}
        </div>
      ) : (
        <h3>Loading...!</h3>
      )}

      <Pagination count={pagesCount} changeHandler={changeHandler} />
    </div>
  );
}

export default Display;
