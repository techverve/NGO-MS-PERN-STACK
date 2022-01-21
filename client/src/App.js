import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputMember";
import Listmembers from "./components/ListMembers";
import Listvolunteers from "./components/ListVolunteers";
import Listdonors from "./components/ListDonors";
import Listdocs from "./components/ListDocs";

function App() {
  return (
    
      <div className="container">
        <h1 className="text-center mt-5"> NGO Center - Together we can make a difference </h1>
        <br/>
        <br/>
        <Listdonors/>
        <br/>
        <br/>
        <Listdocs/>
        <br/>
        <br/>
        <Listvolunteers/>
        <br/>
        <br/>
        <Listmembers />
        <br/>
        <br/>
        <InputTodo />
      </div>
    
  );
}

export default App;
