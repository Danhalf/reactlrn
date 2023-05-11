import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (
        _,
        {
            
            dispatch
        }
    ) => {
        const res = await axios.get(postsUrl);
        dispatch(setPosts(res.data))
    }
)

const initialState = {
    posts: [],
}

export const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, { payload }) => {
            state.posts = payload
        },
        deletePost: (state, { payload }) => {
            state.posts = state.posts.filter(post => post.id !== payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fullf'),
        [getPosts.pending]: () => console.log('pending'),
        [getPosts.rejected]: () => console.log('rejected')
    }
})

export const { setPosts, deletePost } = PostSlice.actions
export default PostSlice.reducer