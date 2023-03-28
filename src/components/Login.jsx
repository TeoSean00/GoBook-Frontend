import Button from "./Button";
import booking from "../assets/booking.svg";
const Login = ({ handleLogin }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 py-12 px-4 dark:bg-gray-800 sm:px-6 lg:px-8">
      <div className="max-w-sm rounded-xl border border-gray-200 bg-gray-100 shadow dark:border-gray-700 dark:bg-gray-800">
        <div>
          <img
            className="rounded-t-xl bg-gray-300 p-10 dark:bg-gray-900"
            src={booking}
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              GoBook
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Our booking system website provides a seamless and hassle-free
            experience for booking your next course.
          </p>
          <Button name="Google Sign In" color="blue" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
