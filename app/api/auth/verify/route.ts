
// app/api/auth/verify/route.ts (ไฟล์ใหม่ - สำหรับตรวจสอบ token)
import { NextRequest, NextResponse } from 'next/server';
import { User } from '../../../model/User';
import { dbConnect } from '../../../lib/db';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      { message: 'Token verification endpoint' },
      { status: 200 }
    );

  } catch (error) {
    console.error("Token verification error:", error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
