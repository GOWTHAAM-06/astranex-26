"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = ["Home", "About", "Crew", "Missions", "Achievements", "Contact"];
  const hrefs = ["#home", "#about", "#committee", "#events", "#achievements", "#contact"];

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled || menuOpen ? "rgba(2,4,8,0.97)" : "transparent",
      borderBottom: scrolled || menuOpen ? "1px solid rgba(99,179,255,0.1)" : "none",
      backdropFilter: scrolled || menuOpen ? "blur(10px)" : "none",
      transition: "all 0.3s ease",
      flexWrap: "wrap",
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: "var(--font-orbitron)",
        fontSize: "16px", fontWeight: 900,
        color: "#fff", letterSpacing: "3px",
        textShadow: "0 0 20px rgba(99,179,255,0.5)",
      }}>
        ASTRANEX<span style={{ color: "#63b3ff" }}>&apos;26</span>
      </div>

      {/* Desktop links */}
      {!isMobile && (
        <div style={{ display: "flex", gap: "28px" }}>
          {links.map((link, i) => (
            <a
              key={link}
              href={hrefs[i]}
              style={{
                fontFamily: "var(--font-share-tech)",
                fontSize: "11px", letterSpacing: "2px",
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
      )}

      {/* Hamburger button */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "1px solid rgba(99,179,255,0.3)",
            borderRadius: "6px",
            padding: "8px 12px",
            cursor: "pointer",
            color: "#63b3ff",
            display: "flex",
            flexDirection: "column" as const,
            gap: "4px",
          }}
        >
          <span style={{
            display: "block", width: "18px", height: "1.5px",
            background: "#63b3ff",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
          }} />
          <span style={{
            display: "block", width: "18px", height: "1.5px",
            background: "#63b3ff",
            transition: "all 0.3s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: "18px", height: "1.5px",
            background: "#63b3ff",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
          }} />
        </button>
      )}

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{
          width: "100%",
          paddingTop: "20px",
          paddingBottom: "8px",
          display: "flex",
          flexDirection: "column" as const,
          gap: "4px",
        }}>
          {links.map((link, i) => (
            <a
              key={link}
              href={hrefs[i]}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-share-tech)",
                fontSize: "12px", letterSpacing: "3px",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                textTransform: "uppercase" as const,
                padding: "12px 0",
                borderBottom: "1px solid rgba(99,179,255,0.06)",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#63b3ff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
              }}
            >
              ◈ {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}