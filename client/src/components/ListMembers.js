import React, { Fragment, useEffect, useState } from "react";
const Listmembers = () => {
  const [members, setmembers] = useState([]);
  const [id, setid] = useState();
  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/members/${id}`, {
        method: "DELETE"
      });
      setmembers(members.filter(member => member.mem_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
const getmembers = async () => {
    try {
      const response = await fetch("http://localhost:5000/members");
      const jsonData = await response.json();
      setmembers(jsonData);
     } catch (err) {
      console.error(err.message);
    }
  };
useEffect(() => {
    getmembers();
  }, []);
return (
    <Fragment>
       <p className = "headings-1"> Our Gem members </p>
       <table class="table mt-5 text-center">
        <thead>
          <tr>
          <th>Member ID</th>
            <th>Name</th>
            <th>NGO_Center</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Email</th>
         </tr>
        </thead>
        <tbody>
          {members.map(mem => (
            <tr key={mem.Mem_id}>
            <td>{mem.mem_id}</td>
              <td>{mem.name}</td>
               <td>{mem.ngo_center}</td>
              <td>{mem.age}</td>
              <td>{mem.sex}</td>
             <td>{mem.email_id}</td>
              <td>
             </td>
            </tr>
          ))}
        </tbody>
      </table> 
      <h1 className="text-center mt-5">Delete Members</h1>
      <input
          type="number"
          className="form-control"
          value={id}
          onChange={e => setid(e.target.value)}
        />
        <button onClick = {()=>deleteTodo(id)} className="btn btn-success">Delete</button>
         
    </Fragment>
  );
};

export default Listmembers;
