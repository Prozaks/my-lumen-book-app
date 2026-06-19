import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#ff5a3c] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/20">
          {/* Column 1 - Brand Info */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              {/* Circular Crest Logo */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2.5 text-[#ff5a3c] shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-wider">LUMEN</span>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#ff5a3c] hover:bg-zinc-100 hover:scale-105 transition-all flex items-center justify-center shadow-sm">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#ff5a3c] hover:bg-zinc-100 hover:scale-105 transition-all flex items-center justify-center shadow-sm">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#ff5a3c] hover:bg-zinc-100 hover:scale-105 transition-all flex items-center justify-center shadow-sm">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#ff5a3c] hover:bg-zinc-100 hover:scale-105 transition-all flex items-center justify-center shadow-sm">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Company Links */}
          <div className="flex flex-col items-start gap-4 md:pl-12">
            <h3 className="font-bold text-lg uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">HOME</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ABOUT US</Link></li>
              <li><Link href="/books" className="hover:text-white transition-colors">BOOKS</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">NEW RELEASE</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">CONTACT US</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">BLOG</Link></li>
            </ul>
          </div>

          {/* Column 3 - Important Links */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-bold text-lg uppercase tracking-wider">Important Links</h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-sm text-white/70">
          <p>© 2023 Anthoit. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
