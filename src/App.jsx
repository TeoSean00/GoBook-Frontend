import Login from "./components/Login";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import Layout from "./components/Layout";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState(null);
  const handleFetch = async (codeResponse) => {
    await axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);
        toast.success("Successfully Logged In");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error logging in");
      });
  };
  const handleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => handleFetch(codeResponse),
    onError: (error) => console.log("Login Failed", error),
  });
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const logOut = () => {
    googleLogout();
    setUser(null);
    localStorage.clear();
  };

  return (
    <React.StrictMode>
      <Toaster />
      <div>
        {user ? (
          <Layout>'Hello {user.name}'</Layout>
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </div>
    </React.StrictMode>
  );
}

export default App;
