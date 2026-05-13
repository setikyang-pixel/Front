import { useContext } from "react";
import { Context } from "../context/context.ts";

export default function Table() {
  const context = useContext(Context);
  if (!context) return null;
  const { user } = context;
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((i) => (
            <tr key={i.id}>
              <td style={{ fontWeight: 500 }}>{i.name}</td>
              <td>{i.age}/years</td>
              <td className="salary-cell">֏{i.salary.toLocaleString()}</td>
              <td>
                <div className="actions-cell">
                  <button className="btn btn-up" onClick={() => context.upSalary(i.id)}>Up</button>
                  <button className="btn btn-down" onClick={() => context.downSalary(i.id)}>Down</button>
                  <button className="btn btn-danger" onClick={() => context.remove(i.id)}>Remove</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}