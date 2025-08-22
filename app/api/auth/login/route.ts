// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { User } from '../../../model/User';
import { dbConnect } from '../../../lib/db';
import bcrypt from 'bcrypt';

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
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // 2. ตรวจสอบรูปแบบ email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // 3. ค้นหาผู้ใช้จากฐานข้อมูล
    const userInDb = await User.findOne({ email });

    // 4. ตรวจสอบว่าพบผู้ใช้หรือไม่ และเปรียบเทียบรหัสผ่าน
    // bcrypt.compare() จะทำการแฮช password ที่ไม่ได้แฮช จากนั้นจึงนำไปเปรียบเทียบกับ userInDb.password
    // หากไม่พบผู้ใช้ (userInDb เป็น null) หรือรหัสผ่านไม่ตรงกัน จะ return ข้อผิดพลาดเดียวกันเพื่อเพิ่มความปลอดภัย (ป้องกันการรั่วไหลของข้อมูล)
    if (!userInDb || !(await bcrypt.compare(password, userInDb.password))) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // 5. หากทุกอย่างถูกต้อง, ส่ง response สำเร็จ
    return NextResponse.json(
      { message: 'Login successful', userId: userInDb._id },
      { status: 200 }
    );

  } catch (error) {
    console.error("Login error:", error);
    // ส่งข้อความผิดพลาดที่ไม่ได้เปิดเผยข้อมูลเฉพาะเจาะจงของเซิร์ฟเวอร์
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}