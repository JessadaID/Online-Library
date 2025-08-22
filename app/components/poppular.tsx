export function Poppular() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-slate-200 col-span-1 row-span-2  p-4 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold">หนังสือยอดนิยม</h1>
        <p>หนังสือที่ได้รับความนิยมสูงสุดในขณะนี้</p>
        {/* You can add a component or list for popular books here */}
        <ul className="list-decimal pl-5 mt-2">
          <li>หนังสือ A</li>
          <li>หนังสือ B</li>
          <li>หนังสือ C</li>
          <li>หนังสือ D</li>
          <li>หนังสือ E</li>
        </ul>
      </div>

      <div className="bg-teal-500 grid place-items-center p-4 col-span-1">
        <p className="font-semibold text-lg text-white">ยืมหนังสือ</p>
      </div>

      <div className="bg-amber-400 grid place-items-center p-4 col-span-1">
        <p className="font-semibold text-lg text-white">หนังสือใหม่ล่าสุด</p>
      </div>

      <div className="bg-rose-500 grid place-items-center p-4 col-span-1">
        <p className="font-semibold text-lg text-white">ยืม–คืนหนังสือ</p>
      </div>

      <div className="bg-green-500 grid place-items-center p-4 col-span-1">
        <p className="font-semibold text-lg text-white">เข้าสู่ระบบ / สมัครสมาชิก</p>
      </div>
    </div>
  );
}
