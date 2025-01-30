"use client";
import { EventContainer } from "@/components/EventContainer";
import { Header } from "@/components/Header";
import { Events2024 } from "@/events/event-2024";
import { Events2025 } from "@/events/event-2025";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbSunHigh } from "react-icons/tb";
import { LuMoonStar } from "react-icons/lu";

export default function Home() {
  const [isDarkOrLight, setIsDarkOrLight] = useState(
    window.localStorage.getItem("isDarkOrLight") || "light"
  );
  const handleToggleLightOrDark = () => {
    const newValue = isDarkOrLight === "light" ? "dark" : "light";
    window.localStorage.setItem("isDarkOrLight", newValue);
    setIsDarkOrLight(newValue);
  };

  return (
    <main className={isDarkOrLight}>
      <Header />
      <div className="flex flex-col gap-10 items-start justify-start">
        <EventContainer title="December 2024" data={Events2024.DECEMBER} />
        <EventContainer title="January 2025" data={Events2025.JANUARY} />
        <EventContainer title="February 2025" data={Events2025.FEBRUARY} />
      </div>

      <footer className="mt-5 py-10">
        <p className="text-center text-sm">
          Created by{" "}
          <a href="https://github.com/kevinuehara" target="_blank">
            @kevinuehara
          </a>{" "}
          and Community 2025; <br /> Style Review by{" "}
          <a href="https://github.com/paulhenrique">@phvcandido</a>.
        </p>
        <div className="mt-6 text-center flex justify-center text-sm">
          <a target="_blank" href="https://github.com/kevinuehara/ignite-stage">
            <FaGithub size="30px" />
          </a>
        </div>
      </footer>

      <button className="lightButton" onClick={handleToggleLightOrDark}>
        {isDarkOrLight === "light" ? (
          <TbSunHigh size="24px" className="rotate" />
        ) : (
          <LuMoonStar size="24px" className="rotate" />
        )}
      </button>
    </main>
  );
}
