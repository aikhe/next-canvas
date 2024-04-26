import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const cutie = await db.cutie.create({
      data: {
        name,
      },
    });

    return NextResponse.json(cutie);
  } catch (error) {
    console.log("COURSE_ERROR", error);
    return new Response("An error occurred", { status: 500 });
  }
}
