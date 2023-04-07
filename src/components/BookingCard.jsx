import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import Button from './Button';

const BookingCard = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('default');
  const [selectedTime, setSelectedTime] = useState('default');
  const [availableDate, setAvailableDate] = useState([]);
  const [availableTime, setAvailableTime] = useState([]);

  const setDates = () =>{
    var times = [];
    course.classes.forEach(element => {
      if (!times.includes(element.date)){
        times.push(element.date);
      }
    })
    return times;
  }
  // On Page Load
  useEffect(()=>{
    var availableDates = setDates();
    setAvailableDate([...availableDates])
  }, [])
  // Checking
  useEffect(()=>{

  }, [selectedTime]);

  // Calendar selection
  useEffect(() => {
    selectDate(value);
  }, [value]);
  
    
  const selectDate = (val) => {
    var availableTimeslots = [];
    const selectedDay = val.getDate();
    const selectedMonth = val.getMonth();
    course.classes.forEach(element => {
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
    alert(course.coursename + selectedDate + selectedTime)
  }

  return (
    <div>
      <Calendar onChange={onChange} value={value}/>
      <span className='bg-white'>
        Date selected: {value.getDate()}/{value.getMonth()}/{value.getFullYear()}
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
        <Button name="Book Your Class" onClick={submitBooking} color={"blue"} />
      }
      
    </div>
  );
}

export default BookingCard;
const course = 
  {
    coursename: "Fullstack Web Development",
    objective:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    classes: [
      {
        date: "2023-3-24",
        timeslot: "11.00am - 12.00pm",
      },
      {
        date: "2023-3-24",
        timeslot: "4.00pm - 5.00pm",
      },
      {
        date: "2023-3-26",
        timeslot: "12.00am - 1.00pm"
      },
      {
        date: "2023-3-26",
        timeslot: "5.00pm - 6.00pm",
      }
    ]
  }

