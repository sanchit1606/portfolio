"use client";

import {
  CloudIcon,
  FlameIcon,
  UserIcon,
  RocketIcon,
  GraduationCapIcon,
  BadgeCheckIcon,
  ExternalLinkIcon,
  AwardIcon,
  BookOpenIcon,
  FileTextIcon,
  MedalIcon,
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  CpuIcon,
} from "lucide-react";
import Link from "next/link";

import { Dock, DockIcon } from "@/components/magicui/dock";
import useScrollRestoration from "@/hooks/useScrollRestoration";
import MiniMusicPlayer from "@/components/MiniMusicPlayer";

export default function Education() {
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
              Education
            </div>
            <div className="flex items-center gap-2">
              <MiniMusicPlayer />
              <Link href="/" className="hover:opacity-80 transition-opacity p-2">
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
            Education
          </h1>

          <div className="space-y-6">
            {/* B.Tech */}
            <div className="border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCapIcon className="w-5 h-5" />
                    <h3 className="text-xl font-bold">
                      Bachelor of Technology in Computer Engineering
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700">SPPU • 2022–26</p>
                  <p className="mt-2">Vishwakarma Institute of Technology, Pune</p>
                </div>
                <div className="shrink-0">
                  <span className="text-sm px-2 py-1 border border-black rounded-full">
                    CGPA: 8.43
                  </span>
                </div>
              </div>
            </div>

            {/* HSC */}
            <div className="border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCapIcon className="w-5 h-5" />
                    <h3 className="text-xl font-bold">Higher Secondary Certificate</h3>
                  </div>
                  <p className="text-sm text-gray-700">TSBIE • 2020–22</p>
                  <p className="mt-2">Narayana Junior College, Kondapur, Hyderabad</p>
                </div>
                <div className="shrink-0">
                  <span className="text-sm px-2 py-1 border border-black rounded-full">
                    92.50%
                  </span>
                </div>
              </div>
            </div>

            {/* SSC */}
            <div className="border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCapIcon className="w-5 h-5" />
                    <h3 className="text-xl font-bold">Secondary School Certificate</h3>
                  </div>
                  <p className="text-sm text-gray-700">CBSE • 2019–20</p>
                  <p className="mt-2">Sant Tukaram National Model School, Latur</p>
                </div>
                <div className="shrink-0">
                  <span className="text-sm px-2 py-1 border border-black rounded-full">
                    95.60%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Technical Skills</h2>
            
            <div className="flex flex-wrap justify-center gap-8">
              {/* Languages Book */}
              <div className="book">
                <div className="cover">
                  <div className="text-center">
                    <CodeIcon className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                    <p className="text-lg font-bold">Languages</p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded text-xs flex items-center justify-center font-bold">C</span>
                      C
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded text-xs flex items-center justify-center font-bold">++</span>
                      C++
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded text-xs flex items-center justify-center font-bold">Py</span>
                      Python
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded text-xs flex items-center justify-center font-bold">H</span>
                      HTML/CSS
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-700 text-white rounded text-xs flex items-center justify-center font-bold">S</span>
                      SQL
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries Book */}
              <div className="book">
                <div className="cover">
                  <div className="text-center">
                    <CpuIcon className="w-12 h-12 mx-auto mb-2 text-green-600" />
                    <p className="text-lg font-bold">Frameworks & Libraries</p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-red-500 text-white rounded text-xs flex items-center justify-center font-bold">PT</span>
                      PyTorch
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-green-500 text-white rounded text-xs flex items-center justify-center font-bold">CV</span>
                      OpenCV
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded text-xs flex items-center justify-center font-bold">NP</span>
                      NumPy
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-purple-500 text-white rounded text-xs flex items-center justify-center font-bold">PD</span>
                      Pandas
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded text-xs flex items-center justify-center font-bold">TF</span>
                      TensorFlow
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-red-600 text-white rounded text-xs flex items-center justify-center font-bold">K</span>
                      Keras
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded text-xs flex items-center justify-center font-bold">MP</span>
                      Matplotlib
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-orange-600 text-white rounded text-xs flex items-center justify-center font-bold">SK</span>
                      Scikit-learn
                    </div>
                  </div>
                </div>
              </div>

              {/* Databases Book */}
              <div className="book">
                <div className="cover">
                  <div className="text-center">
                    <DatabaseIcon className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                    <p className="text-lg font-bold">Databases</p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded text-xs flex items-center justify-center font-bold">M</span>
                      MySQL
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-green-600 text-white rounded text-xs flex items-center justify-center font-bold">M</span>
                      MongoDB
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps Book */}
              <div className="book">
                <div className="cover">
                  <div className="text-center">
                    <ServerIcon className="w-12 h-12 mx-auto mb-2 text-orange-600" />
                    <p className="text-lg font-bold">Cloud & DevOps</p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded text-xs flex items-center justify-center font-bold">A</span>
                      Azure
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded text-xs flex items-center justify-center font-bold">A</span>
                      AWS
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded text-xs flex items-center justify-center font-bold">D</span>
                      Docker
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-700 text-white rounded text-xs flex items-center justify-center font-bold">K</span>
                      Kubernetes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* AWS Cloud Technical Essentials */}
              <a
                href="https://coursera.org/verify/KPMFQZQXA1SD"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">AWS Cloud Technical Essentials</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] font-bold">AWS</span>
                      <span>AWS</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Deep Learning Specialization */}
              <a
                href="https://coursera.org/verify/specialization/BVRMHPS7FG3W"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Deep Learning Specialization</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold">DL</span>
                      <span>DeepLearning.ai</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Fundamentals of Deep Learning */}
              <a
                href="https://learn.nvidia.com/certificates?id=WSoP73nJToSXpj4-KV1XCg"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Fundamentals of Deep Learning</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold">NV</span>
                      <span>NVIDIA</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Building RAG Agents with LLMs */}
              <a
                href="https://learn.nvidia.com/certificates?id=9aPVTG7GRRWQFJRB281Yrw"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Building RAG Agents with LLMs</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold">NV</span>
                      <span>NVIDIA</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Intro to Transformer-Based NLP */}
              <a
                href="https://learn.nvidia.com/certificates?id=VS34VMm7TYau-AkOXpfALg"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Introduction to Transformer‑Based NLP</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold">NV</span>
                      <span>NVIDIA</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Prompt Design in Vertex AI */}
              <a
                href="https://www.cloudskillsboost.google/public_profiles/cca33889-6084-4149-a037-e8adb53f352b/badges/17944600"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Prompt Design in Vertex AI</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-bold">GC</span>
                      <span>Google Cloud</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Build Real World AI Apps with Gemini and Imagen */}
              <a
                href="https://www.cloudskillsboost.google/public_profiles/cca33889-6084-4149-a037-e8adb53f352b/badges/17948783"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Build Real‑World AI Apps with Gemini & Imagen</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-bold">GC</span>
                      <span>Google Cloud</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Introduction to AI (IBM) */}
              <a
                href="https://coursera.org/verify/KPMBPRCEW2OF"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Introduction to Artificial Intelligence (AI)</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">IBM</span>
                      <span>IBM</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Generative AI: Introduction and Applications */}
              <a
                href="https://coursera.org/verify/VE4FGDOAECVQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Generative AI: Introduction and Applications</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">IBM</span>
                      <span>IBM</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Generative AI: Prompt Engineering Basics */}
              <a
                href="https://coursera.org/verify/Z6HI4G5Y8ZVU"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Generative AI: Prompt Engineering Basics</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">IBM</span>
                      <span>IBM</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Python for Data Science, AI & Development */}
              <a
                href="https://coursera.org/verify/SBIM00JBVK0F"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Python for Data Science, AI & Development</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">IBM</span>
                      <span>IBM</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Neural Networks and Deep Learning */}
              <a
                href="https://coursera.org/verify/L7K11JZDICJF"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Neural Networks and Deep Learning</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold">DL</span>
                      <span>DeepLearning.ai</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Improving Deep Neural Networks */}
              <a
                href="https://coursera.org/verify/TJ1Z5DAS50FT"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Improving Deep Neural Networks</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold">DL</span>
                      <span>DeepLearning.ai</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Structuring Machine Learning Projects */}
              <a
                href="https://coursera.org/verify/YR6AWYHFDKYB"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Structuring Machine Learning Projects</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold">DL</span>
                      <span>DeepLearning.ai</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>

              {/* Convolutional Neural Networks */}
              <a
                href="https://coursera.org/verify/USAB7JJ5KTC4"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/60"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheckIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Convolutional Neural Networks</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold">DL</span>
                      <span>DeepLearning.io</span>
                    </div>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 mt-1" />
                </div>
              </a>
            </div>
          </div>

          {/* Awards and Publications */}
          <div className="mt-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Awards and Publications</h2>
            <div className="space-y-5">
              {/* Face Recognition-Based Attendance System */}
              <div className="border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5">
                <div className="flex items-start justify-between gap-6">
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <BookOpenIcon className="w-5 h-5" />
                        <h3 className="text-lg font-bold">Face Recognition‑Based Attendance System</h3>
                      </div>
                      <span className="text-xs px-2 py-0.5 border border-black rounded-full whitespace-nowrap">3rd sem, 2023</span>
                    </div>
                    <p className="text-sm text-gray-700">Computer Vision</p>
                    <p className="mt-2 text-sm">Published in Springer (Scopus indexed), series: Advances in Information Communication Technology and Computing (AICTC 2024)</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href="https://www.springerprofessional.de/en/face-recognition-based-attendance-system/50070728"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm underline hover:opacity-80"
                      >
                        <ExternalLinkIcon className="w-4 h-4" /> publication
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flex Sensor Controlled Prosthetic Hand */}
              <div className="border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5">
                <div className="flex items-start justify-between gap-6">
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <FileTextIcon className="w-5 h-5" />
                        <h3 className="text-lg font-bold">Flex Sensor Controlled Prosthetic Hand using Wireless Communication</h3>
                      </div>
                      <span className="text-xs px-2 py-0.5 border border-black rounded-full whitespace-nowrap">4th sem, 2024</span>
                    </div>
                    <p className="text-sm text-gray-700">Microprocessors + CAD</p>
                    <p className="mt-2 text-sm">Patent published, Intellectual Property India</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href="https://drive.google.com/file/d/1_mMw9ABCAqVOl1DyHkJMzR_75vAQfjUd/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm underline hover:opacity-80"
                      >
                        <ExternalLinkIcon className="w-4 h-4" /> patent
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multimodal Anonymization Framework for MP4 Videos */}
              <div className="border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5">
                <div className="flex items-start justify-between gap-6">
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <AwardIcon className="w-5 h-5" />
                        <h3 className="text-lg font-bold">A Multimodal Anonymization Framework for MP4 Videos</h3>
                      </div>
                      <span className="text-xs px-2 py-0.5 border border-black rounded-full whitespace-nowrap">5th sem, 2025</span>
                    </div>
                    <p className="text-sm text-gray-700">Computer Vision + AIML</p>
                    <p className="mt-2 text-sm">Awarded best paper of the Session at IEEE International Conference on Emerging Smart Computing & Informatics (ESCI 2025), Pune.</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href="https://ieeexplore.ieee.org/document/10988328"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm underline hover:opacity-80"
                      >
                        <ExternalLinkIcon className="w-4 h-4" /> publication
                      </a>
                      <a
                        href="https://drive.google.com/file/d/15I4AE3IQ7waCHpCUQrFat5GiNUeYMvQ_/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm underline hover:opacity-80"
                      >
                        <ExternalLinkIcon className="w-4 h-4" /> certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gold medal for sketching */}
              <div className="border border-black rounded-lg bg-white/60 backdrop-blur-sm p-5">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MedalIcon className="w-5 h-5" />
                      <h3 className="text-lg font-bold">Gold medal for sketching - Indian Art Contest</h3>
                    </div>
                    <p className="text-sm text-gray-700">Certificate of appreciation (2024)</p>
                  </div>
                </div>
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
            <DockIcon isActive={true}>
              <GraduationCapIcon className="h-5 w-5" />
            </DockIcon>
          </Link>
          <Link href="/contact">
            <DockIcon>
              <CloudIcon className="h-5 w-5" />
            </DockIcon>
          </Link>
        </Dock>
      </div>
    </div>
  );
}


