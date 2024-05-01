"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ cutieId }: { cutieId: any }) {
  const router = useRouter();

  async function deleteCutie() {
    try {
      await axios.delete(`/api/cuties?id=${cutieId}`);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return <button onClick={deleteCutie}>Delete</button>;
}
