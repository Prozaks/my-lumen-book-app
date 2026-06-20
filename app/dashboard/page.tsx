"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Book } from "@/app/data/books";

export default function DashboardPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load books for dashboard", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this book?")) {
      setBooks((prev) => prev.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="w-full flex-grow bg-zinc-50 font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#2b2d60] tracking-tight">Admin Dashboard</h1>
            <p className="text-zinc-500 text-sm mt-1">Manage bookstore inventory, track metrics, and add new publications.</p>
          </div>
          <Link
            href="/dashboard/new"
            className="inline-flex items-center gap-2 bg-[#ff5a3c] hover:bg-[#e04f32] text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all self-start sm:self-center cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add New Book
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Total Books</span>
              <h3 className="text-2xl font-black text-[#2b2d60]">{loading ? "..." : books.length}</h3>
            </div>
            <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Average Price</span>
              <h3 className="text-2xl font-black text-[#2b2d60]">
                {loading ? "..." : `$${(books.reduce((acc, curr) => acc + curr.price, 0) / (books.length || 1)).toFixed(2)}`}
              </h3>
            </div>
            <div className="w-12 h-12 bg-[#fff4f2] text-[#ff5a3c] rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.752-.376a3.793 3.793 0 0 1 4.496 0l.752.376M3 5.682A4.01 4.01 0 0 1 6.837 3.5h10.326c1.9 0 3.522 1.325 3.837 3.182l1.37 8.216a3.83 3.83 0 0 1-3.837 4.602H6.837a3.83 3.83 0 0 1-3.837-4.602L3 5.682Z" />
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Average Rating</span>
              <h3 className="text-2xl font-black text-[#2b2d60]">
                {loading ? "..." : (books.reduce((acc, curr) => acc + curr.rating, 0) / (books.length || 1)).toFixed(1)}
              </h3>
            </div>
            <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.195-.558.983-.558 1.178 0l2.198 6.273a.75.75 0 0 0 .717.537h6.6a.75.75 0 0 1 .44 1.355l-5.34 3.88a.75.75 0 0 0-.272.837l2.198 6.273a.75.75 0 0 1-.872.873l-5.34-3.88a.75.75 0 0 0-.872 0l-5.34 3.88a.75.75 0 0 1-.87-.872l2.199-6.273a.75.75 0 0 0-.273-.838l-5.34-3.882a.75.75 0 0 1 .44-1.354h6.6a.75.75 0 0 0 .718-.538l2.2-6.274Z" />
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Out of Stock</span>
              <h3 className="text-2xl font-black text-[#2b2d60]">{loading ? "..." : books.filter((b) => b.availability !== "In Stock").length}</h3>
            </div>
            <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Inventory Table Container */}
        <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between">
            <h2 className="font-bold text-[#2b2d60] text-lg">Book Inventory</h2>
            <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {books.length} Items
            </span>
          </div>

          {loading ? (
            <div className="py-20 text-center text-zinc-400 font-medium">Loading catalog table...</div>
          ) : books.length === 0 ? (
            <div className="py-20 text-center text-zinc-400 font-medium">Inventory is empty. Add some books!</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                    <th className="py-4 px-6">Book Cover</th>
                    <th className="py-4 px-6">Title</th>
                    <th className="py-4 px-6">Author</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Price</th>
                    <th className="py-4 px-6">Rating</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-sm text-zinc-600">
                  {books.map((book) => (
                    <tr key={book.id} className="hover:bg-zinc-50/50 transition-colors">
                      {/* Cover Thumbnail */}
                      <td className="py-4 px-6">
                        <div className="w-9 h-12 bg-zinc-100 rounded shadow-sm border border-zinc-200 overflow-hidden flex items-center justify-center flex-shrink-0 text-[6px] text-center font-bold px-1 uppercase text-zinc-400">
                          {book.title}
                        </div>
                      </td>
                      {/* Title */}
                      <td className="py-4 px-6 font-bold text-[#2b2d60]">
                        <Link href={`/books/${book.slug}`} className="hover:text-[#ff5a3c] transition-colors line-clamp-1">
                          {book.title}
                        </Link>
                      </td>
                      {/* Author */}
                      <td className="py-4 px-6 font-medium">{book.author}</td>
                      {/* Category */}
                      <td className="py-4 px-6">
                        <span className="bg-zinc-100 text-zinc-600 text-xs font-semibold px-2 py-0.5 rounded">
                          {book.category}
                        </span>
                      </td>
                      {/* Price */}
                      <td className="py-4 px-6 font-black text-[#ff5a3c]">${book.price.toFixed(2)}</td>
                      {/* Rating */}
                      <td className="py-4 px-6 font-semibold">{book.rating.toFixed(1)} / 5.0</td>
                      {/* Action buttons */}
                      <td className="py-4 px-6 text-right space-x-2">
                        <Link
                          href={`/books/${book.slug}`}
                          className="inline-flex items-center justify-center p-1.5 text-indigo-500 hover:bg-indigo-50 rounded transition-colors"
                          title="View Page"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </Link>
                        <button
                          onClick={() => handleDelete(book.id)}
                          className="inline-flex items-center justify-center p-1.5 text-rose-500 hover:bg-rose-50 rounded transition-colors cursor-pointer"
                          title="Delete Book"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
