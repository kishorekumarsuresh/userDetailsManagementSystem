import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, CardActions, CardContent, Card } from "@mui/material";
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
    <div>
      UserDetails
      <Card
        sx={{
          width: 700,
          height: 285,
          ml: 35,
          mt: 2,
          backgroundColor: "blanchedalmond",
        }}
      >
        <CardContent>
          <div className="div1">
            <p>Name:{name}</p>
            <p>email:{email}</p>
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
