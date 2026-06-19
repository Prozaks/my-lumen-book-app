"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    { name: "Books/[slug]", href: "/books/the-lady-beauty-scarlett-classic" },
    { name: "Login", href: "/login" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Dashboard/new", href: "/dashboard/new" },
    { name: "api/books", href: "/api/books", isExternal: true },
  ];

  return (
    <header className="w-full bg-white border-b border-zinc-100 sticky top-0 z-50 shadow-sm">
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo at top left */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#ff5a3c] rounded-xl flex flex-wrap p-2 gap-1 items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-800">
            LUMEN<span className="text-[#ff5a3c]">BOOK</span>
          </span>
        </Link>

        {/* Gray Avatar Circle at the middle */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-10 h-10 bg-zinc-200 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 font-bold shadow-inner">
            LB
          </div>
        </div>

        {/* Icons at top right */}
        <div className="flex items-center gap-4 text-zinc-600">
          {/* User outline */}
          <Link href="/login" className="p-2 rounded-full hover:bg-zinc-100 hover:text-[#ff5a3c] transition-all" title="Profile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </Link>
          {/* Shopping bag / cart */}
          <Link href="/" className="p-2 rounded-full hover:bg-zinc-100 hover:text-[#ff5a3c] transition-all relative" title="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff5a3c] rounded-full"></span>
          </Link>
          {/* Heart / Favorites */}
          <button className="p-2 rounded-full hover:bg-zinc-100 hover:text-[#ff5a3c] transition-all" title="Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-zinc-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Main Navigation Links Row */}
      <div className="border-t border-zinc-100 bg-[#fbfcfc] hidden md:block">
        <nav className="max-w-7xl mx-auto px-6 py-2.5">
          <ul className="flex items-center justify-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.name}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-[#ff5a3c] transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                        isActive
                          ? "text-[#ff5a3c] border-b-2 border-[#ff5a3c] pb-1.5"
                          : "text-zinc-600 hover:text-[#ff5a3c]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return item.isExternal ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-[#ff5a3c]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-zinc-50 text-[#ff5a3c]"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-[#ff5a3c]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}