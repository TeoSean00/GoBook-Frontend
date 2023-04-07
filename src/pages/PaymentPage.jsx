import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import Layout from "../components/Layout";

const stripePromise = loadStripe(
  "pk_test_51MkznJJTqG9NvRuTCvhU1y4RyggSstQYI2woG0L2DQywIKMFmvYVSqyS6uwHfCsK1mdv5Nvo6KP1NzAnR0wlukX900AB3llvRf"
);

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState();
  const data = useLocation().state;

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
    theme: "night",
  };
  const options = {
    clientSecret,
    appearance,
  };
  useEffect(() => {
    makePayment();
  }, []);
  useEffect(() => {
  }, [clientSecret]);
  return (
    <>
      {data ? (
        <Layout user={data[1]}>
          <div className="mx-auto mt-10 max-w-xl rounded-xl bg-slate-900 p-10">
            <h1 className="pb-5 font-bold text-white">Make Payment</h1>
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm userData={data[0]} clientSecret={clientSecret} />
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
