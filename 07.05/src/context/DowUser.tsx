import { useState, useEffect } from "react";
import { ToDo } from "./ToDo";
import type { User } from "./type";

type Props = {
  children: React.ReactNode;
};

const DowUser: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data.slice(0, 10)))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  function remove(id: number) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  function pass(id: number) {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, completed: true } : u))
    );
  }

  function unpass(id: number) {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, completed: false } : u))
    );
  }

  function removeAll() {
    setUsers([]);
  }

  function passAll() {
    setUsers((prev) => prev.map((u) => ({ ...u, completed: true })));
  }

  function unpassAll() {
    setUsers((prev) => prev.map((u) => ({ ...u, completed: false })));
  }

  function add(title: string) {
    const trimmed = title.trim();
    if (!trimmed) return;
    setUsers((prev) => [
      ...prev,
      { id: Date.now(), title: trimmed, completed: false },
    ]);
  }

  return (
    <ToDo.Provider
      value={{ users, remove, pass, unpass, removeAll, passAll, unpassAll, add }}
    >
      {children}
    </ToDo.Provider>
  );
};

export default DowUser;