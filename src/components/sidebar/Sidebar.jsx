import './Sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from '../../dummyData';
import Closefriend from '../closeFriend/Closefriend';

const Sidebar = () => {
    return (
        <div className='SideBar'>
            <div className="sidebarWrapper">
                <ul className="sidebarlist">
                    <li className="sidebaritem">
                        <RssFeedIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Feed</span>
                    </li>
                    <li className="sidebaritem">
                        <ChatIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Chat</span>
                    </li>
                    <li className="sidebaritem">
                        <GroupIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Group</span>
                    </li>
                    <li className="sidebaritem">
                        <SlowMotionVideoIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Video</span>
                    </li>
                    <li className="sidebaritem">
                        <QuestionMarkIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Question</span>
                    </li>
                    <li className="sidebaritem">
                        <BookmarkIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Bookmark</span>
                    </li>
                    <li className="sidebaritem">
                        <WorkOutlineIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Jobs</span>
                    </li>
                    <li className="sidebaritem">
                        <EventNoteIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Event</span>
                    </li>
                    <li className="sidebaritem">
                        <SchoolIcon className='sidebaricon'/>
                        <span className='sidebarlistItemText'>Course</span>
                    </li>
                </ul>
                <button className='btn'>Show More</button><hr className='btnhr'/>
                <ul className='Friendlist'>
                   {Users.map((u)=>(
                    <Closefriend key={u.id} closefrd={u} />
                   ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
