import React from "react";
import axios from "axios";
import Button from "./Button";

const TestPurchase = ({ user }) => {
    const data = {
        "amount": 1420,
        "amount_capturable": 0,
        "amount_details": {
            "tip": {}
        },
        "amount_received": 1420,
        "automatic_payment_methods": {
            "enabled": true
        },
        "capture_method": "automatic",
        "client_secret": "pi_3MqawoJTqG9NvRuT1CIECYYH_secret_FhWhAZ6MUjAnfbAqvBOxOjxwB",
        "confirmation_method": "automatic",
        "created": 1680003858,
        "currency": "sgd",
        "id": "pi_3MqawoJTqG9NvRuT1CIECYYH",
        "latest_charge": {
            "id": "ch_3MqawoJTqG9NvRuT1geYkf4z"
        },
        "livemode": false,
        "metadata": {
            "courseDescription": "Define a coherent data strategy and spearhead new approaches to enrich, synthesise and apply data, to maximise the value of data as a critical business asset and driver.",
            "userEmail": "celov54484@gpipes.com",
            "coursename": "Advanced-Information-Management-Classroom-Asynchronous",
            "runID": "1",
            "orderID": "70143f68-3df9-419e-b221-e5d6c169da93",
            "userID": "112532673980137782859",
            "classId": "1"
        },
        "object": "payment_intent",
        "payment_method": {
            "id": "pm_1Mqax8JTqG9NvRuTdQ8sxHYn"
        },
        "payment_method_options": {
            "card": {
                "request_three_d_secure": "automatic"
            },
            "paynow": {}
        },
        "payment_method_types": [
            "card",
            "paynow"
        ],
        "status": "succeeded"
    }
    const doPurchase = async() => {
        await axios
        .post('http://localhost:5008/update_payment', data)
        .then((res) => {
            console.log("Response is ");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <Button name="Click me" color="blue" onClick={doPurchase} />
        </div>
    );
};

export default TestPurchase;
