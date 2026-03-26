"use client";
import { completedEvents } from "@/data/events";

export default function Events() {
  return (
    <section
      id="events"
      style={{
        minHeight: "100vh",
        background: "#020408",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px",
      }}
    >
      <style>{`
        .missions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          max-width: 960px;
          margin: 0 auto 48px;
        }
        .mission-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,179,255,0.12);
          border-radius: 14px;
          padding: 28px 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
          cursor: pointer;
        }
        .mission-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(99,179,255,0.12);
        }
        .incoming-card {
          background: rgba(251,191,36,0.02);
          border: 1px dashed rgba(251,191,36,0.2);
          border-radius: 14px;
          padding: 40px 24px;
          text-align: center;
          max-width: 960px;
          margin: 0 auto;
          cursor: pointer;
          transition: all 0.3s;
        }
        .incoming-card:hover {
          border-color: rgba(251,191,36,0.4);
          background: rgba(251,191,36,0.04);
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.6; }
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

        {/* Header */}
        <div style={{
          fontFamily: "var(--font-share-tech)",
          fontSize: "11px", letterSpacing: "4px",
          color: "#63b3ff", textAlign: "center",
          textTransform: "uppercase", marginBottom: "12px",
        }}>
          ◈ Mission Log ◈
        </div>
        <div style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: 900, color: "#fff",
          textAlign: "center", letterSpacing: "4px",
          marginBottom: "8px",
          textShadow: "0 0 40px rgba(99,179,255,0.4)",
        }}>
          EVENTS
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
          Inaugural missions · ASTRANEX&apos;26 launch sequence
        </div>

        {/* Mission Cards */}
        <div className="missions-grid">
          {completedEvents.map((event) => (
            <div
              key={event.id}
              className="mission-card"
              style={{ borderColor: `${event.accent}22` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${event.accent}66`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${event.accent}22`;
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${event.accent}, transparent)`,
              }} />

              {/* Mission number + status */}
              <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}>
                <span style={{
                  fontFamily: "var(--font-share-tech)",
                  fontSize: "10px", letterSpacing: "3px",
                  color: event.accent, textTransform: "uppercase",
                }}>
                  {event.missionNumber}
                </span>
                <span style={{
                  fontFamily: "var(--font-share-tech)",
                  fontSize: "8px", letterSpacing: "2px",
                  padding: "3px 10px", borderRadius: "10px",
                  textTransform: "uppercase",
                  color: "#4ade80",
                  border: "1px solid rgba(74,222,128,0.3)",
                  background: "rgba(74,222,128,0.08)",
                }}>
                  Complete
                </span>
              </div>

              {/* Icon */}
              <span style={{ fontSize: "32px", marginBottom: "14px", display: "block" }}>
                {event.icon}
              </span>

              {/* Title */}
              <div style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "16px", fontWeight: 700,
                color: "#fff", letterSpacing: "1px",
                marginBottom: "6px",
              }}>
                {event.title}
              </div>

              {/* Codename */}
              <div style={{
                fontFamily: "var(--font-share-tech)",
                fontSize: "10px", color: event.accent,
                letterSpacing: "2px", marginBottom: "14px",
                textTransform: "uppercase",
              }}>
                {event.codename}
              </div>

              {/* Description */}
              <div style={{
                fontFamily: "var(--font-share-tech)",
                fontSize: "11px", color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7, letterSpacing: "0.5px",
              }}>
                {event.description}
              </div>

              {/* Footer */}
              <div style={{
                marginTop: "20px", paddingTop: "16px",
                borderTop: "1px solid rgba(99,179,255,0.08)",
                fontFamily: "var(--font-share-tech)",
                fontSize: "9px", color: "rgba(255,255,255,0.25)",
                letterSpacing: "1px", textTransform: "uppercase",
              }}>
                {event.date}
              </div>
            </div>
          ))}
        </div>

        {/* Incoming Transmission */}
        <div className="incoming-card">
          <div style={{
            fontSize: "28px", marginBottom: "14px",
            display: "inline-block",
            animation: "rotate 4s linear infinite",
          }}>
            📡
          </div>
          <div style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "18px", fontWeight: 700,
            color: "#fbbf24", letterSpacing: "3px",
            marginBottom: "8px",
            textShadow: "0 0 20px rgba(251,191,36,0.4)",
            animation: "blink 2s ease-in-out infinite",
          }}>
            INCOMING TRANSMISSION
          </div>
          <div style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "11px", color: "rgba(255,255,255,0.3)",
            letterSpacing: "2px", textTransform: "uppercase",
            lineHeight: 1.8,
          }}>
            <span style={{
              display: "inline-block",
              width: "6px", height: "6px",
              background: "#fbbf24", borderRadius: "50%",
              marginRight: "6px", verticalAlign: "middle",
              animation: "pulseDot 1.5s ease-in-out infinite",
            }} />
            Next mission is being planned by the crew<br />
            Signal detected · Details loading · Stay tuned
          </div>
        </div>
      </div>
    </section>
  );
}