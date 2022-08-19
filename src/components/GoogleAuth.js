import React,{useEffect, useState} from 'react'
import Login from "./Login";
import Logout from "./Logout";
import {gapi} from 'gapi-script'
import { Box } from '@mui/material';

const clientId =
  "1026215373024-lrtcnlbuc281nm472vph3fvuovhnfa6q.apps.googleusercontent.com";


function GoogleAuth() {

    const [ action , setAction ] = useState(true)

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

      {action ? <Login setAction={setAction}/> : <Logout setAction={setAction}/>}
      
      
      
    </Box>
  )
}

export default GoogleAuth
