import { GoogleLogin } from "react-google-login";
import React from "react";

const clientId =
  "1026215373024-lrtcnlbuc281nm472vph3fvuovhnfa6q.apps.googleusercontent.com";

function Login({setAction}) {


    

    const onSuccess = (res) =>{
      
    localStorage.setItem("token",res.accessToken)
        setAction(false)
        console.log('Login Success!!!',res)
    }

    const onFailure = (res) =>{
        console.log('Login Failed!',res)
    }

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login
