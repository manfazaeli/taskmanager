'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const DeleteTaskButton = ({ taskid }) => {
    const router = useRouter();
    const onDelete = async () => {
        try {
         
            await axios.delete(`api/tasks/${taskid}`);
            toast.success("با موفقیت حذف شد");
            //clear the router chache 
            router.refresh( );
            router.push("/tasks")
          
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div>
            <button onClick={onDelete}>
                Delete
            </button>
        </div>
    );
}

export default DeleteTaskButton;