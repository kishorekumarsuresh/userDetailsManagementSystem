import { GoogleLogout } from "react-google-login";
import React from "react";

const clientId =
  "1026215373024-lrtcnlbuc281nm472vph3fvuovhnfa6q.apps.googleusercontent.com";

function Logout({setAction}) {


    

    const onSuccess = () =>{
        localStorage.removeItem("token")
        setAction(true)
        console.log("Log out Successfull")
    }
    return (
        <div  id="signOutButton">
            <GoogleLogout 
            clientId={clientId}
            buttonText={'Logout'}
            onLogoutSuccess={onSuccess}/>
        </div>
    )
}

export default Logout