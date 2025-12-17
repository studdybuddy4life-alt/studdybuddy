// Frontend/pages/index.js
// StudyBuddy landing page – multi-subject, professional theme

import Image from "next/image";

export default function Home() {
  const styles = {
    main: {
      background:
        "radial-gradient(circle at top, #0f172a 0, #020617 40%, #020617 100%)",
      color: "white",
      minHeight: "100vh",
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
    },
    shell: {
      width: "100%",
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "0 1.75rem 3rem",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.1rem 1.75rem 0.8rem",
      borderBottom: "1px solid rgba(30,41,59,0.9)",
      position: "sticky",
      top: 0,
      zIndex: 20,
      background:
        "linear-gradient(to bottom, rgba(15,23,42,0.98), rgba(15,23,42,0.95), rgba(15,23,42,0.9))",
      backdropFilter: "blur(18px)",
    },
    navLeft: { display: "flex", alignItems: "center", gap: "0.55rem" },
    brandName: {
      fontWeight: 700,
      fontSize: "1.1rem",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    slogan: {
      fontSize: "0.7rem",
      color: "rgba(148,163,184,0.9)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },
    navLinks: {
      display: "flex",
      gap: "1.1rem",
      fontSize: "0.9rem",
      color: "rgba(148,163,184,0.95)",
      alignItems: "center",
    },
    navLink: {
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      background: "none",
      padding: 0,
      color: "inherit",
    },
    signInBtn: {
      padding: "0.45rem 1.1rem",
      borderRadius: "999px",
      border: "1px solid rgba(148,163,184,0.7)",
      backgroundColor: "rgba(15,23,42,0.95)",
      color: "rgba(226,232,240,0.95)",
      fontSize: "0.85rem",
      textDecoration: "none",
      cursor: "pointer",
    },
    section: { paddingTop: "2.6rem" },

    heroLayout: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
      gap: "2.2rem",
      alignItems: "center",
      marginTop: "2.3rem",
    },
    heroTitle: {
      fontSize: "2.6rem",
      lineHeight: 1.05,
      fontWeight: 800,
    },
    heroHighlight: { color: "#38bdf8" },
    heroSub: {
      fontSize: "1rem",
      maxWidth: "640px",
      color: "rgba(226,232,240,0.9)",
      marginTop: "0.5rem",
    },
    miniLine: {
      fontSize: "0.9rem",
      color: "rgba(148,163,184,0.9)",
    },
    pillRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginTop: "0.7rem",
    },
    pill: {
      fontSize: "0.78rem",
      padding: "0.3rem 0.8rem",
      borderRadius: "999px",
      background:
        "linear-gradient(90deg, rgba(56,189,248,0.16), rgba(129,140,248,0.16))",
      border: "1px solid rgba(148,163,184,0.4)",
      color: "rgba(226,232,240,0.9)",
    },
    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.8rem",
      marginTop: "0.9rem",
    },
    primaryButton: {
      padding: "0.8rem 1.7rem",
      borderRadius: "999px",
      border: "none",
      background:
        "linear-gradient(135deg, #22c55e, #38bdf8, #6366f1)",
      color: "white",
      fontWeight: 600,
      fontSize: "0.95rem",
      cursor: "pointer",
      textDecoration: "none",
      boxShadow: "0 16px 32px rgba(15,23,42,0.8)",
    },
    secondaryButton: {
      padding: "0.8rem 1.7rem",
      borderRadius: "999px",
      border: "1px solid rgba(148,163,184,0.8)",
      backgroundColor: "rgba(15,23,42,0.95)",
      color: "rgba(226,232,240,0.95)",
      fontWeight: 500,
      fontSize: "0.95rem",
      cursor: "pointer",
      textDecoration: "none",
    },
    footer: {
      borderTop: "1px solid rgba(30,41,59,1)",
      padding: "1rem 1.75rem 1.4rem",
      marginTop: "1.2rem",
      fontSize: "0.78rem",
      color: "rgba(148,163,184,0.85)",
      textAlign: "center",
    },
  };

  const handleNavClick = (id) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main style={styles.main}>
      {/* NAVBAR */}
      <header style={styles.nav}>
        <div style={styles.navLeft}>
          <Image
            src="/studybuddy-logo.svg"
            alt="StudyBuddy logo"
            width={38}
            height={38}
            priority
          />
          <div>
            <div style={styles.brandName}>StudyBuddy</div>
            <div style={styles.slogan}>Learn smarter. Grow stronger.</div>
          </div>
        </div>

        <nav style={styles.navLinks}>
          <button style={styles.navLink} onClick={() => handleNavClick("about")}>
            About
          </button>
          <button
            style={styles.navLink}
            onClick={() => handleNavClick("reviews")}
          >
            Reviews
          </button>
          <button
            style={styles.navLink}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </button>

          {/* SIGN IN */}
          <a href="/sign-in" style={styles.signInBtn}>
            Sign in
          </a>
        </nav>
      </header>

      <div style={styles.shell}>
        {/* HERO */}
        <section style={styles.section}>
          <div style={styles.heroLayout}>
            <div>
              <p style={styles.miniLine}>
                K–12 to Master&apos;s level · Science · Maths · Technology
              </p>

              <h1 style={styles.heroTitle}>
                Your{" "}
                <span style={styles.heroHighlight}>
                  all-in-one tutor squad
                </span>{" "}
                for every stage of learning.
              </h1>

              <p style={styles.heroSub}>
                StudyBuddy brings together a team of expert tutors in Science,
                Maths and Technology to support learners from school to
                university and beyond.
              </p>

              <div style={styles.buttonRow}>
                <a href="/sign-up" style={styles.primaryButton}>
                  🎓 Start learning
                </a>
                <a href="/apply-tutor" style={styles.secondaryButton}>
                  🧑‍🏫 Join as tutor
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={styles.section}>
          <h2>About StudyBuddy</h2>
          <p>
            StudyBuddy connects learners with expert tutors across Science,
            Maths and Technology, from school to advanced levels.
          </p>
        </section>

        {/* REVIEWS */}
        <section id="reviews" style={styles.section}>
          <h2>What learners say</h2>
          <p>Trusted by students, parents and professionals.</p>
        </section>

        {/* CONTACT */}
        <section id="contact" style={styles.section}>
          <h2>Contact us</h2>
          <p>Have questions? Reach out and we&apos;ll help you.</p>
        </section>
      </div>

      <footer style={styles.footer}>
        StudyBuddy · Learn smarter, grow stronger
      </footer>
    </main>
  );
}
