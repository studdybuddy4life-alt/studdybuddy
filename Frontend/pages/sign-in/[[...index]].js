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
      {/* LOGO + TITLE */}
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Image
            src="/studybuddy-logo.svg"
            alt="StudyBuddy"
            width={60}
            height={60}
          />
          <h2 style={{ color: "#f8fafc", marginTop: "0.6rem" }}>
            Sign in to StudyBuddy
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
            Continu
