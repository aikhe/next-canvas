import AddCutie from "@/components/add-cutie";
import CutieCard from "@/components/cutie-card";

export default async function datatest() {
  return (
    <div className="flex h-[100vh] items-center justify-center overflow-hidden">
      <div className="flex max-w-64 flex-col gap-4 break-words">
        <AddCutie />
        <CutieCard />
      </div>
    </div>
  );
}
