import React, { Fragment, useEffect, useState } from "react";
const Listdocs = () => {
  const [docs, setdocs] = useState([]);
const getdocs = async () => {
    try {
      const response = await fetch("http://localhost:5000/doctors");
      const jsonData = await response.json();
     setdocs(jsonData);
     } catch (err) {
      console.error(err.message);
    }
  };

 useEffect(() => {
    getdocs();
  }, []);

return (
    <Fragment>
       <p className='headings-1'> Our team of Doctors</p>
       <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Medical ID Number </th>
            <th>Name</th>
            <th>NGO Center</th>
            </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {docs.map(mem => (
            <tr key={mem.vol_id}>
              <td>{mem.med_id}</td>           
              <td>{mem.name}</td>
             
             <td>{mem.ngo_center}</td>
             <td>
             </td>
            </tr>
          ))}
        </tbody>
      </table>    
    </Fragment>
  );
};

export default Listdocs;
