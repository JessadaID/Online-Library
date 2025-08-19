import mongoose, { Schema, model, models } from "mongoose";

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: String,
    isbn: String,
    stock: { type: Number, default: 0 },
    coverUrl: String,
  },
  { 
    collection: "Books",
    timestamps: true 
  }
);

export const Book = models.Book || model("Book", BookSchema);
