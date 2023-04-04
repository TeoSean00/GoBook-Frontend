import React, { useState, useEffect } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import io from "socket.io-client";

const stripePromise = loadStripe(
  "pk_test_51MkznJJTqG9NvRuTCvhU1y4RyggSstQYI2woG0L2DQywIKMFmvYVSqyS6uwHfCsK1mdv5Nvo6KP1NzAnR0wlukX900AB3llvRf"
);

export default function PaymentPage() {
  var [clientSecret, setClientSecret] = useState("");
  var [selectedClass, setSelectedClass] = useState(null);

  var data = {
    userEmail: "celov54484@gpipes.com",
    userName: "celo",
    orderID: "4500",
    courseName: "Data Structure Algorithms",
    coursePrice: 2000,
    courseDescription:
      "A 3rd semester course at SMU, continues to develop students' understanding of object oriented programming, memory management",
    classID: 3,
    runID: 1,
    userID: 10,
  };

  useEffect(() => {
    const socket = io("http://localhost:5010");

    socket.on("connect", () => {
      console.log("WebSocket connection opened");
    });

    socket.on("disconnect", () => {
      console.log("WebSocket connection closed");
    });

    socket.on("message", (data) => {
      console.log("Received message:", data);
      // Update the React state or UI based on the message data
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  function makePayment() {
    fetch("http://localhost:5008/booking/createPayment", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

    console.log(data);
  }

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <React.StrictMode>
      <div>
        <MyButton />
        <button
          type="button"
          className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={makePayment}
        >
          Select Class
        </button>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <h2>You have selected {selectedClass}</h2>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </React.StrictMode>
  );
}
