import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  try {
    const data = await prisma.data.findUnique({
      where: {
        id,
      },
    });

    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Couldn't fetch data" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { name, description } = await req.json();
  const id = params.id;

  try {
    const data = await prisma.data.update({
      where: {
        id,
      },
      data: {
        name,
        description,
      },
    });

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Couldn't edit data" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  try {
    const data = await prisma.data.delete({
      where: {
        id,
      },
    });

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error deleting data" },
      { status: 500 },
    );
  }
}
