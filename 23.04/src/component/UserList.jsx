import { useState } from "react";
import AddUser from "./AddUser.jsx";

export default function UserList() {
  const [info, setInfo] = useState([]);
  function addInfo(e) {
    setInfo((prevInfo) => [...prevInfo, e]);
  }

  function remove(i) {
    const inter = info.filter((item, index) => i != index);
    setInfo(inter);
  }

  return (
    <>
      <AddUser add={addInfo} />
      <div className="user-list">
        {info.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <button onClick={() => remove(index)}>Remove</button>
            <span>
              {index + 1}. <b>{item.name}</b>
            </span>
            <span>{item.age} age</span>
          </div>
        ))}
      </div>
    </>
  );
}
