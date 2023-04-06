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
import ReviewForm from "./components/ReviewForm";

//socket io listener
import io from "socket.io-client";
function App() {
  const [user, setUser] = useState(null);
  const [isReviewForm, setIsReviewForm] = useState(false);
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
      .then(async (res) => {
        console.log("Google OAuth User data> ", res.data);
        await axios
          .post("http://127.0.0.1:8000/users/addUser", res.data)
          .then(async (userDBData) => {
            localStorage.setItem("user", JSON.stringify(userDBData.data));
            setUser(userDBData.data);
            console.log("User data fetched from backend> ", userDBData.data);
            toast.success("Successfully Logged In", { duration: 10000 });
          })
          .catch((error) => {
            console.log("error making POST request", error);
          });
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
            <Hero user={user} setIsReviewForm={setIsReviewForm} />
            <CourseCatalogue user={user} />
            <div className="mt-2"></div>
            <RecommendationCatalogue user={user} />
            <Button
              name="Sign Out"
              onClick={() => {
                toast.success("Successfully Signed Out");
                logOut();
              }}
              color="red"
            />
            {isReviewForm ? (
              <ReviewForm setIsReviewForm={setIsReviewForm} user={user} />
            ) : (
              ""
            )}
          </Layout>
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </div>
    </React.StrictMode>
  );
}

export default App;
