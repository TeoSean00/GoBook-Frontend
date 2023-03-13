import Login from "./components/Login";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import Layout from "./components/Layout";
import toast, { Toaster } from "react-hot-toast";
import Button from "./components/Button";

//Stuff for payments page
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51MkznJJTqG9NvRuTCvhU1y4RyggSstQYI2woG0L2DQywIKMFmvYVSqyS6uwHfCsK1mdv5Nvo6KP1NzAnR0wlukX900AB3llvRf"
);

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
  // note: good practice to not fetch API from useEffect hook but not important
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

  //stripe stuff testing
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <React.StrictMode>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div>
        {user ? (
          <Layout user={user}>
            <div className="my-5">Hello {user.name}</div>
            <br />
            <Button name="Sign Out" onClick={logOut} />
          </Layout>
        ) : (
          <Login handleLogin={handleLogin} />
        )}

        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </React.StrictMode>
  );
}

export default App;
