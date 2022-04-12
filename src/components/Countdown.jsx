import React, { useState, useEffect, useRef } from "react";

const Countdown = () => {
  const [count, setCount] = useState(10);
  const [time, setTime] = useState();
  const [notify, setNotify] = useState({
    color: "greens",
    msg: "Counting!",
  });

  const timer = useRef();
  useEffect(() => {
    if (count > 0) {
      timer.current = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    } else {
        setNotify({
          color: "reds",
          msg: "timesup!",
        });
      }

    return () => {
      clearInterval(timer.current);
    };
  }, [count]);

  const handleOnSubmit = (e) => {
      e.preventDefault();
      setCount(time);
  };
  const handleOnChange = (e) => {
    setTime(e.target.value)
  };
  return (
    <div className="contain">
      <div className="row  justify-content-center">
        <form onSubmit={(e)=> handleOnSubmit(e)} className="col-6">
          <div className="m-3">
            <input
              type="number"
              onChange={e => handleOnChange(e)}
              className="form-control"
              placeholder="Enter time..."
            />
          </div>
          <div className="m-3">
            <button
              onClick={(e)=> handleOnSubmit(e)}
              className="btn btn-primary align-center"
            >
              start
            </button>
          </div>
        </form>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <p  className="count-down">{count}</p>
          <p className={"count-msg " + notify.color}>{notify.msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
