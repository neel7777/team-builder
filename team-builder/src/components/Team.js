import React from "react";

const Team = props => {
    console.log(props);
  return (
    <div className="team-list">
      {props.members.map(team => (
        <div className="team" >
          <h1>Name: {team.name}</h1>
          <h2>Email: {team.email}</h2>
          <h2>Role: {team.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default Team;