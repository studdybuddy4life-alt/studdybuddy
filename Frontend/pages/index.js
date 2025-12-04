// Frontend/pages/index.js
// Simple StudyBuddy landing page – ready to use

export default function Home() {
  const page = {
    main: {
      backgroundColor: "#020617",
      color: "white",
      minHeight: "100vh",
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
    },
    section: {
      width: "100%",
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "3rem 1.5rem",
    },
    hero: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      alignItems: "flex-start",
    },
    heroTitle: {
      fontSize: "2.75rem",
      lineHeight: 1.1,
      fontWeight: 800,
    },
    heroHighlight: {
      color: "#38bdf8",
    },
    heroSub: {
      fontSize: "1.1rem",
      maxWidth: "620px",
      color: "rgba(226,232,240,0.85)",
    },
    pillRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginTop: "0.5rem",
    },
    pill: {
      fontSize: "0.8rem",
      padding: "0.35rem 0.8rem",
      borderRadius: "999px",
      background:
        "linear-gradient(90deg, rgba(56,189,248,0.12), rgba(129,140,248,0.12))",
      border: "1px solid rgba(148,163,184,0.4)",
      color: "rgba(226,232,240,0.9)",
    },
    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.8rem",
      marginTop: "0.5rem",
    },
    primaryButton: {
      padding: "0.8rem 1.5rem",
      borderRadius: "999px",
      border: "none",
      background:
        "linear-gradient(135deg, #38bdf8, #6366f1, #a855f7)",
      color: "white",
      fontWeight: 600,
      fontSize: "0.95rem",
      cursor: "pointer",
      textDecoration: "none",
      boxShadow: "0 12px 22px rgba(15,23,42,0.7)",
    },
    secondaryButton: {
      padding: "0.8rem 1.5rem",
      borderRadius: "999px",
      border: "1px solid rgba(148,163,184,0.7)",
      backgroundColor: "rgba(15,23,42,0.85)",
      color: "rgba(226,232,240,0.9)",
      fontWeight: 500,
      fontSize: "0.95rem",
      cursor: "pointer",
      textDecoration: "none",
    },
    statBar: {
      marginTop: "2.5rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: "1rem",
      padding: "1.1rem 1.25rem",
      borderRadius: "1rem",
      background:
        "radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 60%), radial-gradient(circle at bottom right, rgba(129,140,248,0.18), transparent 60%)",
      border: "1px solid rgba(51,65,85,0.8)",
    },
    statItem: {
      display: "flex",
      flexDirection: "column",
      gap: "0.15rem",
    },
    statNumber: {
      fontWeight: 700,
      fontSize: "1.1rem",
    },
    statLabel: {
      fontSize: "0.8rem",
      color: "rgba(148,163,184,0.9)",
    },
    sectionTitle: {
      fontSize: "1.6rem",
      fontWeight: 700,
      marginBottom: "0.75rem",
    },
    sectionSub: {
      fontSize: "0.95rem",
      color: "rgba(148,163,184,0.95)",
      maxWidth: "640px",
      marginBottom: "1.8rem",
    },
    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "1.2rem",
    },
    card: {
      borderRadius: "1.2rem",
      padding: "1.3rem 1.2rem",
      background:
        "linear-gradient(145deg, rgba(15,23,42,0.85), rgba(15,23,42,1))",
      border: "1px solid rgba(51,65,85,0.9)",
    },
    cardTitle: {
      fontSize: "1rem",
      fontWeight: 600,
      marginBottom: "0.35rem",
    },
    cardText: {
      fontSize: "0.9rem",
      color: "rgba(148,163,184,0.95)",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.75rem",
      padding: "0.2rem 0.65rem",
      borderRadius: "999px",
      backgroundColor: "rgba(22,163,74,0.15)",
      color: "#4ade80",
      marginLeft: "0.4rem",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "1.6rem",
      marginTop: "0.5rem",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: "0.5rem 0 0",
      display: "flex",
      flexDirection: "column",
      gap: "0.45rem",
    },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "0.4rem",
      fontSize: "0.9rem",
      color: "rgba(148,163,184,0.95)",
    },
    bullet: {
      width: "0.45rem",
      height: "0.45rem",
      marginTop: "0.3rem",
      borderRadius: "999px",
      background:
        "linear-gradient(135deg, #38bdf8, #6366f1)",
      flexShrink: 0,
    },
    footer: {
      borderTop: "1px solid rgba(30,41,59,1)",
      padding: "1rem 1.5rem 1.5rem",
      marginTop: "1rem",
      fontSize: "0.8rem",
      color: "rgba(148,163,184,0.8)",
      textAlign: "center",
    },
  };

  return (
    <main style={page.main}>
      {/* HERO */}
      <section style={page.section}>
        <div style={page.hero}>
          <p style={{ fontSize: "0.9rem", color: "rgba(148,163,184,0.9)" }}>
            Personalised 1:1 online tutoring for US school students
          </p>

          <h1 style={page.heroTitle}>
            StudyBuddy – your{" "}
            <span style={page.heroHighlight}>smart study partner</span> for
            school & test prep.
          </h1>

          <p style={page.heroSub}>
            Match with a vetted tutor, book flexible sessions, track progress,
            and get doubts solved fast. Designed for busy students, supportive
            parents, and passionate tutors.
          </p>

          <div style={page.pillRow}>
            <span style={page.pill}>Grades 1–12</span>
            <span style={page.pill}>Math • Science • English & more</span>
            <span style={page.pill}>1:1 live sessions</span>
            <span style={page.pill}>Dashboard & progress reports</span>
          </div>

          <div style={page.buttonRow}>
            <a href="/signup" style={page.primaryButton}>
              🎓 I&apos;m a Student / Parent
            </a>
            <a href="/apply-tutor" style={page.secondaryButton}>
              🧑‍🏫 I want to Teach
            </a>
          </div>

          <div style={page.statBar}>
            <div style={page.statItem}>
              <span style={page.statNumber}>1-to-1</span>
              <span style={page.statLabel}>Live personalised classes</span>
            </div>
            <div style={page.statItem}>
              <span style={page.statNumber}>Flexible</span>
              <span style={page.statLabel}>Schedule & rescheduling options</span>
            </div>
            <div style={page.statItem}>
              <span style={page.statNumber}>Goal-based</span>
              <span style={page.statLabel}>Homework, tests & exam prep</span>
            </div>
            <div style={page.statItem}>
              <span style={page.statNumber}>Dashboard</span>
              <span style={page.statLabel}>Track sessions & payments</span>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section style={{ ...page.section, paddingTop: "1rem" }}>
        <h2 style={page.sectionTitle}>What you can do on StudyBuddy</h2>
        <p style={page.sectionSub}>
          The platform is built to make learning simple and transparent for
          everyone – students, parents and tutors.
        </p>

        <div style={page.featureGrid}>
          <div style={page.card}>
            <h3 style={page.cardTitle}>Smart tutor matching</h3>
            <p style={page.cardText}>
              Students can browse tutor profiles, subjects and pricing to find
              the right fit for their learning style and budget.
            </p>
          </div>

          <div style={page.card}>
            <h3 style={page.cardTitle}>Easy booking & scheduling</h3>
            <p style={page.cardText}>
              Book 1:1 online sessions, choose time slots that work, and receive
              automatic reminders so you never miss a class.
            </p>
          </div>

          <div style={page.card}>
            <h3 style={page.cardTitle}>
              Progress tracking
              <span style={page.badge}>Coming soon</span>
            </h3>
            <p style={page.cardText}>
              Students and parents get a simple view of completed sessions,
              topics covered and upcoming plans.
            </p>
          </div>

          <div style={page.card}>
            <h3 style={page.cardTitle}>Secure payments</h3>
            <p style={page.cardText}>
              Tutors are paid fairly and on time, while parents enjoy transparent
              pricing and receipts for every session.
            </p>
          </div>
        </div>
      </section>

      {/* FOR STUDENTS & TUTORS */}
      <section style={{ ...page.section, paddingTop: "1rem" }}>
        <h2 style={page.sectionTitle}>Built for students & tutors</h2>
        <div style={page.twoCol}>
          <div style={page.card}>
            <h3 style={page.cardTitle}>For students & parents</h3>
            <ul style={page.list}>
              <li style={page.listItem}>
                <span style={page.bullet} />
                Get personalised 1:1 support in school subjects and exam prep.
              </li>
              <li style={page.listItem}>
                <span style={page.bullet} />
                Ask unlimited doubts during live sessions.
              </li>
              <li style={page.listItem}>
                <span style={page.bullet} />
                Choose tutors based on experience, reviews and availability.
              </li>
              <li style={page.listItem}>
                <span style={page.bullet} />
                Track all sessions and payments in one place.
              </li>
            </ul>
          </div>

          <div style={page.card}>
            <h3 style={page.cardTitle}>For tutors</h3>
            <ul style={page.list}>
              <li style={page.listItem}>
                <span style={page.bullet} />
                Create a clear profile with subjects, grades and hourly rate.
              </li>
              <li style={page.listItem}>
                <span style={page.bullet} />
                Receive booking requests from interested students.
              </li>
              <li style={page.listItem}>
                <span style={page.bullet} />
                Manage your schedule, sessions and payments from one dashboard.
              </li>
              <li style={page.listItem}>
                <span style={page.bullet} />
                Focus on teaching – we handle the tech.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SIMPLE CTA SECTION */}
      <section style={{ ...page.section, paddingTop: "1rem", paddingBottom: "2rem" }}>
        <div
          style={{
            ...page.card,
            display: "flex",
            flexDirection: "column",
            gap: "0.9rem",
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ ...page.sectionTitle, marginBottom: 0, fontSize: "1.4rem" }}>
            Ready to try StudyBuddy?
          </h2>
          <p style={page.cardText}>
            Create a free account in minutes. You can explore tutors, book your
            first session and start learning – all from this platform.
          </p>
          <div style={page.buttonRow}>
            <a href="/signup" style={page.primaryButton}>
              Get started as student
            </a>
            <a href="/apply-tutor" style={page.secondaryButton}>
              Apply as tutor
            </a>
          </div>
        </div>
      </section>

      <footer style={page.footer}>
        StudyBuddy · Frontend hosted on Vercel · Backend API on Render
      </footer>
    </main>
  );
}
