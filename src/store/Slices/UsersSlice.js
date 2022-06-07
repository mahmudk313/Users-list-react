import { createSlice } from '@reduxjs/toolkit';

const UsersSlice = createSlice({

    name: 'users',
    initialState : {
        users: [
            // {
            // name: "",
            // lastName: "",
            // permission: "",
            // joinDate: 0,
            // email: "",
            // id: 0,
            // skill: ""
            // }
        ],
        usersListStatus: true
    },
    reducers: {
        getUsers: (state, {payload}) => {
            state.users = payload
        },
        addUser: (state, {payload}) => {
            state.users.push(payload)
        },
        updateUser: (state, {payload}) => {
            state.users = [
                ...payload
            ]
        }
    }
})


export const {addUser, getUsers, updateUser} = UsersSlice.actions;

export default UsersSlice.reducer;