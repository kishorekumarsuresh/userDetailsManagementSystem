import React,{useEffect} from 'react'
import Login from "./Login";
import Logout from "./Logout";
import {gapi} from 'gapi-script'
import { Box } from '@mui/material';

const clientId =
  "1026215373024-lrtcnlbuc281nm472vph3fvuovhnfa6q.apps.googleusercontent.com";


function GoogleAuth() {


    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }

        gapi.load('client:auth2',start)


    })
  return (
    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginRight:0,}}>
      <Login />
      <Logout />
    </Box>
  )
}

export default GoogleAuth
