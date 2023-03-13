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
      <div className="container mx-auto max-w-4xl bg-gray-800 p-8">
        <div className="mb-8 flex flex-col gap-y-8">
            {/* Only appear below medium viewports */}
            <div className="flex flex-row justify-start">
                <div className="flex flex-col items-center basis-full md:basis-0">
                    <img
                        className="rounded-3xl object-fill"
                        src={`${state.picture}`}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-row justify-start">
                {/* Only appaer medium viewports and above */}
                <div className="flex flex-col basis-0 md:basis-2/5">
                    <img
                        className="rounded-3xl object-fill"
                        src={`${state.picture}`}
                        alt=""
                    />
                </div>
                <div className="flex flex-col basis-full md:basis-3/5 justify-evenly md:px-12">
                    <div className="flex flex-row justify-start">
                        <h1 className="font-bold text-gray-300">Name: {state.name}</h1>
                    </div>
                    <div className="flex flex-row justify-start">
                        <h1 className="font-bold text-gray-300">Email: {state.email}</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <h1 className="font-bold text-gray-300 mb-2">Your Interests:</h1>
                        </div>
                        <div className="flex flex-wrap justify-evenly">
                            <div className="flex rounded-3xl bg-gray-700 p-3 m-1 items-center">
                                <p className="text-lg text-gray-300">Pilates</p>
                            </div>
                            <div className="flex rounded-3xl bg-gray-700 p-3 m-1 items-center">
                                <p className="text-lg text-gray-300">FrontEnd</p>
                            </div>
                            <div className="flex rounded-3xl bg-gray-700 p-3 m-1 items-center">
                                <p className="text-lg text-gray-300">Health</p>
                            </div>
                            <div className="flex rounded-3xl bg-gray-700 p-3 m-1 items-center">
                                <p className="text-lg text-gray-300">Cooking</p>
                            </div>
                            <div className="flex rounded-3xl bg-gray-700 p-3 m-1 items-center">
                                <p className="text-lg text-gray-300">Reading</p>
                            </div>
                            <div className="flex rounded-3xl bg-gray-700 p-3 m-1 items-center">
                                <p className="text-lg text-gray-300">BackEnd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="font-bold text-gray-300">Your Registered Classes:</h1>
            </div>
            <div className="flex flex-row">
              <div className="mt-2 block h-full w-full rounded-3xl bg-gray-700 p-6">
                <p className="text-lg text-gray-300">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="font-bold text-gray-300">Your Reviews:</h1>
            </div>
            <div className="flex flex-row">
              <div className="mt-2 block h-full w-full rounded-3xl bg-gray-700 p-6">
                <p className="text-lg text-gray-300">
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
