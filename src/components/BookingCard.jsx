import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import Button from './Button';
import { Link, useNavigate } from "react-router-dom";

const BookingCard = (courseInfo) => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('default');
  const [selectedTime, setSelectedTime] = useState('default');
  const [availableDate, setAvailableDate] = useState([]);
  const [availableTime, setAvailableTime] = useState([]);

  const setDates = () =>{
    var times = [];
    Object.values(courseInfo.course.courseRuns).map((element,index) => {
      if (!times.includes(element.date)){
        times.push(element.date);
      }
    })
    return times;
  }
  // On Page Load
  useEffect(()=>{
    console.log('PAGE LOAD');
    console.log(courseInfo.course.courseRuns)
    var availableDates = setDates();
    setAvailableDate([...availableDates])
  }, [])
  // Checking
  useEffect(()=>{
    console.log(selectedTime + "Date Changed")
  }, [selectedTime]);

  // Calendar selection
  useEffect(() => {
    selectDate(value);
    setSelectedTime('default');
  }, [value]);
  
    
  const selectDate = (val) => {
    var availableTimeslots = [];
    const selectedDay = val.getDate();
    const selectedMonth = val.getMonth();
    Object.values(courseInfo.course.courseRuns).map((element,index) => {
      var classDate = new Date(element.date);
      if(classDate.getDate() === selectedDay && classDate.getMonth() === selectedMonth){
        availableTimeslots.push(element.timeslot);
      }
    });
    setSelectedDate(val.getFullYear() + '-' + val.getMonth() + '-' + val.getDate());
    setAvailableTime([...availableTimeslots])
  }

  const selectTime = (event) => {
    setSelectedTime(event.target.value)
  };

  const submitBooking = () => {
    navigate('/payment',
    {state:{courseInfo: courseInfo , selectedDate: selectedDate, selectedTime: selectedTime}}
    )
  }

  return (
    <div>
      <Calendar onChange={onChange} value={value}/>
      <span className='bg-white'>
        Date selected: {value.getDate()}/{value.getMonth() + 1}/{value.getFullYear()}
      </span>
      <br />
      {availableTime.length === 0 &&
        <span className='bg-white'>
          There are no available time slots for selected day
        </span>
      }
      {availableTime.length > 0 && (
        <div>
          <span className='bg-white'>
            Select Your TimeSlot: 
          </span>
          <select className="form-select" onChange={selectTime} value={selectedTime}>
            <option disabled value={'default'}>
              Choose a time slot
            </option>
            {availableTime.map(option => {
                return  (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })} 
          </select>
        </div>
      )}
      <br />
      {selectedTime !== 'default' &&
            // <Link
            // to={{
            //   pathname: `/payment`,
            //   state: {courseInfo: "course"}}}
            // >
            <Button name="Book Your Class" onClick={submitBooking} color={"green"} />
            // </Link>
      }
      
    </div>
  );
}

export default BookingCard;
// const course = 
//   {
//     className: "Fullstack Web Development",
//     objective:
//       " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
//     classes: [
//       {
//         date: "2023-3-24",
//         timeslot: "11.00am - 12.00pm",
//       },
//       {
//         date: "2023-3-24",
//         timeslot: "4.00pm - 5.00pm",
//       },
//       {
//         date: "2023-3-26",
//         timeslot: "12.00am - 1.00pm"
//       },
//       {
//         date: "2023-3-26",
//         timeslot: "5.00pm - 6.00pm",
//       }
//     ]
//   }

