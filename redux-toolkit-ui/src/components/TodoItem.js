import React from 'react'
import { useDispatch } from "react-redux";
import { changeCompleted } from "../features/todo/todoSlice";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();

    return (
        <div className='flex justify-between items-center my-2'>
            <div onClick={() => dispatch(changeCompleted(id))} className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Complete
            </div>
            <div className={`text-sm ${completed ? 'line-through font-medium text-lime-400' : ''}`}>
               {text}
            </div>
            <div className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </div>
        </div>
    )
}

export default TodoItem
