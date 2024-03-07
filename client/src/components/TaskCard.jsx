import { useTasks } from "../context/TasksContext";
import { Link} from 'react-router-dom';

function TaskCard({task}) {

    const {deleteTask} = useTasks();

    return (
    <div className="bg-slate-500 max-w-md w-full p-10 rounded-md" >
      <header className="flex justify-between" >
      <h1 className="text-2xl font-bold" >{task.title}</h1>
      <div className="flex gap-x-2 items-center" >
        <button title="delete" onClick={()=>{
           console.log(task._id); 
           deleteTask(task._id);
        }} >&#128465;</button>
          <Link to={`/tasks/${task._id}`} title="edit">&#9998;</Link>
      </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
