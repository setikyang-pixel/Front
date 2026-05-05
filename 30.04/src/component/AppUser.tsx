import { useEffect, useState } from "react";
import type { N } from "../type.ts";
export default function AppUser({
  user,
  dele,
}: {
  user: N[];
  dele: (id: number) => void;
}) {
  const [u, setU] = useState<N[]>(user);
  useEffect(() => {
    setU(user);
  }, [user]);

  function pass(id: number) {
    setU(u.map((i) => (i.id === id ? { ...i, completed: true } : i)));
  }

  function unpass(id: number) {
    setU(u.map((i) => (i.id === id ? { ...i, completed: false } : i)));
  }

  function del(id: number) {
    setU(u.filter((i) => i.id !== id));
    dele(id);
  }
  return (
    <>
      {u.map((i) => {
        return (
          <div className="headerUser" key={i.id}>
            <p>1.{i.title}</p>
            <p>2.{i.completed + ""}</p>
            <div className="userBut">
              <button onClick={() => unpass(i.id)}>Unpass</button>
              <button onClick={() => pass(i.id)}>Pass</button>
              <button onClick={() => del(i.id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </>
  );
}
