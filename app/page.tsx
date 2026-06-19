"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { initialBooks, Book } from "@/app/data/books";

export default function CatalogPage() {
  // Filters State
  const [minPrice, setMinPrice] = useState<string>("10");
  const [maxPrice, setMaxPrice] = useState<string>("50");
  const [appliedMinPrice, setAppliedMinPrice] = useState<number>(10);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState<number>(50);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Sorting State
  const [sortBy, setSortBy] = useState<string>("alphabetical-az");
  const [pageSize, setPageSize] = useState<number>(12);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Accordion Collapse States
  const [openSections, setOpenSections] = useState({
    price: true,
    type: true,
    availability: true,
    brand: true,
    color: true,
    material: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Filter Logic
  const handleFilterClick = () => {
    setAppliedMinPrice(Number(minPrice) || 0);
    setAppliedMaxPrice(Number(maxPrice) || Infinity);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Filtered & Sorted Books
  const filteredBooks = useMemo(() => {
    return initialBooks.filter((book) => {
      // Price Filter
      if (book.price < appliedMinPrice || book.price > appliedMaxPrice) {
        return false;
      }
      // Brand/Publisher Filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(book.brand)) {
        return false;
      }
      return true;
    });
  }, [appliedMinPrice, appliedMaxPrice, selectedBrands]);

  const sortedBooks = useMemo(() => {
    const booksCopy = [...filteredBooks];
    if (sortBy === "alphabetical-az") {
      return booksCopy.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "alphabetical-za") {
      return booksCopy.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "price-low-high") {
      return booksCopy.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      return booksCopy.sort((a, b) => b.price - a.price);
    }
    return booksCopy;
  }, [filteredBooks, sortBy]);

  // Book Cover Render Helper
  const renderBookCover = (book: Book) => {
    switch (book.coverType) {
      case "ocean":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#e3f2fd] via-[#bbdefb] to-[#90caf9] p-4 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-zinc-900 to-black"></div>
            <div className="w-full h-0.5 bg-[#42a5f5] mt-2 opacity-50"></div>
            <div className="z-10 mt-6">
              <h4 className="text-zinc-800 font-bold text-xs uppercase tracking-wider line-clamp-2 px-1">
                {book.coverText}
              </h4>
              <div className="w-6 h-0.5 bg-[#ff5a3c] mx-auto mt-2"></div>
            </div>
            <div className="z-10 mb-4">
              <span className="text-[9px] text-zinc-500 font-semibold tracking-widest uppercase">
                {book.author}
              </span>
            </div>
          </div>
        );
      case "red":
        return (
          <div className="w-full h-full bg-[#ff5252] p-4 flex flex-col justify-between items-center text-center relative shadow-inner text-white">
            <div className="w-full border border-white/20 h-full flex flex-col justify-between py-6 px-2">
              <div className="text-[9px] tracking-widest text-white/70 font-semibold uppercase">
                Novel
              </div>
              <h4 className="font-extrabold text-base tracking-tight leading-tight uppercase">
                {book.coverText}
              </h4>
              <div className="text-[9px] text-white/80 font-medium">
                By {book.author}
              </div>
            </div>
          </div>
        );
      case "yellow":
        return (
          <div className="w-full h-full bg-[#ffd740] p-4 flex flex-col justify-between items-center text-center relative shadow-inner text-zinc-900">
            <div className="w-full border border-zinc-900/10 h-full flex flex-col justify-between py-6 px-2">
              <div className="text-[9px] tracking-widest text-zinc-700 font-bold uppercase">
                Premium Edition
              </div>
              <h4 className="font-black text-sm tracking-wide leading-tight uppercase text-zinc-800">
                {book.coverText}
              </h4>
              <div className="text-[9px] text-zinc-800 font-semibold">
                {book.author}
              </div>
            </div>
          </div>
        );
      case "desert":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#ffe0b2] via-[#ffcc80] to-[#ffa726] p-4 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-inner">
            {/* Dune curved vectors */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#fb8c00]/30 rounded-t-full transform scale-x-150 translate-y-6"></div>
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#f57c00]/40 rounded-t-full transform scale-x-125 translate-y-3"></div>
            {/* Hiker Silhouette */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-70">
              <svg width="24" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="6" r="3" fill="#5d4037" />
                <path d="M12 9L9 16H11V23H13V16H15L12 9Z" fill="#5d4037" />
                <line x1="8" y1="13" x2="16" y2="21" stroke="#5d4037" strokeWidth="1.5" />
              </svg>
            </div>
            <h4 className="text-zinc-800 font-bold text-xs uppercase tracking-wider z-10 mt-4 leading-tight">
              {book.coverText}
            </h4>
            <div className="mb-2 z-10">
              <span className="text-[9px] text-zinc-600 font-semibold block">{book.author}</span>
            </div>
          </div>
        );
      case "umbrella":
        return (
          <div className="w-full h-full bg-[#1c2a38] p-4 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-inner text-white">
            <div className="mt-4 z-10">
              <h4 className="font-extrabold text-xs uppercase tracking-widest text-[#ffa726] leading-tight mb-1">
                The
              </h4>
              <h4 className="font-black text-sm uppercase tracking-wide leading-tight text-white">
                Hypocrite
              </h4>
              <h4 className="font-black text-sm uppercase tracking-wide leading-tight text-white">
                World
              </h4>
            </div>
            {/* Colorful Umbrellas Mock */}
            <div className="flex gap-1 justify-center z-10 mb-4">
              <div className="w-4 h-4 rounded-t-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-t-full bg-yellow-400"></div>
              <div className="w-4 h-4 rounded-t-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-t-full bg-green-500"></div>
            </div>
            <div className="absolute bottom-2 text-[8px] text-zinc-400 tracking-wider">
              {book.author}
            </div>
          </div>
        );
      case "portrait":
        return (
          <div className="w-full h-full bg-[#faf9f5] border border-zinc-200 p-4 flex flex-col justify-between items-center text-center relative shadow-inner text-zinc-800">
            <div className="w-full border border-zinc-200 p-1 h-full flex flex-col justify-between">
              <div className="mt-2 text-[8px] uppercase tracking-wider text-zinc-500">Classic Series</div>
              {/* Sketch silhouette */}
              <div className="w-16 h-20 border border-zinc-300 rounded-md mx-auto my-1 flex items-center justify-center bg-[#f0ede5] relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-500">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="mb-2">
                <h4 className="text-[10px] font-bold text-zinc-800 uppercase tracking-tight leading-tight">
                  {book.title}
                </h4>
                <span className="text-[8px] text-zinc-500 block">by {book.author}</span>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-zinc-200 flex items-center justify-center p-4">
            <span className="text-sm font-semibold">{book.title}</span>
          </div>
        );
    }
  };

  return (
    <div className="w-full flex-grow bg-white font-sans">
      {/* 1. Breadcrumbs Banner with coral gradient */}
      <div className="w-full bg-[#fff4f2] border-b border-[#ffe8e4] py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-1.5 text-xs font-bold tracking-widest text-[#2b2d60]">
          <Link href="/" className="hover:text-[#ff5a3c] transition-colors">HOME</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-[#ff5a3c]">PRODUCTS</span>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* 2. Left Sidebar Filter (1 Column) */}
          <aside className="space-y-6">
            
            {/* Price Accordion */}
            <div className="border-b border-zinc-100 pb-5">
              <button
                onClick={() => toggleSection("price")}
                className="flex items-center justify-between w-full text-left font-bold text-sm text-[#2b2d60] mb-4 group"
              >
                <span>Price</span>
                <span className="text-zinc-400 group-hover:text-[#ff5a3c] transition-colors text-lg">
                  {openSections.price ? "−" : "+"}
                </span>
              </button>
              
              {openSections.price && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-zinc-500">$</span>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full border border-zinc-200 rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-[#ff5a3c]"
                      placeholder="10"
                    />
                    <span className="text-sm text-zinc-400">to</span>
                    <span className="text-sm text-zinc-500">$</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full border border-zinc-200 rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-[#ff5a3c]"
                      placeholder="50"
                    />
                  </div>
                  <button
                    onClick={handleFilterClick}
                    className="w-full bg-[#2b2d60] hover:bg-[#1f2044] text-white py-2 rounded-md font-semibold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
                  >
                    Filter
                  </button>
                </div>
              )}
            </div>

            {/* Product type Accordion */}
            <div className="border-b border-zinc-100 pb-5">
              <button
                onClick={() => toggleSection("type")}
                className="flex items-center justify-between w-full text-left font-bold text-sm text-[#2b2d60] mb-3 group"
              >
                <span>Product type</span>
                <span className="text-zinc-400 group-hover:text-[#ff5a3c] transition-colors text-lg">
                  {openSections.type ? "−" : "+"}
                </span>
              </button>
              {openSections.type && (
                <div className="space-y-2">
                  {["Fiction", "Adventure", "Philosophy", "Satire"].map((type) => (
                    <label key={type} className="flex items-center gap-2.5 text-sm text-zinc-600 hover:text-zinc-900 cursor-pointer">
                      <input type="checkbox" className="rounded border-zinc-300 text-[#ff5a3c] focus:ring-[#ff5a3c]" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Availability Accordion */}
            <div className="border-b border-zinc-100 pb-5">
              <button
                onClick={() => toggleSection("availability")}
                className="flex items-center justify-between w-full text-left font-bold text-sm text-[#2b2d60] mb-3 group"
              >
                <span>Availability</span>
                <span className="text-zinc-400 group-hover:text-[#ff5a3c] transition-colors text-lg">
                  {openSections.availability ? "−" : "+"}
                </span>
              </button>
              {openSections.availability && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 text-sm text-zinc-600 hover:text-zinc-900 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-zinc-300 text-[#ff5a3c] focus:ring-[#ff5a3c]" />
                    <span>In Stock</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-sm text-zinc-600 hover:text-zinc-900 cursor-pointer">
                    <input type="checkbox" className="rounded border-zinc-300 text-[#ff5a3c] focus:ring-[#ff5a3c]" />
                    <span>Out of Stock</span>
                  </label>
                </div>
              )}
            </div>

            {/* Brand Accordion (Publisher) */}
            <div className="border-b border-zinc-100 pb-5">
              <button
                onClick={() => toggleSection("brand")}
                className="flex items-center justify-between w-full text-left font-bold text-sm text-[#2b2d60] mb-3 group"
              >
                <span>Brand</span>
                <span className="text-zinc-400 group-hover:text-[#ff5a3c] transition-colors text-lg">
                  {openSections.brand ? "−" : "+"}
                </span>
              </button>
              {openSections.brand && (
                <div className="space-y-2">
                  {["Lumen Press", "Apex Books", "Beacon Publishing"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2.5 text-sm text-zinc-600 hover:text-zinc-900 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="rounded border-zinc-300 text-[#ff5a3c] focus:ring-[#ff5a3c]"
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Color Accordion */}
            <div className="border-b border-zinc-100 pb-5">
              <button
                onClick={() => toggleSection("color")}
                className="flex items-center justify-between w-full text-left font-bold text-sm text-[#2b2d60] mb-3 group"
              >
                <span>Color</span>
                <span className="text-zinc-400 group-hover:text-[#ff5a3c] transition-colors text-lg">
                  {openSections.color ? "−" : "+"}
                </span>
              </button>
              {openSections.color && (
                <div className="flex flex-wrap gap-2">
                  {["Blue", "Red", "Yellow", "Orange", "Dark Blue", "Cream"].map((color) => (
                    <button
                      key={color}
                      className="px-2.5 py-1 text-xs border border-zinc-200 rounded hover:border-[#ff5a3c] hover:text-[#ff5a3c] transition-colors bg-white font-medium"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Material Accordion */}
            <div className="pb-5">
              <button
                onClick={() => toggleSection("material")}
                className="flex items-center justify-between w-full text-left font-bold text-sm text-[#2b2d60] mb-3 group"
              >
                <span>Material</span>
                <span className="text-zinc-400 group-hover:text-[#ff5a3c] transition-colors text-lg">
                  {openSections.material ? "−" : "+"}
                </span>
              </button>
              {openSections.material && (
                <div className="space-y-2">
                  {["Paperback", "Hardcover"].map((mat) => (
                    <label key={mat} className="flex items-center gap-2.5 text-sm text-zinc-600 hover:text-zinc-900 cursor-pointer">
                      <input type="checkbox" className="rounded border-zinc-300 text-[#ff5a3c] focus:ring-[#ff5a3c]" />
                      <span>{mat}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

          </aside>

          {/* 3. Books Grid Section (3 Columns) */}
          <main className="lg:col-span-3 space-y-6">
            
            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-5 text-sm text-zinc-600">
              
              {/* Sort dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-zinc-200 rounded px-2 py-1 text-sm font-medium focus:outline-none focus:border-[#ff5a3c] cursor-pointer"
                >
                  <option value="alphabetical-az">Alphabetically, A-Z</option>
                  <option value="alphabetical-za">Alphabetically, Z-A</option>
                  <option value="price-low-high">Price, low to high</option>
                  <option value="price-high-low">Price, high to low</option>
                </select>
              </div>

              {/* Counter details */}
              <div className="text-zinc-500 font-medium">
                Showing 1 - {sortedBooks.length} of {sortedBooks.length} results
              </div>

              {/* Right Side Options (Show limit and view icons) */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Show:</span>
                  <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="bg-transparent border border-zinc-200 rounded px-2 py-1 text-sm font-medium focus:outline-none focus:border-[#ff5a3c]"
                  >
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                  </select>
                </div>

                {/* Grid / List Toggles */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded transition-all ${
                      viewMode === "grid" ? "text-[#ff5a3c] bg-[#fff4f2]" : "text-zinc-400 hover:text-zinc-600"
                    }`}
                    title="Grid view"
                  >
                    {/* Grid Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded transition-all ${
                      viewMode === "list" ? "text-[#ff5a3c] bg-[#fff4f2]" : "text-zinc-400 hover:text-zinc-600"
                    }`}
                    title="List view"
                  >
                    {/* List Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Books catalog grid */}
            {sortedBooks.length === 0 ? (
              <div className="py-20 text-center text-zinc-400 font-medium">
                No products match the selected filters.
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
                {sortedBooks.slice(0, pageSize).map((book) => (
                  <div key={book.id} className="group flex flex-col items-center">
                    {/* Book Cover Container with Hover Overlay */}
                    <div className="w-[190px] h-[260px] bg-zinc-100 rounded-sm shadow-md overflow-hidden relative transition-transform duration-300 group-hover:-translate-y-1.5">
                      {renderBookCover(book)}
                      
                      {/* Hover Backdrop & ADD TO CART banner */}
                      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <button className="bg-[#ff5a3c] hover:bg-[#e04f32] text-white text-[10px] font-black uppercase tracking-widest py-3 px-8 w-full shadow-lg text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          Add To Cart
                        </button>
                      </div>
                    </div>

                    {/* Book Metadata */}
                    <div className="mt-4 text-center">
                      <Link href={`/books/${book.slug}`} className="hover:text-[#ff5a3c] transition-colors">
                        <h3 className="text-zinc-800 font-extrabold text-sm tracking-tight leading-tight line-clamp-1">
                          {book.title}
                        </h3>
                      </Link>
                      <p className="text-zinc-400 text-xs mt-1 font-medium italic">
                        {book.author}
                      </p>
                      <p className="text-[#ff5a3c] font-black text-sm mt-1.5">
                        ${book.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // List View Mode
              <div className="space-y-6">
                {sortedBooks.slice(0, pageSize).map((book) => (
                  <div key={book.id} className="flex gap-6 p-4 border border-zinc-100 rounded-lg bg-white hover:shadow-md transition-shadow group">
                    <div className="w-[120px] h-[160px] bg-zinc-100 rounded overflow-hidden relative flex-shrink-0">
                      {renderBookCover(book)}
                      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-[#ff5a3c] text-white text-[9px] font-bold uppercase tracking-wider py-1.5 px-3 rounded shadow">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <Link href={`/books/${book.slug}`} className="hover:text-[#ff5a3c] transition-colors">
                          <h3 className="text-[#2b2d60] font-bold text-base">{book.title}</h3>
                        </Link>
                        <p className="text-zinc-400 text-sm italic mt-0.5">{book.author}</p>
                        <span className="inline-block px-2 py-0.5 mt-2 bg-zinc-100 rounded text-xs text-zinc-500 font-medium">{book.category}</span>
                        <p className="text-zinc-500 text-sm mt-3 line-clamp-2 leading-relaxed">{book.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[#ff5a3c] font-bold text-lg">${book.price.toFixed(2)}</span>
                        <button className="bg-[#2b2d60] hover:bg-[#1f2044] text-white text-xs font-semibold px-4 py-2 rounded transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Pagination */}
            <div className="flex items-center justify-center gap-2.5 pt-12">
              <button className="w-9 h-9 rounded-full border border-zinc-200 hover:border-[#ff5a3c] hover:text-[#ff5a3c] flex items-center justify-center transition-colors text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <button className="w-9 h-9 rounded-full bg-[#ff5a3c] text-white font-bold text-sm flex items-center justify-center shadow-md">
                1
              </button>
              
              <button className="w-9 h-9 rounded-full border border-zinc-200 hover:border-[#ff5a3c] hover:text-[#ff5a3c] font-bold text-sm flex items-center justify-center transition-colors text-zinc-500 bg-white">
                2
              </button>
              
              <button className="w-9 h-9 rounded-full border border-zinc-200 hover:border-[#ff5a3c] hover:text-[#ff5a3c] font-bold text-sm flex items-center justify-center transition-colors text-zinc-500 bg-white">
                3
              </button>
              
              <button className="w-9 h-9 rounded-full border border-zinc-200 hover:border-[#ff5a3c] hover:text-[#ff5a3c] flex items-center justify-center transition-colors text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
