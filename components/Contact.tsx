"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        background: "#020408",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <style>{`
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.6; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .contact-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,179,255,0.12);
          border-radius: 14px;
          padding: 32px;
          transition: all 0.3s;
        }
        .contact-card:hover {
          border-color: rgba(99,179,255,0.3);
          background: rgba(99,179,255,0.03);
        }
        .footer-link {
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: #63b3ff;
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

      {/* Glow orb */}
      <div style={{
        position: "absolute",
        width: "400px", height: "400px",
        background: "#1a4a8a",
        borderRadius: "50%",
        filter: "blur(100px)",
        bottom: "-100px", left: "50%",
        transform: "translateX(-50%)",
        opacity: 0.1, zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", width: "100%" }}>

        {/* Header */}
        <div style={{
          fontFamily: "var(--font-share-tech)",
          fontSize: "11px", letterSpacing: "4px",
          color: "#63b3ff", textAlign: "center",
          textTransform: "uppercase", marginBottom: "12px",
        }}>
          ◈ Open Transmission ◈
        </div>
        <div style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: 900, color: "#fff",
          textAlign: "center", letterSpacing: "4px",
          marginBottom: "8px",
          textShadow: "0 0 40px rgba(99,179,255,0.4)",
        }}>
          CONTACT
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
          SRG Engineering College · Namakkal
        </div>

        {/* Transmission card */}
        <div style={{
          background: "rgba(99,179,255,0.02)",
          border: "1px dashed rgba(99,179,255,0.2)",
          borderRadius: "16px", padding: "48px 32px",
          textAlign: "center", marginBottom: "32px",
        }}>
          <div style={{
            fontSize: "36px", marginBottom: "20px",
            display: "inline-block",
            animation: "rotate 8s linear infinite",
          }}>
            📡
          </div>
          <div style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(16px, 3vw, 24px)",
            fontWeight: 700, color: "#fff",
            letterSpacing: "2px", marginBottom: "16px",
          }}>
            ASTRANEX&apos;26 is built by students,<br />
            <span style={{ color: "#63b3ff" }}>for students.</span>
          </div>
          <div style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "13px", color: "rgba(255,255,255,0.4)",
            letterSpacing: "1px", lineHeight: 1.8,
            marginBottom: "32px",
          }}>
            Want to be part of something bigger?<br />
            Details on membership and upcoming missions — coming soon.
          </div>

          {/* Pulse indicator */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "8px",
          }}>
            <div style={{
              width: "8px", height: "8px",
              background: "#63b3ff", borderRadius: "50%",
              animation: "pulseDot 1.5s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "11px", color: "rgba(255,255,255,0.3)",
              letterSpacing: "3px", textTransform: "uppercase",
            }}>
              Signal Active · Watch This Space
            </span>
          </div>
        </div>

        {/* Info cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px", marginBottom: "48px",
        }}>
          {[
            { icon: "🏫", label: "Institution", value: "SRG Engineering College" },
            { icon: "📍", label: "Location", value: "Namakkal, Tamil Nadu" },
            { icon: "🎓", label: "Departments", value: "CSE · IT · Cyber · AI&DS" },
            { icon: "🚀", label: "Est.", value: "2025 · Still Standing" },
          ].map((item) => (
            <div key={item.label} className="contact-card">
              <span style={{ fontSize: "20px", display: "block", marginBottom: "8px" }}>
                {item.icon}
              </span>
              <div style={{
                fontFamily: "var(--font-share-tech)",
                fontSize: "9px", letterSpacing: "2px",
                color: "#63b3ff", textTransform: "uppercase",
                marginBottom: "4px",
              }}>
                {item.label}
              </div>
              <div style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "11px", color: "rgba(255,255,255,0.7)",
                letterSpacing: "1px",
              }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid rgba(99,179,255,0.08)",
          paddingTop: "32px", textAlign: "center",
        }}>
          <div style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "20px", fontWeight: 900,
            color: "#fff", letterSpacing: "4px",
            marginBottom: "8px",
            textShadow: "0 0 20px rgba(99,179,255,0.4)",
          }}>
            ASTRANEX<span style={{ color: "#63b3ff" }}>&apos;26</span>
          </div>
          <div style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "11px", color: "rgba(255,255,255,0.25)",
            letterSpacing: "2px", textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            Every Skill Has a Stage
          </div>
          <div style={{
            fontFamily: "var(--font-share-tech)",
            fontSize: "10px", color: "rgba(255,255,255,0.15)",
            letterSpacing: "1px",
          }}>
            © 2025 ASTRANEX&apos;26 · Dept. of CSE, IT, Cyber Security & AI&DS<br />
            SRG Engineering College, Namakkal
          </div>
        </div>
      </div>
    </section>
  );
}