import React, { useState, useEffect } from "react";

const SVTEmoji = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      if (seconds === 0) {
        clearInterval(interval);
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="app">
      {seconds === 0 ? (
        <p>Times Up!</p>
      ) : (
        <div className="time">{seconds}s</div>
      )}
    </div>
  );
};

export default SVTEmoji;
