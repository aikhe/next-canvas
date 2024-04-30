import EditCutie from "@/components/edit-cutie";
import { db } from "@/lib/db";

const getCutie = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/cuties/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch cutie");
    }

    const name = await res.json();
    // console.log(name.cutie);
    return name.cutie;
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
