import { SignUp } from "@clerk/nextjs";

export default function Signup() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 55%, #020617 100%)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: 420,
          width: "100%",
          padding: "2rem",
          borderRadius: "1.5rem",
          background:
            "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
          border: "1px solid rgba(56,189,248,0.3)",
          boxShadow: "0 30px 80px rgba(15,23,42,0.9)",
        }}
      >
        <h1
          style={{
            fontSize: "1.7rem",
            fontWeight: 700,
            color: "white",
            marginBottom: "0.3rem",
          }}
        >
          Create your StudyBuddy account
        </h1>

        <p
          style={{
            fontSize: "0.9rem",
            color: "rgba(148,163,184,0.95)",
            marginBottom: "1.2rem",
          }}
        >
          Start learning Science, Maths & Technology — the smart way.
        </p>

        <SignUp
          appearance={{
            variables: {
              colorPrimary: "#38bdf8",
              colorText: "#e5e7eb",
              colorBackground: "#020617",
              borderRadius: "12px",
            },
            elements: {
              card: {
                background: "transparent",
                boxShadow: "none",
              },
              footer: { display: "none" },
            },
          }}
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
}
