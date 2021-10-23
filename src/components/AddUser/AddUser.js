import React, { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const handleAddUser = (e) => {
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
