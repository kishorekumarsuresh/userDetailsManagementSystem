import { GoogleLogin } from "react-google-login";
import React from "react";

const clientId =
  "1026215373024-lrtcnlbuc281nm472vph3fvuovhnfa6q.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) =>{
        console.log('Login Success!!!',res.profileObj)
    }

    const onFailure = (res) =>{
        console.log('Login Failed!',res)
    }

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login