import React from 'react';
import './Topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
    return (
        <div className='topbarcontainer'>
                <div className='topbarLeft'>
                    <span className='logo'>Our Website</span>    
                </div>    
                <div className='topbarcenter'>
                    <div className='SearchInput'>
                    <SearchIcon className='searchIcon'/>
                    <input type='search' placeholder='Search Person... ' className='searchline'  />
                    </div>
                </div>    
                <div className='topbarright'>
                    <div className='topbarlinks'>
                        <span className='topbarlinks'>HomePage</span>
                        <span className='topbarlinks'>Timeline</span>
                    </div>
                    <div className='topbarIcons'>
                        <div className='topbarIconItem'>
                            <PersonIcon/>
                            <span className='topbarIconBudge'>1</span>
                        </div>
                        <div className='topbarIconItem'>
                            <ChatBubbleIcon/>
                            <span className='topbarIconBudge'>2</span>
                        </div>
                        <div className='topbarIconItem'>
                            <NotificationsIcon/>
                            <span className='topbarIconBudge'>3</span>
                        </div>                                                   
                    </div>
                    <div>
                        <img src='/assets/Person/11.jpg' className='topbarImg'/>   
                    </div>
                </div>    
        </div>
    );
}

export default Topbar;
