"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = ["Home", "About", "Crew", "Missions", "Achievements", "Contact"];
  const hrefs = ["#home", "#about", "#committee", "#events", "#achievements", "#contact"];

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: "16px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(2,4,8,0.95)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(99,179,255,0.1)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        fontFamily: "var(--font-orbitron)",
        fontSize: "18px",
        fontWeight: 900,
        color: "#fff",
        letterSpacing: "3px",
        textShadow: "0 0 20px rgba(99,179,255,0.5)",
      }}>
        ASTRANEX<span style={{ color: "#63b3ff" }}>&apos;26</span>
      </div>
      <div style={{ display: "flex", gap: "28px" }}>
        {links.map((link, i) => (
          <a
            key={link}
            href={hrefs[i]}
            style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              textTransform: "uppercase" as const,
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#63b3ff";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}