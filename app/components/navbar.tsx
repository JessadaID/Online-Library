import Link from 'next/link';

export async function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <Link href="/" className="text-white text-lg font-semibold">
                Online Library
            </Link>
        </div>
        <div className="flex space-x-4">
            <Link href="/auth/login" className="text-gray-300 hover:text-white">เข้าสู่ระบบ</Link>
            <Link href="/auth/register" className="text-gray-300 hover:text-white">สมัครสมาชิก</Link>
        </div>
      </div>
    </nav>
  );
}