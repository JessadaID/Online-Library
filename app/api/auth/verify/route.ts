
// app/api/auth/verify/route.ts (ไฟล์ใหม่ - สำหรับตรวจสอบ token)
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { User } from '../../../model/User';
import { dbConnect } from '../../../lib/db';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '') || request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    const JWT_SECRET = process.env.JWT_SECRET || 'your-fallback-secret-key';
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      
      await dbConnect();
      const user = await User.findById(decoded.userId).select('-password');
      
      if (!user) {
        return NextResponse.json(
          { error: 'User not found' },
          { status: 401 }
        );
      }

      return NextResponse.json({
        valid: true,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar || null,
          role: user.role || 'user'
        }
      });

    } catch (jwtError) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error("Token verification error:", error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
