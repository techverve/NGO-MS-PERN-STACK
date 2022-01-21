import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [name, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [blood_grp, setBlood_grp] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  
  
  
  const [e_id, setE_id] = useState("");
  const [mem_id, setMem_id] = useState("");
  const [med_id, setMed_id] = useState("");
  const [g_id, setG_id] = useState("");
  const [ngo, setNgo] = useState("");
  
 
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name, number, email, address, aadhar, blood_grp, age, gender, e_id, mem_id, med_id,g_id, ngo };
      const response = await fetch("http://localhost:5000/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Join us today!</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={name}
          placeholder = "name"
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={number}
          placeholder = "number"
          onChange={e => setNumber(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={email}
          placeholder = "email"
          onChange={e => setEmail(e.target.value)}
        />
        
        <input
          type="text"
          className="form-control"
          value={address}
          placeholder = "address"
          onChange={e => setAddress(e.target.value)}
        />
       
        <input
          type="text"
          className="form-control"
          value={aadhar}
          placeholder="aadharr"
          onChange={e => setAadhar(e.target.value)}
        />
         
        
        <input
          type="text"
          className="form-control"
          value={blood_grp}
          placeholder = "blood group"
          onChange={e => setBlood_grp(e.target.value)}
        />
        
        <input
          type="text"
          className="form-control"
          value={age}
          placeholder = "age"
          onChange={e => setAge(e.target.value)}
        />
       
        <input
          type="text"
          className="form-control"
          value={gender}
          placeholder = "gender"
          onChange={e => setGender(e.target.value)}
        />
         <input
          type="text"
          className="form-control"
          value={e_id}
          placeholder = "Educator ID"
          onChange={e => setE_id(e.target.value)}
        />
       
        <input
          type="text"
          className="form-control"
          value={mem_id}
          placeholder="Member ID"
          onChange={e => setMem_id(e.target.value)}
        />
         
        
        <input
          type="text"
          className="form-control"
          value={med_id}
          placeholder = "Medical ID"
          onChange={e => setMed_id(e.target.value)}
        />
        
        <input
          type="text"
          className="form-control"
          value={g_id}
          placeholder = "Guardian ID"
          onChange={e => setG_id(e.target.value)}
        />
       
        <input
          type="text"
          className="form-control"
          value={ngo}
          placeholder = "ngo"
          onChange={e => setNgo(e.target.value)}
        />
        
        
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>);
};

export default InputTodo;
