"use client";
import { motion } from "framer-motion";

export default function Playground() {
  return (
    <div className="flex h-[100svh] items-center justify-center">
      <motion.div
        className="sm:[8rem] size-[10rem] bg-zinc-300"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}
