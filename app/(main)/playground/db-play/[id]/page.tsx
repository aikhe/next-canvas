import EditCutie from "@/components/edit-cutie";
import { db } from "@/lib/db";
import axios from "axios";

const getCutie = async (id: any) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/cuties/${id}`);

    if (!data) {
      throw new Error("Failed to fetch cutie");
    }

    return data.cutie;
  } catch (error) {
    console.log(error);
  }
};

export default async function Cutie({ params }: { params: any }) {
  const { id } = params;
  const cutie = await getCutie(id);

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center overflow-hidden">
      <div className="flex max-w-64 flex-col gap-4 break-words">
        <EditCutie id={cutie?.id} name={cutie?.name} />
      </div>
    </div>
  );
}
