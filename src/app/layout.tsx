import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Yujin's Portfolio",
  description: "프론트엔드 개발자 정유진의 포트폴리오입니다.",
  openGraph: {
    title: "Yujin's Portfolio",
    description: "프론트엔드 개발자 정유진의 포트폴리오입니다.",
  },
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👩‍💻</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className=" bg-[var(--color-bg)] text-[var(--color-text)] font-basic overflow-x-hidden]">
        {/* 다크모드 감지 */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col mx-auto">
            {/* 메인 */}
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
