import React, { useState } from "react";
import Calendar from "react-calendar";

function Calender({ date, setDate }) {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (value) => {
    setDate(value);
    setShowCalendar(false);
  };
  return (
    <div>
      <input
        value={date.toLocaleDateString()}
        onFocus={() => setShowCalendar(true)}
      />
      <Calendar
        className={showCalendar ? "" : "hide"}
        value={date}
        onChange={handleChange}
      />
    </div>
  );
}

export default Calender;
