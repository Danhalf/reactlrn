import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/user/userSlice";
import TodoSlice from "../features/todo/todoSlice";
import PostSlice from "../features/post/postSlice";


export const store = configureStore({
    reducer: {
        user: UserSlice,
        todo: TodoSlice,
        posts: PostSlice
    }
})