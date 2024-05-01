import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PUT(request: any, { params }: { params: any }) {
  try {
    const { id } = params;
    const newName = await request.json();
    const cutie = await db.cutie.update({
      where: {
        id,
      },
      data: {
        name: newName.name,
      },
    });

    return NextResponse.json({ data: cutie }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request: any, { params }: { params: any }) {
  try {
    const { id } = params;
    const cutie = await db.cutie.findFirst({
      where: {
        id,
      },
    });

    return NextResponse.json({ cutie }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
