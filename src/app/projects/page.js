"use client";

import {
  CloudIcon,
  FlameIcon,
  UserIcon,
  RocketIcon,
  GithubIcon,
  ExternalLinkIcon,
  GraduationCapIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FaceProj from "../../../images/face_recogniton_project1.png";
import AerialProj from "../../../images/aerial2map_project.png";
import NerfGif from "../../../images/nerf_chest.gif";
import SportsImg from "../../../images/sports-player_reidentification.png";
import LumenImg from "../../../images/lumen.png";
import CorazonImg from "../../../images/corazon-homes.png";
import DaaCpImg from "../../../images/daa-cp.png";
import SiglipGemmaImg from "../../../images/siglip-gemma.png";
import CnCpBanner from "../../../images/cn-cp-banner.png";
import CdCpBanner from "../../../images/cd-cp-banner.png";
import Project2Img from "../../../images/project2.jpg";
import Project5Img from "../../../images/project5.jpg";
import CTNerfGif from "../../../images/CT_NERF.gif";

import { Dock, DockIcon } from "@/components/magicui/dock";
import useScrollRestoration from "@/hooks/useScrollRestoration";
import MiniMusicPlayer from "@/components/MiniMusicPlayer";

export default function Projects() {
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
              Projects
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
      <main className="px-4 sm:px-8 md:px-16 lg:px-24 min-h-[80vh] relative py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Projects
            </h1>
            <div className="hidden md:block">
              <div className="text-right">
                <p
                  className="japanese-text text-2xl sm:text-3xl mb-2"
                  data-meaning="&apos;Creation is the language of the soul.&apos;"
                >
                  「創造は魂の言語」
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Hackathon Projects */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Hackathon Projects</h2>
          {/* Featured: LUMEN - keep as is */}
          <div className="mb-8">
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image src={LumenImg} alt="LUMEN Project" className="w-full h-auto object-cover" priority />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">LUMEN Localized Unified Medical ENgine</h3>
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Current Project</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-[10px] px-2 py-0.5 border border-green-500 bg-green-100 text-green-700 rounded-full uppercase">Prototype-1 ready</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-8">Multilingual, voice‑first AI triage assistant with specialist modules and PEARL CT reconstruction.</p>
                  <div className="absolute left-6 right-6 bottom-6 flex items-center justify-between">
                    <Link href="https://github.com/sanchit1606/LUMEN.git" target="_blank" className="inline-flex items-center gap-2 text-sm text-black hover:opacity-80">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </Link>
                    <Link href="https://lumen-sanchit.netlify.app/" target="_blank" className="inline-flex items-center gap-2 text-sm text-black hover:opacity-80">
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Industry Sponsored Project */}
          <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">Industry Sponsored Project</h2>
          <div className="relative group overflow-hidden rounded-xl mb-8 h-48 sm:h-56 md:h-64">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image src={CorazonImg} alt="Industry Sponsored Project" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold">Web Development Intern at CORAZON HOMES Pvt. Ltd.</h3>
                </div>
                <div className="flex items-center justify-end gap-2 mb-1">
                  <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Mar ’25 – May ’25</span>
                  <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Hybrid</span>
                  <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">3 months</span>
                </div>
                <p className="text-xs text-gray-700 mb-2">MERN stack • Industry‑sponsored project</p>
                <p className="text-sm text-gray-700">Redesigned and SEO‑optimized a real‑estate platform, improving search visibility by 5–10% and growing organic traffic by ~10%. Built modules for listings, auth, advanced filters, booking, and admin dashboard.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Major Projects */}
          <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6">Major Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* 3rd SEM - Face Recognition */}
            <div className="relative group overflow-hidden rounded-xl w-full h-44 sm:h-52 md:h-56 lg:h-60">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image src={FaceProj} alt="Face Recognition Attendance" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold">Face Recognition Based Attendance System</h3>
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">3rd SEM</span>
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Dec ’23</span>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">Computer Vision • Springer AICTC 2024 (Scopus indexed)</p>
                  <p className="text-sm text-gray-700">OpenCV‑based facial recognition using Haar cascade and LBPH for classroom automation.</p>
                  <div className="mt-3">
                    <Link href="https://github.com/sanchit1606/Face-Recognition-Based-Attendance-System" target="_blank" className="inline-flex items-center gap-2 text-sm text-black hover:opacity-80">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4th SEM - Prosthetic Hand */}
            <div className="relative group overflow-hidden rounded-xl w-full h-44 sm:h-52 md:h-56 lg:h-60">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image src={Project2Img} alt="Prosthetic Hand" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold">Flex Sensor Controlled Prosthetic Hand</h3>
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">4th SEM</span>
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">May ’24</span>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">Microprocessors + CAD • Patent published (IP India)</p>
                  <p className="text-sm text-gray-700">Real‑time wireless prosthetic hand using flex sensors for motion detection and control.</p>
                </div>
              </div>
            </div>

            {/* 5th SEM - Anonymization Framework */}
            <div className="relative group overflow-hidden rounded-xl w-full h-44 sm:h-52 md:h-56 lg:h-60">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image src={Project5Img} alt="Anonymization Framework" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold">Multimodal Anonymization for MP4 Videos</h3>
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">5th SEM</span>
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Dec ’24</span>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">Computer Vision + AIML • Best Paper (IEEE ESCI 2025)</p>
                  <p className="text-sm text-gray-700">OCR for text redaction, GAN‑based facial anonymization, and voice alteration for privacy.</p>
                </div>
              </div>
            </div>

            {/* 6th SEM - SigLIP-Gemma VLM */}
            <div className="relative group overflow-hidden rounded-xl w-full h-44 sm:h-52 md:h-56 lg:h-60">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image src={SiglipGemmaImg} alt="SigLIP‑Gemma" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold">SigLIP Gemma 2.4B Lightweight VLM</h3>
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">6th SEM</span>
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">May &apos;25</span>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">Vision‑Language • Generative AI</p>
                  <p className="text-sm text-gray-700">Frozen SigLIP 400M encoder + 2.4B Gemma decoder‑only LLM; CIDEr 141.9, VQA 83.19%.</p>
                  <div className="mt-3">
                    <Link href="https://github.com/sanchit1606/A-Lightweight-Multimodal-Vision-Language-Model" target="_blank" className="inline-flex items-center gap-2 text-sm text-black hover:opacity-80">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 7th SEM - CTNeRF - Centered */}
          <div className="flex justify-center mt-8">
            <div className="relative group overflow-hidden rounded-xl w-full max-w-2xl aspect-video">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image src={CTNerfGif} alt="CTNeRF" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold">CTNeRF: Advanced NeRF-GAN Hybrid Model</h3>
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">7th SEM</span>
                    <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Current</span>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">Medical Imaging • NeRF • GAN • PyTorch</p>
                  <p className="text-sm text-gray-700">Single-view 3D CT reconstruction using hybrid NeRF-GAN architecture. Reduces radiation exposure by 99%+ while maintaining diagnostic quality.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Course Projects */}
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Course Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Aerial2Map */}
              <div className="relative group overflow-hidden rounded-xl w-full h-40 sm:h-48 md:h-52 lg:h-56">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image src={AerialProj} alt="Aerial2Map" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold">Aerial2Map: Pix2Pix Satellite to Map</h3>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Artificial Intelligence</span>
                      <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Nov &apos;24</span>
                    </div>
                    <p className="text-sm text-gray-700">U‑Net generator + PatchGAN discriminator; BCEWithLogitsLoss + L1Loss (λ=200); 256×256 RGB, bs=4, 20 epochs.</p>
                    <div className="mt-3">
                      <Link href="https://github.com/sanchit1606/Aerial2Map-Pix2Pix-based-Satellite-to-Map-Translation" target="_blank" className="inline-flex items-center gap-2 text-sm text-black hover:opacity-80">
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Packet Sniffer */}
              <div className="relative group overflow-hidden rounded-xl w-full h-40 sm:h-48 md:h-52 lg:h-56">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image src={CnCpBanner} alt="Packet Sniffer" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold">Packet Sniffer: Real-Time Network Traffic Analysis Tool</h3>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Computer Networks</span>
                      <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Nov &apos;24</span>
                    </div>
                    <p className="text-sm text-gray-700">Java, pcap4j, Swing; live packet capture/inspection, interface selection, stats, PCAP export.</p>
                  </div>
                </div>
              </div>

              {/* Markdown Transpiler */}
              <div className="relative group overflow-hidden rounded-xl w-full h-40 sm:h-48 md:h-52 lg:h-56">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image src={CdCpBanner} alt="Markdown Transpiler" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold">Markdown Transpiler: Markdown to HTML Converter</h3>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Compiler Design</span>
                      <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Nov &apos;24</span>
                    </div>
                    <p className="text-sm text-gray-700">C++, Lex/Yacc (Flex/Bison); parser + translation; CMake project; extensible grammars.</p>
                    <div className="mt-3">
                      <Link href="https://github.com/sanchit1606/markdown_transpiler" target="_blank" className="inline-flex items-center gap-2 text-sm text-black hover:opacity-80">
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* DNA Data Compression */}
              <div className="relative group overflow-hidden rounded-xl w-full h-40 sm:h-48 md:h-52 lg:h-56">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image src={DaaCpImg} alt="DNA Compression" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold">DNA Data Compression</h3>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Algorithms</span>
                      <span className="text-[10px] px-2 py-0.5 border border-black rounded-full uppercase">Nov &apos;24</span>
                    </div>
                    <p className="text-sm text-gray-700">C++, Python; predictive Markov modeling + arithmetic coding; lossless FASTA/FASTQ encoders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          

          {/* Mobile Quote - only visible on small screens */}
          <div className="mt-10 md:hidden">
            <p
              className="japanese-text text-2xl mb-2 text-center"
              data-meaning="'Creation is the language of the soul.'"
            >
              「創造は魂の言語」
            </p>
          </div>
        </div>
      </main>

      {/* Dock at the bottom */}
      <div className="fixed bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 z-50">
        <Dock className="scale-75 sm:scale-100">
          <Link href="/">
            <DockIcon className="bg-white/90 shadow-md">
              <FlameIcon className="h-5 w-5 text-black" />
            </DockIcon>
          </Link>
          <Link href="/about">
            <DockIcon className="bg-white/90 shadow-md">
              <UserIcon className="h-5 w-5 text-black" />
            </DockIcon>
          </Link>
          <Link href="/projects">
            <DockIcon className="bg-white/90 shadow-md" isActive={true}>
              <RocketIcon className="h-5 w-5 text-black" />
            </DockIcon>
          </Link>
          <Link href="/education">
            <DockIcon className="bg-white/90 shadow-md">
              <GraduationCapIcon className="h-5 w-5 text-black" />
            </DockIcon>
          </Link>
          <Link href="/contact">
            <DockIcon className="bg-white/90 shadow-md">
              <CloudIcon className="h-5 w-5 text-black" />
            </DockIcon>
          </Link>
        </Dock>
      </div>
    </div>
  );
}
