import Link from "next/link";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

type ScrollBarProps = {
  currentSection: string;
};

export default function ScrollBar({ currentSection }: ScrollBarProps) {
  const isContact = currentSection === "#contact";

  return (
    <div className="w-20 h-20 md:w-25 md:h-25 bg-primary hover:bg-primary-hover text-[var(--color-text-inverse)] rounded-2xl cursor-pointer flex items-center justify-center text-xs md:text-sm">
      <Link
        href={isContact ? "#intro" : "#contact"}
        className="flex flex-col items-center justify-center"
      >
        GO TO
        <br />
        {isContact ? "INTRO" : "CONTACT"}
        <br /> ME
        {isContact ? (
          <HiOutlineChevronUp className="mt-1 md:mt-2 size-4 md:size-5" />
        ) : (
          <HiOutlineChevronDown className="mt-1 md:mt-2 size-4 md:size-5" />
        )}
      </Link>
    </div>
  );
}
