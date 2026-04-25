import { useState } from "react";

export default function AddUser({ add }) {
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  function handle() {
    if (!name && !age) {
      alert("Please fill in the specified field ` name & age");
      return;
    }
    if (!name) {
      alert("Please fill in the specified field ` name");
      return;
    }
    if (!age) {
      alert("Please fill in the specified field ` age");
      return;
    }
    let fullInfo = {name:name, age:age};
    add(fullInfo);
    setname("");
    setage("");
  }
  return (
    <>
      <div className="Header">
        <p>Login</p>
        <input
          required
          className="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          required
          className="age"
          placeholder="age"
          type="text"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
        <button className="clickName" onClick={handle}>
          Click
        </button>
      </div>
    </>
  );
}
