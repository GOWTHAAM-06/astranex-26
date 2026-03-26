"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;
    const container = starsRef.current;
    for (let i = 0; i < 120; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2.5 + 0.5;
      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: white;
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5};
        animation: twinkle ${2 + Math.random() * 4}s ease-in-out infinite ${-Math.random() * 4}s;
      `;
      container.appendChild(star);
    }
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "#020408",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
      }}
    >
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          from { top: -2px; }
          to { top: 100%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .hero-badge {
          opacity: 0;
          animation: fadeUp 1s ease forwards 0.2s;
        }
        .hero-title {
          opacity: 0;
          animation: fadeUp 1s ease forwards 0.5s;
        }
        .hero-tagline {
          opacity: 0;
          animation: fadeUp 1s ease forwards 0.8s;
        }
        .hero-divider {
          opacity: 0;
          animation: fadeUp 1s ease forwards 1s;
        }
        .hero-sub {
          opacity: 0;
          animation: fadeUp 1s ease forwards 1.1s;
        }
        .hero-quote {
          opacity: 0;
          animation: fadeUp 1s ease forwards 1.4s;
        }
        .hero-cta {
          opacity: 0;
          animation: fadeUp 1s ease forwards 1.6s;
        }
        .hero-stats {
          opacity: 0;
          animation: fadeUp 1s ease forwards 1.8s;
          display: flex;
          gap: 48px;
          margin-top: 60px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero-btn-primary {
          font-family: var(--font-orbitron);
          font-size: 12px;
          letter-spacing: 2px;
          padding: 14px 32px;
          background: #63b3ff;
          color: #020408;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 700;
          text-transform: uppercase;
          transition: all 0.3s;
          text-decoration: none;
        }
        .hero-btn-primary:hover {
          background: #90c9ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(99,179,255,0.4);
        }
        .hero-btn-secondary {
          font-family: var(--font-orbitron);
          font-size: 12px;
          letter-spacing: 2px;
          padding: 14px 32px;
          background: transparent;
          color: #63b3ff;
          border: 1px solid rgba(99,179,255,0.4);
          border-radius: 4px;
          cursor: pointer;
          font-weight: 700;
          text-transform: uppercase;
          transition: all 0.3s;
          text-decoration: none;
        }
        .hero-btn-secondary:hover {
          background: rgba(99,179,255,0.08);
          transform: translateY(-2px);
        }

        /* MOBILE STYLES */
        @media (max-width: 768px) {
          .hero-badge {
            font-size: 9px !important;
            letter-spacing: 1px !important;
            padding: 6px 10px !important;
            text-align: center !important;
            max-width: 260px !important;
            line-height: 1.6 !important;
          }
          .hero-stats {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
            width: 100% !important;
          }
          .hero-btn-primary, .hero-btn-secondary {
            padding: 12px 20px !important;
            font-size: 10px !important;
          }
        }
      `}</style>

      {/* Stars */}
      <div ref={starsRef} style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(99,179,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,179,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        zIndex: 0,
      }} />

      {/* Scanning line */}
      <div style={{
        position: "absolute", left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(99,179,255,0.3), transparent)",
        animation: "scan 6s linear infinite",
        zIndex: 1,
      }} />

      {/* Glow orbs */}
      <div style={{
        position: "absolute", width: "400px", height: "400px",
        background: "#1a4a8a", borderRadius: "50%",
        filter: "blur(80px)", top: "-100px", left: "-100px",
        opacity: 0.15, animation: "pulse 5s ease-in-out infinite",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute", width: "300px", height: "300px",
        background: "#0a2a5a", borderRadius: "50%",
        filter: "blur(80px)", bottom: "-50px", right: "-50px",
        opacity: 0.15, animation: "pulse 7s ease-in-out infinite",
        zIndex: 0,
      }} />

      {/* Corner decorations */}
      {[
        { top: "16px", left: "16px", borderWidth: "1px 0 0 1px" },
        { top: "16px", right: "16px", borderWidth: "1px 1px 0 0" },
        { bottom: "16px", left: "16px", borderWidth: "0 0 1px 1px" },
        { bottom: "16px", right: "16px", borderWidth: "0 1px 1px 0" },
      ].map((corner, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "20px", height: "20px",
            borderColor: "rgba(99,179,255,0.4)",
            borderStyle: "solid",
            ...corner,
            zIndex: 2,
          }}
        />
      ))}

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column",
        alignItems: "center", maxWidth: "800px", width: "100%",
      }}>
        {/* Badge */}
        <div
          className="hero-badge"
          style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "11px", letterSpacing: "3px",
            color: "#63b3ff",
            border: "1px solid rgba(99,179,255,0.3)",
            padding: "6px 16px", borderRadius: "20px",
            background: "rgba(99,179,255,0.05)",
            marginBottom: "28px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          ◈ Dept. of CSE · IT · Cyber Security · AI&DS ◈
        </div>

        {/* Title */}
        <div
          className="hero-title"
          style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(36px, 8vw, 80px)",
            fontWeight: 900, color: "#ffffff",
            textAlign: "center", lineHeight: 1.05,
            letterSpacing: "6px",
            textShadow: "0 0 40px rgba(99,179,255,0.6), 0 0 80px rgba(99,179,255,0.3)",
          }}
        >
          ASTR<span style={{ color: "#63b3ff" }}>A</span>NEX
          <span style={{ color: "#63b3ff" }}>&apos;26</span>
        </div>

        {/* Tagline */}
        <div
          className="hero-tagline"
          style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "clamp(11px, 2vw, 16px)",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "4px", textAlign: "center",
            marginTop: "16px", textTransform: "uppercase",
          }}
        >
          — Every Skill Has a Stage —
        </div>

        {/* Divider */}
        <div
          className="hero-divider"
          style={{
            width: "120px", height: "1px",
            background: "linear-gradient(90deg, transparent, #63b3ff, transparent)",
            margin: "28px auto",
          }}
        />

        {/* Subtitle */}
        <div
          className="hero-sub"
          style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "12px", color: "rgba(255,255,255,0.35)",
            textAlign: "center", letterSpacing: "2px",
            textTransform: "uppercase", lineHeight: 1.8,
          }}
        >
          SRG Engineering College, Namakkal<br />
          Where Potential Ignites · Where Talent Rises
        </div>

        {/* Quote */}
        <div
          className="hero-quote"
          style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(11px, 1.8vw, 14px)",
            color: "rgba(255,255,255,0.7)",
            textAlign: "center", marginTop: "32px",
            letterSpacing: "2px", fontStyle: "italic",
          }}
        >
          &ldquo;We don&apos;t announce what we&apos;ll do. We show what we&apos;ve done.&rdquo;
        </div>

        {/* CTA Buttons */}
        <div
          className="hero-cta"
          style={{
            display: "flex", gap: "16px",
            marginTop: "40px", flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="#about" className="hero-btn-primary">Explore the Mission</a>
          <a href="#committee" className="hero-btn-secondary">Meet the Crew</a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {[
            { num: "60+", label: "Crew Members" },
            { num: "4", label: "Missions Launched" },
            { num: "27", label: "Certificates Awarded" },
            { num: "16", label: "Core Crew" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "28px", fontWeight: 900,
                color: "#63b3ff",
                textShadow: "0 0 20px rgba(99,179,255,0.5)",
              }}>
                {stat.num}
              </div>
              <div style={{
                fontFamily: "var(--font-share-tech)",
                fontSize: "10px", color: "rgba(255,255,255,0.35)",
                letterSpacing: "2px", textTransform: "uppercase",
                marginTop: "4px",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "24px",
        left: "50%", transform: "translateX(-50%)",
        fontFamily: "var(--font-share-tech)",
        fontSize: "10px", color: "rgba(255,255,255,0.25)",
        letterSpacing: "3px", textTransform: "uppercase",
        zIndex: 2,
      }}>
        ▼ scroll to explore ▼
      </div>
    </section>
  );
}