import Image from "next/image";

export default function page() {
  return (
    <div className="flex h-[100vh] items-center justify-center overflow-hidden">
      <Image src="/spiral.jpg" alt="" width={300} height={300} />
    </div>
  );
}
