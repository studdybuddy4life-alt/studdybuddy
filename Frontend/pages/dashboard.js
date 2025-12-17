import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";

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
            />
            <DashboardCard
              title="📈 Progress"
              text="Track improvement across topics and tests."
            />
            <DashboardCard
              title="💬 Messages"
              text="Chat with tutors and get doubt resolution."
            />
            <DashboardCard
              title="🗓 Class Schedule"
              text="Upcoming live classes and booked sessions."
            />
          </section>

          {/* PASSWORD NOTICE */}
          <PasswordNotice />
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function DashboardCard({ title, text }) {
  return (
    <div
      style={{
        padding: "1.4rem",
        borderRadius: "1.2rem",
        background:
          "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
        border: "1px solid rgba(56,189,248,0.25)",
        boxShadow: "0 16px 32px rgba(15,23,42,0.8)",
      }}
    >
      <h3 style={{ fontSize: "1.05rem", marginBottom: "0.4rem" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "rgba(226,232,240,0.9)" }}>
        {text}
      </p>
    </div>
  );
}

function PasswordNotice() {
  return (
    <div
      style={{
        marginTop: "2.5rem",
        padding: "1rem 1.2rem",
        borderRadius: "1rem",
        background:
          "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(56,189,248,0.18))",
        border: "1px solid rgba(56,189,248,0.4)",
      }}
    >
      <strong>🔐 Optional: Set a password</strong>
      <p style={{ fontSize: "0.85rem", marginTop: "0.3rem" }}>
        You signed in using OTP or Google. You can optionally set a password
        from your account settings for faster future logins.
      </p>
    </div>
  );
}
