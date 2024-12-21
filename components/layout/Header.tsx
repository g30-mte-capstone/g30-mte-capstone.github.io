"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Colors } from "../../enums/colors";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const colors = [
    Colors.ACCENT_RED_COLOR,
    Colors.ACCENT_BLUE_COLOR,
    Colors.ACCENT_YELLOW_COLOR,
    Colors.ACCENT_PURPLE_COLOR,
    Colors.ACCENT_GREEN_COLOR,
  ];

  const renderMulticoloredText = (text: string) => {
    return (
      <span className="group">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block transition-colors duration-300 group-hover:text-[var(--color)]"
            style={
              {
                ["--color" as string]: colors[index % colors.length],
              } as React.CSSProperties
            }
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <header
      className={`appear px-4 py-2 flex justify-between items-center h-[5vh] transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:opacity-100`}
    >
      <div className="flex space-x-5 pl-4">
        <ul className="list-none flex m-0 p-0 space-x-5">
          <li>
            <Link href="/">{renderMulticoloredText("Home")}</Link>
          </li>
          <li>
            <Link href="/experience">
              {renderMulticoloredText("Experience")}
            </Link>
          </li>
          <li>
            <Link href="/hobbies">{renderMulticoloredText("Hobbies")}</Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-5 pr-4">
        <a
          href="https://ca.linkedin.com/in/leojcyou"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-[var(--accent-blue-color)]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/leojcyou"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-[var(--accent-purple-color)]"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:leojcyou@outlook.com"
          className="text-xl hover:text-[var(--accent-green-color)]"
        >
          <FaEnvelope />
        </a>
      </div>
    </header>
  );
};

export default Header;
