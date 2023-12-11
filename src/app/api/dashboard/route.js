import { NextResponse } from "next/server";
import { validateJWTandGetUserId } from "@/helpers/jwtValidation";
import Task from "@/models/taskModel"

export async function GET(request) {
    try {
        const userId = await validateJWTandGetUserId(request);
        const tasks = await Task.find({ user: userId });
        let resultData = {
            //status level
            totalTask: tasks.length,
            completedTasks: tasks.filter((task) => task.status === 'completed ').length,
            inprogerssTasks: tasks.filter((task) => task.status === 'in-progress').length,
            //priority level
            lowPrioriyTasks: tasks.filter((task) => task.priority === 'low').length,
            mediumPrioriyTasks: tasks.filter((task) => task.priority === 'medium').length,
            highPrioriyTasks: tasks.filter((task) => task.priority === 'high').length
        }
        console.log(resultData)
        return NextResponse.json({ data: resultData }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 401 })
    }
}