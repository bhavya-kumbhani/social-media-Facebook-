import React from 'react';

const Online = ({onlineuser}) => {
    return (
        <div>
             <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img className="friendImg" src={onlineuser?.profilePicture} alt="" />
              <span className="onlineMark"></span>
            </div>
            <div className="friendname">{onlineuser?.username}</div>
          </li>
        </div>
    );
}

export default Online;
