import React,{useState} from "react";
import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData'

const Post = ({post}) => {
  console.log("first",post)
  // const user=Users.filter(((u)=>u?.id===post?.userId)[0].username)
  // console.log("Users",user)
  const [like,setLike]=useState(post.like)

  const likeHanhler=()=>{
    setLike(like+1)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="posttopLeft">
            <img
              className="posttopleftimg"
              src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture}
            />
            <span className="posttopleftname">
              {Users.filter((u)=>u?.id===post?.userId)[0].username}
              {console.log("bbbbbbbbbbbbb",Users.filter((u)=>u?.id===post?.userId)[0])}
            </span>
            <span className="posttopleftTime">{post?.date}</span>
          </div>
          <div className="posttopRight">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
            <div>
            <span className="postcenterText">{post?.desc}</span>
            </div>            
            <img className="postcenterImg" src={post?.photo} />
            
        </div>
        <div className="postBottom">
            <div className="postbottomLeft">
              <div>
                <img className="likeIcon" src="/assets/post/download(8).jpg" alt="" onClick={likeHanhler}/>
                <img className="likeIcon" src="/assets/post/download(9).png" alt="" />
              </div>
              
            <span className="PostbottomCounter" >{like}  People like it.</span>
            </div>
            <div className="postbottomright">
                <span className="postComment">{post?.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
