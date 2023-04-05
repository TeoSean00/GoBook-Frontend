import Login from "./components/Login";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import Layout from "./components/Layout";
import toast, { Toaster } from "react-hot-toast";
import Button from "./components/Button";
import Hero from "./components/Hero";
import CourseCatalogue from "./components/CourseCatalogue";
import RecommendationCatalogue from "./components/Recommendation";
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
        toast.success("Successfully Logged In", { duration: 10000 });
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
    console.log("🚀 ~ file: App.jsx:42 ~ App ~ user:", user);
  }, [user]);
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
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      <div>
        {user ? (
          <Layout user={user}>
            <Hero user={user} />
            <CourseCatalogue user={user} />
            <div className="mt-2"></div>
            <RecommendationCatalogue user={user} />
            <Button name="Sign Out" onClick={logOut} color="red" />
          </Layout>
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </div>
    </React.StrictMode>
  );
}

export default App;
