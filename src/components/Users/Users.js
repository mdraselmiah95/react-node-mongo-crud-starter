import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  //DELETE AN USER

  const handleDeleteUser = (id) => {};
  return (
    <div>
      <h2>Users Available: {users.length}</h2>
      {users.map((user) => (
        <div key={user._id}>
          <h3>
            {user.name} :: {user.email}
            <button>Update</button>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Users;
