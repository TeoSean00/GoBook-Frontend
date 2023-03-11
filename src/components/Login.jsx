import { Button } from "flowbite-react";

const Login = ({ handleLogin }) => {
  // Logout function to log the user out of google and set the profile array to be null

  return (
    <div>
      <h1 className="font-bold text-blue-500">React Google Login</h1>
      <Button
        className="rounded border-b-4 border-blue-700 bg-blue-500 py-2 px-3 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
        onClick={handleLogin}
      >
        Sign in with Google Here!
      </Button>
    </div>
  );
};

export default Login;
