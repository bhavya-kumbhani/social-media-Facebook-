import './Share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import MoodIcon from '@mui/icons-material/Mood';
import RoomIcon from '@mui/icons-material/Room';
import LabelIcon from '@mui/icons-material/Label';

export default function Share() {
  return (
    <div className='share'>
        <div className="shareContainer">
            <div className="shareTop">
                    <img src='/assets/Person/10.jpg' className='shareImage'/>
                    <input type="text" placeholder='Share comment' className='shareTopText' />
            </div>
            <hr className='shareHr'/>
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor='tomato' className='shareoptionimg'/>
                        <span className="shareoptionText">Photos or Video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor='green' className='shareoptionimg'/>
                        <span className="shareoptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor='blue' className='shareoptionimg'/>
                        <span className="shareoptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <MoodIcon htmlColor='gold' className='shareoptionimg'/>
                        <span className="shareoptionText">Feelings</span>
                    </div>
                </div>
                <button className='sharebtn'> Share</button>
            </div>
        </div>
    </div>
  )
}
