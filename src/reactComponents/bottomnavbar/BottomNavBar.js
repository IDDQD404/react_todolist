import React, { useState, useEffect } from "react";
import "./BottomNavBar.css";

import { useSelector, useDispatch } from "react-redux";
import { setAmount, selectCount } from "./PageSlicer";
/* */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function BottomNavBar() {
  const page = useSelector(selectCount);
  const pagecount = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="HorizontalLine">
        {numbers.map((number) => (
          <button
            className="selectPage"
            onClick={() => dispatch(setAmount(number))}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
