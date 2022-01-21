import React, { Fragment, useEffect, useState } from "react";
const Listvolunteers = () => {
  const [volunteers, setvolunteers] = useState([]);
  const getvolunteers = async () => {
    try {
      const response = await fetch("http://localhost:5000/volunteers");
      const jsonData = await response.json();
      setvolunteers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
useEffect(() => {
    getvolunteers();
  }, []);
  return (
    <Fragment>
       <p className='headings-1'> Our set of warriors aka Volunteers</p>
       <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>NGO_Center</th>
            <th>Number</th>
            <th>Blood Group</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map(mem => (
            <tr key={mem.Vol_id}>
            <td>{mem.name}</td>
             <td>{mem.ngo_center}</td>
             <td>{mem.mobile_number}</td>
             <td>{mem.blood_group}</td>
             <td>{mem.email_id}</td>
              <td>
             </td>
            </tr>
          ))}
        </tbody>
      </table>    
    </Fragment>
  );
};

export default Listvolunteers;
