import React from "react";
import "./Right.css";
import Online from '../online/Online';
import {Users} from '../../dummyData';

const Right = () => {
  return (
    <div className="RightBar">
      <div className="rightWrapper">
        <div className="Birthdaycontain">
          <img className="BirthImg" src="/assets/post/4.png" alt="" />
          <span className="BirthText">
            <b>Bhavya kumbhani</b> and <b>3 Other friends</b> have a birthday.
          </span>
        </div>
        <img
          className="celebrateImg"
          src="assets/post/celebration3.jpg"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="onlinefriendList">
          {
            Users?.map((u)=>(
              <Online key={u?.id} onlineuser={u}/>
            ))
          }
            
        </ul>
      </div>
    </div>
  );
};

export default Right;
