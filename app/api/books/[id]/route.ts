import { NextResponse } from "next/server";
import  { dbConnect }  from "../../../lib/db";
import { Book } from "../../../model/Book";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const bookId = params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }
    return NextResponse.json(book);
  } catch (error) {
    console.error("Failed to fetch book:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}