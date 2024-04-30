import { db } from "@/lib/db";
import DeletePostButton from "./remove-cutie";
import Link from "next/link";

async function getCuties() {
  const cutie = await db.cutie.findMany({});
  return cutie;
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
            className="border border-dashed border-current px-4 py-2"
          >
            <h1 className="text-lg font-bold">{cutie.name}</h1>
            <p className="text-sm">{cutie.id}</p>
            <div className="text-md float-end mt-4 flex gap-2">
              <DeletePostButton cutieId={cutie.id} />
              <Link href={`/playground/db-play/${cutie.id}`}>Edit</Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
