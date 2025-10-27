export default function Experience() {
  return (
    <div className="container w-full max-w-screen-xl px-4 py-6 mx-auto md:px-6 md:py-12">
      <div className="flex flex-col w-full max-h-[calc(100dvh-3rem)] md:max-h-none overflow-y-auto md:overflow-visible">
        {/* 타이틀 */}
        <div className="font-bold text-[var(--color-text-inverse)]  text-[clamp(1.875rem,6vw,6rem)] whitespace-nowrap tracking-tight m-3">
          <p>EXPERIENCE.</p>
        </div>
        {/* 경험 */}
        <div className="grid gap-4 px-2 md:gap-10 md:grid-cols-2 ">
          <div>
            <p className="mb-2 text-base text-[var(--color-text-inverse)] font-semibold md:text-xl lg:text-2xl ">
              숭실대학교 | 디지털미디어학과 졸업.
            </p>
            <p className="mb-2 text-xs md:mb-4 text-text-secondary md:text-sm lg:text-lg">
              2021.03 - 2025.02
            </p>
            <p className="text-xs leading-relaxed md:text-sm lg:text-lg">
              미디어 공학을 4년간 전공하며 <br />
              데이터베이스, 머신러닝, 웹 프로그래밍 등의 공학 과목과
              <br /> UX/UI, 3D 그래픽디자인 등의 미디어 과목을 우수한 성적으로 이수했습니다.
              <br />
              재학 중 3년간은 일을 병행하며 학업을 이어갔습니다.
            </p>
          </div>
          <div>
            <p className="mb-2 text-base text-[var(--color-text-inverse)] font-semibold  md:text-xl lg:text-2xl ">
              멋쟁이 사자처럼 | FE 개발 부트캠프 수료.
            </p>
            <p className="mb-2 text-xs md:mb-4 text-text-secondary md:text-sm lg:text-lg">
              2025.02 - 2025. 08
            </p>
            <p className="text-xs md:text-sm lg:text-lg">
              6개월간 Next.js와 React Hooks 중심으로 FE 개발 과정을 심화 학습하고
              <br /> 팀 프로젝트를 3회 진행했습니다.
            </p>
          </div>
          <div>
            <p className="mb-2 text-base text-[var(--color-text-inverse)] font-semibold  md:text-xl lg:text-2xl ">
              DevTalk FE | 주니어 개발자 발표 스터디.
            </p>
            <p className="mb-2 text-xs md:mb-4 text-text-secondary md:text-sm lg:text-lg">
              2025.08 - 현재{" "}
            </p>
            <p className="mb-2 text-xs md:text-sm lg:text-lg">
              부트캠프를 수료한 동료들과 주니어 개발자 발표 스터디를 운영하며 <br />
              매주 개발 이슈와 성장 회고를 발표하는 시간을 가집니다.
            </p>
            <a
              className="inline-block px-2 py-1.5 text-[10px] leading-tight rounded-md bg-primary-hover md:px-3 md:py-2 md:text-sm text-[var(--color-text-inverse)] hover:opacity-80 transition-opacity"
              href="https://spiced-gastonia-d44.notion.site/CORS-2699204dd59b8096aed6d4cb639a718d"
            >
              정유진 발표자료 링크_[CORS 를 준수하며 백엔드와 협업하기]_ 2025.09.11 ↗︎
            </a>
          </div>
          <div>
            <p className="mb-2 text-base text-[var(--color-text-inverse)] font-semibold  md:text-xl lg:text-2xl ">
              KH 정보교육원 | 웹개발 교육 수료.
            </p>
            <p className="mb-2 text-xs md:mb-4 text-text-secondary md:text-sm lg:text-lg">
              2022.02 - 2022. 07
            </p>
            <p className="text-xs md:text-sm lg:text-lg">
              6개월간 JSP와 Spring Framework를 이용한 웹 개발 과정을 수료했습니다. <br />이 과정을
              통해 웹 구조와 서버-클라이언트 데이터 흐름에 대한 기초를 이해하고, 팀 프로젝트를 2회
              수행했습니다.
            </p>
          </div>
          <div>
            <p className="mb-2 text-base text-[var(--color-text-inverse)] font-semibold  md:text-xl lg:text-2xl ">
              IT 자격증 취득.
            </p>
            <p className="mb-2 text-xs md:mb-4 text-text-secondary md:text-sm lg:text-lg">
              정보처리기사 (2024.12), SQLD (2025.02), GTQ 1급 (2016.10), <br />
              컴퓨터 활용능력 2급 (2015.10), ITQ QA Master
            </p>
            <p className="text-xs md:text-sm lg:text-lg">
              웹 개발과 관련된 자격증을 꾸준히 취득하며 CS 기초를 다졌습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
