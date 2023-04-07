import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Button from "./Button";
import {
  HiOutlineCalendarDays,
  HiOutlineXMark,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineClock,
} from "react-icons/hi2";
const BookingForm = ({ setIsModalOpen, selectedBooking, courseDesc }) => {
  const userDetails = useLocation().state;
  console.log(courseDesc, selectedBooking);
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 h-full w-full bg-black opacity-40"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className="flex min-h-screen items-center  px-4 py-8">
        <div className="relative mx-auto w-full max-w-md rounded-md  bg-gray-50 text-gray-900 shadow-lg  dark:bg-gray-800 dark:text-white">
          <div className="flex items-center justify-between border-b border-gray-200 px-10 py-4 dark:border-gray-700">
            <h4 className=" text-lg font-medium text-gray-800  dark:text-white">
              Booking Confirmation
            </h4>
            <button
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              <HiOutlineXMark />
            </button>
          </div>
          <div className="py-5 px-4 md:px-10">
            <h1 className="mb-2 w-full text-start text-xl font-semibold  text-blue-700 dark:text-blue-600 ">
              {courseDesc.coursename.replace(/-/g, " ")}
            </h1>
            <div className="gap-y-2 text-sm">
              <div className="py-5">
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-x-2">
                      <HiOutlineCurrencyDollar />
                      <pre>Booking Price</pre>
                    </div>
                    <div className=" rounded-lg bg-blue-100 px-3 py-0.5 text-sm text-blue-600 duration-150 hover:bg-blue-100 active:bg-blue-200">
                      ${courseDesc.fees}
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-x-2">
                      <HiOutlineCalendarDays />
                      <pre>Booking Date</pre>
                    </div>
                    <div className=" rounded-lg bg-blue-100 px-3 py-0.5 text-sm text-blue-600 duration-150 hover:bg-blue-100 active:bg-blue-200">
                      {selectedBooking[1].date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-x-2">
                      <HiOutlineClock />
                      <pre>Booking Timeslot</pre>
                    </div>
                    <div className=" rounded-lg bg-blue-100 px-3 py-0.5 text-sm text-blue-600 duration-150 hover:bg-blue-100 active:bg-blue-200">
                      {selectedBooking[1].timeslot}
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-x-2">
                      <HiOutlineUserGroup />
                      <pre>Remaining Slots</pre>
                    </div>
                    <div className=" rounded-lg bg-blue-100 px-3 py-0.5 text-sm text-blue-600 duration-150 hover:bg-blue-100 active:bg-blue-200">
                      {selectedBooking[1].availableSlots} left
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-end gap-3 px-10 py-4">
            <Link
              to="/payment"
              state={[
                {
                  userEmail: userDetails.email,
                  userName: userDetails.given_name,
                  orderID: uuid(),
                  coursename: courseDesc.coursename.replace(/-/g, " "),
                  coursePrice: courseDesc.fees,
                  //TO DO in future:
                  // fix issue where courseDescription string too long
                  // which makes it an invalid value on stripe's PaymentIntent function
                  courseDescription: courseDesc.content.slice(0, 10),
                  classID: Number(courseDesc["_id"]),
                  runID: Number(selectedBooking[0]),
                  // Hardcoded for testing purposes
                  userID: "112532673980137782859",
                  // userID: userDetails.id,
                },
                userDetails,
              ]}
            >
              <Button
                name="Proceed to Payment"
                color="green"
                // onClick={() => setIsModalOpen(false)}
              />
            </Link>
            <Button
              name="Cancel"
              color="red"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
