import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        day : date.getDate(),
        month:date.toLocaleString('defualt',{month:'short'}),
        year : date.getFullYear(),

      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body">
    <div className="clock">
      <div className="clock-face">
        <div className="time">{String(time.hours).padStart(2, '0')}</div>
        <div className="time">{String(time.minutes).padStart(2, '0')}</div>
        <div className="date">{String(time.seconds).padStart(2, '0')}</div>
        
      </div>
      <div className="clock-face">
        <div className="date">{String(time.day).padStart(2, '0')}</div>
        <div className="date">{String(time.month).padStart(2, '0')}</div>
        <div className="date">{String(time.year)}</div>
        </div>
    </div>
    </div>
  );
}

export default Clock;
