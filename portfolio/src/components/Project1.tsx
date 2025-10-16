import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaHome } from "react-icons/fa";

export default function Project1() {
  const [open, setOpen] = useState<number>(0);
  const toggle = (index: number) => {
    setOpen(open === index ? -1 : index);
  };
  return (
    <div className="container w-full max-w-screen-xl min-h-screen px-6 mx-auto">
      <div className="flex flex-col w-full min-h-screen">
        {/* 타이틀 */}
        <div className="font-bold text-primary text-[clamp(1.875rem,8vw,7rem)] whitespace-nowrap tracking-tight m-3">
          <p>PROJECT 1.</p>
        </div>
        {/* 프로젝트 소개*/}
        <div className="grid gap-6 px-3 md:gap-10 md:grid-cols-2 md:mt-10">
          <div>
            <p className="mb-2 text-lg font-semibold md:text-3xl ">
              나 혼자 산다 <span className="font-bold period-mark">.</span>
            </p>

            <p className="mb-4 text-md md:text-xl">2025.07 - 2025.08 (1개월)</p>
            <p className=" md:text-lg">1인가구를 위한 커뮤니티형 쇼핑 통합 플랫폼</p>

            <div className="flex gap-10 justify-baseline">
              <a
                href="https://final-12-why-sibi.vercel.app/"
                className="flex items-center gap-3 py-4 font-semibold hover:text-primary hover:after:content-['↗︎']"
              >
                <FaHome className="size-7" />
                Home
              </a>
              <a
                href="https://github.com/FRONTENDBOOTCAMP-13th/Final-12-WhySIBI"
                className="flex items-center gap-3 py-4 font-semibold hover:text-primary hover:after:content-['↗︎']"
              >
                <FaGithub className="size-7" />
                Githube
              </a>
            </div>
            <Image
              src="/images/나혼자산다.png"
              alt="나혼자산다 프로젝트 썸네일"
              width="300"
              height="200"
              className="hidden mt-10 md:block md:w-130 md:h-100"
            />
            <p className="font-bold md:text-lg text-primary">TECH STACK.</p>
            <p className=" md:text-lg">TypeScript, React, Next.js, Tailwind CSS, Vercel</p>
          </div>

          {/* 프로젝트 세부설명 */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="overflow-hidden ">
              <button
                onClick={() => toggle(0)}
                className={`w-full text-left px-5 py-4 cursor-pointer font-semibold md:text-2xl transition-colors ${
                  open === 0 ? " bg-primary text-[var(--color-text-inverse)]" : "text-primary "
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
                      <li>다크모드, FnQ 플로팅 등 공통 UI 구현</li>
                      <li>swiper 배너, 반응형 UI 구현</li>
                    </ul>
                  </li>
                  <li>
                    <p className="mb-1 font-bold text-primary">상품 기능</p>
                    <ul className="pl-5 space-y-1 list-disc">
                      <li>상품 조회 기능 구현</li>
                      <li>상품 검색 기능 구현</li>
                      <li>상품 추천 기능 구현</li>
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
                  open === 1 ? "bg-primary text-[var(--color-text-inverse)]" : "text-primary "
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
                    <p className="mb-1 font-bold text-primary">
                      Zustand 상태 갱신 시 렌더링 불가 문제 해결
                    </p>
                    <ul className="pl-5 space-y-1 list-disc">
                      <li>
                        <span className="font-semibold">문제상황</span> : store 내부에서 비동기{" "}
                        <code>setState</code> 호출로 인해 React가 상태 변화를 감지하지 못해, 전역
                        상태 변경 시 UI 갱신이 누락됨
                      </li>
                      <li>
                        <span className="font-semibold">해결방안</span> : <code>useEffect</code> 내{" "}
                        <code>store.subscribe()</code>를 활용해 상태 변경을 직접 감지하고 강제
                        리렌더링 처리함. 비동기 <code>setState</code> 호출을 동기적으로 리팩토링하여
                        상태 변경 시점과 렌더링 타이밍을 일치시킴
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="mb-1 font-bold text-primary">상품 카드 불필요한 리렌더링 개선</p>
                    <ul className="pl-5 space-y-1 list-disc">
                      <li>
                        <span className="font-semibold">문제상황</span> : 상품 상태 변경 시 리스트
                        내 모든 상품 카드가 동시에 리렌더링되어 성능 저하 발생
                      </li>
                      <li>
                        <span className="font-semibold">해결방안 </span>: <code>React.memo</code>를
                        적용하여 컴포넌트 메모이제이션 처리, 개별 카드의 Props가 변경되지 않는 경우
                        렌더링을 방지함. 추가로, <code>useCallback</code>을 사용해 핸들러 함수를
                        메모이제이션하고, Zustand store를 분리하여 상태 의존도 최소화함
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
