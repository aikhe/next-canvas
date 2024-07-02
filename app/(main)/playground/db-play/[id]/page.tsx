import DataForm from "@/components/data-form";
import { DataItem } from "@/types/data";
import axios from "axios";

const getData = async (id: string): Promise<DataItem | null> => {
  try {
    const res = await axios.get(`${process.env.WEBSITE_URL}/api/data/${id}`);

    if (res) {
      const data = res.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default async function page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  return (
    <div className="absolute grid h-full w-full items-center justify-center">
      {data && (
        <DataForm
          id={data.id}
          name={data.name}
          description={data.description}
          request="PUT"
        />
      )}
    </div>
  );
}
