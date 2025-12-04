// Frontend/pages/index.js
// StudyBuddy landing page with logo, About, Reviews & Contact

import Image from "next/image";

export default function Home() {
  const styles = {
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
    shell: {
      width: "100%",
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 1.5rem 3rem",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.4rem 1.5rem 0.8rem",
      borderBottom: "1px solid rgba(30,41,59,1)",
      position: "sticky",
      top: 0,
      zIndex: 20,
      background:
        "linear-gradient(to bottom, rgba(15,23,42,0.98), rgba(15,23,42,0.9), rgba(15,23,42,0.85))",
      backdropFilter: "blur(16px)",
    },
    navLeft: { display: "flex", alignItems: "center", gap: "0.6rem" },
    brandName: {
      fontWeight: 700,
      fontSize: "1.1rem",
      letterSpacing: "0.03em",
    },
    navLinks: {
      display: "flex",
      gap: "1rem",
      fontSize: "0.9rem",
      color: "rgba(148,163,184,0.9)",
    },
    navLink: {
      textDecoration: "none",
      cursor: "pointer",
    },
    section: {
      paddingTop: "2.5rem",
    },
    heroLayout: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      alignItems: "flex-start",
      marginTop: "2.5rem",
    },
    heroTitle: {
      fontSize: "2.6rem",
      lineHeight: 1.1,
      fontWeight: 800,
    },
    heroHighlight: {
      color: "#38bdf8",
    },
    heroSub: {
      fontSize: "1.05rem",
      maxWidth: "640px",
      color: "rgba(226,232,240,0.9)",
    },
    pillRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginTop: "0.4rem",
    },
    pill: {
      fontSize: "0.78rem",
      padding: "0.3rem 0.8rem",
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
      padding: "0.8rem 1.6rem",
      borderRadius: "999px",
      border: "none",
      background:
        "linear-gradient(135deg, #38bdf8, #6366f1, #a855f7)",
      color: "white",
      fontWeight: 600,
      fontSize: "0.95rem",
      cursor: "pointer",
      textDecoration: "none",
      boxShadow: "0 12px 22px rgba(15,23,42,0.8)",
    },
    secondaryButton: {
      padding: "0.8rem 1.6rem",
      borderRadius: "999px",
      border: "1px solid rgba(148,163,184,0.7)",
      backgroundColor: "rgba(15,23,42,0.9)",
      color: "rgba(226,232,240,0.9)",
      fontWeight: 500,
      fontSize: "0.95rem",
      cursor: "pointer",
      textDecoration: "none",
    },
    statBar: {
      marginTop: "2.2rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "1rem",
      padding: "1.1rem 1.25rem",
      borderRadius: "1rem",
      background:
        "radial-gradient(circle at top left, rgba(56,189,248,0.16), transparent 60%), radial-gradient(circle at bottom right, rgba(129,140,248,0.18), transparent 60%)",
      border: "1px solid rgba(51,65,85,0.8)",
    },
    statItem: { display: "flex", flexDirection: "column", gap: "0.15rem" },
    statNumber: { fontWeight: 700, fontSize: "1.05rem" },
    statLabel: {
      fontSize: "0.8rem",
      color: "rgba(148,163,184,0.9)",
    },
    sectionTitle: {
      fontSize: "1.7rem",
      fontWeight: 700,
      marginBottom: "0.6rem",
    },
    sectionSub: {
      fontSize: "0.95rem",
      color: "rgba(148,163,184,0.96)",
      maxWidth: "670px",
      marginBottom: "1.6rem",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "1.6rem",
      marginTop: "0.5rem",
    },
    card: {
      borderRadius: "1.2rem",
      padding: "1.3rem 1.2rem",
      background:
        "linear-gradient(145deg, rgba(15,23,42,0.9), rgba(15,23,42,1))",
      border: "1px solid rgba(51,65,85,0.95)",
    },
    cardTitle: { fontSize: "1.02rem", fontWeight: 600, marginBottom: "0.4rem" },
    cardText: {
      fontSize: "0.9rem",
      color: "rgba(148,163,184,0.96)",
    },
    tag: {
      fontSize: "0.75rem",
      padding: "0.2rem 0.55rem",
      borderRadius: "999px",
      backgroundColor: "rgba(34,197,94,0.15)",
      color: "#4ade80",
      marginLeft: "0.3rem",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: "0.6rem 0 0",
      display: "flex",
      flexDirection: "column",
      gap: "0.45rem",
    },
    listItem: {
      display: "flex",
      gap: "0.4rem",
      fontSize: "0.9rem",
      color: "rgba(148,163,184,0.95)",
    },
    bullet: {
      width: "0.42rem",
      height: "0.42rem",
      marginTop: "0.3rem",
      borderRadius: "999px",
      background:
        "linear-gradient(135deg, #38bdf8, #6366f1)",
      flexShrink: 0,
    },
    reviewGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "1.3rem",
    },
    reviewCard: {
      borderRadius: "1.1rem",
      padding: "1.1rem 1.1rem",
      background:
        "radial-gradient(circle at top, rgba(52,211,153,0.12), rgba(15,23,42,1))",
      border: "1px solid rgba(34,197,94,0.35)",
    },
    reviewName: {
      marginTop: "0.7rem",
      fontSize: "0.85rem",
      color: "rgba(148,163,184,0.9)",
    },
    starRow: {
      display: "flex",
      gap: "0.12rem",
      fontSize: "0.95rem",
      color: "#facc15",
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1.3fr)",
      gap: "1.6rem",
      alignItems: "flex-start",
    },
    contactInfoBox: {
      ...this?.card,
    },
    contactLine: {
      fontSize: "0.9rem",
      color: "rgba(148,163,184,0.95)",
      marginBottom: "0.4rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    label: {
      fontSize: "0.8rem",
      marginBottom: "0.1rem",
      color: "rgba(148,163,184,0.95)",
    },
    input: {
      width: "100%",
      padding: "0.6rem 0.75rem",
      borderRadius: "0.7rem",
      border: "1px solid rgba(51,65,85,1)",
      backgroundColor: "rgba(15,23,42,0.95)",
      color: "white",
      fontSize: "0.9rem",
    },
    textarea: {
      width: "100%",
      minHeight: "120px",
      padding: "0.7rem 0.75rem",
      borderRadius: "0.7rem",
      border: "1px solid rgba(51,65,85,1)",
      backgroundColor: "rgba(15,23,42,0.95)",
      color: "white",
      fontSize: "0.9rem",
      resize: "vertical",
    },
    footer: {
      borderTop: "1px solid rgba(30,41,59,1)",
      padding: "1rem 1.5rem 1.4rem",
      marginTop: "1rem",
      fontSize: "0.78rem",
      color: "rgba(148,163,184,0.85)",
      textAlign: "center",
    },
  };

  const reviews = [
    {
      quote:
        "The sessions are clear, friendly and focused on exam questions. My child finally feels confident in biology again.",
      who: "Parent of Grade 11 student – USA",
    },
    {
      quote:
        "I love how doubts are solved step by step with real-life examples. It feels like having a personal guide for NEET prep.",
      who: "NEET aspirant – online learner",
    },
    {
      quote:
        "As a tutor, I appreciate that students come prepared and motivated. The platform makes scheduling and follow-up simple.",
      who: "StudyBuddy biology tutor",
    },
  ];

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
            width={36}
            height={36}
            priority
          />
          <span style={styles.brandName}>StudyBuddy</span>
        </div>
        <nav style={styles.navLinks}>
          <button
            type="button"
            style={{ ...styles.navLink, background: "none", border: "none" }}
            onClick={() => handleNavClick("about")}
          >
            About
          </button>
          <button
            type="button"
            style={{ ...styles.navLink, background: "none", border: "none" }}
            onClick={() => handleNavClick("reviews")}
          >
            Reviews
          </button>
          <button
            type="button"
            style={{ ...styles.navLink, background: "none", border: "none" }}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </button>
        </nav>
      </header>

      <div style={styles.shell}>
        {/* HERO */}
        <section style={styles.section}>
          <div style={styles.heroLayout}>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(148,163,184,0.9)",
              }}
            >
              Personalised 1:1 online tutoring for school students & NEET
              aspirants.
            </p>

            <h1 style={styles.heroTitle}>
              Your{" "}
              <span style={styles.heroHighlight}>trusted mentor</span> for
              science success.
            </h1>

            <p style={styles.heroSub}>
              StudyBuddy connects motivated students with an experienced biology
              mentor who has several years of teaching advanced school biology
              and competitive exam courses, plus a strong research background in
              biotechnology and life sciences.
            </p>

            <div style={styles.pillRow}>
              <span style={styles.pill}>6+ years teaching experience</span>
              <span style={styles.pill}>Biology & NEET preparation</span>
              <span style={styles.pill}>Research & publications</span>
              <span style={styles.pill}>Interactive doubt-solving</span>
            </div>

            <div style={styles.buttonRow}>
              <a href="/signup" style={styles.primaryButton}>
                🎓 Book a free intro session
              </a>
              <a href="/apply-tutor" style={styles.secondaryButton}>
                🧑‍🏫 Join as a tutor (coming soon)
              </a>
            </div>

            <div style={styles.statBar}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>1-to-1</span>
                <span style={styles.statLabel}>Live biology sessions</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>Exam-focused</span>
                <span style={styles.statLabel}>NEET & school boards</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>Concept + practice</span>
                <span style={styles.statLabel}>Notes, PYQs & tests</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>Flexible</span>
                <span style={styles.statLabel}>Online & reschedulable</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & MENTOR */}
        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About StudyBuddy</h2>
          <p style={styles.sectionSub}>
            StudyBuddy is built around a simple idea: combine strong subject
            expertise with patient mentoring so that students not only score
            well, but also enjoy learning biology. The lead mentor behind
            StudyBuddy has several years of experience teaching high-school and
            entrance-exam biology to learners across India and international
            online classrooms, along with hands-on lab and research work in
            microbiology, molecular biology and food science.
          </p>

          <div style={styles.twoCol}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Lead Biology Mentor<span style={styles.tag}>Expert guide</span>
              </h3>
              <p style={styles.cardText}>
                Your mentor has taught thousands of students in online and
                offline classrooms, delivered structured courses for board exams
                and medical entrance preparation, and guided learners through
                everything from basics to high-level problem solving. Their
                background includes postgraduate training in biotechnology and
                laboratory experience with modern techniques like PCR, DNA/RNA
                isolation and chromatographic analysis.
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  6+ years teaching biology for senior secondary and entrance
                  exams.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Experience working with online learning platforms, coaching
                  institutes and individual home tutoring.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Research and publications in the area of functional foods and
                  antioxidant properties.
                </li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>How sessions are structured</h3>
              <p style={styles.cardText}>
                Sessions are interactive and exam-oriented. Each class blends
                concept explanation with diagrams, flow-charts, memory tricks
                and high-quality questions. Students receive guidance on what to
                study, how to revise and how to attempt questions under time
                pressure.
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Diagnostic discussion to identify your current level.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Customized study plan with topic-wise milestones.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Regular practice sheets, doubt-clearing and test discussion.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Honest feedback with focus on building confidence.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" style={styles.section}>
          <h2 style={styles.sectionTitle}>What learners say</h2>
          <p style={styles.sectionSub}>
            Here are a few words from students, parents and tutors who have
            worked with the mentor behind StudyBuddy.
          </p>

          <div style={styles.reviewGrid}>
            {reviews.map((r, idx) => (
              <article key={idx} style={styles.reviewCard}>
                <div style={styles.starRow}>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "0.5rem",
                    color: "rgba(226,232,240,0.92)",
                  }}
                >
                  {r.quote}
                </p>
                <p style={styles.reviewName}>{r.who}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact us</h2>
          <p style={styles.sectionSub}>
            Have a question about classes, availability or pricing? Share your
            details and we&apos;ll get in touch with you. You can also use the
            form to request a demo class or discuss a custom study plan.
          </p>

          <div style={styles.contactGrid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Quick info</h3>
              <p style={styles.cardText}>
                StudyBuddy currently offers online 1:1 sessions for school
                biology and NEET-oriented biology. All classes are conducted
                live over secure video platforms with digital notes and doubt-
                solving.
              </p>
              <div style={{ marginTop: "0.7rem" }}>
                <p style={styles.contactLine}>
                  📍 Online from India – available for students across time
                  zones.
                </p>
                <p style={styles.contactLine}>
                  ⏰ Flexible evening and weekend slots (IST).
                </p>
                <p style={styles.contactLine}>
                  ✉️ For direct queries, you can also write to us via this form.
                </p>
              </div>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Send us a message</h3>
              <form
                style={styles.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you for contacting StudyBuddy! This form is a demo UI – you can connect the backend later."
                  );
                }}
              >
                <div>
                  <label style={styles.label} htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    style={styles.input}
                    required
                  />
                </div>
                <div>
                  <label style={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    style={styles.input}
                    required
                  />
                </div>
                <div>
                  <label style={styles.label} htmlFor="grade">
                    Grade / exam
                  </label>
                  <input
                    id="grade"
                    name="grade"
                    type="text"
                    placeholder="e.g. Grade 11, NEET 2026"
                    style={styles.input}
                  />
                </div>
                <div>
                  <label style={styles.label} htmlFor="message">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Share your goals, topics or doubts…"
                    style={styles.textarea}
                    required
                  />
                </div>
                <button type="submit" style={styles.primaryButton}>
                  Submit enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <footer style={styles.footer}>
        StudyBuddy · Frontend hosted on Vercel · Backend API on Render
      </footer>
    </main>
  );
}
