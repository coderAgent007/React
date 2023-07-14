import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { RootState } from "./Redux/store";
import { User, updateUser, deleteUser, } from "./Redux/UserSlice";
import NewUserPage from "./NewUSer";
import "./Userdetails.css"

function UserDetail() {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  const [showNewUSer, setShowNewUSer] = useState(false);

  // const flag=
  const handleUpdateUser = (user: User) => {
    const newName = prompt("Enter the new name:", user.name) || user.name;
    const newEmail = prompt("Enter the new email:", user.email) || user.email;
    
    const updatedUser: User = {
      ...user,
      name: newName,
      email: newEmail
    };
  
    // Dispatch the updateUser action with the updated user data
    dispatch(updateUser(updatedUser));
  };
  
  

  const handleDeleteUser = (user: User) => {
    // Dispatch the deleteUser action with the user data
    dispatch(deleteUser(user));
  };
  const handleAddUser =()=>{
    
    setShowNewUSer(true);
    // alert("HEre..................")

  }
  if(showNewUSer){
    return(
      <NewUserPage/>
    );
  }
  
    // ...
  return (
    <div>
    <div className="user-detail-container">
      {users.map((user: User) => (
        <div key={user.id} className="user-card">
          <div className="user-card-info">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.telephone}</p>
          </div>
          <div className="user-card-actions">
            <button className="update-button" onClick={() => handleUpdateUser(user)}>Update</button>
            <button className="delete-button" onClick={() => handleDeleteUser(user)}>Delete</button>
          </div>
        </div>
      ))}
      
    </div>
    <button className="add-user-button" onClick={() => handleAddUser()}>
        Add User
    </button>
    </div>
  );
  
  
 
}

export default UserDetail;



