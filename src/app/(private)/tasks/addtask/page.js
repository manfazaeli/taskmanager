'use client'

import { useRouter } from "next/navigation";
import TaskForm from "@/components/taskForm";
import { useEffect, useState } from "react";

const AddTask = () => {
    const router = useRouter()
    const task = {
        title: "",
        description: "",
        status: "",
        category: "",
        priority: "",
        dateToStart: "",
        dateToFinish: "",
        reference: "",
    }
  
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1>add tasks page</h1>
                <button className=" text-black border-2 border-black m-2 px-3 py-0" onClick={() => { router.push("/tasks") }}> Back</button>

            </div>
            <TaskForm props={task} editableTaskid={""} />
        </div>
    );
}

export default AddTask;