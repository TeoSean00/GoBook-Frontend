import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import Button from './Button';

const BookingCard = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTime, setAvailableTime] = useState([]);
  const selectDate = async (event) => {
    const option = event.target.value
    await setSelectedDate(option);
    course.classes.forEach(async element => {
      if (element.date === selectedDate){
        await setAvailableTime([...element.timeslot]);
        console.log(availableTime)
      }
    });
  }
  const submitBooking = (course, date, time) => {
    console.log()
  }
  return (
    <div>
      <Calendar onChange={onChange} value={value}/>
      <span className='bg-white'>
        Date selected: {selectedDate}
      </span>
      <br />
      <span className='bg-white'>
        Select Your Date: 
      </span>
      <select className="form-select" onChange={selectDate}>
        {course.classes.map(option => {
            return (
              <option value={option.date} key={option.date}> 
                {option.date}
              </option>
            );
          })} 
      </select>
      <br />
      <span className='bg-white'>
        Select Your TimeSlot: 
      </span>
      <select className="form-select">
        {availableTime.map(option => {
            return  (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })} 
      </select>
      <br />
      <Button name="Book Your Class" onClick={submitBooking(course, selectedDate, selectedTime)} color={"blue"} />
    </div>
  );
}

export default BookingCard;
const course = 
  {
    className: "Fullstack Web Development",
    objective:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    classes: [
      {
        date: "2023-2-24",
        timeslot: ['11.00am - 11.30am', '12.00am - 12.30am']
      },
      {
        date: "2023-2-25",
        timeslot: ['11.02am - 11.32am', '12.00am - 12.30am']
      },
      {
        date: "2023-2-26",
        timeslot: ['11.05am - 11.35am', '12.00am - 12.30am']
      },
      {
        date: "2023-2-27",
        timeslot: ['11.09am - 11.39am', '12.00am - 12.30am']
      }
    ]
  }

