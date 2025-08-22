// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../model/User";
import { dbConnect } from "../../../lib/db";
import bcrypt from "bcrypt";
/**
 * Handles user login requests.
 * @param request The incoming Next.js request.
 * @returns A JSON response indicating the login status.
 */
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    await dbConnect();

    // 1. ตรวจสอบ input validation: ตรวจสอบว่ามีอีเมลและรหัสผ่านหรือไม่
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // 2. ตรวจสอบรูปแบบ email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // 3. ค้นหาผู้ใช้จากฐานข้อมูล
    const userInDb = await User.findOne({ email }).select("+password");

    // 4. ตรวจสอบว่าพบผู้ใช้หรือไม่ และเปรียบเทียบรหัสผ่าน
    if (!userInDb || !(await bcrypt.compare(password, userInDb.password))) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 6. เตรียมข้อมูล user ที่จะส่งกลับ (ไม่รวม password)
    const userData = {
      id: userInDb._id,
      name: userInDb.name,
      email: userInDb.email,
      //avatar: userInDb.avatar || null,
      role: userInDb.role || "user",
      //token: token
    };

    // 7. ตั้งค่า HTTP-only cookie (optional - สำหรับความปลอดภัยเพิ่ม)
    const response = NextResponse.json(
      {
        message: "Login successful",
        user: userData,
      },
      { status: 200 }
    );

    // ตั้งค่า cookie
    /*
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 วัน
    });*/

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
