import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/dela-gothic-one";
import "@fontsource/noto-sans-jp";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import InitialLoader from "@/components/InitialLoader";
import AnimatedLayout from "@/components/AnimatedLayout";
import { MusicProvider } from "@/components/MusicContext";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sanchitsai Nipanikar",
  description: "Personal website and portfolio of Sanchitsai Nipanikar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtLjUtMS0xLTItMS00IDAgMC00IDAgLTQgNCAwIDktNiAyLTYgOWE5IDkgMCAwIDAgMTggMGMwLTEtMS41LTMtMy00cy0zLjUtMS0zLjUgMi41Ii8+PC9zdmc+"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MusicProvider audioSrc="/music/eyes-without-a-face.mp3">
          <CustomCursor />
          <InitialLoader />
          <div className="min-h-[120vh] flex flex-col">
            <AnimatedLayout>{children}</AnimatedLayout>
            <Footer />
          </div>
        </MusicProvider>
      </body>
    </html>
  );
}
