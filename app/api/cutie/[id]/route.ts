import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function DELETE(request: any, { params }: { params: any }) {
  try {
    // console.log(request);
    const id = params.id;

    const cutie = await db.cutie.delete({
      where: { id },
    });

    return NextResponse.json(cutie);
  } catch (error) {
    console.log(error);
  }
}
