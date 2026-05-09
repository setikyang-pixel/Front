import { useContext } from "react";
import { ToDo } from "../context/ToDo";
import { useForm } from "react-hook-form";

type FormInputs = {
  task: string;
};

export default function AddUser() {
  const cont = useContext(ToDo);
  if (!cont) throw new Error("AddUser must be inside DowUser");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    cont.add(data.task);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inp">
          <input
            placeholder="Write..."
            {...register("task", { required: "Write!!!" })}
          />
          {errors.task && <p className="err">{errors.task.message}</p>}
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
