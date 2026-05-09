import { useContext } from "react";
import { ToDo } from "../context/ToDo";

export default function UserBut() {
  const ctx = useContext(ToDo);
  if (!ctx) throw new Error("UserBut must be inside DowUser");
  return (
    <div className="but">
      <button onClick={ctx.removeAll}>Remove All</button>
      <button onClick={ctx.passAll}>Pass All</button>
      <button onClick={ctx.unpassAll}>Unpass All</button>
    </div>
  );
}