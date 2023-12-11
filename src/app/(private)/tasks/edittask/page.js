"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import TaskForm from "@/components/taskForm";
import axios from "axios";
import toast from "react-hot-toast";

const EditTask = ({ searchParams }) => {


  const task =JSON.parse(searchParams.task) ;
  // const taskid = parameters.searchParams.taskid;
  const router = useRouter();
  //   const [task, setTask] = useState({  });
  //  //setTask( getTask(taskid))
  //   useEffect(() => {
  //     // console.log('use effect fired');
  //     // return ()=>{console.log("cleanup function executed for cleaning the result ")}

  //   }, []);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>edit task page</h1>
        <button
          className=" text-black border-2 border-black m-2 px-3 py-0"
          onClick={() => {
            router.push("/tasks");
          }}
        >
          Back
        </button>
      </div>
      <TaskForm props={task} editableTaskid={task._id} />
    </div>
  );
};

export default EditTask;
