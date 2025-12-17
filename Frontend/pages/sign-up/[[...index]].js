import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
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
      <div style={{ width: "100%", maxWidth: "420px" }}>
        {/* LOGO + HEADER */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Image
            src="/studybuddy-logo.svg"
            alt="StudyBuddy"
            width={60}
            height={60}
          />
          <h1 style={{ color: "white", marginTop: "0.6rem" }}>
            Create your StudyBuddy account
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
            Start learning Science, Maths & Technology — the smart way.
          </p>
        </div>

        <SignUp
          redirectUrl="/dashboard"
          appearance={{
            variables: {
              colorPrimary: "#38bdf8",
              colorBackground: "#020617",
              colorText: "#e5e7eb",
              colorTextSecondary: "#cbd5e1",
              borderRadius: "12px",
            },
            elements: {
              card: {
                background: "#020617",
                boxShadow: "0 30px 80px rgba(15,23,42,0.9)",
              },
              headerTitle: {
                color: "#f8fafc",
              },
              headerSubtitle: {
                color: "#cbd5e1",
              },
              formFieldLabel: {
                color: "#e5e7eb",
              },
              formFieldInput: {
                backgroundColor: "#ffffff",
                color: "#020617",
              },
              otpCodeFieldInput: {
                backgroundColor: "#ffffff",
                color: "#020617",
                border: "1px solid #38bdf8",
              },
              footer: {
                display: "none",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
