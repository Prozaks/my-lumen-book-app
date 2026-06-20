"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewBookPage() {
  const [title, setTitle] = useState("My Brand New Novel");
  const [author, setAuthor] = useState("J. R. Author");
  const [category, setCategory] = useState("Fiction");
  const [price, setPrice] = useState("19.99");
  const [coverType, setCoverType] = useState<"ocean" | "red" | "yellow" | "desert" | "umbrella" | "portrait">("ocean");
  const [description, setDescription] = useState("A brief synopsis of the amazing storyline...");
  const [format, setFormat] = useState("Paperback");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  // Preview Cover Render
  const renderPreviewCover = () => {
    const textToShow = coverType === "red" || coverType === "yellow" ? "MY BOOK COVER" : title;
    switch (coverType) {
      case "ocean":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#e3f2fd] via-[#bbdefb] to-[#90caf9] p-6 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-md">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-zinc-900 to-black"></div>
            <div className="w-full h-0.5 bg-[#42a5f5] opacity-50"></div>
            <div className="z-10 mt-10">
              <h4 className="text-zinc-800 font-extrabold text-sm uppercase tracking-wider line-clamp-3 px-1 leading-snug">
                {title}
              </h4>
              <div className="w-8 h-0.5 bg-[#ff5a3c] mx-auto mt-3"></div>
            </div>
            <div className="z-10 mb-6">
              <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase block">
                {author}
              </span>
            </div>
          </div>
        );
      case "red":
        return (
          <div className="w-full h-full bg-[#ff5252] p-6 flex flex-col justify-between items-center text-center relative shadow-md text-white">
            <div className="w-full border border-white/20 h-full flex flex-col justify-between py-8 px-2">
              <div className="text-[10px] tracking-widest text-white/70 font-semibold uppercase">Novel</div>
              <h4 className="font-black text-lg tracking-tight leading-tight uppercase">
                {textToShow}
              </h4>
              <div className="text-[10px] text-white/80 font-medium">By {author}</div>
            </div>
          </div>
        );
      case "yellow":
        return (
          <div className="w-full h-full bg-[#ffd740] p-6 flex flex-col justify-between items-center text-center relative shadow-md text-zinc-900">
            <div className="w-full border border-zinc-900/10 h-full flex flex-col justify-between py-8 px-2">
              <div className="text-[10px] tracking-widest text-zinc-700 font-bold uppercase">Premium Edition</div>
              <h4 className="font-black text-base tracking-wide leading-tight uppercase text-zinc-800">
                {textToShow}
              </h4>
              <div className="text-[10px] text-zinc-800 font-bold">{author}</div>
            </div>
          </div>
        );
      case "desert":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#ffe0b2] via-[#ffcc80] to-[#ffa726] p-6 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-md">
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#fb8c00]/30 rounded-t-full transform scale-x-150 translate-y-8"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f57c00]/40 rounded-t-full transform scale-x-125 translate-y-4"></div>
            <h4 className="text-zinc-800 font-black text-sm uppercase tracking-wider z-10 mt-8 leading-snug">
              {title}
            </h4>
            <div className="mb-4 z-10">
              <span className="text-[10px] text-zinc-600 font-bold block">{author}</span>
            </div>
          </div>
        );
      case "umbrella":
        return (
          <div className="w-full h-full bg-[#1c2a38] p-6 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-md text-white">
            <div className="mt-8 z-10 space-y-1">
              <h4 className="font-extrabold text-xs uppercase tracking-widest text-[#ffa726]">THE</h4>
              <h4 className="font-black text-sm uppercase tracking-wide leading-tight line-clamp-3">
                {title.replace(/the\s+/gi, "")}
              </h4>
            </div>
            <div className="flex gap-1 justify-center z-10 mb-8">
              <div className="w-5 h-5 rounded-t-full bg-red-500"></div>
              <div className="w-5 h-5 rounded-t-full bg-yellow-400"></div>
              <div className="w-5 h-5 rounded-t-full bg-blue-500"></div>
              <div className="w-5 h-5 rounded-t-full bg-green-500"></div>
            </div>
            <div className="absolute bottom-3 text-[9px] text-zinc-400 tracking-wider font-semibold">
              {author}
            </div>
          </div>
        );
      case "portrait":
        return (
          <div className="w-full h-full bg-[#faf9f5] border border-zinc-200 p-6 flex flex-col justify-between items-center text-center relative shadow-md text-zinc-800">
            <div className="w-full border border-zinc-200 p-1.5 h-full flex flex-col justify-between">
              <div className="mt-3 text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Classic Series</div>
              <div className="w-20 h-24 border border-zinc-300 rounded-md mx-auto my-2 flex items-center justify-center bg-[#f0ede5] relative">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-500">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="mb-4">
                <h4 className="text-[11px] font-black text-zinc-800 uppercase tracking-tight leading-tight line-clamp-2">
                  {title}
                </h4>
                <span className="text-[9px] text-zinc-500 block font-bold mt-1">by {author}</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full flex-grow bg-zinc-50 font-sans py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Navigation Breadcrumb */}
        <nav className="flex text-xs font-semibold text-zinc-400 gap-1.5 items-center">
          <Link href="/" className="hover:text-[#ff5a3c]">Home</Link>
          <span>/</span>
          <Link href="/dashboard" className="hover:text-[#ff5a3c]">Dashboard</Link>
          <span>/</span>
          <span className="text-zinc-600">Add New Book</span>
        </nav>

        {/* Card Wrapper */}
        <div className="bg-white rounded-2xl border border-zinc-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-10">
          
          {/* Left Side: Live Preview (5 Columns) */}
          <div className="md:col-span-5 flex flex-col items-center gap-4 bg-zinc-50/50 p-6 rounded-xl border border-zinc-100">
            <h3 className="font-bold text-[#2b2d60] text-sm uppercase tracking-wider">Cover Live Preview</h3>
            
            {/* Mock Book Cover Box */}
            <div className="w-[210px] h-[290px] rounded-lg shadow-lg overflow-hidden relative">
              {renderPreviewCover()}
            </div>

            {/* Simulated Specs badge */}
            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-zinc-500 block uppercase tracking-wider">{category}</span>
              <span className="text-sm font-black text-[#ff5a3c]">${Number(price || 0).toFixed(2)}</span>
            </div>
          </div>

          {/* Right Side: Form (7 Columns) */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-[#2b2d60]">Book Details Form</h2>
              <p className="text-zinc-400 text-xs mt-0.5">Please provide exact values for catalog listing.</p>
            </div>

            {success ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#2b2d60]">Book Added Successfully</h3>
                <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                  "{title}" has been successfully added to the catalog inventory.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setTitle("Another Amazing Book");
                      setAuthor("S. R. Author");
                      setPrice("14.99");
                    }}
                    className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Add Another
                  </button>
                  <Link
                    href="/dashboard"
                    className="bg-[#2b2d60] hover:bg-[#1f2044] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg shadow transition-colors cursor-pointer"
                  >
                    Back to Inventory
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Title */}
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Book Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff5a3c]"
                    placeholder="Enter book title"
                  />
                </div>

                {/* Author */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Author Name</label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff5a3c]"
                    placeholder="e.g. Samil Harly"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff5a3c] bg-white cursor-pointer"
                  >
                    <option value="Fiction">Fiction</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Satire">Satire</option>
                  </select>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff5a3c]"
                    placeholder="e.g. 29.99"
                  />
                </div>

                {/* Cover Type */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Cover Style</label>
                  <select
                    value={coverType}
                    onChange={(e) => setCoverType(e.target.value as any)}
                    className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff5a3c] bg-white cursor-pointer"
                  >
                    <option value="ocean">Ocean (Blue Wave)</option>
                    <option value="red">Solid Red (My Book Cover)</option>
                    <option value="yellow">Solid Yellow (Your Simple Cover)</option>
                    <option value="desert">Desert Sands (Orange Dune)</option>
                    <option value="umbrella">Umbrellas (Dark Satire)</option>
                    <option value="portrait">Sketch Portrait (Cream Classic)</option>
                  </select>
                </div>

                {/* Format */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Format</label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff5a3c] bg-white cursor-pointer"
                  >
                    <option value="Paperback">Paperback</option>
                    <option value="Hardcover">Hardcover</option>
                  </select>
                </div>

                {/* Spacer */}
                <div className="hidden sm:block"></div>

                {/* Description */}
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Description / Synopsis</label>
                  <textarea
                    rows={4}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff5a3c]"
                    placeholder="Write a brief description..."
                  />
                </div>

                {/* Actions */}
                <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-4">
                  <Link
                    href="/dashboard"
                    className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors text-center"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="bg-[#ff5a3c] hover:bg-[#e04f32] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-colors text-center cursor-pointer"
                  >
                    Save & Publish
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
