export function Poppular() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-red-200 col-span-1 sm:col-span-2 lg:col-span-1 mt-4 p-4">
        <h1 className="text-2xl font-bold mb-4">หนังสือยอดนิยม</h1>
        <p>หนังสือที่ได้รับความนิยมสูงสุดในขณะนี้</p>
        {/* You can add a component or list for popular books here */}
        <ul>
          <li>หนังสือ A</li>
          <li>หนังสือ B</li>
          <li>หนังสือ C</li>
          <li>หนังสือ D</li>
        </ul>
      </div>

      <div className="bg-blue-200 mt-4 p-4 col-span-1 sm:col-span-2 lg:col-span-2">
        {/* Card Borrow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">หนังสือที่ 1</h2>
            <p>รายละเอียดหนังสือที่ 1</p>
            <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
              ยืมหนังสือ
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">หนังสือที่ 2</h2>
            <p>รายละเอียดหนังสือที่ 2</p>
            <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
              ยืมหนังสือ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
