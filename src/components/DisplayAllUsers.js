import React, { useEffect, useState } from 'react';

const DisplayAllUsers = () => {
    const [data, setData]= useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/getAllUsers", {
            method: "GET",
        }).then ((res) => res.json()).then((data) => {
            console.log(data, "user");
            setData(data.data)
        });
        
    }, []);

  return (
    <>
      <table style={{ width: 500 }}>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
        {data.map(i => {
            return (
                <tr>
                    <td>{i.firstName}</td>
                    <td>{i.email}</td>
                </tr>
            )
        })}
      </table>
    </>
  );
}

export default DisplayAllUsers;
