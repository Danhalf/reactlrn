import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, {payload}) => {
            state.firstName = payload
        },
        setLastName: (state, {payload}) => {
            state.lastName = payload
        }
    }
})

export const { setFirstName, setLastName } = UserSlice.actions
export default UserSlice.reducer