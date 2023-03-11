import Login from "./components/Login";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import Layout from "./components/Layout";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed", error),
  });
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
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
          localStorage.setItem("user", JSON.stringify(res.data));
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setUser(null);
    localStorage.clear();
  };

  return (
    <React.StrictMode>
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
