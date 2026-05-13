import { useContext } from "react";
import { Context } from "../context/context.ts";

export default function Grid() {
  const context = useContext(Context);
  if (!context) return null;
  const { user } = context;
  return (
    <div className="grid-container">
      {user.map((i) => (
        <div className="user-card" key={i.id}>
          <div className="user-card-avatar">
            {i.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-card-name">{i.name}</div>
          <div className="user-card-meta">Age {i.age}</div>
          <div className="user-card-salary">
            ֏{i.salary.toLocaleString()}
            <span>/years</span>
          </div>
          <div className="user-card-actions">
            <button
              className="btn btn-up"
              onClick={() => context.upSalary(i.id)}
            >
              Up
            </button>
            <button
              className="btn btn-down"
              onClick={() => context.downSalary(i.id)}
            >
              Down
            </button>
            <button
              className="btn btn-danger"
              onClick={() => context.remove(i.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
