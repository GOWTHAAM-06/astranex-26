"use client";
import { useEffect, useRef } from "react";
import { stats, statements } from "@/data/achievements";
import ScrollReveal from "@/components/ScrollReveal"; // 👈 Added ScrollReveal Import

export default function Achievements() {
  const countersRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          stats.forEach((stat) => {
            const el = document.getElementById(stat.id);
            if (!el) return;
            let start = 0;
            const step = stat.number / (1000 / 16);
            const timer = setInterval(() => {
              start = Math.min(start + step, stat.number);
              el.textContent = Math.floor(start) + stat.suffix;
              if (start >= stat.number) clearInterval(timer);
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (countersRef.current) observer.observe(countersRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      style={{
        minHeight: "100vh",
        background: "#020408",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px",
      }}
    >
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
          max-width: 960px;
          margin: 0 auto 48px;
        }
        .stat-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,179,255,0.12);
          border-radius: 14px;
          padding: 28px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .stat-card:hover {
          transform: translateY(-4px);
        }
        .statement-row {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,179,255,0.08);
          border-radius: 10px;
          padding: 20px 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: all 0.3s;
          cursor: pointer;
          margin-bottom: 14px;
        }
        .statement-row:hover {
          border-color: rgba(99,179,255,0.3);
          background: rgba(99,179,255,0.03);
          transform: translateX(4px);
        }
      `}</style>

      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(99,179,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,179,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <ScrollReveal delay={100}> {/* 👈 Opening ScrollReveal */}

          {/* Header */}
          <div style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "11px", letterSpacing: "4px",
            color: "#63b3ff", textAlign: "center",
            textTransform: "uppercase", marginBottom: "12px",
          }}>
            ◈ Mission Accomplished ◈
          </div>
          <div style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(24px, 5vw, 42px)",
            fontWeight: 900, color: "#fff",
            textAlign: "center", letterSpacing: "4px",
            marginBottom: "8px",
            textShadow: "0 0 40px rgba(99,179,255,0.4)",
          }}>
            ACHIEVEMENTS
          </div>
          <div style={{
            width: "80px", height: "1px",
            background: "linear-gradient(90deg, transparent, #63b3ff, transparent)",
            margin: "0 auto 16px",
          }} />
          <div style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "12px", color: "rgba(255,255,255,0.3)",
            textAlign: "center", letterSpacing: "2px",
            marginBottom: "52px", textTransform: "uppercase",
          }}>
            The proof · The numbers · The statement
          </div>

          {/* Stats */}
          <div className="stats-grid" ref={countersRef}>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="stat-card"
                style={{ borderColor: `${stat.accent}22` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${stat.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)`,
                }} />
                <span style={{ fontSize: "24px", marginBottom: "12px", display: "block" }}>
                  {stat.icon}
                </span>
                <div
                  id={stat.id}
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    fontSize: "clamp(32px, 5vw, 48px)",
                    fontWeight: 900,
                    color: stat.accent,
                    textShadow: `0 0 30px ${stat.glow}`,
                    lineHeight: 1, marginBottom: "8px",
                  }}
                >
                  0
                </div>
                <div style={{
                  fontFamily: "var(--font-share-tech)",
                  fontSize: "10px", color: "rgba(255,255,255,0.35)",
                  letterSpacing: "2px", textTransform: "uppercase",
                  lineHeight: 1.6, whiteSpace: "pre-line",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Statements */}
          <div style={{ maxWidth: "960px", margin: "0 auto 48px" }}>
            {statements.map((statement, i) => (
              <div key={i} className="statement-row">
                <div style={{
                  width: "8px", height: "8px",
                  borderRadius: "50%",
                  background: "#63b3ff",
                  boxShadow: "0 0 10px #63b3ff",
                  flexShrink: 0, marginTop: "5px",
                }} />
                <div style={{
                  fontFamily: "var(--font-share-tech)",
                  fontSize: "12px", color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.5px", lineHeight: 1.7,
                }}>
                  {statement}
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{
            maxWidth: "700px", margin: "0 auto",
            textAlign: "center", padding: "40px 24px",
            border: "1px solid rgba(99,179,255,0.1)",
            borderRadius: "16px",
            background: "rgba(99,179,255,0.02)",
          }}>
            <div style={{
              fontFamily: "var(--font-orbitron)",
              fontSize: "clamp(13px, 2vw, 16px)",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "1px", lineHeight: 1.8,
              fontStyle: "italic", marginBottom: "16px",
            }}>
              &ldquo;We don&apos;t announce what we&apos;ll do.<br />
              <span style={{ color: "#63b3ff", textShadow: "0 0 20px rgba(99,179,255,0.5)" }}>
                We show what we&apos;ve done.&rdquo;
              </span>
            </div>
            <div style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "10px", color: "rgba(255,255,255,0.25)",
              letterSpacing: "3px", textTransform: "uppercase",
            }}>
              — ASTRANEX&apos;26 · SRG Engineering College
            </div>
          </div>

          {/* History line */}
          <div style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(14px, 2.5vw, 20px)",
            fontWeight: 900, color: "#fff",
            textAlign: "center", letterSpacing: "2px",
            marginTop: "48px",
            textShadow: "0 0 30px rgba(99,179,255,0.3)",
          }}>
            History only remembers{" "}
            <span style={{ color: "#63b3ff" }}>how you finished.</span>
          </div>

        </ScrollReveal> {/* 👈 Closing ScrollReveal */}
      </div>
    </section>
  );
}