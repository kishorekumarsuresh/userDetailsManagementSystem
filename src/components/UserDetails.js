import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, CardActions, CardContent, Card ,Box} from "@mui/material";
import { makeStyles } from '@mui/styles';
import "./Style.css";


const useStyles = makeStyles({
  c1 :{
    width: 500,
    marginLeft: 430,
    marginTop: 9,
   
  },
})

function UserDetails() {

  const classes = useStyles();
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const nav = useNavigate();


  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization:
            "Bearer " +
            "0ee057fd533ccad974e9383af8209a2e3db05bf7db963840f9c9b68f2c09f4f2",
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const { name, email, gender, status } = userData;


  return (
    <div className="divfortext">
      UserDetails
      <Card className={classes.c1}
      sx={{backgroundColor:"blanchedalmond"}}
      >
        <CardContent>
          <div >
          <Box sx={{display:'grid',alignItems:'flex-start',justifyContent:'flex-start'}}>
            <p>Name:{name}</p>
          {/* </Box> */}
          {/* <Box sx={{marginLeft:-6}}> */}
          <p>email:{email}</p>
          {/* </Box> */}
          {/* <Box sx={{marginRight:27}}> */}
          <p>gender:{gender}</p>
          <p>status:{status}</p>
          </Box>
            
            
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => {
              nav("/");
            }}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default UserDetails;
