import React from "react";
import { useState, useEffect } from "react";
import "../style/manageProfile.css";

const ManageProfile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);
  const handelUserName = (e) => {
    let newUser = user;
    newUser.userName = e.target.value;
    setUser({ ...newUser });
  };
  const handelPassword = (e) => {
    let newPassword = user;
    newPassword.password = e.target.value;
    setUser({ ...newPassword });
  };
  const handelImage = (e) => {
    let newImg = user;
    newImg.img = e.target.value;
    setUser({ ...newImg });
  };

  const updateUser = (e) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <section className="manageProfile">
      <div className="profileImage1">
        <img src={user.img} className="profileImage" />
      </div>
      <div className="personalInformation">
        <form onSubmit={updateUser}>
          <div className="accountDiv">
            <label className='profileLabel'>UserName</label>
            <br />
            <input
              className="profileInput"
              type="text"
              value={user.userName}
              onChange={(event) => handelUserName(event)}
            />
          </div>
          <div className="accountDiv">
            <label className='profileLabel'>Password</label>
            <br />
            <input
              className="profileInput"
              type="password"
              value={user.password}
              onChange={(event) => handelPassword(event)}
            />
          </div>
          <div className="accountDiv">
            <label className='profileLabel'>Image</label>
            <br />
            <input
              className="profileInput"
              type="text"
              value={user.img}
              onChange={(event) => handelImage(event)}
            />
          </div>
          <div className="accountDiv">
            <label className=''>Email</label>
            <br />
            <input
              className="profileInput"
              type="email"
              disabled
              value={user.email}
            />
          </div>

          <div className="profileBtn1">
            <button className='profileBtn'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ManageProfile;
