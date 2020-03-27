import React, { useState } from "react";

// React Hooks Tutorial - 4 - useState with object

function HookCounterThree() {
  // Objects in useState
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })} // Must pass in original object before modifying item in obj
      />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })} // Must pass in original object before modifying item in obj
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounterThree;
