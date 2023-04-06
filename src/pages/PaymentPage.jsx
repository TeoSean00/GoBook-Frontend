import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import Layout from "../components/Layout";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const stripePromise = loadStripe(
  "pk_test_51MkznJJTqG9NvRuTCvhU1y4RyggSstQYI2woG0L2DQywIKMFmvYVSqyS6uwHfCsK1mdv5Nvo6KP1NzAnR0wlukX900AB3llvRf"
);

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState();
  const [parent, enableAnimations] = useAutoAnimate({ duration: 200 });

  const data = useLocation().state;

  console.log(data);

  function makePayment() {
    fetch("http://localhost:5008/booking/createPayment", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data[0]),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  useEffect(() => {
    makePayment();
  }, []);
  useEffect(() => {
    console.log(clientSecret);
  }, [clientSecret]);
  return (
    <>
      {data ? (
        <Layout user={data[1]}>
          <div className="mx-auto mt-10 max-w-xl rounded-xl bg-blue-200 p-10">
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm userData={data[0]}/>
              </Elements>
            )}
          </div>
        </Layout>
      ) : (
        ""
      )}
    </>
  );
}
