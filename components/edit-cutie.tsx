"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EditCutie({ id, name }: { id: any; name: any }) {
  const [newName, setNewName] = useState(name);

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/cuties/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: newName }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        type="text"
        placeholder="hjkl"
      />
      <button className="float-end my-2">Save</button>
    </form>
  );
}
