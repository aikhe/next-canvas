"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Backdrop from "./ui/backdrop";
import DataForm from "./data-form";
import { PencilLine, UserPlus } from "lucide-react";

export default function AddData() {
  const [modal, toggleModal] = useState(false);

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <h1 className=" flex items-center gap-1 text-lg font-black md:text-2xl">
          CRUD prototype
          <PencilLine className="size-5 md:size-6" />
        </h1>
        <Button
          onClick={() => {
            toggleModal(!modal);
          }}
        >
          <UserPlus className="h-5 w-5" />
        </Button>
      </div>
      {modal && (
        <Backdrop
          onClick={() => {
            toggleModal(!modal);
          }}
        >
          <DataForm toggleModal={() => toggleModal(!modal)} />
        </Backdrop>
      )}
    </>
  );
}
