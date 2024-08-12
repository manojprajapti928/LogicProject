import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to={"/Components/Todo"}>
        <div className="Todo">
          <center>
            <h1>Todo</h1>
          </center>
        </div>
      </Link>

      <Link to={"/Components/Clock"}>
        <div className="Todo">
          <center>
            <h1>Clock</h1>
          </center>
        </div>
      </Link>
      <Link to={"/Components/Form"}>
        <div className="Todo">
          <center>
            <h1>Form</h1>
          </center>
        </div>
      </Link>
      <Link to={"/Components/Changecurrency"}>
        <div className="Todo">
          <center>
            <h1>currency</h1>
          </center>
        </div>
      </Link>
    </div>
  );
}
