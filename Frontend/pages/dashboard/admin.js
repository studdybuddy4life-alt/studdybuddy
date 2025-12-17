import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <>
      <SignedIn>
        <div
          style={{
            minHeight: "100vh",
            background:
              "radial-gradient(circle at top, #020617 0%, #020617 100%)",
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
              Admin Dashboard
            </h1>
            <UserButton afterSignOutUrl="/" />
          </header>

          {/* ADMIN CONTROLS */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <DashboardCard
              title="👥 Users"
              text="View all students, tutors and parents."
              href="/dashboard/admin/users"
            />
            <DashboardCard
              title="📚 Classes"
              text="Manage all classes and schedules."
              href="/dashboard/admin/classes"
            />
            <DashboardCard
              title="💬 All Chats"
              text="Monitor all conversations."
              href="/dashboard/messages"
            />
            <DashboardCard
              title="⏰ Timings"
              text="View tutor availability and session logs."
              href="/dashboard/admin/timings"
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
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          padding: "1.4rem",
          borderRadius: "1.2rem",
          background:
            "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
          border: "1px solid rgba(56,189,248,0.25)",
          boxShadow: "0 16px 32px rgba(15,23,42,0.8)",
          cursor: "pointer",
          color: "white",
        }}
      >
        <h3 style={{ fontSize: "1.05rem", marginBottom: "0.4rem" }}>
          {title}
        </h3>
        <p style={{ fontSize: "0.9rem", color: "rgba(226,232,240,0.9)" }}>
          {text}
        </p>
      </div>
    </Link>
  );
}
