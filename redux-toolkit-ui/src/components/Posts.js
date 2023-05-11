import React from 'react'
import PostItem from './PostItem'
import { getPosts } from "../features/post/postSlice";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
    const dispatch = useDispatch()

    const posts = useSelector(state=>state.posts.posts)
    return (
        <div>
            <button
                type='submit'
                onClick={()=>dispatch(getPosts())}
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>
            {
                posts && posts.map(post=>(
                    <PostItem key={post.id} post={post}/>
                ))
            }
        </div>
    )
}

export default Posts
