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
    },
    navLink: {
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      background: "none",
      padding: 0,
      color: "inherit",
    },
    section: {
      paddingTop: "2.6rem",
    },
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
    heroHighlight: {
      color: "#38bdf8",
    },
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
    heroCard: {
      borderRadius: "1.5rem",
      padding: "1.4rem 1.3rem",
      background:
        "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(30,64,175,0.8))",
      border: "1px solid rgba(56,189,248,0.25)",
      boxShadow: "0 18px 40px rgba(15,23,42,0.9)",
    },
    heroCardTitle: {
      fontSize: "0.95rem",
      fontWeight: 600,
      marginBottom: "0.3rem",
    },
    heroCardText: {
      fontSize: "0.85rem",
      color: "rgba(226,232,240,0.9)",
    },
    statBar: {
      marginTop: "2rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "1rem",
      padding: "1.1rem 1.25rem",
      borderRadius: "1.1rem",
      background:
        "radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 60%), radial-gradient(circle at bottom right, rgba(34,197,94,0.16), transparent 60%)",
      border: "1px solid rgba(51,65,85,0.85)",
    },
    statItem: { display: "flex", flexDirection: "column", gap: "0.15rem" },
    statNumber: { fontWeight: 700, fontSize: "1.05rem" },
    statLabel: {
      fontSize: "0.8rem",
      color: "rgba(148,163,184,0.92)",
    },
    sectionTitle: {
      fontSize: "1.7rem",
      fontWeight: 700,
      marginBottom: "0.6rem",
    },
    sectionSub: {
      fontSize: "0.95rem",
      color: "rgba(148,163,184,0.96)",
      maxWidth: "690px",
      marginBottom: "1.6rem",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
      gap: "1.6rem",
      marginTop: "0.5rem",
    },
    card: {
      borderRadius: "1.25rem",
      padding: "1.3rem 1.25rem",
      background:
        "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(15,23,42,1))",
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
      backgroundColor: "rgba(15,23,42,0.97)",
      color: "white",
      fontSize: "0.9rem",
    },
    textarea: {
      width: "100%",
      minHeight: "120px",
      padding: "0.7rem 0.75rem",
      borderRadius: "0.7rem",
      border: "1px solid rgba(51,65,85,1)",
      backgroundColor: "rgba(15,23,42,0.97)",
      color: "white",
      fontSize: "0.9rem",
      resize: "vertical",
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

  const reviews = [
    {
      quote:
        "Science finally feels simple. The tutor connects physics and maths with real-life examples, which keeps me interested.",
      who: "Aarav, Grade 9 – STEM learner",
    },
    {
      quote:
        "I was scared of calculus and coding. With step-by-step guidance and fun practice problems, I now look forward to our sessions.",
      who: "Maya, undergraduate engineering student",
    },
    {
      quote:
        "The platform helped my child strengthen fundamentals in maths and science while still having fun. The tutor is patient and very clear.",
      who: "Parent of Grade 7 student",
    },
    {
      quote:
        "As a working professional revisiting technology after years, I appreciate how concepts are explained from basics to advanced.",
      who: "Sam, master’s-level learner",
    },
    {
      quote:
        "Smooth scheduling, clear notes and exam-type questions. StudyBuddy made my NEET physics and biology revision much easier.",
      who: "Riya, NEET aspirant",
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
          <button
            type="button"
            style={styles.navLink}
            onClick={() => handleNavClick("about")}
          >
            About
          </button>
          <button
            type="button"
            style={styles.navLink}
            onClick={() => handleNavClick("reviews")}
          >
            Reviews
          </button>
          <button
            type="button"
            style={styles.navLink}
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
                StudyBuddy brings together a team of 25+ elite tutors in
                Science, Maths and Technology to support learners from their
                first school concepts to advanced university topics. From
                homework help and concept clarity to exam preparation and
                project guidance – we stay with you at every stage.
              </p>

              <div style={styles.pillRow}>
                <span style={styles.pill}>25+ experienced STEM tutors</span>
                <span style={styles.pill}>
                  K–12, undergraduate & master&apos;s support
                </span>
                <span style={styles.pill}>
                  Concept clarity + practice + fun activities
                </span>
                <span style={styles.pill}>Homework, exams & projects</span>
              </div>

              <div style={styles.buttonRow}>
                <a href="/signup" style={styles.primaryButton}>
                  🎓 Start learning – it&apos;s fun & structured
                </a>
                <a href="/apply-tutor" style={styles.secondaryButton}>
                  🧑‍🏫 Join the elite tutor team
                </a>
              </div>
            </div>

            <aside style={styles.heroCard}>
              <h3 style={styles.heroCardTitle}>
                From first formulas to final thesis
              </h3>
              <p style={styles.heroCardText}>
                Whether you&apos;re learning fractions, mastering calculus,
                exploring robotics, revising physics, coding in Python or
                writing a research project – StudyBuddy is designed to walk with
                you at every step. We believe learning should feel like progress
                and play, not pressure.
              </p>
              <p
                style={{
                  ...styles.heroCardText,
                  marginTop: "0.6rem",
                  fontStyle: "italic",
                }}
              >
                “From your first &apos;why&apos; to your final &apos;wow&apos;,
                we&apos;re by your side in learning.”
              </p>
            </aside>
          </div>

          <div style={styles.statBar}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>25+ tutors</span>
              <span style={styles.statLabel}>Handpicked STEM educators</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>K–12 to Master&apos;s</span>
              <span style={styles.statLabel}>
                School, university & professional learners
              </span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>Fun + rigorous</span>
              <span style={styles.statLabel}>
                Games, puzzles & exam-level questions
              </span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>Global timings</span>
              <span style={styles.statLabel}>
                Weekday slots 4–10 PM EST · Flexible weekends
              </span>
            </div>
          </div>
        </section>

        {/* ABOUT & TUTORS */}
        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About StudyBuddy & our tutors</h2>
          <p style={styles.sectionSub}>
            StudyBuddy is a collaborative space where curious learners meet
            patient, expert tutors in Science, Maths and Technology. Our team
            includes educators with strong academic backgrounds, industry
            exposure and experience teaching school, college and competitive
            exam batches. The focus: clarity, confidence and a little bit of fun
            in every class.
          </p>

          <div style={styles.twoCol}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Lead academic mentors<span style={styles.tag}>25+ tutors</span>
              </h3>
              <p style={styles.cardText}>
                Behind StudyBuddy is a lead group of experienced tutors who have
                taught in online platforms, coaching institutes and individual
                mentoring setups. They bring together expertise across physics,
                chemistry, biology, mathematics, computer science and
                engineering basics, as well as experience guiding master&apos;s
                dissertations and technical projects.
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Structured support from early grades to university and
                  professional learning.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Lesson design that blends explanations, diagrams, practice
                  questions and memory tools.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Guidance for competitive exams, lab courses and project work.
                </li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>How we keep learning fun</h3>
              <p style={styles.cardText}>
                Every session balances serious learning with curiosity and play.
                Tutors use puzzles, quick quizzes, mini challenges and real-
                world stories to make STEM topics feel alive. Students are
                encouraged to ask questions, try, fail and try again.
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Visual explanations and interactive problem solving.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Short concept games and &quot;challenge of the day&quot; tasks.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.bullet} />
                  Balanced focus on fundamentals, exams and curiosity projects.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" style={styles.section}>
          <h2 style={styles.sectionTitle}>What learners say</h2>
          <p style={styles.sectionSub}>
            A few words from students, parents and adult learners who have
            studied with tutors on StudyBuddy.
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
            Have a question about subjects, slots or pricing? Share your
            details and we&apos;ll reach out. You can also request a demo class
            or a tailored study plan for Science, Maths or Technology.
          </p>

          <div style={styles.contactGrid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Quick info</h3>
              <p style={styles.cardText}>
                Sessions are delivered 1:1 online with secure video tools and
                shared digital notes. We support school boards, university
                courses and entrance prep with flexible schedules.
              </p>
              <div style={{ marginTop: "0.7rem" }}>
                <p style={styles.contactLine}>
                  📍 Online – available across time zones.
                </p>
                <p style={styles.contactLine}>
                  ⏰ Typical weekday slots: 4 PM – 10 PM EST · Weekends flexible
                  on request.
                </p>
                <p style={styles.contactLine}>
                  🧩 Subjects: Science, Maths and Technology from K–12 to
                  master&apos;s level.
                </p>
                <p style={styles.contactLine}>
                  💬 Motto: &quot;We&apos;re with you at every stage of
                  learning.&quot;
                </p>
              </div>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Send us a message</h3>
              <form
  style={styles.form}
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      grade: e.target.grade.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Your message has been sent successfully!");
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to server. Try again later.");
    }
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
                    Grade / level / exam
                  </label>
                  <input
                    id="grade"
                    name="grade"
                    type="text"
                    placeholder="e.g. Grade 8, BSc, Master’s, NEET"
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
        StudyBuddy · Learn smarter, grow stronger · Frontend on Vercel · Backend
        API on Render
      </footer>
    </main>
  );
}
