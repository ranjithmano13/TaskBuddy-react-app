import React from "react";
import "./calendarcard.css";
const CalendarCard = () => {
  const calendarDate = new Date();
  const date = calendarDate.getDate();
  const weekday = calendarDate.toLocaleString([], {
    weekday: "long",
  });
  const month = calendarDate.toLocaleString([], {
    month: "long",
  });
  const year = calendarDate.getFullYear();

  return (
    <article className="calendar-card">
      <div className="date-day">
        <h2>{date}</h2>
        <h3>{weekday}</h3>
      </div>
      <div className="month-year">
        <h3 className=" gradient-text">{month}</h3>
        <h2 className=" gradient-text">{year}</h2>
      </div>
    </article>
  );
};

export default CalendarCard;
