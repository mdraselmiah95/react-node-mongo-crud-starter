import React, { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name, email };

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the user");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Please Add an user</h2>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          ref={nameRef}
          name="text"
          id=""
          placeholder="Your name"
        />
        <input
          type="email"
          ref={emailRef}
          name="email"
          id=""
          placeholder="Your Email"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
