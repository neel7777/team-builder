import React, { useState } from "react";

const Form = props => {
    // console.log("this is our props",props);
    const [member, setMember] = useState({
      name: "",
      email: "",
      role: ""
    });
    const handleChanges = e => {
      setMember({ ...member, [e.target.name]: e.target.value });
    };
    const submitForm = e => {
      e.preventDefault();
      props.addNewMember(member);
      setMember({ name: "", email: "", role: "" });
    };
    return (
      <form onSubmit={submitForm}>
        <label htmlfor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={member.name}
        />
        <label htmlfor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChanges}
          value={member.email}
        />
        <label htmlfor="role">Role:</label>
        <input
          id="role"
          type="text"
          name="role"
          onChange={handleChanges}
          value={member.role}
        />
        <button type="submit">Add Member</button>
      </form>
    );
  };
  
  export default Form;