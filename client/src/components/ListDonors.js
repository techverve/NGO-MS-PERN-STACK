import React, { Fragment, useEffect, useState } from "react";
import './app.css'
const Listdonors = () => {
  const [donors, setdonors] = useState([]);
  const getdonors = async () => {
    try {
      const response = await fetch("http://localhost:5000/donors");
      const jsonData = await response.json();
      setdonors(jsonData);
     } catch (err) {
      console.error(err.message);
    }
  };
useEffect(() => {
    getdonors();
  }, []);

 return (
    <Fragment>
       <p className='headings-1'> Few generous donations that keeps us going :)</p>
       <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Donation Item</th>
            <th>Donated</th>
            <th>NGO Center</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {donors.map(mem => (
            <tr key={mem.Vol_id}>
             <td>{mem.name}</td>
             <td>{mem.d_type}</td>
             <td>{mem.d_desc}</td>
             <td>{mem.ngo_center}</td>
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

export default Listdonors;
