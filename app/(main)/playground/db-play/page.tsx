import AddData from "@/components/add-data";
import DataCard from "@/components/data-card";
import { DataItem } from "@/types/data";
import axios from "axios";

export const dynamic = "force-dynamic";

const getData = async (): Promise<DataItem[] | null> => {
  try {
    const res = await axios.get(`${process.env.WEBSITE_URL}/api/data`);

    if (res) {
      const data = res.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default async function page() {
  const data = await getData();

  return (
    <section>
      <div className="mx-auto mt-32 flex max-w-fit flex-col items-center overflow-hidden">
        <AddData />
        <div className="mb-32 mt-2 grid items-start justify-center gap-2 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((data, i) => {
              return (
                <DataCard
                  key={i}
                  dataId={data.id}
                  dataName={data.name}
                  dataDescription={data.description}
                  dataCreatedDate={String(data.createdAt)}
                  dataUpdatedDate={String(data.updatedAt)}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
