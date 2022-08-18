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
            "bf0f401f79f16bfff0c3dd99cc7d2395f41b613717f92226522562487ceff6bf",
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
        <CardContent sx={{display:'grid',justifyContent:'center'}}>
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
