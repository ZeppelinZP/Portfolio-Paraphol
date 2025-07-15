import { Sometype_Mono } from "next/font/google";
import "./globals.css";
//components
import MainNav from "../components/MainNav";
import PageTransition from "../components/PageTransition";
import RectangleTransition from "../components/RectangleTransition";
import Gradient from "../components/Gradient";
import Header from "../components/Header";

const sometypeMono = Sometype_Mono({
  subsets: ["latin"],
  variable: "--font-sometypeMono",
});

export const metadata = {
  title: "Paraphol | Portfolio",
  description: "Portfolio โชว์ผลงานและความสามารถของ Paraphol นักพัฒนาเว็บไซต์และนักออกแบบ UI/UX",
  keywords: [
    "Portfolio",
    "Web Developer",
    "UI/UX Designer",
    "Paraphol",
    "Frontend",
    "React",
    "Next.js",
    "TailwindCSS"
  ],
  themeColor: "#0f172a",
  openGraph: {
    title: "Paraphol | Portfolio",
    description: "ชมผลงานและโปรเจกต์ของ Paraphol นักพัฒนาเว็บไซต์และนักออกแบบ UI/UX",
    url: "https://parapholportfolio.vercel.app",
    siteName: "Paraphol Portfolio",
    // images: [
    //   {
    //     url: "/assets/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Paraphol Portfolio Preview",
    //   },
    // ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paraphol | Portfolio",
    description: "ชมผลงานและโปรเจกต์ของ Paraphol นักพัฒนาเว็บไซต์และนักออกแบบ UI/UX",
    // images: ["/assets/og-image.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.variable} antialiased
        overflow-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            {/*main nav*/}
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
