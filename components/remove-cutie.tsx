"use client";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ cutieId }: { cutieId: any }) {
  const router = useRouter();

  async function deleteCutie() {
    try {
      await fetch(`/api/cuties?id=${cutieId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return <button onClick={deleteCutie}>Delete</button>;
}
