import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RemoveData({ id }: { id: any }) {
  const router = useRouter();

  async function deleteData() {
    try {
      const data = await axios.delete(`/api/data/${id}`);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Trash
      onClick={deleteData}
      className="size-5 cursor-pointer text-red-500"
    />
  );
}
