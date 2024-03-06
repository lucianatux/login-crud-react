function TaskCard({task}) {
    console.log(task);
  return (
    <div className="bg-zinc-500 max-w-md w-full p-10 my-2 rounded-md" >
      <h1 className="text-2xl font-bold" >{task.title}</h1>
      <div>
        <button>Delete</button>
        <button>Edit</button>
      </div>
      <p className="text-slate-300">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
