import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOUZOUZ Adnane",
  description: "Professional portfolio showcasing computer vision projects and expertise in deep learning and AI technologies.",
  keywords: "Computer Vision, Deep Learning, AI, Object Detection, Image Processing",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
