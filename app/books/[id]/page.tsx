"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BooksDetail({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    void fetchBook();
  }, []);

  async function fetchBook() {
    const response = await fetch(`/api/books/${params.id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch book details");
    }
    const data = await response.json();
    setBook(data);
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">รายละเอียดหนังสือ {params.id}</h1>
      {/* Here you can fetch and display the book details based on params.id */}
      <p>รายละเอียดหนังสือจะถูกแสดงที่นี่</p>
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
