import Button from "./Button";
import booking from "../assets/GoBook.png";
const Login = ({ handleLogin }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 py-12 px-4 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="max-w-sm rounded-xl border border-gray-200 bg-gray-300 shadow dark:border-gray-700 dark:bg-gray-800 md:flex md:max-w-2xl">
        <div className="rounded-t-xl bg-gray-300 p-5 dark:bg-gray-800 md:rounded-l-xl md:rounded-r-none">
          <img src={booking} alt="" className="rounded-xl" />
        </div>
        <div className="p-5 pt-0 md:flex md:flex-col md:justify-between md:pt-5">
          <div className="">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              GoBook
            </h5>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400  md:text-xl">
              Our booking system website provides a seamless and hassle-free
              experience for booking your next course.
            </p>
          </div>
          <div className="md:flex md:justify-end">
            <Button name="Google Sign In" color="blue" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
