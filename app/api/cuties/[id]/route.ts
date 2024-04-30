import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Console } from "console";

export async function PUT(request: any, { params }: { params: any }) {
  try {
    const { id } = params.id;
    const { newName: name } = await request.json();
    const cutie = await db.cutie.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    console.log(cutie);
    return NextResponse.json({ cutie }, { status: 200 });
  } catch (error) {}
}

// export async function GET(request: any, { params }: { params: any }) {
//   try {
//     const { id } = params.id;
//     const cutie = await db.cutie.findUnique({
//       where: {
//         id,
//       },
//     });

//     return NextResponse.json({ cutie }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//   }
// }
