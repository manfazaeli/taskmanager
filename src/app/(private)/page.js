import { cookies } from "next/headers";

import axios from "axios";
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

export default async function Home() {
  const user=await getData()
  return (
    <div>
      <h1 className="   ">Home page on the server </h1>
      {user&&(
        <div>
          <h1>
            username:{user.username}
          </h1>
          <h1>
            email :{user.email}
          </h1>
        </div>
      )}
    </div>
  );
}
