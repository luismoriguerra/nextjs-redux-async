import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  return NextResponse.json([
    {
      name: name || "no search",
      id: 1,
    },
    {
      name: "pikachu",
      id: 2,
    },
    {
      name: "charmander",
      id: 3,
    },
  ]);
}
