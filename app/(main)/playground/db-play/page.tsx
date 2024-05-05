import AddData from "@/components/add-data";
import DataCard from "@/components/data-card";
import { data } from "@/lib/data";

export default function page() {
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
                  dataName={data.Name}
                  dataDescription={data.Description}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
