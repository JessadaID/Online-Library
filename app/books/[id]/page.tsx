"use client";
import { use, useEffect, useState } from "react";
import Link from "next/link";

export default function BooksDetail({ params }: { params: Promise<{ id: string }> }) {
  // 🔹 ใช้ React.use() แกะ Promise ของ params
  const { id } = use(params);

  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    void fetchBook();
  }, [id]);

  async function fetchBook() {
    const response = await fetch(`/api/books/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch book details");
    }
    const data = await response.json();
    setBook(data);
  }

  return (
    <div className="p-6">
      <Link href={"/books"}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4">ย้อนกลับ</button></Link>
      {/*<h1 className="text-2xl font-bold mb-4">รายละเอียดหนังสือ {id}</h1>*/}
      {book ? (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
          <p className="text-gray-600 mb-2">หมวดหมู่: {book.category}</p>
          <p className="text-gray-600 mb-2">จำนวนคงเหลือ: {book.stock}</p>
          <img
            src={book.coverUrl}
            alt={book.title}
            className="h-64 object-cover mb-4"
          />
          <p className="text-gray-600">{book.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
