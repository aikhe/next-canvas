import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    console.log(name);
    await db.cutie.create({
      data: {
        name,
      },
    });

    return NextResponse.json({ message: "Name Created" }, { status: 201 });
  } catch (error) {
    console.log("POST_ERROR", error);
    return new Response("An error occurred", { status: 500 });
  }
}

export async function DELETE(req: any) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    console.log(id);
    const cutie = await db.cutie.delete({
      where: { id },
    });

    console.log(cutie);
    return NextResponse.json({ message: "Name Deleted" }, { status: 201 });
  } catch (error) {
    console.log("DELETION_ERROR", error);
    return new Response("An error occurred", { status: 500 });
  }
}
