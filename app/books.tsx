// app/books/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">📚 Book List</h1>
      <ul className="mt-4 space-y-2">
        {books.map((book) => (
          <li key={book._id} className="border p-3 rounded">
            <strong>{book.title}</strong> by {book.author} ({book.stock} left)
          </li>
        ))}
      </ul>
    </div>
  );
}
