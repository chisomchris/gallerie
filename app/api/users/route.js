import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "email and password are required" },
        { status: 400 }
      );
    }
    await connectDB();
    const duplicate = await User.findOne({ email }).exec();
    if (duplicate) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 209 }
      );
    }
    const user = await User.create({ email, password });
    return NextResponse.json({ email }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
