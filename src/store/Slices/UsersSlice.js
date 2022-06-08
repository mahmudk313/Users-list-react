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
        },
        deleteUsers: (state, {payload}) => {
                state.users = state.users.filter((item) => item.id !== payload)
        }
    }
})


export const {addUser, getUsers, updateUser, deleteUsers} = UsersSlice.actions;

export default UsersSlice.reducer;