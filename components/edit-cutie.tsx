"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

export default function EditCutie({ id, name }: { id: any; name: any }) {
  const [newName, setNewName] = useState(name);
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/cuties/${id}`, {
        name: newName,
      });

      if (!response) {
        throw new Error("Failed to update topic");
      }

      router.push("/playground/db-play");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          placeholder="Cutie Name"
        />
        <Button className="float-end my-2">Save</Button>
      </form>
    </>
  );
}
