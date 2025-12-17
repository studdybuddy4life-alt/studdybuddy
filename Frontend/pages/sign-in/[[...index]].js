import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
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
          width: "100%",
          maxWidth: "420px",
          padding: "2rem",
          borderRadius: "1.5rem",
          background:
            "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(30,41,59,0.96))",
          border: "1px solid rgba(56,189,248,0.35)",
          boxShadow: "0 30px 80px rgba(15,23,42,0.9)",
        }}
      >
        {/* LOGO */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Image
            src="/studybuddy-logo.svg"
            alt="StudyBuddy"
            width={64}
            height={64}
          />
          <h1 style={{ color: "white", marginTop: "0.6rem" }}>
            Sign in to StudyBuddy
