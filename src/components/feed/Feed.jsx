import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './Feed.css'
import { Posts } from '../../dummyData'


const Feed = () => {
    return (
        <div className='Feed'>
                <Share/>
                {
                    Posts?.map((p)=>(
                        <Post key={p?.id} post={p} />
                    ))
                }
        </div>
    );
}

export default Feed;
