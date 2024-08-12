import React, { useState } from "react";
import "./Form.css";
import { Input, Button } from "@mui/material";

export default function Form() {
  let [Form, setForm] = useState([]);


  function formsubmit(e) {
    e.preventDefault();

    let current = e.target[0].value;
    let duplicate = false;

    Form.forEach(e => {
      if(e.Id == current) {
        duplicate = true;
      }
    });
  

  if(duplicate == true) {
    alert("Id allready exit");
  } 
  else {
    setForm([
      ...Form,
      {
        Id: e.target[0].value,
        Name: e.target[1].value,
        Email: e.target[2].value,
        Dob: e.target[3].value,
        Contact: e.target[4].value,
      },
    ]);
  }


  e.target[0].value="",
  e.target[1].value="",
  e.target[2].value="",
  e.target[3].value="",
  e.target[4].value=""
}


function Deletedata(index){
  setForm(Form.filter((e, i) => i !== index));

}





  return (
    <div className="body1">
      <div className="form-container">
        <form className="Form-data" onSubmit={(e) => formsubmit(e)}>
          <Input type="number" placeholder="Your Id" />
          <Input type="text" placeholder="User Name" />
          <Input type="mail" placeholder="Your Email" />
          <Input type="date" placeholder="Your Dob" />
          <Input type="number" placeholder="Your Contact " />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>

        <div className="submitted-data">
          {Form.map((e, i) => (
            <div key={i}>
              <h3>Id:{e.Id}</h3>
              <h3>Name:{e.Name}</h3>
              <h3>Email:{e.Email}</h3>
              <h3>Dob:{e.Dob}</h3>
              <h3>Contact:{e.Contact}</h3>

              <Button onClick={(e)=>Deletedata(i)} type="delete" variant="contained">
            Delete
          </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
