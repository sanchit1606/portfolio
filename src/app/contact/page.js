"use client";

import {
  CloudIcon,
  FlameIcon,
  UserIcon,
  RocketIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  ArrowRightIcon,
  GraduationCapIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Dock, DockIcon } from "@/components/magicui/dock";
import useScrollRestoration from "@/hooks/useScrollRestoration";
import MiniMusicPlayer from "@/components/MiniMusicPlayer";

export default function Contact() {
  // Use the hook to fix scrolling issues
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Background Clouds */}
      <div className="absolute top-20 right-20">
        <CloudIcon className="w-32 h-32 text-gray-200" />
      </div>
      <div className="absolute bottom-40 left-20">
        <CloudIcon className="w-24 h-24 text-gray-200" />
      </div>
      <div className="absolute top-1/2 right-1/4">
        <CloudIcon className="w-40 h-40 text-gray-200" />
      </div>
      <div className="absolute bottom-20 right-32">
        <CloudIcon className="w-36 h-36 text-gray-200" />
      </div>
      <div className="absolute top-40 left-1/4">
        <CloudIcon className="w-28 h-28 text-gray-200" />
      </div>
      <div className="absolute top-60 right-60">
        <CloudIcon className="w-20 h-20 text-gray-200" />
      </div>

      {/* Header */}
      <div className="flex justify-center w-full pt-6 px-4 sm:px-0">
        <div className="w-full sm:w-[80%] border border-black rounded-lg bg-white/50 backdrop-blur-sm">
          <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6">
            <div
              className="text-xl sm:text-2xl font-black uppercase mb-2 sm:mb-0"
              style={{ fontFamily: "var(--font-dela-gothic)" }}
            >
              Connect
            </div>
            <div className="flex items-center gap-2">
              <MiniMusicPlayer />
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity p-2"
              >
                <FlameIcon className="w-6 h-6" />
              </Link>
            </div>
          </header>
        </div>
      </div>

      {/* Main Content */}
      <main className="grid grid-cols-1 px-6 sm:px-12 md:px-24 lg:px-32 min-h-[80vh] relative py-10 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[0.9] mb-12 sm:mb-16">
            Parley
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left side - Contact form */}
            <div className="bg-white/50 backdrop-blur-sm border border-black rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Say Hello</h2>

              <form
                className="space-y-6"
                action="https://formsubmit.co/sanchitnipanikar@gmail.com"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name="message"
                    required
                    className="w-full px-4 py-3 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  <span>Send Message</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Right side - Social links */}
            <div className="space-y-8">
              <div className="flex items-start justify-between">
                <div
                  className="japanese-text text-2xl sm:text-3xl mb-8"
                  data-meaning="'Connections open new doors.'"
                >
                  「繋がりが
                  <br />
                  新しい扉を
                  <br />
                  開きます。」
                </div>
                
                {/* Hexagon Loading Animation */}
                <div className="socket contact-hexagon">
                  <div className="gel center-gel">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c1 r1">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c2 r1">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c3 r1">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c4 r1">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c5 r1">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c6 r1">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c7 r2">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c8 r2">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c9 r2">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c10 r2">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c11 r2">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c12 r2">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c13 r3">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c14 r3">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c15 r3">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c16 r3">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c17 r3">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  <div className="gel c18 r3">
                    <div className="hex-brick"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* GitHub */}
                <a
                  href="https://github.com/sanchit1606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">GitHub</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300">@sanchit1606</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sanchit1606/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">LinkedIn</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300">@sanchit1606</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Gmail */}
                <a
                  href="mailto:sanchitnipanikar@gmail.com"
                  className="flex items-center gap-4 p-4 border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <MailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300">sanchitnipanikar@gmail.com</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Instagram (optional) */}
                {/* <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Instagram</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300">Add handle</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Dock at the bottom */}
      <div className="fixed bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 z-50">
        <Dock className="scale-75 sm:scale-100">
          <Link href="/">
            <DockIcon>
              <FlameIcon className="h-5 w-5" />
            </DockIcon>
          </Link>
          <Link href="/about">
            <DockIcon>
              <UserIcon className="h-5 w-5" />
            </DockIcon>
          </Link>
          <Link href="/projects">
            <DockIcon>
              <RocketIcon className="h-5 w-5" />
            </DockIcon>
          </Link>
          <Link href="/education">
            <DockIcon>
              <GraduationCapIcon className="h-5 w-5" />
            </DockIcon>
          </Link>
          <Link href="/contact">
            <DockIcon isActive={true}>
              <CloudIcon className="h-5 w-5" />
            </DockIcon>
          </Link>
        </Dock>
      </div>
    </div>
  );
}
