import React from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../components/Button";

function ProfilePage(props) {
    const location = useLocation();
    const state = location.state;
    console.log('passed data is:', state);
    console.log(state.picture)

    const homePageRedirect = () => {
        console.log("Redirecting to Home Page now")
    }

    return (
        <div className="container mx-auto max-w-4xl p-8 bg-slate-100">
            <div className="flex flex-col gap-y-8 mb-8">
                <div className="flex flex-row justify-start">
                    <div className="flex flex-col basis-2/5">
                        <img className="object-fill rounded-3xl" src={`${state.picture}`} />
                    </div>
                    <div className="flex flex-col justify-evenly basis-3/5 px-12">
                        <div className="flex flex-row justify-start">
                            <h1 className="font-bold">Name: {state.name}</h1>
                        </div>
                        <div className="flex flex-row justify-start">
                            <h1 className="font-bold">Email: {state.email}</h1>
                        </div>
                        <div className="flex flex-row justify-start">
                            <h1 className="font-bold">Your Interests:</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <h1 className="font-bold">Your Registered Classes:</h1>
                    </div>
                    <div className="flex flex-row">
                        <div className="block p-6 mt-2 w-full h-full bg-blue-200 rounded-3xl">
                            <p className="text-lg">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <h1 className="font-bold">Your Reviews:</h1>
                    </div>
                    <div className="flex flex-row">
                        <div className="block p-6 mt-2 w-full h-full bg-blue-200 rounded-3xl">
                            <p className="text-lg">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <Button name="Home" onClick={homePageRedirect} />
            </Link>
        </div>
    )
}

export default ProfilePage;