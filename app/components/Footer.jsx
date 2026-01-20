'use client';

import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Mukesh Kakkar</h3>
            <p className="text-slate-400">Healthcare Technology & AI Leader | MBA | Building transformative solutions</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about-me" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/resume" className="hover:text-white transition-colors">Resume</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/mukeshkakkar" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mukeshkakkar@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-center">
            © 2026 Mukesh Kakkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
