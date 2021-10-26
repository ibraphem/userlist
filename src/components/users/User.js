import React, { useState } from "react";
import "./User.css";

const User = ({ first_name, last_name, email, gender, ip_address }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="parentContainer">
        <div className="card" onClick={() => setIsOpen(!isOpen)}>
          <div className="container">
            <h4>
              <b>{`${first_name} ${last_name}`}</b>
              <span className="toggle">{isOpen ? "-" : "+"}</span>
            </h4>
            {isOpen && (
              <ul className="detail">
                <li>{`First Name: ${first_name}`}</li>
                <li>{`Last Name: ${last_name}`}</li>
                <li>{`Email: ${email}`}</li>
                <li>{`Gender: ${gender}`}</li>
                <li>{`IP: ${ip_address}`}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
