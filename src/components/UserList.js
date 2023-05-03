import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Universal.css";
import { Link } from "react-router-dom";
const UserList = ()=> {
  const [userdetails, setUserDetails] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
  return (
    <div>
      <div className="user-list ">
        <h1 className="user-heading">Users List</h1>
        <div>
          {userdetails.map((item) => (
            <div className="d-flex">
              <h6 className="user-id" key={item.id}>
                {" "}
                {item.id}
              </h6>
              <Link to="/profile/" className="text-decoration-none">
                {" "}
                <div class="popup-container">
                <h6 className="user-id popup-trigger" >{item.name}</h6>
                <div class="popup">{item.name}<span className="span">{item.email}</span></div>
                </div>
              </Link>
        
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
