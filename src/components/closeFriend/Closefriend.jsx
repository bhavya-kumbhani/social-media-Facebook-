import React from 'react';

const Closefriend = ({closefrd}) => {
    return (
        <div>
             <li className='friendlistItem'>
                    <img src={closefrd?.profilePicture} className='sideimg' />
                    <span className='sideimgText'>{closefrd?.username}</span>
                    </li>
        </div>
    );
}

export default Closefriend;
