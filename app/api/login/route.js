import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  return NextResponse.json({ email, password });
}
