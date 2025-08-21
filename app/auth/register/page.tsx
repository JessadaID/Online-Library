export default function Register() {
    return(
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">สมัครสมาชิก</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="กรุณากรอกอีเมล" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
                        <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="กรุณากรอกรหัสผ่าน" required />

                        <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700 mt-2">ยืนยันรหัสผ่าน</label>
                        <input type="password" id="password-confirm" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="กรุณากรอกรหัสผ่านอีกครั้ง" required />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">สมัครสมาชิก</button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">มีบัญชีอยู่แล้ว? <a href="/auth/login" className="text-blue-600 hover:underline">เข้าสู่ระบบ</a></p>
            </div>
        </div>
    )
}