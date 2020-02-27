import React, { useState } from 'react';
import Form from "./components/Form";
import Team from "./components/Team";


import './App.css';

function App() {
  const [members, setMembers] = useState([
    {      
      name: "Neel",
      email: "ctneel2010@yahoo.com",
      role: "wildcard"
    }
  ]);
  const addNewMember = add => {
    const newMember = {
      name: add.name,
      email: add.email,
      role: add.role
    };
    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <h1>The Team</h1>
      <Form addNewMember={addNewMember} />
      <Team members={members} />
    </div>
  );
}

export default App;
