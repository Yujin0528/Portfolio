"use client";

import DarkModeToggle from "@/components/DarkMode";
import Image from "next/image";

export default function Header() {
  return (
    <header id="intro" className="flex flex-col justify-between w-full min-h-screen ">
      <div className="container mx-auto">
        {/* 다크모드 토글 */}
        <div className="mx-5 my-5 md:my-5">
          <DarkModeToggle />
        </div>
        <div className="flex flex-col items-start justify-between h-full md:flex-row">
          {/* 네비게이션 */}
          <nav className="flex-1 w-full px-6 mt-10 py-2 md:p-6 text-[#CFD0D4] text-3xl md:text-5xl md:mt-20 lg:text-6xl font-bold">
            <ul>
              <li className="mb-2 md:mb-5">
                <a
                  href="#intro"
                  className="block px-2 py-1 text-[var(--color-text-inverse)] bg-primary-hover after:content-['.']"
                >
                  INTRO
                </a>
              </li>
              <li className="mb-2 md:mb-5">
                <a
                  href="#project"
                  className="block px-2 py-1 hover:text-[var(--color-text-inverse)] hover:bg-primary-hover  hover:after:content-['.']"
                >
                  PROJECT
                </a>
              </li>
              <li className="mb-2 md:mb-5">
                <a
                  href="#skills"
                  className="block px-2 py-1 hover:text-[var(--color-text-inverse)] hover:bg-primary-hover hover:after:content-['.']"
                >
                  SKILLS
                </a>
              </li>
              <li className="mb-2 md:mb-5">
                <a
                  href="#exprience"
                  className="block px-2 py-1 hover:text-[var(--color-text-inverse)] hover:bg-primary-hover hover:after:content-['.']"
                >
                  EXPERIENCE
                </a>
              </li>
              <li className="mb-2 md:mb-5">
                <a
                  href="#contact"
                  className="block px-2 py-1 hover:text-[var(--color-text-inverse)] hover:bg-primary-hover  hover:after:content-['.']"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          <div className="grid grid-cols-[auto_max-content]">
            <div className="flex">
              {/* 인사말 */}
              <div className="flex-1 pl-8 mt-20 md:ml-10">
                <h1 className="text-4xl leading-snug md:text-5xl lg:text-7xl">
                  안녕하세요,
                  <br />
                  <span className="font-bold">정유진입니다</span>
                  <span className="font-bold period-mark">.</span>
                </h1>
                <p className="mt-8 text-xl leading-tight md:text-2xl lg:text-3xl">
                  경기권에 거주하는, <br />
                  <span className="font-bold">신입 프론트엔드 개발자</span>입니다.
                </p>
                <p className="mt-8 text-xl leading-tight md:text-2xl lg:text-3xl">
                  디자인 감각을 바탕으로 <br />
                  사용자를 이해하는 상호작용 중심 <br />
                  프론트엔드를 지향합니다.
                </p>
              </div>
              {/* 프로필 사진 */}

              <div className="w-[120px] md:w-[140px] lg:w-[150px] mt-20  md:ml-10">
                <Image
                  src="/images/yujin1.png"
                  alt="정유진 프로필"
                  width={160}
                  height={160}
                  className="object-cover w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 큰 타이틀 */}
      <div className="text-primary font-bold text-[clamp(1.875rem,8vw,7rem)] whitespace-nowrap tracking-tight text-center mb-6">
        <p>HELLO, I’M YUJIN-JEONG.</p>
      </div>
    </header>
  );
}
