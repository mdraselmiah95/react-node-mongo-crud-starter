import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>Users Available: {users.length}</h2>
      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <h5>{user.email}</h5>
        </div>
      ))}
    </div>
  );
};

export default Users;
