import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <div
          style={{
            minHeight: "100vh",
            background:
              "radial-gradient(circle at top, #0f172a 0%, #020617 60%, #020617 100%)",
            color: "white",
            padding: "2rem",
          }}
        >
          {/* HEADER */}
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h1 style={{ fontSize: "1.8rem", fontWeight: 700 }}>
              User Dashboard
            </h1>
            <UserButton afterSignOutUrl="/" />
          </header>

          {/* CONTENT */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <DashboardCard
              title="📚 Courses"
              text="View enrolled subjects, lessons and progress."
              href="/dashboard/courses"
            />
            <DashboardCard
              title="📈 Progress"
              text="Track improvement across topics and tests."
              href="/dashboard/progress"
            />
            <DashboardCard
              title="💬 Messages"
              text="Chat with tutors and get doubt resolution."
              href="/dashboard/messages"
            />
            <DashboardCard
              title="🗓 Class Schedule"
              text="Upcoming live classes and booked sessions."
              href="/dashboard/schedule"
            />
          </section>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function DashboardCard({ title, text, href }) {
  return (
    <a
      href={href}
      style={{
        padding: "1.4rem",
        borderRadius: "1.2rem",
        background:
          "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
        border: "1px solid rgba(56,189,248,0.25)",
        boxShadow: "0 16px 32px rgba(15,23,42,0.8)",
        textDecoration: "none",
        color: "white",
        cursor: "pointer",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        display: "block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(15,23,42,0.95)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow =
          "0 16px 32px rgba(15,23,42,0.8)";
      }}
    >
      <h3 style={{ fontSize: "1.05rem", marginBottom: "0.4rem" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "rgba(226,232,240,0.9)" }}>
        {text}
      </p>
    </a>
  );
}
