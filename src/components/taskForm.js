import { useState } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
const TaskForm = ({ props,editableTaskid }) => {
    // console.log(`${editableTaskid}searchparams${searchParams}and params is ${params}`)
    const router = useRouter();
    const addTask = async () => {
        try {
            await axios.post('/api/tasks', task);
            toast.success("task added successfully ");
            //clear the router chache for updating what we changed in time 
            router.refresh();
            router.push('/tasks')
        } catch (error) {
            toast.error(error.message)
        }
    }
    const editTask = async () => {
        try {
            await axios.put(`/api/tasks/${editableTaskid}`, task);
            toast.success("task updated successfully ");
            router.push('/tasks')
        } catch (error) {
            toast.error(error.message)
        }
    }
    const [task, setTask] = useState(props);
  
    return (
        <div className=" grid grid-cols-3 gap-5">
            <div className=" col-span-3 flex flex-col m-5">
                <label htmlFor="title">title</label>
                <input value={task.title} type="text" onChange={(e) => setTask({ ...task, title: e.target.value })} />
            </div>
            <div className=" col-span-3 flex flex-col m-5">
                <label htmlFor="description">description</label>
                <textarea value={task.description} type="text" onChange={(e) => setTask({ ...task, description: e.target.value })} />
            </div>
            <div className="flex flex-col"  >
                <label htmlFor="status">status</label>
                <select onChange={(e) => setTask({ ...task, status: e.target.value })}>
                    selected
                    <option value=""  ></option>
                    <option value="open" >open</option>
                    <option value="in progress">In progress</option>
                    <option value="closed">closed</option>
                </select>
            </div>
            <div className="flex flex-col"  >
                <label htmlFor="category">category</label>
                <select onChange={(e) => setTask({ ...task, category: e.target.value })}>
                    <option value=""  ></option>
                    <option value="personal" >personal</option>
                    <option value="work">work</option>
                    <option value="others">others</option>
                </select>
            </div>
            <div className="flex flex-col"  >
                <label htmlFor="priority">priority</label>
                <select onChange={(e) => setTask({ ...task, priority: e.target.value })}>
                    <option value=""  ></option>
                    <option value="low" >low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>
            </div>
            <div className="flex flex-col"  >
                <label htmlFor="dateToStart">start Date</label>
                <input type="date" value={task.dateToStart} onChange={(e) => setTask({ ...task, dateToStart: e.target.value })} />
            </div>
            <div className="flex flex-col"  >
                <label htmlFor="dateToFinish">finish Date</label>
                <input type="date" value={task.dateToFinish} onChange={(e) => setTask({ ...task, dateToFinish: e.target.value })} />

            </div>
            <div className="flex flex-col"  >
                <label htmlFor="reference">Reference</label>
                <input type="text" onChange={(e) => setTask({ ...task, reference: e.target.value })} />
            </div>
            <div className="flex flex-col"  >
                <button className="px-2 bg-gray-500 border-green-400 border " onClick={() => { editableTaskid?editTask(): addTask() }}>save</button>
                <button className=" border border-black m-2" onClick={() => { router.push('/tasks') }}>cancel</button>
            </div>


        </div>
    );
}

export default TaskForm;