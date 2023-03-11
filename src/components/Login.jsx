import Button from "./Button";
import booking from "../assets/booking.svg";
const Login = ({ handleLogin }) => {
  // Logout function to log the user out of google and set the profile array to be null

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* <div className="w-full max-w-md space-y-2">
        <h1 className="text-center font-bold text-blue-500">
          Login to Book Courses
        </h1>
        <Button name="Google Sign In" onClick={handleLogin} />
      </div> */}
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <div>
          <img className="rounded-t-lg p-10" src={booking} alt="" />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              CourseCove
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Our booking system website provides a seamless and hassle-free
            experience for booking your next course.
          </p>
          <Button name="Google Sign In" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
