// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    console.log("Received login request:", { email, password });
    /*
    // ตรวจสอบ credentials
    const user = await authenticateUser(email, password);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // สร้าง token หรือ session
    const token = generateToken(user);
    
    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });*/
    return NextResponse.json({ message: 'Login successful' });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// สามารถเพิ่ม HTTP methods อื่นได้
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Login endpoint' });
}