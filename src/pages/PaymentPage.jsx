import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MkznJJTqG9NvRuTCvhU1y4RyggSstQYI2woG0L2DQywIKMFmvYVSqyS6uwHfCsK1mdv5Nvo6KP1NzAnR0wlukX900AB3llvRf"
);

export default function PaymentPage() {
  var [clientSecret, setClientSecret] = useState("");
  // const data = useLocation().state;

  // var data = {
  //   classID: 3,
  //   userEmail: "celov54484@gpipes.com",
  //   userName: "celo",
  //   orderID: "4500",
  //   courseName: "Data Structure Algorithms",
  //   coursePrice: 2000,
  //   courseDescription:
  //     "A 3rd semester course at SMU, continues to develop students' understanding of object oriented programming, memory management",
  //   runID: 1,
  //   userID: 10,
  // };
  var data = {
    classID: 1,
    courseDescription:
      "On completion of the module, students should be able to create 2D drawings of engineering components using a CAD system as well as produce 3D solid models and also to design a mechanical system comprising various machine elements.\r\n\r\nCAD and Engineering Design (ME4011FP) is one of the modules leading to HIGHER NITEC IN TECHNOLOGY - MECHANICAL ENGINEERING.",
    courseName: "CAD Engineering Design 5",
    coursePrice: 1620,
    orderID: "855ce44b-d173-46ab-bdcc-c8cbd0210a65",
    runID: 1,
    userEmail: "jeromewongjh@gmail.com",
    userID: "104803140206997670000",
    userName: "jerome",
  };

  function makePayment() {
    fetch("http://localhost:5008/booking/createPayment", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });

    console.log(data);
  }

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  useEffect(() => {
    console.log(clientSecret);
  }, [clientSecret]);
  return (
    <React.StrictMode>
      <div>
        <button
          type="button"
          className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={makePayment}
        >
          Select Class
        </button>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </React.StrictMode>
  );
}
