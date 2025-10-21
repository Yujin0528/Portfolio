import { FaGithub, FaInstagram, FaBlogger, FaEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="container w-full max-w-screen-xl min-h-screen px-6 mx-auto">
      <div className="flex flex-col justify-between w-full min-h-screen ">
        {/* 큰 타이틀 -위쪽 */}
        <div className="font-bold text-[clamp(1.875rem,8vw,7rem)] whitespace-nowrap tracking-tight m-3">
          <p>
            CONTACT
            <span className="font-bold period-mark">.</span>
          </p>
        </div>

        {/* 링크 */}
        <div className="flex-1 w-full py-2 md:p-6 text-[#CFD0D4] text-3xl md:text-5xl lg:text-6xl font-bold">
          <ul>
            <li className="mb-2 md:mb-5">
              <a
                href="mailto:yjjeong0528@gmail.com"
                className="flex gap-5 items-center px-4 py-2  hover:text-[var(--color-text-inverse)] hover:bg-primary-hover hover:after:content-['↗︎']"
              >
                <FaEnvelope className=" size-7" />
                E-Mail
              </a>
            </li>
            <li className="mb-2 md:mb-5">
              <a
                href="https://github.com/Yujin0528"
                className="flex gap-5 items-center px-4 py-2  hover:text-[var(--color-text-inverse)] hover:bg-primary-hover  hover:after:content-['↗︎']"
              >
                <FaGithub className="size-7" />
                Githube
              </a>
            </li>
            <li className="mb-2 md:mb-5">
              <a
                href="https://velog.io/@yujin_zzang"
                className="flex gap-5 items-center px-4 py-2  hover:text-[var(--color-text-inverse)] hover:bg-primary-hover hover:after:content-['↗︎']"
              >
                <FaBlogger className="size-7" />
                Blog
              </a>
            </li>
            <li className="mb-2 md:mb-5">
              <a
                href="https://www.instagram.com/youjean._s/"
                className="flex gap-5 items-center px-4 py-2 hover:text-[var(--color-text-inverse)] hover:bg-primary-hover hover:after:content-['↗︎']"
              >
                <FaInstagram className=" size-7" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* 큰 타이틀 -아래쪽 */}
        <div className="text-primary font-bold text-7xl md:text-[clamp(1.875rem,8vw,7rem)] whitespace-nowrap tracking-tight self-end mb-6">
          <p>THANK YOU.</p>
        </div>
      </div>
    </div>
  );
}
