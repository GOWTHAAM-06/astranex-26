export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "#020408",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 960px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
        }
        .about-stat-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,179,255,0.12);
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s;
        }
        .about-stat-card:hover {
          border-color: rgba(99,179,255,0.4);
          background: rgba(99,179,255,0.04);
          transform: translateY(-4px);
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

      <div style={{ position: "relative", zIndex: 2, maxWidth: "960px", width: "100%" }}>

        {/* Section label */}
        <div style={{
          fontFamily: "var(--font-share-tech)",
          fontSize: "11px", letterSpacing: "4px",
          color: "#63b3ff", textAlign: "center",
          textTransform: "uppercase", marginBottom: "12px",
        }}>
          ◈ Our Story ◈
        </div>

        {/* Title */}
        <div style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: 900, color: "#fff",
          textAlign: "center", letterSpacing: "4px",
          marginBottom: "8px",
          textShadow: "0 0 40px rgba(99,179,255,0.4)",
        }}>
          ABOUT ASTRANEX
        </div>

        {/* Divider */}
        <div style={{
          width: "80px", height: "1px",
          background: "linear-gradient(90deg, transparent, #63b3ff, transparent)",
          margin: "0 auto 48px",
        }} />

        {/* Main content grid */}
        <div className="about-grid">

          {/* Left — story */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "13px", color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9, letterSpacing: "0.5px",
            }}>
              Before us, others tried. They started with energy, with vision —
              and somewhere along the way, they stopped. The pattern was familiar.
              The result, predictable.
            </p>
            <p style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "13px", color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9, letterSpacing: "0.5px",
            }}>
              <span style={{ color: "#fff" }}>We decided to write a different story.</span>
            </p>
            <p style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "13px", color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9, letterSpacing: "0.5px",
            }}>
              ASTRANEX&apos;26 was born under the combined departments of CSE, IT,
              Cyber Security and AI&DS — not just as another association, but as
              a movement that refuses to stop.
            </p>
            <p style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "13px", color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9, letterSpacing: "0.5px",
            }}>
              From day one, we showed up differently. Not just in what we said —
              but in how we carried ourselves.{" "}
              <span style={{ color: "#63b3ff" }}>
                Those who were there understood. Those who weren&apos;t — will.
              </span>
            </p>
            <p style={{
              fontFamily: "var(--font-share-tech)",
              fontSize: "13px", color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9, letterSpacing: "0.5px",
            }}>
              Two tried before us. <span style={{ color: "#fff" }}>We&apos;re still standing.</span>
            </p>

            {/* Tagline */}
            <div style={{
              fontFamily: "var(--font-orbitron)",
              fontSize: "14px", color: "#63b3ff",
              letterSpacing: "2px", fontStyle: "italic",
              borderLeft: "2px solid #63b3ff",
              paddingLeft: "16px", marginTop: "8px",
            }}>
              Every Skill Has a Stage. This is yours.
            </div>
          </div>

          {/* Right — name meaning + values */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Name meaning card */}
            <div style={{
              background: "rgba(99,179,255,0.04)",
              border: "1px solid rgba(99,179,255,0.2)",
              borderRadius: "12px", padding: "24px",
            }}>
              <div style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "12px", letterSpacing: "3px",
                color: "#63b3ff", marginBottom: "16px",
                textTransform: "uppercase",
              }}>
                ◈ The Name
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { word: "ASTR", meaning: "The cosmos. Space. Infinite possibility." },
                  { word: "NEX", meaning: "Nexus. Connection. Where minds meet." },
                ].map((item) => (
                  <div key={item.word} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{
                      fontFamily: "var(--font-orbitron)",
                      fontSize: "16px", fontWeight: 900,
                      color: "#63b3ff", minWidth: "60px",
                      textShadow: "0 0 10px rgba(99,179,255,0.5)",
                    }}>
                      {item.word}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-share-tech)",
                      fontSize: "12px", color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                    }}>
                      {item.meaning}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                fontFamily: "var(--font-share-tech)",
                fontSize: "11px", color: "rgba(255,255,255,0.3)",
                marginTop: "16px", letterSpacing: "1px",
                borderTop: "1px solid rgba(99,179,255,0.1)",
                paddingTop: "12px",
              }}>
                Where the cosmos meets connection — that is ASTRANEX.
              </div>
            </div>

            {/* Values */}
            {[
              { icon: "⚡", title: "Technical Excellence", desc: "Building real skills for a real world." },
              { icon: "🎨", title: "Creative Expression", desc: "Every talent deserves a stage." },
              { icon: "🤝", title: "United Community", desc: "4 departments. 1 crew. 0 boundaries." },
            ].map((value) => (
              <div key={value.title} className="about-stat-card">
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "20px" }}>{value.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-orbitron)",
                      fontSize: "12px", fontWeight: 700,
                      color: "#fff", letterSpacing: "1px",
                      marginBottom: "4px",
                    }}>
                      {value.title}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-share-tech)",
                      fontSize: "11px", color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.5px",
                    }}>
                      {value.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}