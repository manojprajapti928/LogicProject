import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Todo from "./Components/Todo";
import Clock from "./Components/Clock";
import Form from "./Components/Form";
import Changecurrency from "./Components/Changecurrency";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Components/Todo" element={<Todo />} />
          <Route path="/Components/Clock" element={<Clock />} />
          <Route path="/Components/Form" element={<Form />} />
          <Route path="/Components/Changecurrency" element={< Changecurrency/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
