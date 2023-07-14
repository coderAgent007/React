import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  email: string;
  telephone: string;
}

export interface UserState {
  loading: boolean;
  users: User[];
  error: string | undefined;
  
}

const initialState: UserState = {
  loading: false,
  users:  [
    {
      id: "1",
      name: "Subin Prasad",
      email: "subinprasad@example.com",
      telephone: "9988776655"
    },
    {
      id: "2",
      name: "Muhammed Rafi",
      email: "muhammedrafi@example.com",
      telephone: "9988776644"
    },
    {
      id: "3",
      name: "Arjun Suresh",
      email: "arjunsuresh@example.com",
      telephone: "9988776633"
    },
    {
      id: "4",
      name: "Sarath Sasi",
      email: "sarathsasi@example.com",
      telephone: "9988776622"
    },
    {
      id: "5",
      name: "Sibin Sam",
      email: "sibinsam@example.com",
      telephone: "9988776611"
    }
  ] ,
  error: undefined
 
};

// const users: User[] = [
//   {
//     id: "1",
//     name: "subin prasad",
//     email: "subinprasad@example.com",
//     telephone: "9988776655"
//   },
//   {
//     id: "2",
//     name: "Muhammed Rafi",
//     email: "muhammedrafi@example.com",
//     telephone: "9988776644"
//   },
//   {
//     id: "3",
//     name: "Arjun Suresh",
//     email: "arjunsuresh@example.com",
//     telephone: "9988776633"
//   },
//   {
//     id: "4",
//     name: "Sarath Sasi",
//     email: "sarathsasi@example.com",
//     telephone: "9988776622"
//   },
//   {
//     id: "5",
//     name: "Sibin Sam",
//     email: "sibinsam@example.com",
//     telephone: "9988776611"
//   }
// ];

const userslice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    deleteUser: (state, action: PayloadAction<User>) => {
      const userToDelete = action.payload;
      state.users = state.users.filter(user => user.id !== userToDelete.id);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    }
    
  }
});

export const { setLoading, setUsers, setError, deleteUser, updateUser, addUser } = userslice.actions;
export default userslice.reducer;
// export interface UserState {
//     loading: boolean;
//     users: User[];
//     error: string | undefined;
//   }
