"use client";
import { useState } from "react";
import { coreTeam, missionTeam } from "@/data/committee";
import ScrollReveal from "@/components/ScrollReveal";

type CrewMember = {
  name: string;
  position: string;
  missionRole: string;
  icon: string;
  year: string;
  isVP: boolean;
};

const profiles: Record<string, string> = {
  "Ranjith": "Leads with silence. Guides without noise. The kind of leader who doesn't need to announce his presence — the room already knows. Final year, final mission, unforgettable mark.",
  "Gowthaam": "Came in with fire. Built two projects before anyone else dared to try. Both hit the wall at the final step. Most would stop there. He didn't. Now he's back — quieter, sharper, more dangerous than before. The comeback is always louder than the setback.",
  "Hairul Ameer": "Technically aggressive. Hungry to prove something. Doesn't wait for permission to build — just builds. The kind of energy that makes teams move faster.",
  "Prakesh": "First year. Steady as a rock. Adapts to every situation without losing composure. The crew's anchor when everything else is moving.",
  "Karthiga Devi": "Bold in words. Sharp in decisions. Tactical when it matters most. The one who keeps the mission funded and the crew moving forward.",
  "Abivetrivelan": "Calm on the surface. Dangerous underneath. Best video editor in the crew — the kind of talent that makes standards rise. Unbothered by attention. Focused on output.",
  "Jiviya": "Still finding the path. But the hunger is real. Every great crew needs someone who is growing in real time — and she is exactly that.",
};

export default function Committee() {
  const [selected, setSelected] = useState<CrewMember | null>(null);

  return (
    <section
      id="committee"
      style={{
        minHeight: "100vh",
        background: "#020408",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px",
      }}
    >
      <style>{`
        .crew-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          max-width: 960px;
          margin: 0 auto 16px;
        }
        .crew-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,179,255,0.15);
          border-radius: 12px;
          padding: 20px 16px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .crew-card:hover {
          border-color: rgba(99,179,255,0.5);
          background: rgba(99,179,255,0.05);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(99,179,255,0.15);
        }
        .crew-card-vp {
          border-color: rgba(99,179,255,0.4) !important;
          background: rgba(99,179,255,0.04) !important;
          box-shadow: 0 0 30px rgba(99,179,255,0.1);
        }
        .crew-card-vp:hover {
          border-color: #63b3ff !important;
          box-shadow: 0 16px 50px rgba(99,179,255,0.25) !important;
        }
        .team-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          max-width: 960px;
          margin: 0 auto;
          justify-content: center;
        }
        .team-pill {
          font-family: var(--font-share-tech);
          font-size: 11px;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(99,179,255,0.15);
          border-radius: 20px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.02);
          transition: all 0.3s;
          cursor: default;
        }
        .team-pill:hover {
          color: #63b3ff;
          border-color: rgba(99,179,255,0.4);
          background: rgba(99,179,255,0.05);
        }
        .scan-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #63b3ff44, transparent);
          animation: scanCard 3s ease-in-out infinite;
        }
        @keyframes scanCard {
          0% { bottom: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { bottom: 100%; opacity: 0; }
        }
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2,4,8,0.92);
          zIndex: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          backdrop-filter: blur(10px);
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-card {
          background: #060d18;
          border: 1px solid rgba(99,179,255,0.3);
          border-radius: 20px;
          padding: 40px;
          max-width: 480px;
          width: 100%;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .modal-close {
          position: absolute;
          top: 16px; right: 16px;
          background: rgba(99,179,255,0.1);
          border: 1px solid rgba(99,179,255,0.2);
          border-radius: 50%;
          width: 32px; height: 32px;
          color: #63b3ff;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .modal-close:hover {
          background: rgba(99,179,255,0.2);
          transform: rotate(90deg);
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

      {/* Profile Modal */}
      {selected && (
        <div
          className="modal-overlay"
          style={{ zIndex: 999 }}
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* Top accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "2px", borderRadius: "20px 20px 0 0",
              background: "linear-gradient(90deg, transparent, #63b3ff, transparent)",
            }} />

            <span style={{ fontSize: "40px", display: "block", marginBottom: "16px" }}>
              {selected.icon}
            </span>

            <div style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "9px", letterSpacing: "3px",
              color: "#63b3ff", textTransform: "uppercase",
              marginBottom: "6px",
            }}>
              {selected.position}
            </div>

            <div style={{
              fontFamily: "var(--font-orbitron)",
              fontSize: "24px", fontWeight: 900,
              color: "#fff", letterSpacing: "2px",
              marginBottom: "4px",
            }}>
              {selected.name}
            </div>

            <div style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "11px", color: "#63b3ff",
              letterSpacing: "2px", fontStyle: "italic",
              marginBottom: "8px",
            }}>
              {selected.missionRole}
            </div>

            <span style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "9px",
              background: "rgba(99,179,255,0.1)",
              border: "1px solid rgba(99,179,255,0.2)",
              color: "#63b3ff", padding: "3px 10px",
              borderRadius: "20px", display: "inline-block",
              letterSpacing: "1px", marginBottom: "24px",
            }}>
              {selected.year}
            </span>

            <div style={{
              width: "60px", height: "1px",
              background: "linear-gradient(90deg, #63b3ff, transparent)",
              marginBottom: "20px",
            }} />

            <div style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "13px", color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8, letterSpacing: "0.5px",
            }}>
              {profiles[selected.name] || "A vital part of the ASTRANEX'26 crew. Every mission needs every member."}
            </div>

            <div style={{
              marginTop: "24px", paddingTop: "20px",
              borderTop: "1px solid rgba(99,179,255,0.08)",
              fontFamily: "var(--font-share-tech)",
              fontSize: "9px", color: "rgba(255,255,255,0.2)",
              letterSpacing: "2px", textTransform: "uppercase",
            }}>
              ◈ ASTRANEX&apos;26 · SRG Engineering College
            </div>
          </div>
        </div>
      )}

      <ScrollReveal>
        <div style={{ position: "relative", zIndex: 2 }}>

          {/* Header */}
          <div style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "11px", letterSpacing: "4px",
            color: "#63b3ff", textAlign: "center",
            textTransform: "uppercase", marginBottom: "12px",
          }}>
            ◈ Mission Command ◈
          </div>
          <div style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(24px, 5vw, 42px)",
            fontWeight: 900, color: "#fff",
            textAlign: "center", letterSpacing: "4px",
            marginBottom: "8px",
            textShadow: "0 0 40px rgba(99,179,255,0.4)",
          }}>
            THE CREW
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
            16 members · 4 departments · 1 mission
          </div>

          {/* Core 7 */}
          <div className="crew-grid">
            {coreTeam.map((member) => (
              <div
                key={member.name}
                className={`crew-card ${member.isVP ? "crew-card-vp" : ""}`}
                onClick={() => setSelected(member)}
              >
                {member.isVP && <div className="scan-line" />}
                {member.isVP && (
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    fontFamily: "var(--font-share-tech)",
                    fontSize: "8px", letterSpacing: "2px",
                    background: "rgba(99,179,255,0.15)",
                    border: "1px solid rgba(99,179,255,0.4)",
                    color: "#63b3ff", padding: "3px 8px",
                    borderRadius: "10px", textTransform: "uppercase",
                  }}>
                    You
                  </div>
                )}
                <span style={{ fontSize: "22px", marginBottom: "10px", display: "block" }}>
                  {member.icon}
                </span>
                <div style={{
                  fontFamily: "var(--font-share-tech)",
                  fontSize: "9px", letterSpacing: "3px",
                  color: "#63b3ff", textTransform: "uppercase",
                  marginBottom: "6px",
                }}>
                  {member.position}
                </div>
                <div style={{
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "15px", fontWeight: 700,
                  color: "#fff", marginBottom: "4px",
                  letterSpacing: "1px",
                }}>
                  {member.name}
                </div>
                <div style={{
                  fontFamily: "var(--font-share-tech)",
                  fontSize: "10px", color: "rgba(255,255,255,0.4)",
                  letterSpacing: "1px", marginBottom: "10px",
                  fontStyle: "italic",
                }}>
                  {member.missionRole}
                </div>
                <span style={{
                  fontFamily: "var(--font-share-tech)",
                  fontSize: "9px",
                  background: "rgba(99,179,255,0.1)",
                  border: "1px solid rgba(99,179,255,0.2)",
                  color: "#63b3ff", padding: "3px 8px",
                  borderRadius: "20px", display: "inline-block",
                  letterSpacing: "1px",
                }}>
                  {member.year}
                </span>
                <div style={{
                  marginTop: "12px",
                  fontFamily: "var(--font-share-tech)",
                  fontSize: "9px", color: "rgba(99,179,255,0.4)",
                  letterSpacing: "1px",
                }}>
                  click to view profile →
                </div>
              </div>
            ))}
          </div>

          {/* Mission Team */}
          <div style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "14px", letterSpacing: "3px",
            color: "rgba(255,255,255,0.4)", textAlign: "center",
            textTransform: "uppercase", margin: "40px 0 20px",
          }}>
            ◈ Mission Team ◈
          </div>

          <div className="team-grid">
            {missionTeam.map((member) => (
              <div key={member.name} className="team-pill">
                {member.name} · {member.year}
              </div>
            ))}
          </div>

          {/* Bottom line */}
          <div style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "10px", color: "rgba(255,255,255,0.25)",
            textAlign: "center", marginTop: "32px",
            letterSpacing: "2px", textTransform: "uppercase",
          }}>
            ◈ In ASTRANEX&apos;26 — there are no winners or losers. Only crew. ◈
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}