import "./globals.css";
import { Ubuntu, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

// const ubuntu = Ubuntu({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
//   variable: "--font-ubuntu",
// });

// const plusJakartaSans = Plus_Jakarta_Sans({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
//   variable: "--font-plus-jakarta-sans",
// });

export const metadata = {
  title: "워크샵 퀴즈쇼",
  description: "워크샵 퀴즈쇼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-ubuntu`}
      >
        <Script strategy="afterInteractive" id="100vh-fix">
          {`
            function setViewportHeight() {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh+'px');
              }
              
              setViewportHeight();
              
              window.addEventListener('resize', setViewportHeight);
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
