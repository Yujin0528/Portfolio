export default function Skills() {
  return (
    <div className="container w-full max-w-screen-xl min-h-screen px-6 mx-auto">
      <div className="flex flex-col w-full min-h-screen pb-5">
        {/* 타이틀 */}
        <div className="font-bold  text-[clamp(1.875rem,8vw,7rem)] whitespace-nowrap tracking-tight m-3">
          <p>SKILLS.</p>
        </div>
        {/* 스킬 */}
        <div className="grid gap-6 px-3 md:gap-10 md:grid-cols-2 md:mt-10">
          <div>
            <p className="mb-4 text-lg font-semibold text-primary md:text-3xl">JavaScript.</p>
            <ul className="pl-6 space-y-2 list-disc md:text-lg">
              <li>JavaScript와 TypeScript를 활용하여 화면을 구현할 수 있습니다.</li>
              <li>비동기 처리, API 통신, 상태 관리 등 핵심 기능을 구현할 수 있습니다.</li>
              <li>Node.js 환경에서 npm 의존성 관리 및 프로젝트 환경을 세팅할 수 있습니다.</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-lg font-semibold text-primary md:text-3xl">React.</p>
            <ul className="pl-6 space-y-2 list-disc md:text-lg">
              <li>React Hooks를 사용해 재사용성 높은 컴포넌트를 구현할 수 있습니다.</li>
              <li>
                프로젝트 요구사항에 맞게 컴포넌트를 분리하고, 확장성 높은 UI 구조를 설계합니다.
              </li>
              <li>Zustand를 활용해 전역 상태를 관리할 수 있습니다.</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-lg font-semibold text-primary md:text-3xl">Database.</p>
            <ul className="pl-6 space-y-2 list-disc md:text-lg">
              <li>SQL을 활용하여 데이터 조회, 필터링, JOIN 등의 기본 쿼리를 작성할 수 있습니다.</li>
              <li>
                API 통신 과정을 이해하고, 서버와 클라이언트 상의 데이터 흐름을 이해하고 있습니다.
              </li>
              <li>
                백엔드와 함께 필요한 데이터 구조를 설계하고 요구 데이터 정의를 할 수 있습니다.
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-lg font-semibold text-primary md:text-3xl">UI System.</p>
            <ul className="pl-6 space-y-2 list-disc md:text-lg">
              <li>
                Tailwind CSS를 활용하여 반응형 레이아웃을 고려한 UI 시스템을 구축할 수 있습니다.
              </li>
              <li>Photoshop과 Illustrator 등 그래픽 디자인 툴 사용에 익숙합니다.</li>
              <li>Figma 툴 사용에 익숙하며 프로토타입을 기획/제작 할 수 있습니다.</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-lg font-semibold text-primary md:text-3xl">Communication.</p>
            <ul className="pl-6 space-y-2 list-disc md:text-lg">
              <li>Notion 사용에 익숙하여 회의록, 개발 문서 등을 체계적으로 관리할 수 있습니다.</li>
              <li>Git 사용에 익숙하며, 브랜치 운영 및 PR 기반 협업을 경험했습니다. </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
