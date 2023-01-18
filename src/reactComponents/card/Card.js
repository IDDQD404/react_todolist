import React, { useState, useEffect } from "react";
import "./Card.css";

export default function Card(args) {
  const [Complete, setComplete] = useState(args.completed);
  const [CompletedAt, setCompletedAt] = useState(args.completedat);

  return (
    <div className="Card">
      <div className="text">Todo № {args.id}</div> <br />
      {Complete && CompletedAt ? (
        <>
          <div className="text">
            Started at {args.date} <br /> - <br /> Completed at {CompletedAt}
          </div>
        </>
      ) : (
        <div className="text"> Started at {args.date}</div>
      )}
      {Complete ? (
        <li className="text">
          <s>{args.todo}</s> (Completed)
        </li>
      ) : (
        <li className="text">{args.todo}</li>
      )}
      {/*  */}
      {!Complete && (
        <div className="SubmitCompleted">
          <button
            className="SubmitCompletedButton"
            onClick={() => {
              console.log("A");
              setComplete(true);
              setCompletedAt(
                new Date().getDate() +
                  "/" +
                  (new Date().getMonth() + 1) +
                  "/" +
                  new Date().getFullYear() +
                  " @ " +
                  new Date().getHours() +
                  ":" +
                  new Date().getMinutes() +
                  ":" +
                  new Date().getSeconds()
              );
            }}
          >
            Complete ?
          </button>
        </div>
      )}
    </div>
  );
}
