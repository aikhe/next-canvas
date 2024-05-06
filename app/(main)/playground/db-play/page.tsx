import AddData from "@/components/add-data";
import DataCard from "@/components/data-card";
import prisma from "@/lib/prismadb";
import { DataItem } from "@/types/data";

const getData = async (): Promise<DataItem[] | null> => {
  try {
    const res = await fetch(`${process.env.WEBSITE_URL}/api/data`, {
      method: "GET",
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

const getTest = async () => {
  const test = await prisma.data.findMany();
  console.log(test);
  return test;
};

export default async function page() {
  const data = await getTest();

  return (
    <section>
      <div className="mx-auto mt-32 flex max-w-fit flex-col items-center overflow-hidden">
        <AddData />
        <div className="mt-2 grid items-center justify-center gap-2 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((data, i) => {
              return (
                <DataCard
                  key={i}
                  dataName={data.name}
                  dataDescription={data.description}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
