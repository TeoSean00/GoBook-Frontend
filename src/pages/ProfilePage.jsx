import React from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";

function ProfilePage() {
  const location = useLocation();
  const state = location.state;
  console.log("passed data is:", state);
  console.log(state.picture);

  const homePageRedirect = () => {
    console.log("Redirecting to Home Page now");
  };

  return (
    <Layout user={state}>
      <div className="container mx-auto max-w-4xl bg-slate-100 p-8">
        <div className="mb-8 flex flex-col gap-y-8">
          <div className="flex flex-row justify-start">
            <div className="flex basis-2/5 flex-col">
              <img
                className="rounded-3xl object-fill"
                src={`${state.picture}`}
              />
            </div>
            <div className="flex basis-3/5 flex-col justify-evenly px-12">
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
              <div className="mt-2 block h-full w-full rounded-3xl bg-blue-200 p-6">
                <p className="text-lg">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="font-bold">Your Reviews:</h1>
            </div>
            <div className="flex flex-row">
              <div className="mt-2 block h-full w-full rounded-3xl bg-blue-200 p-6">
                <p className="text-lg">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <Button name="Home" onClick={homePageRedirect} />
        </Link>
      </div>
    </Layout>
  );
}

export default ProfilePage;
