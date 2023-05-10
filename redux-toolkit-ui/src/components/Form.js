import { useDispatch } from "react-redux";
import { createTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const Form = () => {
    const dispatch = useDispatch();
    const [ todoText, setTodoText ] = useState("");


    const addTodoHandler = () => {
        const todo = {
            text: todoText
        }
        dispatch(createTodo(todo));
        setTodoText("");
    }

    return (
        <form className='w-full flex' onSubmit={ (e) => e.preventDefault() }>
            <input
                type='text'
                value={todoText}
                placeholder='Type something...'
                onInput={({target}) => setTodoText(target.value)}
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                onClick={addTodoHandler}
            >
                Submit
            </button>
        </form>
    )
}

export default Form
