import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET() {
  try {
    const data = await prisma.data.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });

    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  const { name, description } = await req.json();

  try {
    const data = await prisma.data.create({
      data: {
        name,
        description,
      },
    });

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log("POST_ERROR", error);
    return NextResponse.json(
      { message: "Couldn't create data" },
      { status: 500 },
    );
  }
}
