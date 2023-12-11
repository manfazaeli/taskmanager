
import { cookies } from "next/headers";
import CountCards from "@/app/(private)/tasks/components/countCard"
import axios from "axios";
import Link from "next/link";
export async function getData() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const endPoint = `${process.env.DOMAIN}/api/users/currentuser`;
    const response = await axios.get(endPoint, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function getDashboardData() {
  try {
    const token = cookies().get("token")?.value;
    const endPoint = `${process.env.DOMAIN}/api/dashboard`;
    const response = await axios.get(endPoint, {
      headers: { cookie: `token=${token}` },
    });
    return response.data.data;
  } catch (error) {
    return [];
  }
}
export default async function Home() {
  const user = await getData();
  const dashboardData = await getDashboardData();
  return (
  
      <div>
        <h1 className=" font-semibold  text-gray-800 text-xl">WELCOME TO NEXT-TASK MANAGER</h1>
        <div className="grid grid-cols-4 gap-4">
          <CountCards
            title={"total Tasks"}
            count={dashboardData.totalTask}
            path="/tasks"
            queryParams={{ status: "" }}
          />
           <CountCards
            title={"pending Tasks"}
            count={dashboardData.pendingTask}
            path="/tasks"
            queryParams={{ status: "pending" }}
          />
           <CountCards
            title={"complete Tasks"}
            count={dashboardData.completedTask}
            path="/tasks"
            queryParams={{ status: "completed" }}
          />
           <CountCards
            title={"low priority Tasks"}
            count={dashboardData.lowPrioriyTasks}
            path="/tasks"
            queryParams={{ status: "lowPrioriyTasks" }}
          />

        </div>
      </div>

 


  );
}
