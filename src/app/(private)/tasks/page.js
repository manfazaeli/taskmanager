import Link from "next/link";
import DeleteTaskButton from "@/components/deleteTask"
import { cookies } from "next/headers";
import axios from "axios";
export async function getTasks() {
  try {
    const token = cookies().get("token")?.value;
    const endPoint = `${process.env.DOMAIN}/api/tasks`;
    const response = await axios.get(endPoint, {
      headers: { cookie: `token=${token}` },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}
const Tasks = async () => {
  const tasks = await getTasks();
  //  console.log(tasks)
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className=" font-semibold">Tasks page</h1>
        <button className=" bg-slate-600 text-white m-2 px-3 py-0">
          <Link href={"/tasks/addtask"}>new task</Link>
        </button>
      </div>
      {tasks.map((task) => (
        <div key={task._id} className=" border border-2">
          <h1> {task.title}</h1>
          <p> {task.description}</p>
          <div className="flex gap-5">
            <span className=" text-gray-500 font-semibold"> Status</span>
            <span className=" text-gray-600 uppercase">{task.status}</span>
          </div>
          <div className="flex gap-5">
            <span className=" text-gray-500 font-semibold"> category</span>
            <span className=" text-gray-600 uppercase">{task.category}</span>
          </div>
          <div className="flex gap-5">
            <span className=" text-gray-500 font-semibold"> Start date</span>
            <span className=" text-gray-600 uppercase">{new Date(task.dateToStart).toLocaleDateString()}</span>
          </div>

          <DeleteTaskButton taskid={task._id || ""} />
          <button className=" bg-gray-600 text-white px-2">
            <Link href={`/tasks/edittask?task=${JSON.stringify(task)}`}>edit task</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
