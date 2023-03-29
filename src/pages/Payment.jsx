import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const Payment = () => {
    const state = useLocation().state;
    console.log(state);
    const course = state.courseInfo.course
    const selectedDate = state.selectedDate
    const selectedTime = state.selectedTime
    return (
        <Layout user={state} >
            <h1>Payment Page</h1>
            <div className=" flex justify-between text-white">
                <div className=" border-r-4" style={{ width: '50%', height: "100vh" }}>
                    <h1>
                        Course Title : {course.className}
                    </h1>
                    <div>
                        Course Fees : ${course.fees}
                    </div>
                    <div>
                        Selected Date : {selectedDate}
                    </div>
                    <div>
                        Selected Timeslot : {selectedTime}
                    </div>
                </div>
                <div>
                    Payment Section
                </div>
            </div>
        </Layout>
    );
};

export default Payment;
