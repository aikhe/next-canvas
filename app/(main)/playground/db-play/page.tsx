import AddData from "@/components/add-data";
import DataCard from "@/components/data-card";

const data = [
  {
    Name: "Lumi",
    Description:
      "next-js boilerplate that will surely compliment my workflow, right?...",
  },
  {
    Name: "maomi",
    Description:
      "next-js boilerplate that will surely compliment my workflow, right?...",
  },
  {
    Name: "Ike",
    Description:
      "next-js boilerplate that will surely compliment my workflow, right?...",
  },
  {
    Name: "Leo",
    Description:
      "next-js boilerplate that will surely compliment my workflow, right?...",
  },
];

export default function page() {
  return (
    <section>
      <div className="flex mt-32 max-w-fit mx-auto flex-col items-center overflow-hidden">
        <AddData />
        <div className="mt-2 grid md:grid-cols-2 gap-2 items-center justify-center lg:grid-cols-3">
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
