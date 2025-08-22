import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../model/User";
import { dbConnect } from "../../../lib/db";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { name, email, password, passwordConfirm } = await request.json();

    if (!email || !password || !name || !passwordConfirm) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (password !== passwordConfirm) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    User.findOne({ email }).then(async (existingUser) => {
      if (existingUser) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 409 }
        );
      }
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "user", // Default role
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
  }
}
