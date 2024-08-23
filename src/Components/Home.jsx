import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="card-grid">
        <Link to={"/Components/Todo"} className="card-link">
          <div className="card">
            <h1 className="card-title">Todo</h1>
          </div>
        </Link>
        
        <Link to={"/Components/Clock"} className="card-link">
          <div className="card">
            <h1 className="card-title">Clock</h1>
          </div>
        </Link>
        
        <Link to={"/Components/Form"} className="card-link">
          <div className="card">
            <h1 className="card-title">Form</h1>
          </div>
        </Link>
        
        <Link to={"/Components/Changecurrency"} className="card-link">
          <div className="card">
            <h1 className="card-title">Currency</h1>
          </div>
        </Link>

        <Link to={"/Components/Quiz"} className="card-link">
          <div className="card">
            <h1 className="card-title">Quiz</h1>
          </div>
        </Link>
        <Link to={"/Components/Calculator"} className="card-link">
          <div className="card">
            <h1 className="card-title">Calculator</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}