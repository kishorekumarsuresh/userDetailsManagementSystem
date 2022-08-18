import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, CardActions, CardContent, Card ,Box} from "@mui/material";
import "./Style.css";
function UserDetails() {
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
      <Card
        sx={{
          width: 500,
          height: 255,
          ml: 50,
          mt: 2,
          backgroundColor: "blanchedalmond",
        }}
      >
        <CardContent sx={{display:'flex',justifyContent:'start'}}>
          <div styles={{textAlign:'initial'}}>
            <p>Name:{name}</p>
            <Box sx={{ml:12}}>
            <p>email:{email}</p>
            </Box>
            
            <p>gender:{gender}</p>
            <p>status:{status}</p>
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
