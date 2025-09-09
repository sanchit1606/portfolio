"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-0 py-6 mt-10">
      <div className="w-full sm:w-[80%] mx-auto border border-black rounded-lg bg-white/50 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 gap-4">
          <div
            className="text-sm sm:text-base font-black uppercase"
            style={{ fontFamily: "var(--font-dela-gothic)" }}
          >
            sanchit
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/"
              className="hover:opacity-80 transition-opacity p-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              className="hover:opacity-80 transition-opacity p-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:you@example.com"
              className="hover:opacity-80 transition-opacity p-2"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


