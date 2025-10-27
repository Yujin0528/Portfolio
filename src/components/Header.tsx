"use client";

import DarkModeToggle from "@/components/DarkMode";
import Image from "next/image";

export default function Header() {
  return (
    <header
      id="intro"
      className="flex flex-col justify-between w-full pt-5 min-h-dvh md:min-h-screen "
    >
      <div className="container px-6 mx-auto md:px-10">
        {/* 다크모드 토글 */}
        <div className="mx-3 my-4 md:my-6">
          <DarkModeToggle />
        </div>

        <div className="flex flex-col items-start justify-between h-full md:flex-row">
          {/* 네비게이션 */}
          <nav className="flex-1 w-full px-4 mt-8 py-2 md:p-6 text-[#CFD0D4] text-2xl md:text-4xl lg:text-5xl font-bold">
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
                  className="block px-2 py-1 hover:text-[var(--color-text-inverse)] hover:bg-primary-hover hover:after:content-['.']"
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
                  href="#experience"
                  className="block px-2 py-1 hover:text-[var(--color-text-inverse)] hover:bg-primary-hover hover:after:content-['.']"
                >
                  EXPERIENCE
                </a>
              </li>
              <li className="mb-2 md:mb-5">
                <a
                  href="#contact"
                  className="block px-2 py-1 hover:text-[var(--color-text-inverse)] hover:bg-primary-hover hover:after:content-['.']"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          <div className="grid grid-cols-[auto_max-content] items-start mb-5 md:items-center w-full md:w-auto">
            <div className="flex w-full">
              {/* 인사말 */}
              <div className="flex-1 pl-4 mt-5 md:pl-6 md:mt-10 md:ml-8">
                <h1 className="text-2xl leading-snug md:text-3xl lg:text-5xl">
                  안녕하세요,
                  <br />
                  <span className="font-bold">정유진입니다</span>
                  <span className="font-bold period-mark">.</span>
                </h1>
                <p className="mt-6 text-base leading-tight md:mt-8 md:text-lg lg:text-2xl">
                  경기권에 거주하는, <br />
                  <span className="font-bold">신입 프론트엔드 개발자</span>입니다.
                </p>
                <p className="mt-4 text-base leading-tight md:mt-6 md:text-lg lg:text-2xl">
                  디자인 감각을 바탕으로 <br />
                  사용자를 이해하는 상호작용 중심 <br />
                  프론트엔드를 지향합니다.
                </p>
              </div>

              {/* 프로필 사진 */}
              <div className="w-20 md:w-[110px] lg:w-[120px] mt-5 md:ml-10 flex-shrink-0">
                <Image
                  src="/images/yujin1.png"
                  alt="정유진 프로필"
                  width={130}
                  height={130}
                  className="object-cover w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 큰 타이틀 */}
      <div className="text-primary font-bold text-[clamp(1.5rem,7vw,4rem)] md:text-[clamp(1.875rem,7vw,6rem)] whitespace-nowrap tracking-tight text-center mb-5 md:mb-10">
        <p>HELLO, I’M YUJIN-JEONG.</p>
      </div>
    </header>
  );
}
