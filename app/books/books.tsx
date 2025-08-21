// app/books/page.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BooksPage() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    void fetchBook();
  }, []);

  async function fetchBook() {
    const response = await fetch("/api/books");
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();
    console.log("Fetched books:", data);
    setBooks(data);  
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">รายการหนังสือ</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {books.map((book) => (
            <li key={book._id} className="bg-white rounded-lg shadow-md overflow-hidden ">
              <div className="w-full flex justify-center py-3">
                <img src={book.coverUrl} alt={book.title} className="h-64 object-cover hover:scale-105 transition-all" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
                {/*<p className="text-gray-600 mb-2">Author: {book.author}</p>*/}
                <p className="text-gray-600 mb-2">หมวดหมู่ : {book.category}</p>
                {/*<p className="text-gray-600 mb-2">ISBN: {book.isbn}</p>*/}
                <p className="text-gray-700">จำนวน : คงเหลือ {book.stock} </p>

                <Link href={`/books/${book._id}`} ><button className="bg-emerald-600 w-full py-2 hover:bg-emerald-700 text-white mt-2">ดูรายละเอียด</button></Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );


}
