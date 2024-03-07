import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams} from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask, getTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() =>{
    console.log(params);
    if(params.id){
      getTask(params.id);
    }
  }, [])

  const onSubmit = handleSubmit((data) => {
    createTask(data);
    navigate("/tasks");
  });

  return (
    <div className="bg-zinc-500 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
