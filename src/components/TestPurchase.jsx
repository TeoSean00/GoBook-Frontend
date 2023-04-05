import React from "react";
import axios from "axios";
import Button from "./Button";

const TestPurchase = ({  }) => {
    const data = {
        "classUpdate": {
            "_id": "1",
            "assessment": true,
            "categories": [
                "SSG-Non-WSQ"
            ],
            "category": [
                "Engineering",
                "CAD",
                "System"
            ],
            "certification": true,
            "className": "CAD-Engineering-Design-5",
            "classSize": 25,
            "content": "On completion of the module, students should be able to create 2D drawings of engineering components using a CAD system as well as produce 3D solid models and also to design a mechanical system comprising various machine elements.\r\n\r\nCAD and Engineering Design (ME4011FP) is one of the modules leading to HIGHER NITEC IN TECHNOLOGY - MECHANICAL ENGINEERING.",
            "courseRuns": {
                "1": {
                    "availableSlots": 25,
                    "date": "2023-4-12",
                    "participants": [],
                    "timeslot": "10.00am - 11.00am"
                },
                "2": {
                    "availableSlots": 25,
                    "date": "2023-4-12",
                    "participants": [],
                    "timeslot": "12.00pm - 3.00pm"
                },
                "3": {
                    "availableSlots": 25,
                    "date": "2023-4-13",
                    "participants": [],
                    "timeslot": "10.00am - 11.00am"
                },
                "4": {
                    "availableSlots": 25,
                    "date": "2023-4-13",
                    "participants": [],
                    "timeslot": "12.00pm - 3.00pm"
                },
                "5": {
                    "availableSlots": 25,
                    "date": "2023-4-14",
                    "participants": [],
                    "timeslot": "10.00am - 11.00am"
                }
            },
            "fees": 1620,
            "objective": "On completion of the module, students should be able to create 2D drawings of engineering components using a CAD system as well as produce 3D solid models and also to design a mechanical system comprising various machine elements."
        },
        "code": 200,
        "email": "sent to queue successfullyx",
        "userUpdate": {
            "_id": "112532673980137782859",
            "attended_classes": [],
            "email": "keith.loh.2021@scis.smu.edu.sg",
            "given_name": "Keith Loh",
            "preferences": [],
            "recommended_classes": [],
            "reviews": [
                "Review 1",
                "Review 2"
            ]
        }
    }
    const doPurchase = async() => {
        var sendData = data
        await axios
        .post('http://localhost:5008/update_payment', {sendData})
        .then((res) => {
            console.log("Response is " + res);
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
