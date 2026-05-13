import { useContext } from "react";
import { Context } from "../context/context";
import { useForm } from "react-hook-form";
import type { elem } from "../context/type.ts";

export default function AddUser() {
  const s = useContext(Context);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<elem>();

  const onSubmit = (data: elem) => {
    s?.addUser({ ...data, id: Date.now() });
    reset();
  };

  return (
    <div className="add-user-panel">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-grid">
          <div className="form-field">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="name"
              className={errors.name ? "error" : ""}
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <span className="error-msg">{errors.name.message}</span>
            )}
          </div>

          <div className="form-field">
            <label>Salary(AMD)</label>
            <input
              type="number"
              placeholder="salary"
              className={errors.salary ? "error" : ""}
              {...register("salary", {
                required: "Salary is required",
                valueAsNumber: true,
              })}
            />
            {errors.salary && (
              <span className="error-msg">{errors.salary.message}</span>
            )}
          </div>

          <div className="form-field">
            <label>Age</label>
            <input
              type="number"
              placeholder="years"
              className={errors.age ? "error" : ""}
              {...register("age", {
                required: "Age is required",
                valueAsNumber: true,
              })}
            />
            {errors.age && (
              <span className="error-msg">{errors.age.message}</span>
            )}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
}
