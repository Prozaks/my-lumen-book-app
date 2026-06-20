"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setSuccess(true);
    }
  };

  return (
    <div className="w-full flex-grow bg-zinc-50 font-sans flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-zinc-100 shadow-xl overflow-hidden">
        
        {/* Top Header Panel */}
        <div className="bg-[#ff5a3c] p-8 text-center text-white space-y-2 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-12 -translate-y-12"></div>
          <div className="w-12 h-12 bg-white rounded-xl flex flex-wrap p-2.5 gap-1 items-center justify-center mx-auto shadow-md">
            <div className="w-3 h-3 bg-[#ff5a3c] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#ff5a3c] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#ff5a3c] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#ff5a3c] rounded-sm"></div>
          </div>
          <h2 className="text-2xl font-black tracking-tight mt-2">Welcome Back</h2>
          <p className="text-white/80 text-xs uppercase tracking-wider font-bold">Lumen Bookstore Member Portal</p>
        </div>

        {/* Form area */}
        <div className="p-8 space-y-6">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-[#2b2d60]">Login Successful</h3>
              <p className="text-zinc-500 text-sm">Redirecting you to the dashboard...</p>
              <Link
                href="/dashboard"
                className="inline-block bg-[#2b2d60] hover:bg-[#1f2044] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg shadow transition-colors mt-2"
              >
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff5a3c]"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Password</label>
                  <a href="#" className="text-xs font-bold text-[#ff5a3c] hover:underline">Forgot?</a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ff5a3c]"
                />
              </div>

              {/* Remember me checkbox */}
              <label className="flex items-center gap-2 text-sm text-zinc-500 font-medium select-none cursor-pointer">
                <input type="checkbox" className="rounded border-zinc-300 text-[#ff5a3c] focus:ring-[#ff5a3c]" />
                <span>Remember my device</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#ff5a3c] hover:bg-[#e04f32] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-md transition-colors mt-4 cursor-pointer"
              >
                Sign In
              </button>
            </form>
          )}

          {/* Social Sign In Divider */}
          {!success && (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="h-px bg-zinc-100 flex-grow"></div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Or sign in with</span>
                <div className="h-px bg-zinc-100 flex-grow"></div>
              </div>

              {/* Social Login Button Grid */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 border border-zinc-200 rounded-lg py-2 hover:bg-zinc-50 hover:border-zinc-300 transition-all text-xs font-bold text-zinc-600">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-rose-500">
                    <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.997 0-.746-.08-1.32-.176-1.886H12.24z" />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 border border-zinc-200 rounded-lg py-2 hover:bg-zinc-50 hover:border-zinc-300 transition-all text-xs font-bold text-zinc-600">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-[#1a237e]">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </button>
              </div>

              {/* Sign up prompt */}
              <div className="text-center text-xs font-medium text-zinc-500">
                Don't have an account?{" "}
                <a href="#" className="font-bold text-[#ff5a3c] hover:underline">
                  Create one now
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
