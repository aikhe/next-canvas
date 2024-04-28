import { db } from "@/lib/db";
import DeletePostButton from "./remove-cutie";

async function getCuties() {
  const posts = await db.cutie.findMany({});
  return posts;
}

export default async function CutieCard() {
  const cutie = await getCuties();
  // console.log(cutie);

  return (
    <>
      {cutie.map((cutie) => {
        return (
          <div
            key={cutie.id}
            className="border border-dashed border-current p-4"
          >
            <h1 className="text-lg font-bold">{cutie.name}</h1>
            <p>{cutie.id}</p>
            <DeletePostButton cutieId={cutie.id} />
          </div>
        );
      })}
    </>
  );
}
