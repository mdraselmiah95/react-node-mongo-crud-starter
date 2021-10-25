import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const handleUpdateUser = (e) => {};
  return (
    <div>
      <h2>Update {user.name}</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="" id="" />
        <input type="email" name="email" placeholder="your email" id="" />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
