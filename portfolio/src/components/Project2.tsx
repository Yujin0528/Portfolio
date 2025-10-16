import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaHome } from "react-icons/fa";

export default function Project2() {
  const [open, setOpen] = useState<number>(0);
  const toggle = (index: number) => {
    setOpen(open === index ? -1 : index);
  };
  return (
    <div className="container w-full max-w-screen-xl min-h-screen px-6 mx-auto">
      <div className="flex flex-col w-full min-h-screen">
        {/* 타이틀 */}
        <div className="font-bold text-primary text-[clamp(1.875rem,8vw,7rem)] whitespace-nowrap tracking-tight m-3">
          <p>PROJECT 2.</p>
        </div>
        {/* 프로젝트 소개*/}
        <div className="grid gap-6 px-3 md:gap-10 md:grid-cols-2 md:mt-10">
          <div>
            <p className="mb-2 text-lg font-semibold md:text-3xl ">
              코드의 그림자 <span className="font-bold period-mark">.</span>
            </p>

            <p className="mb-4 text-md md:text-xl">2025.05 - 2025.05 (2주)</p>
            <p className="md:text-lg ">Vanilla TS 기반의 인터랙티브 방탈출 게임</p>

            <div className="flex gap-10 justify-baseline">
              <a
                href="https://codeofshadow.netlify.app/"
                className="flex items-center gap-5 py-4 font-semibold hover:text-primary hover:after:content-['↗︎']"
              >
                <FaHome className="size-7" />
                Home
              </a>
              <a
                href="https://github.com/FRONTENDBOOTCAMP-13th/JS-02-twodari"
                className="flex items-center gap-5 py-4 font-semibold hover:text-primary hover:after:content-['↗︎']"
              >
                <FaGithub className="size-7" />
                Githube
              </a>
            </div>

            <Image
              src="/images/코드의그림자.png"
              alt="코드의 그림자 프로젝트 썸네일"
              width="300"
              height="200"
              className="hidden mt-10 md:block md:w-130 md:h-100"
            />
            <p className="font-bold md:text-lg text-primary">TECH STACK.</p>
            <p className=" md:text-lg">TypeScript, HTML5, Tailwind CSS</p>
          </div>

          {/* 프로젝트 세부설명 */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="overflow-hidden ">
              <button
                onClick={() => toggle(0)}
                className={`w-full text-left px-5 py-4 cursor-pointer font-semibold md:text-2xl transition-colors ${
                  open === 0
                    ? " bg-primary text-[var(--color-text-inverse)]"
                    : "text-primary bg-white"
                }`}
              >
                MY WORK.
              </button>

              <div
                className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                  open === 0 ? "max-h-[600px] py-4" : "max-h-0"
                }`}
              >
                <ul className="pl-5 space-y-5 text-sm leading-relaxed md:text-base">
                  <li>
                    <p className="mb-1 font-bold text-primary">공통 UI</p>
                    <ul className="pl-5 space-y-1 list-disc">
                      <li>방향키 UI 및 화면 전환 로직 구현</li>
                      <li>힌트 및 아이템 획득 로직 구현</li>
                      <li>RoomManager와 연동 구조 설계 및 상태 관리 로직 통합</li>
                    </ul>
                  </li>
                  <li>
                    <p className="mb-1 font-bold text-primary">미니게임 구현</p>
                    <ul className="pl-5 space-y-1 list-disc">
                      <li>터미널 스타일 미니게임(west_minigame.ts) 구현</li>
                      <li>비밀번호 입력 미션 구현</li>
                    </ul>
                  </li>
                  <li>
                    <p className="mb-1 font-bold text-primary">UI/UX 기획 및 디자인</p>
                    <ul className="pl-5 space-y-1 list-disc">
                      <li>Figma를 활용해 전체 UI 프로토타입 기획 및 제작</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden ">
              <button
                onClick={() => toggle(1)}
                className={`w-full text-left px-5 py-4 font-semibold md:text-2xl  cursor-pointer transition-colors ${
                  open === 1 ? "bg-primary text-[var(--color-text-inverse)]" : "text-primary bg-"
                }`}
              >
                TROUBLE SHOOTING.
              </button>

              <div
                className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                  open === 1 ? "max-h-[500px] py-4" : "max-h-0"
                }`}
              >
                <ul className="pl-5 space-y-5 text-sm leading-relaxed md:text-base">
                  <li>
                    <p className="mb-1 font-bold text-primary">방향키 UI 렌더링 최적화</p>
                    <ul className="pl-5 space-y-1 list-disc">
                      <li>
                        <span className="font-semibold">문제상황 </span>: 화면 비율 변경 시 방향
                        버튼과 텍스트 UI 위치가 어긋남
                      </li>
                      <li>
                        <span className="font-semibold">해결방안 </span>: 퍼센트 기반 좌표를{" "}
                        <code>transform: translate(-50%, -50%)</code>로 변경하여 반응형 UI 정렬
                        안정화
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="mb-1 font-bold text-primary">RoomManager 전역 참조 충돌 해결</p>
                    <ul className="pl-5 space-y-1 list-disc">
                      <li>
                        <span className="font-semibold">문제상황 </span>: 각 방의 미니게임 로직이
                        서로 다른 RoomManager 인스턴스를 참조하여 전역 상태 불일치 발생
                      </li>
                      <li>
                        <span className="font-semibold">해결방안 </span>: import/export 구조로
                        통합하고 타입 정의를 일관화하여 전역 상태 공유 및 모듈 간 의존성 해결
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
