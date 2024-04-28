"use client";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ cutieId }: { cutieId: any }) {
  const router = useRouter();

  async function deleteCutie() {
    try {
      await fetch(`/api/cutie/${cutieId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return <button onClick={deleteCutie}>Delete Cutie</button>;
}
