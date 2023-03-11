import Button from "./Button";
import booking from "../assets/booking.svg";
const Login = ({ handleLogin }) => {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <div>
          <img className="rounded-t-lg p-10" src={booking} alt="" />
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
          <Button name="Google Sign In" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
