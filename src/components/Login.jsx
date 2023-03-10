import { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed", error),
  });
  // Check if theres a current logged in user and calls the google api accordingly with the current user access token
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // Logout function to log the user out of google and set the profile array to be null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <h1 className="font-bold text-blue-500">React Google Login</h1>
      <br />
      <br />
      {profile ? (
        <div className="flex flex-col items-center">
          <img
            src={profile.picture}
            alt="user image"
            class="h-[25%] w-[25%] content-center"
          />
          <h3>User is now Logged In!</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button
            class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-3 border-b-4 border-red-700 hover:border-red-500 rounded"
            onClick={logOut}
          >
            Log out
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => login()}
        >
          Sign in with Google Here!
        </button>
      )}
    </div>
  );
};

export default Login;
