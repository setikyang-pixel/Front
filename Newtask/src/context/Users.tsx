import { useState } from "react";
import { Context } from "./context.ts";
import type { elem } from "../context/type.ts";
type Props = {
  children: React.ReactNode;
};

let usersState = [
  { id: 1, name: "Gagik", salary: 40000, age: 22 },
  { id: 2, name: "Harut", salary: 30000, age: 32 },
];
export const Users: React.FC<Props> = ({ children }) => {
  const [us, setUs] = useState(usersState);
  function addUser(obj: elem) {
    setUs([...us, obj]);
    console.log(usersState, us);
  }
  const remove = function (id: number) {
    setUs(us.filter((i) => i.id != id));
  };
  const upSalary = function (id: number) {
    setUs(us.map((i) => (i.id == id ? { ...i, salary: i.salary + 5000 } : i)));
  };
  const downSalary = function (id: number) {
    setUs(
      us.map((i) =>
        i.id == id ? { ...i, salary: i.salary < 5000 ? 0 : i.salary - 5000 } : i,
      ),
    );
  };
  return (
    <>
      <Context.Provider
        value={{ user: us, remove, addUser, upSalary, downSalary }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
