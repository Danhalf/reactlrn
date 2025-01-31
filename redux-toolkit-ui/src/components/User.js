import React from 'react'
import FirstName from './FirstName'
import LastName from './LastName'
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../features/user/userSlice";


const User = () => {

    const dispatch = useDispatch()

    const changeInputState = ({ value }, actionName) => {
        dispatch(actionName(value));
    }

    return (
        <div className='flex flex-col'>
            <input
                type='text'
                placeholder='First Name'
                onChange={ ({ target }) => changeInputState(target, setFirstName) }
                className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <input
                type='text'
                placeholder='Last Name'
                onChange={ ({ target }) => changeInputState(target, setLastName) }
                className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <div className='flex gap-20 py-5'>
                <div className='flex flex-col'>
                    <div className='flex font-light'>First Name:</div>
                    <div className='flex'>
                        <FirstName/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex font-light'>Last Name:</div>
                    <div className='flex'>
                        <LastName/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
