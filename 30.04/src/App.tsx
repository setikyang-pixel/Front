import { useEffect, useState } from "react";
import AddUser from "./component/AddUser.tsx";
import AppUser from "./component/AppUser.tsx";
import type { N } from "./type.ts";

export default function App() {
  const [user, setUser] = useState<N[]>([]);
  const [text, setText] = useState<string>("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((v) => v.json())
      .then((val: N[]) => {
        setUser(val.filter((i) => i.id <= 10));
      });
  }, []);

  function Alldelete() {
    setUser([]);
  }
  function pass() {
    setUser(
      user.map((i) => {
        return { ...i, completed: true };
      }),
    );
  }
  function unpass() {
    setUser(
      user.map((i) => {
        return { ...i, completed: false };
      }),
    );
  }
  function addNewUser(text: string): void {
    if (!text) return;
    if (!user.length) setUser([]);
    const newItem: N = {
      id: Date.now(),
      title: text,
      completed: false,
    };
    setUser([...user, newItem]);
    setText("");
  }
  function deleteFromMain(id: number) {
    setUser(user.filter((i) => i.id !== id));
  }

  return (
    <div className="HeaderDiv">
      <button onClick={Alldelete}>DeleteAll</button>
      <button onClick={pass}>PassAll</button>
      <button onClick={unpass}>UnpassAll</button>
      <AddUser text={text} setText={setText} func={addNewUser} />
      <AppUser user={user} dele={deleteFromMain} />
    </div>
  );
}
