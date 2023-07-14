import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./Redux/UserSlice";
import UserDetail from "./Usercard";
import "./NewUserPage.css"; // Import the CSS file for NewUserPage component

function NewUserPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [showUserCard, setShowUserCard] = useState(false);

  const handleAddUser = () => {
    const newUser = {
      id: Math.random().toString(),
      name,
      email,
      telephone
    };

    dispatch(addUser(newUser));
    setName("");
    setEmail("");
    setTelephone("");
    setShowUserCard(true);
  };

  if (showUserCard) {
    return <UserDetail />;
  }

  return (
    <div className="new-user-container">
      <h2>New User</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telephone">Telephone:</label>
        <input
          type="text"
          id="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default NewUserPage;
