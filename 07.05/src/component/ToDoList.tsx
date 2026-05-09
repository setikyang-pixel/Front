import { useContext } from "react";
import { ToDo } from "../context/ToDo";

export default function ToDoList() {
  const log = useContext(ToDo);
  if (!log) throw new Error("ToDoList must be inside DowUser");

  return (
    <div className="userAdd">
      <h2>Today's Exercises</h2>
      {log.users.map((us) => (
        <>
          <div className="hiOrder" key={us.id}>
            <p>{us.title}</p>
            <p>{us.completed + ""}</p>
            <button onClick={() => log.remove(us.id)}>Remove</button>
            <button onClick={() => log.pass(us.id)}>Pass</button>
            <button onClick={() => log.unpass(us.id)}>Unpass</button>
          </div>
        </>
      ))}
    </div>
  );
}
