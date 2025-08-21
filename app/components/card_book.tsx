"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function CardBook() {
  const [books, setBooks] = useState<any[]>([]);

  async function fetchBooks() {
    try {
      const response = await fetch("/api/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  useEffect(() => {
    void fetchBooks();
  }, []);
  return (
    <>
      <h2 className="text-center text-xl font-semibold mb-4">หนังสือแนะนำ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ตัวอย่างการ์ดหนังสือ */}
        {books && books.length > 0 ? (
          books.map((book) => (
            <div className="rounded-lg shadow-md p-4 flex" key={book._id}>
              <img
                src={book.coverUrl}
                alt={book.title}
                className="h-64 object-cover"
                loading="lazy"
              />
              <div className="ml-4 relative">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <h3 className="text-gray-600">ผู้เขียน : {book.author}</h3>
                <p className="text-gray-600">หมวดหมู่: {book.category}</p>
                <p className="text-gray-600">จำนวนคงเหลือ: {book.stock}</p>
                <Link
                  href={`/books/${book._id}`}
                  className="text-blue-500 bg-blue-100 hover:bg-blue-200 hover:underline absolute bottom-0 right-0 px-2 py-1 rounded"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">ไม่มีหนังสือแนะนำในขณะนี้</p>
        )}
        {/* เพิ่มการ์ดหนังสือเพิ่มเติมที่นี่ */}
      </div>
    </>
  );
}
