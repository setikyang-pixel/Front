import { useState } from "react";

export default function AddUser({ add }) {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [err,setErr] = useState("")

  function handle() {
    if (!name || !age) {
      setErr("Error enter for name and age")
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
      {err && (<p className = "error">{err}</p>)}
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
