"use client";

import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="font-semibold">
      <p className="text-primary">DARK MODE</p>
      <button
        type="button"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark"); //다크모드 토긅
        }}
        className="text-[#CFD0D4] cursor-pointer"
      >
        {theme === "light" ? (
          <span className="text-[#CFD0D4]">OFF</span>
        ) : (
          <span className="text-white">ON</span>
        )}
      </button>
    </div>
  );
}
