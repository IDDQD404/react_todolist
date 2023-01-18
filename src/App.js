import react, { useState, useEffect } from "react";
import useFetch from "./reactHooks/useFetch";
import "./App.css";
import Card from "./reactComponents/card/Card";
import BottomNavBar from "./reactComponents/bottomnavbar/BottomNavBar";
import { useSelector, useDispatch } from "react-redux";
import {
  setAmount,
  selectCount,
} from "./reactComponents/bottomnavbar/PageSlicer";

function App() {
  /* */
  const page = useSelector(selectCount);
  /**/

  const [todos] = useFetch(
    `https://jsonplaceholder.typicode.com/users/${page}/todos`
  );

  return (
    <div className="App">
      {/*  */}

      <div className="PageNumber">
        <h1>Current Page: {page}</h1>
      </div>

      {todos &&
        todos.map((element) => (
          <Card
            className="card"
            id={element.id}
            date={"11.01.2001"}
            todo={element.title}
            completedat={"xx.xx.xxxx"}
            completed={element.completed}
          />
        ))}

      <BottomNavBar />
    </div>
  );
}

export default App;
