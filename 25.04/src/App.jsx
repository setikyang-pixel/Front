import { useEffect, useState } from "react";
import AddUser from "./component/AddUser.jsx";
import UserApp from "./component/UserApp.jsx";

function App() {
  let [user, setUser] = useState([]);
  let [text, setText] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then((value) => value.json())
      .then((res) => {
        let arr = res.filter((t, i) => {
          if (i >= 9) return;
          return t;
        });
        setUser(arr);
      });
  }, []);
  function removeAll() {
    setUser([]);
  }
  function passAll() {
    setUser(user.map((i) => ({ ...i, completed: true })));
  }
  function unpassAll() {
    setUser(user.map((i) => ({ ...i, completed: false })));
  }
  function newUser(text) {
    if (!text) return;
    const newItem = {
      id: user.length + 1,
      title: text,
      completed: false,
    };
    setUser([...user, newItem]);
    setText("");
  }
  return (
    <>
      <button onClick={() => removeAll()}>DeleteAll</button>
      <button onClick={() => passAll()}>Pass</button>
      <button onClick={() => unpassAll()}>Unpass</button>
      <AddUser arg={user} />
      <UserApp text={text} setText={setText} onAdd={newUser} />
    </>
  );
}
export default App;
