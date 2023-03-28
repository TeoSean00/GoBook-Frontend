const Booking = ({ timeslots, setSelectedBooking }) => {
  return (
    <table className="w-full table-auto border border-gray-200 text-left text-xs dark:border-gray-700">
      <thead className=" bg-gray-200 text-center font-medium text-gray-600 dark:bg-gray-900 dark:text-white">
        <tr>
          <th className="border border-gray-300 py-3 px-2 dark:border-gray-700">
            {/* Course Run */}
          </th>
          <th className="border border-gray-300 py-3 px-2 dark:border-gray-700">
            Slots left
          </th>
          <th className="border border-gray-300 py-3 px-2 dark:border-gray-700">
            Date
          </th>
          <th className="border border-gray-300 py-3 px-2 dark:border-gray-700">
            Timeslot
          </th>
        </tr>
      </thead>
      <tbody className="divide-y  text-center text-gray-600 dark:text-white">
        {timeslots.map((timeslot, idx) => (
          <tr key={idx}>
            <td className="whitespace-nowrap border border-gray-200 px-2 py-2 dark:border-gray-700">
              {/* {timeslot[0][0]} */}
              <input
                onChange={(e) => setSelectedBooking(timeslot[1])}
                id="default-radio-1"
                type="radio"
                defaultValue=""
                name="default-radio"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600  dark:border-gray-600 dark:bg-gray-700 "
              />
            </td>
            <td className="whitespace-nowrap border border-gray-200 px-2 py-2 dark:border-gray-700">
              {timeslot[1].availableSlots}
            </td>
            <td className="whitespace-nowrap border border-gray-200 px-2 py-2 dark:border-gray-700">
              {timeslot[1].date}
            </td>
            <td className="whitespace-nowrap border border-gray-200 px-2 py-2 dark:border-gray-700">
              {timeslot[1].timeslot}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Booking;
