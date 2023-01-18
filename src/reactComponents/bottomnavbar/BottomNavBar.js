import React, { useState, useEffect } from "react";
import "./BottomNavBar.css";

import { useSelector, useDispatch } from "react-redux";
import { setAmount, selectCount } from "./PageSlicer";
/* */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function BottomNavBar() {
  /* */
  const page = useSelector(selectCount);
  //   const [PageNumber, setPageNumber] = useState(1);
  //   const incrementValue = Number(PageNumber) || 1;
  //   useEffect(() => {}, [PageNumber]);
  /* */
  const pagecount = useSelector(selectCount);
  const dispatch = useDispatch();
  /* */
  return (
    <div>
      {/* <h2>{page}</h2> */}
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
