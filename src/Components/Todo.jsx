import React, { useState } from "react";
import "./Todo.css";
import { Input, Button } from "@mui/material";

export default function Todo() {
  const [Todo, SetTodo] = useState([]);

  function handlesubmit(e) {
    e.preventDefault();
    SetTodo([
      ...Todo,
      {
        Name: e.target[0].value,
        Age: e.target[1].value,
        DOB: e.target[2].value,
      },
     
    ]);
    e.target[0].value=""
    e.target[1].value=""
    e.target[2].value=""

    
    // console.log(Todo);
  }


  function hidecard(index) {
    SetTodo(Todo.filter((e, i) => i !== index));
  }
  return (
    <div className="todo">
      <form className="tod-form" onSubmit={(e) => handlesubmit(e)}>
        <Input type="text" placeholder="Enter Your Name"  />
        <Input type="text" placeholder="Age"  />
        <Input type="date" placeholder="Date Of Birth"  />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>

      <div>
        {Todo.map((e, i) => (
          <div className="todo-data">
            <h3>Name:{e.Name}</h3>
            <h3>Age:{e.Age}</h3>
            <h3>DOB:{e.DOB}</h3>
            <Button variant="contained" onClick={() => hidecard(i)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
