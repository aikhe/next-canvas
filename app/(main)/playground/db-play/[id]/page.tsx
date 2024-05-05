"use client";

import DataForm from "@/components/data-form";

export default function page() {
  return (
    <div className="absolute grid h-full w-full items-center justify-center">
      <DataForm toggleModal={() => console.log("lulumi")} />
    </div>
  );
}
