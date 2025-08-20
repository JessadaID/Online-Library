// app/api/books/route.ts
import { NextResponse } from "next/server";
import  { dbConnect }  from "../../lib/db";
import { Book } from "../../model/Book";

export async function GET() {
  try {
    await dbConnect();
    const books = await Book.find({});
    return NextResponse.json(books);
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const newBook = await Book.create(data);
    return NextResponse.json(newBook, { status: 201 });
  } catch (error) {
    console.error("Failed to create book:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
