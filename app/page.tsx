"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { CardBook } from "./components/card_book";
import { Poppular } from "./components/poppular";
const categorys = [
  { name: "หนังสือทั้งหมด", path: "/books" },
  { name: "นิยาย", path: "/books?category=fiction" },
  { name: "สารคดี", path: "/books?category=non-fiction" },
  { name: "วิทยาศาสตร์", path: "/books?category=science" },
  { name: "ประวัติศาสตร์", path: "/books?category=history" },
];

export default function Home() {
  return (
    <div className="p-6 h-min-screen">
      <section className="flex justify-center items-center">
        <input
          type="text"
          id="search"
          className="bg-slate-100 min-w-2xl py-2 px-2 focus:outline-none shadow-md"
          placeholder="ค้นหาหนังสือที่คุณต้องการ"
        />
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 shadow-md">
          <Search />
        </button>
      </section>

      <section className=" mt-8 max-w-6xl mx-auto pb-4 border-b-2 border-slate-200">
        <h1 className="text-center text-2xl font-bold pb-4">หมวดหมู่หนังสือ</h1>
        <div className="flex justify-center space-x-4">
          {categorys.map((category) => (
            <Link
              key={category.name}
              href={category.path}
              className="hover:underline text-lg"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      {/*
      <section>
        <Link href="/books" className="text-blue-500 hover:underline mt-4">ดูรายละเอียดหนังสือ</Link>
      </section>
      */}

      <section
        id="card-books"
        className="mt-8 max-w-6xl mx-auto border-b-2 border-slate-200 pb-8"
      >
        <CardBook />
      </section>

      <section className="mt-8 max-w-6xl mx-auto">
        <Poppular />
      </section>
    </div>
  );
}
