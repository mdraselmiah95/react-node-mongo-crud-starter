import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  //DELETE AN USER

  const handleDeleteUser = (id) => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
          const remainingUser = users.filter((user) => user._id !== id);
          setUsers(remainingUser);
        }
      });
  };
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
